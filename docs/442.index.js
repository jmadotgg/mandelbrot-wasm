(()=>{"use strict";var e,n={770:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W,initSync:()=>S,initThreadPool:()=>h,mandelbrot:()=>m,mandelbrot_parallel:()=>p,wbg_rayon_PoolBuilder:()=>k,wbg_rayon_start_worker:()=>v});var r=t(517);let o;e=t.hmd(e);const i=new Array(128).fill(void 0);function a(e){return i[e]}i.push(void 0,null,!0,!1);let _=i.length;function u(e){_===i.length&&i.push(i.length+1);const n=_;return _=i[n],i[n]=e,n}function c(e){const n=a(e);return function(e){e<132||(i[e]=_,_=e)}(e),n}const s="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&s.decode();let b=null;function l(e,n){return e>>>=0,s.decode((null!==b&&b.buffer===o.memory.buffer||(b=new Uint8Array(o.memory.buffer)),b).slice(e,e+n))}function f(e,n){try{return e.apply(this,n)}catch(e){o.__wbindgen_exn_store(u(e))}}let d=null;function w(){return null!==d&&d.buffer===o.memory.buffer||(d=new Int32Array(o.memory.buffer)),d}let g=null;function y(e,n){return e>>>=0,(null!==g&&g.buffer===o.memory.buffer||(g=new Uint8ClampedArray(o.memory.buffer)),g).subarray(e/1,e/1+n)}function p(e,n,t,r,i,a){try{const s=o.__wbindgen_add_to_stack_pointer(-16);o.mandelbrot_parallel(s,e,n,t,r,i,a);var _=w()[s/4+0],u=w()[s/4+1],c=y(_,u).slice();return o.__wbindgen_free(_,1*u),c}finally{o.__wbindgen_add_to_stack_pointer(16)}}function m(e,n,t,r,i,a){try{const s=o.__wbindgen_add_to_stack_pointer(-16);o.mandelbrot(s,e,n,t,r,i,a);var _=w()[s/4+0],u=w()[s/4+1],c=y(_,u).slice();return o.__wbindgen_free(_,1*u),c}finally{o.__wbindgen_add_to_stack_pointer(16)}}function h(e){return c(o.initThreadPool(e))}function v(e){o.wbg_rayon_start_worker(e)}class k{static __wrap(e){e>>>=0;const n=Object.create(k.prototype);return n.__wbg_ptr=e,n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)}build(){o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function A(){const n={wbg:{}};return n.wbg.__wbindgen_object_clone_ref=function(e){return u(a(e))},n.wbg.__wbg_crypto_c48a774b022d20ac=function(e){return u(a(e).crypto)},n.wbg.__wbindgen_is_object=function(e){const n=a(e);return"object"==typeof n&&null!==n},n.wbg.__wbg_process_298734cf255a885d=function(e){return u(a(e).process)},n.wbg.__wbg_versions_e2e78e134e3e5d01=function(e){return u(a(e).versions)},n.wbg.__wbg_node_1cd7a5d853dbea79=function(e){return u(a(e).node)},n.wbg.__wbindgen_is_string=function(e){return"string"==typeof a(e)},n.wbg.__wbindgen_object_drop_ref=function(e){c(e)},n.wbg.__wbg_msCrypto_bcb970640f50a1e8=function(e){return u(a(e).msCrypto)},n.wbg.__wbg_newwithlength_e5d69174d6984cd7=function(e){return u(new Uint8Array(e>>>0))},n.wbg.__wbg_require_8f08ceecec0f4fee=function(){return f((function(){return u(e.require)}),arguments)},n.wbg.__wbindgen_is_function=function(e){return"function"==typeof a(e)},n.wbg.__wbindgen_string_new=function(e,n){return u(l(e,n))},n.wbg.__wbg_call_01734de55d61e11d=function(){return f((function(e,n,t){return u(a(e).call(a(n),a(t)))}),arguments)},n.wbg.__wbg_self_1ff1d729e9aae938=function(){return f((function(){return u(self.self)}),arguments)},n.wbg.__wbg_window_5f4faef6c12b79ec=function(){return f((function(){return u(window.window)}),arguments)},n.wbg.__wbg_globalThis_1d39714405582d3c=function(){return f((function(){return u(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_651f05c6a0944d1c=function(){return f((function(){return u(t.g.global)}),arguments)},n.wbg.__wbindgen_is_undefined=function(e){return void 0===a(e)},n.wbg.__wbg_newnoargs_581967eacc0e2604=function(e,n){return u(new Function(l(e,n)))},n.wbg.__wbg_call_cb65541d95d71282=function(){return f((function(e,n){return u(a(e).call(a(n)))}),arguments)},n.wbg.__wbg_subarray_13db269f57aa838d=function(e,n,t){return u(a(e).subarray(n>>>0,t>>>0))},n.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab=function(){return f((function(e,n){a(e).getRandomValues(a(n))}),arguments)},n.wbg.__wbindgen_memory=function(){return u(o.memory)},n.wbg.__wbg_buffer_085ec1f694018c4f=function(e){return u(a(e).buffer)},n.wbg.__wbg_new_8125e318e6245eed=function(e){return u(new Uint8Array(a(e)))},n.wbg.__wbg_set_5cf90238115182c3=function(e,n,t){a(e).set(a(n),t>>>0)},n.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa=function(e,n,t){return u(new Uint8Array(a(e),n>>>0,t>>>0))},n.wbg.__wbg_randomFillSync_dc1e9a60c158336d=function(){return f((function(e,n){a(e).randomFillSync(c(n))}),arguments)},n.wbg.__wbindgen_throw=function(e,n){throw new Error(l(e,n))},n.wbg.__wbindgen_module=function(){return u(j.__wbindgen_wasm_module)},n.wbg.__wbg_startWorkers_6fd3af285ea11136=function(e,n,t){return u((0,r.Q)(c(e),c(n),k.__wrap(t)))},n}function x(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function T(e,n){return o=e.exports,j.__wbindgen_wasm_module=n,d=null,b=null,g=null,o.__wbindgen_start(),o}function S(e,n){if(void 0!==o)return o;const t=A();return x(t,n),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),T(new WebAssembly.Instance(e,t),e)}async function j(e,n){if(void 0!==o)return o;void 0===e&&(e=new URL(t(105),t.b));const r=A();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),x(r,n);const{instance:i,module:a}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,r);return T(i,a)}const W=j},517:(e,n,t)=>{function r(e,n){return new Promise((t=>{e.addEventListener("message",(function r({data:o}){null!=o&&o.type===n&&(e.removeEventListener("message",r),t(o))}))}))}let o;async function i(e,n,i){const a={type:"wasm_bindgen_worker_init",module:e,memory:n,receiver:i.receiver()};o=await Promise.all(Array.from({length:i.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(517),t.b),{type:void 0});return e.postMessage(a),await r(e,"wasm_bindgen_worker_ready"),e}))),i.build()}t.d(n,{Q:()=>i}),r(self,"wasm_bindgen_worker_init").then((async e=>{const n=await t.e(770).then(t.bind(t,770));await n.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),n.wbg_rayon_start_worker(e.receiver)}))},105:(e,n,t)=>{e.exports=t.p+"b35eca6ad84bea1cadcc.wasm"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return n[e](i,i.exports,r),i.loaded=!0,i.exports}r.m=n,r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((n,t)=>(r.f[t](e,n),n)),[])),r.u=e=>e+".index.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=self.location+"";var e={442:1,770:1,517:1};r.f.i=(n,t)=>{e[n]||importScripts(r.p+r.u(n))};var n=self.webpackChunkmandelbrot=self.webpackChunkmandelbrot||[],t=n.push.bind(n);n.push=n=>{var[o,i,a]=n;for(var _ in i)r.o(i,_)&&(r.m[_]=i[_]);for(a&&a(r);o.length;)e[o.pop()]=1;t(n)}})(),e=r(770),console.log("Worker initialized"),console.log("Worker initialized"),(0,e.default)().then((()=>{console.log("initted")})).catch((e=>{console.log(e)})),onmessage=n=>{let[t,r,o,i,a,_,u]=n.data,c=u?(0,e.mandelbrot_parallel)(t,r,o,i,a,_):(0,e.mandelbrot)(t,r,o,i,a,_);postMessage(c)},onerror=e=>{console.error(e)}})();