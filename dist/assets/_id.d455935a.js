import{_ as a}from"./CoachCharacterForm.vue_vue&type=script&setup=true&lang.f64e66ed.js";import{u as e}from"./useGuardCoach.2473a459.js";import{u as t}from"./useCoachCharacter.b754fac5.js";import{d as o,Y as r,g as s,o as i,e as c,x as u,O as d,i as n}from"./vendor.1c8b4573.js";import"./index.d7dc1ff6.js";import"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import"./FormTemplate.a6fb27bf.js";import"./useCoachApi.4bab1366.js";import"./usePaginationRoute.780ca235.js";const p={key:0};var l=o({setup(o){const{info:l,onSaveCoachCharacter:m,fetchCoachCharacterById:h,isEdit:C}=t();return e(),r((async()=>{await h()})),(e,t)=>{const o=a;return s(l)?(i(),c("div",p,[u(o,{modelValue:s(l),"onUpdate:modelValue":t[0]||(t[0]=a=>d(l)?l.value=a:null),title:s(C)?"Edit Coach Character":"View Coach Character Information",readonly:!s(C),"is-edit":s(C),"can-edit":"capabilities.canEditCoachCharacter",onUpdate:s(m)},null,8,["modelValue","title","readonly","is-edit","onUpdate"])])):n("",!0)}}});export default l;
