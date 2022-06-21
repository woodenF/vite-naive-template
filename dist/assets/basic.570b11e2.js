var be=Object.defineProperty;var M=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var K=(e,a,o)=>a in e?be(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,P=(e,a)=>{for(var o in a||(a={}))pe.call(a,o)&&K(e,o,a[o]);if(M)for(var o of M(a))ve.call(a,o)&&K(e,o,a[o]);return e};import{_ as fe}from"./index.2d271f19.js";import{N as V}from"./Input.987d1cf8.js";import{H as ge,K as me,M as j,ai as t,ak as I,L as z,a8 as h,P as U,d as O,p as we,q as X,al as ye,r as k,Q as xe,am as Be,t as B,x as g,ay as A,z as b,V as ke,az as W,B as l,aA as m,ag as Ce,aB as Fe,ap as N,o as _e,c as Se,a as H,w as De,b as Re,u as Ve,e as Ee}from"./index.19f5ef3b.js";import"./Grid.39154dc5.js";import"./get-slot.cbb49382.js";import"./Eye.1c91c3dc.js";var Te={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const $e=e=>{const{primaryColor:a,opacityDisabled:o,borderRadius:r,textColor3:s}=e,d="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Te),{iconColor:s,textColor:"white",loadingColor:a,opacityDisabled:o,railColor:d,railColorActive:a,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${me(a,{alpha:.2})}`})},ze={name:"Switch",common:ge,self:$e};var Ae=ze,We=j("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),j("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),h("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[h("rubber-band",[h("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[z("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),h("active",[h("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[z("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),h("active",[t("rail",[t("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),h("active",[t("rail","background-color: var(--n-rail-color-active);")]),h("loading",[t("rail",`
 cursor: wait;
 `)]),h("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Ne=Object.assign(Object.assign({},X.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var He=O({name:"Switch",props:Ne,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:o}=we(e),r=X("Switch","-switch",We,Ae,e,a),s=ye(e),{mergedSizeRef:d,mergedDisabledRef:u}=s,f=k(e.defaultValue),w=xe(e,"value"),c=Be(w,f),C=B(()=>c.value===e.checkedValue),y=k(!1),i=k(!1),p=B(()=>{const{railStyle:n}=e;if(!!n)return n({focused:i.value,checked:C.value})});function v(n){const{"onUpdate:value":S,onChange:D,onUpdateValue:R}=e,{nTriggerFormInput:E,nTriggerFormChange:T}=s;S&&N(S,n),R&&N(R,n),D&&N(D,n),f.value=n,E(),T()}function Y(){const{nTriggerFormFocus:n}=s;n()}function q(){const{nTriggerFormBlur:n}=s;n()}function Q(){e.loading||u.value||(c.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue))}function G(){i.value=!0,Y()}function J(){i.value=!1,q(),y.value=!1}function Z(n){e.loading||u.value||n.code==="Space"&&(c.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue),y.value=!1)}function ee(n){e.loading||u.value||n.code==="Space"&&(n.preventDefault(),y.value=!0)}const L=B(()=>{const{value:n}=d,{self:{opacityDisabled:S,railColor:D,railColorActive:R,buttonBoxShadow:E,buttonColor:T,boxShadowFocus:te,loadingColor:ae,textColor:oe,iconColor:ne,[g("buttonHeight",n)]:F,[g("buttonWidth",n)]:ie,[g("buttonWidthPressed",n)]:le,[g("railHeight",n)]:_,[g("railWidth",n)]:$,[g("railBorderRadius",n)]:re,[g("buttonBorderRadius",n)]:se},common:{cubicBezierEaseInOut:ue}}=r.value,de=A((b(_)-b(F))/2),ce=A(Math.max(b(_),b(F))),he=b(_)>b(F)?$:A(b($)+b(F)-b(_));return{"--n-bezier":ue,"--n-button-border-radius":se,"--n-button-box-shadow":E,"--n-button-color":T,"--n-button-width":ie,"--n-button-width-pressed":le,"--n-button-height":F,"--n-height":ce,"--n-offset":de,"--n-opacity-disabled":S,"--n-rail-border-radius":re,"--n-rail-color":D,"--n-rail-color-active":R,"--n-rail-height":_,"--n-rail-width":$,"--n-width":he,"--n-box-shadow-focus":te,"--n-loading-color":ae,"--n-text-color":oe,"--n-icon-color":ne}}),x=o?ke("switch",B(()=>d.value[0]),L,e):void 0;return{handleClick:Q,handleBlur:J,handleFocus:G,handleKeyup:Z,handleKeydown:ee,mergedRailStyle:p,pressed:y,mergedClsPrefix:a,mergedValue:c,checked:C,mergedDisabled:u,cssVars:o?void 0:L,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:o,mergedRailStyle:r,onRender:s,$slots:d}=this;s==null||s();const{checked:u,unchecked:f,icon:w,"checked-icon":c,"unchecked-icon":C}=d,y=!(W(w)&&W(c)&&W(C));return l("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,o&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},l("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},m(u,i=>m(f,p=>i||p?l("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),i),l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),p)):null)),l("div",{class:`${e}-switch__button`},m(w,i=>m(c,p=>m(C,v=>l(Ce,null,{default:()=>this.loading?l(Fe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(p||i)?l("div",{class:`${e}-switch__button-icon`,key:p?"checked-icon":"icon"},p||i):!this.checked&&(v||i)?l("div",{class:`${e}-switch__button-icon`,key:v?"unchecked-icon":"icon"},v||i):null})))),m(u,i=>i&&l("div",{key:"checked",class:`${e}-switch__checked`},i)),m(f,i=>i&&l("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});const Le={class:"overflow-hidden"},Me=Ee(" \u5207\u6362\u663E\u793A\u65B9\u5F0F: "),Ye=O({name:"basic",setup(e){const a=k("top"),o=k({a:!1,b:{c:Array.from({length:100},(d,u)=>u).join(","),d:3,e:{f:4}}}),r=B(()=>o.value.a?{props:{class:"text-green-500"},value:"\u771F"}:{props:{class:"text-red-500"},value:"\u5047"}),s=k([{type:"divider",title:"\u54C1\u724C"},{type:"component",component:V,label:"\u6D4B\u8BD5Component",tips:"\u63D0\u793A\u4FE1\u606F",props:{placeholder:"\u8BF7\u8F93\u5165...",value:o.value.a},hidden:B(()=>a.value==="left"),listeners:{blur:()=>{console.log("123")}}},{type:"innerText",innerText:"innerText",label:"InnerText\u6D4B\u8BD5",tips:"\u8FD9\u91CC\u663E\u793A\u9759\u6001\u6587\u672C"},{type:"slot",slotName:"testSlot",label:"Slot"},{type:"key",key:"a",label:"\u7ED1\u5B9AKey\u503C",tips:"\u8FD9\u91CC\u663E\u793A\u7ED1\u5B9A\u7684 value\uFF0C\u63D0\u4F9B handler \u65B9\u6CD5\u5904\u7406\u6570\u636E",props:P({},r.value.props),handler:d=>r.value.value},{type:"key",key:"b.c",label:"\u663E\u793A\u5BF9\u5E94\u7684value",span:24},{type:"divider",title:"\u8F66\u578B"},{type:"component",component:V,span:24,label:"\u6D4B\u8BD5Component",tips:"\u59CB\u7EC8\u5360\u6574\u884C",props:{placeholder:"\u8BF7\u8F93\u5165...",value:o.value.a},listeners:{blur:()=>{console.log("123")}}},{type:"innerText",innerText:"innerText",label:"InnerText\u6D4B\u8BD5"},{type:"key",key:"a",label:"\u7ED1\u5B9AKey\u503C"},{type:"slot",slotName:"testSlot",label:"Slot"},{type:"divider",title:"\u8F66\u7CFB"},{type:"component",component:V,span:24,label:"\u6D4B\u8BD5Component",tips:"\u59CB\u7EC8\u5360\u6574\u884C",props:{placeholder:"\u8BF7\u8F93\u5165...",value:o.value.a},listeners:{blur:()=>{console.log("123")}}},{type:"innerText",innerText:"innerText",label:"InnerText\u6D4B\u8BD5"},{type:"key",key:"a",label:"\u7ED1\u5B9AKey\u503C"},{type:"slot",slotName:"testSlot",label:"Slot"}]);return(d,u)=>{const f=He,w=fe;return _e(),Se("div",Le,[Me,H(f,{value:a.value,"onUpdate:value":u[0]||(u[0]=c=>a.value=c),"checked-value":"top","unchecked-value":"left"},null,8,["value"]),H(w,{type:a.value,data:o.value,config:s.value},{testSlot:De(()=>[Re("div",null,[H(Ve(V),{disabled:"",placeholder:"Detail \u5185\u7684 slot \u7EC4\u4EF6\uFF0C\u901A\u5E38\u4E0D\u53EF\u88AB\u4FEE\u6539"})])]),_:1},8,["type","data","config"])])}}});export{Ye as default};
