import{S as n}from"./student.enum.ad6af513.js";const a=(n,a)=>{const e=!1!==(null==a?void 0:a.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:"";return n?`${e}`+(n.fullnameTh?n.fullnameTh:n.fullnameEn):""},e=a=>a?a.country===n.VN?`${a.firstname.en} ${a.lastname.en}`:a.firstname.th?`${a.firstname.th} ${a.lastname.th}`:`${a.firstname.en} ${a.lastname.en}`:"",l=a=>a?(null==a?void 0:a.country)===n.VN?`(id: ${a.id}) ${a.fullnameEn||a.fullnameTh}`:`(id: ${a.id}) ${a.fullnameTh||a.fullnameEn}`:"-",s=n=>n||"",i=a=>a?a.country===n.VN?`${s(a.nickname.en)}`:a.nickname.th?`${s(a.nickname.th)}`:s(a.nickname.en):"",t={th:"/images/icons/flags/thailand.svg",vn:"/images/icons/flags/vietnam.svg"};export{a,l as b,t as c,e as d,i as e};
