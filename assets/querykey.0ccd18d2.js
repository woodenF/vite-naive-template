import{u as a,r as l}from"./axios.61ff2fe4.js";import{h as i,B as e,I as n,J as s,F as u,Z as r,G as o,E as t,P as m,H as d,c}from"./vue.201ae94a.js";import{_ as f}from"./index.d85595df.js";import{_ as p}from"./ButtonGroup.bf3332e8.js";import{_ as g}from"./Space.e1f430c5.js";import"./get-slot.cbb49382.js";const v={class:"w-full"},j=c(" 请求 "),_=c(" 失败 "),k=i({name:"querykey",setup(i){const{run:c,querise:k}=a((function(a){return l({url:"/test",method:"get",params:{id:a}})}),{manual:!0,queryKey:a=>String(a)}),y=[{id:1,name:"刘华强",email:"liuhuaqiang@gmail.com"},{id:2,name:"卖瓜佬",email:"maigualao@gmail.com"},{id:3,name:"萨日朗",email:"sharilang@gmail.com"}];return(a,l)=>{const i=f,b=p,h=g;return e(),n("div",null,[s("div",v,[s("ul",null,[(e(),n(u,null,r(y,(a=>s("li",{key:a.id},[o(h,{justify:"space-between"},{default:t((()=>{var l;return[s("span",null,m(a.name),1),s("div",null,m(null==(l=d(k)[a.id])?void 0:l.data),1),o(b,null,{default:t((()=>{var l;return[o(i,{loading:null==(l=d(k)[a.id])?void 0:l.loading,onClick:l=>d(c)(a.id)},{default:t((()=>[j])),_:2},1032,["loading","onClick"]),o(i,{onClick:l=>{var i,e;return null==(e=(i=d(k)[a.id]).cancel)?void 0:e.call(i)}},{default:t((()=>[_])),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]))),64))])])])}}});export{k as default};
