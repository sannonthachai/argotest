import{B as a,e as s,y as e,D as t,c as r}from"./index.d7dc1ff6.js";import{_ as i}from"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import{A as c,b as n,r as l,Y as o,d,E as u,o as v,e as m,h,x as p,F as g,g as f,H as k,t as y,i as b,G as x}from"./vendor.1c8b4573.js";import"./useNotyf.ddf08f06.js";const w={class:"auth-wrapper-inner is-single"},_={class:"auth-nav"},j=h("div",{class:"left"},null,-1),A={class:"center"},L={class:"right"},E={class:"dark-mode ml-auto"},G=["checked"],F=h("span",null,null,-1),H={class:"single-form-wrap"},P={class:"inner-wrap"},W={class:"confirm-account-wrapper"},Y={class:"wrapper-inner"},q={class:"action-box"},B={class:"box-content"},C=h("img",{class:"light-image",src:"/assets/launch.7b56da61.svg",alt:""},null,-1),D=h("img",{class:"dark-image",src:"/assets/launch-dark.2b59c41f.svg",alt:""},null,-1),I=h("h3",{class:"dark-inverted"},"Fail!",-1),M={class:"dark-inverted"},N=h("h3",{class:"dark-inverted"},"Your account is active",-1),R={key:0,class:"dark-inverted"},V={class:"buttons"},z=x(" Go to homepage ");var J=d({setup(d){n();const{myProfile:x,messageError:J,isLoading:K}=function(){const e=c();n();const t=l(!1),r=l(""),i=l(void 0),{activeAccount:d,getMyAdminInfo:u}=a(),v=async()=>{t.value=!0;const a=e.query.token,{status:i,message:c}=await d(a);t.value=!1,201!==i&&(r.value=s(c))};return o((()=>{v()})),{activateAccount:v,isLoading:t,messageError:r,myProfile:i}}();return(a,s)=>{const c=t,n=u("RouterLink"),l=r,o=i;return v(),m("div",w,[h("div",_,[j,h("div",A,[p(n,{to:{name:"index"},class:"header-item"},{default:g((()=>[p(c,{width:"38px",height:"38px"})])),_:1})]),h("div",L,[h("label",E,[h("input",{type:"checkbox",checked:!f(e),onChange:s[0]||(s[0]=a=>{e.value=!a.target.checked})},null,40,G),F])])]),h("div",H,[h("div",P,[h("div",W,[h("div",Y,[h("div",q,[p(o,{active:f(K)},{default:g((()=>{var a;return[h("div",B,[C,D,f(J)?(v(),m(k,{key:0},[I,h("h5",M,y(f(J)),1)],64)):(v(),m(k,{key:1},[N,(null==(a=f(x))?void 0:a.name)?(v(),m("h4",R," Hey "+y(f(x).name)+", Welcome to Whitehouse Globish. ",1)):b("",!0)],64)),h("div",V,[p(l,{color:"primary",raised:"",to:{name:"index"}},{default:g((()=>[z])),_:1})])])]})),_:1},8,["active"])])])])])])])}}});export default J;
