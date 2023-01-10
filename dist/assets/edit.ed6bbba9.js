var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,i=(e,a)=>{for(var s in a||(a={}))l.call(a,s)&&n(e,s,a[s]);if(t)for(var s of t(a))o.call(a,s)&&n(e,s,a[s]);return e},r=(e,t)=>a(e,s(t));import{e as u,p as c,c as d}from"./index.d7dc1ff6.js";import{_ as p,a as m}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as g}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as v}from"./VButtons.vue_vue&type=script&setup=true&lang.18e95460.js";import{_ as f}from"./VIconBox.vue_vue&type=script&setup=true&lang.7bffdb35.js";import{_ as h}from"./VTag.vue_vue&type=script&setup=true&lang.b31af8ee.js";import{_ as b}from"./VTags.vue_vue&type=script&setup=true&lang.156e160d.js";import{_ as y}from"./VCard.vue_vue&type=script&setup=true&lang.27754e87.js";import{_}from"./FlexListPermission.2b0135fd.js";import{b as w,A as O,q as j,k,Y as I,ae as x,N as D,d as M,T as R,o as V,e as P,g as C,h as N,x as T,F as U,i as B,K as L,ai as q,O as A,V as F,H as S,I as z,t as E,G,y as H,p as K,a as W}from"./vendor.1c8b4573.js";import{_ as Y}from"./error-2.ea43b3eb.js";import{u as $}from"./useOptionApi.f4dc99b9.js";import{u as J}from"./usePermissionApi.9e405600.js";import"./VMessage.vue_vue&type=script&setup=true&lang.1bdbe413.js";import"./VBlock.vue_vue&type=script&setup=true&lang.2e664adb.js";import"./quiz.enum.fc8b95fc.js";const Q=new D({duration:2e3,position:{x:"center",y:"top"}});function X(){const{getRoleById:e,getMenus:a,updateRole:s}=J(),{getTeams:t}=$(),l=w(),o=O(),n=j({roleData:null,menuItems:[],roleName:"",roleDescription:"",teamId:void 0,teamOptions:[],loadingRole:!1,menuLoading:!1,loadingOption:!1,showMessage:!1}),c=k((()=>n.roleDescription.trim().length<12||n.roleName.trim().length<4||0===d.value.length)),d=k((()=>n.menuItems.reduce(((e,a)=>{let s=0;const t=a.subMenus.filter((({actions:e})=>{const a=(e||[]).filter((e=>e.selected));return(null==a?void 0:a.length)>0&&(s+=a.length,!0)}));return(null==t?void 0:t.length)>0&&e.push({name:a.name,icon:"feather:file-plus",actions:s,subtitles:null==t?void 0:t.length,subMenus:t.map((({name:e,actions:a})=>({name:e,actions:(a||[]).filter((({selected:e})=>e)).map((e=>({id:e.id,name:e.actionName})))})))}),e}),[]))),p=k((()=>(0===d.value.length&&(n.showMessage=!0),n.showMessage))),m=k((()=>0===d.value.length?"danger":"success")),g=async()=>{var e;if(n.menuLoading=!0,n.roleData){const s=null==(e=n.roleData.permissions)?void 0:e.map((({id:e})=>e)),t=await a();n.menuItems=t.map((e=>{let a=0;const t=e.subMenus.map((e=>{const t=e.permissions.map((e=>{const a=null==s?void 0:s.includes(e.id);return r(i({},e),{selected:a})}));return a+=t.length,r(i({},e),{actions:t})}));return r(i({},e),{show:!1,subtitles:t.length,actions:a,icon:"feather:file-plus",subMenus:t})}))}n.menuLoading=!1,n.showMessage=!1},v=async e=>(n.loadingOption=!0,n.teamOptions=await t({currentPage:1,perPage:25,search:e}),n.loadingOption=!1,n.teamOptions);return I((async()=>{await(async a=>{var s;n.loadingRole=!0;const t=await e(a);n.loadingRole=!1,t&&(n.roleData=t,n.roleData&&(n.roleName=t.name||"",n.roleDescription=t.description||"",n.teamId=null==(s=t.team)?void 0:s.id))})(parseInt(`${o.params.id}`)),g(),v()})),r(i({},x(n)),{disabledCreateBtn:c,selectedItems:d,verifyMessage:p,colorMessage:m,fetchTeamsOption:v,onUpdate:async()=>{var e;const a=d.value.map((e=>e.subMenus.map((e=>e.actions.map((e=>e.id)))))).flat(2);if((null==n?void 0:n.teamId)&&(null==(e=n.roleData)?void 0:e.id)){const{status:e,message:t}=await s({description:n.roleDescription,id:n.roleData.id,teamId:n.teamId,name:n.roleName,permissionIds:a});200===e?Q.open({type:"success",message:"Role was updated!"}):Q.open({message:u(t),type:"error"})}const t=n.teamOptions.find((({id:e})=>e===n.teamId));await l.push({name:"permissions-roles",query:{search:(null==t?void 0:t.name)||""}})},onReset:async()=>{var e,a,s,t;n.roleDescription=(null==(e=n.roleData)?void 0:e.description)||"",n.roleName=(null==(a=n.roleData)?void 0:a.name)||"",n.teamId=null==(t=null==(s=n.roleData)?void 0:s.team)?void 0:t.id,await g()}})}K("data-v-935cce8a");const Z={class:"box-container"},ee={key:0},ae={class:"error-container"},se={class:"error-wrapper"},te={class:"error-inner has-text-centered"},le=N("div",{class:"bg-number"},"404",-1),oe=N("img",{src:Y,alt:""},null,-1),ne=N("h3",null,"We couldn't find that page",-1),ie=N("p",null," Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists. ",-1),re={class:"button-wrap"},ue=G(" Take me Back "),ce={key:1,class:"box-permission"},de=N("div",{class:"py-4"},[N("h3",{class:"text-header"},"Update Role")],-1),pe=N("label",null,"Role name",-1),me={class:"help has-text-danger"},ge=N("label",null,"Role description",-1),ve={class:"help has-text-danger"},fe=N("label",null,"Team",-1),he={class:"help has-text-danger"},be={class:"align-button mt-4 py-4"},ye=G(" Reset "),_e=G(" Update "),we={key:0},Oe=["data-icon"],je={class:"flex-meta"},ke=N("i",{class:"fas fa-list"},null,-1),Ie=N("i",{class:"lnir lnir-bookmark"},null,-1),xe={class:"pb-1"};W();var De=M({setup(e){c.value="Update Role";const{roleData:a,menuItems:s,roleName:t,roleDescription:l,teamOptions:o,teamId:n,loadingRole:i,menuLoading:r,loadingOption:u,showMessage:w,colorMessage:O,verifyMessage:j,selectedItems:I,disabledCreateBtn:x,fetchTeamsOption:D,onUpdate:M,onReset:K}=X(),{y:W}=R();return k((()=>W.value>300)),(e,o)=>{const c=d,w=p,k=m,R=g,W=v,Y=f,$=h,J=b,Q=y,X=_;return V(),P("div",Z,[C(a)||C(i)||C(r)?B("",!0):(V(),P("div",ee,[N("div",ae,[N("div",se,[N("div",te,[le,oe,ne,ie,N("div",re,[T(c,{color:"primary",elevated:"",to:{name:"permissions-roles"}},{default:U((()=>[ue])),_:1})])])])])])),!C(a)||C(i)||C(r)?B("",!0):(V(),P("div",ce,[T(Q,null,{default:U((()=>[de,N("div",null,[T(k,null,{default:U((()=>[pe,T(w,{icon:"lnil lnil-protection"},{default:U((()=>[L(N("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>A(t)?t.value=e:null),type:"text",class:"input",placeholder:"Role name"},null,512),[[q,C(t)]])])),_:1}),L(N("p",me," Role name required atleast 4 characters. ",512),[[F,C(t).trim().length<4]])])),_:1}),T(k,null,{default:U((()=>[ge,T(w,null,{default:U((()=>[L(N("textarea",{"onUpdate:modelValue":o[1]||(o[1]=e=>A(l)?l.value=e:null),class:"textarea",rows:"3",placeholder:"A description for this role..."},null,512),[[q,C(l)]])])),_:1}),L(N("p",ve," Role description required atleast 12 characters. ",512),[[F,C(l).trim().length<12]])])),_:1}),T(k,{class:"is-autocomplete-select"},{default:U((()=>[fe,T(w,{icon:"feather:search",loading:C(u)},{default:U((()=>[T(R,{modelValue:C(n),"onUpdate:modelValue":o[2]||(o[2]=e=>A(n)?n.value=e:null),"callback-search":C(D),"tract-by":"name","value-prop":"id",placeholder:"Select team"},null,8,["modelValue","callback-search"]),L(N("p",he," Choose team for this role. ",512),[[F,!C(n)]])])),_:1},8,["loading"])])),_:1})]),N("div",be,[T(W,null,{default:U((()=>[T(c,{loading:C(r),onClick:C(K)},{default:U((()=>[ye])),_:1},8,["loading","onClick"]),T(c,{color:"primary",disabled:C(x),onClick:C(M)},{default:U((()=>[_e])),_:1},8,["disabled","onClick"])])),_:1})]),C(I).length>0?(V(),P("div",we,[(V(!0),P(S,null,z(C(I),((e,a)=>(V(),P("div",{key:a,class:"media-flex"},[T(Y,{key:e.icon,size:"small",color:"primary"},{default:U((()=>[N("i",{class:"iconify","data-icon":e.icon},null,8,Oe)])),_:2},1024),N("div",je,[N("span",null,E(e.name),1),N("span",null,[ke,G(" "+E(e.subtitles)+" subtitles ",1),Ie,G(" "+E(e.actions)+" actions",1)]),(V(!0),P(S,null,z(e.subMenus,((e,a)=>(V(),P("div",{key:a,class:"pt-2"},[N("h3",xe,E(e.name),1),T(J,{class:"mb-1"},{default:U((()=>[(V(!0),P(S,null,z(e.actions,((e,a)=>(V(),H($,{key:a,label:e.name.replace(/_/g," ")},null,8,["label"])))),128))])),_:2},1024)])))),128))])])))),128))])):B("",!0)])),_:1})])),C(a)&&!C(r)?(V(),H(X,{key:2,items:C(s),"show-message":C(j),"color-message":C(O)},null,8,["items","show-message","color-message"])):B("",!0)])}}});De.__scopeId="data-v-935cce8a";export default De;