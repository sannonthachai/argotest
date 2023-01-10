var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&i(e,l,a[l]);return e},c=(e,t)=>a(e,l(t));import{E as d,_ as r}from"./useGuardClassReport.038d8a9c.js";import{o as u,c as p}from"./index.d7dc1ff6.js";import{_ as v}from"./VModal.31b4f4ba.js";import{q as m,k as f,S as b,Y as R,ae as S,p as y,a as O,d as C,E as T,o as g,y as E,F as k,h as A,x as I,t as h,g as j,O as F,K as V,V as _,ai as w,G as D}from"./vendor.1c8b4573.js";import{u as N}from"./useClassroomApi.cba9f1f2.js";import{u as x}from"./useOptionApi.f4dc99b9.js";import{b as U,c as q}from"./class-report.enum.31771efb.js";import{c as z}from"./text.helper.174bd8fa.js";y("data-v-70886c7f");const P={class:"modal-form"},B={class:"field is-horizontal pr-5"},G=A("div",{class:"field-label is-normal"},[A("label",{class:"label"},[D("From"),A("span",{class:"red"}," * ")])],-1),H={class:"field-body"},M={class:"field"},K={class:"control"},Y={class:"multiselect-single-label"},$={class:"select-option-text"},J={class:"field is-horizontal pr-5"},L=A("div",{class:"field-label is-normal"},[A("label",{class:"label"},[D("Cancellation Time "),A("span",{class:"red"}," * ")])],-1),Q={class:"field-body"},W={class:"field"},X={class:"control"},Z={class:"multiselect-single-label"},ee={class:"select-option-text"},ae={class:"field is-horizontal pr-5"},le=A("div",{class:"field-label is-normal"},[A("label",{class:"label"},[D("Reason "),A("span",{class:"red"}," * ")])],-1),te={class:"field-body"},se={class:"field"},oe={class:"control"},ie={class:"multiselect-single-label"},ne={class:"select-option-text"},ce={class:"field is-horizontal pr-5"},de=A("div",{class:"field-label is-flex is-align-items-center is-justify-content-end"},[A("label",{class:"label"},[D("Etc "),A("span",{class:"red"}," * ")])],-1),re={class:"field-body"},ue={class:"field"},pe={class:"control"},ve=["readonly"],me=D("Save");O();var fe=C({props:{modelValue:{type:Boolean,default:!1,required:!0},classId:{type:Number,required:!0},cancelReport:{type:Object,required:!1,default:void 0},readonly:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","saved-report"],setup(e,{emit:a}){const l=e,{classReportCancelId:t,detail:s,from:o,reasonId:i,etcDescription:y,cancellationTime:O,ticketReturn:C,callStatus:D,studentSatisfaction:fe,reportOption:be,onSaving:Re,reasonOption:Se,disabledSave:ye,onSaveCancelReport:Oe}=function(){const{getTypeClassReport:e,getReasonClassReport:a}=x(),{createCancelReport:l,updateCancelReport:t}=N(),s=m({classReportCancelId:void 0,detail:"",cancellationTime:void 0,from:void 0,ticketReturn:void 0,callStatus:void 0,reasonId:0,etcDescription:void 0,studentSatisfaction:void 0,onSaving:!1,reportOption:{cancelFroms:[],cancellationTimes:[],ticketReturns:[],callStatuses:[],studentSatisfactions:[]},reasonOption:[]}),o=f((()=>!(s.from&&s.reasonId&&s.studentSatisfaction&&s.callStatus&&s.ticketReturn&&(s.reasonId!==d.ATTENDEE_REASON&&s.reasonId!==d.STAFF_REASON||s.etcDescription)&&(s.from!==U.COACH||s.cancellationTime))));b((()=>s.from),(async()=>{s.from==U.COACH?s.reasonOption=await a(q.ATTENDEE):s.from==U.STAFF&&(s.reasonOption=await a(q.STAFF))}));const i=async()=>{const a=await e();a&&(s.reportOption={cancelFroms:a.cancelFroms,cancellationTimes:a.cancellationTimes,ticketReturns:a.ticketReturns,callStatuses:a.callStatuses,studentSatisfactions:a.studentSatisfactions})};return R((async()=>{await i()})),c(n({},S(s)),{disabledSave:o,fetchReportOptions:i,onSaveCancelReport:async e=>{s.onSaving=!0;const a={classId:e,detail:null==s?void 0:s.detail,from:s.from,cancellationTime:(null==s?void 0:s.cancellationTime)||"",ticketReturn:s.ticketReturn,callStatus:s.callStatus,studentSatisfaction:s.studentSatisfaction,reason:{id:s.reasonId,etcDescription:s.etcDescription||void 0}};if(s.classReportCancelId){const e=await t(c(n({},a),{classReportCancelId:s.classReportCancelId}));u(e,"Cancel Report was updated!")}else{const e=await l(a);u(e,"Cancel Report was created!")}s.onSaving=!1}})}();b((()=>l.cancelReport),(()=>{var e,a,n,c,d,r,u,p,v,m,f;t.value=(null==(e=l.cancelReport)?void 0:e.id)||void 0,o.value=(null==(a=l.cancelReport)?void 0:a.from)||void 0,O.value=(null==(n=l.cancelReport)?void 0:n.cancellationTime)||void 0,D.value=(null==(c=l.cancelReport)?void 0:c.callStatus)||void 0,s.value=(null==(d=l.cancelReport)?void 0:d.detail)||void 0,C.value=(null==(r=l.cancelReport)?void 0:r.ticketReturn)||void 0,fe.value=(null==(u=l.cancelReport)?void 0:u.studentSatisfaction)||void 0,i.value=(null==(v=null==(p=l.cancelReport)?void 0:p.reason[0])?void 0:v.problemReasonId)||null,y.value=(null==(f=null==(m=l.cancelReport)?void 0:m.reason[0])?void 0:f.etcDescription)||void 0})),b((()=>null==i?void 0:i.value),(()=>{i.value&&[d.STAFF_REASON,d.ATTENDEE_REASON].includes(i.value)||(y.value=void 0)}));const Ce=()=>{a("update:modelValue",!1),s.value="",o.value=void 0,i.value=0,y.value=void 0,O.value=void 0,C.value=void 0,D.value=void 0,fe.value=void 0},Te=async()=>{await Oe(l.classId),a("saved-report"),Ce()},ge=()=>{i.value=0,y.value=void 0};return(a,l)=>{const t=T("Multiselect"),n=r,c=p,u=v;return g(),E(u,{open:e.modelValue,title:`Cancel Report (Class id: ${e.classId})`,size:"medium",actions:"right",onClose:Ce},{content:k((()=>[A("div",P,[A("div",B,[G,A("div",H,[A("div",M,[A("div",K,[I(t,{modelValue:j(o),"onUpdate:modelValue":[l[0]||(l[0]=e=>F(o)?o.value=e:null),ge],options:j(be).cancelFroms,searchable:!1,label:"name","track-by":"name","value-prop":"value",placeholder:"select cancellation from","can-clear":!1,disabled:e.readonly,onClear:l[1]||(l[1]=e=>o.value=void 0)},{singlelabel:k((({value:e})=>[A("div",Y,h(j(z)(e.name)),1)])),option:k((({option:e})=>[A("span",$,h(j(z)(e.name)),1)])),_:1},8,["modelValue","options","disabled"])])])])])]),V(A("div",J,[L,A("div",Q,[A("div",W,[A("div",X,[I(t,{modelValue:j(O),"onUpdate:modelValue":l[2]||(l[2]=e=>F(O)?O.value=e:null),options:j(be).cancellationTimes,searchable:!1,label:"label","track-by":"label","value-prop":"value",placeholder:"select cancellation time","can-clear":!1,disabled:e.readonly},{singlelabel:k((({value:e})=>[A("div",Z,h(j(z)(e.label)),1)])),option:k((({option:e})=>[A("span",ee,h(j(z)(e.label)),1)])),_:1},8,["modelValue","options","disabled"])])])])],512),[[_,"coach"===j(o)]]),A("div",ae,[le,A("div",te,[A("div",se,[A("div",oe,[I(t,{modelValue:j(i),"onUpdate:modelValue":l[3]||(l[3]=e=>F(i)?i.value=e:null),options:j(Se),searchable:!1,label:"name","track-by":"name","value-prop":"id",placeholder:"select reason","can-clear":!1,disabled:e.readonly},{singlelabel:k((({value:e})=>[A("div",ie,h(e.name),1)])),option:k((({option:e})=>[A("span",ne,h(e.name),1)])),_:1},8,["modelValue","options","disabled"])])])])]),V(A("div",ce,[de,A("div",re,[A("div",ue,[A("div",pe,[V(A("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>F(y)?y.value=e:null),type:"text",class:"input",placeholder:"input description",readonly:e.readonly},null,8,ve),[[w,j(y)]])])])])],512),[[_,j(i)&&[j(d).STAFF_REASON,j(d).ATTENDEE_REASON].includes(j(i))||j(y)]]),I(n,{readonly:e.readonly,"student-satisfaction":j(fe),detail:j(s),"ticket-return":j(C),"call-status":j(D),"ticket-return-options":j(be).ticketReturns,"call-status-option":j(be).callStatuses,"student-satisfaction-option":j(be).studentSatisfactions,"is-cancel-class-report":!0,"onUpdate:detail":l[5]||(l[5]=e=>s.value=e.target.value),"onUpdate:ticketReturn":l[6]||(l[6]=e=>C.value=e.target.value),"onUpdate:callStatus":l[7]||(l[7]=e=>D.value=e.target.value),"onUpdate:studentSatisfaction":l[8]||(l[8]=e=>fe.value=e.target.value)},null,8,["readonly","student-satisfaction","detail","ticket-return","call-status","ticket-return-options","call-status-option","student-satisfaction-option"])])),action:k((()=>[I(c,{color:"primary",raised:"",loading:j(Re),disabled:j(ye)||e.readonly,onClick:Te},{default:k((()=>[me])),_:1},8,["loading","disabled"])])),_:1},8,["open","title"])}}});fe.__scopeId="data-v-70886c7f";export{fe as _};
