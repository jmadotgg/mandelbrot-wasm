"use strict";(self.webpackChunkmandelbrot=self.webpackChunkmandelbrot||[]).push([[770],{770:(n,e,t)=>{t.r(e),t.d(e,{default:()=>C,initSync:()=>x,initThreadPool:()=>A,mandelbrot:()=>p,mandelbrot_parallel:()=>m,mandelbrot_simple:()=>h,wbg_rayon_PoolBuilder:()=>k,wbg_rayon_start_worker:()=>v});var r=t(517);let _;n=t.hmd(n);const o=new Array(128).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let u=o.length;function a(n){u===o.length&&o.push(o.length+1);const e=u;return u=o[e],o[e]=n,e}function c(n){const e=i(n);return function(n){n<132||(o[n]=u,u=n)}(n),e}const b="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&b.decode();let f=null;function s(n,e){return n>>>=0,b.decode((null!==f&&f.buffer===_.memory.buffer||(f=new Uint8Array(_.memory.buffer)),f).slice(n,n+e))}function w(n,e){try{return n.apply(this,e)}catch(n){_.__wbindgen_exn_store(a(n))}}let l=null;function d(){return null!==l&&l.buffer===_.memory.buffer||(l=new Int32Array(_.memory.buffer)),l}let g=null;function y(n,e){return n>>>=0,(null!==g&&g.buffer===_.memory.buffer||(g=new Uint8ClampedArray(_.memory.buffer)),g).subarray(n/1,n/1+e)}function m(n,e,t,r,o,i){try{const b=_.__wbindgen_add_to_stack_pointer(-16);_.mandelbrot_parallel(b,n,e,t,r,o,i);var u=d()[b/4+0],a=d()[b/4+1],c=y(u,a).slice();return _.__wbindgen_free(u,1*a),c}finally{_.__wbindgen_add_to_stack_pointer(16)}}function p(n,e,t,r,o,i){try{const b=_.__wbindgen_add_to_stack_pointer(-16);_.mandelbrot(b,n,e,t,r,o,i);var u=d()[b/4+0],a=d()[b/4+1],c=y(u,a).slice();return _.__wbindgen_free(u,1*a),c}finally{_.__wbindgen_add_to_stack_pointer(16)}}function h(n,e,t,r,o,i){try{const b=_.__wbindgen_add_to_stack_pointer(-16);_.mandelbrot_simple(b,n,e,t,r,o,i);var u=d()[b/4+0],a=d()[b/4+1],c=y(u,a).slice();return _.__wbindgen_free(u,1*a),c}finally{_.__wbindgen_add_to_stack_pointer(16)}}function A(n){return c(_.initThreadPool(n))}function v(n){_.wbg_rayon_start_worker(n)}class k{static __wrap(n){n>>>=0;const e=Object.create(k.prototype);return e.__wbg_ptr=n,e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){const n=this.__destroy_into_raw();_.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return _.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return _.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)}build(){_.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function T(){const e={wbg:{}};return e.wbg.__wbindgen_object_clone_ref=function(n){return a(i(n))},e.wbg.__wbg_crypto_c48a774b022d20ac=function(n){return a(i(n).crypto)},e.wbg.__wbindgen_is_object=function(n){const e=i(n);return"object"==typeof e&&null!==e},e.wbg.__wbg_process_298734cf255a885d=function(n){return a(i(n).process)},e.wbg.__wbg_versions_e2e78e134e3e5d01=function(n){return a(i(n).versions)},e.wbg.__wbg_node_1cd7a5d853dbea79=function(n){return a(i(n).node)},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof i(n)},e.wbg.__wbindgen_object_drop_ref=function(n){c(n)},e.wbg.__wbg_msCrypto_bcb970640f50a1e8=function(n){return a(i(n).msCrypto)},e.wbg.__wbg_newwithlength_e5d69174d6984cd7=function(n){return a(new Uint8Array(n>>>0))},e.wbg.__wbg_require_8f08ceecec0f4fee=function(){return w((function(){return a(n.require)}),arguments)},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof i(n)},e.wbg.__wbindgen_string_new=function(n,e){return a(s(n,e))},e.wbg.__wbg_call_01734de55d61e11d=function(){return w((function(n,e,t){return a(i(n).call(i(e),i(t)))}),arguments)},e.wbg.__wbg_self_1ff1d729e9aae938=function(){return w((function(){return a(self.self)}),arguments)},e.wbg.__wbg_window_5f4faef6c12b79ec=function(){return w((function(){return a(window.window)}),arguments)},e.wbg.__wbg_globalThis_1d39714405582d3c=function(){return w((function(){return a(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_651f05c6a0944d1c=function(){return w((function(){return a(t.g.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(n){return void 0===i(n)},e.wbg.__wbg_newnoargs_581967eacc0e2604=function(n,e){return a(new Function(s(n,e)))},e.wbg.__wbg_call_cb65541d95d71282=function(){return w((function(n,e){return a(i(n).call(i(e)))}),arguments)},e.wbg.__wbg_subarray_13db269f57aa838d=function(n,e,t){return a(i(n).subarray(e>>>0,t>>>0))},e.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab=function(){return w((function(n,e){i(n).getRandomValues(i(e))}),arguments)},e.wbg.__wbindgen_memory=function(){return a(_.memory)},e.wbg.__wbg_buffer_085ec1f694018c4f=function(n){return a(i(n).buffer)},e.wbg.__wbg_new_8125e318e6245eed=function(n){return a(new Uint8Array(i(n)))},e.wbg.__wbg_set_5cf90238115182c3=function(n,e,t){i(n).set(i(e),t>>>0)},e.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa=function(n,e,t){return a(new Uint8Array(i(n),e>>>0,t>>>0))},e.wbg.__wbg_randomFillSync_dc1e9a60c158336d=function(){return w((function(n,e){i(n).randomFillSync(c(e))}),arguments)},e.wbg.__wbindgen_throw=function(n,e){throw new Error(s(n,e))},e.wbg.__wbindgen_module=function(){return a(U.__wbindgen_wasm_module)},e.wbg.__wbg_startWorkers_6fd3af285ea11136=function(n,e,t){return a((0,r.Q)(c(n),c(e),k.__wrap(t)))},e}function W(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function R(n,e){return _=n.exports,U.__wbindgen_wasm_module=e,l=null,f=null,g=null,_.__wbindgen_start(),_}function x(n,e){if(void 0!==_)return _;const t=T();return W(t,e),n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),R(new WebAssembly.Instance(n,t),n)}async function U(n,e){if(void 0!==_)return _;void 0===n&&(n=new URL(t(105),t.b));const r=T();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),W(r,e);const{instance:o,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,r);return R(o,i)}const C=U},105:(n,e,t)=>{n.exports=t.p+"e8de23f91c3c5f7d93f5.wasm"}}]);