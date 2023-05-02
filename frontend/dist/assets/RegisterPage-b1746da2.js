import{r as x,a as i,j as e,L as y,i as N}from"./index-ae10c836.js";import{k as v,Q as h}from"./react-toastify.esm-90d3ea72.js";import{L as w}from"./Logo-fad8ed6d.js";import{S as k}from"./successAlert-10bb9606.js";import{u as S}from"./userAuth-ce21e8bd.js";import{B as $}from"./index.esm-53381930.js";import"./sweetalert2.all-eeb941d7.js";import"./config-8178369f.js";import"./iconBase-4a676cf1.js";const C=()=>{const[o,l]=x.useState({name:"",email:"",mobile:"",pword:"",confirmPword:""}),[t,u]=x.useState({name:"",email:"",mobile:"",pword:"",confirmPword:""}),g=s=>!/^[a-zA-Z\s]+$/.test(s),f=s=>/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(s),b=s=>/^[6-9]\d{9}$/.test(s),c=s=>s.length>=6;return{errors:o,signupFormData:t,handleInputChange:s=>{let r;const{name:a,value:n}=s.target;switch(a){case"name":n.trim()?g(n)&&(r="No special characters allowed"):r=`${a} is required`;break;case"email":n.trim()?f(n)||(r="Invalid email address"):r=`${a} is required`;break;case"mobile":n.trim()?b(n)||(r="Invalid mobile number"):r=`${a} is required`;break;case"pword":n.trim()?c(n)||(r="Should contain at least 6 characters"):r=`${a} is required`;break;case"confirmPword":n.trim()?t.pword!==n&&(r="Password does not match"):r=`${a} is required`;break;default:r=`${a} is not a valid field`}l(p=>({...p,[a]:r})),u(p=>({...p,[a]:n})),console.log(t)},isValidForm:async s=>{s.preventDefault();let r=!0;for(const a in t)if(t[a].length==0||o[a]!=null){r=!1;break}return r}}};function P(){const{errors:o,signupFormData:l,handleInputChange:t,isValidForm:u}=C(),{googleAuthUserSignUp:g}=S();return i("div",{className:"lg:grid grid-cols-2 max-h-screen lg:mx-24",children:[e("div",{className:"lg:block hidden lg:mt-8",children:i("div",{className:"relative",children:[i("div",{className:"bg-gradient-to-r from-blue-900 to-slate-900 absolute rounded p-5 flex -right-3 bottom-40 text-white hover:scale-110 transition-all duration-500 cursor-pointer ",children:[e("p",{className:"text-xl",children:"Already an user ? "}),"    ",i(y,{to:"/login",className:"text-2xl -mt-1  cursor-pointer hover:text-yellow-400",children:[" ","LOGIN"]})]}),e("img",{src:"./Images/Register04.gif",alt:"Background",className:"w-full mt-5"})]})}),i("div",{className:"border  border-slate-400 rounded lg:m-12 p-8 m-5 md:m-20",children:[e("div",{className:"flex justify-center lg:mt-2",children:e(w,{})}),e("h1",{className:"text-sm font-bold text-slate-600 text-center mb-5",children:"Join FUSE today and start managing your projects effortlessly."}),e("div",{className:"text-center",children:i("button",{type:"button",className:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 ",onClick:async c=>{c.preventDefault();try{g()}catch(m){console.log(m)}},children:[e($,{}),"   Sign in with Google"]})}),i("div",{className:"flex mb-2",children:[e("hr",{className:"w-96 h-px my-5  border-0 bg-gray-700"}),e("p",{className:"mt-2 mx-5",children:"OR"}),e("hr",{className:"w-96 h-px my-5 border-0 bg-gray-700"})]}),i("form",{onSubmit:async c=>{let m=await u(c);if(!m){h.warning("Please check the credentials");return}if(m)try{await N.post("/register",l)&&k("Please verify your Email by Google SignIn or by the Email link","Email Resended succesfully")}catch(d){d.response.data&&h.error(d.response.data,{theme:"dark"}),d.response.error.response.data.message?h.error(d.response.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}):console.log(d)}},children:[i("div",{className:"grid gap-1",children:[e("input",{type:"text",name:"name",placeholder:"Enter your full name",className:`${o.name?"border-red-500 focus:ring-red-600":" border-gray-300  focus:ring-blue-400"} px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`,value:l.name,onChange:t}),e("p",{className:"text-red-600 h-6",children:o.name}),e("input",{name:"email",type:"email",placeholder:"Email",className:`${o.email?"border-red-500 focus:ring-red-600":" border-gray-300  focus:ring-blue-400"} px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`,value:l.email,onChange:t}),e("p",{className:"text-red-600 h-6",children:o.email}),e("input",{type:"tel",name:"mobile",className:`${o.mobile?"border-red-500 focus:ring-red-600":" border-gray-300  focus:ring-blue-400"} px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`,placeholder:"Mobile Number",value:l.mobile,onChange:t}),e("p",{className:"text-red-600 h-6",children:o.mobile}),e("input",{name:"pword",type:"password",placeholder:"Password",className:`${o.pword?"border-red-500 focus:ring-red-600":" border-gray-300  focus:ring-blue-400"} px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`,value:l.pword,onChange:t}),e("p",{className:"text-red-600 h-6",children:o.pword}),e("input",{name:"confirmPword",type:"password",placeholder:"confirm password",className:`${o.confirmPword?"border-red-500 focus:ring-red-600":" border-gray-300  focus:ring-blue-400"} px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`,value:l.confirmPword,onChange:t}),e("p",{className:"text-red-600 h-6",children:o.confirmPword})]}),e("div",{className:"text-center mt-2 -mb-5",children:e("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-500 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200",children:e("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-sm text-bold w-32",children:"Register"})})})]}),e("div",{className:" mx- mt-8  lg:hidden",children:i("h1",{className:"text-sm",children:["Already An User ?",e(y,{to:"/login",className:"text-lg  text-blue-400 font-bold",children:"LOGIN"})]})})]}),e(v,{})]})}function V(){return e("div",{children:e(P,{})})}export{V as default};
