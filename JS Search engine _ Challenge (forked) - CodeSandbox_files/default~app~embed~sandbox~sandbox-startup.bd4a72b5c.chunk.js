(this.csbJsonP=this.csbJsonP||[]).push([["default~app~embed~sandbox~sandbox-startup"],{"../codesandbox-api/dist/codesandbox.es5.js":function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"Protocol",(function(){return d})),r.d(t,"transformError",(function(){return o})),r.d(t,"clearErrorTransformers",(function(){return i})),r.d(t,"registerErrorTransformer",(function(){return s})),r.d(t,"actions",(function(){return h})),r.d(t,"isStandalone",(function(){return U})),r.d(t,"iframeHandshake",(function(){return S})),r.d(t,"resetState",(function(){return _})),r.d(t,"dispatch",(function(){return P})),r.d(t,"listen",(function(){return I})),r.d(t,"notifyListeners",(function(){return L})),r.d(t,"registerFrame",(function(){return D})),r.d(t,"reattach",(function(){return j}));var n=[];function o(e,t,r){return n.map((function(n){return n(e,t,r)})).filter((function(e){return null!=e}))[0]}function i(){n.length=0}function s(e){n.push(e)}var a=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},c=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},l=function(){return Math.floor(1e6*Math.random()+1e6*Math.random())},d=function(){function e(e,t,r){var n=this;this.type=e,this.handleMessage=t,this.target=r,this.outgoingMessages=new Set,this._messageListener=function(e){return a(n,void 0,void 0,(function(){var t,r,n;return c(this,(function(o){switch(o.label){case 0:return(t=e.data).$type!==this.getTypeId()||this.outgoingMessages.has(t.$id)?[2]:[4,this.handleMessage(t.$data)];case 1:return r=o.sent(),n={$originId:this.internalId,$type:this.getTypeId(),$data:r,$id:t.$id},e.source?e.source.postMessage(n,"*"):this._postMessage(n),[2]}}))}))},this.createConnection(),this.internalId=l(),this.isWorker="Worker"===function(e){try{return e.constructor.name}catch(e){return""}}(r)}return e.prototype.getTypeId=function(){return"p-".concat(this.type)},e.prototype.createConnection=function(){self.addEventListener("message",this._messageListener)},e.prototype.dispose=function(){self.removeEventListener("message",this._messageListener)},e.prototype.sendMessage=function(e){var t=this;return new Promise((function(r){var n=l(),o={$originId:t.internalId,$type:t.getTypeId(),$data:e,$id:n};t.outgoingMessages.add(n);var i=function(e){var o=e.data;o.$type===t.getTypeId()&&o.$id===n&&o.$originId!==t.internalId&&(r(o.$data),self.removeEventListener("message",i))};self.addEventListener("message",i),t._postMessage(o)}))},e.prototype._postMessage=function(e){this.isWorker||"undefined"!=typeof DedicatedWorkerGlobalScope&&this.target instanceof DedicatedWorkerGlobalScope?this.target.postMessage(e):this.target.postMessage(e,"*")},e}();var u=Object.freeze({show:function(e,t,r){return void 0===t&&(t="notice"),void 0===r&&(r=2),{type:"action",action:"notification",title:e,notificationType:t,timeAlive:r}}});var p=Object.freeze({openModule:function(e,t,r){return{type:"action",action:"editor.open-module",path:e,lineNumber:t,column:r}}});var f=Object.freeze({add:function(e){return{type:"action",action:"source.dependencies.add",dependency:e}}}),b=Object.freeze({rename:function(e,t){return{type:"action",action:"source.module.rename",path:e,title:t}}});var h={notifications:u,editor:p,source:Object.freeze({dependencies:f,modules:b}),error:Object.freeze({show:function(e,t,r){var n=r.line,o=r.column,i=r.lineEnd,s=r.columnEnd;return{title:e,message:t,line:n,column:o,path:r.path,payload:r.payload,lineEnd:i,columnEnd:s,severity:"error",type:"action",action:"show-error",source:r.source||"browser"}},clear:function(e,t){return{type:"action",action:"clear-errors",path:e,source:t}}}),correction:Object.freeze({show:function(e,t){var r=void 0===t?{path:"",severity:"warning",source:""}:t,n=r.line,o=r.column,i=r.lineEnd,s=r.columnEnd,a=r.path,c=r.payload,l=r.severity,d=void 0===l?"warning":l,u=r.source;return{message:e,line:n,column:o,lineEnd:i,columnEnd:s,path:a,payload:c,severity:d,source:void 0===u?"":u,type:"action",action:"show-correction"}},clear:function(e,t){return{type:"action",action:"clear-corrections",path:e,source:t}}}),glyph:Object.freeze({show:function(e){return{line:e.line,path:e.path,className:e.className,type:"action",action:"show-glyph"}}})},g=void 0!==e&&"https://codesandbox.io"||"https://codesandbox.io",m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=new Map;var w,U="undefined"==typeof window||!!(window.location&&window.location.href.indexOf("?standalone")>-1)||!window.opener&&window.parent===window||!!(window.location&&window.location.href.indexOf(g)>-1),y=!1,S=new Promise((function(e){w=e})),x=null,$=null,R=function(e){var t;"register-frame"!==e.data.type||$||(x=e.data.origin,$=null!==(t=e.data.id)&&void 0!==t?t:null,y||(w(),y=!0),self.removeEventListener("message",R))};function _(){x=null,v.clear()}function P(e){if(e){var t=m(m({},e),{codesandbox:!0});null!==$&&(t.$id=$),L(t),function(e){var t=JSON.parse(JSON.stringify(e));v.forEach((function(e,r){r&&r.postMessage&&r.postMessage(m(m({},t),{codesandbox:!0}),e)}))}(t),U||null===x&&"initialized"!==e.type||(window.opener?window.opener.postMessage(t,null===x?"*":x):window.parent.postMessage(t,null===x?"*":x))}}"undefined"!=typeof window&&self.addEventListener("message",R);var E={},O=0;function I(e){var t=++O;return E[t]=e,function(){delete E[t]}}function L(e,t){Object.keys(E).forEach((function(r){if(E[r])try{E[r](e,t)}catch(e){}}))}function A(e){if(("initialized"===e.data.type||U)&&(y=!0),y){var t=e.data;!t||!t.codesandbox||null!==x&&e.origin!==x||null!=t.$id&&null!==$&&$!==t.$id||L(t,e.source)}}function D(e,t,r){v.set(e,t),e.postMessage({type:"register-frame",origin:document.location.origin,id:r},t)}function j(){window.addEventListener("message",A)}"undefined"!=typeof window&&window.addEventListener("message",A)}.call(this,r("../../node_modules/process/browser.js"))},"../common/lib/templates/helpers/is-server.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServer=void 0;const n=["adonis","apollo","docusaurus","ember","gatsby","gridsome","marko","mdx-deck","nest","next","node","nuxt","quasar","remix","sapper","styleguidist","unibit","vuepress"];t.isServer=e=>-1!==n.indexOf(e)},"../common/lib/utils/url-generator.js":function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.v2DefaultBranchUrl=t.v2BranchUrl=t.dashboard=t.githubAppInstallLink=t.teamInviteLink=t.blogUrl=t.packageExamplesUrl=t.docsUrl=t.getSandboxId=t.privacyUrl=t.tosUrl=t.csbSite=t.searchUrl=t.gitHubToProjectsUrl=t.gitHubToSandboxUrl=t.optionsToParameterizedUrl=t.githubRepoUrl=t.profileLikesUrl=t.profileSandboxesUrl=t.teamOverviewUrl=t.exploreUrl=t.dashboardUrl=t.profileUrl=t.signInVercelUrl=t.signInUrl=t.signInPageUrl=t.forkSandboxUrl=t.frameUrl=t.vsCodeUrl=t.vsCodeLauncherUrl=t.embedUrl=t.sandboxUrl=t.newEditorUrlPrefix=t.editorUrl=t.uploadFromCliUrl=t.newCxJSSandboxUrl=t.newAngularSandboxUrl=t.newSvelteSandboxUrl=t.importFromGitHubUrl=t.newVueSandboxUrl=t.newPreactSandboxUrl=t.newDojoSandboxUrl=t.newReactTypeScriptSandboxUrl=t.parcelSandboxUrl=t.newSandboxUrl=t.newSandboxWizard=t.protocolAndHost=t.host=t.CSBProjectGitHubRepository=t.gitHubRepoPattern=void 0;const s=r("../common/lib/templates/helpers/is-server.js"),a=i(r("../common/lib/utils/url-generator/dashboard.js"));t.dashboard=a,t.gitHubRepoPattern=/(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;const c=/(https?:\/\/)?((www.)?)github.com/,l=/(\.git)$/,d={"https://codesandbox.io":"https://csb.app","https://codesandbox.stream":"https://csb.dev"},u="https:/",p="codesandbox.io";t.CSBProjectGitHubRepository=({owner:e,repo:t,welcome:r})=>`https://codesandbox.io/p/github/${e}/${t}?create=true${r?"&welcome=true":""}`;const f=(e,...t)=>e[0]+t.map((t,r)=>`${encodeURIComponent(t)}${e[r+1]}`).join("");t.host=()=>"https://codesandbox.io".split("//")[1];t.protocolAndHost=()=>`${location.protocol}//${(0,t.host)()}`;t.newSandboxWizard=()=>"/s";t.newSandboxUrl=()=>"/s/new";t.parcelSandboxUrl=()=>"/s/vanilla";t.newReactTypeScriptSandboxUrl=()=>"/s/react-ts";t.newDojoSandboxUrl=()=>"/s/github/dojo/dojo-codesandbox-template";t.newPreactSandboxUrl=()=>"/s/preact";t.newVueSandboxUrl=()=>"/s/vue";t.importFromGitHubUrl=()=>"/s/github";t.newSvelteSandboxUrl=()=>"/s/svelte";t.newAngularSandboxUrl=()=>"/s/angular";t.newCxJSSandboxUrl=()=>"/s/github/codaxy/cxjs-codesandbox-template";t.uploadFromCliUrl=()=>"/s/cli";const b=e=>f`github/${e.username}/${e.repo}/tree/${e.branch}/`+e.path;t.editorUrl=()=>"/s/";t.newEditorUrlPrefix=()=>"/p/";t.sandboxUrl=(e,r)=>{let n=(0,t.editorUrl)();e.isV2?n=(0,t.newEditorUrlPrefix)()+"devbox/":!e.isSse&&r&&(n=(0,t.newEditorUrlPrefix)()+"sandbox/");const o=e.query?"?"+new URLSearchParams(e.query).toString():"";if(e.git){const{git:t}=e;return`${n}${b(t)}${o}`}return e.alias?`${n}${e.alias}${o}`:`${n}${e.id}${o}`};t.embedUrl=e=>{if(e.git){const{git:t}=e;return"/embed/"+b(t)}return e.alias?"/embed/"+e.alias:"/embed/"+e.id};t.vsCodeLauncherUrl=e=>`${(0,t.protocolAndHost)()}${(0,t.newEditorUrlPrefix)()}vscode?sandboxId=${e}`;t.vsCodeUrl=e=>"vscode://CodeSandbox-io.codesandbox-projects/sandbox/"+e;t.frameUrl=(e,r="",{useFallbackDomain:n=!1,port:o}={})=>{var i,a;const c="true"===(null===(i=window._env_)||void 0===i?void 0:i.USE_STATIC_PREVIEW),l=null===(a=window._env_)||void 0===a?void 0:a.PREVIEW_DOMAIN,u=0===r.indexOf("/")?r.substr(1):r;if(c&&l)return`${location.protocol}//${l}/${u}`;const p=(0,s.isServer)(e.template);let f=(0,t.host)();return!("https://"+f in d)||n||p||(f=d["https://"+f].split("//")[1]),`${location.protocol}//${e.id}${o?"-"+o:""}.${p?"sse.":""}${f}/${u}`};t.forkSandboxUrl=e=>(0,t.sandboxUrl)(e)+"/fork";t.signInPageUrl=e=>{let t="/signin";return e&&(t+="?continue="+e),t};t.signInUrl=(e=!1)=>"/auth/github"+(e?"?scope=user:email,public_repo,workflow":"");t.signInVercelUrl=()=>"/auth/vercel";t.profileUrl=e=>"/u/"+e;t.dashboardUrl=()=>"/dashboard";t.exploreUrl=()=>"/explore";t.teamOverviewUrl=e=>"/dashboard/teams/"+e;t.profileSandboxesUrl=(e,r)=>`${(0,t.profileUrl)(e)}/sandboxes${r?"/"+r:""}`;t.profileLikesUrl=(e,r)=>`${(0,t.profileUrl)(e)}/likes${r?"/"+r:""}`;t.githubRepoUrl=({repo:e,branch:t,username:r,path:n})=>f`https://github.com/${r}/${e}/tree/${t}/`+n;t.optionsToParameterizedUrl=e=>{const t=Object.keys(e).sort().filter(t=>e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");return t?"?"+t:""};t.gitHubToSandboxUrl=e=>e.replace(c,"/s/github").replace(l,"");t.gitHubToProjectsUrl=e=>e.replace(c,"/p/github").replace(l,"");t.searchUrl=e=>"/search"+(e?"?query="+e:"");t.csbSite=()=>[u,p].join("/");t.tosUrl=()=>(0,t.csbSite)()+"/legal/terms";t.privacyUrl=()=>(0,t.csbSite)()+"/legal/privacy",t.getSandboxId=function(){const e="https://codesandbox.io";let t;if([e,d[e]].filter(Boolean).forEach(e=>{const r=e.replace(/https?:\/\//,"").replace(/\./g,"\\."),n=new RegExp("(.*)\\."+r),o=document.location.host.match(n);o&&(t=o[1])}),!t)throw new Error("Can't detect sandbox ID from the current URL");return t};t.docsUrl=(e="")=>`${(0,t.csbSite)()}/docs${e}`;t.packageExamplesUrl=e=>`${(0,t.csbSite)()}/examples/package/${e}`;t.blogUrl=(e="")=>`${(0,t.csbSite)()}/blog${e}`;t.teamInviteLink=e=>`${(0,t.protocolAndHost)()}/invite/${e}`;t.githubAppInstallLink=()=>(0,t.protocolAndHost)()+"/auth/github/app-install";const h=({owner:e,repoName:r,branchName:n,workspaceId:o,createDraftBranch:i,importFlag:s,source:a})=>{const c=new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign({},o?{workspaceId:o}:{}),i?{create:"true"}:{}),s?{import:"true"}:{}),a?{utm_source:a}:{})).toString();return`${(0,t.newEditorUrlPrefix)()}github/${e}/${r}${n?"/"+n:""}${c?"?"+c:""}`};t.v2BranchUrl=e=>h(e);t.v2DefaultBranchUrl=e=>h(e)},"../common/lib/utils/url-generator/dashboard.js":function(e,t,r){"use strict";function n(e,t){return t?`${e}?workspace=${t}`:e}Object.defineProperty(t,"__esModule",{value:!0}),t.createWorkspaceUrl=t.upgradeUrl=t.discoverSearch=t.discover=t.search=t.portalRelativePath=t.portalVMSettings=t.portalPermissions=t.portalRegistry=t.portalOverview=t.liked=t.shared=t.deleted=t.recent=t.templates=t.syncedSandboxes=t.repository=t.repositories=t.myContributions=t.drafts=t.sandboxes=t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX=void 0,t.DASHBOARD_URL_PREFIX="/dashboard",t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX+"/sandboxes";t.sandboxes=(e,r)=>n(`${t.ALL_SANDBOXES_URL_PREFIX}${function(e){return e.split("/").map(e=>e.split(" ").map(encodeURIComponent).join(" ")).join("/")}(e)}`,r);t.drafts=e=>n(t.DASHBOARD_URL_PREFIX+"/drafts",e);t.myContributions=e=>n(t.DASHBOARD_URL_PREFIX+"/my-contributions",e);t.repositories=e=>n(t.DASHBOARD_URL_PREFIX+"/repositories",e);t.repository=({owner:e,name:r,teamId:o})=>n(`${t.DASHBOARD_URL_PREFIX}/repositories/github/${e}/${r}`,o);t.syncedSandboxes=e=>n(t.DASHBOARD_URL_PREFIX+"/synced-sandboxes",e);t.templates=e=>n(t.DASHBOARD_URL_PREFIX+"/templates",e);t.recent=(e,r)=>{let o=n(t.DASHBOARD_URL_PREFIX+"/recent",e);if(r&&Object.keys(r).length>0){const e=new URLSearchParams(r);o.includes("?")?o+="&":o+="?",o+=e.toString()}return o};t.deleted=e=>n(t.DASHBOARD_URL_PREFIX+"/deleted",e);t.shared=e=>n(t.DASHBOARD_URL_PREFIX+"/shared",e);t.liked=e=>n(t.DASHBOARD_URL_PREFIX+"/liked",e);t.portalOverview=(e,t)=>{if(!e)return"https://codesandbox.io/t/overview";return`${n("https://codesandbox.io/t/overview",e)}&${new URLSearchParams(t).toString()}`};t.portalRegistry=e=>n("https://codesandbox.io/t/registry",e);t.portalPermissions=e=>n("https://codesandbox.io/t/permissions",e);t.portalVMSettings=e=>n("https://codesandbox.io/t/vm_settings",e);t.portalRelativePath=e=>n("/t/overview",e);t.search=(e,r)=>{let o=n(t.DASHBOARD_URL_PREFIX+"/search",r);return o.includes("?")?o+="&":o+="?",o+="query="+e,o};t.discover=(e,r)=>n(r?`${t.DASHBOARD_URL_PREFIX}/discover/${r}`:t.DASHBOARD_URL_PREFIX+"/discover",e);t.discoverSearch=(e,r)=>{let o=n(t.DASHBOARD_URL_PREFIX+"/discover/search",r);return o.includes("?")?o+="&":o+="?",o+="query="+e,o};t.upgradeUrl=({workspaceId:e,source:t}={})=>{const r=new URLSearchParams({});e&&r.set("workspace",e),t&&r.set("utm_source",t);const n=r.toString();return n?"/upgrade?"+n:"/upgrade"};t.createWorkspaceUrl=({workspaceId:e})=>{const t=new URLSearchParams;e&&t.set("workspace",e);const r=t.toString();return r?"/create-workspace?"+r:"/create-workspace"}}}]);
//# sourceMappingURL=default~app~embed~sandbox~sandbox-startup.bd4a72b5c.chunk.js.map