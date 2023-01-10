var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{c as o}from"./index.d7dc1ff6.js";import{_ as i,a as d}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as u}from"./Datatable.aae3ef08.js";import{_ as c}from"./VCard.vue_vue&type=script&setup=true&lang.27754e87.js";import{q as p,A as f,Y as m,D as y,ae as v,d as k,E as b,o as h,y as g,F as _,h as D,x as j,au as S,I as w,n as x,t as I,g as O,e as P,i as V,ao as C,ap as L,G as W,H as A,p as B,a as Y}from"./vendor.1c8b4573.js";import{u as E}from"./usePartnerApi.2e3c406b.js";import{u as F}from"./useNotyf.ddf08f06.js";import{u as T}from"./usePartnersInfo.03541f69.js";import M from"./html2canvas.esm.0eae2bf4.js";import"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./search-4-dark.fb3880a5.js";import"./usePaginationRoute.780ca235.js";import"./useStudentApi.e8de2a80.js";function N(){const e=p({studentWeeklyList:[],listOfDays:[],isLoading:!1,total:0,search:{startDate:"",endDate:""},studentTableHeaders:[],isFullScreen:!1}),o=f().params.id,i=F(),{getPartnerBatchStudentsWeekly:d}=E(),{batchInfo:u,fetchPartnerInfoById:c}=T(),k=async()=>{e.isLoading=!0;const a=await d({partnerBatchId:+o,startDate:y(e.search.startDate).toISOString(),endDate:y(e.search.endDate).endOf("day").toISOString()});a.error?i.error(Object.values(a.message).join(", ")||"Something went wrong"):(e.studentWeeklyList=a.data.weekly,e.listOfDays=a.data.listOfDays,e.total=a.data.weekly.length,b()),e.isLoading=!1},b=()=>{const a=[{key:"rank",label:"Rank(1-1)"},{key:"studentId",label:"Student ID"},{key:"studentName",label:"Name"},{key:"studentPhone",label:"Phone"},{key:"consistency",label:"Consistency"},{key:"packagesClassCompletion",label:"Percent complete 1-1"}];e.listOfDays.forEach((async e=>{a.push({key:e,label:e,isRaw:!0,isCenter:!0})})),e.studentTableHeaders=a};return m((async()=>{await c(),e.search.startDate=u.value.expectedStart?y(u.value.expectedStart).format():"",e.search.endDate=y().format(),await k()})),h=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&r(e,t,a[t]);return e})({},v(e)),a(h,t({fetchBatchStudentsWeekly:k,batchInfo:u}));var h}B("data-v-2865ef48");const R=D("h3",{class:"title is-5 mb-2"},"Weekly List",-1),H={key:0,class:"is-flex buttons-box"},z=D("i",{class:"lnir lnir-zoom-in mr-2","aria-hidden":"true"},null,-1),U=W(" Fullscreen "),$=D("i",{class:"lnir lnir-zoom-out mr-2","aria-hidden":"true"},null,-1),q=W(" Minimize "),G=D("i",{class:"lnir lnir-download mr-2","aria-hidden":"true"},null,-1),J=W(" Take Screenshot "),K={class:"is-flex is-align-items-end search-box"},Q=D("label",null," Start date:",-1),X=["value"],Z=D("label",null," End date:",-1),ee=["value"],ae=W("Search");Y();var te=k({setup(e){const{studentTableHeaders:a,isLoading:t,studentWeeklyList:l,total:s,listOfDays:n,search:r,batchInfo:p,isFullScreen:f,fetchBatchStudentsWeekly:m}=N(),y=async()=>{f.value=!0,await new Promise((e=>setTimeout(e,500)));const e=document.getElementById("studentWeeklyBox");if(!e)return;const a=(await M(e)).toDataURL(),t=document.createElement("a");t.download=`${p.value.partnerId}_(${p.value.id})${p.value.name}_studentWeeklyTable.png`,t.href=a,t.click()};return(e,p)=>{const v=o,k=i,B=d,Y=b("v-date-picker"),E=i,F=d,T=u,M=c;return h(),g(M,null,{default:_((()=>[R,D("div",{id:"datatableBox",class:x({"is-full-screen":O(f)})},[j(T,{id:"studentWeeklyBox",headers:O(a),data:O(l),total:O(s),"can-searchable":!1,"hide-pagination":!0,"hide-per-page":!0,"is-loading":O(t)},S({custom:_((()=>[O(s)>0?(h(),P("div",H,[O(f)?V("",!0):(h(),g(v,{key:0,color:"primary",onClick:p[0]||(p[0]=e=>f.value=!0)},{default:_((()=>[z,U])),_:1})),O(f)?(h(),g(v,{key:1,color:"primary",onClick:p[1]||(p[1]=e=>f.value=!1)},{default:_((()=>[$,q])),_:1})):V("",!0),j(v,{color:"primary",onClick:y},{default:_((()=>[G,J])),_:1})])):V("",!0)])),"custom-left":_((()=>[D("div",K,[D("div",null,[j(F,null,{default:_((()=>[j(E,null,{default:_((()=>[j(Y,{modelValue:O(r).startDate,"onUpdate:modelValue":p[2]||(p[2]=e=>O(r).startDate=e),color:"orange",masks:{input:"DD/MM/YYYY"},popover:{visibility:"click"}},{default:_((({inputValue:e,inputEvents:a})=>[D("div",null,[Q,j(B,{addons:""},{default:_((()=>[j(k,{class:"date-picker-box"},{default:_((()=>[D("input",C({value:e,class:"input"},L(a)),null,16,X)])),_:2},1024)])),_:2},1024)])])),_:1},8,["modelValue"])])),_:1})])),_:1})]),D("div",null,[j(F,null,{default:_((()=>[j(E,null,{default:_((()=>[j(Y,{modelValue:O(r).endDate,"onUpdate:modelValue":p[3]||(p[3]=e=>O(r).endDate=e),color:"orange",masks:{input:"DD/MM/YYYY"},popover:{visibility:"click"}},{default:_((({inputValue:e,inputEvents:a})=>[D("div",null,[Z,j(B,{addons:""},{default:_((()=>[j(k,{class:"date-picker-box"},{default:_((()=>[D("input",C({value:e,class:"input"},L(a)),null,16,ee)])),_:2},1024)])),_:2},1024)])])),_:1},8,["modelValue"])])),_:1})])),_:1})]),j(v,{color:"primary",onClick:O(m)},{default:_((()=>[ae])),_:1},8,["onClick"])])])),consistency:_((({value:e})=>[W(I(null==e?void 0:e.toFixed(2))+" % ",1)])),packagesClassCompletion:_((({value:e})=>[(h(!0),P(A,null,w(e,(e=>{var a;return h(),P("p",{key:e.packageId}," ("+I(e.packageId)+") "+I(e.packageName)+" - "+I(null==(a=e.completionRate)?void 0:a.toFixed(2))+" % ",1)})),128))])),_:2},[w(O(n),((e,a)=>({name:e.toString(),fn:_((({value:a})=>[D("div",{class:x(["p-2 class-count-box has-text-centered",{"have-class-count":a.weeklyAttend.find((a=>a.date===e.toString())).totalAttend>0}])},I(a.weeklyAttend.find((a=>a.date===e.toString())).totalAttend>0?a.weeklyAttend.find((a=>a.date===e.toString())).totalAttend:"No class"),3)]))})))]),1032,["headers","data","total","is-loading"])],2)])),_:1})}}});te.__scopeId="data-v-2865ef48";export default te;
