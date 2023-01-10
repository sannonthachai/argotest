var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,l,n)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n;import{E as s,c as d}from"./index.d7dc1ff6.js";import{_ as u}from"./VAvatarEdit.vue_vue&type=style&index=0&lang.91cda85a.js";import{_ as i,a as c}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as m}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as p}from"./VCheckbox.0efaaab1.js";import{p as v,a as y,d as f,r as b,T as h,k as g,E as k,o as _,e as V,h as E,t as I,f as x,y as j,F as P,g as U,i as C,n as O,x as Y,K as D,ai as M,ao as R,ap as T,H as N,G as q}from"./vendor.1c8b4573.js";import{u as w}from"./useGuardAdmin.5c78da19.js";import{u as F}from"./useOptionApi.f4dc99b9.js";v("data-v-090888d0");const A={key:0,class:"form-outer"},S={class:"form-header-inner"},B={class:"left"},L={class:"right"},G={class:"buttons"},$=q(" Done "),z={class:"form-body"},H={class:"form-body"},K={class:"is-flex is-justify-content-center p-3"},J={key:0,class:"columns is-centered"},Q=[E("p",{class:"text-change-avatar"},"Click on image to change avatar",-1)],W={class:"columns is-multiline"},X={class:"column is-6"},Z=E("label",null,"Firstname",-1),ee=["readonly"],ae={key:0,class:"help is-danger"},le={class:"column is-6"},ne=E("label",null,"Lastname",-1),te=["readonly"],oe={key:0,class:"help is-danger"},re={class:"column is-6"},se=E("label",null,"Name",-1),de=["readonly"],ue={key:0,class:"help is-danger"},ie={class:"column is-6"},ce=E("label",null,"Phone",-1),me=["readonly"],pe={key:0,class:"help is-danger"},ve={class:"column is-12"},ye=E("label",null,"Date of birth",-1),fe=["value","readonly"],be={key:0,class:"help is-danger"},he={class:"column is-12"},ge=E("label",null,"Email",-1),ke={key:0,class:"help"},_e={class:"column is-12"},Ve=E("label",null,"Team",-1),Ee={key:0,class:"help"},Ie={class:"column is-12"},xe=E("label",null,"Role",-1),je={key:0,class:"help"},Pe={class:"column is-12"},Ue=E("label",null,"Country",-1),Ce={class:"column is-12"},Oe=E("label",null,"Manage Country",-1),Ye={key:0,class:"help is-danger"};y();var De=f({props:{header:{type:String,default:"Edit Profile"},readonly:{type:Boolean,default:!1},info:{type:Object,required:!0},validate:{type:Object,default:void 0},isMember:{type:Boolean,default:!1}},emits:["edit"],setup(e,{emit:v}){const y=e,f=b(y.info.manageCountry||[]),q=b({name:y.info.name,firstname:y.info.firstname,lastname:y.info.lastname,avatar:y.info.avatar,dob:y.info.dob,phone:y.info.phone,country:y.info.country,manageCountry:f.value,teamId:y.info.teamId,roleId:y.info.roleId}),{canEditAdminProfile:De}=w(),{canEditMemberProfile:Me}=s(),{getTeams:Re,getRoleByTeamId:Te}=F(),{y:Ne}=h(),qe=g((()=>Ne.value>30)),we=()=>{const e=(s=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&r(e,l,a[l]);if(n)for(var l of n(a))o.call(a,l)&&r(e,l,a[l]);return e})({},q.value),d={roleId:De.value.canEditRole||Me.value.canEditRole?q.value.roleId:void 0,teamId:De.value.canEditTeam||Me.value.canEditTeam?q.value.teamId:void 0},a(s,l(d)));var s,d;v("edit",e)},Fe=g((()=>!(q.value.manageCountry.length&&q.value.firstname&&q.value.lastname&&q.value.phone&&q.value.name&&q.value.dob))),Ae=async e=>await Re({currentPage:1,perPage:100,search:e}),Se=async e=>q.value.teamId?await Te({currentPage:1,perPage:100,search:e,teamId:q.value.teamId}):[],Be=async e=>{(null==q?void 0:q.value)&&(q.value.avatar=e)};return(a,l)=>{const n=d,t=u,o=i,r=c,s=k("v-date-picker"),v=m,y=k("Multiselect"),f=p;return e.info?(_(),V("div",A,[E("div",{class:O([[U(qe)&&"is-stuck"],"form-header stuck-header"])},[E("div",S,[E("div",B,[E("h3",null,I(e.header),1)]),E("div",L,[E("div",G,[x(a.$slots,"back",{},void 0,!0),e.readonly?C("",!0):(_(),j(n,{key:0,icon:"lnir lnir-checkmark",color:"primary",raised:"",disabled:U(Fe),onClick:we},{default:P((()=>[$])),_:1},8,["disabled"])),x(a.$slots,"buttons",{},void 0,!0)])])])],2),E("div",z,[E("div",H,[E("div",K,[Y(t,{picture:q.value.avatar?q.value.avatar:void 0,initials:e.info.initials,"can-edit":!e.readonly,color:e.info.color,size:"xl",class:"align-item-center","onUpdate:image":Be},null,8,["picture","initials","can-edit","color"])]),e.readonly?C("",!0):(_(),V("div",J,Q)),E("div",W,[E("div",X,[Y(r,null,{default:P((()=>[Z,Y(o,{"has-error":!q.value.firstname},{default:P((()=>[D(E("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>q.value.firstname=e),type:"text",class:"input",placeholder:"Firstname",readonly:e.readonly},null,8,ee),[[M,q.value.firstname]]),q.value.firstname?C("",!0):(_(),V("p",ae," Firstname is required "))])),_:1},8,["has-error"])])),_:1})]),E("div",le,[Y(r,null,{default:P((()=>[ne,Y(o,{"has-error":!q.value.lastname},{default:P((()=>[D(E("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>q.value.lastname=e),type:"text",class:"input",placeholder:"Lastname",readonly:e.readonly},null,8,te),[[M,q.value.lastname]]),q.value.lastname?C("",!0):(_(),V("p",oe," Lastname is required "))])),_:1},8,["has-error"])])),_:1})]),E("div",re,[Y(r,null,{default:P((()=>[se,Y(o,{"has-error":!q.value.name},{default:P((()=>[D(E("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>q.value.name=e),type:"text",class:"input",placeholder:"Name",readonly:e.readonly},null,8,de),[[M,q.value.name]]),q.value.name?C("",!0):(_(),V("p",ue," Name is required "))])),_:1},8,["has-error"])])),_:1})]),E("div",ie,[Y(r,null,{default:P((()=>[ce,Y(o,{"has-error":!q.value.phone},{default:P((()=>[D(E("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>q.value.phone=e),type:"text",class:"input",placeholder:"Phone Number",readonly:e.readonly},null,8,me),[[M,q.value.phone]]),q.value.phone?C("",!0):(_(),V("p",pe," Phone is required "))])),_:1},8,["has-error"])])),_:1})]),E("div",ve,[Y(s,{modelValue:q.value.dob,"onUpdate:modelValue":l[4]||(l[4]=e=>q.value.dob=e),color:"orange","model-config":{type:"string",mask:"YYYY-MM-DD"},masks:{input:"YYYY-MM-DD"},"trim-weeks":"",popover:{visibility:e.readonly?"":"click"}},{default:P((({inputValue:a,inputEvents:l})=>[Y(r,null,{default:P((()=>[ye,Y(o,{icon:"feather:calendar","has-error":!q.value.dob},{default:P((()=>[E("input",R({class:"input",type:"text",placeholder:"Date of birth YYYY-MM-DD",value:a,readonly:e.readonly},T(l)),null,16,fe),q.value.dob?C("",!0):(_(),V("p",be," Date of birth is required "))])),_:2},1032,["has-error"])])),_:2},1024)])),_:1},8,["modelValue","popover"])]),E("div",he,[Y(r,null,{default:P((()=>[ge,Y(o,null,{default:P((()=>[D(E("input",{"onUpdate:modelValue":l[5]||(l[5]=a=>e.info.email=a),type:"text",class:"input",readonly:""},null,512),[[M,e.info.email]]),e.readonly?C("",!0):(_(),V("p",ke,"*Readonly"))])),_:1})])),_:1})]),E("div",_e,[Y(r,null,{default:P((()=>[Ve,Y(o,null,{default:P((()=>[e.readonly?D((_(),V("input",{key:0,"onUpdate:modelValue":l[6]||(l[6]=a=>e.info.teamName=a),type:"text",class:"input",readonly:""},null,512)),[[M,e.info.teamName]]):(_(),V(N,{key:1},[Y(v,{modelValue:q.value.teamId,"onUpdate:modelValue":[l[7]||(l[7]=e=>q.value.teamId=e),l[8]||(l[8]=e=>q.value.roleId=void 0)],"callback-search":Ae,"is-fetch-by-value":!1,"value-prop":"id",disabled:!U(De).canEditTeam&&!U(Me).canEditTeam},null,8,["modelValue","disabled"]),U(De).canEditTeam||U(Me).canEditTeam?C("",!0):(_(),V("p",Ee," *Readonly "))],64))])),_:1})])),_:1})]),E("div",Ie,[Y(r,null,{default:P((()=>[xe,Y(o,null,{default:P((()=>[e.readonly?D((_(),V("input",{key:0,"onUpdate:modelValue":l[9]||(l[9]=a=>e.info.roleName=a),type:"text",class:"input",readonly:""},null,512)),[[M,e.info.roleName]]):(_(),V(N,{key:1},[Y(v,{key:q.value.teamId,modelValue:q.value.roleId,"onUpdate:modelValue":l[10]||(l[10]=e=>q.value.roleId=e),"callback-search":Se,"is-fetch-by-value":!1,"value-prop":"id",disabled:!U(De).canEditRole&&!U(Me).canEditRole},null,8,["modelValue","disabled"]),U(De).canEditRole||U(Me).canEditRole?C("",!0):(_(),V("p",je," *Readonly "))],64))])),_:1})])),_:1})]),E("div",Pe,[Y(r,null,{default:P((()=>[Ue,Y(o,null,{default:P((()=>[Y(y,{modelValue:q.value.country,"onUpdate:modelValue":l[11]||(l[11]=e=>q.value.country=e),options:["th","vn"],placeholder:"Select your country","can-clear":!1,disabled:e.readonly},null,8,["modelValue","disabled"])])),_:1})])),_:1})]),E("div",Ce,[Y(r,null,{default:P((()=>[Oe,Y(o,null,{default:P((()=>[Y(f,{modelValue:q.value.manageCountry,"onUpdate:modelValue":l[12]||(l[12]=e=>q.value.manageCountry=e),value:"th",label:"th",color:"primary",disabled:e.readonly,class:"checkbox"},null,8,["modelValue","disabled"]),Y(f,{modelValue:q.value.manageCountry,"onUpdate:modelValue":l[13]||(l[13]=e=>q.value.manageCountry=e),value:"vn",label:"vn",color:"primary",disabled:e.readonly,class:"checkbox"},null,8,["modelValue","disabled"]),q.value.manageCountry.length?C("",!0):(_(),V("p",Ye," Manage country is required "))])),_:1})])),_:1})])])])])])):C("",!0)}}});De.__scopeId="data-v-090888d0";export{De as _};
