import{u as a,r as t}from"./axios.61ff2fe4.js";import{h as n,B as o,I as r,G as s,E as e,H as u,c as l,P as i}from"./vue.201ae94a.js";import{_ as d}from"./index.d85595df.js";import{_ as f}from"./ButtonGroup.bf3332e8.js";const c=l(" 请求 "),m=l(" 取消 "),p=n({name:"basic",setup(n){const{run:p,data:_,loading:g,cancel:j,err:v}=a((function(){return t({url:"/test",method:"get"})}),{manual:!0});return(a,t)=>{const n=d,v=f;return o(),r("div",null,[s(v,null,{default:e((()=>[s(n,{loading:u(g),onClick:u(p)},{default:e((()=>[c])),_:1},8,["loading","onClick"]),s(n,{onClick:t[0]||(t[0]=a=>{var t;return null==(t=u(j))?void 0:t()})},{default:e((()=>[m])),_:1})])),_:1}),l(" "+i(u(_)),1)])}}});export{p as default};
