(()=>{var e={m:{},u:e=>e+".index.js"};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&!t;)t=a[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href;const t=new Worker(new URL(e.p+e.u(442),e.b),{type:void 0}),n=document.getElementById("canvas"),a=n.getContext("2d"),l=document.getElementById("calcBtn"),o=document.getElementById("width"),c=document.getElementById("height"),r=document.getElementById("iterations"),i=document.getElementById("time"),u=document.getElementById("scale"),d=document.getElementById("centerX"),m=document.getElementById("centerY"),v=document.getElementById("renderStrategy"),g=document.getElementById("resetScaleBtn");let s=o.value=window.innerWidth,w=c.value=window.innerHeight,h=r.value=100,p=d.value=-.5,y=m.value=0,f=u.value=1,B=0;function E(){const e="Single"!==v.value;s=o.value=n.width=0!=+o.value?+o.value:window.innerWidth,w=c.value=n.height=0!=+c.value?+c.value:window.innerHeight,h=r.value=0!=+r.value?+r.value:100,f=u.value=0!=+u.value?+u.value:1,p=+d.value,y=+m.value,B=performance.now(),t.postMessage([s,w,f,h,p,y,e])}l.onclick=()=>E(),g.onclick=()=>{p=d.value=-.5,y=m.value=0,f=u.value=1,E()},t.onmessage=e=>{const t=new ImageData(e.data,s,w);i.textContent=performance.now()-B+" ms",a.putImageData(t,0,0)},n.addEventListener("wheel",(function(e){const t=e.deltaY>0?1.5*f:f/1.5,n=(e.clientX-s/2)/(.5*f*s)+p,a=(e.clientY-w/2)/(.5*f*w)+y;p=d.value=n-(e.clientX-s/2)/(.5*t*s),y=m.value=a-(e.clientY-w/2)/(.5*t*w),f=u.value=t,E()}))})();