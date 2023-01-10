var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&r(e,t,a[t]);return e},n=(e,l)=>a(e,t(l));import{_ as c}from"./VCheckbox.0efaaab1.js";import{_ as d,a as u}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{p,w as m,c as f,h as b}from"./index.d7dc1ff6.js";import{_ as y}from"./VIconWrap.vue_vue&type=style&index=0&lang.659bfda7.js";import{_ as v}from"./VTag.vue_vue&type=script&setup=true&lang.b31af8ee.js";import{_ as k}from"./Datatable.aae3ef08.js";import{t as h}from"./date.helper.6ae3fc87.js";import{q as g,A as j,b as V,Y as S,k as C,ae as x,d as D,X as w,E as O,o as _,y as L,F as P,x as E,g as A,O as H,G as N,t as T,e as R,h as U,H as F,i as I}from"./vendor.1c8b4573.js";import{u as Y,c as $}from"./useFeedbackApi.fb82f742.js";import{u as q,R as G,S as M,F as B}from"./useOptionApi.f4dc99b9.js";import{u as W}from"./usePaginationRoute.780ca235.js";import{u as z}from"./useGuardFeedback.7adabfbc.js";import{a as K}from"./text.helper.174bd8fa.js";import{u as X}from"./useGuardStudent.237f12b5.js";import"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./search-4-dark.fb3880a5.js";import"./index.ec15dc7d.js";import"./lodash.0a1ccad5.js";import"./csv.helper.d14e8c45.js";import"./useNotyf.ddf08f06.js";import"./quiz.enum.fc8b95fc.js";function J(){const e=g({feedbackList:[],teamlist:[],options:[],isLoading:!0,total:0}),a=j(),t=V(),{getAllFeedback:l}=Y(),{currentPage:s,perPage:o,search:r}=W(),{getTeams:c}=q();S((()=>{(async()=>{e.isLoading=!0;const t=a.query.status;a.query.status&&(e.options=a.query.status.split(",").map((e=>e)));const i=await l({currentPage:s,perPage:o,search:r,status:t});e.isLoading=!1,e.feedbackList=i.data||[],e.total=i.total||0})(),(async()=>{const a=await c({currentPage:1,perPage:1e3});e.teamlist=a})()}));const d=[{key:"id",label:"ID"},{key:"fromData.name",label:"Name"},{key:"json.phone",label:"Phone"},{key:"solve",label:"Status"},{key:"staffCallStatus",label:"CallStatus"},{key:"createdAt",label:"Created"},{key:"dueDate",label:"Solved"},{key:"owner.name",label:"Owner"},{key:"related",label:"Relate"}],u=C((()=>$(d,e.feedbackList)));return n(i({},x(e)),{feedbackTableHeaders:[{key:"id",label:"ID"},{key:"fromData",label:"Name"},{key:"json",label:"Phone"},{key:"solve",label:"Status"},{key:"staffCallStatus",label:"CallStatus"},{key:"createdAt",label:"Created"},{key:"dueDate",label:"Solved"},{key:"owner",label:"Owner"},{key:"related",label:"Relate"}],onStatusChange:()=>{const l=n(i({},a.query),{status:e.options.length>0?e.options.join():void 0});t.push({name:a.name||"feedbacks",params:a.params,query:l})},displayName:a=>a.map((a=>{var t;return(null==(t=e.teamlist.find((e=>e.id===a)))?void 0:t.name)||"-"})).join(),displayType:e=>{switch(e){case G.STUDENT:return"student";case G.COACH:return"coach";case G.GLOBISH:return"globish";case G.OTHER:return"other"}},typeColor:e=>{switch(e){case G.STUDENT:return"danger";case G.COACH:return"purple";case G.GLOBISH:return"primary";case G.OTHER:return"info"}},solveColor:e=>{switch(e){case M.NO:return"danger";case M.ACKNOWLEDGE:return"primary";case M.PROGRESS:return"info";case M.SOLVED:return"success"}},csvData:u,callStatusColor:e=>{switch(e){case B.CALLED:return"success";case B.MISSED_CALL:return"danger";case B.NO_NEED:return"purple"}}})}const Q=N("Create"),Z={key:1,class:"subtitle is-6 px-1"},ee={key:0,class:"is-flex is-align-items-center"},ae=["href"],te={class:"text-info ml-2"},le=N(T("-")),se={key:1},oe={key:0,class:"light-text"},re={key:1,class:"light-text"},ie={key:0,class:"light-text"},ne={key:1,class:"light-text"},ce={key:0,class:"light-text"},de={key:1,class:"light-text"},ue={key:0,class:"light-text"},pe={key:1,class:"light-text"},me={class:"dark-inverted is-flex is-justify-content-flex-end"},fe=N(" Actions "),be=U("div",{class:"icon"},[U("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),ye=U("div",{class:"meta"},[U("span",null,"View"),U("span",null,"View feedback report")],-1),ve=U("div",{class:"icon"},[U("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),ke=U("div",{class:"meta"},[U("span",null,"Edit"),U("span",null,"Edit feedback report")],-1);var he=D({setup(e){p.value="Feedback Reports",w({title:"Whitehouse: Feedback"});const{csvData:a,feedbackTableHeaders:t,total:l,isLoading:s,feedbackList:o,displayName:r,displayType:i,typeColor:n,solveColor:g,options:j,onStatusChange:V,callStatusColor:S}=J(),{capabilities:C,haveActionButton:x}=z(),{capabilities:D}=X();return(e,i)=>{const n=c,p=d,w=u,Y=f,$=O("RouterLink"),q=y,G=v,M=b,B=k;return _(),L(B,{"search-placeholder":"search by id, name","is-loading":A(s),headers:A(t),data:A(o),total:A(l),"is-action":A(x),"csv-custom-data":A(a),"can-export":!0,"file-name":"feedback"},{"custom-left":P((()=>[E(w,null,{default:P((()=>[E(p,null,{default:P((()=>[E(n,{modelValue:A(j),"onUpdate:modelValue":[i[0]||(i[0]=e=>H(j)?j.value=e:null),A(V)],value:"no",label:"No",color:"danger",solid:"",circle:""},null,8,["modelValue","onUpdate:modelValue"]),E(n,{modelValue:A(j),"onUpdate:modelValue":[i[1]||(i[1]=e=>H(j)?j.value=e:null),A(V)],value:"acknowledge",label:"Acknowledge",color:"primary",solid:"",circle:""},null,8,["modelValue","onUpdate:modelValue"]),E(n,{modelValue:A(j),"onUpdate:modelValue":[i[2]||(i[2]=e=>H(j)?j.value=e:null),A(V)],value:"progress",label:"Progress",color:"info",solid:"",circle:""},null,8,["modelValue","onUpdate:modelValue"]),E(n,{modelValue:A(j),"onUpdate:modelValue":[i[3]||(i[3]=e=>H(j)?j.value=e:null),A(V)],value:"solved",label:"Solved",color:"success",solid:"",circle:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),"custom-right":P((()=>[E(Y,{color:"primary",icon:"feather:plus",class:"is-flex justify-content-end",to:{name:"feedbacks-create"}},{default:P((()=>[Q])),_:1})])),fromData:P((({value:e})=>[A(D).canView?(_(),L($,{key:0,to:{name:"students-:id",params:{id:`${e.id}`}},class:"link px-1",target:"_blank"},{default:P((()=>[N(T(`(ID:${e.id}) ${e.name}`),1)])),_:2},1032,["to"])):(_(),R("p",Z,T(`(ID:${e.id}) ${e.name}`),1))])),json:P((({value:e})=>[e.phone?(_(),R("span",ee,[U("a",{href:`tel:${e.phone}`,class:"text-info"},[E(q,{icon:"feather:phone",color:"info"})],8,ae),U("span",te,T(A(m)(e.phone)),1)])):(_(),R(F,{key:1},[le],64))])),solve:P((({value:e})=>[E(G,{color:A(g)(e),label:A(K)(e),curved:"",outlined:""},null,8,["color","label"])])),staffCallStatus:P((({value:e})=>[e?(_(),L(G,{key:0,color:A(S)(e),label:A(K)(e),curved:""},null,8,["color","label"])):(_(),R("p",se,"-"))])),createdAt:P((({value:e})=>[e?(_(),R("div",oe,T(A(h)(e,"DD/MM/YYYY HH:mm")),1)):(_(),R("div",re,"-"))])),dueDate:P((({value:e})=>[e?(_(),R("div",ie,T(A(h)(e,"DD/MM/YYYY HH:mm")),1)):(_(),R("div",ne,"-"))])),owner:P((({value:e})=>[e?(_(),R("div",ce,T(null==e?void 0:e.name),1)):(_(),R("div",de,"-"))])),related:P((({value:e})=>[e&&e.length>0?(_(),R("div",ue,T(A(r)(e)),1)):(_(),R("div",pe,"-"))])),action:P((({value:e})=>[U("div",me,[E(M,{spaced:"",right:""},{button:P((({toggle:e})=>[E(Y,{icon:"feather:more-vertical",class:"is-trigger",onClick:e},{default:P((()=>[fe])),_:2},1032,["onClick"])])),content:P((()=>[A(C).canView?(_(),L($,{key:0,role:"menuitem",class:"dropdown-item is-media",to:{name:"feedbacks-:id",params:{id:`${e.id}`}}},{default:P((()=>[be,ye])),_:2},1032,["to"])):I("",!0),A(C).canEdit?(_(),L($,{key:1,role:"menuitem",class:"dropdown-item is-media",to:{name:"feedbacks-:id",hash:"#edit",params:{id:`${e.id}`}}},{default:P((()=>[ve,ke])),_:2},1032,["to"])):I("",!0)])),_:2},1024)])])),_:1},8,["is-loading","headers","data","total","is-action","csv-custom-data"])}}});export default he;
