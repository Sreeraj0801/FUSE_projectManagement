import{j as o,a as c,d as i}from"./index-bd65f0c3.js";function p(){return o("div",{className:"fixed z-50 inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900",children:o("div",{className:"flex items-center justify-center",children:c("svg",{className:"animate-spin h-10 w-10 text-white",viewBox:"0 0 24 24",children:[o("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})})}const h=()=>{const r=i();return{createProject:async t=>{try{const{data:e}=await r.post("/project/create",t);return e}catch(e){throw e.response.data.error.msg?{msg:e.response.data.error.msg}:(console.log(e),{msg:"something bad happened"})}},getAllProjectDetails:async(t,e,a)=>{try{const{data:s}=await r.get(`/project/${t}/${e}/${a}`);return s}catch(s){throw{error:s}}},getProjectDetaiils:async t=>{try{const{data:e}=await r.get(`/project/details/${t}`);return e}catch(e){throw console.error("Error from getProjectDetails api ",e),{msg:"Something went wrong"}}},getRegisterdProjectMembers:async t=>{try{const{data:e}=await r.get(`/project/members/${t}`);return e}catch(e){throw console.error("Error from getRegisterdProjectMembers api ",e),{error:e}}}}};export{p as M,h as p};