import{u as e}from"./useOptionApi.f4dc99b9.js";import{d as a,r as l,Y as o,E as d,o as t,y as s,O as u}from"./vendor.1c8b4573.js";var r=a({props:{modelValue:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","clear"],setup(a,{emit:r}){const{getProductType:p}=e(),i=l([]);return o((async()=>{i.value=await p()})),(e,l)=>{const o=d("Multiselect");return t(),s(o,{modelValue:a.modelValue,"onUpdate:modelValue":l[0]||(l[0]=e=>u(modelValue)?modelValue.value=e:null),placeholder:"product type",options:i.value,searchable:!0,disabled:a.disabled,onSelect:l[1]||(l[1]=e=>r("update:modelValue",e)),onClear:l[2]||(l[2]=e=>r("clear"))},null,8,["modelValue","options","disabled"])}}});export{r as _};