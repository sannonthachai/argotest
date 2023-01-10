import{c as e}from"./index.d7dc1ff6.js";import{_ as a,a as t}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as l}from"./FormTemplate.a6fb27bf.js";import{d as o,o as i,y as r,F as d,x as s,e as n,i as c,H as u,h as p,K as m,ai as f,G as y}from"./vendor.1c8b4573.js";const h=y("Cancel "),_=y("Edit"),k=y("Update"),V=y("Submit"),b={class:"form-fieldset"},v={class:"column is-12"},x=p("label",null,"Name",-1),E=["readonly"],j={class:"column is-12"},C=p("label",null,"Description",-1),g=["readonly"];var B=o({props:{modelValue:{type:Object,default:()=>({name:"",description:""})},title:{type:String,default:"Create Coach Teaching"},readonly:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1},canEdit:{type:Boolean,default:!0}},emits:["create","update"],setup(o,{emit:y}){const B=o,F=()=>{B.isEdit?y("update"):y("create")};return(y,B)=>{const U=e,w=a,D=t,N=l;return i(),r(N,{title:o.title},{buttons:d((()=>[s(U,{icon:"feather:arrow-left","dark-outline":"",to:{name:"coaches-teachings"}},{default:d((()=>[h])),_:1}),o.modelValue.id?(i(),n(u,{key:0},[o.readonly&&o.canEdit?(i(),r(U,{key:0,color:"primary",icon:"feather:edit",to:"#edit"},{default:d((()=>[_])),_:1})):o.isEdit?(i(),r(U,{key:1,color:"primary",icon:"feather:check",onClick:F},{default:d((()=>[k])),_:1})):c("",!0)],64)):(i(),r(U,{key:1,color:"primary",icon:"feather:check",onClick:F},{default:d((()=>[V])),_:1}))])),default:d((()=>[p("div",b,[p("div",v,[s(D,null,{default:d((()=>[x,s(w,null,{default:d((()=>[m(p("input",{"onUpdate:modelValue":B[0]||(B[0]=e=>o.modelValue.name=e),type:"text",class:"input is-primary-focus",placeholder:"Name",readonly:o.readonly},null,8,E),[[f,o.modelValue.name]])])),_:1})])),_:1})]),p("div",j,[s(D,null,{default:d((()=>[C,s(w,null,{default:d((()=>[m(p("textarea",{"onUpdate:modelValue":B[1]||(B[1]=e=>o.modelValue.description=e),class:"textarea is-primary-focus",rows:"10",placeholder:"Description...",readonly:o.readonly},null,8,g),[[f,o.modelValue.description]])])),_:1})])),_:1})])])])),_:1},8,["title"])}}});export{B as _};