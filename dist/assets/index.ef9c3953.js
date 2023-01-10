var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e},l=(e,s)=>a(e,t(s)),c=(e,a)=>{var t={};for(var o in e)i.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))a.indexOf(o)<0&&r.call(e,o)&&(t[o]=e[o]);return t};import{_ as m}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{e as d,p as u,c as p,h as f}from"./index.d7dc1ff6.js";import{_ as v}from"./VModal.31b4f4ba.js";import{_ as b}from"./VAvatarStack.vue_vue&type=script&setup=true&lang.cabf7e43.js";import{_ as y}from"./Datatable.aae3ef08.js";import{q as g,A as h,Y as j,ae as k,d as _,X as w,E as P,o as R,e as O,x,F as C,g as T,au as V,h as A,y as I,i as D,p as E,G as F,a as S}from"./vendor.1c8b4573.js";import{u as G}from"./usePermissionApi.9e405600.js";import{u as H}from"./useNotyf.ddf08f06.js";import{i as L}from"./avatar.helper.68db04c2.js";import{u as M}from"./usePaginationRoute.780ca235.js";import{u as $}from"./useGuardTeam.38dd8be1.js";import"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./search-4-dark.fb3880a5.js";E("data-v-98b6255a");const q={class:"page-content-inner"},z=F("Confirm"),B={class:"is-flex is-justify-content-flex-end pt-4"},N=F(" Create "),W={key:0,class:"dark-inverted is-flex is-justify-content-flex-end"},X=F(" Actions "),Y=A("div",{class:"icon"},[A("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),J=A("div",{class:"meta"},[A("span",null,"View"),A("span",null,"View team details")],-1),K=A("div",{class:"icon"},[A("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),Q=A("div",{class:"meta"},[A("span",null,"Edit"),A("span",null,"Edit team details")],-1),U={key:2,class:"dropdown-divider"},Z=["onClick"],ee=[A("div",{class:"icon"},[A("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),A("div",{class:"meta"},[A("span",null,"Remove"),A("span",null,"Remove from list")],-1)];S();var ae=_({setup(e){u.value="Team Information",w({title:"Whitehouse: Role & Permission"});const{teamInfo:a,total:t,isloading:s,teamTableHeaders:i,deleteTeam:r,confirmRemove:o}=function(){const e=g({teamInfo:[],isloading:!1,total:1,validate:{},confirmRemove:void 0});h();const a=H(),{currentPage:t,perPage:s,search:i}=M(),{getAllTeam:r,deleteTeam:o}=G(),m=async()=>{e.isloading=!0;const a=await r({currentPage:t,perPage:s,search:i});e.isloading=!1,e.teamInfo=a.data.map((e=>{var a=e,{admins:t}=a,s=c(a,["admins"]);return l(n({},s),{admins:t.map((e=>{var a=e,{firstname:t,lastname:s}=a,i=c(a,["firstname","lastname"]);const{initials:r,color:o}=L(t,s);return l(n({},i),{picture:i.avatar,firstname:t,lastname:s,initials:r,color:o})}))})})),e.total=a.total};return j((()=>{m()})),l(n({},k(e)),{teamTableHeaders:[{key:"id",label:"ID"},{key:"name",label:"Team"},{key:"description",label:"Description"},{key:"member",label:"Member",isRaw:!0}],deleteTeam:async()=>{if(!e.confirmRemove)return;const t=await o(e.confirmRemove);200===t.status?(a.success("success!"),m(),e.confirmRemove=void 0):a.error(d(t.message))}})}(),{capabilities:_,haveActionButton:E}=$();return(e,n)=>{const l=m,c=p,d=v,u=b,g=P("RouterLink"),h=f,j=y;return R(),O("div",q,[x(d,{title:"",open:T(o),actions:"center",onClose:n[0]||(n[0]=e=>o.value=void 0)},{content:C((()=>[x(l,{title:"Remove confirm",subtitle:"Are you sure to remove this team ?"})])),action:C((()=>[x(c,{color:"primary",raised:"",onClick:T(r)},{default:C((()=>[z])),_:1},8,["onClick"])])),_:1},8,["open"]),x(j,{headers:T(i),data:T(a),total:T(t),"is-loading":T(s),class:"team-table","is-action":T(E)},V({member:C((({value:e})=>[x(u,{avatars:e.admins,size:"small"},null,8,["avatars"])])),action:C((({value:e})=>[T(E)?(R(),O("div",W,[x(h,{spaced:"",right:""},{button:C((({toggle:e})=>[x(c,{icon:"feather:more-vertical",class:"is-trigger",onClick:e},{default:C((()=>[X])),_:2},1032,["onClick"])])),content:C((()=>[T(_).canView?(R(),I(g,{key:0,role:"menuitem",class:"dropdown-item is-media",to:{name:"permissions-teams-:id",params:{id:`${e.id}`}}},{default:C((()=>[Y,J])),_:2},1032,["to"])):D("",!0),T(_).canEdit?(R(),I(g,{key:1,role:"menuitem",class:"dropdown-item is-media",to:{name:"permissions-teams-:id",params:{id:`${e.id}`},hash:"#edit"}},{default:C((()=>[K,Q])),_:2},1032,["to"])):D("",!0),T(_).canDelete?(R(),O("hr",U)):D("",!0),T(_).canDelete?(R(),O("a",{key:3,role:"menuitem",class:"dropdown-item is-media",onClick:a=>o.value=e.id},ee,8,Z)):D("",!0)])),_:2},1024)])):D("",!0)])),_:2},[T(_).canCreate?{name:"custom-right",fn:C((()=>[A("div",B,[x(c,{color:"primary",icon:"fas fa-plus",to:"teams/create"},{default:C((()=>[N])),_:1})])]))}:void 0]),1032,["headers","data","total","is-loading","is-action"])])}}});ae.__scopeId="data-v-98b6255a";export default ae;