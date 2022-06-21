var Oe=Object.defineProperty,je=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var fe=(e,t,o)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ge=(e,t)=>{for(var o in t||(t={}))Ve.call(t,o)&&fe(e,o,t[o]);if(pe)for(var o of pe(t))De.call(t,o)&&fe(e,o,t[o]);return e},xe=(e,t)=>je(e,Fe(t));import{_ as Ue}from"./content.7f4a66f0.js";import{d as w,B as m,H as Q,M as v,L as C,ai as f,p as Ie,q as J,a3 as j,Q as oe,t as z,V as ye,a4 as U,r as V,f as qe,h as Ge,a6 as R,bo as Qe,ae as W,G as Ze,I as Je,K as Y,bp as We,bb as O,Z as te,$ as Xe,aL as we,af as Ye,a0 as eo,b1 as re,bq as ee,a8 as A,P as be,aj as oo,a7 as Ce,am as ze,bj as to,ap as B,br as ro,bs as no,ax as io,bt as lo,bu as ne,bv as ie,o as _,c as k,b as T,u as g,a as N,w as K,aC as _e,j as Z,aE as Ae,e as He,as as le,aD as D,m as Se,bw as ao,bx as co,by as so,bz as uo,bA as mo,aH as vo,ar as ho,l as po,bB as fo,bC as go}from"./index.19f5ef3b.js";import{u as ae}from"./app.33cd31db.js";import{d as xo,_ as Re}from"./Dropdown.bb94887d.js";import{b as bo}from"./create.0b33a9d6.js";const Co=typeof window!="undefined";var zo=w({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Io={fontWeightActive:"400"};const yo=e=>{const{fontSize:t,textColor3:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},Io),{fontSize:t,itemTextColor:o,itemTextColorHover:r,itemTextColorPressed:i,itemTextColorActive:a,separatorColor:o})},wo={name:"Breadcrumb",common:Q,self:yo};var _o=wo,Ao=v("breadcrumb",`
 white-space: nowrap;
`,[C("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),C("a",`
 color: inherit;
 text-decoration: inherit;
 `),v("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[v("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),f("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),f("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),C("&:hover",[v("icon",{color:"var(--n-item-text-color-hover)"}),f("link",{color:"var(--n-item-text-color-hover)"})]),C("&:active",[v("icon",{color:"var(--n-item-text-color-pressed)"}),f("link",{color:"var(--n-item-text-color-pressed)"})]),C("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),v("icon",{color:"var(--n-item-text-color-active)"}),f("separator",{display:"none"})])])]);const Ne=U("n-breadcrumb"),Ho=Object.assign(Object.assign({},J.props),{separator:{type:String,default:"/"}});var So=w({name:"Breadcrumb",props:Ho,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ie(e),r=J("Breadcrumb","-breadcrumb",Ao,_o,e,t);j(Ne,{separatorRef:oe(e,"separator"),mergedClsPrefixRef:t});const i=z(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:u,itemTextColorPressed:b,itemTextColorActive:h,fontSize:p,fontWeightActive:H}}=r.value;return{"--n-font-size":p,"--n-bezier":d,"--n-item-text-color":c,"--n-item-text-color-hover":u,"--n-item-text-color-pressed":b,"--n-item-text-color-active":h,"--n-separator-color":s,"--n-font-weight-active":H}}),a=o?ye("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),m("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},m("ul",null,this.$slots))}});const Ro=Co?window:null,No=(e=Ro)=>{const t=()=>{const{hash:i,host:a,hostname:d,href:s,origin:c,pathname:u,port:b,protocol:h,search:p}=(e==null?void 0:e.location)||{};return{hash:i,host:a,hostname:d,href:s,origin:c,pathname:u,port:b,protocol:h,search:p}},o=()=>{r.value=t()},r=V(t());return qe(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Ge(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),r},Po={separator:String,href:String};var To=w({name:"BreadcrumbItem",props:Po,setup(e,{slots:t}){const o=R(Ne,null);if(!o)return()=>null;const{separatorRef:r,mergedClsPrefixRef:i}=o,a=No(),d=z(()=>e.href?"a":"span"),s=z(()=>a.value.href===e.href?"location":null);return()=>{var c;const{value:u}=i;return m("li",{class:`${u}-breadcrumb-item`},m(d.value,{class:`${u}-breadcrumb-item__link`,"aria-current":s.value,href:e.href},t),m("span",{class:`${u}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(c=e.separator)!==null&&c!==void 0?c:r.value))}}});function ko(){const e=R(Qe,null);return e===null&&W("use-dialog","No outer <n-dialog-provider /> founded."),e}function $o(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,groupTextColorInverted:r}}const Lo=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:i,textColor1:a,fontSize:d,dividerColor:s,hoverColor:c,primaryColorHover:u}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:Y(r,{alpha:.1}),itemColorActiveHover:Y(r,{alpha:.1}),itemColorActiveCollapsed:Y(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:u,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:u,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},$o("#BBB",r,"#FFF","#AAA"))},Mo=Ze({name:"Menu",common:Q,peers:{Tooltip:Je,Dropdown:xo},self:Lo});var Bo=Mo;const Eo=U("n-layout-sider");function Ko(){const e=R(We,null);return e===null&&W("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const q=U("n-menu"),ce=U("n-submenu"),se=U("n-menu-item-group"),G=8;function de(e){const t=R(q),{props:o,mergedCollapsedRef:r}=t,i=R(ce,null),a=R(se,null),d=z(()=>o.mode==="horizontal"),s=z(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=z(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),u=z(()=>{var p;return!d.value&&e.root&&r.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),b=z(()=>{if(d.value)return;const{collapsedWidth:p,indent:H,rootIndent:$}=o,{root:P,isGroup:L}=e,M=$===void 0?H:$;if(P)return r.value?p/2-c.value/2:M;if(a)return H/2+a.paddingLeftRef.value;if(i)return(L?H/2:H)+i.paddingLeftRef.value}),h=z(()=>{const{collapsedWidth:p,indent:H,rootIndent:$}=o,{value:P}=c,{root:L}=e;return d.value||!L||!r.value?G:($===void 0?H:$)+P+G-(p+P)/2});return{dropdownPlacement:s,activeIconSize:u,maxIconSize:c,paddingLeft:b,iconMarginRight:h,NMenu:t,NSubmenu:i}}const ue={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Pe=Object.assign(Object.assign({},ue),{tmNodes:{type:Array,required:!0}}),Oo=w({name:"MenuOptionGroup",props:Pe,setup(e){j(ce,null);const t=de(e);j(se,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=R(q);return function(){const{value:i}=o,a=t.paddingLeft.value;return m("div",{class:`${i}-menu-item-group`,role:"group"},m("span",{class:`${i}-menu-item-group-title`,style:a!==void 0?`padding-left: ${a}px;`:void 0},O(e.title),e.extra?m(te,null," ",O(e.extra)):null),m("div",null,e.tmNodes.map(d=>me(d,r))))}}});var Te=w({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=R(q);return{menuProps:t,style:z(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:z(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:i,expandIcon:a,nodeProps:d}}=this,s=o?o(t.rawNode):O(this.icon),c=d==null?void 0:d(t.rawNode);return m("div",Object.assign({},c,{onClick:u=>{var b,h;(b=c==null?void 0:c.onClick)===null||b===void 0||b.call(c,u),(h=this.onClick)===null||h===void 0||h.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover},c==null?void 0:c.class],style:[this.style,(c==null?void 0:c.style)||""]}),s&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):O(this.title),this.extra||i?m("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):O(this.extra)):null),this.showArrow?m(Xe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):m(zo,null)}):null)}});const ke=Object.assign(Object.assign({},ue),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),jo=w({name:"Submenu",props:ke,setup(e){const t=de(e),{NMenu:o,NSubmenu:r}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:d}=o,s=z(()=>{const{disabled:p}=e;return r!=null&&r.mergedDisabledRef.value||i.disabled?!0:p}),c=V(!1);j(ce,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),j(se,null);function u(){const{onClick:p}=e;p&&p()}function b(){s.value||(a.value||o.toggleExpand(e.internalKey),u())}function h(p){c.value=p}return{menuProps:i,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:we(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:z(()=>i.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!s.value&&(i.mode==="horizontal"||a.value)),handlePopoverShowChange:h,handleClick:b}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,i=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:u,maxIconSize:b,activeIconSize:h,title:p,childActive:H,icon:$,handleClick:P,dropdownShow:L,iconMarginRight:M,tmNode:X}=this;return m(Te,{tmNode:X,paddingLeft:s,collapsed:c,disabled:u,iconMarginRight:M,maxIconSize:b,activeIconSize:h,title:p,showArrow:!d,childActive:H,clsPrefix:t,icon:$,hover:L,onClick:P})},a=()=>m(Ye,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:m("div",{class:`${t}-submenu-children`,role:"menu"},d.map(c=>me(c,this.menuProps)))}});return this.root?m(Re,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:a())}):m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),a())}}),$e=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Fo=w({name:"MenuOption",props:$e,setup(e){const t=de(e),{NSubmenu:o,NMenu:r}=t,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:d}=r,s=o?o.mergedDisabledRef:{value:!1},c=z(()=>s.value||e.disabled);function u(h){const{onClick:p}=e;p&&p(h)}function b(h){c.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(h))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:we(()=>e.root&&d.value&&i.mode!=="horizontal"&&!c.value),selected:z(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:b}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r}}=this;return m("div",{role:"menuitem",class:[`${e}-menu-item`]},m(eo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):O(this.title),trigger:()=>m(Te,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Vo=w({name:"MenuDivider",setup(){const e=R(q),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:m("div",{class:`${t.value}-menu-divider`})}});const Do=re(Pe),Uo=re($e),qo=re(ke);function Go(e){return e.type==="divider"||e.type==="render"}function Qo(e){return e.type==="divider"}function me(e,t){const{rawNode:o}=e;if(Go(o))return Qo(o)?m(Vo,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=t,{key:i,level:a,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:d});return e.children?e.isGroup?m(Oo,ee(s,Do,{tmNodes:e.children,key:i})):m(jo,ee(s,qo,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):m(Fo,ee(s,Uo,{key:i,tmNode:e}))}var Zo=C([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[A("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[A("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),be("disabled",[A("selected, child-active",[F(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),F("border-bottom: 2px solid var(--n-border-color-horizontal);",[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),v("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),A("collapsed",[v("menu-item",[A("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),v("menu-item-content",[v("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),A("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),A("collapsed",[f("arrow","transform: rotate(0);")]),A("selected",[C("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),be("disabled",[A("selected, child-active",[F(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),A("selected",[F(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),F(null,[C("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[oo({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),v("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function F(e,t){return[A("hover",e,t),C("&:hover",e,t)]}const Jo=Object.assign(Object.assign({},J.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Wo=w({name:"Menu",props:Jo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ie(e),r=J("Menu","-menu",Zo,Bo,e,t),i=R(Eo,null),a=z(()=>{var x;const{collapsed:I}=e;if(I!==void 0)return I;if(i){const{collapseModeRef:n,collapsedRef:y}=i;if(n.value==="width")return(x=y.value)!==null&&x!==void 0?x:!1}return!1}),d=z(()=>{const{keyField:x,childrenField:I}=e;return bo(e.items||e.options,{getChildren(n){return n[I]},getKey(n){var y;return(y=n[x])!==null&&y!==void 0?y:n.name}})}),s=z(()=>new Set(d.value.treeNodes.map(x=>x.key))),{watchProps:c}=e,u=V(null);c!=null&&c.includes("defaultValue")?Ce(()=>{u.value=e.defaultValue}):u.value=e.defaultValue;const b=oe(e,"value"),h=ze(b,u),p=V([]),H=()=>{p.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(h.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ce(H):H();const $=to(e,["expandedNames","expandedKeys"]),P=ze($,p),L=z(()=>d.value.treeNodes),M=z(()=>d.value.getPath(h.value).keyPath);j(q,{props:e,mergedCollapsedRef:a,mergedThemeRef:r,mergedValueRef:h,mergedExpandedKeysRef:P,activePathRef:M,mergedClsPrefixRef:t,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:X,toggleExpand:Le});function X(x,I){const{"onUpdate:value":n,onUpdateValue:y,onSelect:S}=e;y&&B(y,x,I),n&&B(n,x,I),S&&B(S,x,I),u.value=x}function ve(x){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:n,onExpandedNamesChange:y,onOpenNamesChange:S}=e;I&&B(I,x),n&&B(n,x),y&&B(y,x),S&&B(S,x),p.value=x}function Le(x){const I=Array.from(P.value),n=I.findIndex(y=>y===x);if(~n)I.splice(n,1);else{if(e.accordion&&s.value.has(x)){const y=I.findIndex(S=>s.value.has(S));y>-1&&I.splice(y,1)}I.push(x)}ve(I)}const Me=x=>{const I=d.value.getPath(x!=null?x:h.value,{includeSelf:!1}).keyPath;if(!I.length)return;const n=Array.from(P.value),y=new Set([...n,...I]);e.accordion&&s.value.forEach(S=>{y.has(S)&&!I.includes(S)&&y.delete(S)}),ve(Array.from(y))},he=z(()=>{const{inverted:x}=e,{common:{cubicBezierEaseInOut:I},self:n}=r.value,{borderRadius:y,borderColorHorizontal:S,fontSize:Be,itemHeight:Ee,dividerColor:Ke}=n,l={"--n-divider-color":Ke,"--n-bezier":I,"--n-font-size":Be,"--n-border-color-horizontal":S,"--n-border-radius":y,"--n-item-height":Ee};return x?(l["--n-group-text-color"]=n.groupTextColorInverted,l["--n-color"]=n.colorInverted,l["--n-item-text-color"]=n.itemTextColorInverted,l["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,l["--n-item-text-color-active"]=n.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=n.itemIconColorInverted,l["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,l["--n-arrow-color"]=n.arrowColorInverted,l["--n-arrow-color-hover"]=n.arrowColorHoverInverted,l["--n-arrow-color-active"]=n.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,l["--n-item-color-hover"]=n.itemColorHoverInverted,l["--n-item-color-active"]=n.itemColorActiveInverted,l["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=n.groupTextColor,l["--n-color"]=n.color,l["--n-item-text-color"]=n.itemTextColor,l["--n-item-text-color-hover"]=n.itemTextColorHover,l["--n-item-text-color-active"]=n.itemTextColorActive,l["--n-item-text-color-child-active"]=n.itemTextColorChildActive,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,l["--n-item-icon-color"]=n.itemIconColor,l["--n-item-icon-color-hover"]=n.itemIconColorHover,l["--n-item-icon-color-active"]=n.itemIconColorActive,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,l["--n-arrow-color"]=n.arrowColor,l["--n-arrow-color-hover"]=n.arrowColorHover,l["--n-arrow-color-active"]=n.arrowColorActive,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,l["--n-arrow-color-child-active"]=n.arrowColorChildActive,l["--n-item-color-hover"]=n.itemColorHover,l["--n-item-color-active"]=n.itemColorActive,l["--n-item-color-active-hover"]=n.itemColorActiveHover,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),l}),E=o?ye("menu",z(()=>e.inverted?"a":"b"),he,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:$,uncontrolledExpanededKeys:p,mergedExpandedKeys:P,uncontrolledValue:u,mergedValue:h,activePath:M,tmNodes:L,mergedTheme:r,mergedCollapsed:a,cssVars:o?void 0:he,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:Me}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),m("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>me(i,this.$props)))}});function Xo(){const e=R(ro,null);return e===null&&W("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}function Yo(){const e=R(no,null);return e===null&&W("use-notification","No outer `n-notification-provider` found."),e}function et(){const e=R(io,null);return z(()=>{if(e===null)return Q;const{mergedThemeRef:{value:t},mergedThemeOverridesRef:{value:o}}=e,r=(t==null?void 0:t.common)||Q;return o!=null&&o.common?Object.assign({},r,o.common):r})}function ot(e){return m(lo,{to:{name:e.children?"":e.name}},{default:()=>e.meta.title})}function tt(e){return m(ne,{size:16},{default:()=>m(e.meta.icon)})}const rt={class:"h-full flex items-center"},nt=w({name:"header",setup(e){const t=ae(),o=ie();return(r,i)=>{const a=Se,d=ne,s=Re,c=To,u=So;return _(),k("div",{class:D(["fixed top-0 h-header right-0 transition-all duration-300 flex justify-between shadow-sm",[g(t).collapsed?"left-sidebar--collapsed":"left-sidebar"]])},[T("div",rt,[T("div",{class:"h-full flex items-center px-small hover:bg-gray-200 hover:text-primary",onClick:i[0]||(i[0]=(...b)=>g(t).toggleCollapsed&&g(t).toggleCollapsed(...b))},[N(a,{size:"20",name:g(t).collapsed?"open":"close"},null,8,["name"])]),T("div",null,[N(u,null,{default:K(()=>[(_(!0),k(te,null,_e(g(o).matched,b=>(_(),Z(c,{key:b.name},{default:K(()=>[N(s,{options:b.children,"label-field":"name","key-field":"name",placement:"bottom-start","render-label":h=>g(ot)(h),"render-icon":h=>g(tt)(h)},{default:K(()=>[T("span",null,[N(d,{size:"16"},{default:K(()=>[(_(),Z(Ae(b.meta.icon)))]),_:2},1024),He(" "+le(b.meta.title),1)])]),_:2},1032,["options","render-label","render-icon"])]),_:2},1024))),128))]),_:1})])])],2)}}}),it={class:"h-header flex items-center justify-center font-bold text-medium text-primary whitespace-nowrap overflow-hidden"},lt={class:"flex-1 overflow-auto"},at=w({name:"sidebar",setup(e){const t=ae(),o=ao(),r=ie();return(i,a)=>{const d=Wo;return _(),k("div",{class:D(["h-full fixed top-0 left-0 transition-all duration-300 z-30 flex flex-col shadow-lg",[g(t).collapsed?"w-sidebar--collapsed":"w-sidebar"]])},[T("div",it,le(g(t).collapsed?"N":"Naive Template"),1),T("div",lt,[N(d,{value:g(r).name,collapsed:g(t).collapsed,"collapsed-width":56,indent:20,options:g(o).authRoutes,"key-field":"name","render-label":s=>g(co)(s),"render-icon":s=>g(so)(s)},null,8,["value","collapsed","options","render-label","render-icon"])])],2)}}});function ct(){const e=V();function t(o){const r=o.wheelDelta||o.detail;let i=0;i=r>0?-50:50,e.value&&(e.value.scrollLeft+=i)}return{el:e,onScroll:t}}const st={class:"w-full h-full"},dt=uo('<defs><symbol id="geometry-left" viewBox="0 0 236 32"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path></symbol><symbol id="geometry-right" viewBox="0 0 214 32"><use xlink:href="#geometry-left"></use></symbol><clipPath><rect width="100%" height="100%" x="0"></rect></clipPath></defs>',1),ut={width:"52%",height:"100%"},mt=["fill"],vt={transform:"scale(-1, 1)"},ht={width:"52%",height:"100%",x:"-100%",y:"0"},pt=["fill"],ft=w({name:"SvgRadiusBg",props:{isActive:{type:Boolean,default:!1},isHover:{type:Boolean,default:!1},primaryColor:{default:"#409eff"},hoverColor:{default:"#dee1e6"}},setup(e){const t=e,o="#fff",r=z(()=>{let i=o;return t.isHover&&(i=t.hoverColor),t.isActive&&(i=t.primaryColor),i});return(i,a)=>(_(),k("svg",st,[dt,(_(),k("svg",ut,[T("use",{"xlink:href":"#geometry-left",width:"214",height:"32",fill:g(r),class:"transition-all duration-300 ease-in-out"},null,8,mt)])),T("g",vt,[(_(),k("svg",ht,[T("use",{"xlink:href":"#geometry-right",width:"214",height:"32",fill:g(r),class:"transition-fill duration-300 ease-in-out"},null,8,pt)]))])]))}}),gt={class:"absolute w-full h-full bottom-0 left-0 -z-10"},xt=w({name:"item",props:{isActive:{type:Boolean,default:!1},hiddenClose:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=e,r=et(),{bool:i,setBool:a}=mo(!1);return(d,s)=>{const c=Se;return _(),k("div",{class:D(["relative px-large h-[32px] box-border flex items-center whitespace-nowrap -ml-[16px]",{"z-30":o.isActive,"z-20":g(i)}]),onMouseenter:s[1]||(s[1]=u=>g(a)(!0)),onMouseleave:s[2]||(s[2]=u=>g(a)(!1))},[T("div",gt,[N(ft,{"is-active":o.isActive,"is-hover":g(i),"primary-color":g(r).primaryColor,"hover-color":g(r).primaryColorHover},null,8,["is-active","is-hover","primary-color","hover-color"])]),T("div",{class:D(["text-small font-thin flex items-center",{"text-white":o.isActive}])},[vo(d.$slots,"default")],2),o.hiddenClose?po("",!0):(_(),k("div",{key:0,class:"transition-all duration-300 text-[0px] ml-normal w-[16px] h-[16px] flex items-center justify-center hover:bg-primary-hover rounded-full mt-[2px] text-zinc-600",onClick:s[0]||(s[0]=ho(u=>t("close"),["stop"]))},[N(c,{name:"tab_close",size:"12"})]))],34)}}});var bt=(e,t)=>{const o=e.__vccOpts||e;for(const[r,i]of t)o[r]=i;return o};const Ct=w({name:"index",setup(e){const t=ae(),o=fo(),r=ie(),i=go(),{el:a,onScroll:d}=ct();return(s,c)=>(_(),k("div",{ref_key:"el",ref:a,class:D(["overflow-y-hidden transition-all duration-300 fixed h-tab top-header right-0 z-10 shadow-sm px-normal flex items-end",[g(t).collapsed?"left-sidebar--collapsed":"left-sidebar"]]),onMousewheel:c[0]||(c[0]=(...u)=>g(d)&&g(d)(...u))},[(_(!0),k(te,null,_e(g(o).tabs,(u,b)=>(_(),Z(xt,{key:u.path,"is-active":g(r).path===u.path,"hidden-close":b===0,onClose:h=>g(o).removeTab(u,g(i)),onClick:h=>g(i).push(u)},{default:K(()=>[N(g(ne),{size:"16",class:"mr-[8px]"},{default:K(()=>{var h;return[(_(),Z(Ae((h=u.meta)==null?void 0:h.icon)))]}),_:2},1024),He(" "+le(u.meta.title),1)]),_:2},1032,["is-active","hidden-close","onClose","onClick"]))),128))],34))}});var zt=bt(Ct,[["__scopeId","data-v-0d7d897a"]]);const It={class:"h-screen"},yt=w({name:"Layout"}),Nt=w(xe(ge({},yt),{setup(e){function t(){window.$loadingBar=Ko(),window.$dialog=ko(),window.$message=Xo(),window.$notification=Yo()}return t(),(o,r)=>(_(),k("div",It,[N(at),N(nt),N(zt),N(Ue)]))}}));export{Nt as default};
