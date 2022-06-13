export function blobToFile(blob: Blob, fileName: string) {
  return new File([blob], fileName, { type: blob.type });
}

export function getObjectURL(file: File | Blob | MediaSource) {
  return window.URL.createObjectURL(file);
}
