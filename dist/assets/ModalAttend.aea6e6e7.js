import{_ as e}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as t,a}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{c as s}from"./index.d7dc1ff6.js";import{_ as o}from"./VModal.31b4f4ba.js";import{p as l,a as i,d,k as n,E as r,o as p,y as m,F as u,h as c,x as f,ao as v,ap as g,g as _,G as y}from"./vendor.1c8b4573.js";l("data-v-75562551");const h={class:"modal-form"},b=c("label",null,"Date",-1),k=["value"],V=y("Save");i();var j=d({props:{attend:{type:Object,required:!0},openModal:{type:Boolean,required:!0,default:!1}},emits:["toggle-close","on-save","update:time"],setup(l,{emit:i}){const d=l,y=n((()=>"studentAttend"===d.attend.type)),j=()=>{i("update:time",d.attend.time)};return(n,x)=>{const D=e,M=t,C=a,Y=r("v-date-picker"),$=s,A=o;return p(),m(A,{open:null==d?void 0:d.openModal,size:"medium",actions:"right",title:`Add ${_(y)?"student":"coach"}'s attend`,onClose:x[2]||(x[2]=e=>i("toggle-close"))},{content:u((()=>[c("form",h,[f(D,{title:`${d.attend.topic} ID:(${d.attend.id})`},null,8,["title"]),f(D,{title:` Please select a time after  <span class='has-text-primary'>${l.attend.dateTime}<span>`,"is-html":!0},null,8,["title"]),f(Y,{modelValue:d.attend.time,"onUpdate:modelValue":x[0]||(x[0]=e=>d.attend.time=e),"model-config":{type:"date",mask:"iso"},masks:{inputDateTime24hr:"DD/MM/YYYY HH:mm"},mode:"dateTime",color:"orange","trim-weeks":"",popover:{visibility:"click"},is24hr:"",onClick:j,onChange:j},{default:u((({inputValue:e,inputEvents:t})=>[f(C,null,{default:u((()=>[b,f(M,{icon:"feather:calendar"},{default:u((()=>[c("input",v({class:"input",type:"text",value:e},g(t)),null,16,k)])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])])])),action:u((()=>[f($,{color:"primary",raised:"",loading:d.attend.isLoadingAttend,disabled:!d.attend.time,onClick:x[1]||(x[1]=e=>i("on-save"))},{default:u((()=>[V])),_:1},8,["loading","disabled"])])),_:1},8,["open","title"])}}});j.__scopeId="data-v-75562551";export{j as _};
