function N(){return N=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t])}return i},N.apply(this,arguments)}function k(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,T(i,e)}function J(i){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},J(i)}function T(i,e){return T=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},T(i,e)}function ee(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function M(i,e,r){return ee()?M=Reflect.construct:M=function(n,a,f){var s=[null];s.push.apply(s,a);var d=Function.bind.apply(n,s),q=new d;return f&&T(q,f.prototype),q},M.apply(null,arguments)}function re(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function U(i){var e=typeof Map=="function"?new Map:void 0;return U=function(t){if(t===null||!re(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return M(t,arguments,J(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),T(n,t)},U(i)}var te=/%[sdj%]/g,ne=function(){};typeof process!="undefined"&&process.env;function W(i){if(!i||!i.length)return null;var e={};return i.forEach(function(r){var t=r.field;e[t]=e[t]||[],e[t].push(r)}),e}function w(i){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var n=0,a=r.length;if(typeof i=="function")return i.apply(null,r);if(typeof i=="string"){var f=i.replace(te,function(s){if(s==="%%")return"%";if(n>=a)return s;switch(s){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch{return"[Circular]"}break;default:return s}});return f}return i}function ie(i){return i==="string"||i==="url"||i==="hex"||i==="email"||i==="date"||i==="pattern"}function g(i,e){return!!(i==null||e==="array"&&Array.isArray(i)&&!i.length||ie(e)&&typeof i=="string"&&!i)}function fe(i,e,r){var t=[],n=0,a=i.length;function f(s){t.push.apply(t,s||[]),n++,n===a&&r(t)}i.forEach(function(s){e(s,f)})}function K(i,e,r){var t=0,n=i.length;function a(f){if(f&&f.length){r(f);return}var s=t;t=t+1,s<n?e(i[s],a):r([])}a([])}function ae(i){var e=[];return Object.keys(i).forEach(function(r){e.push.apply(e,i[r]||[])}),e}var H=function(i){k(e,i);function e(r,t){var n;return n=i.call(this,"Async Validation Error")||this,n.errors=r,n.fields=t,n}return e}(U(Error));function se(i,e,r,t,n){if(e.first){var a=new Promise(function(l,P){var x=function(o){return t(o),o.length?P(new H(o,W(o))):l(n)},u=ae(i);K(u,r,x)});return a.catch(function(l){return l}),a}var f=e.firstFields===!0?Object.keys(i):e.firstFields||[],s=Object.keys(i),d=s.length,q=0,h=[],m=new Promise(function(l,P){var x=function(y){if(h.push.apply(h,y),q++,q===d)return t(h),h.length?P(new H(h,W(h))):l(n)};s.length||(t(h),l(n)),s.forEach(function(u){var y=i[u];f.indexOf(u)!==-1?K(y,r,x):fe(y,r,x)})});return m.catch(function(l){return l}),m}function oe(i){return!!(i&&i.message!==void 0)}function de(i,e){for(var r=i,t=0;t<e.length;t++){if(r==null)return r;r=r[e[t]]}return r}function Q(i,e){return function(r){var t;return i.fullFields?t=de(e,i.fullFields):t=e[r.field||i.fullField],oe(r)?(r.field=r.field||i.fullField,r.fieldValue=t,r):{message:typeof r=="function"?r():r,fieldValue:t,field:r.field||i.fullField}}}function X(i,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var t=e[r];typeof t=="object"&&typeof i[r]=="object"?i[r]=N({},i[r],t):i[r]=t}}return i}var z=function(e,r,t,n,a,f){e.required&&(!t.hasOwnProperty(e.field)||g(r,f||e.type))&&n.push(w(a.messages.required,e.fullField))},ue=function(e,r,t,n,a){(/^\s+$/.test(r)||r==="")&&n.push(w(a.messages.whitespace,e.fullField))},$={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},D={integer:function(e){return D.number(e)&&parseInt(e,10)===e},float:function(e){return D.number(e)&&!D.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!D.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match($.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match($.url)},hex:function(e){return typeof e=="string"&&!!e.match($.hex)}},pe=function(e,r,t,n,a){if(e.required&&r===void 0){z(e,r,t,n,a);return}var f=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;f.indexOf(s)>-1?D[s](r)||n.push(w(a.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&n.push(w(a.messages.types[s],e.fullField,e.type))},ce=function(e,r,t,n,a){var f=typeof e.len=="number",s=typeof e.min=="number",d=typeof e.max=="number",q=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h=r,m=null,l=typeof r=="number",P=typeof r=="string",x=Array.isArray(r);if(l?m="number":P?m="string":x&&(m="array"),!m)return!1;x&&(h=r.length),P&&(h=r.replace(q,"_").length),f?h!==e.len&&n.push(w(a.messages[m].len,e.fullField,e.len)):s&&!d&&h<e.min?n.push(w(a.messages[m].min,e.fullField,e.min)):d&&!s&&h>e.max?n.push(w(a.messages[m].max,e.fullField,e.max)):s&&d&&(h<e.min||h>e.max)&&n.push(w(a.messages[m].range,e.fullField,e.min,e.max))},R="enum",ye=function(e,r,t,n,a){e[R]=Array.isArray(e[R])?e[R]:[],e[R].indexOf(r)===-1&&n.push(w(a.messages[R],e.fullField,e[R].join(", ")))},ge=function(e,r,t,n,a){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(w(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var f=new RegExp(e.pattern);f.test(r)||n.push(w(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},p={required:z,whitespace:ue,type:pe,range:ce,enum:ye,pattern:ge},he=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r,"string")&&!e.required)return t();p.required(e,r,n,f,a,"string"),g(r,"string")||(p.type(e,r,n,f,a),p.range(e,r,n,f,a),p.pattern(e,r,n,f,a),e.whitespace===!0&&p.whitespace(e,r,n,f,a))}t(f)},me=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&p.type(e,r,n,f,a)}t(f)},le=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&(p.type(e,r,n,f,a),p.range(e,r,n,f,a))}t(f)},ve=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&p.type(e,r,n,f,a)}t(f)},qe=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),g(r)||p.type(e,r,n,f,a)}t(f)},we=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&(p.type(e,r,n,f,a),p.range(e,r,n,f,a))}t(f)},Fe=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&(p.type(e,r,n,f,a),p.range(e,r,n,f,a))}t(f)},be=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return t();p.required(e,r,n,f,a,"array"),r!=null&&(p.type(e,r,n,f,a),p.range(e,r,n,f,a))}t(f)},Oe=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&p.type(e,r,n,f,a)}t(f)},xe="enum",Ae=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a),r!==void 0&&p[xe](e,r,n,f,a)}t(f)},Ee=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r,"string")&&!e.required)return t();p.required(e,r,n,f,a),g(r,"string")||p.pattern(e,r,n,f,a)}t(f)},Pe=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r,"date")&&!e.required)return t();if(p.required(e,r,n,f,a),!g(r,"date")){var d;r instanceof Date?d=r:d=new Date(r),p.type(e,d,n,f,a),d&&p.range(e,d.getTime(),n,f,a)}}t(f)},je=function(e,r,t,n,a){var f=[],s=Array.isArray(r)?"array":typeof r;p.required(e,r,n,f,a,s),t(f)},B=function(e,r,t,n,a){var f=e.type,s=[],d=e.required||!e.required&&n.hasOwnProperty(e.field);if(d){if(g(r,f)&&!e.required)return t();p.required(e,r,n,s,a,f),g(r,f)||p.type(e,r,n,s,a)}t(s)},_e=function(e,r,t,n,a){var f=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(g(r)&&!e.required)return t();p.required(e,r,n,f,a)}t(f)},S={string:he,method:me,number:le,boolean:ve,regexp:qe,integer:we,float:Fe,array:be,object:Oe,enum:Ae,pattern:Ee,date:Pe,url:B,hex:B,email:B,required:je,any:_e};function I(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Y=I(),L=function(){function i(r){this.rules=null,this._messages=Y,this.define(r)}var e=i.prototype;return e.define=function(t){var n=this;if(!t)throw new Error("Cannot configure a schema with no rules");if(typeof t!="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(function(a){var f=t[a];n.rules[a]=Array.isArray(f)?f:[f]})},e.messages=function(t){return t&&(this._messages=X(I(),t)),this._messages},e.validate=function(t,n,a){var f=this;n===void 0&&(n={}),a===void 0&&(a=function(){});var s=t,d=n,q=a;if(typeof d=="function"&&(q=d,d={}),!this.rules||Object.keys(this.rules).length===0)return q&&q(null,s),Promise.resolve(s);function h(u){var y=[],o={};function j(F){if(Array.isArray(F)){var v;y=(v=y).concat.apply(v,F)}else y.push(F)}for(var c=0;c<u.length;c++)j(u[c]);y.length?(o=W(y),q(y,o)):q(null,s)}if(d.messages){var m=this.messages();m===Y&&(m=I()),X(m,d.messages),d.messages=m}else d.messages=this.messages();var l={},P=d.keys||Object.keys(this.rules);P.forEach(function(u){var y=f.rules[u],o=s[u];y.forEach(function(j){var c=j;typeof c.transform=="function"&&(s===t&&(s=N({},s)),o=s[u]=c.transform(o)),typeof c=="function"?c={validator:c}:c=N({},c),c.validator=f.getValidationMethod(c),!!c.validator&&(c.field=u,c.fullField=c.fullField||u,c.type=f.getType(c),l[u]=l[u]||[],l[u].push({rule:c,value:o,source:s,field:u}))})});var x={};return se(l,d,function(u,y){var o=u.rule,j=(o.type==="object"||o.type==="array")&&(typeof o.fields=="object"||typeof o.defaultField=="object");j=j&&(o.required||!o.required&&u.value),o.field=u.field;function c(b,_){return N({},_,{fullField:o.fullField+"."+b,fullFields:o.fullFields?[].concat(o.fullFields,[b]):[b]})}function F(b){b===void 0&&(b=[]);var _=Array.isArray(b)?b:[b];!d.suppressWarning&&_.length&&i.warning("async-validator:",_),_.length&&o.message!==void 0&&(_=[].concat(o.message));var A=_.map(Q(o,s));if(d.first&&A.length)return x[o.field]=1,y(A);if(!j)y(A);else{if(o.required&&!u.value)return o.message!==void 0?A=[].concat(o.message).map(Q(o,s)):d.error&&(A=[d.error(o,w(d.messages.required,o.field))]),y(A);var V={};o.defaultField&&Object.keys(u.value).map(function(E){V[E]=o.defaultField}),V=N({},V,u.rule.fields);var Z={};Object.keys(V).forEach(function(E){var O=V[E],C=Array.isArray(O)?O:[O];Z[E]=C.map(c.bind(null,E))});var G=new i(Z);G.messages(d.messages),u.rule.options&&(u.rule.options.messages=d.messages,u.rule.options.error=d.error),G.validate(u.value,u.rule.options||d,function(E){var O=[];A&&A.length&&O.push.apply(O,A),E&&E.length&&O.push.apply(O,E),y(O.length?O:null)})}}var v;o.asyncValidator?v=o.asyncValidator(o,u.value,F,u.source,d):o.validator&&(v=o.validator(o,u.value,F,u.source,d),v===!0?F():v===!1?F(typeof o.message=="function"?o.message(o.fullField||o.field):o.message||(o.fullField||o.field)+" fails"):v instanceof Array?F(v):v instanceof Error&&F(v.message)),v&&v.then&&v.then(function(){return F()},function(b){return F(b)})},function(u){h(u)},s)},e.getType=function(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!S.hasOwnProperty(t.type))throw new Error(w("Unknown rule type %s",t.type));return t.type||"string"},e.getValidationMethod=function(t){if(typeof t.validator=="function")return t.validator;var n=Object.keys(t),a=n.indexOf("message");return a!==-1&&n.splice(a,1),n.length===1&&n[0]==="required"?S.required:S[this.getType(t)]||void 0},i}();L.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");S[e]=r};L.warning=ne;L.messages=Y;L.validators=S;export{L as S};
