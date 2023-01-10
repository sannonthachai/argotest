var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{c as d,e as c}from"./index.d7dc1ff6.js";import{_ as o}from"./VModal.31b4f4ba.js";import{t as r}from"./date.helper.6ae3fc87.js";import{p as u,a as p,d as m,o as f,y as k,F as v,h as y,t as b,G as D,g as T,x as g,q as h,r as V,A as x,b as j,S as _,D as C,k as E,ae as I,z as U,T as w,E as O,O as M,n as S,e as Y,i as P,ao as L,ap as A,K as F,V as G,I as R,H as q,ai as z}from"./vendor.1c8b4573.js";import{_ as K,a as B}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as N}from"./VRadio.89eaf975.js";import{_ as H}from"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import{u as J}from"./useGuardPartner.354c9ce1.js";import{u as Q}from"./usePartnerApi.2e3c406b.js";import{u as W}from"./useNotyf.ddf08f06.js";import{T as X}from"./ticket.enum.46025ae5.js";import"./index.ec15dc7d.js";import"./lodash.0a1ccad5.js";u("data-v-297aa84e");const Z={class:"columns is-multiline is-centered"},$={class:"column is-10 mb-4"},ee={class:"title is-6"},te=y("div",{class:"column is-3"},[y("p",null,"End date:")],-1),ae={class:"column is-7 word-wrap"},ie=y("i",{class:"fas fa-arrow-right mx-3","aria-hidden":"true"},null,-1),se={class:"primary"},le=y("div",{class:"column is-3"},[y("p",null,"Ticket type:")],-1),ne={class:"column is-7 word-wrap"},de=y("div",{class:"column is-3"},[y("p",null,"Comment:")],-1),ce={class:"column is-7 word-wrap"},oe=D("Confirm");p();var re=m({props:{modelValue:{type:Boolean,default:!1,required:!0},description:{type:String,default:""},title:{type:String,default:"Are you sure?"},detailValue:{type:Object,required:!0}},emits:["update:modelValue","confirm"],setup(e,{emit:t}){const a=r,i=()=>{t("update:modelValue",!1)},s=()=>{t("confirm",!0),i()};return(t,l)=>{const n=d,c=o;return f(),k(c,{open:e.modelValue,title:"Edit Expire Date",size:"medium",actions:"center",onClose:i},{content:v((()=>[y("div",Z,[y("div",$,[y("p",ee,b(e.description),1)]),te,y("div",ae,[y("p",null,[D(b(T(a)(e.detailValue.oldEndDate,"DD/MM/YYYY"))+" ",1),ie,y("span",se,b(T(a)(e.detailValue.endDate,"DD/MM/YYYY")),1)])]),le,y("div",ne,[y("p",null,b(e.detailValue.ticketType),1)]),de,y("div",ce,[y("p",null,b(e.detailValue.comment),1)])])])),action:v((()=>[g(n,{color:"primary",raised:"",onClick:s},{default:v((()=>[oe])),_:1})])),_:1},8,["open"])}}});function ue(){const e=h({isLoading:!1,disableInput:!1,oldTicketDate:{end:""},ticketDateInfo:{end:""},ticketDateUpdate:{endDate:"",comment:"",ticketType:void 0},validate:{}}),d=V(!1),o=x(),r=j(),u=W(),p=o.params.id,{updateChangeTicketDate:m,getTicketDate:f}=Q(),k=[{index:0,ticketType:X.FMC,name:"Find my coach"},{index:1,ticketType:X.FREETALK,name:"Free talk"},{index:2,ticketType:X.GBP,name:"Globish plus"},{index:3,ticketType:X.GROUP,name:"Discussion class"},{index:4,ticketType:X.MASTER,name:"Master class"},{index:5,ticketType:X.PACKAGE,name:"Private Class"}];_((()=>e.ticketDateUpdate.ticketType),(async t=>{e.isLoading=!0;const{status:a,message:i,data:s}=await f({ticketType:t,batchId:Number(p)});200===a?(e.ticketDateInfo.end=C(s).format()||"",e.oldTicketDate.end=C(s).format()||"",e.validate={},e.disableInput=!1):(e.disableInput=!0,e.validate={comment:i},e.ticketDateInfo.end="",e.oldTicketDate.end="",u.error(i)),e.isLoading=!1}));const v=E((()=>Object.values(e.ticketDateInfo).every((e=>e))&&""!==e.ticketDateUpdate.comment&&void 0!==e.ticketDateUpdate.ticketType&&!1===e.disableInput)),y=E((()=>{var t;return{oldEndDate:e.oldTicketDate.end,endDate:e.ticketDateInfo.end,ticketType:null==(t=k.find((t=>t.ticketType===e.ticketDateUpdate.ticketType)))?void 0:t.name,comment:e.ticketDateUpdate.comment}}));return b=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&n(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&n(e,a,t[a]);return e})({},I(e)),t(b,a({confirmChangeExpireDate:d,updateChangeTicket:async()=>{e.isLoading=!0,e.ticketDateUpdate={endDate:C(e.ticketDateInfo.end).toISOString(),comment:e.ticketDateUpdate.comment,ticketType:e.ticketDateUpdate.ticketType};const t=await m(+p,e.ticketDateUpdate);if(200===t.status)u.success("success!"),e.validate={},e.oldTicketDate.end=C(e.ticketDateUpdate.endDate).format()||"",r.go(0);else if("object"==typeof t.message){const a=Object.values(t.message).toString();e.validate={comment:a},u.error(c(a))}else u.error(c(t.message)),e.validate={comment:t.message};e.isLoading=!1},ticketTypeRadio:k,canSubmit:v,openConfirmModal:()=>{e.ticketDateUpdate.ticketType?""!==e.ticketDateUpdate.comment?d.value=!0:e.validate={comment:"comment must not be empty"}:e.validate={comment:"please select ticket type"}},detailConfirmValue:y}));var b}re.__scopeId="data-v-297aa84e",u("data-v-0a8278ae");const pe={class:"account-box is-form is-footerless"},me={class:"form-head-inner"},fe=y("div",{class:"left"},[y("h2",{class:"title is-5 is-narrow is-bolder"},"Extend Expire Ticket"),y("p",null,"*Select ticket type first before extend the expire date")],-1),ke={key:0,class:"right"},ve=D(" Submit"),ye={class:"form-body"},be={class:"form-fieldset"},De={class:"columns is-multilline"},Te={class:"column is-6"},ge=y("label",null,[D("Last expire date"),y("span",{class:"red"},"*")],-1),he=["value","disabled"],Ve=y("label",{class:"subtitle is-6"},[D("Ticket type"),y("span",{class:"red"},"*")],-1),xe={class:"radio-container"},je=y("label",{class:"subtitle is-6"},[D("Comment"),y("span",{class:"red"},"*")],-1),_e=["disabled"];p();var Ce=m({setup(e){const{changeexpireDateTicker:t}=J();U("batchInfo");const{isLoading:a,disableInput:i,confirmChangeExpireDate:s,ticketDateInfo:l,ticketDateUpdate:n,validate:c,oldTicketDate:o,ticketTypeRadio:r,updateChangeTicket:u,canSubmit:p,openConfirmModal:m,detailConfirmValue:D}=ue(),{y:h}=w(),V=E((()=>h.value>30));return(e,o)=>{const h=re,x=d,j=K,_=B,C=O("v-date-picker"),E=N,I=K,U=B,w=H;return f(),k(w,{size:"large",translucent:"",active:T(a)},{default:v((()=>[g(h,{modelValue:T(s),"onUpdate:modelValue":o[0]||(o[0]=e=>M(s)?s.value=e:null),title:"Are you sure?",description:"Changing expire date will affect all students in the batch.","detail-value":T(D),onConfirm:o[1]||(o[1]=e=>T(u)())},null,8,["modelValue","detail-value"]),y("div",pe,[y("div",{class:S([[T(V)&&"is-stuck"],"form-head stuck-header"])},[y("div",me,[fe,T(t).canEdit?(f(),Y("div",ke,[g(x,{disabled:!T(p)||!T(l),color:"primary",onClick:T(m)},{default:v((()=>[ve])),_:1},8,["disabled","onClick"])])):P("",!0)])],2),y("div",ye,[y("div",be,[y("div",De,[y("div",Te,[g(C,{modelValue:T(l).end,"onUpdate:modelValue":o[2]||(o[2]=e=>T(l).end=e),color:"orange",masks:{input:"DD/MM/YYYY"},popover:{visibility:"click"}},{default:v((({inputValue:e,inputEvents:a})=>[ge,g(_,null,{default:v((()=>[g(j,{class:"date-picker-box"},{default:v((()=>[y("input",L({value:e,class:"input",disabled:!T(t).canEdit||T(i)||""===T(l).end},A(a)),null,16,he)])),_:2},1024),F(y("div",{class:"help is-danger"},b(T(c).startDate),513),[[G,T(c).startDate]]),F(y("div",{class:"help is-danger"},b(T(c).endDate),513),[[G,T(c).endDate]])])),_:2},1024)])),_:1},8,["modelValue"])])]),T(r)?(f(),k(U,{key:0},{default:v((()=>[Ve,y("div",xe,[(f(!0),Y(q,null,R(T(r),((e,a)=>(f(),k(I,{key:a},{default:v((()=>[g(U,null,{default:v((()=>[g(I,null,{default:v((()=>[g(E,{modelValue:T(n).ticketType,"onUpdate:modelValue":o[3]||(o[3]=e=>T(n).ticketType=e),class:"subtitle is-6",disabled:!T(t).canEdit,value:e.ticketType,label:e.name,name:e.ticketType,color:"warning"},null,8,["modelValue","disabled","value","label","name"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):P("",!0),g(_,null,{default:v((()=>[je,g(j,null,{default:v((()=>[F(y("textarea",{"onUpdate:modelValue":o[4]||(o[4]=e=>T(n).comment=e),disabled:!T(t).canEdit||T(i)||""===T(l).end,type:"text",class:"textarea is-primary-focus",rows:"4"},null,8,_e),[[z,T(n).comment]]),F(y("p",{class:"help is-danger"},b(T(c).comment),513),[[G,T(c).comment]])])),_:1})])),_:1})])])])])),_:1},8,["active"])}}});Ce.__scopeId="data-v-0a8278ae";export default Ce;