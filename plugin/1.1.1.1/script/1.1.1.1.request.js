class e{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class t{static name="$Storage";static version="1.0.9";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static#t(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}static getItem(t=new String,s=null){let a=s;if(!0===t.startsWith("@")){const{key:s,path:o}=t.match(this.#e)?.groups;t=s;let n=this.getItem(t,{});"object"!=typeof n&&(n={}),a=e.get(n,o);try{a=JSON.parse(a)}catch(e){}}else{switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.read(t);break;case"Quantumult X":a=$prefs.valueForKey(t);break;case"Node.js":this.data=this.#s(this.dataFile),a=this.data?.[t];break;default:a=this.data?.[t]||null}try{a=JSON.parse(a)}catch(e){}}return a??s}static setItem(t=new String,s=new String){let a=!1;if("object"==typeof s)s=JSON.stringify(s);else s=String(s);if(!0===t.startsWith("@")){const{key:o,path:n}=t.match(this.#e)?.groups;t=o;let i=this.getItem(t,{});"object"!=typeof i&&(i={}),e.set(i,n,s),a=this.setItem(t,i)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.write(s,t);break;case"Quantumult X":a=$prefs.setValueForKey(s,t);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[t]=s,this.#a(this.dataFile),a=!0;break;default:a=this.data?.[t]||null}return a}static removeItem(t){let s=!1;if(!0===t.startsWith("@")){const{key:a,path:o}=t.match(this.#e)?.groups;t=a;let n=this.getItem(t);"object"!=typeof n&&(n={}),keyValue=e.unset(n,o),s=this.setItem(t,n)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:s=!1;break;case"Quantumult X":s=$prefs.removeValueForKey(t)}return s}static clear(){let e=!1;switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s);if(!a&&!o)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s),n=JSON.stringify(this.data);a?this.fs.writeFileSync(t,n):o?this.fs.writeFileSync(s,n):this.fs.writeFileSync(t,n)}}}class s{static name="ENV";static version="1.6.4";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}constructor(e,t){console.log(`\n🟧 ${s.name} v${s.version}\n`),this.name=e,this.logs=[],this.isMute=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log(`\n🚩 开始!\n${e}\n`)}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}getScript(e){return new Promise((t=>{this.get({url:e},((e,s,a)=>t(a)))}))}runScript(e,t){return new Promise((s=>{let a=this.Storage.getItem("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let o=this.Storage.getItem("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=t&&t.timeout?t.timeout:o;const[n,i]=a.split("@"),r={url:`http://${i}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:o},headers:{"X-Key":n,Accept:"*/*"},timeout:o};this.post(r,((e,t,a)=>s(a)))})).catch((e=>this.logErr(e)))}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(t={}||"",s={}){switch(t.constructor){case Object:t={...t,...s};break;case String:t={url:t,...s}}t.method||(t.method="GET",(t.body??t.bodyBytes)&&(t.method="POST")),delete t.headers?.["Content-Length"],delete t.headers?.["content-length"];const a=t.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return delete t.id,t.policy&&(this.isLoon()&&(t.node=t.policy),this.isStash()&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy))),ArrayBuffer.isView(t.body)&&(t["binary-mode"]=!0),await new Promise(((e,s)=>{$httpClient[a](t,((a,o,n)=>{a?s(a):(o.ok=/^2\d\d$/.test(o.status),o.statusCode=o.status,n&&(o.body=n,1==t["binary-mode"]&&(o.bodyBytes=n)),e(o))}))}));case"Quantumult X":return t.policy&&e.set(t,"opts.policy",t.policy),delete t.charset,delete t.host,delete t.path,delete t.policy,delete t.scheme,delete t.sessionIndex,delete t.statusCode,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete object.body):t.body&&delete t.bodyBytes,await $task.fetch(t).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let s=require("iconv-lite");this.initGotEnv(t);const{url:o,...n}=t;return await this.got[a](o,n).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=s.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in a)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[t]:("00"+a[t]).substr((""+a[t]).length)));return e}msg(e=name,t="",s="",a){const o=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,s,o(a));break;case"Quantumult X":$notify(e,t,s,o(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(t={}){const s=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${s} 秒`,""),this.platform()){case"Surge":t.policy&&e.set(t,"headers.X-Surge-Policy",t.policy),$done(t);break;case"Loon":t.policy&&(t.node=t.policy),$done(t);break;case"Stash":t.policy&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),$done(t);break;case"Egern":case"Shadowrocket":default:$done(t);break;case"Quantumult X":t.policy&&e.set(t,"opts.policy",t.policy),delete t.charset,delete t.host,delete t.method,delete t.opt,delete t.path,delete t.policy,delete t.scheme,delete t.sessionIndex,delete t.statusCode,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete t.body):t.body&&delete t.bodyBytes,$done(t);break;case"Node.js":process.exit(1)}}getENV(s,a,o){let n=t.getItem(s,o),i={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in t)e.set(i,s,t[s])}const r={Settings:o?.Default?.Settings||{},Configs:o?.Default?.Configs||{},Caches:{}};Array.isArray(a)||(a=[a]);for(let e of a)r.Settings={...r.Settings,...o?.[e]?.Settings,...i,...n?.[e]?.Settings},r.Configs={...r.Configs,...o?.[e]?.Configs},n?.[e]?.Caches&&"string"==typeof n?.[e]?.Caches&&(n[e].Caches=JSON.parse(n?.[e]?.Caches)),r.Caches={...r.Caches,...n?.[e]?.Caches};return this.traverseObject(r.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>this.string2number(e))):this.string2number(t)),t))),r}traverseObject(e,t){for(var s in e){var a=e[s];e[s]="object"==typeof a&&null!==a?this.traverseObject(a,t):t(s,a)}return e}string2number(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}class a{static name="URI";static version="1.2.7";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static#o={scheme:"",host:"",path:"",query:{}};static parse(e){let t=e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(t?.path?t.paths=t.path.split("/"):t.path="",t?.paths){const e=t.paths[t.paths.length-1];if(e?.includes(".")){const s=e.split(".");t.format=s[s.length-1]}}return t?.query&&(t.query=Object.fromEntries(t.query.split("&").map((e=>e.split("="))))),t}static stringify(e=this.#o){let t="";return e?.scheme&&e?.host&&(t+=e.scheme+"://"+e.host),e?.path&&(t+=e?.host?"/"+e.path:e.path),e?.query&&(t+="?"+Object.entries(e.query).map((e=>e.join("="))).join("&")),t}}var o={Switch:!0},n={Settings:o},i={Switch:!0,Title:"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",Icon:"lock.icloud.fill",IconColor:"#f48220",BackgroundColor:"#f6821f",Language:"auto"},r={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},i18n:{"zh-Hans":{IPv4:"IPv4",IPv6:"IPv6",COLO:"托管中心",WARP_Level:"隐私保护",Account_Type:"账户类型",Data_Info:"流量信息",Unknown:"未知",Fail:"获取失败",WARP_Level_Off:"关闭",WARP_Level_On:"开启",WARP_Level_Plus:"增强",Account_Type_unlimited:"无限版",Account_Type_limited:"有限版",Account_Type_team:"团队版",Account_Type_plus:"WARP+",Account_Type_free:"免费版",Data_Info_Used:"已用",Data_Info_Residual:"剩余",Data_Info_Total:"总计",Data_Info_Unlimited:"无限"},"zh-Hant":{IPv4:"IPv4",IPv6:"IPv6",COLO:"託管中心",WARP_Level:"隱私保護",Account_Type:"賬戶類型",Data_Info:"流量信息",Unknown:"未知",Fail:"獲取失敗",WARP_Level_Off:"關閉",WARP_Level_On:"開啟",WARP_Level_Plus:"增強",Account_Type_unlimited:"無限版",Account_Type_limited:"有限版",Account_Type_team:"團隊版",Account_Type_plus:"WARP+",Account_Type_free:"免費版",Data_Info_Used:"已用",Data_Info_Residual:"剩餘",Data_Info_Total:"總計",Data_Info_Unlimited:"無限"},en:{IPv4:"IPv4",IPv6:"IPv6",COLO:"Colo Center",WARP_Level:"WARP Level",Account_Type:"Account Type",Data_Info:"Data Info.",Unknown:"Unknown",Fail:"Fail to Get",WARP_Level_Off:"OFF",WARP_Level_On:"ON",WARP_Level_Plus:"PLUS",Account_Type_unlimited:"Unlimited",Account_Type_limited:"Limited",Account_Type_team:"Team",Account_Type_plus:"WARP+",Account_Type_free:"Free",Data_Info_Used:"Used",Data_Info_Residual:"Remaining",Data_Info_Total:"Earned",Data_Info_Unlimited:"Unlimited"}}},c={Settings:i,Configs:r},l={Switch:!0,setupMode:"ChangeKeypair",Verify:{RegistrationId:null,Mode:"Token",Content:null}},u={Settings:l},d={Switch:!0,IPServer:"ipw.cn",Verify:{Mode:"Token",Content:""},zone:{id:"",name:"",dns_records:[{id:"",type:"A",name:"",content:"",ttl:1,proxied:!1}]}},h={Request:{url:"https://api.cloudflare.com/client/v4",headers:{"content-type":"application/json"}}},p={Settings:d,Configs:h},f={Switch:!0,setupMode:null,deviceType:"iOS",Verify:{License:null,Mode:"Token",Content:null,RegistrationId:null}},g={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},Environment:{iOS:{Type:"i",Version:"v0i2308151957",headers:{"user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},macOS:{Type:"m",Version:"v0i2109031904",headers:{"user-agent":"1.1.1.1/2109031904.1 CFNetwork/1327.0.4 Darwin/21.2.0","cf-client-version":"m-2021.12.1.0-0"}},Android:{Type:"a",Version:"v0a1922",headers:{"user-agent":"okhttp/3.12.1","cf-client-version":"a-6.3-1922"}},Windows:{Type:"w",Version:"",headers:{"user-agent":"","cf-client-version":""}},Linux:{Type:"l",Version:"",headers:{"user-agent":"","cf-client-version":""}}}},y={Settings:f,Configs:g},m={Switch:!0,PrivateKey:"",PublicKey:""},S={interface:{addresses:{v4:"",v6:""}},peers:[{public_key:"",endpoint:{host:"",v4:"",v6:""}}]},_={Settings:m,Configs:S},b=Database={Default:Object.freeze({__proto__:null,Settings:o,default:n}),Panel:Object.freeze({__proto__:null,Configs:r,Settings:i,default:c}),"1dot1dot1dot1":Object.freeze({__proto__:null,Settings:l,default:u}),DNS:Object.freeze({__proto__:null,Configs:h,Settings:d,default:p}),WARP:Object.freeze({__proto__:null,Configs:g,Settings:f,default:y}),VPN:Object.freeze({__proto__:null,Configs:S,Settings:m,default:_})};const v=new s("☁ Cloudflare: 1️⃣ 1.1.1.1 v3.0.1(2).request");let k;const w=a.parse($request.url);v.log(`⚠ URL: ${JSON.stringify(w)}`,"");const $=$request.method;w.host,w.path;const C=w.paths;v.log(`⚠ METHOD: ${$}`,"");const P=($request.headers?.["Content-Type"]??$request.headers?.["content-type"])?.split(";")?.[0];v.log(`⚠ FORMAT: ${P}`,""),(async()=>{const{Settings:s,Caches:o,Configs:n}=function(t,s,a,o){t.log("☑️ Set Environment Variables","");let{Settings:n,Caches:i,Configs:r}=t.getENV(s,a,o);switch(n.Verify?.Mode){case"Token":e.set(r,"Request.headers.authorization",`Bearer ${n.Verify?.Content}`);break;case"ServiceKey":e.set(r,"Request.headers.x-auth-user-service-key",n.Verify?.Content);break;case"Key":e.set(n,"Verify.Content",Array.from(n.Verify?.Content.split("\n"))),e.set(r,"Request.headers.x-auth-key",n.Verify?.Content[0]),e.set(r,"Request.headers.x-auth-email",n.Verify?.Content[1]);break;default:t.log("无可用授权方式",`Mode=${n.Verify?.Mode}`,`Content=${n.Verify?.Content}`);case void 0:}return n.zone?.dns_records&&(n.zone.dns_records=Array.from(n.zone.dns_records.split("\n")),n.zone.dns_records.forEach(((e,t)=>{n.zone.dns_records[t]=Object.fromEntries(e.split("&").map((e=>e.split("=")))),n.zone.dns_records[t].proxied=JSON.parse(n.zone.dns_records[t].proxied)}))),t.log("✅ Set Environment Variables","Settings: "+typeof n,`Settings内容: ${JSON.stringify(n)}`,""),{Settings:n,Caches:i,Configs:r}}(v,"Cloudflare","1dot1dot1dot1",b);switch(v.log(`⚠ Settings.Switch: ${s?.Switch}`,""),s.Switch){case!0:default:const e=v.getENV("WireGuard","VPN",b),o=`/${C[1]}/${C[2]}`==`/reg/${s.Verify.RegistrationId}`?"RegistrationId":"/reg"==`/${C[1]}`?"Registration":void 0;v.log(`🚧 KIND: ${o}`,""),t.setItem("@Cloudflare.1dot1dot1dot1.Caches",$request);let n={};switch($){case"POST":case"PUT":case"PATCH":case"DELETE":switch(P){case void 0:case"application/x-www-form-urlencoded":case"text/plain":case"text/html":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(n=JSON.parse($request.body??"{}"),o){case"Registration":break;case"RegistrationId":"PUT"===$request.method&&(n.key=e.Settings.PublicKey,v.msg(v.name,"重置密钥",`发送请求数据，请求中的客户端公钥已替换为:\n${e.Settings.PublicKey}\n等待回复数据`))}$request.body=JSON.stringify(n);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case"GET":case"HEAD":case"OPTIONS":case void 0:default:$request.headers?.Host&&($request.headers.Host=w.host),$request.url=a.stringify(w);case"CONNECT":case"TRACE":}case!1:}})().catch((e=>v.logErr(e))).finally((()=>{if(void 0===k)v.done($request);else v.isQuanX()?(k.status||(k.status="HTTP/1.1 200 OK"),delete k.headers?.["Content-Length"],delete k.headers?.["content-length"],delete k.headers?.["Transfer-Encoding"],v.done(k)):v.done({response:k})}));
