import{H as T,M as L,P as _,ai as u,a8 as c,d as V,p as R,q as N,t as W,V as E,B as x,Z as C,r as w,g as S,o,j as y,w as k,c as p,aC as H,aD as $,u as b,b as z,as as h,l as d,aq as I,aE as j,aF as B,aG as G,e as D,aH as M}from"./index.3c472fcf.js";import{_ as O,a as q}from"./Grid.53ff9350.js";const F=t=>{const{textColor1:i,dividerColor:s,fontWeightStrong:a}=t;return{textColor:i,color:s,fontWeight:a}},Z={name:"Divider",common:T,self:F};var A=Z,J=L("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[_("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[_("no-title",`
 display: flex;
 align-items: center;
 `)]),u("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c("title-position-left",[u("line",[c("left",{width:"28px"})])]),c("title-position-right",[u("line",[c("right",{width:"28px"})])]),c("dashed",[u("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),u("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_("dashed",[u("line",{backgroundColor:"var(--n-color)"})]),c("dashed",[u("line",{borderColor:"var(--n-color)"})]),c("vertical",{backgroundColor:"var(--n-color)"})]);const K=Object.assign(Object.assign({},N.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var Q=V({name:"Divider",props:K,setup(t){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=R(t),a=N("Divider","-divider",J,A,t,i),r=W(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:m,textColor:v,fontWeight:g}}=a.value;return{"--n-bezier":n,"--n-color":m,"--n-text-color":v,"--n-font-weight":g}}),l=s?E("divider",void 0,r,t):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var t;const{$slots:i,titlePlacement:s,vertical:a,dashed:r,cssVars:l,mergedClsPrefix:n}=this;return(t=this.onRender)===null||t===void 0||t.call(this),x("div",{role:"separator",class:[`${n}-divider`,this.themeClass,{[`${n}-divider--vertical`]:a,[`${n}-divider--no-title`]:!i.default,[`${n}-divider--dashed`]:r,[`${n}-divider--title-position-${s}`]:i.default&&s}],style:l},a?null:x("div",{class:`${n}-divider__line ${n}-divider__line--left`}),!a&&i.default?x(C,null,x("div",{class:`${n}-divider__title`},this.$slots),x("div",{class:`${n}-divider__line ${n}-divider__line--right`})):null)}});function U(t){const i="text-normal text-gray-400 mb-[8px] font-semibold",s="text-normal text-right mr-[16px] font-semibold",a="w-full",r="w-full flex",l=w(""),n=w("");S(()=>t.type,()=>{l.value=t.type==="top"?i:s,n.value=t.type==="top"?a:r},{immediate:!0});function m(v,g){if(!v)return"/";const e=v.split(".");let f=g;for(const P in e)f=f&&f[e[P]];return f}return{labelClass:l,itemClass:n,getValue:m}}const X={class:"font-semibold text-medium text-primary"},Y={class:"flex-1 min-w-0"},ee={key:3,class:"text-mini text-tips mt-mini"},le=V({name:"index",props:{data:null,config:null,span:{default:"0:24 640:12 1024:8 1920:6"},type:{default:"top"},labelWidth:{default:120},hasColon:{type:Boolean,default:!0}},setup(t){const i=t,{labelClass:s,itemClass:a,getValue:r}=U(i);return(l,n)=>{const m=Q,v=O,g=q;return o(),y(g,{"x-gap":24,"y-gap":12,"item-responsive":!0},{default:k(()=>[(o(!0),p(C,null,H(t.config,(e,f)=>(o(),y(v,{key:f,span:e.hidden?0:["divider"].includes(e.type)?24:e.span||t.span},{default:k(()=>[e.hidden?d("",!0):(o(),p("div",{key:0,class:$(["overflow-hidden",b(a)])},[e.type==="divider"?(o(),y(m,{key:0,"title-placement":"left"},{default:k(()=>[z("div",X,h(e.title),1)]),_:2},1024)):d("",!0),["divider"].includes(e.type)?d("",!0):(o(),p("div",{key:1,ref_for:!0,ref:"labelEl",style:I({width:t.type==="top"?"":`${e.labelWidth||t.labelWidth}px`}),class:$(b(s))},h(e.label)+" "+h(t.type==="left"&&t.hasColon?":":""),7)),z("div",Y,[e.type==="component"?(o(),y(j(e.component),B({key:0},e.props,{disabled:""},G(e.listeners)),null,16)):d("",!0),["key","innerText"].includes(e.type)?(o(),p("div",B({key:1,class:"text-info font-semibold text-normal break-all"},e.props),[e.type==="innerText"?(o(),p(C,{key:0},[D(h(e.innerText),1)],64)):d("",!0),e.type==="key"?(o(),p(C,{key:1},[D(h(e.handler?e.handler(b(r)(e.key,t.data)):b(r)(e.key,t.data)),1)],64)):d("",!0)],16)):d("",!0),e.type==="slot"?M(l.$slots,e.slotName,{key:2}):d("",!0),e.tips?(o(),p("div",ee," tips: "+h(e.tips),1)):d("",!0)])],2))]),_:2},1032,["span"]))),128))]),_:3})}}});export{le as _};
