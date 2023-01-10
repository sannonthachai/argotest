import{p as n}from"./csv.helper.d14e8c45.js";import{d as e,a}from"./student.helper.13430dac.js";const l=(n,e)=>{const a=!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:"",l=!1!==(null==e?void 0:e.showCountry)&&(null==n?void 0:n.country)?` (${null==n?void 0:n.country})`:"",o=(null==n?void 0:n.packageNameInternal)&&!1!==(null==e?void 0:e.showInternal)?` [${null==n?void 0:n.packageNameInternal}]`:"",i=!0===(null==e?void 0:e.showPrice)&&n.price?` - ${n.price}`:"";return`${a}${n.packageName}${l}${o}${i}`},o=[{img:"bank/kbank-logo.svg",name:"Kasikorn Bank",value:"installment_kbank"},{img:"bank/scb-logo.svg",name:"SCB Credit Card",value:"installment_scb"},{img:"bank/uob-logo.svg",name:"UOB",value:"installment_uob"},{img:"bank/citi-logo.svg",name:"Citi Bank",value:"installment_citi"},{img:"bank/bbl-logo.svg",name:"Bangkok Bank",value:"installment_bbl"},{img:"bank/ttb-logo.png",name:"TMBThanachart",value:"installment_tbank"},{img:"bank/bay-logo.svg",name:"Krungsri",value:"installment_bay"},{img:"bank/ktc-logo.svg",name:"Krungthai Card (KTC)",value:"installment_ktc"},{img:"bank/firstchoice-logo.png",name:"Krungsri First Choice",detail:1.3,value:"installment_first_choice"}],i=[{img:"bank/vietcombank-logo.png",detail:"101-4-60911-2",label:"vietcombank",value:"vietcombank",qrCode:"bank/vietcombank-logo"}],t=[{img:"bank/transfer-money.png",label:"ธนาคารอื่นๆ",value:"other",qrCode:"bank/transfer-money.png"},{img:"bank/aomsin-logo.png",label:"ธ.ออมสิน",value:"aomsin"},{img:"bank/uob-logo.svg",label:"ธ.ยูโอบี",value:"uob"},{img:"bank/standard-chartered-logo.png",label:"ธ.สแตนดาร์ดชาร์เตอร์ด",value:"standardChartered"},{img:"bank/ttb-logo.png",label:"ธ.ทหารไทยธนชาติ",value:"tmb"},{img:"bank/tbank-logo.svg",label:"ธ.ธนชาติ",value:"tbank"},{img:"bank/kbank-logo.svg",detail:"741-2-53500-0",label:"ธ.กสิกรไทย",value:"kbank",qrCode:"bank/kbank-logo"},{img:"bank/scb-logo.svg",detail:"407-489445-1",label:"ธ.ไทยพาณิชย์",value:"scb",qrCode:"bank/scb-logo"},{img:"bank/bbl-logo.svg",detail:"096-0-61896-5",label:"ธ.กรุงเทพ",value:"bbl",qrCode:"bank/bbl-logo"},{img:"bank/ktb-logo.svg",detail:"985-1-90611-5",label:"ธ.กรุงไทย",value:"ktb",qrCode:"bank/ktb-logo"},{img:"bank/bay.png",label:"ธ.กรุงศรี",value:"bay"},{img:"bank/facebook-icon.png",label:"Facebook pay",value:"kgp"}],u=n=>{if(n){const e=o.find((e=>e.value===n));return{name:(null==e?void 0:e.name)||"installment_payment",img:null==e?void 0:e.img}}return{name:"installment_payment"}},s=n=>{if(n){const e=[...t,...i].find((e=>e.value===n));return`/images/${(null==e?void 0:e.img)||""}`}},r=n=>{if(n){const e=[...t,...i].find((e=>e.value===n));return null==e?void 0:e.label}},d=n=>{switch(n){case"installment-payment":return"primary";case"full-payment":return"success";case"transfer-payment":return"purple";case"qrcode-payment":return"info";default:return"solid"}},m=n=>{switch(n){case"2c2p":return"warning";case"omise":return"danger";case"transfer":return"purple";case"gb-pay":return"info";default:return"solid"}},c=n=>n?`${n[0].toUpperCase()}${n.substring(1)}`.replace("-"," "):"-",k=n=>"transfer"===n?"Bank":c(n),g=(a,o)=>{const i=a.filter((n=>"action"!==n.key)),t=o.map((a=>`"${i.map((o=>"student"===o.key?(n=>{if(!n.student)return"";const a=e(n.student);return`(ID: ${n.student.id}) ${a}`})(a):"package"===o.key?a.package.reduce(((n,e)=>`${n} `+l(e)),""):"coupon"===o.key?a.coupon.id||"-":"method"===o.key?a.method.length?a.method.map((n=>`${n.method} ${n.bank?`(${n.bank})`:""} | ${n.amount} `||"-")):"-":n(a,o.key)||"-")).join('","')}"`));return[`"${i.map((n=>n.label)).join('","')}"`,...t].join("\n")},v=(e,a)=>{const o=e.filter((n=>"action"!==n.key)),i=a.map((e=>`"${o.map((a=>{var o,i,t,u,s,r;return"owner"===a.key?(null==(i=null==(o=e.salesmanOrder)?void 0:o.admin)?void 0:i.name)||(null==(u=null==(t=e.salesmanOrder)?void 0:t.admin)?void 0:u.firstname)||"-":"student"===a.key?`(ID:${e.student.id}) ${e.student.fullnameTh?e.student.fullnameTh:e.student.fullnameEn}`:"packages"===a.key?e.orderPacks.reduce(((n,e)=>`${n} `+l(e.package)),""):"coupon"===a.key?(null==(s=e.coupon)?void 0:s.code)||"-":"phone"===a.key?e.phone||e.student.phone||"-":"instances"===a.key?(null==(r=e.instances)?void 0:r.reduce(((n,e,a)=>`${n}งวดที่ ${a+1} จำนวนเงิน ${e.price} บาท (${null===e.transaction?"รอการจ่ายเงิน":"ชำระสำเร็จ"}) `),""))||"-":n(e,a.key)||"-"})).join('","')}"`));return[`"${o.map((n=>n.label)).join('","')}"`,...i].join("\n")},b=(e,a)=>{const o=e.filter((n=>"action"!==n.key)),i=a.map((e=>`"${o.map((a=>{var o,i,t,u,s,r;return"receiptNumber"===a.key?(null==(o=e.receiptNumber)?void 0:o.map((n=>n)))||"-":"student"===a.key?`(ID:${e.student.id}) ${e.student.fullnameTh?e.student.fullnameTh:e.student.fullnameEn}`:"phone"===a.key?e.student.phone:"packages"===a.key?e.packages.reduce(((n,e)=>`${n} `+l(e)),""):"method"===a.key?null===e.transactions?"-":null==(i=e.transactions)?void 0:i.reduce(((n,e)=>`${n}${e.method}(${e.gateway})${e.bank?`-${e.bank}`:""}${0===e.installmentTerm?"":`${e.installmentTerm} เดือน`} `),""):"salesman"===a.key?(null==(t=e.salesman)?void 0:t.id)?(null==(u=e.salesman)?void 0:u.name)||`${null==(s=e.salesman)?void 0:s.firstname}${null==(r=e.salesman)?void 0:r.lastname}`:"-":n(e,a.key)||"-"})).join('","')}"`));return[`"${o.map((n=>n.label)).join('","')}"`,...i].join("\n")},p=(n,e)=>{const a=n.orderPacks.map((n=>l(n.package,{showId:!1,showCountry:!1,showPrice:!1})));return`${!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:""}${!1===(null==e?void 0:e.showPackageTotal)||a.length<=1?"":`[${a.length} Package] `}${a.join(", ")}`},$=(n,e)=>{var a,l,o,i,t,u,s,r,d;const m=!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`[ID: ${null==n?void 0:n.id}] `:"",c=!1!==(null==e?void 0:e.showPackageId)&&(null==(a=null==n?void 0:n.package)?void 0:a.id)?`(${null==(l=null==n?void 0:n.package)?void 0:l.id}) `:"",k=!1!==(null==e?void 0:e.showCountry)&&(null==(o=null==n?void 0:n.package)?void 0:o.country)?` (${null==(i=null==n?void 0:n.package)?void 0:i.country})`:"",g=(null==(t=null==n?void 0:n.package)?void 0:t.packageNameInternal)&&!1!==(null==e?void 0:e.showInternal)?` [${null==(u=null==n?void 0:n.package)?void 0:u.packageNameInternal}]`:"",v=!0===(null==e?void 0:e.showPrice)&&(null==(s=n.package)?void 0:s.price)?` - ${null==(r=n.package)?void 0:r.price}`:"";return`${m}${c}${null==(d=n.package)?void 0:d.packageName}${k}${g}${v}`},y=(n,e)=>`${!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:""}${(null==n?void 0:n.series)?h(n.series,{showId:!1}):""}`,h=(n,e)=>{const a=!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:"",l=!1!==(null==e?void 0:e.showCountry)&&(null==n?void 0:n.country)?` (${null==n?void 0:n.country})`:"";return`${a}${n.name}${l}`},f=(n,e)=>{const a=!1!==(null==e?void 0:e.showId)&&(null==n?void 0:n.id)?`(ID: ${null==n?void 0:n.id}) `:"",l=!1!==(null==e?void 0:e.showCountry)&&(null==n?void 0:n.country)?` (${null==n?void 0:n.country})`:"";return`${a}${n.name}${l}`};function I(){return{displayPackageName:l,displaySeriesName:h,displayChallengeName:f,displayPackageItemName:$,capitalLetter:function(n){return n.charAt(0).toUpperCase()+n.slice(1)},displaySeriesItem:y,displayOrderOption:p,displayStudent:a}}export{h as a,c as b,b as c,y as d,d as e,k as f,m as g,r as h,u as i,v as j,g as k,s as t,I as u};