import{d as s,o as e,e as i,h as t,t as l,i as a,g as n,D as o}from"./vendor.1c8b4573.js";const c={class:"columns is-multiline mt-1"},d={key:0,class:"column is-4"},v=t("h2",{class:"title is-6 is-narrow is-bold"},"Course",-1),r={key:1,class:"column is-4"},u=t("h2",{class:"title is-6 is-narrow is-bold"},"Topic",-1),m={key:2,class:"column is-4"},p=t("h2",{class:"title is-6 is-narrow is-bold"},"Time",-1),y={key:3,class:"column is-4"},b=t("h2",{class:"title is-6 is-narrow is-bold"},"Detail",-1),h={key:4,class:"column is-4"},k=t("h2",{class:"title is-6 is-narrow is-bold"},"Solve status",-1),w={key:5,class:"column is-4"},f=t("h2",{class:"title is-6 is-narrow is-bold"},"Satisfaction",-1),D={key:6,class:"column is-4"},S=t("h2",{class:"title is-6 is-narrow is-bold"},"Created by",-1);var Y=s({props:{event:{type:Object,required:!0}},setup:s=>(Y,j)=>(e(),i("div",c,[s.event.topic?(e(),i("div",d,[v,t("p",null,l(s.event.topic),1)])):a("",!0),s.event.detail.topic?(e(),i("div",r,[u,t("p",null,l(s.event.detail.topic),1)])):a("",!0),s.event.detail.time?(e(),i("div",m,[p,t("p",null,l(n(o)(s.event.detail.time).format("DD/MM/YYYY HH:mm")),1)])):a("",!0),s.event.detail.detail?(e(),i("div",y,[b,t("p",null,l(s.event.detail.detail),1)])):a("",!0),s.event.detail.solveStatus?(e(),i("div",h,[k,t("p",null,l(s.event.detail.solveStatus),1)])):a("",!0),s.event.detail.satsifaction?(e(),i("div",w,[f,t("p",null,l(s.event.detail.satsifaction),1)])):a("",!0),s.event.createdBy?(e(),i("div",D,[S,t("p",null,l(s.event.createdBy.name),1)])):a("",!0)]))});export default Y;