import{A as t,B as d,I as e,G as r,J as n,a2 as a}from"./vue.201ae94a.js";const o={class:"markdown-body"},l=n("h1",null,"Detail 详情",-1),i=n("h2",null,"使用",-1),s=n("h2",null,"示例",-1),h=a("<h2>Props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>源数据</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>config</td><td>配置数据</td><td>DetailConfig</td><td>-</td><td>-</td></tr><tr><td>span</td><td>栅格系统,采用 naive ui grid span</td><td>number | string</td><td>-</td><td>0:24 640:12 1024:8 1920:6</td></tr><tr><td>type</td><td>展示形式</td><td>‘top’ | ‘left’</td><td>top、left</td><td>top</td></tr><tr><td>labelWidth</td><td>label 宽度, type 为 left 时有效</td><td>number</td><td>-</td><td>120</td></tr><tr><td>hasColon</td><td>是否自动补冒号, type 为 left 时有效</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h2>DetailConfig</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>展示的类型</td><td>‘component’ | ‘slot’ | ‘innerText’ | ‘key’ | ‘divider’</td><td>component、slot、innerText、key、divider</td><td>-</td></tr><tr><td>span</td><td>同上</td><td>number</td><td>-</td><td>-</td></tr><tr><td>label</td><td>单列的 label 文案</td><td>string</td><td>-</td><td>-</td></tr><tr><td>labelWidth</td><td>同上</td><td>number</td><td>-</td><td>120</td></tr><tr><td>hidden</td><td>该列是否显示</td><td>boolean</td><td>true、false</td><td>false</td></tr><tr><td>tips</td><td>提示文案</td><td>string</td><td>-</td><td>-</td></tr><tr><td>props</td><td>不同 type 时注入到对应节点</td><td>Record&lt;string, any&gt;</td><td>-</td><td>-</td></tr><tr><td>component</td><td>type 为 component 时有效，渲染的节点</td><td>Component</td><td>-</td><td>-</td></tr><tr><td>listeners</td><td>type 为 component 时有效，注入到渲染节点的方法监听</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>slotName</td><td>type 为 slot 时有效，slot 的 name</td><td>string</td><td>-</td><td>-</td></tr><tr><td>innerText</td><td>type 为 innerText 时有效，展示的文本</td><td>string</td><td>-</td><td>-</td></tr><tr><td>key</td><td>type 为 key 时有效，对应 data 中的字段，多层级用 . 隔开</td><td>string</td><td>-</td><td>-</td></tr><tr><td>handler</td><td>type 为 key 时有效，处理显示的文本，返回的内容会展示</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>title</td><td>type 为 divider 时有效，显示的标题分割线</td><td>string</td><td>-</td><td>-</td></tr></tbody></table>",4),p={},m={name:"index",setup:(n,{expose:a})=>(a({frontmatter:{}}),(n,a)=>{const p=t("DemoPreview");return d(),e("div",o,[l,i,r(p,{compName:"Detail",demoName:"use"}),s,r(p,{compName:"Detail",demoName:"basic"}),h])})};export{m as default,p as frontmatter};
