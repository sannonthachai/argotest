import{c as a}from"./index.d7dc1ff6.js";import{_ as e}from"./LandingLayout.a01c0f70.js";import{_ as r}from"./error-2.ea43b3eb.js";import{d as t,A as s,X as o,r as n,o as i,y as l,F as d,h as c,t as m,x as u,G as f}from"./vendor.1c8b4573.js";const p={class:"error-container"},v={class:"error-wrapper"},g={class:"error-inner has-text-centered"},h={class:"bg-number dark-inverted"},b=c("img",{class:"light-image",src:r,alt:""},null,-1),k=c("img",{class:"dark-image",src:"/assets/error-2-dark.5f124b0d.svg",alt:""},null,-1),x={class:"dark-inverted"},j={class:"button-wrap"},y={class:"buttons is-justify-content-center"},_=f(" Take me Back "),w=f(" Home ");var L=t({setup(r){const t=s();o({title:"Page not found - Whitehouse",meta:[{name:"robots",content:"noindex"}]});const f=n(t.params.id||404),L=n(t.params.message||"We couldn't find that page"),P=n(t.params.content||"Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists.");return(r,t)=>{const s=a,o=e;return i(),l(o,null,{default:d((()=>[c("div",p,[c("div",v,[c("div",g,[c("div",h,m(f.value),1),b,k,c("h3",x,m(L.value),1),c("p",null,m(P.value),1),c("div",j,[c("div",y,[u(s,{icon:"feather:arrow-left",elevated:"",onClick:t[0]||(t[0]=a=>r.$router.go(-1))},{default:d((()=>[_])),_:1}),u(s,{icon:"feather:home",color:"primary",elevated:"",to:{name:"index"}},{default:d((()=>[w])),_:1})])])])])])])),_:1})}}});export default L;