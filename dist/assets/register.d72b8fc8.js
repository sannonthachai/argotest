var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{C as n,B as i,m as u,e as c,y as d,D as p,c as m}from"./index.d7dc1ff6.js";import{_ as f,a as h}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as v}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as g}from"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import{_ as y}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as b}from"./VModal.31b4f4ba.js";import{N as _,r as w,q as V,ae as j,d as k,b as U,X as x,E as Y,o as P,e as O,h as D,x as S,F as M,g as I,ah as C,K as L,ai as E,V as F,t as N,O as z,ao as A,ap as R,p as q,G as H,a as T}from"./vendor.1c8b4573.js";import"./useNotyf.ddf08f06.js";import{t as B}from"./date.helper.6ae3fc87.js";import{u as G}from"./useOptionApi.f4dc99b9.js";import"./index.ec15dc7d.js";import"./lodash.0a1ccad5.js";import"./quiz.enum.fc8b95fc.js";function J(){const e=new _({duration:2e3,position:{x:"center",y:"top"}}),d=w(!1),p=V({confirmPassword:"",newUser:{name:"",email:"",password:"",firstname:"",lastname:"",phone:"",dob:"",country:n.TH,teamId:0},validation:{}}),{registerAdmin:m}=i();return f=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&r(e,l,a[l]);return e})({},j(p)),a(f,l({isLoading:d,register:async()=>{d.value=!0,p.newUser.dob=B(p.newUser.dob,"YYYY-MM-DD");const a=await m(p.newUser);if(d.value=!1,u(a))return!0;"object"!=typeof(null==a?void 0:a.message)?e.error(c(a.message)||"Fail! Please try again"):p.validation=a.message}}));var f}q("data-v-706dcaea");const K={class:"auth-wrapper-inner is-single"},W={class:"auth-nav"},X=D("div",{class:"left"},null,-1),Q={class:"center"},Z={class:"right"},$={class:"dark-mode ml-auto"},ee=["checked"],ae=D("span",null,null,-1),le={class:"single-form-wrap"},te={class:"inner-wrap"},se={class:"auth-head"},oe=D("h2",null,"Join Us Now.",-1),re=D("p",null,"Start by creating your account",-1),ne=H(" I already have an account, click here for login "),ie={class:"form-card"},ue=["onSubmit"],ce={class:"login-form"},de={class:"columns is-multiline mb-0"},pe={class:"column is-6"},me={class:"column is-6"},fe={class:"msg-error"},he=["value"],ve=H(" Sign Up "),ge=H("Ok"),ye=D("div",null,null,-1);T();var be=k({setup(e){U();const{confirmPassword:a,newUser:l,register:t,validation:s,isLoading:o}=J();x({title:"WH | Register"});const{getTeams:r}=G(),n=w(!1),i=async()=>{await t()&&(n.value=!0)},u=e=>r({currentPage:1,perPage:50,search:e});return(e,t)=>{const r=p,c=Y("RouterLink"),_=f,w=h,V=v,j=Y("Multiselect"),k=Y("v-date-picker"),U=m,x=g,q=y,H=b;return P(),O("div",K,[D("div",W,[X,D("div",Q,[S(c,{to:{name:"index"},class:"header-item"},{default:M((()=>[S(r,{width:"38px",height:"38px"})])),_:1})]),D("div",Z,[D("label",$,[D("input",{type:"checkbox",checked:!I(d),onChange:t[0]||(t[0]=e=>{d.value=!e.target.checked})},null,40,ee),ae])])]),D("div",le,[D("div",te,[D("div",se,[oe,re,S(c,{class:"has-text-weight-bold is-underlined",to:{name:"auth-login"}},{default:M((()=>[ne])),_:1})]),D("div",ie,[D("form",{onSubmit:C(i,["prevent"])},[D("div",ce,[S(w,null,{default:M((()=>[S(_,{icon:"feather:user"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>I(l).name=e),class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,512),[[E,I(l).name]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).name),513),[[F,I(s).name]])])),_:1}),D("div",de,[D("div",pe,[S(w,null,{default:M((()=>[S(_,{icon:"feather:user"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>I(l).firstname=e),class:"input",type:"text",placeholder:"Firstname",autocomplete:"firstname"},null,512),[[E,I(l).firstname]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).firstname),513),[[F,I(s).firstname]])])),_:1})]),D("div",me,[S(w,null,{default:M((()=>[S(_,{icon:"feather:user"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>I(l).lastname=e),class:"input",type:"text",placeholder:"Lastname",autocomplete:"lastname"},null,512),[[E,I(l).lastname]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).lastname),513),[[F,I(s).lastname]])])),_:1})])]),S(w,null,{default:M((()=>[S(_,{icon:"feather:mail"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>I(l).email=e),class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,512),[[E,I(l).email]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).email),513),[[F,I(s).email]])])),_:1}),S(w,null,{default:M((()=>[S(_,{icon:"feather:phone"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>I(l).phone=e),class:"input",type:"text",placeholder:"Phone",autocomplete:"phone"},null,512),[[E,I(l).phone]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).phone),513),[[F,I(s).phone]])])),_:1}),S(w,{class:"is-autocomplete-select"},{default:M((()=>[S(_,{icon:"feather:users"},{default:M((()=>[S(V,{modelValue:I(l).teamId,"onUpdate:modelValue":t[6]||(t[6]=e=>I(l).teamId=e),placeholder:"Select your team","callback-search":u},null,8,["modelValue"])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).teamId),513),[[F,I(s).teamId]])])),_:1}),S(w,{class:"is-autocomplete-select"},{default:M((()=>[S(_,{icon:"feather:flag"},{default:M((()=>[S(j,{modelValue:I(l).country,"onUpdate:modelValue":t[7]||(t[7]=e=>I(l).country=e),placeholder:"Select your country",options:["th","vn"]},null,8,["modelValue"])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).country),513),[[F,I(s).country]])])),_:1}),S(w,null,{default:M((()=>[S(_,{icon:"feather:lock"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>I(l).password=e),class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,512),[[E,I(l).password]])])),_:1}),L(D("h6",{class:"msg-error"},N(I(s).password),513),[[F,I(s).password]])])),_:1}),S(w,null,{default:M((()=>[S(_,{icon:"feather:lock"},{default:M((()=>[L(D("input",{"onUpdate:modelValue":t[9]||(t[9]=e=>z(a)?a.value=e:null),class:"input",type:"password",placeholder:"Confirm Password"},null,512),[[E,I(a)]])])),_:1}),L(D("h6",fe," confirm password not match with password ",512),[[F,I(a)!==I(l).password]])])),_:1}),S(k,{modelValue:I(l).dob,"onUpdate:modelValue":t[10]||(t[10]=e=>I(l).dob=e),color:"orange","model-config":{type:"string",mask:"YYYY-MM-DD"},masks:{input:"YYYY-MM-DD"},popover:{visibility:"click"},"trim-weeks":""},{default:M((({inputValue:e,inputEvents:a})=>[S(w,null,{default:M((()=>[S(_,{icon:"feather:calendar"},{default:M((()=>[D("input",A({class:"input",type:"text",placeholder:"Date of birth YYYY-MM-DD",value:e},R(a)),null,16,he)])),_:2},1024),L(D("h6",{class:"msg-error"},N(I(s).dob),513),[[F,I(s).dob]])])),_:2},1024)])),_:1},8,["modelValue"]),S(w,null,{default:M((()=>[S(_,{class:"login"},{default:M((()=>[S(x,{size:"small",active:I(o)},{default:M((()=>[S(U,{color:"primary",disabled:I(o),bold:"",fullwidth:"",raised:"",onClick:i},{default:M((()=>[ve])),_:1},8,["disabled"])])),_:1},8,["active"])])),_:1})])),_:1})])],40,ue)])])]),S(H,{title:"Success!",open:n.value,size:"small",actions:"center",onClose:t[11]||(t[11]=e=>n.value=!1)},{content:M((()=>[S(q,{title:"Register Successful",subtitle:"Please check your email for confirm registation"})])),action:M((()=>[S(U,{color:"primary",to:{name:"auth-login"},raised:""},{default:M((()=>[ge])),_:1})])),cancel:M((()=>[ye])),_:1},8,["open"])])}}});be.__scopeId="data-v-706dcaea";export default be;