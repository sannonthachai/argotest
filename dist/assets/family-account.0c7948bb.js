var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{_ as n,a as r}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{e as d,c as u}from"./index.d7dc1ff6.js";import{_ as m}from"./VModal.31b4f4ba.js";import{_ as c}from"./VMessage.vue_vue&type=script&setup=true&lang.1bdbe413.js";import{_ as p}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as f}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as y}from"./Datatable.aae3ef08.js";import{q as b,A as v,Y as g,ae as h,d as _,E as k,o as j,e as I,x as C,F as S,h as F,g as O,K as P,ai as x,V as w,t as A,O as V,y as T,i as D,G as L,p as M,a as N}from"./vendor.1c8b4573.js";import{_ as q,a as z}from"./search-4-dark.fb3880a5.js";import{u as E}from"./useStudentApi.e8de2a80.js";import{u as R}from"./useNotyf.ddf08f06.js";import{u as U}from"./useOptionApi.f4dc99b9.js";import{u as G}from"./useGuardStudent.237f12b5.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./usePaginationRoute.780ca235.js";import"./quiz.enum.fc8b95fc.js";function H(){const e=b({isLoading:!1,familyInfo:void 0,isOpenCreateFamilyPopup:!1,isOpenAddStudentPopup:!1,student:0,memberId:void 0,family:{name:"",note:""},validate:{}}),n=v(),r=R(),u=n.params.id,{getStudentByFamily:m,addStudentFamily:c,addStudentToFamily:p,deleteFamilyMember:f}=E(),y=async()=>{e.isLoading=!0;const a=await m(+u);e.isLoading=!1,a&&(e.familyInfo=a)};g((()=>{y()}));return _=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&o(e,t,a[t]);return e})({},h(e)),a(_,t({familyTableHeaders:[{key:"id",label:"ID"},{key:"fullnameTh",label:"Student name",isRaw:!0},{key:"email",label:"Email"},{key:"phone",label:"Phone"}],deleteMember:async()=>{if(!e.familyInfo||!e.memberId)return;const a=await f({studentId:+u,familyId:e.familyInfo.id,memberId:e.memberId});200===a.status?(r.success("success!"),y()):r.error(d(a.message)),e.memberId=void 0},addFamily:async()=>{const a=await c(+u,e.family);201===a.status?(r.success("success!"),e.validate={},e.isOpenCreateFamilyPopup=!1,y()):"object"==typeof a.message?e.validate=a.message:r.error(d(a.message))},addStudentToFamily:async()=>{if(!e.familyInfo||!e.student)return;const a=await p({studentId:+u,familyId:e.familyInfo.id,memberId:e.student});201===a.status?(r.success("success!"),e.validate={},e.isOpenAddStudentPopup=!1,e.student=0,y()):"object"==typeof a.message?e.validate=a.message:r.error(d(a.message))},fetchStudentFamily:y,studentId:u}));var _}M("data-v-200d5dfa");const Y={class:"account-box"},B={class:"modal-form"},K=F("label",null,"Name",-1),W=F("label",null,"Note",-1),J=L("Submit"),Q=L(" Confirm Remove "),X=L("Comfirm"),Z={class:"modal-form"},$=F("label",null,"Name",-1),ee=L("Add"),ae={key:0,class:"is-flex is-justify-content-space-between is-align-items-center"},te=F("div",{class:"left"},[F("h2",{class:"title is-5 is-narrow is-bolder"},"Family Account")],-1),se={class:"right"},le=L(" Create Family "),ie=L(" Add "),oe={key:1},ne=F("img",{class:"light-image",src:q,alt:""},null,-1),re=F("img",{class:"dark-image",src:z,alt:""},null,-1),de=L("Delete");N();var ue=_({setup(e){const{isOpenCreateFamilyPopup:a,isOpenAddStudentPopup:t,familyTableHeaders:s,addFamily:l,deleteMember:i,student:o,studentId:d,family:b,addStudentToFamily:v,familyInfo:g,isLoading:h,memberId:_,validate:M}=H(),{familyAccount:N}=G(),{getStudentsWithoutFamily:q}=U();return(e,z)=>{var E;const R=n,U=r,G=u,H=m,ue=c,me=m,ce=p,pe=m,fe=f,ye=k("RouterLink"),be=y;return j(),I("div",Y,[C(H,{open:O(a),title:"Create student family",size:"medium",actions:"right",onClose:z[2]||(z[2]=e=>a.value=!1)},{content:S((()=>[F("form",B,[C(U,null,{default:S((()=>[K,C(R,{"has-error":!!O(M).name},{default:S((()=>[P(F("input",{"onUpdate:modelValue":z[0]||(z[0]=e=>O(b).name=e),type:"text",class:"input is-primary-focus",placeholder:"Student family",required:""},null,512),[[x,O(b).name]]),P(F("p",{class:"help has-text-danger"},A(O(M).name),513),[[w,O(M).name]])])),_:1},8,["has-error"])])),_:1}),C(U,null,{default:S((()=>[W,C(R,{"has-error":!!O(M).note},{default:S((()=>[P(F("textarea",{"onUpdate:modelValue":z[1]||(z[1]=e=>O(b).note=e),type:"text",class:"textarea is-primary-focus",rows:"2",placeholder:"Note",required:""},null,512),[[x,O(b).note]]),P(F("p",{class:"help has-text-danger"},A(O(M).note),513),[[w,O(M).note]])])),_:1},8,["has-error"])])),_:1})])])),action:S((()=>[C(G,{color:"primary",onClick:O(l)},{default:S((()=>[J])),_:1},8,["onClick"])])),_:1},8,["open"]),C(me,{open:!!O(_),title:"",size:"small",actions:"center",onClose:z[4]||(z[4]=e=>_.value=void 0)},{content:S((()=>[C(ue,{color:"danger"},{default:S((()=>[Q])),_:1})])),action:S((()=>[C(G,{color:"danger",outlined:"",onClick:z[3]||(z[3]=a=>O(i)(e.val))},{default:S((()=>[X])),_:1})])),_:1},8,["open"]),C(pe,{open:O(t),title:"Add student to family",size:"medium",actions:"right",onClose:z[6]||(z[6]=e=>t.value=!1)},{content:S((()=>[F("form",Z,[C(U,null,{default:S((()=>[$,C(R,{"has-error":O(M).student},{default:S((()=>[C(ce,{modelValue:O(o),"onUpdate:modelValue":z[5]||(z[5]=e=>V(o)?o.value=e:null),"callback-search":O(q),"label-by":"fullnameTh","more-label-by":"fullnameEn","track-by":"fullnameTh","value-prop":"id",placeholder:"Select student to add family (Search by name,id)"},null,8,["modelValue","callback-search"]),P(F("p",{class:"help has-text-danger"},A(O(M).student),513),[[w,O(M).student]])])),_:1},8,["has-error"])])),_:1})])])),action:S((()=>[C(G,{color:"primary",onClick:O(v)},{default:S((()=>[ee])),_:1},8,["onClick"])])),_:1},8,["open"]),O(h)?D("",!0):(j(),I("div",ae,[te,F("div",se,[!O(g)&&O(N).canCreate?(j(),T(G,{key:0,icon:"fas fa-plus",color:"primary",onClick:z[7]||(z[7]=e=>a.value=!0)},{default:S((()=>[le])),_:1})):O(g)&&O(N).canAdd?(j(),T(G,{key:1,icon:"fas fa-plus",color:"primary",onClick:z[8]||(z[8]=e=>t.value=!0)},{default:S((()=>[ie])),_:1})):D("",!0)])])),O(g)?(j(),T(be,{key:2,headers:O(s),data:(null==(E=O(g))?void 0:E.students)||[],"can-searchable":!1,"hide-per-page":"","hide-pagination":"","is-action":O(N).canDelete},{fullnameTh:S((({value:e})=>[C(ye,{to:{name:"students-:id",params:{id:e.id}},class:"link",target:"_blank"},{default:S((()=>[L(A(e.fullnameTh),1)])),_:2},1032,["to"])])),action:S((({value:e})=>[O(N).canDelete?(j(),T(G,{key:0,color:"danger",outlined:"",disabled:e.id===+O(d),onClick:a=>_.value=e.id},{default:S((()=>[de])),_:2},1032,["disabled","onClick"])):D("",!0)])),_:1},8,["headers","data","is-action"])):(j(),I("div",oe,[C(fe,{title:"You don't have family",subtitle:"Create family"},{image:S((()=>[ne,re])),_:1})]))])}}});ue.__scopeId="data-v-200d5dfa";export default ue;