(()=>{"use strict";var e,n,t,o,r={9780:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(3645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);"]),r.push([e.id,"html, body {\n  font-family: 'Roboto', sans-serif;\n  background-color: #3f3f3f;\n}\n",""]);const i=r},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},5431:e=>{e.exports=JSON.parse('{"i8":"5.0.0-beta.1"}')},6400:(e,n,t)=>{t.d(n,{sY:()=>E,HY:()=>d,YM:()=>o});var o,r,i,l,a,s={},c=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(e,n){for(var t in n)e[t]=n[t];return e}function p(e){var n=e.parentNode;n&&n.removeChild(e)}function f(e,n,t,r,i){var l={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++o.__v:i};return null!=o.vnode&&o.vnode(l),l}function d(e){return e.children}function h(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function g(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return g(e)}}function y(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!v.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||i)(v)}function v(){for(var e;v.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,o,r,i,l;e.__d&&(i=(r=(n=e).__v).__e,(l=n.__P)&&(t=[],(o=_({},r)).__v=r.__v+1,S(l,r,o,n.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?m(r):i,r.__h),j(t,r),r.__e!=i&&g(r)))}))}function b(e,n,t,o,r,i,l,a,u,_){var h,g,y,v,b,H,T,P=o&&o.__k||c,M=P.length;for(u==s&&(u=null!=l?l[0]:M?m(o,0):null),t.__k=[],h=0;h<n.length;h++)if(null!=(v=t.__k[h]=null==(v=n[h])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(d,{children:v},null,null,null):v.__b>0?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(y=P[h])||y&&v.key==y.key&&v.type===y.type)P[h]=void 0;else for(g=0;g<M;g++){if((y=P[g])&&v.key==y.key&&v.type===y.type){P[g]=void 0;break}y=null}S(e,v,y=y||s,r,i,l,a,u,_),b=v.__e,(g=v.ref)&&y.ref!=g&&(T||(T=[]),y.ref&&T.push(y.ref,null,v),T.push(g,v.__c||b,v)),null!=b?(null==H&&(H=b),"function"==typeof v.type&&v.__k===y.__k?v.__d=u=k(v,u,e):u=w(e,v,y,P,l,b,u),_||"option"!==t.type?"function"==typeof t.type&&(t.__d=u):e.value=""):u&&y.__e==u&&u.parentNode!=e&&(u=m(y))}if(t.__e=H,null!=l&&"function"!=typeof t.type)for(h=l.length;h--;)null!=l[h]&&p(l[h]);for(h=M;h--;)null!=P[h]&&("function"==typeof t.type&&null!=P[h].__e&&P[h].__e==t.__d&&(t.__d=m(o,h+1)),x(P[h],P[h]));if(T)for(h=0;h<T.length;h++)A(T[h],T[++h],T[++h])}function k(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,"function"==typeof r.type?k(r,n,t):n=w(t,r,r,e.__k,null,r.__e,n));return n}function w(e,n,t,o,r,i,l){var a,s,c;if(void 0!==n.__d)a=n.__d,n.__d=void 0;else if(r==t||i!=l||null==i.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(i),a=null;else{for(s=l,c=0;(s=s.nextSibling)&&c<o.length;c+=2)if(s==i)break e;e.insertBefore(i,l),a=l}return void 0!==a?a:i.nextSibling}function H(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function T(e,n,t,o,r){var i,l,a;if(r&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||H(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||H(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(i=n!==(n=n.replace(/Capture$/,"")),(l=n.toLowerCase())in e&&(n=l),n=n.slice(2),e.l||(e.l={}),e.l[n+i]=t,a=i?M:P,t?o||e.addEventListener(n,a,i):e.removeEventListener(n,a,i)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function P(e){this.l[e.type+!1](o.event?o.event(e):e)}function M(e){this.l[e.type+!0](o.event?o.event(e):e)}function S(e,n,t,r,i,l,a,s,c){var u,p,f,m,g,y,v,k,w,H,T,P=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,s=n.__e=t.__e,n.__h=null,l=[s]),(u=o.__b)&&u(n);try{e:if("function"==typeof P){if(k=n.props,w=(u=P.contextType)&&r[u.__c],H=u?w?w.props.value:u.__:r,t.__c?v=(p=n.__c=t.__c).__=p.__E:("prototype"in P&&P.prototype.render?n.__c=p=new P(k,H):(n.__c=p=new h(k,H),p.constructor=P,p.render=C),w&&w.sub(p),p.props=k,p.state||(p.state={}),p.context=H,p.__n=r,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=_({},p.__s)),_(p.__s,P.getDerivedStateFromProps(k,p.__s))),m=p.props,g=p.state,f)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,H),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,H)||n.__v===t.__v){p.props=k,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,p.__h.length&&a.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,H),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,g,y)}))}p.context=H,p.props=k,p.state=p.__s,(u=o.__r)&&u(n),p.__d=!1,p.__v=n,p.__P=e,u=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=_(_({},r),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(m,g)),T=null!=u&&u.type===d&&null==u.key?u.props.children:u,b(e,Array.isArray(T)?T:[T],n,t,r,i,l,a,s,c),p.base=n.__e,n.__h=null,p.__h.length&&a.push(p),v&&(p.__E=p.__=null),p.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=O(t.__e,n,t,r,i,l,a,c);(u=o.diffed)&&u(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=s,n.__h=!!c,l[l.indexOf(s)]=null),o.__e(e,n,t)}}function j(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function O(e,n,t,o,r,i,l,a){var u,_,p,f,d,h=t.props,m=n.props;if(r="svg"===n.type||r,null!=i)for(u=0;u<i.length;u++)if(null!=(_=i[u])&&((null===n.type?3===_.nodeType:_.localName===n.type)||e==_)){e=_,i[u]=null;break}if(null==e){if(null===n.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,m.is&&{is:m.is}),i=null,a=!1}if(null===n.type)h===m||a&&e.data===m||(e.data=m);else{if(null!=i&&(i=c.slice.call(e.childNodes)),p=(h=t.props||s).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!a){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||T(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||T(e,i,n[i],t[i],o)})(e,m,h,r,a),f?n.__k=[]:(u=n.props.children,b(e,Array.isArray(u)?u:[u],n,t,o,"foreignObject"!==n.type&&r,i,l,s,a)),a||("value"in m&&void 0!==(u=m.value)&&(u!==e.value||"progress"===n.type&&!u)&&T(e,"value",u,h.value,!1),"checked"in m&&void 0!==(u=m.checked)&&u!==e.checked&&T(e,"checked",u,h.checked,!1))}return e}function A(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function x(e,n,t){var r,i,l;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||A(r,null,n)),t||"function"==typeof e.type||(t=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&x(r[l],n,t);null!=i&&p(i)}function C(e,n,t){return this.constructor(e,t)}function E(e,n,t){var r,i,l;o.__&&o.__(e,n),i=(r=t===a)?null:t&&t.__k||n.__k,e=function(e,n,t){var o,r,i,l=arguments,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?r=n[i]:a[i]=n[i];if(arguments.length>3)for(t=[t],i=3;i<arguments.length;i++)t.push(l[i]);if(null!=t&&(a.children=t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return f(e,a,o,r,null)}(d,null,[e]),l=[],S(n,(r?n:t||n).__k=e,i||s,s,void 0!==n.ownerSVGElement,t&&!r?[t]:i?null:n.childNodes.length?c.slice.call(n.childNodes):null,l,t||s,r),j(l,e)}o={__e:function(e,n){for(var t,o,r,i=n.__h;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return n.__h=i,t.__E=t}catch(n){e=n}throw e},__v:0},h.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},t),this.props)),e&&_(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},h.prototype.render=d,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0,a=s},396:(e,n,t)=>{t.d(n,{eJ:()=>h,d4:()=>m,sO:()=>g});var o,r,i,l=t(6400),a=0,s=[],c=l.YM.__b,u=l.YM.__r,_=l.YM.diffed,p=l.YM.__c,f=l.YM.unmount;function d(e,n){l.YM.__h&&l.YM.__h(r,e,a||n),a=0;var t=r.__H||(r.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function h(e){return a=1,function(e,n,t){var i=d(o++,2);return i.t=e,i.__c||(i.__=[H(void 0,n),function(e){var n=i.t(i.__[0],e);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=r),i.__}(H,e)}function m(e,n){var t=d(o++,3);!l.YM.__s&&w(t.__H,n)&&(t.__=e,t.__H=n,r.__H.__h.push(t))}function g(e){return a=5,function(e,n){var t=d(o++,7);return w(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}((function(){return{current:e}}),[])}function y(){s.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(b),e.__H.__h.forEach(k),e.__H.__h=[]}catch(n){e.__H.__h=[],l.YM.__e(n,e.__v)}})),s=[]}l.YM.__b=function(e){r=null,c&&c(e)},l.YM.__r=function(e){u&&u(e),o=0;var n=(r=e.__c).__H;n&&(n.__h.forEach(b),n.__h.forEach(k),n.__h=[])},l.YM.diffed=function(e){_&&_(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==s.push(n)&&i===l.YM.requestAnimationFrame||((i=l.YM.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),v&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);v&&(n=requestAnimationFrame(t))})(y)),r=void 0},l.YM.__c=function(e,n){n.some((function(e){try{e.__h.forEach(b),e.__h=e.__h.filter((function(e){return!e.__||k(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],l.YM.__e(t,e.__v)}})),p&&p(e,n)},l.YM.unmount=function(e){f&&f(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(b)}catch(e){l.YM.__e(e,n.__v)}};var v="function"==typeof requestAnimationFrame;function b(e){var n=r;"function"==typeof e.__c&&e.__c(),r=n}function k(e){var n=r;e.__c=e.__(),r=n}function w(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function H(e,n){return"function"==typeof n?n(e):n}},6584:(e,n,t)=>{t.d(n,{HY:()=>o.HY,tZ:()=>r,BX:()=>r});var o=t(6400);function r(e,n,t,r,i){var l={};for(var a in n)"ref"!=a&&(l[a]=n[a]);var s,c,u={type:e,props:l,key:t,ref:n&&n.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++o.YM.__v,__source:r,__self:i};if("function"==typeof e&&(s=e.defaultProps))for(c in s)void 0===l[c]&&(l[c]=s[c]);return o.YM.vnode&&o.YM.vnode(u),u}},8080:(e,n,t)=>{t.d(n,{Z:()=>o});const o='import { AsyncSeriesWaterfallHook } from "tapable";\nimport { Compiler, Compilation } from "webpack";\nimport { Options as HtmlMinifierOptions } from "html-minifier-terser";\n\nexport = HtmlWebpackPlugin;\n\ndeclare class HtmlWebpackPlugin {\n  constructor(options?: HtmlWebpackPlugin.Options);\n\n  apply(compiler: Compiler): void;\n\n  static getHooks(compilation: Compilation): HtmlWebpackPlugin.Hooks;\n\n  /**\n   * Static helper to create a tag object to be get injected into the dom\n   */\n  static createHtmlTagObject(\n    tagName: string,\n    attributes?: { [attributeName: string]: string | boolean },\n    innerHTML?: string\n  ): HtmlWebpackPlugin.HtmlTagObject;\n\n  static readonly version: number;\n}\n\ndeclare namespace HtmlWebpackPlugin {\n  type MinifyOptions = HtmlMinifierOptions;\n\n  interface Options {\n    /**\n     * Emit the file only if it was changed.\n     * @default true\n     */\n    cache?: boolean;\n    /**\n     * List all entries which should be injected\n     */\n    chunks?: "all" | string[];\n    /**\n     * Allows to control how chunks should be sorted before they are included to the html.\n     * @default \'auto\'\n     */\n    chunksSortMode?:\n      | "auto"\n      | "manual"\n      | ((entryNameA: string, entryNameB: string) => number);\n    /**\n     * List all entries which should not be injected\n     */\n    excludeChunks?: string[];\n    /**\n     * Path to the favicon icon\n     */\n    favicon?: false | string;\n    /**\n     * The file to write the HTML to.\n     * Supports subdirectories eg: `assets/admin.html`\n     * [name] will be replaced by the entry name\n     * Supports a function to generate the name\n     *\n     * @default \'index.html\'\n     */\n    filename?: string | ((entryName: string) => string);\n    /**\n     * By default the public path is set to `auto` - that way the html-webpack-plugin will try\n     * to set the publicPath according to the current filename and the webpack publicPath setting\n     */\n    publicPath?: string | "auto";\n    /**\n     * If `true` then append a unique `webpack` compilation hash to all included scripts and CSS files.\n     * This is useful for cache busting\n     */\n    hash?: boolean;\n    /**\n     * Inject all assets into the given `template` or `templateContent`.\n     */\n    inject?:\n      | false // Don\'t inject scripts\n      | true // Inject scripts into body\n      | "body" // Inject scripts into body\n      | "head"; // Inject scripts into head\n    /**\n     * Set up script loading\n     * blocking will result in <script src="..."><\/script>\n     * defer will result in <script defer src="..."><\/script>\n     *\n     * @default \'blocking\'\n     */\n    scriptLoading?: "blocking" | "defer";\n    /**\n     * Inject meta tags\n     */\n    meta?:\n      | false // Disable injection\n      | {\n          [name: string]:\n            | string\n            | false // name content pair e.g. {viewport: \'width=device-width, initial-scale=1, shrink-to-fit=no\'}`\n            | { [attributeName: string]: string | boolean }; // custom properties e.g. { name:"viewport" content:"width=500, initial-scale=1" }\n        };\n    /**\n     * HTML Minification options accepts the following values:\n     * - Set to `false` to disable minifcation\n     * - Set to `\'auto\'` to enable minifcation only for production mode\n     * - Set to custom minification according to\n     * {@link https://github.com/kangax/html-minifier#options-quick-reference}\n     */\n    minify?: "auto" | boolean | MinifyOptions;\n    /**\n     * Render errors into the HTML page\n     */\n    showErrors?: boolean;\n    /**\n     * The `webpack` require path to the template.\n     * @see https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md\n     */\n    template?: string;\n    /**\n     * Allow to use a html string instead of reading from a file\n     */\n    templateContent?:\n      | false // Use the template option instead to load a file\n      | string\n      | ((templateParameters: {\n          [option: string]: any;\n        }) => string | Promise<string>)\n      | Promise<string>;\n    /**\n     * Allows to overwrite the parameters used in the template\n     */\n    templateParameters?:\n      | false // Pass an empty object to the template function\n      | ((\n          compilation: any,\n          assets: {\n            publicPath: string;\n            js: Array<string>;\n            css: Array<string>;\n            manifest?: string;\n            favicon?: string;\n          },\n          assetTags: {\n            headTags: HtmlTagObject[];\n            bodyTags: HtmlTagObject[];\n          },\n          options: ProcessedOptions\n        ) => { [option: string]: any } | Promise<{ [option: string]: any }>)\n      | { [option: string]: any };\n    /**\n     * The title to use for the generated HTML document\n     */\n    title?: string;\n    /**\n     * Enforce self closing tags e.g. <link />\n     */\n    xhtml?: boolean;\n    /**\n     * In addition to the options actually used by this plugin, you can use this hash to pass arbitrary data through\n     * to your template.\n     */\n    [option: string]: any;\n  }\n\n  /**\n   * The plugin options after adding default values\n   */\n  interface ProcessedOptions extends Required<Options> {\n    filename: string;\n  }\n\n  /**\n   * The values which are available during template execution\n   *\n   * Please keep in mind that the `templateParameter` options allows to change them\n   */\n  interface TemplateParameter {\n    compilation: any;\n    htmlWebpackPlugin: {\n      tags: {\n        headTags: HtmlTagObject[];\n        bodyTags: HtmlTagObject[];\n      };\n      files: {\n        publicPath: string;\n        js: Array<string>;\n        css: Array<string>;\n        manifest?: string;\n        favicon?: string;\n      };\n      options: Options;\n    };\n    webpackConfig: any;\n  }\n\n  interface Hooks {\n    alterAssetTags: AsyncSeriesWaterfallHook<{\n      assetTags: {\n        scripts: HtmlTagObject[];\n        styles: HtmlTagObject[];\n        meta: HtmlTagObject[];\n      };\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n\n    alterAssetTagGroups: AsyncSeriesWaterfallHook<{\n      headTags: HtmlTagObject[];\n      bodyTags: HtmlTagObject[];\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n\n    afterTemplateExecution: AsyncSeriesWaterfallHook<{\n      html: string;\n      headTags: HtmlTagObject[];\n      bodyTags: HtmlTagObject[];\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n\n    beforeAssetTagGeneration: AsyncSeriesWaterfallHook<{\n      assets: {\n        publicPath: string;\n        js: Array<string>;\n        css: Array<string>;\n        favicon?: string;\n        manifest?: string;\n      };\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n\n    beforeEmit: AsyncSeriesWaterfallHook<{\n      html: string;\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n\n    afterEmit: AsyncSeriesWaterfallHook<{\n      outputName: string;\n      plugin: HtmlWebpackPlugin;\n    }>;\n  }\n\n  /**\n   * A tag element according to the htmlWebpackPlugin object notation\n   */\n  interface HtmlTagObject {\n    /**\n     * Attributes of the html tag\n     * E.g. `{\'disabled\': true, \'value\': \'demo\'}`\n     */\n    attributes: {\n      [attributeName: string]: string | boolean;\n    };\n    /**\n     * The tag name e.g. `\'div\'`\n     */\n    tagName: string;\n    /**\n     * The inner HTML\n     */\n    innerHTML?: string;\n    /**\n     * Whether this html must not contain innerHTML\n     * @see https://www.w3.org/TR/html5/syntax.html#void-elements\n     */\n    voidTag: boolean;\n  }\n}\n'},3379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],c=t[s]||0,u="".concat(s," ").concat(c);t[s]=c+1;var _=l(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==_?(i[_].references++,i[_].updater(p)):i.push({identifier:u,updater:h(p,n),references:1}),o.push(u)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function _(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var i=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(i,l[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,d=0;function h(e,n){var t,o,r;if(n.singleton){var i=d++;t=f||(f=s(n)),o=_.bind(null,t,i,!1),r=_.bind(null,t,i,!0)}else t=s(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var s=a(e,n),c=0;c<t.length;c++){var u=l(t[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}}},i={};function l(e){if(i[e])return i[e].exports;var n=i[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}l.m=r,l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var r=Object.create(null);l.r(r);var i={};e=e||[null,n({}),n([]),n(n)];for(var a=2&o&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,l.d(r,i),r},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((n,t)=>(l.f[t](e,n),n)),[])),l.u=e=>(({404:"monaco-editor",504:"simulator"}[e]||e)+".js"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t={},o="html-webpack-plugin-repl:",l.l=(e,n,r)=>{if(t[e])t[e].push(n);else{var i,a;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+r),i.src=e),t[e]=[n];var _=(n,o)=>{i.onerror=i.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(o))),n)return n(o)},p=setTimeout(_.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=_.bind(null,i.onerror),i.onload=_.bind(null,i.onload),a&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var n=l.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={143:0};l.f.j=(n,t)=>{var o=l.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var r=new Promise(((t,r)=>{o=e[n]=[t,r]}));t.push(o[2]=r);var i=l.p+l.u(n),a=new Error;l.l(i,(t=>{if(l.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,o[1](a)}}),"chunk-"+n)}};var n=(n,t)=>{for(var o,r,[i,a,s]=t,c=0,u=[];c<i.length;c++)r=i[c],l.o(e,r)&&e[r]&&u.push(e[r][0]),e[r]=0;for(o in a)l.o(a,o)&&(l.m[o]=a[o]);for(s&&s(l),n&&n(t);u.length;)u.shift()()},t=self.webpackChunkhtml_webpack_plugin_repl=self.webpackChunkhtml_webpack_plugin_repl||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),(()=>{var e=l(6584),n=l(6400),t=l(396),o=l(3379),r=l.n(o),i=l(9780);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=()=>Promise.all([l.e(252),l.e(404)]).then(l.bind(l,7718)),s=()=>{const[e,n]=(0,t.eJ)(void 0);return(0,t.d4)((()=>{let e=!0;return a().then((t=>{e&&n(t)})),()=>{e=!1}}),[]),e},c=n=>{const t=s(),{language:o,codeValue:r,onChange:i,...l}=n;if(!t)return(0,e.tZ)("div",{...l});const a=t.MonacoEditor;return(0,e.tZ)(a,{...n})},u=n=>{const t=s(),{language:o,codeValue:r,...i}=n;if(!t)return(0,e.tZ)("div",{...i});const l=t.MonacoViewer;return(0,e.tZ)(l,{...n})},_=document.createElement("div");var p;document.body.appendChild(_),p="\n  type AsyncSeriesWaterfallHook = any;\n  type Compiler = any;\n  type Compilation = any;\n  type HtmlMinifierOptions = any;\n  "+l(8080).Z.split("export = HtmlWebpackPlugin;")[1],a().then((({addExtraLib:e})=>e(p,"file:///node_modules/@types/html-webpack-plugin/index.d.ts")));const f=()=>{const e=new URLSearchParams(document.location.search),n=e.get("code");if(n)return n;const t=e.get("options");return t?`new HtmlWebpackPlugin({\n  ${t.replace(/^[\s\n\r]*\{?/,"").replace(/\}[\s\n\r]*$/,"")}\n});\n`:"new HtmlWebpackPlugin({\n\n});\n"};(0,n.sY)((0,e.tZ)((()=>{const[n,o]=(0,t.eJ)(f);(e=>{(0,t.d4)((()=>{history.replaceState({},document.title,document.location.href.replace(/\?.+$/,"")+"?code="+encodeURIComponent(e))}),[e])})(n);const r=(e=>{const[n,o]=(0,t.eJ)("");return(0,t.d4)((()=>{let n=!0;try{new Function("HtmlWebpackPlugin",e)(class{constructor(e){(async e=>(await l.e(504).then(l.bind(l,8150))).getFormattedHtml(e))(e).then((e=>{n&&o(e)}))}})}catch(e){}return()=>{n=!1}}),[e]),n})(n);return(0,e.BX)(e.HY,{children:[(0,e.tZ)("h1",{style:{color:"#fff",fontWeight:"normal"},children:"html-webpack-plugin live repl"}),(0,e.tZ)(c,{codeValue:n,language:"typescript",onCodeChange:o,style:{background:"#1e1e1e",maxWidth:950,width:"100%",height:200,marginBottom:20}}),(0,e.tZ)(u,{codeValue:r,language:"html",style:{background:"#1e1e1e",maxWidth:950,width:"100%",height:300,marginBottom:20}}),(0,e.BX)("span",{style:{color:"#fff"},children:["Version: ",l(5431).i8]})]})}),{}),_)})()})();