var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;import{_ as o}from"./VIconBox.vue_vue&type=script&setup=true&lang.7bffdb35.js";import{_ as i,a as n}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as r}from"./VModal.31b4f4ba.js";import{p as c,a as d,d as u,J as p,k as m,o as v,y as h,F as f,h as b,e as y,I as g,t as k,g as w,H as C,x,G as j,K as I,ai as _,r as R,E as N,V as P,n as S,i as V,q as F,A as $,Y as q,ae as O}from"./vendor.1c8b4573.js";import{_ as A}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as D,a as L}from"./search-4-dark.fb3880a5.js";import{_ as M}from"./lodash.0a1ccad5.js";import{c as Y,h as B}from"./index.d7dc1ff6.js";import{_ as H}from"./Datatable.aae3ef08.js";import{u as T}from"./useStudentApi.e8de2a80.js";import{u as z}from"./usePaginationRoute.780ca235.js";import{t as E}from"./date.helper.6ae3fc87.js";import{u as G}from"./useGuardStudent.237f12b5.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./index.ec15dc7d.js";c("data-v-30da0ae3");const J={class:"modal-form"},K={class:"title is-6 is-narrow is-thin"},U={class:"point-box mt-4 mb-4"},Q={class:"title is-6 is-narrow is-thin"};d();var W=u({props:{openModal:{type:Boolean,default:!1},info:{type:Object,required:!0},classId:{type:Number,default:0}},emits:["on-close"],setup(e,{emit:a}){const s=e,{t:t}=p(),l=m((()=>1===s.info.version?1:2)),c=m((()=>1===l.value?["q1","q2","q3"]:["q1","q2","q3","q4","q5","q6"]));return(s,d)=>{const u=o,p=i,m=n,R=r;return v(),h(R,{open:e.openModal,title:`Student Feedback (Class ID:${e.classId})`,actions:"right",size:"medium",onClose:d[1]||(d[1]=e=>a("on-close"))},{content:f((()=>[b("div",J,[(v(!0),y(C,null,g(w(c),((a,s)=>(v(),y("div",{key:s},[b("div",null,[b("h2",K,k(`${s+1}. `)+k(w(t)(`student-feedback.version-${w(l)}.${a}`)),1),b("div",U,[(v(),y(C,null,g(4,(s=>b("div",{key:s},[x(u,{rounded:"",color:e.info[a]==s?"primary":"gray"},{default:f((()=>[j(k(s),1)])),_:2},1032,["color"])]))),64))])])])))),128)),x(m,null,{default:f((()=>[b("h2",Q,k(`${w(c).length+1}. `)+k(w(t)(`student-feedback.version-${w(l)}.comment`)),1),x(p,null,{default:f((()=>[I(b("textarea",{"onUpdate:modelValue":d[0]||(d[0]=a=>e.info.etc=a),type:"textarea",class:"textarea is-primary-focus mt-4",rows:"4",placeholder:"comment",readonly:""},null,512),[[_,e.info.etc]])])),_:1})])),_:1})])])),_:1},8,["open","title"])}}});W.__scopeId="data-v-30da0ae3";const X=[{label:"Did coach start a new lesson?",key:"isNewLesson",choices:["Yes, I started a new lesson","No, I continued from previous lesson","Free talking"]},{label:"Did coach finish the whole lesson completely?",key:"isFinished",choices:["Yes, I finished the whole lesson completely","No, I did not finish the whole lesson completely","Free talking"]}];c("data-v-bc9c84a0");const Z=b("img",{class:"light-image",src:D,alt:""},null,-1),ee=b("img",{class:"dark-image",src:L,alt:""},null,-1),ae={key:1,class:"modal-form"},se={class:"title is-5 is-narrow"},te={class:"is-flex is-justify-content-space-between mt-3"},le={class:"title is-6 is-narrow is-bolder mb-0 text-title"},oe={class:"score"},ie=b("div",{class:"is-divider my-1"},null,-1),ne={class:"detail"},re={key:0,class:"coach-class-info-report"},ce=b("h2",{class:"title is-5 is-narrow"},"From Coach Report",-1),de={class:"class-info-wrapper"},ue={class:"title is-6 is-narrow mb-3"},pe={class:"choice-wrapper"},me={key:1,class:"mt-5"},ve={class:"title is-5 is-narrow"},he={class:"message-box"},fe={class:"mt-5"},be={class:"title is-5 is-narrow"},ye={class:"message-box"},ge={class:"addon-list"},ke={class:"mt-5"},we={class:"title is-5 is-narrow"},Ce={class:"message-box"},xe={class:"addon-list"},je={class:"mt-5"},Ie={class:"title is-5 is-narrow"},_e={class:"message-box"};d();var Re=u({props:{openModal:{type:Boolean,default:!1},info:{type:Object,required:!0},classId:{type:Number,default:0}},emits:["on-close"],setup(e,{emit:a}){const s=e,{t:t}=p(),l=R(!1),o=R(X),i=m((()=>{var e;return(null==(e=s.info.strengths)?void 0:e.filter((e=>e.length>1)))||[]})),n=m((()=>{var e;return(null==(e=s.info.suggestions)?void 0:e.filter((e=>e.length>1)))||[]}));m((()=>1===s.info.version?1:2));const c=m((()=>{var e,a;return(null==(a=null==(e=s.info)?void 0:e.evaluations)?void 0:a.map((e=>+e.score)))||[]})),d=m((()=>{var e,a;return(null==(a=null==(e=s.info)?void 0:e.evaluations)?void 0:a.map((e=>M.capitalize(e.title))))||[]})),u={series:[{data:c.value}],chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0,barHeight:"50%"}},dataLabels:{enabled:!1},xaxis:{categories:d.value},yaxis:{min:0,max:5},colors:["#FCAE1E"]},j=()=>{l.value?l.value=!1:l.value=!0};return(s,c)=>{const d=A,p=N("apexchart"),m=r;return v(),h(m,{open:e.openModal,title:`Class Report (Class ID:${e.classId})`,actions:"right",size:"medium",onClose:c[0]||(c[0]=e=>a("on-close"))},{content:f((()=>{var a,s;return["Absent"===e.info.attendance||e.info.problemReasons?(v(),h(d,{key:0,title:e.info.problemReasons?"Student Present":"Student absent",subtitle:e.info.problemReasons?e.info.problemReasons:"No report to show."},{image:f((()=>[Z,ee])),_:1},8,["title","subtitle"])):(v(),y("div",ae,[b("div",null,[b("h2",se,k(w(t)("class-report.class-report")),1),b("div",null,[x(p,{width:"500",type:"bar",options:u,series:u.series},null,8,["series"])])]),b("div",null,[b("a",{class:"link mb-2",onClick:j},k(l.value?`< ${w(t)("class-report.hide")}`:`${w(t)("class-report.more-detail")} >`),1),I(b("div",null,[(v(!0),y(C,null,g(e.info.evaluations,((e,a)=>(v(),y("div",{key:a,class:"p-2"},[b("div",te,[b("h2",le,k(e.title),1),b("div",oe,k(e.score)+" Point",1)]),ie,b("div",ne,k(e.description),1)])))),128))],512),[[P,l.value]])]),e.info.isFinished||e.info.isNewLesson?(v(),y("div",re,[ce,b("div",de,[(v(!0),y(C,null,g(o.value,((a,s)=>(v(),y("div",{key:`c-${s}`,class:"class-info-row"},[b("h2",ue,k(a.label),1),b("div",pe,[(v(!0),y(C,null,g(a.choices,((s,t)=>(v(),y("div",{key:`choice-${t}`,class:S(["choice-box",[t===e.info[a.key].value&&"selected"]])},k(s),3)))),128))])])))),128))])])):V("",!0),e.info.additionalMessage?(v(),y("div",me,[b("h2",ve,k(w(t)("class-report.additional-message")),1),b("div",he,k(e.info.additionalMessage?e.info.additionalMessage:"-"),1)])):V("",!0),I(b("div",fe,[b("h2",be,k(w(t)("class-report.your-strength")),1),b("div",ye,[b("ul",ge,[(v(!0),y(C,null,g(w(i),(e=>(v(),y("li",{key:`addon-${e}`},k(e),1)))),128))])])],512),[[P,(null==(a=w(i))?void 0:a.length)>0]]),I(b("div",ke,[b("h2",we,k(w(t)("class-report.suggestion-from-coach")),1),b("div",Ce,[b("ul",xe,[(v(!0),y(C,null,g(w(n),(e=>(v(),y("li",{key:`addon-${e}`,class:"is-light-text"},k(e),1)))),128))])])],512),[[P,(null==(s=w(n))?void 0:s.length)>0]]),b("div",je,[b("h2",Ie,k(w(t)("class-report.message-from-coach")),1),b("div",_e,k(e.info.otherComment?e.info.otherComment:"-"),1)])]))]})),_:1},8,["open","title"])}}});function Ne(){const e=F({data:[],total:0,isLoading:!0}),o=$(),{currentPage:i,perPage:n,search:r}=z(),{getStudentPrivateClass:c}=T();return q((()=>{(async()=>{const a=o.params.id;e.isLoading=!0;const s=await c(+a,{currentPage:i,perPage:n,search:r});e.isLoading=!1,s&&(e.data=s.data,e.total=s.total)})()})),((e,o)=>{for(var i in o||(o={}))s.call(o,i)&&l(e,i,o[i]);if(a)for(var i of a(o))t.call(o,i)&&l(e,i,o[i]);return e})({},O(e))}Re.__scopeId="data-v-bc9c84a0";const Pe={class:"account-box"},Se=b("h1",{class:"title is-4 p-3"},"Private Class History",-1),Ve={class:"page-content-inner"},Fe={key:0,class:"dark-inverted is-flex is-justify-content-flex-end"},$e=j(" Feedback "),qe=["onClick"],Oe=[b("div",{class:"icon"},[b("i",{class:"lnir lnir-mask","aria-hidden":"true"})],-1),b("div",{class:"meta"},[b("span",null,"Student "),b("span",null,"View student report")],-1)],Ae=["onClick"],De=[b("div",{class:"icon"},[b("i",{class:"lnir lnir-pie-chart-alt","aria-hidden":"true"})],-1),b("div",{class:"meta"},[b("span",null,"Coach"),b("span",null,"View coach report")],-1)];var Le=u({setup(e){const{data:a,total:s,isLoading:t}=Ne(),l=[{key:"id",label:"ID",isCenter:!0},{key:"packageName",label:"Package"},{key:"coachName",label:"Coach",isRaw:!0},{key:"date",label:"Class Date",isRaw:!0},{key:"time",label:"Class Time",isRaw:!0},{key:"lessonNumber",label:"Lesson Number",isCenter:!0},{key:"lessonName",label:"Lesson Name"},{key:"ticketType",label:"Ticket Type"},{key:"coachAttend",label:"Coach Attend"},{key:"studentAttend",label:"Student Attend"}],{privateClassReport:o}=G(),i=$(),n=R(void 0),r=R(void 0),{getStudentFeedbackReportById:c,getCoachFeedbackReportById:d}=T(),u=R(0),p=()=>{n.value=void 0,r.value=void 0};return(e,m)=>{const g=W,C=Re,I=Y,_=B,R=H;return v(),y("div",Pe,[Se,b("div",Ve,[n.value?(v(),h(g,{key:0,"class-id":u.value,"open-modal":!!n.value,info:n.value,onOnClose:p},null,8,["class-id","open-modal","info"])):V("",!0),r.value?(v(),h(C,{key:1,"class-id":u.value,"open-modal":!!r.value,info:r.value,onOnClose:p},null,8,["class-id","open-modal","info"])):V("",!0),x(R,{"search-placeholder":"Search by Class ID, Package or Coach","is-loading":w(t),headers:l,data:w(a),total:w(s),"is-action":w(o).canViewStudent||w(o).canViewCoach},{coachName:f((({value:e})=>[j(k(e.coach.name),1)])),date:f((({value:e})=>[j(k(w(E)(e.time,"DD/MM/YYYY")),1)])),time:f((({value:e})=>[j(k(w(E)(e.time,"HH:mm:ss")),1)])),coachAttend:f((({value:e})=>[j(k(e?w(E)(e):"-"),1)])),studentAttend:f((({value:e})=>[j(k(e?w(E)(e):"-"),1)])),lessonNumber:f((({value:e})=>[j(k(e||"-"),1)])),lessonName:f((({value:e})=>[j(k(e||"-"),1)])),ticketType:f((({value:e})=>[j(k(e||"-"),1)])),action:f((({value:e})=>[e.haveStudentReport||e.haveCoachReport?(v(),y("div",Fe,[x(_,{spaced:"",right:""},{button:f((({toggle:e})=>[x(I,{icon:"feather:more-vertical",class:"is-trigger",onClick:e},{default:f((()=>[$e])),_:2},1032,["onClick"])])),content:f((()=>[w(o).canViewStudent&&e.haveStudentReport?(v(),y("a",{key:0,role:"menuitem",class:"dropdown-item is-media",onClick:a=>(async e=>{const a=await c({classId:e,studentId:+i.params.id});a&&(u.value=e,n.value=a)})(e.id)},Oe,8,qe)):V("",!0),w(o).canViewCoach&&e.haveCoachReport?(v(),y("a",{key:1,role:"menuitem",class:"dropdown-item is-media",onClick:a=>(async e=>{const a=await d({classId:e,studentId:+i.params.id});a&&(u.value=e,r.value=a)})(e.id)},De,8,Ae)):V("",!0)])),_:2},1024)])):V("",!0)])),_:1},8,["is-loading","data","total","is-action"])])])}}});export default Le;