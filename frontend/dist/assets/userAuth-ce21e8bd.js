import{s as p,R as I,a as c,b as U,p as m}from"./config-8178369f.js";import{b as R,u as S,i as h,s as l}from"./index-ae10c836.js";import{Q as u}from"./react-toastify.esm-90d3ea72.js";const A=()=>{const i=R(),g=S();return{googleAuthUserSignUp:async()=>{p(c,m).then(async t=>{var a,o,e,n;try{const s={displayName:t.user.displayName,email:t.user.email},r=await h.post("/googleRegistration",s);if(r.data){const{email:d,name:f,_id:y}=r.data;g(l({name:f,email:d,accessToken:(a=r==null?void 0:r.data)==null?void 0:a.accessToken,userId:y})),i("/home")}}catch(s){(n=(e=(o=s.response)==null?void 0:o.data)==null?void 0:e.error)!=null&&n.msg?u.error(s.response.data.error.msg):console.log(s)}})},googleSignIn:async()=>{p(c,m).then(async t=>{var a,o;try{const e=await h.post("/googleSignIn",{email:t.user.email});if((a=e==null?void 0:e.data)!=null&&a.response){const{email:n,name:s,_id:r}=e.data.response;g(l({name:s,email:n,accessToken:(o=e==null?void 0:e.data)==null?void 0:o.accessToken,userId:r})),i("/home")}}catch(e){e.response.data.error.msg?u.error(e.response.data.error.msg):console.log(e)}})},setUpRecapthcha:t=>{const a=new I("recaptcha-container",{},c);return a.render(),U(c,t,a)}}};export{A as u};
