var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(n)for(var t of n(a))l.call(a,t)&&o(e,t,a[t]);return e},c=(e,n)=>a(e,t(n));import{c as u,j as d}from"./index.d7dc1ff6.js";import{_ as i}from"./DropdownAction.vue_vue&type=script&setup=true&lang.ced09d37.js";import{_ as p}from"./Datatable.aae3ef08.js";import{_ as m}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{a as v}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as g}from"./VModal.31b4f4ba.js";import{_ as k}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as h}from"./ConfirmRemoveModal.3ba4d6d1.js";import{d as f,r as y,o as b,e as I,x as C,F as S,h as P,G as w,p as _,a as j,H as B,I as A,y as L,g as V,t as D,i as x,Y as E,E as O,q as T,A as N,ae as U,z as R,av as q,K as $}from"./vendor.1c8b4573.js";import{u as F}from"./useOptionApi.f4dc99b9.js";import{u as G}from"./useGuardPartner.354c9ce1.js";import{_ as H}from"./VCard.vue_vue&type=script&setup=true&lang.27754e87.js";import{u as z}from"./useLearningGainApi.269e70f1.js";import{u as M}from"./usePartnerApi.2e3c406b.js";import{u as K}from"./useNotyf.ddf08f06.js";import{u as Y}from"./usePaginationRoute.780ca235.js";import{u as J}from"./useTextHelper.08cd3a6d.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./search-4-dark.fb3880a5.js";import"./quiz.enum.fc8b95fc.js";import"./csv.helper.d14e8c45.js";import"./student.helper.13430dac.js";import"./student.enum.ad6af513.js";const Q=P("div",{class:"content"},[P("p",{class:"text-center"}," This action will remove the batch package from the batch. "),P("p",{class:"text-center"},"This action cannot be undone.")],-1),W=w(" Delete Package And Ticket "),X=w(" Delete Package Only ");var Z=f({props:{modelValue:{type:Boolean,default:!1},packageItemId:{type:Number,required:!0}},emits:["close","delete"],setup(e,{emit:a}){const t=y(!1),n=y(!1),s=y("Are you sure ?"),l=()=>{t.value=!0,s.value="Are you sure to remove this student and ticket?",n.value=!0},o=()=>{t.value=!1,s.value="Are you sure to remove this student?",n.value=!0},r=()=>{a("delete",t.value),n.value=!1};return(t,c)=>{const d=k,i=u,p=g,m=h;return b(),I("div",null,[C(p,{open:e.modelValue,title:"Confirm Remove BatchPackage",onClose:c[0]||(c[0]=e=>a("close"))},{content:S((()=>[C(d,{title:"Are you sure ?"}),Q])),action:S((()=>[C(i,{color:"primary",raised:"",onClick:l},{default:S((()=>[W])),_:1}),C(i,{color:"primary",raised:"",onClick:o},{default:S((()=>[X])),_:1})])),_:1},8,["open"]),C(m,{open:n.value,title:s.value,onClose:c[1]||(c[1]=e=>a("close")),onConfirm:r},null,8,["open","title"])])}}});_("data-v-e34d91a8");const ee={class:"form-body"},ae={key:0,class:"is-flex"},te={class:"multiselect-single-label"},ne=w(" Change ");j();var se=f({props:{modelValue:{type:Boolean,default:!1},packageList:{type:Array,default:()=>[]}},emits:["close","delete","change"],setup(e,{emit:a}){const t=e,{getPackages:n}=F(),{students:s}=G(),l=y(!1),o=y(),r=y(t.packageList),c=e=>{o.value&&(a("delete",{isDeleteTicket:e,packageItemId:o.value.packageItemId}),p())},i=e=>{e&&((e=>{o.value=e})(e),l.value=!0)},p=()=>{o.value=void 0,l.value=!1},k=()=>{const e=r.value.filter((e=>{var a;return(null==(a=e.package)?void 0:a.id)!==e.oldPackageId}))||[];a("change",e.map((e=>{var a;return{originalPackageId:e.oldPackageId,packageId:null==(a=e.package)?void 0:a.id,originalPackageItemId:e.packageItemId}})))},h=()=>{a("close")};return(a,t)=>{var f;const y=m,_=d,j=v,E=u,O=g,T=Z;return b(),I("div",null,[C(O,{title:"Change Packages",size:"large",open:e.modelValue,onClose:h},{content:S((()=>[P("div",ee,[(b(!0),I(B,null,A(r.value,(e=>(b(),L(j,{key:e.packageItemId},{default:S((()=>{var a;return[(null==(a=e.package)?void 0:a.id)?(b(),I("div",ae,[C(y,{modelValue:e.package.id,"onUpdate:modelValue":a=>e.package.id=a,"callback-search":V(n),searchable:!0,"label-by":"packageName"},{singlelabel:S((({value:e})=>[P("div",te," ("+D(e.id)+") "+D(e.packageName)+" ["+D(e.packageNameInternal)+"] ",1)])),option:S((({option:e})=>[w(" ("+D(e.id)+") "+D(e.packageName)+" ["+D(e.packageNameInternal)+"] ",1)])),_:2},1032,["modelValue","onUpdate:modelValue","callback-search"]),V(s).canDeleteBatchEnroll?(b(),L(_,{key:0,class:"ml-4 has-background-danger has-text-white",icon:"feather:trash",onClick:a=>i(e)},null,8,["onClick"])):x("",!0)])):x("",!0)]})),_:2},1024)))),128))])])),action:S((()=>[V(s).canEditBatchEnroll?(b(),L(E,{key:0,class:"is-primary ml-auto",onClick:k},{default:S((()=>[ne])),_:1})):x("",!0)])),_:1},8,["open"]),o.value?(b(),L(T,{key:null==(f=o.value)?void 0:f.packageItemId,"model-value":l.value,"package-item-id":o.value.packageItemId,onClose:p,onDelete:c},null,8,["model-value","package-item-id"])):x("",!0)])}}});se.__scopeId="data-v-e34d91a8";const le=P("div",{class:"content"},[P("p",{class:"text-center"}," This action will remove the batch student from the batch. "),P("p",{class:"text-center"},"This action cannot be undone.")],-1),oe=w(" Delete Student And Ticket "),re=w(" Delete Student Only "),ce=w(" > ");var ue=f({props:{modelValue:{type:Boolean,default:!1},batchStudent:{type:Object,default:void 0}},emits:["close","delete"],setup(e,{emit:a}){const t=e,n=y(!1),s=y(!1),l=y("Are you sure ?"),o=()=>{n.value=!0,l.value="Are you sure to remove this student and ticket?",s.value=!0},r=()=>{n.value=!1,l.value="Are you sure to remove this student?",s.value=!0},c=()=>{a("delete",{batchStudent:t.batchStudent,isDeleteTicket:n.value}),s.value=!1};return(t,n)=>{const d=k,i=u,p=g,m=h;return b(),I("div",null,[C(p,{open:e.modelValue,title:"Confirm Remove BatchStudent",onClose:n[0]||(n[0]=e=>a("close"))},{content:S((()=>[C(d,{title:"Are you sure ?"}),le])),action:S((()=>[C(i,{color:"primary",raised:"",onClick:o},{default:S((()=>[oe])),_:1}),C(i,{color:"primary",raised:"",onClick:r},{default:S((()=>[re])),_:1})])),default:S((()=>[ce])),_:1},8,["open"]),C(m,{open:s.value,title:l.value,onClose:n[1]||(n[1]=e=>s.value=!1),onConfirm:c},null,8,["open","title"])])}}});_("data-v-5dbe3f12");const de={class:"form-body"},ie=w(" Change ");j();var pe=f({props:{modelValue:{type:Boolean,default:!1},currentBatchId:{type:Number,required:!0},partnerId:{type:Number,required:!0}},emits:["close","update"],setup(e,{emit:a}){const t=e,{students:n}=G(),s=y(!0),l=y([]),o=y(t.currentBatchId),{getPartnerBatches:r}=F(),c=()=>{a("update",o.value)};return E((async()=>{await(async()=>{const e=await r(t.partnerId);l.value=e.map((e=>({label:e.name,value:e.id}))),s.value=!1})(),s.value=!1})),(t,r)=>{const d=O("Multiselect"),i=u,p=g;return s.value?x("",!0):(b(),L(p,{key:0,open:e.modelValue,title:"Change Batch",onClose:r[1]||(r[1]=e=>a("close"))},{content:S((()=>[P("div",de,[V(n).canUpdateBatchEnroll?(b(),L(d,{key:0,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),options:l.value,placeholder:"Select Batch"},null,8,["modelValue","options"])):x("",!0)])])),action:S((()=>[V(n).canEditBatchEnroll?(b(),L(i,{key:0,class:"is-primary ml-auto",onClick:c},{default:S((()=>[ie])),_:1})):x("",!0)])),_:1},8,["open"]))}}});pe.__scopeId="data-v-5dbe3f12",_("data-v-6e57fcd5");const me=P("h3",{class:"title is-5 mb-2"},"Student List",-1),ve={class:"is-flex"},ge=["href"],ke={class:"is-flex"},he={class:"left-box"},fe={class:"addon-list"},ye={class:"dark-inverted is-flex is-justify-content-flex-end"},be=["onClick"],Ie=[P("div",{class:"icon"},[P("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit"})],-1),P("div",{class:"meta"},[P("span",null,"Change Batch"),P("span",null,"Change Batch Student")],-1)],Ce=["onClick"],Se=[P("div",{class:"icon"},[P("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit"})],-1),P("div",{class:"meta"},[P("span",null,"Change Packages"),P("span",null,"Change Packages Student")],-1)],Pe=["onClick"],we=[P("div",{class:"icon"},[P("i",{class:"lnir lnir-reload","aria-hidden":"true"})],-1),P("div",{class:"meta"},[P("span",null,"Update Package Item"),P("span",null,"Update Package Item Student")],-1)],_e=["onClick"],je=[P("div",{class:"icon"},[P("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trash"})],-1),P("div",{class:"meta"},[P("span",null,"Remove Student"),P("span",null,"Remove Student")],-1)];j();var Be=f({setup(e){const{displayPackageName:a}=J(),{studentList:t,studentTableHeaders:n,isLoading:s,total:l,changeCurrentStudent:o,currentStudent:u,submitDeleteBatchStudent:m,submitChangeBatchStudent:v,submitDeleteBatchPackage:g,submitUpdatePackageItem:k,submitChangeBatchPackages:h,openStudentAssessment:f,batchId:w}=function(){const e=T({studentList:[],isLoading:!0,total:0,currentStudent:void 0,assessmentLink:void 0}),a=N().params.id,{learningGainAssesmentUrl:t}=z(),{currentPage:n,perPage:s,search:l}=Y(),{getBatchStudents:o,deleteBatchStudent:u,changeBatchStudent:d,deleteBatchPackage:i,updatePackageItem:p,changeBatchPackage:m}=M(),v=K(),g=async()=>{var t;e.isLoading=!0;const u=await o({batchId:+a,currentPage:n,perPage:s,search:l});u&&(e.studentList=null==(t=u.data)?void 0:t.map((e=>{var a;return c(r({},e),{packageList:null==(a=e.packageList)?void 0:a.map((e=>{var a;return c(r({},e),{oldPackageId:null==(a=e.package)?void 0:a.id})}))})})),e.total=u.total,e.isLoading=!1)};return E((async()=>{await g()})),c(r({},U(e)),{studentTableHeaders:[{key:"studentInfo.id",label:"ID"},{key:"studentInfo",label:"Name",isRaw:!0},{key:"studentInfo.phone",label:"Phone"},{key:"packageList",label:"Packages",isRaw:!0},{key:"action",label:"Action",isRaw:!0,isCenter:!0}],fetchBatchStudents:g,changeCurrentStudent:a=>{e.currentStudent=a},submitDeleteBatchStudent:async e=>{const a=await u(e.batchStudent.id,e.isDeleteTicket);return a.error?v.error(a.error.message):(await g(),v.success("Successfully deleted student")),!a.error},submitChangeBatchStudent:async a=>{var t;if(!(null==(t=e.currentStudent)?void 0:t.studentInfo))return;const n=e.currentStudent.id,s=e.currentStudent.studentInfo.id,l=await d({batchStudentId:+n,studentId:+s,batchId:+a});return l.error?v.error(l.error.message):(v.success("Successfully changed student batch"),await g()),!l.error},submitDeleteBatchPackage:async a=>{if(!e.currentStudent)return;const t=e.currentStudent.id,n=await i(t,a);return n.error?v.error(n.error.message):(await g(),v.success("Successfully deleted package")),!n.error},submitUpdatePackageItem:async e=>{const a=await p({batchStudentId:e.batchStudentId,studentId:e.studentId});return a.error?v.error(a.error.message):(await g(),v.success("Successfully updated package item")),!a.error},submitChangeBatchPackages:async a=>{if(!e.currentStudent)return;const t=e.currentStudent.id,n=await Promise.all(a.map((async e=>!(await m(t,e)).error)));return n.some((e=>!1===e))?v.error("Failed to change packages"):(await g(),v.success("Successfully changed packages")),!n.some((e=>!1===e))},batchId:a,openStudentAssessment:async a=>{const n=await t({studentId:a});e.assessmentLink=n?n.data.link:"",window.open(e.assessmentLink)}})}(),_=R("batchInfo"),{students:j}=G(),O=y(!1),F=y(!1),Q=y(!1),W=()=>{o(),O.value=!1},X=()=>{o(),Q.value=!1},Z=()=>{o(),F.value=!1},ee=async e=>{await v(e)&&X()},ae=async e=>{await h(e)&&W()},te=async e=>{await m(e)&&Z()},ne=async e=>{await g(e),W()};return(e,r)=>{const c=d,m=i,v=p,g=se,h=ue,y=pe,E=H,T=q("tooltip");return b(),L(E,null,{default:S((()=>{var e,r,d,i,p,E,N;return[me,C(v,{headers:V(n),data:V(t),"is-loading":V(s),total:V(l)},{studentInfo:S((({value:e})=>[P("div",ve,[P("a",{href:`/students/${e.studentInfo.id}`,target:"_blank",class:"link"},D(e.studentInfo.fullnameEn?e.studentInfo.fullnameEn:e.studentInfo.fullnameTh),9,ge)])])),packageList:S((({value:e})=>[P("div",ke,[P("div",he,[P("ul",fe,[(b(!0),I(B,null,A(e.packageList,(e=>{var t;return b(),I("li",{key:`addon-${e.packageItemId}`},D(`[ID: ${null==(t=e.package)?void 0:t.id}] (${e.packageItemId}) ${V(a)(e.package,{showId:!1})}`),1)})),128))])])])])),action:S((({value:e})=>[P("div",ye,[V(j).canViewAssessment?$((b(),L(c,{key:0,class:"mr-2",icon:"feather:file-text",onClick:a=>V(f)(e.studentInfo.id)},null,8,["onClick"])),[[T,"Assessment"]]):x("",!0),C(m,null,{content:S((()=>[V(j).canEdit?(b(),I("a",{key:0,class:"dropdown-item is-media",onClick:a=>(o(e),void(Q.value=!0))},Ie,8,be)):x("",!0),e.packageList.length>0&&V(j).canEditBatchEnroll?(b(),I("a",{key:1,class:"dropdown-item is-media",onClick:a=>(o(e),void(O.value=!0))},Se,8,Ce)):x("",!0),V(j).canUpdateBatchEnroll?(b(),I("a",{key:2,class:"dropdown-item is-media",onClick:a=>V(k)({batchStudentId:e.id,studentId:e.studentInfo.id})},we,8,Pe)):x("",!0),V(j).canDelete?(b(),I("a",{key:3,class:"dropdown-item is-media",onClick:a=>(o(e),void(F.value=!0))},je,8,_e)):x("",!0)])),_:2},1024)])])),_:1},8,["headers","data","is-loading","total"]),C(g,{key:null==(r=null==(e=V(u))?void 0:e.studentInfo)?void 0:r.id,"model-value":O.value,"package-list":null==(d=V(u))?void 0:d.packageList,onClose:W,onDelete:ne,onChange:ae},null,8,["model-value","package-list"]),C(h,{key:null==(p=null==(i=V(u))?void 0:i.studentInfo)?void 0:p.id,"model-value":F.value,"batch-student":V(u),onClose:Z,onDelete:te},null,8,["model-value","batch-student"]),V(_).partnerId?(b(),L(y,{key:null==(N=null==(E=V(u))?void 0:E.studentInfo)?void 0:N.id,"model-value":Q.value,"current-batch-id":+V(w),"partner-id":V(_).partnerId,onClose:X,onUpdate:ee},null,8,["model-value","current-batch-id","partner-id"])):x("",!0)]})),_:1})}}});Be.__scopeId="data-v-6e57fcd5";export default Be;
