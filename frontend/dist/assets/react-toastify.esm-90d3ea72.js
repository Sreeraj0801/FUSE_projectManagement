import{r as p,R as y}from"./index-ae10c836.js";function re(e){var t,s,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=re(e[t]))&&(o&&(o+=" "),o+=s);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function B(){for(var e,t,s=0,o="";s<arguments.length;)(e=arguments[s++])&&(t=re(e))&&(o&&(o+=" "),o+=t);return o}const V=e=>typeof e=="number"&&!isNaN(e),H=e=>typeof e=="string",O=e=>typeof e=="function",Y=e=>H(e)||O(e)?e:null,Z=e=>p.isValidElement(e)||H(e)||O(e)||V(e);function ce(e,t,s){s===void 0&&(s=300);const{scrollHeight:o,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=o+"px",u.transition=`all ${s}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,s)})})}function j(e){let{enter:t,exit:s,appendPosition:o=!1,collapse:u=!0,collapseDuration:l=300}=e;return function(n){let{children:a,position:I,preventExitTransition:E,done:v,nodeRef:g,isIn:b}=n;const i=o?`${t}--${I}`:t,d=o?`${s}--${I}`:s,m=p.useRef(0);return p.useLayoutEffect(()=>{const r=g.current,c=i.split(" "),C=L=>{L.target===g.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",C),r.removeEventListener("animationcancel",C),m.current===0&&L.type!=="animationcancel"&&r.classList.remove(...c))};r.classList.add(...c),r.addEventListener("animationend",C),r.addEventListener("animationcancel",C)},[]),p.useEffect(()=>{const r=g.current,c=()=>{r.removeEventListener("animationend",c),u?ce(r,v,l):v()};b||(E?c():(m.current=1,r.className+=` ${d}`,r.addEventListener("animationend",c)))},[b]),y.createElement(y.Fragment,null,a)}}function ne(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const N={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(o=>o!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},W=e=>{let{theme:t,type:s,...o}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...o})},ee={info:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function ue(e){const[,t]=p.useReducer(i=>i+1,0),[s,o]=p.useState([]),u=p.useRef(null),l=p.useRef(new Map).current,n=i=>s.indexOf(i)!==-1,a=p.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:i=>l.get(i)}).current;function I(i){let{containerId:d}=i;const{limit:m}=a.props;!m||d&&a.containerId!==d||(a.count-=a.queue.length,a.queue=[])}function E(i){o(d=>i==null?[]:d.filter(m=>m!==i))}function v(){const{toastContent:i,toastProps:d,staleId:m}=a.queue.shift();b(i,d,m)}function g(i,d){let{delay:m,staleId:r,...c}=d;if(!Z(i)||function(w){return!u.current||a.props.enableMultiContainer&&w.containerId!==a.props.containerId||l.has(w.toastId)&&w.updateId==null}(c))return;const{toastId:C,updateId:L,data:f}=c,{props:h}=a,k=()=>E(C),P=L==null;P&&a.count++;const _={...h,style:h.toastStyle,key:a.toastKey++,...c,toastId:C,updateId:L,data:f,closeToast:k,isIn:!1,className:Y(c.className||h.toastClassName),bodyClassName:Y(c.bodyClassName||h.bodyClassName),progressClassName:Y(c.progressClassName||h.progressClassName),autoClose:!c.isLoading&&(A=c.autoClose,q=h.autoClose,A===!1||V(A)&&A>0?A:q),deleteToast(){const w=ne(l.get(C),"removed");l.delete(C),N.emit(4,w);const $=a.queue.length;if(a.count=C==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),$>0){const M=C==null?a.props.limit:1;if($===1||M===1)a.displayedToast++,v();else{const z=M>$?$:M;a.displayedToast=z;for(let R=0;R<z;R++)v()}}else t()}};var A,q;_.iconOut=function(w){let{theme:$,type:M,isLoading:z,icon:R}=w,x=null;const F={theme:$,type:M};return R===!1||(O(R)?x=R(F):p.isValidElement(R)?x=p.cloneElement(R,F):H(R)||V(R)?x=R:z?x=ee.spinner():(U=>U in ee)(M)&&(x=ee[M](F))),x}(_),O(c.onOpen)&&(_.onOpen=c.onOpen),O(c.onClose)&&(_.onClose=c.onClose),_.closeButton=h.closeButton,c.closeButton===!1||Z(c.closeButton)?_.closeButton=c.closeButton:c.closeButton===!0&&(_.closeButton=!Z(h.closeButton)||h.closeButton);let D=i;p.isValidElement(i)&&!H(i.type)?D=p.cloneElement(i,{closeToast:k,toastProps:_,data:f}):O(i)&&(D=i({closeToast:k,toastProps:_,data:f})),h.limit&&h.limit>0&&a.count>h.limit&&P?a.queue.push({toastContent:D,toastProps:_,staleId:r}):V(m)?setTimeout(()=>{b(D,_,r)},m):b(D,_,r)}function b(i,d,m){const{toastId:r}=d;m&&l.delete(m);const c={content:i,props:d};l.set(r,c),o(C=>[...C,r].filter(L=>L!==m)),N.emit(4,ne(c,c.props.updateId==null?"added":"updated"))}return p.useEffect(()=>(a.containerId=e.containerId,N.cancelEmit(3).on(0,g).on(1,i=>u.current&&E(i)).on(5,I).emit(2,a),()=>{l.clear(),N.emit(3,a)}),[]),p.useEffect(()=>{a.props=e,a.isToastActive=n,a.displayedToast=s.length}),{getToastToRender:function(i){const d=new Map,m=Array.from(l.values());return e.newestOnTop&&m.reverse(),m.forEach(r=>{const{position:c}=r.props;d.has(c)||d.set(c,[]),d.get(c).push(r)}),Array.from(d,r=>i(r[0],r[1]))},containerRef:u,isToastActive:n}}function oe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function de(e){const[t,s]=p.useState(!1),[o,u]=p.useState(!1),l=p.useRef(null),n=p.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=p.useRef(e),{autoClose:I,pauseOnHover:E,closeToast:v,onClick:g,closeOnClick:b}=e;function i(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",c),document.addEventListener("mouseup",C),document.addEventListener("touchmove",c),document.addEventListener("touchend",C);const h=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=h.getBoundingClientRect(),h.style.transition="",n.x=oe(f.nativeEvent),n.y=se(f.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=h.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=h.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(f){if(n.boundingRect){const{top:h,bottom:k,left:P,right:_}=n.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=P&&n.x<=_&&n.y>=h&&n.y<=k?r():m()}}function m(){s(!0)}function r(){s(!1)}function c(f){const h=l.current;n.canDrag&&h&&(n.didMove=!0,t&&r(),n.x=oe(f),n.y=se(f),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),h.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,h.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function C(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",C);const f=l.current;if(n.canDrag&&n.didMove&&f){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return u(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}p.useEffect(()=>{a.current=e}),p.useEffect(()=>(l.current&&l.current.addEventListener("d",m,{once:!0}),O(e.onOpen)&&e.onOpen(p.isValidElement(e.children)&&e.children.props),()=>{const f=a.current;O(f.onClose)&&f.onClose(p.isValidElement(f.children)&&f.children.props)}),[]),p.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",m),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const L={onMouseDown:i,onTouchStart:i,onMouseUp:d,onTouchEnd:d};return I&&E&&(L.onMouseEnter=r,L.onMouseLeave=m),b&&(L.onClick=f=>{g&&g(f),n.canCloseOnClick&&v()}),{playToast:m,pauseToast:r,isRunning:t,preventExitTransition:o,toastRef:l,eventHandlers:L}}function ie(e){let{closeToast:t,theme:s,ariaLabel:o="close"}=e;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":o},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function me(e){let{delay:t,isRunning:s,closeToast:o,type:u="default",hide:l,className:n,style:a,controlledProgress:I,progress:E,rtl:v,isIn:g,theme:b}=e;const i=l||I&&E===0,d={...a,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:i?0:1};I&&(d.transform=`scaleX(${E})`);const m=B("Toastify__progress-bar",I?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${b}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":v}),r=O(n)?n({rtl:v,type:u,defaultClassName:m}):B(m,n);return y.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:r,style:d,[I&&E>=1?"onTransitionEnd":"onAnimationEnd"]:I&&E<1?null:()=>{g&&o()}})}const pe=e=>{const{isRunning:t,preventExitTransition:s,toastRef:o,eventHandlers:u}=de(e),{closeButton:l,children:n,autoClose:a,onClick:I,type:E,hideProgressBar:v,closeToast:g,transition:b,position:i,className:d,style:m,bodyClassName:r,bodyStyle:c,progressClassName:C,progressStyle:L,updateId:f,role:h,progress:k,rtl:P,toastId:_,deleteToast:A,isIn:q,isLoading:D,iconOut:w,closeOnClick:$,theme:M}=e,z=B("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":$}),R=O(d)?d({rtl:P,position:i,type:E,defaultClassName:z}):B(z,d),x=!!k||!a,F={closeToast:g,type:E,theme:M};let U=null;return l===!1||(U=O(l)?l(F):p.isValidElement(l)?p.cloneElement(l,F):ie(F)),y.createElement(b,{isIn:q,done:A,position:i,preventExitTransition:s,nodeRef:o},y.createElement("div",{id:_,onClick:I,className:R,...u,style:m,ref:o},y.createElement("div",{...q&&{role:h},className:O(r)?r({type:E}):B("Toastify__toast-body",r),style:c},w!=null&&y.createElement("div",{className:B("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},w),y.createElement("div",null,n)),U,y.createElement(me,{...f&&!x?{key:`pb-${f}`}:{},rtl:P,theme:M,delay:a,isRunning:t,isIn:q,closeToast:g,hide:v,type:E,style:L,className:C,controlledProgress:x,progress:k||0})))},J=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},fe=j(J("bounce",!0));j(J("slide",!0));j(J("zoom"));j(J("flip"));const ae=p.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:o,isToastActive:u}=ue(e),{className:l,style:n,rtl:a,containerId:I}=e;function E(v){const g=B("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":a});return O(l)?l({position:v,rtl:a,defaultClassName:g}):B(g,Y(l))}return p.useEffect(()=>{t&&(t.current=o.current)},[]),y.createElement("div",{ref:o,className:"Toastify",id:I},s((v,g)=>{const b=g.length?{...n}:{...n,pointerEvents:"none"};return y.createElement("div",{className:E(v),style:b,key:`container-${v}`},g.map((i,d)=>{let{content:m,props:r}=i;return y.createElement(pe,{...r,isIn:u(r.toastId),style:{...r.style,"--nth":d+1,"--len":g.length},key:`toast-${r.key}`},m)}))}))});ae.displayName="ToastContainer",ae.defaultProps={position:"top-right",transition:fe,autoClose:5e3,closeButton:ie,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let te,S=new Map,Q=[],ge=1;function le(){return""+ge++}function he(e){return e&&(H(e.toastId)||V(e.toastId))?e.toastId:le()}function G(e,t){return S.size>0?N.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:he(t)}}function X(e){return(t,s)=>G(t,K(e,s))}function T(e,t){return G(e,K("default",t))}T.loading=(e,t)=>G(e,K("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,s){let o,{pending:u,error:l,success:n}=t;u&&(o=H(u)?T.loading(u,s):T.loading(u.render,{...s,...u}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},I=(v,g,b)=>{if(g==null)return void T.dismiss(o);const i={type:v,...a,...s,data:b},d=H(g)?{render:g}:g;return o?T.update(o,{...i,...d}):T(d.render,{...i,...d}),b},E=O(e)?e():e;return E.then(v=>I("success",n,v)).catch(v=>I("error",l,v)),E},T.success=X("success"),T.info=X("info"),T.error=X("error"),T.warning=X("warning"),T.warn=T.warning,T.dark=(e,t)=>G(e,K("default",{theme:"dark",...t})),T.dismiss=e=>{S.size>0?N.emit(1,e):Q=Q.filter(t=>e!=null&&t.options.toastId!==e)},T.clearWaitingQueue=function(e){return e===void 0&&(e={}),N.emit(5,e)},T.isActive=e=>{let t=!1;return S.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},T.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(o,u){let{containerId:l}=u;const n=S.get(l||te);return n&&n.getToast(o)}(e,t);if(s){const{props:o,content:u}=s,l={...o,...t,toastId:t.toastId||e,updateId:le()};l.toastId!==e&&(l.staleId=e);const n=l.render||u;delete l.render,G(n,l)}},0)},T.done=e=>{T.update(e,{progress:1})},T.onChange=e=>(N.on(4,e),()=>{N.off(4,e)}),T.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},N.on(2,e=>{te=e.containerId||e,S.set(te,e),Q.forEach(t=>{N.emit(0,t.content,t.options)}),Q=[]}).on(3,e=>{S.delete(e.containerId||e),S.size===0&&N.off(0).off(1).off(5)});export{T as Q,ae as k};
