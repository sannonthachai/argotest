var e=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&o(e,n,r[n]);if(s)for(var n of s(r))a.call(r,n)&&o(e,n,r[n]);return e};import{c as n}from"./index.d7dc1ff6.js";import{u as i,_ as l}from"./useLeadInfo.5b6c137a.js";import{d as p,T as c,b as d,A as u,k as f,o as m,e as v,h as b,n as y,g as h,x as j,F as O,G as g}from"./vendor.1c8b4573.js";import"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import"./useLeadApi.8b06d447.js";const k={class:"page-content-inner"},w={class:"form-layout"},x={class:"form-outer"},I={class:"form-header-inner"},L=b("div",{class:"left"},[b("h3",null,"View Lead Direct")],-1),P={class:"right"},_={class:"buttons"},q=g(" Back "),A={class:"form-body"};var F=p({setup(e){const{info:s,pipelineOptions:t,channelOptions:a,productOptions:o,autofixStudentId:p}=i(),{y:g}=c(),F=d(),S=u(),U=f((()=>g.value>30)),V=()=>{F.push({name:"leads",query:r({},S.query)})};return(e,r)=>{const i=n,c=l;return m(),v("div",k,[b("form",w,[b("div",x,[b("div",{class:y([[h(U)&&"is-stuck"],"form-header stuck-header"])},[b("div",I,[L,b("div",P,[b("div",_,[j(i,{icon:"lnir lnir-arrow-left rem-100",class:"custom-btn","dark-outlined":"",light:"",onClick:V},{default:O((()=>[q])),_:1})])])])],2),b("div",A,[j(c,{data:h(s),readonly:!0,"pipeline-options":h(t),"channel-options":h(a),"product-options":h(o),onUpdate:h(p)},null,8,["data","pipeline-options","channel-options","product-options","onUpdate"])])])])])}}});export default F;