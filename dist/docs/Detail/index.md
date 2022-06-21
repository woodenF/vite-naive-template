# Detail 详情 

## 使用
<DemoPreview compName="Detail" demoName="use" />

## 示例

<DemoPreview compName="Detail" demoName="basic" />

## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 源数据 | Object | - | - | - |
| config | 配置数据 | DetailConfig | - | - |
| span | 栅格系统,采用 naive ui grid span | number \| string | - | 0:24 640:12 1024:8 1920:6 |
| type | 展示形式 | 'top' \| 'left' | top、left | top |
| labelWidth | label 宽度, type 为 left 时有效 | number | - | 120 |
| hasColon | 是否自动补冒号, type 为 left 时有效 | boolean | - | true |

## DetailConfig

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 展示的类型 | 'component' \| 'slot' \| 'innerText' \| 'key' \| 'divider' | component、slot、innerText、key、divider | - |
| span | 同上 | number | - | - | - | - |
| label | 单列的 label 文案 | string | - | - | - | - |
| labelWidth | 同上 | number | - | 120 |
| hidden | 该列是否显示 | boolean | true、false | false |
| tips | 提示文案 | string | - | - |
| props | 不同 type 时注入到对应节点 | Record\<string, any\> | - | - |
| component | type 为 component 时有效，渲染的节点 | Component | - | - |
| listeners | type 为 component 时有效，注入到渲染节点的方法监听 | Function | - | - |
| slotName | type 为 slot 时有效，slot 的 name | string | - | - |
| innerText | type 为 innerText 时有效，展示的文本 | string | - | - |
| key | type 为 key 时有效，对应 data 中的字段，多层级用 . 隔开 | string | - | - |
| handler | type 为 key 时有效，处理显示的文本，返回的内容会展示 | Function | - | - |
| title | type 为 divider 时有效，显示的标题分割线 | string | - | - |
