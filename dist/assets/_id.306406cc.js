import{_ as a}from"./VAvatarEdit.vue_vue&type=style&index=0&lang.91cda85a.js";import{p as e,c as s}from"./index.d7dc1ff6.js";import{d as t,X as i,A as o,r as n,E as l,o as r,e as u,h as c,x as d,g as p,t as m,y as f,F as v,i as h,H as g,I as b,n as j,U as y,a4 as _,G as x}from"./vendor.1c8b4573.js";import{u as C}from"./useGuardCoach.2473a459.js";import{u as k}from"./useCoachApi.4bab1366.js";import{u as w}from"./useUpdateCochInfo.94f4f1d4.js";import"./ModalFileManager.vue_vue&type=script&setup=true&lang.3ed79754.js";import"./FileManager.643166ab.js";import"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import"./VPlaceholderPage.vue_vue&type=script&setup=true&lang.e3e86478.js";import"./index.8f8d8101.js";import"./useNotyf.ddf08f06.js";import"./VIconBox.vue_vue&type=script&setup=true&lang.7bffdb35.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VModal.31b4f4ba.js";import"./search-4-dark.fb3880a5.js";import"./text.helper.174bd8fa.js";import"./useCoachInfo.5a7fb11a.js";const I={class:"page-content-inner"},V={class:"account-wrapper"},A={class:"columns"},M={class:"column is-4"},F={class:"account-box is-navigation"},L={class:"is-flex is-flex-direction-column is-align-items-center"},P={class:"title is-5 is-narrow is-bold mt-3"},$={class:"advanced-box p-3 mt-3"},E=x("Login as Coach"),N={class:"account-menu"},U=c("span",{class:"end"},[c("i",{"aria-hidden":"true",class:"fas fa-arrow-right"})],-1),G={class:"column is-8"};var R=t({setup(t){e.value="Coach Information",i({title:"Whitehouse: Coaches"});const{coachInfo:x,updateProfile:R}=w(),{loginAsCoach:z}=k(),{capabilities:B,coachMainTab:H}=C(),T=o(),W=n(!1),X=async()=>{const a=parseInt(`${T.params.id}`);W.value=!0;const e=await z(a);W.value=!1,(null==e?void 0:e.link)&&window.open(e.link,"_blank")},q=async a=>{(null==x?void 0:x.value)&&(x.value.avatar=a,await R(x.value))};return(e,t)=>{var i,o,n;const C=a,k=s,w=l("RouterLink"),R=l("RouterView");return r(),u("div",I,[c("div",V,[c("div",A,[c("div",M,[c("div",F,[c("div",L,[d(C,{size:"large",picture:null==(i=p(x))?void 0:i.avatar,"can-edit":p(B).canEdit,"onUpdate:image":q},null,8,["picture","can-edit"]),c("h4",P,m(null==(o=p(x))?void 0:o.nickname),1),c("p",null,m(null==(n=p(x))?void 0:n.fullname),1)]),c("div",$,[p(B).canLoginAsCoach?(r(),f(k,{key:0,icon:"feather:log-in",color:"primary",class:"has-fullwidth",loading:W.value,outlined:"",onClick:X},{default:v((()=>[E])),_:1},8,["loading"])):h("",!0)]),c("div",N,[(r(!0),u(g,null,b(p(H),((a,e)=>(r(),f(w,{key:`${a.routeName}-${e}`,to:{name:a.routeName},class:"account-menu-item"},{default:v((()=>[c("i",{"aria-hidden":"true",class:j(a.icon)},null,2),c("span",null,m(a.label),1),U])),_:2},1032,["to"])))),128))])])]),c("div",G,[d(R,null,{default:v((({Component:a})=>[d(y,{name:"fade-fast",mode:"out-in"},{default:v((()=>[(r(),f(_(a),{key:e.$route.fullPath}))])),_:2},1024)])),_:1})])])])])}}});export default R;