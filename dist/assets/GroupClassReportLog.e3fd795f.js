import{d as e,o as s,e as i,h as t,t as l,i as a}from"./vendor.1c8b4573.js";const n={class:"columns is-multiline mt-1"},o={key:0,class:"column is-6"},c=t("h2",{class:"title is-6 is-narrow is-bold"},"Class topic",-1),r={key:1,class:"column is-6"},d=t("h2",{class:"title is-6 is-narrow is-bold"},"Problem",-1),v={key:2,class:"column is-6"},p=t("h2",{class:"title is-6 is-narrow is-bold"},"Reason",-1),u={key:3,class:"column is-6"},m=t("h2",{class:"title is-6 is-narrow is-bold"},"Return ticket",-1),b={class:"is-capitalize"},k={key:4,class:"column is-12"},h=t("h2",{class:"title is-6 is-narrow is-bold"},"Note",-1);var y=e({props:{event:{type:Object,required:!0}},setup:e=>(y,w)=>(s(),i("div",n,[e.event.topic?(s(),i("div",o,[c,t("p",null,l(e.event.topic),1)])):a("",!0),e.event.detail.problemDetail?(s(),i("div",r,[d,t("p",null,l(e.event.detail.problemDetail),1)])):a("",!0),e.event.detail.reason?(s(),i("div",v,[p,t("p",null,l(e.event.detail.reason),1)])):a("",!0),e.event.detail.returnTicket?(s(),i("div",u,[m,t("p",b,l(e.event.detail.returnTicket),1)])):a("",!0),e.event.detail.note?(s(),i("div",k,[h,t("p",null,l(e.event.detail.note),1)])):a("",!0)]))});export default y;
