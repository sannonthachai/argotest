import{F as a,Q as e,A as s,a as r}from"./quiz.enum.fc8b95fc.js";import{_ as t}from"./lodash.0a1ccad5.js";const n=[{label:"แบบทดสอบมีอัดเสียง",value:a.VERSION3},{label:"แบบทดสอบ test invite",value:a.VERSION4},{label:"แบบทดสอบไม่มีอัดเสียง (แบบเก่า)",value:a.VERSION1}],i=a=>a===e.PRETEST?"Pre-Test":a===e.MIDTEST?"Mid-Test":a===e.POSTTEST?"Post-Test":"Quiz",p=a=>a.replace(/_/g," "),c=Object.values(s).map((a=>{let e="";return e=a===s.AUDIO?"Record Answer":a===s.CHECKBOX?"Choice (multiple answer)":a===s.INPUT?"Short Text":a===s.TEXTAREA?"Long Text":"Choice (one answer)",{label:e,value:a}})),l=a=>"choice"===(a=>a===s.RADIO||a===s.CHECKBOX?"choice":a===s.AUDIO?"record":a)(a),o=a=>t.uniqBy(a.filter((a=>!!a.paragraphId)),"paragraphId").reduce(((e,s)=>e.concat({id:s.paragraphId||0,questions:a.filter((a=>a.paragraphId===s.paragraphId))})),[]),d=(a,e)=>t.uniqBy(a.reduce(((s,r)=>s.concat({paragraph:e.find((a=>a.id===r.paragraphId)),questions:a.filter((a=>a.paragraphId===r.paragraphId))})),[]),"paragraph.id"),h=a=>a===r.DOING?"Doing":a===r.CHECKED?"Checked":a===r.DONE?"Done":a===r.TRASH?"Trash":a===r.APPROVED?"Approved":"-",u=a=>a===r.DOING?"purple":a===r.CHECKED?"secondary":a===r.DONE?"primary":a===r.TRASH?"danger":a===r.APPROVED?"success":"solid",E=a=>{const e=n.find((e=>e.value===a));return(null==e?void 0:e.label)||`version-${a}`},g=a=>{switch(a){case r.DOING:return'<span class="has-text-primary">Student is doing the quiz and this score</span><br><span class="has-text-primary">would be changed</span>';case r.CHECKED:return'<span class="has-text-danger">Waiting for <span class="has-text-weight-semibold">"APPROVED"</span><span>';case r.DONE:return'<span class="has-text-primary">Waiting for <span class="has-text-weight-semibold">"CHECKING"</span></span>'}};export{E as a,n as b,i as c,h as d,d as e,c as f,o as g,p as h,l as i,u as q,g as w};
