import isFunction from 'lodash-es/isFunction';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { CropendResult } from './types';
import { blobToFile } from '@/utils';
import { debounce } from 'lodash-es';

interface Options {
  onShow?: () => void;
}

const DEBOUNCE_WAIT = 300;

const defaultOptions: Cropper.Options = {
  viewMode: 1,
  aspectRatio: 1,
  dragMode: 'move'
};

export default function(
  options: Options,
  cropperOptions: Cropper.Options = {},
  canvasOptions: Cropper.GetCroppedCanvasOptions = {}
) {
  const { onShow } = options;

  const cropperImg = ref<HTMLImageElement | null>();
  let cropper: Cropper | null = null;
  const cropendResult = ref<CropendResult | null>(null);

  function croppered() {
    if(!cropper) {
      return;
    }
    const cropperData = cropper.getData();
    const canvas = cropper.getCroppedCanvas(canvasOptions);
    canvas.toBlob((blob) => {
      if(!blob) {
        return;
      }
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onloadend = (e) => {
        cropendResult.value = {
          base64: e.target?.result as string ?? '',
          file: blobToFile(blob, `${new Date().getTime()}.${blob.type.split('/')[1]}`),
          cropperData
        };
      };
      fileReader.onerror = () => {
        cropendResult.value = {
          base64: '',
          cropperData: {} as any
        };
      };
    });
  }

  function initCropper() {
    const el = unref(cropperImg);
    console.log('initCropper', el);
    if(!el) {
      return;
    }
    cropper = new Cropper(el, {
      ...defaultOptions,
      ready() {
        debounceCroppered();
      },
      crop() {
        debounceCroppered();
      },
      ...cropperOptions
    });
  }

  onMounted(() => {
    if(isFunction(onShow)) {
      onShow();
    }
  });

  watch(cropperImg, () => {
    initCropper();
  }, { immediate: true });

  onUnmounted(() => {
    cropper?.destroy();
  });

  const debounceCroppered = debounce(croppered, DEBOUNCE_WAIT, {
    leading: true,
    trailing: true
  });
  return {
    cropperImg,
    cropendResult
  };
}
