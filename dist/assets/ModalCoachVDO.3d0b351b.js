import{_ as e}from"./VModal.31b4f4ba.js";import{p as o,a as r,d as t,o as a,y as c,F as s,h as n}from"./vendor.1c8b4573.js";o("data-v-1cdcdf7e");const l=["src"];r();var d=t({props:{currentVideo:{type:String,required:!0}},emits:["on-close"],setup:(o,{emit:r})=>(t,d)=>{const i=e;return a(),c(i,{title:"Intro Video",size:"medium",open:!!o.currentVideo,actions:"center","cancel-label":"close",onClose:d[0]||(d[0]=e=>r("on-close"))},{content:s((()=>[n("iframe",{src:`https://www.youtube.com/embed/${o.currentVideo}?rel=0&autoplay=1`,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"video-intro"},null,8,l)])),_:1},8,["open"])}});d.__scopeId="data-v-1cdcdf7e";export{d as _};
