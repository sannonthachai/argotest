import{d as e,o as t,e as i,f as s,h as r,t as n,i as a,n as o}from"./vendor.1c8b4573.js";const l={key:0},p={key:1},d={class:"flex-end"};var u=e({props:{title:{type:String,required:!0},subtitle:{type:String,required:!1,default:void 0},infratitle:{type:String,required:!1,default:void 0},center:{type:Boolean,required:!1},lighter:{type:Boolean,required:!1},narrow:{type:Boolean,required:!1},mResponsive:{type:Boolean,required:!1},tResponsive:{type:Boolean,required:!1}},setup(e){const u=e;return(e,v)=>(t(),i("div",{class:o([!u.center&&"media-flex",u.center&&"media-flex-center",u.narrow&&"no-margin",u.mResponsive&&"is-responsive-mobile",u.tResponsive&&"is-responsive-tablet-p"])},[s(e.$slots,"icon"),r("div",{class:o(["flex-meta",[u.lighter&&"is-lighter"]])},[r("span",null,n(u.title),1),u.subtitle?(t(),i("span",l,n(u.subtitle),1)):a("",!0),u.infratitle?(t(),i("span",p,n(u.infratitle),1)):a("",!0),s(e.$slots,"default")],2),r("div",d,[s(e.$slots,"action")])],2))}});export{u as _};