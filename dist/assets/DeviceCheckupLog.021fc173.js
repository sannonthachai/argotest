import{d as e,o as s,e as t,h as i,t as l,i as a}from"./vendor.1c8b4573.js";const n={class:"columns is-multiline mt-1"},d={key:0,class:"column is-4"},c=i("h2",{class:"title is-6 is-narrow is-bold"},"Equipment",-1),o={key:1,class:"column is-4"},u=i("h2",{class:"title is-6 is-narrow is-bold"},"Device",-1),v={key:2,class:"column is-4"},r=i("h2",{class:"title is-6 is-narrow is-bold"},"Status",-1),p={key:3,class:"column is-12"},m=i("h2",{class:"title is-6 is-narrow is-bold"},"Agent",-1);var b=e({props:{event:{type:Object,required:!0}},setup:e=>(b,g)=>(s(),t("div",n,[e.event.detail.equipment?(s(),t("div",d,[c,i("p",null,l(e.event.detail.equipment),1)])):a("",!0),e.event.detail.device?(s(),t("div",o,[u,i("p",null,l(e.event.detail.device),1)])):a("",!0),e.event.detail.status?(s(),t("div",v,[r,i("p",null,l(e.event.detail.status),1)])):a("",!0),e.event.detail.agent.agent?(s(),t("div",p,[m,i("p",null,l(e.event.detail.agent.agent),1)])):a("",!0)]))});export default b;