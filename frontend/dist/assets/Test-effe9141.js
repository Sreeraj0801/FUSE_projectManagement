import{d as r,e as l,f as o,a as t,j as e}from"./index-ae10c836.js";const d=()=>{const a=r(),c=async()=>{try{a.get("/testCase")}catch(n){console.log(n)}},s=l(o);return t("div",{className:"text-slate-900",children:[t("div",{className:"bg-lime-300 m-5 rounded p-5",children:[e("h1",{children:s.name}),e("h1",{children:s.email}),e("h1",{children:s.accessToken})]}),e("button",{className:"bg-blue-900 rounded-lg m-5 p-5 text-white",onClick:c,children:"Request new accesToken"})]})};export{d as default};
