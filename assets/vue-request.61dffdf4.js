import{d as r,p as l}from"./@vue.69725f70.js";const a={},c=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),O=n=>{Object.keys(n).forEach(e=>{a[e]=n[e]})};r({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(n,{slots:e}){const{config:d}=n;return l(c,d),()=>{var o;return(o=e.default)===null||o===void 0?void 0:o.call(e)}}});const s=typeof window=="undefined",v=()=>{var n,e;return!s&&((n=window)===null||n===void 0||(e=n.document)===null||e===void 0?void 0:e.visibilityState)==="visible"};Promise.resolve(null);var i;const w=new Set,u=new Set,E=new Set,t=n=>{n.forEach(e=>{e()})};!s&&(i=window)!==null&&i!==void 0&&i.addEventListener&&(window.addEventListener("visibilitychange",()=>{v()&&t(u)},!1),window.addEventListener("focus",()=>t(w),!1),window.addEventListener("online",()=>t(E),!1));export{O as s};
