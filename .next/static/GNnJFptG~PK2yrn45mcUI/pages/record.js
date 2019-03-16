(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},101:function(e,t,n){"use strict";var o=n(13),r=n(204),a=n(206),i=n(207),s=n(208),c=n(102),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(209);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;o.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var y=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+u(y+":"+v)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};r(t,f,o),p=null}},p.onerror=function(){f(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var w=n(210),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&o.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},102:function(e,t,n){"use strict";var o=n(205);e.exports=function(e,t,n,r,a){var i=new Error(e);return o(i,t,n,r,a)}},103:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},104:function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o},13:function(e,t,n){"use strict";var o=n(100),r=n(201),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,o){"object"==typeof t[o]&&"object"==typeof n?t[o]=e(t[o],n):t[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return t},extend:function(e,t,n){return u(t,function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},200:function(e,t,n){"use strict";var o=n(13),r=n(100),a=n(202),i=n(74);function s(e){var t=new a(e),n=r(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var c=s(i);c.Axios=a,c.create=function(e){return s(o.merge(i,e))},c.Cancel=n(104),c.CancelToken=n(216),c.isCancel=n(103),c.all=function(e){return Promise.all(e)},c.spread=n(217),e.exports=c,e.exports.default=c},201:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},202:function(e,t,n){"use strict";var o=n(74),r=n(13),a=n(211),i=n(212);function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(o,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=s},203:function(e,t,n){"use strict";var o=n(13);e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},204:function(e,t,n){"use strict";var o=n(102);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},205:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e}},206:function(e,t,n){"use strict";var o=n(13);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},207:function(e,t,n){"use strict";var o=n(13),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(o.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=o.trim(e.substr(0,a)).toLowerCase(),n=o.trim(e.substr(a+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},208:function(e,t,n){"use strict";var o=n(13);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},209:function(e,t,n){"use strict";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,a=String(e),i="",s=0,c=o;a.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&t>>8-s%1*8)){if((n=a.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}},210:function(e,t,n){"use strict";var o=n(13);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},211:function(e,t,n){"use strict";var o=n(13);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},212:function(e,t,n){"use strict";var o=n(13),r=n(213),a=n(103),i=n(74),s=n(214),c=n(215);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return u(e),t.data=r(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(u(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},213:function(e,t,n){"use strict";var o=n(13);e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},214:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},215:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},216:function(e,t,n){"use strict";var o=n(104);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},217:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},33:function(e,t,n){e.exports=n(178)},333:function(e,t,n){e.exports=n(607)},334:function(e,t,n){(function(n){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){i(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;return t.open("HEAD",e,!1),t.send(),200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,i){var s=a.URL||a.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):o(c.href)?t(e,n,i):r(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){r(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),n);else if(o(e))t(e,n,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){r(i)})}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var i="application/octet-stream"===e.type,s=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&s)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,l=f.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){f.revokeObjectURL(l)},4e4)}});a.saveAs=i.saveAs=i,void 0!==e&&(e.exports=i)})?o.apply(t,r):o)||(e.exports=a)}).call(this,n(15))},47:function(e,t,n){e.exports=n(200)},606:function(e,t,n){__NEXT_REGISTER_PAGE("/record",function(){return e.exports=n(756),{page:e.exports.default}})},607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(608),i=(o=a)&&o.__esModule?o:{default:o};var s={nFrequencyBars:255,onAnalysed:null},c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=Object.assign({},s,n),this.audioContext=t,this.audioInput=null,this.realAudioInput=null,this.inputPoint=null,this.audioRecorder=null,this.rafID=null,this.analyserContext=null,this.recIndex=0,this.stream=null,this.updateAnalysers=this.updateAnalysers.bind(this)}return r(e,[{key:"init",value:function(e){var t=this;return new Promise(function(n){t.inputPoint=t.audioContext.createGain(),t.stream=e,t.realAudioInput=t.audioContext.createMediaStreamSource(e),t.audioInput=t.realAudioInput,t.audioInput.connect(t.inputPoint),t.analyserNode=t.audioContext.createAnalyser(),t.analyserNode.fftSize=2048,t.inputPoint.connect(t.analyserNode),t.audioRecorder=new i.default(t.inputPoint);var o=t.audioContext.createGain();o.gain.value=0,t.inputPoint.connect(o),o.connect(t.audioContext.destination),t.updateAnalysers(),n()})}},{key:"start",value:function(){var e=this;return new Promise(function(t,n){e.audioRecorder?(e.audioRecorder.clear(),e.audioRecorder.record(),t(e.stream)):n("Not currently recording")})}},{key:"stop",value:function(){var e=this;return new Promise(function(t){e.audioRecorder.stop(),e.audioRecorder.getBuffer(function(n){e.audioRecorder.exportWAV(function(e){return t({buffer:n,blob:e})})})})}},{key:"updateAnalysers",value:function(){if(this.config.onAnalysed){requestAnimationFrame(this.updateAnalysers);var e=new Uint8Array(this.analyserNode.frequencyBinCount);this.analyserNode.getByteFrequencyData(e);for(var t=new Array(255),n=0,o=void 0,r=0;r<255;r+=1)0!==(o=Math.floor(e[r])-Math.floor(e[r])%5)&&(n=r),t[r]=o;this.config.onAnalysed({data:t,lineTo:n})}}},{key:"setOnAnalysed",value:function(e){this.config.onAnalysed=e}}]),e}();c.download=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"audio";i.default.forceDownload(e,t+".wav")},t.default=c},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(609),i=(o=a)&&o.__esModule?o:{default:o};var s={bufferLen:4096,numChannels:2,mimeType:"audio/wav"},c=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=Object.assign({},s,n),this.recording=!1,this.callbacks={getBuffer:[],exportWAV:[]},this.context=t.context,this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,this.config.bufferLen,this.config.numChannels,this.config.numChannels),this.node.onaudioprocess=function(e){if(o.recording){for(var t=[],n=0;n<o.config.numChannels;n++)t.push(e.inputBuffer.getChannelData(n));o.worker.postMessage({command:"record",buffer:t})}},t.connect(this.node),this.node.connect(this.context.destination);this.worker=new i.default(function(){var e=0,t=[],n=void 0,o=void 0;function r(){for(var e=0;e<o;e++)t[e]=[]}function a(e,t){for(var n=new Float32Array(t),o=0,r=0;r<e.length;r++)n.set(e[r],o),o+=e[r].length;return n}function i(e,t,n){for(var o=0;o<n.length;o+=1)e.setUint8(t+o,n.charCodeAt(o))}this.onmessage=function(s){switch(s.data.command){case"init":c=s.data.config,n=c.sampleRate,o=c.numChannels,r();break;case"record":!function(n){for(var r=0;r<o;r++)t[r].push(n[r]);e+=n[0].length}(s.data.buffer);break;case"exportWAV":!function(r){for(var s=[],c=0;c<o;c++)s.push(a(t[c],e));var u=void 0;u=2===o?function(e,t){var n=e.length+t.length,o=new Float32Array(n),r=0,a=0;for(;r<n;)o[r++]=e[a],o[r++]=t[a],a++;return o}(s[0],s[1]):s[0];var f=(d=u,p=new ArrayBuffer(44+2*d.length),h=new DataView(p),i(h,0,"RIFF"),h.setUint32(4,36+2*d.length,!0),i(h,8,"WAVE"),i(h,12,"fmt "),h.setUint32(16,16,!0),h.setUint16(20,1,!0),h.setUint16(22,o,!0),h.setUint32(24,n,!0),h.setUint32(28,4*n,!0),h.setUint16(32,2*o,!0),h.setUint16(34,16,!0),i(h,36,"data"),h.setUint32(40,2*d.length,!0),function(e,t,n){for(var o=0;o<n.length;o++,t+=2){var r=Math.max(-1,Math.min(1,n[o]));e.setInt16(t,r<0?32768*r:32767*r,!0)}}(h,44,d),h),l=new Blob([f],{type:r});var d,p,h;this.postMessage({command:"exportWAV",data:l})}(s.data.type);break;case"getBuffer":!function(){for(var n=[],r=0;r<o;r++)n.push(a(t[r],e));this.postMessage({command:"getBuffer",data:n})}();break;case"clear":e=0,t=[],r()}var c}},{}),this.worker.postMessage({command:"init",config:{sampleRate:this.context.sampleRate,numChannels:this.config.numChannels}}),this.worker.onmessage=function(e){var t=o.callbacks[e.data.command].pop();"function"==typeof t&&t(e.data.data)}}return r(e,[{key:"record",value:function(){this.recording=!0}},{key:"stop",value:function(){this.recording=!1}},{key:"clear",value:function(){this.worker.postMessage({command:"clear"})}},{key:"getBuffer",value:function(e){if(!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.getBuffer.push(e),this.worker.postMessage({command:"getBuffer"})}},{key:"exportWAV",value:function(e,t){if(t=t||this.config.mimeType,!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.exportWAV.push(e),this.worker.postMessage({command:"exportWAV",type:t})}}]),e}();c.forceDownload=function(e,t){var n=document.createElement("a");n.style="display: none",document.body.appendChild(n);var o=window.URL.createObjectURL(e);n.href=o,n.download=t,n.click(),window.URL.revokeObjectURL(o),document.body.removeChild(n)},t.default=c},609:function(e,t,n){(function(t){var n=!!(t===t.window&&t.URL&&t.Blob&&t.Worker);function o(e,o){var r,a=this;if(o=o||{},n)return r=e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],new t.Worker(t.URL.createObjectURL(new t.Blob([r],{type:"text/javascript"})));this.self=o,this.self.postMessage=function(e){setTimeout(function(){a.onmessage({data:e})},0)},setTimeout(e.bind(o,o),0)}o.prototype.postMessage=function(e){var t=this;setTimeout(function(){t.self.onmessage({data:e})},0)},e.exports=o}).call(this,n(15))},74:function(e,t,n){"use strict";(function(t){var o=n(13),r=n(203),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(101):void 0!==t&&(s=n(101)),s),transformRequest:[function(e,t){return r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){c.headers[e]={}}),o.forEach(["post","put","patch"],function(e){c.headers[e]=o.merge(a)}),e.exports=c}).call(this,n(49))},756:function(e,t,n){"use strict";n.r(t);var o=n(33),r=n.n(o),a=n(1),i=n.n(a),s=(n(0),n(18)),c=n.n(s),u=n(5),f=n.n(u),l=n(51),d=n(4),p=n(36),h=n.n(p),m=n(47),y=n.n(m),v=n(333),w=n.n(v),g=n(334);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}function R(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function i(e){x(a,o,r,i,s,"next",e)}function s(e){x(a,o,r,i,s,"throw",e)}i(void 0)})}}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j,O,U,L={height:"30vh",textAlign:"center"},B={height:"10vh",textAlign:"center"},T={marginLeft:"20px",marginRight:"20px",minWidth:"22vmin"},P={marginLeft:"20px",marginRight:"20px",width:"50vw"},D=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=A(t).call(this,e),n=!a||"object"!==b(a)&&"function"!=typeof a?k(o):a,S(k(k(n)),"recordStart",function(){null,O=null,n.setState({recording:!0}),U.start()}),S(k(k(n)),"recordStop",R(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.stop().then(function(e){var t=e.blob;e.buffer;t=t,O=window.URL.createObjectURL(t),n.setState({uploadData:t})});case 2:n.setState({completedRecording:!0}),n.setState({recording:!1});case 4:case"end":return e.stop()}},e,this)}))),S(k(k(n)),"createDownloadLink",function(){var e=(new Date).toISOString();console.log(e)}),S(k(k(n)),"recordPlay",function(){new Audio(O).play()}),S(k(k(n)),"downloadRecording",function(){Object(g.saveAs)(O,"lorro_record.wav")}),S(k(k(n)),"submitRecording",R(r.a.mark(function e(){var t,o,a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.uploadData,"https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload",a="https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process",e.next=5,y.a.get("https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload",{headers:{"Access-Control-Allow-Headers":"*"}}).then(function(e){console.log(e),o=e.data});case 5:return console.log("res",o),i=o.split("/")[3].split("?")[0],console.log(i),e.next=10,y.a.put(o,t).then(function(e){console.log(e)});case 10:return e.next=12,y.a.post(a,i).then(function(e){console.log(e)});case 12:case"end":return e.stop()}},e,this)}))),n.state={appIsMounted:!1,recording:!1,completedRecording:!1,uploadData:null},n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame(function(){e.setState({appIsMounted:!0})});navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){j=new(window.AudioContext||window.webkitAudioContext),(U=new w.a(j)).init(e),console.log(U)})}},{key:"render",value:function(){return!!this.state.appIsMounted&&i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement(c.a,{elevation:"1"},i.a.createElement(f.a,{container:!0,spacing:24},i.a.createElement(f.a,{item:!0,xs:12,style:L},i.a.createElement(d.d,{variant:"h1",component:"h3"},"Record"),i.a.createElement(d.d,{variant:"h5"},"Click the record button and record an attempt to match your selected speech sample.")),i.a.createElement(f.a,{style:B,container:!0,xs:12,direction:"row",justifyContent:"center",alignItems:"center",justify:"center",alignContent:"space-between"},i.a.createElement(h.a,{style:T,variant:"contained",color:"primary",onClick:this.recordStart},"Record Sample "),i.a.createElement(h.a,{style:T,variant:"contained",color:"secondary",onClick:this.recordStop,disabled:!this.state.recording},"Stop Recording "),i.a.createElement(h.a,{style:T,variant:"contained",color:"default",onClick:this.recordPlay,disabled:!this.state.completedRecording},"Play Recording "),i.a.createElement(h.a,{style:T,variant:"contained",color:"secondary",onClick:this.downloadRecording,disabled:!this.state.completedRecording},"Download ")),i.a.createElement(f.a,{style:B,container:!0,xs:12,direction:"row",justifyContent:"center",alignItems:"center",justify:"center"},i.a.createElement("div",null,i.a.createElement(h.a,{style:P,variant:"contained",color:"primary",onClick:this.submitRecording,disabled:!this.state.completedRecording},"Submit Recording ")))))))}}])&&E(n.prototype,o),s&&E(n,s),t}();t.default=D}},[[606,1,0]]]);