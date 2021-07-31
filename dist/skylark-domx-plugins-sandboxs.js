/**
 * skylark-domx-plugins-sandboxs - The skylark sandbox plugins library for dom api extension
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-sandboxs/
 * @license MIT
 */
!function(t,e){var n=e.define,require=e.require,o="function"==typeof n&&n.amd,r=!o&&"undefined"!=typeof exports;if(!o&&!n){var i={};n=e.define=function(t,e,n){"function"==typeof n?(i[t]={factory:n,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var n=e.split("/"),o=t.split("/");n.pop();for(var r=0;r<o.length;r++)"."!=o[r]&&(".."==o[r]?n.pop():n.push(o[r]));return n.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):i[t]={factory:null,resolved:!0,exports:n}},require=e.require=function(t){if(!i.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=i[t];if(!module.resolved){var n=[];module.deps.forEach(function(t){n.push(require(t))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-plugins-sandboxs/sandboxs",["skylark-domx-plugins-base/plugins"],function(t){"use strict";return t.sandboxs={}}),t("skylark-domx-plugins-sandboxs/sandbox",["skylark-langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./sandboxs"],function(t,e,n,o,r,i,s){"use strict";var a=function(t){return t.contentWindow||t.contentDocument.parentWindow},l=i.Plugin.inherit({klassName:"Sandbox",pluginName:"lark.sandboxs.sandbox",options:{name:"Output",allows:"allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts",frameBorder:"0",cssTextTagId:"sandbox-css"},_construct:function(t,e){this.overrided(t,e),this.target=t,this.old=null,this.active=null,this.state={},this.guid=+new Date},create:function(){var t=document.createElement("iframe");return t.setAttribute("sandbox",this.options.allows),t.setAttribute("frameBorder",this.options.frameBorder),t.setAttribute("name",this.options.name),t.id=this.guid++,t},use:function(e,o){if(!this.target)throw new Error("Sandbox has no target element.");this.old=this.active,this.saveState(this.old),this.active=e,n.prepend(this.target,e),t.defer(function(){o&&o();for(var t,e=this.target.getElementsByTagName("iframe"),r=e.length,i=0,s=this.active.id;t=e[i],i<r;i++)t.id!==s&&(n.remove(t),r--)}.bind(this))},restoreState:function(t,e){if(!t)return{};var n=a(t);if(!n)return{};e.scroll&&n.scrollTo(e.scroll.x,e.scroll.y)},saveState:function(t){if(!t)return{};var e=a(t);return e?{scroll:{x:e.scrollX,y:e.scrollY}}:{}},wrap:function(t,e){t&&(e=e||{},o.on(t,"resize",function(){o.resized(this._elm)}),o.on(t,"focus",()=>{o.trigger(this._elm,"focused")}))},getSizeProperties:function(t){return{width:t.innerWidth||t.document.documentElement.clientWidth,height:t.innerHeight||t.document.documentElement.clientHeight,offsetWidth:t.document.documentElement.offsetWidth,offsetHeight:t.document.documentElement.offsetHeight}},eval:function(t){if(!this.active)throw new Error("sandbox.eval: has no active iframe.");var e=/(^.|\b)console\.(\S+)/g;if(e.test(t)){t=t.replace(e,function(t,e,n){return"window.runnerWindow.proxyConsole."+n})}var n=this.active.contentWindow,o=null,r="log";try{o=n.eval(t)}catch(t){o=t.message,r="error"}return proxyConsole[r](o)},injectScript:function(t,e){if(!this.active)throw new Error("sandbox.injectScript: has no active iframe.");var n=this.active.contentWindow,o=n.document,r=o.createElement("script");r.src=t,r.onload=function(){e()},r.onerror=function(){e('Failed to load "'+t+'"')},o.body.appendChild(r)},injectDOM:function(t,e){if(!this.active)throw new Error("sandbox.injectDOM: has no active iframe.");var n=this.active.contentWindow,o=n.document;try{o.body.innerHTML=t}catch(t){e("Failed to load DOM.")}e()},injectCssText:function(t){if(this.active){var e=this.active.contentDocument.getElementById(this.options.cssTextTagId);if(e)return void(e.innerHTML=t)}},render:function(t,e){var n=this.create(e);this.use(n,()=>{var o=n.contentDocument,r=n.contentWindow||n.contentDocument.parentWindow;o||(o=r.document);let i=e.proxyConsole,s=e.loopProtect;i.methods.forEach(function(t){delete i[t]}),o.open(),o.write(""),r.runnerWindow={proxyConsole:i,protect:s},r.console=i,r.onerror=function(t,e,n,o,r){i._raw("error",r&&r.stack?r.stack:t+" (line "+n+")")},o.write(t),o.close(),this.wrap(r,e)})}});return i.register(l),s.Sandbox=l}),t("skylark-domx-plugins-sandboxs/main",["./sandboxs","./sandbox"],function(t){return t}),t("skylark-domx-plugins-sandboxs",["skylark-domx-plugins-sandboxs/main"],function(t){return t})}(n),!o){var s=require("skylark-langx-ns");r?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-plugins-sandboxs.js.map
