import{d as P,f as b,w,u as $,o as u,m,n as t,p as s,a as _,v as N,z as E,J as D,b as G,L,G as d,F as y,I as M,K as k,x as A,am as g,an as R,ao as T,ap as j,q as Z,s as z,aq as K,ak as V,ar as Q,as as W,at as O,Q as X,au as Y,ag as ee,av as ue}from"./vendore0826c25.js";const te={class:"w-full"},ne={key:2,class:"text-mini text-tips mt-mini"},ae=P({name:"index",props:{data:null,config:null,span:{default:"0:24 640:12 1024:8 1920:6"},labelWidth:{default:120}},emits:["update:data"],setup(v,{expose:c,emit:F}){const i=v,a=b(i.data);w(a,()=>{F("update:data",a)},{deep:!0}),w(i.data,()=>{a.value=$(i.data)},{deep:!0});const p=b();function n(){var o;return(o=p.value)==null?void 0:o.validate()}function f(){var o;(o=p.value)==null||o.restoreValidation()}return c({validate:n,restoreValidation:f}),(o,x)=>{const C=g,B=R,r=T,H=j,U=Z,q=z,I=K;return u(),m(I,{ref_key:"form",ref:p,model:a.value,inline:""},{default:t(()=>[s(q,{"x-gap":24,"y-gap":12,"item-responsive":!0},{default:t(()=>[(u(!0),_(y,null,N(v.config,(e,J)=>(u(),m(U,{key:J,span:e.hidden?0:e.span||v.span},{default:t(()=>[s(H,E({label:e.label,path:e.key},e.itemProps,D(e.itemListeners)),{default:t(()=>{var S;return[G("div",te,[e.type==="slot"?L(o.$slots,e.slotName,{key:0}):d("",!0),e.type==="component"?(u(),_(y,{key:1},[typeof e.component=="string"&&e.component==="NDatePicker"||typeof e.component!="string"&&e.component.name==="DatePicker"?(u(),m(C,E({key:0,"formatted-value":a.value[e.key],"onUpdate:formatted-value":l=>a.value[e.key]=l,"value-format":((S=e==null?void 0:e.props)==null?void 0:S["value-format"])||"TT"},e.props,D(e.listeners)),null,16,["formatted-value","onUpdate:formatted-value","value-format"])):(u(),m(M(e.component),E({key:1,value:a.value[e.key],"onUpdate:value":l=>a.value[e.key]=l},e.props,D(e.listeners)),{default:t(()=>[typeof e.component!="string"&&e.component.name==="RadioGroup"?(u(!0),_(y,{key:0},N(e.options,(l,h)=>(u(),m(B,{key:h,value:l.value},{default:t(()=>[k(A(l.label),1)]),_:2},1032,["value"]))),128)):d("",!0),typeof e.component!="string"&&e.component.name==="CheckboxGroup"?(u(!0),_(y,{key:1},N(e.options,(l,h)=>(u(),m(r,{key:h,value:l.value,label:l.label},null,8,["value","label"]))),128)):d("",!0)]),_:2},1040,["value","onUpdate:value"]))],64)):d("",!0),e.tips?(u(),_("div",ne," tips: "+A(e.tips),1)):d("",!0)])]}),_:2},1040,["label","path"])]),_:2},1032,["span"]))),128))]),_:3})]),_:3},8,["model"])}}}),oe={class:"flex justify-end"},le=k(" \u53BB\u9664\u9A8C\u8BC1 "),se=k(" \u9A8C\u8BC1 "),re=P({name:"basic",setup(v){const c=b({slotValue:"",test:1,input:"input",radio:"BeiJing",check:[],timeStr:null,timestamp:null,formatDate:null}),F=[{type:"slot",key:"slotValue",label:"label",slotName:"testSlot",itemProps:{rule:[{required:!0,trigger:["blur"],message:"\u8BF7\u8F93\u5165..."}]}},{type:"component",label:"Component",component:Q,key:"test",tips:"\u770B\u770B\u63A7\u5236\u53F0\u7684\u4E8B\u4EF6\u89E6\u53D1",props:{options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}],onBlur:()=>{console.log("onBlur")}},listeners:{focus:()=>{console.log("focus")}}},{type:"component",component:V,key:"input",label:"\u8868\u5355\u9A8C\u8BC1\u5217",itemProps:{rule:[{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165"},{max:10,trigger:["blur","input"],message:"\u6700\u592710\u4F4D"},{trigger:["blur","input"],validator(p,n){return n.length===5?new Error("\u4E0D\u80FD\u662F\u4E94\u4F4D"):!0}}]}},{type:"component",component:W,label:"\u5355\u9009\u6846\u7EC4",key:"radio",tips:"\u5355\u9009\u6846\u7EC4",options:[{value:"BeiJing",label:"\u5317\u4EAC"},{value:"ShangHai",label:"\u4E0A\u6D77"},{value:"ChenDu",label:"\u6210\u90FD"},{value:"ShenZhen",label:"\u6DF1\u5733"}]},{type:"component",component:O,label:"\u591A\u9009\u6846\u7EC4",key:"check",tips:"\u591A\u9009\u6846\u7EC4",options:[{value:"BeiJing",label:"\u5317\u4EAC"},{value:"ShangHai",label:"\u4E0A\u6D77"},{value:"ChenDu",label:"\u6210\u90FD"},{value:"ShenZhen",label:"\u6DF1\u5733"}]},{type:"component",component:g,label:"\u683C\u5F0F\u5316\u4E3A\u65F6\u95F4\u6233",key:"timestamp"},{type:"component",component:g,label:"\u683C\u5F0F\u5316\u4E3A\u5B57\u7B26\u4E32",key:"timeStr",tips:"\u8FD9\u4E2A\u5B57\u6BB5\u4F1A\u88AB\u683C\u5F0F\u5316\u4E3A yyyy-MM-dd HH:mm:ss \u683C\u5F0F",props:{"value-format":"yyyy-MM-dd HH:mm:ss"}},{type:"component",component:g,label:"\u65E5\u671F\u9009\u62E9\u683C\u5F0F\u5316",key:"formatDate",props:{type:"datetimerange"},listeners:{}},{type:"slot",slotName:"submit",span:24,itemProps:{showLabel:!1}}],i=b();async function a(){var p;await i.value.validate().catch(()=>{var n;return(n=window.$message)==null||n.error("\u4FE1\u606F\u672A\u5B8C\u5584"),Promise.reject(!1)}),(p=window.$message)==null||p.success("\u9A8C\u8BC1\u6210\u529F")}return(p,n)=>{const f=X,o=Y,x=ae,C=ee,B=ue;return u(),_("div",null,[s(x,{ref_key:"form",ref:i,data:c.value,"onUpdate:data":n[1]||(n[1]=r=>c.value=r),config:F},{testSlot:t(()=>[s($(V),{value:c.value.slotValue,"onUpdate:value":n[0]||(n[0]=r=>c.value.slotValue=r)},null,8,["value"])]),submit:t(()=>[G("div",oe,[s(o,null,{default:t(()=>{var r;return[s(f,{onClick:(r=i.value)==null?void 0:r.restoreValidation},{default:t(()=>[le]),_:1},8,["onClick"]),s(f,{onClick:a},{default:t(()=>[se]),_:1})]}),_:1})])]),_:1},8,["data"]),s(C),s(B,null,{default:t(()=>[k(A(c.value),1)]),_:1})])}}});export{re as default};
