//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.3
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(root, factory) {

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'underscore'], function(Backbone, _) {
      return (root.Marionette = root.Mn = factory(root, Backbone, _));
    });
  } else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('underscore');
    module.exports = factory(root, Backbone, _);
  } else {
    root.Marionette = root.Mn = factory(root, root.Backbone, root._);
  }

}(this, function(root, Backbone, _) {
  'use strict';

  /* istanbul ignore next */
  // Backbone.BabySitter
  // -------------------
  // v0.1.10
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.babysitter
  (function(Backbone, _) {
    "use strict";
    var previousChildViewContainer = Backbone.ChildViewContainer;
    // BabySitter.ChildViewContainer
    // -----------------------------
    //
    // Provide a container to store, retrieve and
    // shut down child views.
    Backbone.ChildViewContainer = function(Backbone, _) {
      // Container Constructor
      // ---------------------
      var Container = function(views) {
        this._views = {};
        this._indexByModel = {};
        this._indexByCustom = {};
        this._updateLength();
        _.each(views, this.add, this);
      };
      // Container Methods
      // -----------------
      _.extend(Container.prototype, {
        // Add a view to this container. Stores the view
        // by `cid` and makes it searchable by the model
        // cid (and model itself). Optionally specify
        // a custom key to store an retrieve the view.
        add: function(view, customIndex) {
          var viewCid = view.cid;
          // store the view
          this._views[viewCid] = view;
          // index it by model
          if (view.model) {
            this._indexByModel[view.model.cid] = viewCid;
          }
          // index by custom
          if (customIndex) {
            this._indexByCustom[customIndex] = viewCid;
          }
          this._updateLength();
          return this;
        },
        // Find a view by the model that was attached to
        // it. Uses the model's `cid` to find it.
        findByModel: function(model) {
          return this.findByModelCid(model.cid);
        },
        // Find a view by the `cid` of the model that was attached to
        // it. Uses the model's `cid` to find the view `cid` and
        // retrieve the view using it.
        findByModelCid: function(modelCid) {
          var viewCid = this._indexByModel[modelCid];
          return this.findByCid(viewCid);
        },
        // Find a view by a custom indexer.
        findByCustom: function(index) {
          var viewCid = this._indexByCustom[index];
          return this.findByCid(viewCid);
        },
        // Find by index. This is not guaranteed to be a
        // stable index.
        findByIndex: function(index) {
          return _.values(this._views)[index];
        },
        // retrieve a view by its `cid` directly
        findByCid: function(cid) {
          return this._views[cid];
        },
        // Remove a view
        remove: function(view) {
          var viewCid = view.cid;
          // delete model index
          if (view.model) {
            delete this._indexByModel[view.model.cid];
          }
          // delete custom index
          _.any(this._indexByCustom, function(cid, key) {
            if (cid === viewCid) {
              delete this._indexByCustom[key];
              return true;
            }
          }, this);
          // remove the view from the container
          delete this._views[viewCid];
          // update the length
          this._updateLength();
          return this;
        },
        // Call a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.call`.
        call: function(method) {
          this.apply(method, _.tail(arguments));
        },
        // Apply a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.apply`.
        apply: function(method, args) {
          _.each(this._views, function(view) {
            if (_.isFunction(view[method])) {
              view[method].apply(view, args || []);
            }
          });
        },
        // Update the `.length` attribute on this container
        _updateLength: function() {
          this.length = _.size(this._views);
        }
      });
      // Borrowing this code from Backbone.Collection:
      // http://backbonejs.org/docs/backbone.html#section-106
      //
      // Mix in methods from Underscore, for iteration, and other
      // collection related features.
      var methods = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce" ];
      _.each(methods, function(method) {
        Container.prototype[method] = function() {
          var views = _.values(this._views);
          var args = [ views ].concat(_.toArray(arguments));
          return _[method].apply(_, args);
        };
      });
      // return the public API
      return Container;
    }(Backbone, _);
    Backbone.ChildViewContainer.VERSION = "0.1.10";
    Backbone.ChildViewContainer.noConflict = function() {
      Backbone.ChildViewContainer = previousChildViewContainer;
      return this;
    };
    return Backbone.ChildViewContainer;
  })(Backbone, _);

  /* istanbul ignore next */
  // Backbone.Wreqr (Backbone.Marionette)
  // ----------------------------------
  // v1.3.5
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.wreqr
  (function(Backbone, _) {
    "use strict";
    var previousWreqr = Backbone.Wreqr;
    var Wreqr = Backbone.Wreqr = {};
    Backbone.Wreqr.VERSION = "1.3.5";
    Backbone.Wreqr.noConflict = function() {
      Backbone.Wreqr = previousWreqr;
      return this;
    };
    // Handlers
    // --------
    // A registry of functions to call, given a name
    Wreqr.Handlers = function(Backbone, _) {
      "use strict";
      // Constructor
      // -----------
      var Handlers = function(options) {
        this.options = options;
        this._wreqrHandlers = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      Handlers.extend = Backbone.Model.extend;
      // Instance Members
      // ----------------
      _.extend(Handlers.prototype, Backbone.Events, {
        // Add multiple handlers using an object literal configuration
        setHandlers: function(handlers) {
          _.each(handlers, function(handler, name) {
            var context = null;
            if (_.isObject(handler) && !_.isFunction(handler)) {
              context = handler.context;
              handler = handler.callback;
            }
            this.setHandler(name, handler, context);
          }, this);
        },
        // Add a handler for the given name, with an
        // optional context to run the handler within
        setHandler: function(name, handler, context) {
          var config = {
            callback: handler,
            context: context
          };
          this._wreqrHandlers[name] = config;
          this.trigger("handler:add", name, handler, context);
        },
        // Determine whether or not a handler is registered
        hasHandler: function(name) {
          return !!this._wreqrHandlers[name];
        },
        // Get the currently registered handler for
        // the specified name. Throws an exception if
        // no handler is found.
        getHandler: function(name) {
          var config = this._wreqrHandlers[name];
          if (!config) {
            return;
          }
          return function() {
            return config.callback.apply(config.context, arguments);
          };
        },
        // Remove a handler for the specified name
        removeHandler: function(name) {
          delete this._wreqrHandlers[name];
        },
        // Remove all handlers from this registry
        removeAllHandlers: function() {
          this._wreqrHandlers = {};
        }
      });
      return Handlers;
    }(Backbone, _);
    // Wreqr.CommandStorage
    // --------------------
    //
    // Store and retrieve commands for execution.
    Wreqr.CommandStorage = function() {
      "use strict";
      // Constructor function
      var CommandStorage = function(options) {
        this.options = options;
        this._commands = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      // Instance methods
      _.extend(CommandStorage.prototype, Backbone.Events, {
        // Get an object literal by command name, that contains
        // the `commandName` and the `instances` of all commands
        // represented as an array of arguments to process
        getCommands: function(commandName) {
          var commands = this._commands[commandName];
          // we don't have it, so add it
          if (!commands) {
            // build the configuration
            commands = {
              command: commandName,
              instances: []
            };
            // store it
            this._commands[commandName] = commands;
          }
          return commands;
        },
        // Add a command by name, to the storage and store the
        // args for the command
        addCommand: function(commandName, args) {
          var command = this.getCommands(commandName);
          command.instances.push(args);
        },
        // Clear all commands for the given `commandName`
        clearCommands: function(commandName) {
          var command = this.getCommands(commandName);
          command.instances = [];
        }
      });
      return CommandStorage;
    }();
    // Wreqr.Commands
    // --------------
    //
    // A simple command pattern implementation. Register a command
    // handler and execute it.
    Wreqr.Commands = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        // default storage type
        storageType: Wreqr.CommandStorage,
        constructor: function(options) {
          this.options = options || {};
          this._initializeStorage(this.options);
          this.on("handler:add", this._executeCommands, this);
          Wreqr.Handlers.prototype.constructor.apply(this, arguments);
        },
        // Execute a named command with the supplied args
        execute: function(name) {
          name = arguments[0];
          var args = _.rest(arguments);
          if (this.hasHandler(name)) {
            this.getHandler(name).apply(this, args);
          } else {
            this.storage.addCommand(name, args);
          }
        },
        // Internal method to handle bulk execution of stored commands
        _executeCommands: function(name, handler, context) {
          var command = this.storage.getCommands(name);
          // loop through and execute all the stored command instances
          _.each(command.instances, function(args) {
            handler.apply(context, args);
          });
          this.storage.clearCommands(name);
        },
        // Internal method to initialize storage either from the type's
        // `storageType` or the instance `options.storageType`.
        _initializeStorage: function(options) {
          var storage;
          var StorageType = options.storageType || this.storageType;
          if (_.isFunction(StorageType)) {
            storage = new StorageType();
          } else {
            storage = StorageType;
          }
          this.storage = storage;
        }
      });
    }(Wreqr, _);
    // Wreqr.RequestResponse
    // ---------------------
    //
    // A simple request/response implementation. Register a
    // request handler, and return a response from it
    Wreqr.RequestResponse = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        request: function(name) {
          if (this.hasHandler(name)) {
            return this.getHandler(name).apply(this, _.rest(arguments));
          }
        }
      });
    }(Wreqr, _);
    // Event Aggregator
    // ----------------
    // A pub-sub object that can be used to decouple various parts
    // of an application through event-driven architecture.
    Wreqr.EventAggregator = function(Backbone, _) {
      "use strict";
      var EA = function() {};
      // Copy the `extend` function used by Backbone's classes
      EA.extend = Backbone.Model.extend;
      // Copy the basic Backbone.Events on to the event aggregator
      _.extend(EA.prototype, Backbone.Events);
      return EA;
    }(Backbone, _);
    // Wreqr.Channel
    // --------------
    //
    // An object that wraps the three messaging systems:
    // EventAggregator, RequestResponse, Commands
    Wreqr.Channel = function(Wreqr) {
      "use strict";
      var Channel = function(channelName) {
        this.vent = new Backbone.Wreqr.EventAggregator();
        this.reqres = new Backbone.Wreqr.RequestResponse();
        this.commands = new Backbone.Wreqr.Commands();
        this.channelName = channelName;
      };
      _.extend(Channel.prototype, {
        // Remove all handlers from the messaging systems of this channel
        reset: function() {
          this.vent.off();
          this.vent.stopListening();
          this.reqres.removeAllHandlers();
          this.commands.removeAllHandlers();
          return this;
        },
        // Connect a hash of events; one for each messaging system
        connectEvents: function(hash, context) {
          this._connect("vent", hash, context);
          return this;
        },
        connectCommands: function(hash, context) {
          this._connect("commands", hash, context);
          return this;
        },
        connectRequests: function(hash, context) {
          this._connect("reqres", hash, context);
          return this;
        },
        // Attach the handlers to a given message system `type`
        _connect: function(type, hash, context) {
          if (!hash) {
            return;
          }
          context = context || this;
          var method = type === "vent" ? "on" : "setHandler";
          _.each(hash, function(fn, eventName) {
            this[type][method](eventName, _.bind(fn, context));
          }, this);
        }
      });
      return Channel;
    }(Wreqr);
    // Wreqr.Radio
    // --------------
    //
    // An object that lets you communicate with many channels.
    Wreqr.radio = function(Wreqr, _) {
      "use strict";
      var Radio = function() {
        this._channels = {};
        this.vent = {};
        this.commands = {};
        this.reqres = {};
        this._proxyMethods();
      };
      _.extend(Radio.prototype, {
        channel: function(channelName) {
          if (!channelName) {
            throw new Error("Channel must receive a name");
          }
          return this._getChannel(channelName);
        },
        _getChannel: function(channelName) {
          var channel = this._channels[channelName];
          if (!channel) {
            channel = new Wreqr.Channel(channelName);
            this._channels[channelName] = channel;
          }
          return channel;
        },
        _proxyMethods: function() {
          _.each([ "vent", "commands", "reqres" ], function(system) {
            _.each(messageSystems[system], function(method) {
              this[system][method] = proxyMethod(this, system, method);
            }, this);
          }, this);
        }
      });
      var messageSystems = {
        vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
        commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
        reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
      };
      var proxyMethod = function(radio, system, method) {
        return function(channelName) {
          var messageSystem = radio._getChannel(channelName)[system];
          return messageSystem[method].apply(messageSystem, _.rest(arguments));
        };
      };
      return new Radio();
    }(Wreqr, _);
    return Backbone.Wreqr;
  })(Backbone, _);

  var previousMarionette = root.Marionette;
  var previousMn = root.Mn;

  var Marionette = Backbone.Marionette = {};

  Marionette.VERSION = '2.4.3';

  Marionette.noConflict = function() {
    root.Marionette = previousMarionette;
    root.Mn = previousMn;
    return this;
  };

  Backbone.Marionette = Marionette;

  // Get the Deferred creator for later use
  Marionette.Deferred = Backbone.$.Deferred;

  /* jshint unused: false *//* global console */
  
  // Helpers
  // -------
  
  // Marionette.extend
  // -----------------
  
  // Borrow the Backbone `extend` method so we can use it as needed
  Marionette.extend = Backbone.Model.extend;
  
  // Marionette.isNodeAttached
  // -------------------------
  
  // Determine if `el` is a child of the document
  Marionette.isNodeAttached = function(el) {
    return Backbone.$.contains(document.documentElement, el);
  };
  
  // Merge `keys` from `options` onto `this`
  Marionette.mergeOptions = function(options, keys) {
    if (!options) { return; }
    _.extend(this, _.pick(options, keys));
  };
  
  // Marionette.getOption
  // --------------------
  
  // Retrieve an object, function or other value from a target
  // object or its `options`, with `options` taking precedence.
  Marionette.getOption = function(target, optionName) {
    if (!target || !optionName) { return; }
    if (target.options && (target.options[optionName] !== undefined)) {
      return target.options[optionName];
    } else {
      return target[optionName];
    }
  };
  
  // Proxy `Marionette.getOption`
  Marionette.proxyGetOption = function(optionName) {
    return Marionette.getOption(this, optionName);
  };
  
  // Similar to `_.result`, this is a simple helper
  // If a function is provided we call it with context
  // otherwise just return the value. If the value is
  // undefined return a default value
  Marionette._getValue = function(value, context, params) {
    if (_.isFunction(value)) {
      value = params ? value.apply(context, params) : value.call(context);
    }
    return value;
  };
  
  // Marionette.normalizeMethods
  // ----------------------
  
  // Pass in a mapping of events => functions or function names
  // and return a mapping of events => functions
  Marionette.normalizeMethods = function(hash) {
    return _.reduce(hash, function(normalizedHash, method, name) {
      if (!_.isFunction(method)) {
        method = this[method];
      }
      if (method) {
        normalizedHash[name] = method;
      }
      return normalizedHash;
    }, {}, this);
  };
  
  // utility method for parsing @ui. syntax strings
  // into associated selector
  Marionette.normalizeUIString = function(uiString, ui) {
    return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
      return ui[r.slice(4)];
    });
  };
  
  // allows for the use of the @ui. syntax within
  // a given key for triggers and events
  // swaps the @ui with the associated selector.
  // Returns a new, non-mutated, parsed events hash.
  Marionette.normalizeUIKeys = function(hash, ui) {
    return _.reduce(hash, function(memo, val, key) {
      var normalizedKey = Marionette.normalizeUIString(key, ui);
      memo[normalizedKey] = val;
      return memo;
    }, {});
  };
  
  // allows for the use of the @ui. syntax within
  // a given value for regions
  // swaps the @ui with the associated selector
  Marionette.normalizeUIValues = function(hash, ui, properties) {
    _.each(hash, function(val, key) {
      if (_.isString(val)) {
        hash[key] = Marionette.normalizeUIString(val, ui);
      } else if (_.isObject(val) && _.isArray(properties)) {
        _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
        /* Value is an object, and we got an array of embedded property names to normalize. */
        _.each(properties, function(property) {
          var propertyVal = val[property];
          if (_.isString(propertyVal)) {
            val[property] = Marionette.normalizeUIString(propertyVal, ui);
          }
        });
      }
    });
    return hash;
  };
  
  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-121
  Marionette.actAsCollection = function(object, listProperty) {
    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
      'last', 'without', 'isEmpty', 'pluck'];
  
    _.each(methods, function(method) {
      object[method] = function() {
        var list = _.values(_.result(this, listProperty));
        var args = [list].concat(_.toArray(arguments));
        return _[method].apply(_, args);
      };
    });
  };
  
  var deprecate = Marionette.deprecate = function(message, test) {
    if (_.isObject(message)) {
      message = (
        message.prev + ' is going to be removed in the future. ' +
        'Please use ' + message.next + ' instead.' +
        (message.url ? ' See: ' + message.url : '')
      );
    }
  
    if ((test === undefined || !test) && !deprecate._cache[message]) {
      deprecate._warn('Deprecation warning: ' + message);
      deprecate._cache[message] = true;
    }
  };
  
  deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function() {};
  deprecate._cache = {};
  
  /* jshint maxstatements: 14, maxcomplexity: 7 */
  
  // Trigger Method
  // --------------
  
  Marionette._triggerMethod = (function() {
    // split the event name on the ":"
    var splitter = /(^|:)(\w)/gi;
  
    // take the event section ("section1:section2:section3")
    // and turn it in to uppercase name
    function getEventName(match, prefix, eventName) {
      return eventName.toUpperCase();
    }
  
    return function(context, event, args) {
      var noEventArg = arguments.length < 3;
      if (noEventArg) {
        args = event;
        event = args[0];
      }
  
      // get the method name from the event name
      var methodName = 'on' + event.replace(splitter, getEventName);
      var method = context[methodName];
      var result;
  
      // call the onMethodName if it exists
      if (_.isFunction(method)) {
        // pass all args, except the event name
        result = method.apply(context, noEventArg ? _.rest(args) : args);
      }
  
      // trigger the event, if a trigger method exists
      if (_.isFunction(context.trigger)) {
        if (noEventArg + args.length > 1) {
          context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
        } else {
          context.trigger(event);
        }
      }
  
      return result;
    };
  })();
  
  // Trigger an event and/or a corresponding method name. Examples:
  //
  // `this.triggerMethod("foo")` will trigger the "foo" event and
  // call the "onFoo" method.
  //
  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
  // call the "onFooBar" method.
  Marionette.triggerMethod = function(event) {
    return Marionette._triggerMethod(this, arguments);
  };
  
  // triggerMethodOn invokes triggerMethod on a specific context
  //
  // e.g. `Marionette.triggerMethodOn(view, 'show')`
  // will trigger a "show" event or invoke onShow the view.
  Marionette.triggerMethodOn = function(context) {
    var fnc = _.isFunction(context.triggerMethod) ?
                  context.triggerMethod :
                  Marionette.triggerMethod;
  
    return fnc.apply(context, _.rest(arguments));
  };
  
  // DOM Refresh
  // -----------
  
  // Monitor a view's state, and after it has been rendered and shown
  // in the DOM, trigger a "dom:refresh" event every time it is
  // re-rendered.
  
  Marionette.MonitorDOMRefresh = function(view) {
    if (view._isDomRefreshMonitored) { return; }
    view._isDomRefreshMonitored = true;
  
    // track when the view has been shown in the DOM,
    // using a Marionette.Region (or by other means of triggering "show")
    function handleShow() {
      view._isShown = true;
      triggerDOMRefresh();
    }
  
    // track when the view has been rendered
    function handleRender() {
      view._isRendered = true;
      triggerDOMRefresh();
    }
  
    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
    function triggerDOMRefresh() {
      if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
        Marionette.triggerMethodOn(view, 'dom:refresh', view);
      }
    }
  
    view.on({
      show: handleShow,
      render: handleRender
    });
  };
  
  /* jshint maxparams: 5 */
  
  // Bind Entity Events & Unbind Entity Events
  // -----------------------------------------
  //
  // These methods are used to bind/unbind a backbone "entity" (e.g. collection/model)
  // to methods on a target object.
  //
  // The first parameter, `target`, must have the Backbone.Events module mixed in.
  //
  // The second parameter is the `entity` (Backbone.Model, Backbone.Collection or
  // any object that has Backbone.Events mixed in) to bind the events from.
  //
  // The third parameter is a hash of { "event:name": "eventHandler" }
  // configuration. Multiple handlers can be separated by a space. A
  // function can be supplied instead of a string handler name.
  
  (function(Marionette) {
    'use strict';
  
    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function bindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);
  
      _.each(methodNames, function(methodName) {
  
        var method = target[methodName];
        if (!method) {
          throw new Marionette.Error('Method "' + methodName +
            '" was configured as an event handler, but does not exist.');
        }
  
        target.listenTo(entity, evt, method);
      });
    }
  
    // Bind the event to a supplied callback function
    function bindToFunction(target, entity, evt, method) {
      target.listenTo(entity, evt, method);
    }
  
    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function unbindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);
  
      _.each(methodNames, function(methodName) {
        var method = target[methodName];
        target.stopListening(entity, evt, method);
      });
    }
  
    // Bind the event to a supplied callback function
    function unbindToFunction(target, entity, evt, method) {
      target.stopListening(entity, evt, method);
    }
  
    // generic looping function
    function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
      if (!entity || !bindings) { return; }
  
      // type-check bindings
      if (!_.isObject(bindings)) {
        throw new Marionette.Error({
          message: 'Bindings must be an object or function.',
          url: 'marionette.functions.html#marionettebindentityevents'
        });
      }
  
      // allow the bindings to be a function
      bindings = Marionette._getValue(bindings, target);
  
      // iterate the bindings and bind them
      _.each(bindings, function(methods, evt) {
  
        // allow for a function as the handler,
        // or a list of event names as a string
        if (_.isFunction(methods)) {
          functionCallback(target, entity, evt, methods);
        } else {
          stringCallback(target, entity, evt, methods);
        }
  
      });
    }
  
    // Export Public API
    Marionette.bindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
    };
  
    Marionette.unbindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
    };
  
    // Proxy `bindEntityEvents`
    Marionette.proxyBindEntityEvents = function(entity, bindings) {
      return Marionette.bindEntityEvents(this, entity, bindings);
    };
  
    // Proxy `unbindEntityEvents`
    Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
      return Marionette.unbindEntityEvents(this, entity, bindings);
    };
  })(Marionette);
  

  // Error
  // -----
  
  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];
  
  Marionette.Error = Marionette.extend.call(Error, {
    urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',
  
    constructor: function(message, options) {
      if (_.isObject(message)) {
        options = message;
        message = options.message;
      } else if (!options) {
        options = {};
      }
  
      var error = Error.call(this, message);
      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
  
      this.captureStackTrace();
  
      if (options.url) {
        this.url = this.urlRoot + options.url;
      }
    },
  
    captureStackTrace: function() {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Marionette.Error);
      }
    },
  
    toString: function() {
      return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
    }
  });
  
  Marionette.Error.extend = Marionette.extend;
  
  // Callbacks
  // ---------
  
  // A simple way of managing a collection of callbacks
  // and executing them at a later point in time, using jQuery's
  // `Deferred` object.
  Marionette.Callbacks = function() {
    this._deferred = Marionette.Deferred();
    this._callbacks = [];
  };
  
  _.extend(Marionette.Callbacks.prototype, {
  
    // Add a callback to be executed. Callbacks added here are
    // guaranteed to execute, even if they are added after the
    // `run` method is called.
    add: function(callback, contextOverride) {
      var promise = _.result(this._deferred, 'promise');
  
      this._callbacks.push({cb: callback, ctx: contextOverride});
  
      promise.then(function(args) {
        if (contextOverride) { args.context = contextOverride; }
        callback.call(args.context, args.options);
      });
    },
  
    // Run all registered callbacks with the context specified.
    // Additional callbacks can be added after this has been run
    // and they will still be executed.
    run: function(options, context) {
      this._deferred.resolve({
        options: options,
        context: context
      });
    },
  
    // Resets the list of callbacks to be run, allowing the same list
    // to be run multiple times - whenever the `run` method is called.
    reset: function() {
      var callbacks = this._callbacks;
      this._deferred = Marionette.Deferred();
      this._callbacks = [];
  
      _.each(callbacks, function(cb) {
        this.add(cb.cb, cb.ctx);
      }, this);
    }
  });
  
  // Controller
  // ----------
  
  // A multi-purpose object to use as a controller for
  // modules and routers, and as a mediator for workflow
  // and coordination of other objects, views, and more.
  Marionette.Controller = function(options) {
    this.options = options || {};
  
    if (_.isFunction(this.initialize)) {
      this.initialize(this.options);
    }
  };
  
  Marionette.Controller.extend = Marionette.extend;
  
  // Controller Methods
  // --------------
  
  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Controller.prototype, Backbone.Events, {
    destroy: function() {
      Marionette._triggerMethod(this, 'before:destroy', arguments);
      Marionette._triggerMethod(this, 'destroy', arguments);
  
      this.stopListening();
      this.off();
      return this;
    },
  
    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,
  
    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,
  
    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption
  
  });
  
  // Object
  // ------
  
  // A Base Class that other Classes should descend from.
  // Object borrows many conventions and utilities from Backbone.
  Marionette.Object = function(options) {
    this.options = _.extend({}, _.result(this, 'options'), options);
  
    this.initialize.apply(this, arguments);
  };
  
  Marionette.Object.extend = Marionette.extend;
  
  // Object Methods
  // --------------
  
  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Object.prototype, Backbone.Events, {
  
    //this is a noop method intended to be overridden by classes that extend from this base
    initialize: function() {},
  
    destroy: function() {
      this.triggerMethod('before:destroy');
      this.triggerMethod('destroy');
      this.stopListening();
  
      return this;
    },
  
    // Import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,
  
    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,
  
    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,
  
    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,
  
    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });
  
  /* jshint maxcomplexity: 16, maxstatements: 45, maxlen: 120 */
  
  // Region
  // ------
  
  // Manage the visual regions of your composite application. See
  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
  
  Marionette.Region = Marionette.Object.extend({
    constructor: function(options) {
  
      // set options temporarily so that we can get `el`.
      // options will be overriden by Object.constructor
      this.options = options || {};
      this.el = this.getOption('el');
  
      // Handle when this.el is passed in as a $ wrapped element.
      this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
  
      if (!this.el) {
        throw new Marionette.Error({
          name: 'NoElError',
          message: 'An "el" must be specified for a region.'
        });
      }
  
      this.$el = this.getEl(this.el);
      Marionette.Object.call(this, options);
    },
  
    // Displays a backbone view instance inside of the region.
    // Handles calling the `render` method for you. Reads content
    // directly from the `el` attribute. Also calls an optional
    // `onShow` and `onDestroy` method on your view, just after showing
    // or just before destroying the view, respectively.
    // The `preventDestroy` option can be used to prevent a view from
    // the old view being destroyed on show.
    // The `forceShow` option can be used to force a view to be
    // re-rendered if it's already shown in the region.
    show: function(view, options) {
      if (!this._ensureElement()) {
        return;
      }
  
      this._ensureViewIsIntact(view);
      Marionette.MonitorDOMRefresh(view);
  
      var showOptions     = options || {};
      var isDifferentView = view !== this.currentView;
      var preventDestroy  = !!showOptions.preventDestroy;
      var forceShow       = !!showOptions.forceShow;
  
      // We are only changing the view if there is a current view to change to begin with
      var isChangingView = !!this.currentView;
  
      // Only destroy the current view if we don't want to `preventDestroy` and if
      // the view given in the first argument is different than `currentView`
      var _shouldDestroyView = isDifferentView && !preventDestroy;
  
      // Only show the view given in the first argument if it is different than
      // the current view or if we want to re-show the view. Note that if
      // `_shouldDestroyView` is true, then `_shouldShowView` is also necessarily true.
      var _shouldShowView = isDifferentView || forceShow;
  
      if (isChangingView) {
        this.triggerMethod('before:swapOut', this.currentView, this, options);
      }
  
      if (this.currentView) {
        delete this.currentView._parent;
      }
  
      if (_shouldDestroyView) {
        this.empty();
  
      // A `destroy` event is attached to the clean up manually removed views.
      // We need to detach this event when a new view is going to be shown as it
      // is no longer relevant.
      } else if (isChangingView && _shouldShowView) {
        this.currentView.off('destroy', this.empty, this);
      }
  
      if (_shouldShowView) {
  
        // We need to listen for if a view is destroyed
        // in a way other than through the region.
        // If this happens we need to remove the reference
        // to the currentView since once a view has been destroyed
        // we can not reuse it.
        view.once('destroy', this.empty, this);
  
        this._renderView(view);
  
        view._parent = this;
  
        if (isChangingView) {
          this.triggerMethod('before:swap', view, this, options);
        }
  
        this.triggerMethod('before:show', view, this, options);
        Marionette.triggerMethodOn(view, 'before:show', view, this, options);
  
        if (isChangingView) {
          this.triggerMethod('swapOut', this.currentView, this, options);
        }
  
        // An array of views that we're about to display
        var attachedRegion = Marionette.isNodeAttached(this.el);
  
        // The views that we're about to attach to the document
        // It's important that we prevent _getNestedViews from being executed unnecessarily
        // as it's a potentially-slow method
        var displayedViews = [];
  
        var attachOptions = _.extend({
          triggerBeforeAttach: this.triggerBeforeAttach,
          triggerAttach: this.triggerAttach
        }, showOptions);
  
        if (attachedRegion && attachOptions.triggerBeforeAttach) {
          displayedViews = this._displayedViews(view);
          this._triggerAttach(displayedViews, 'before:');
        }
  
        this.attachHtml(view);
        this.currentView = view;
  
        if (attachedRegion && attachOptions.triggerAttach) {
          displayedViews = this._displayedViews(view);
          this._triggerAttach(displayedViews);
        }
  
        if (isChangingView) {
          this.triggerMethod('swap', view, this, options);
        }
  
        this.triggerMethod('show', view, this, options);
        Marionette.triggerMethodOn(view, 'show', view, this, options);
  
        return this;
      }
  
      return this;
    },
  
    triggerBeforeAttach: true,
    triggerAttach: true,
  
    _triggerAttach: function(views, prefix) {
      var eventName = (prefix || '') + 'attach';
      _.each(views, function(view) {
        Marionette.triggerMethodOn(view, eventName, view, this);
      }, this);
    },
  
    _displayedViews: function(view) {
      return _.union([view], _.result(view, '_getNestedViews') || []);
    },
  
    _renderView: function(view) {
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'before:render', view);
      }
      view.render();
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'render', view);
      }
    },
  
    _ensureElement: function() {
      if (!_.isObject(this.el)) {
        this.$el = this.getEl(this.el);
        this.el = this.$el[0];
      }
  
      if (!this.$el || this.$el.length === 0) {
        if (this.getOption('allowMissingEl')) {
          return false;
        } else {
          throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
        }
      }
      return true;
    },
  
    _ensureViewIsIntact: function(view) {
      if (!view) {
        throw new Marionette.Error({
          name: 'ViewNotValid',
          message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
        });
      }
  
      if (view.isDestroyed) {
        throw new Marionette.Error({
          name: 'ViewDestroyedError',
          message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
        });
      }
    },
  
    // Override this method to change how the region finds the DOM
    // element that it manages. Return a jQuery selector object scoped
    // to a provided parent el or the document if none exists.
    getEl: function(el) {
      return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
    },
  
    // Override this method to change how the new view is
    // appended to the `$el` that the region is managing
    attachHtml: function(view) {
      this.$el.contents().detach();
  
      this.el.appendChild(view.el);
    },
  
    // Destroy the current view, if there is one. If there is no
    // current view, it does nothing and returns immediately.
    empty: function(options) {
      var view = this.currentView;
  
      var emptyOptions = options || {};
      var preventDestroy  = !!emptyOptions.preventDestroy;
      // If there is no view in the region
      // we should not remove anything
      if (!view) { return; }
  
      view.off('destroy', this.empty, this);
      this.triggerMethod('before:empty', view);
      if (!preventDestroy) {
        this._destroyView();
      }
      this.triggerMethod('empty', view);
  
      // Remove region pointer to the currentView
      delete this.currentView;
  
      if (preventDestroy) {
        this.$el.contents().detach();
      }
  
      return this;
    },
  
    // call 'destroy' or 'remove', depending on which is found
    // on the view (if showing a raw Backbone view or a Marionette View)
    _destroyView: function() {
      var view = this.currentView;
      if (view.isDestroyed) { return; }
  
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'before:destroy', view);
      }
      if (view.destroy) {
        view.destroy();
      } else {
        view.remove();
  
        // appending isDestroyed to raw Backbone View allows regions
        // to throw a ViewDestroyedError for this view
        view.isDestroyed = true;
      }
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'destroy', view);
      }
    },
  
    // Attach an existing view to the region. This
    // will not call `render` or `onShow` for the new view,
    // and will not replace the current HTML for the `el`
    // of the region.
    attachView: function(view) {
      if (this.currentView) {
        delete this.currentView._parent;
      }
      view._parent = this;
      this.currentView = view;
      return this;
    },
  
    // Checks whether a view is currently present within
    // the region. Returns `true` if there is and `false` if
    // no view is present.
    hasView: function() {
      return !!this.currentView;
    },
  
    // Reset the region by destroying any existing view and
    // clearing out the cached `$el`. The next time a view
    // is shown via this region, the region will re-query the
    // DOM for the region's `el`.
    reset: function() {
      this.empty();
  
      if (this.$el) {
        this.el = this.$el.selector;
      }
  
      delete this.$el;
      return this;
    }
  
  },
  
  // Static Methods
  {
  
    // Build an instance of a region by passing in a configuration object
    // and a default region class to use if none is specified in the config.
    //
    // The config object should either be a string as a jQuery DOM selector,
    // a Region class directly, or an object literal that specifies a selector,
    // a custom regionClass, and any options to be supplied to the region:
    //
    // ```js
    // {
    //   selector: "#foo",
    //   regionClass: MyCustomRegion,
    //   allowMissingEl: false
    // }
    // ```
    //
    buildRegion: function(regionConfig, DefaultRegionClass) {
      if (_.isString(regionConfig)) {
        return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
      }
  
      if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
        return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
      }
  
      if (_.isFunction(regionConfig)) {
        return this._buildRegionFromRegionClass(regionConfig);
      }
  
      throw new Marionette.Error({
        message: 'Improper region configuration type.',
        url: 'marionette.region.html#region-configuration-types'
      });
    },
  
    // Build the region from a string selector like '#foo-region'
    _buildRegionFromSelector: function(selector, DefaultRegionClass) {
      return new DefaultRegionClass({el: selector});
    },
  
    // Build the region from a configuration object
    // ```js
    // { selector: '#foo', regionClass: FooRegion, allowMissingEl: false }
    // ```
    _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
      var RegionClass = regionConfig.regionClass || DefaultRegionClass;
      var options = _.omit(regionConfig, 'selector', 'regionClass');
  
      if (regionConfig.selector && !options.el) {
        options.el = regionConfig.selector;
      }
  
      return new RegionClass(options);
    },
  
    // Build the region directly from a given `RegionClass`
    _buildRegionFromRegionClass: function(RegionClass) {
      return new RegionClass();
    }
  });
  
  // Region Manager
  // --------------
  
  // Manage one or more related `Marionette.Region` objects.
  Marionette.RegionManager = Marionette.Controller.extend({
    constructor: function(options) {
      this._regions = {};
      this.length = 0;
  
      Marionette.Controller.call(this, options);
  
      this.addRegions(this.getOption('regions'));
    },
  
    // Add multiple regions using an object literal or a
    // function that returns an object literal, where
    // each key becomes the region name, and each value is
    // the region definition.
    addRegions: function(regionDefinitions, defaults) {
      regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);
  
      return _.reduce(regionDefinitions, function(regions, definition, name) {
        if (_.isString(definition)) {
          definition = {selector: definition};
        }
        if (definition.selector) {
          definition = _.defaults({}, definition, defaults);
        }
  
        regions[name] = this.addRegion(name, definition);
        return regions;
      }, {}, this);
    },
  
    // Add an individual region to the region manager,
    // and return the region instance
    addRegion: function(name, definition) {
      var region;
  
      if (definition instanceof Marionette.Region) {
        region = definition;
      } else {
        region = Marionette.Region.buildRegion(definition, Marionette.Region);
      }
  
      this.triggerMethod('before:add:region', name, region);
  
      region._parent = this;
      this._store(name, region);
  
      this.triggerMethod('add:region', name, region);
      return region;
    },
  
    // Get a region by name
    get: function(name) {
      return this._regions[name];
    },
  
    // Gets all the regions contained within
    // the `regionManager` instance.
    getRegions: function() {
      return _.clone(this._regions);
    },
  
    // Remove a region by name
    removeRegion: function(name) {
      var region = this._regions[name];
      this._remove(name, region);
  
      return region;
    },
  
    // Empty all regions in the region manager, and
    // remove them
    removeRegions: function() {
      var regions = this.getRegions();
      _.each(this._regions, function(region, name) {
        this._remove(name, region);
      }, this);
  
      return regions;
    },
  
    // Empty all regions in the region manager, but
    // leave them attached
    emptyRegions: function() {
      var regions = this.getRegions();
      _.invoke(regions, 'empty');
      return regions;
    },
  
    // Destroy all regions and shut down the region
    // manager entirely
    destroy: function() {
      this.removeRegions();
      return Marionette.Controller.prototype.destroy.apply(this, arguments);
    },
  
    // internal method to store regions
    _store: function(name, region) {
      if (!this._regions[name]) {
        this.length++;
      }
  
      this._regions[name] = region;
    },
  
    // internal method to remove a region
    _remove: function(name, region) {
      this.triggerMethod('before:remove:region', name, region);
      region.empty();
      region.stopListening();
  
      delete region._parent;
      delete this._regions[name];
      this.length--;
      this.triggerMethod('remove:region', name, region);
    }
  });
  
  Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');
  

  // Template Cache
  // --------------
  
  // Manage templates stored in `<script>` blocks,
  // caching them for faster access.
  Marionette.TemplateCache = function(templateId) {
    this.templateId = templateId;
  };
  
  // TemplateCache object-level methods. Manage the template
  // caches from these method calls instead of creating
  // your own TemplateCache instances
  _.extend(Marionette.TemplateCache, {
    templateCaches: {},
  
    // Get the specified template by id. Either
    // retrieves the cached version, or loads it
    // from the DOM.
    get: function(templateId, options) {
      var cachedTemplate = this.templateCaches[templateId];
  
      if (!cachedTemplate) {
        cachedTemplate = new Marionette.TemplateCache(templateId);
        this.templateCaches[templateId] = cachedTemplate;
      }
  
      return cachedTemplate.load(options);
    },
  
    // Clear templates from the cache. If no arguments
    // are specified, clears all templates:
    // `clear()`
    //
    // If arguments are specified, clears each of the
    // specified templates from the cache:
    // `clear("#t1", "#t2", "...")`
    clear: function() {
      var i;
      var args = _.toArray(arguments);
      var length = args.length;
  
      if (length > 0) {
        for (i = 0; i < length; i++) {
          delete this.templateCaches[args[i]];
        }
      } else {
        this.templateCaches = {};
      }
    }
  });
  
  // TemplateCache instance methods, allowing each
  // template cache object to manage its own state
  // and know whether or not it has been loaded
  _.extend(Marionette.TemplateCache.prototype, {
  
    // Internal method to load the template
    load: function(options) {
      // Guard clause to prevent loading this template more than once
      if (this.compiledTemplate) {
        return this.compiledTemplate;
      }
  
      // Load the template and compile it
      var template = this.loadTemplate(this.templateId, options);
      this.compiledTemplate = this.compileTemplate(template, options);
  
      return this.compiledTemplate;
    },
  
    // Load a template from the DOM, by default. Override
    // this method to provide your own template retrieval
    // For asynchronous loading with AMD/RequireJS, consider
    // using a template-loader plugin as described here:
    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
    loadTemplate: function(templateId, options) {
      var $template = Backbone.$(templateId);
  
      if (!$template.length) {
        throw new Marionette.Error({
          name: 'NoTemplateError',
          message: 'Could not find template: "' + templateId + '"'
        });
      }
      return $template.html();
    },
  
    // Pre-compile the template before caching it. Override
    // this method if you do not need to pre-compile a template
    // (JST / RequireJS for example) or if you want to change
    // the template engine used (Handebars, etc).
    compileTemplate: function(rawTemplate, options) {
      return _.template(rawTemplate, options);
    }
  });
  
  // Renderer
  // --------
  
  // Render a template with data by passing in the template
  // selector and the data to render.
  Marionette.Renderer = {
  
    // Render a template with data. The `template` parameter is
    // passed to the `TemplateCache` object to retrieve the
    // template function. Override this method to provide your own
    // custom rendering and template handling for all of Marionette.
    render: function(template, data) {
      if (!template) {
        throw new Marionette.Error({
          name: 'TemplateNotFoundError',
          message: 'Cannot render the template since its false, null or undefined.'
        });
      }
  
      var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
  
      return templateFunc(data);
    }
  };
  

  /* jshint maxlen: 114, nonew: false */
  // View
  // ----
  
  // The core view class that other Marionette views extend from.
  Marionette.View = Backbone.View.extend({
    isDestroyed: false,
    supportsRenderLifecycle: true,
    supportsDestroyLifecycle: true,
  
    constructor: function(options) {
      this.render = _.bind(this.render, this);
  
      options = Marionette._getValue(options, this);
  
      // this exposes view options to the view initializer
      // this is a backfill since backbone removed the assignment
      // of this.options
      // at some point however this may be removed
      this.options = _.extend({}, _.result(this, 'options'), options);
  
      this._behaviors = Marionette.Behaviors(this);
  
      Backbone.View.call(this, this.options);
  
      Marionette.MonitorDOMRefresh(this);
    },
  
    // Get the template for this view
    // instance. You can set a `template` attribute in the view
    // definition or pass a `template: "whatever"` parameter in
    // to the constructor options.
    getTemplate: function() {
      return this.getOption('template');
    },
  
    // Serialize a model by returning its attributes. Clones
    // the attributes to allow modification.
    serializeModel: function(model) {
      return model.toJSON.apply(model, _.rest(arguments));
    },
  
    // Mix in template helper methods. Looks for a
    // `templateHelpers` attribute, which can either be an
    // object literal, or a function that returns an object
    // literal. All methods and attributes from this object
    // are copies to the object passed in.
    mixinTemplateHelpers: function(target) {
      target = target || {};
      var templateHelpers = this.getOption('templateHelpers');
      templateHelpers = Marionette._getValue(templateHelpers, this);
      return _.extend(target, templateHelpers);
    },
  
    // normalize the keys of passed hash with the views `ui` selectors.
    // `{"@ui.foo": "bar"}`
    normalizeUIKeys: function(hash) {
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
    },
  
    // normalize the values of passed hash with the views `ui` selectors.
    // `{foo: "@ui.bar"}`
    normalizeUIValues: function(hash, properties) {
      var ui = _.result(this, 'ui');
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
    },
  
    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    configureTriggers: function() {
      if (!this.triggers) { return; }
  
      // Allow `triggers` to be configured as a function
      var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
  
      // Configure the triggers, prevent default
      // action and stop propagation of DOM events
      return _.reduce(triggers, function(events, value, key) {
        events[key] = this._buildViewTrigger(value);
        return events;
      }, {}, this);
    },
  
    // Overriding Backbone.View's delegateEvents to handle
    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
    delegateEvents: function(events) {
      this._delegateDOMEvents(events);
      this.bindEntityEvents(this.model, this.getOption('modelEvents'));
      this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
  
      _.each(this._behaviors, function(behavior) {
        behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
      }, this);
  
      return this;
    },
  
    // internal method to delegate DOM events and triggers
    _delegateDOMEvents: function(eventsArg) {
      var events = Marionette._getValue(eventsArg || this.events, this);
  
      // normalize ui keys
      events = this.normalizeUIKeys(events);
      if (_.isUndefined(eventsArg)) {this.events = events;}
  
      var combinedEvents = {};
  
      // look up if this view has behavior events
      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
      var triggers = this.configureTriggers();
      var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
  
      // behavior events will be overriden by view events and or triggers
      _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
  
      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
    },
  
    // Overriding Backbone.View's undelegateEvents to handle unbinding
    // the `triggers`, `modelEvents`, and `collectionEvents` config
    undelegateEvents: function() {
      Backbone.View.prototype.undelegateEvents.apply(this, arguments);
  
      this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
      this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
  
      _.each(this._behaviors, function(behavior) {
        behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
      }, this);
  
      return this;
    },
  
    // Internal helper method to verify whether the view hasn't been destroyed
    _ensureViewIsIntact: function() {
      if (this.isDestroyed) {
        throw new Marionette.Error({
          name: 'ViewDestroyedError',
          message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
        });
      }
    },
  
    // Default `destroy` implementation, for removing a view from the
    // DOM and unbinding it. Regions will call this method
    // for you. You can specify an `onDestroy` method in your view to
    // add custom code that is called after the view is destroyed.
    destroy: function() {
      if (this.isDestroyed) { return this; }
  
      var args = _.toArray(arguments);
  
      this.triggerMethod.apply(this, ['before:destroy'].concat(args));
  
      // mark as destroyed before doing the actual destroy, to
      // prevent infinite loops within "destroy" event handlers
      // that are trying to destroy other views
      this.isDestroyed = true;
      this.triggerMethod.apply(this, ['destroy'].concat(args));
  
      // unbind UI elements
      this.unbindUIElements();
  
      this.isRendered = false;
  
      // remove the view from the DOM
      this.remove();
  
      // Call destroy on each behavior after
      // destroying the view.
      // This unbinds event listeners
      // that behaviors have registered for.
      _.invoke(this._behaviors, 'destroy', args);
  
      return this;
    },
  
    bindUIElements: function() {
      this._bindUIElements();
      _.invoke(this._behaviors, this._bindUIElements);
    },
  
    // This method binds the elements specified in the "ui" hash inside the view's code with
    // the associated jQuery selectors.
    _bindUIElements: function() {
      if (!this.ui) { return; }
  
      // store the ui hash in _uiBindings so they can be reset later
      // and so re-rendering the view will be able to find the bindings
      if (!this._uiBindings) {
        this._uiBindings = this.ui;
      }
  
      // get the bindings result, as a function or otherwise
      var bindings = _.result(this, '_uiBindings');
  
      // empty the ui so we don't have anything to start with
      this.ui = {};
  
      // bind each of the selectors
      _.each(bindings, function(selector, key) {
        this.ui[key] = this.$(selector);
      }, this);
    },
  
    // This method unbinds the elements specified in the "ui" hash
    unbindUIElements: function() {
      this._unbindUIElements();
      _.invoke(this._behaviors, this._unbindUIElements);
    },
  
    _unbindUIElements: function() {
      if (!this.ui || !this._uiBindings) { return; }
  
      // delete all of the existing ui bindings
      _.each(this.ui, function($el, name) {
        delete this.ui[name];
      }, this);
  
      // reset the ui element to the original bindings configuration
      this.ui = this._uiBindings;
      delete this._uiBindings;
    },
  
    // Internal method to create an event handler for a given `triggerDef` like
    // 'click:foo'
    _buildViewTrigger: function(triggerDef) {
  
      var options = _.defaults({}, triggerDef, {
        preventDefault: true,
        stopPropagation: true
      });
  
      var eventName = _.isObject(triggerDef) ? options.event : triggerDef;
  
      return function(e) {
        if (e) {
          if (e.preventDefault && options.preventDefault) {
            e.preventDefault();
          }
  
          if (e.stopPropagation && options.stopPropagation) {
            e.stopPropagation();
          }
        }
  
        var args = {
          view: this,
          model: this.model,
          collection: this.collection
        };
  
        this.triggerMethod(eventName, args);
      };
    },
  
    setElement: function() {
      var ret = Backbone.View.prototype.setElement.apply(this, arguments);
  
      // proxy behavior $el to the view's $el.
      // This is needed because a view's $el proxy
      // is not set until after setElement is called.
      _.invoke(this._behaviors, 'proxyViewProperties', this);
  
      return ret;
    },
  
    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: function() {
      var ret = Marionette._triggerMethod(this, arguments);
  
      this._triggerEventOnBehaviors(arguments);
      this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));
  
      return ret;
    },
  
    _triggerEventOnBehaviors: function(args) {
      var triggerMethod = Marionette._triggerMethod;
      var behaviors = this._behaviors;
      // Use good ol' for as this is a very hot function
      for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
        triggerMethod(behaviors[i], args);
      }
    },
  
    _triggerEventOnParentLayout: function(eventName, args) {
      var layoutView = this._parentLayoutView();
      if (!layoutView) {
        return;
      }
  
      // invoke triggerMethod on parent view
      var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
      var prefixedEventName = eventPrefix + ':' + eventName;
      var callArgs = [this].concat(args);
  
      Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);
  
      // call the parent view's childEvents handler
      var childEvents = Marionette.getOption(layoutView, 'childEvents');
      var normalizedChildEvents = layoutView.normalizeMethods(childEvents);
  
      if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
        normalizedChildEvents[eventName].apply(layoutView, callArgs);
      }
    },
  
    // This method returns any views that are immediate
    // children of this view
    _getImmediateChildren: function() {
      return [];
    },
  
    // Returns an array of every nested view within this view
    _getNestedViews: function() {
      var children = this._getImmediateChildren();
  
      if (!children.length) { return children; }
  
      return _.reduce(children, function(memo, view) {
        if (!view._getNestedViews) { return memo; }
        return memo.concat(view._getNestedViews());
      }, children);
    },
  
    // Internal utility for building an ancestor
    // view tree list.
    _getAncestors: function() {
      var ancestors = [];
      var parent  = this._parent;
  
      while (parent) {
        ancestors.push(parent);
        parent = parent._parent;
      }
  
      return ancestors;
    },
  
    // Returns the containing parent view.
    _parentLayoutView: function() {
      var ancestors = this._getAncestors();
      return _.find(ancestors, function(parent) {
        return parent instanceof Marionette.LayoutView;
      });
    },
  
    // Imports the "normalizeMethods" to transform hashes of
    // events=>function references/names to a hash of events=>function references
    normalizeMethods: Marionette.normalizeMethods,
  
    // A handy way to merge passed-in options onto the instance
    mergeOptions: Marionette.mergeOptions,
  
    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,
  
    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,
  
    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });
  
  // Item View
  // ---------
  
  // A single item view implementation that contains code for rendering
  // with underscore.js templates, serializing the view's model or collection,
  // and calling several methods on extended views, such as `onRender`.
  Marionette.ItemView = Marionette.View.extend({
  
    // Setting up the inheritance chain which allows changes to
    // Marionette.View.prototype.constructor which allows overriding
    constructor: function() {
      Marionette.View.apply(this, arguments);
    },
  
    // Serialize the model or collection for the view. If a model is
    // found, the view's `serializeModel` is called. If a collection is found,
    // each model in the collection is serialized by calling
    // the view's `serializeCollection` and put into an `items` array in
    // the resulting data. If both are found, defaults to the model.
    // You can override the `serializeData` method in your own view definition,
    // to provide custom serialization for your view's data.
    serializeData: function() {
      if (!this.model && !this.collection) {
        return {};
      }
  
      var args = [this.model || this.collection];
      if (arguments.length) {
        args.push.apply(args, arguments);
      }
  
      if (this.model) {
        return this.serializeModel.apply(this, args);
      } else {
        return {
          items: this.serializeCollection.apply(this, args)
        };
      }
    },
  
    // Serialize a collection by serializing each of its models.
    serializeCollection: function(collection) {
      return collection.toJSON.apply(collection, _.rest(arguments));
    },
  
    // Render the view, defaulting to underscore.js templates.
    // You can override this in your view definition to provide
    // a very specific rendering for your view. In general, though,
    // you should override the `Marionette.Renderer` object to
    // change how Marionette renders views.
    render: function() {
      this._ensureViewIsIntact();
  
      this.triggerMethod('before:render', this);
  
      this._renderTemplate();
      this.isRendered = true;
      this.bindUIElements();
  
      this.triggerMethod('render', this);
  
      return this;
    },
  
    // Internal method to render the template with the serialized data
    // and template helpers via the `Marionette.Renderer` object.
    // Throws an `UndefinedTemplateError` error if the template is
    // any falsely value but literal `false`.
    _renderTemplate: function() {
      var template = this.getTemplate();
  
      // Allow template-less item views
      if (template === false) {
        return;
      }
  
      if (!template) {
        throw new Marionette.Error({
          name: 'UndefinedTemplateError',
          message: 'Cannot render the template since it is null or undefined.'
        });
      }
  
      // Add in entity data and template helpers
      var data = this.mixinTemplateHelpers(this.serializeData());
  
      // Render and add to el
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);
  
      return this;
    },
  
    // Attaches the content of a given view.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);
  
      return this;
    }
  });
  
  /* jshint maxstatements: 20, maxcomplexity: 7 */
  
  // Collection View
  // ---------------
  
  // A view that iterates over a Backbone.Collection
  // and renders an individual child view for each model.
  Marionette.CollectionView = Marionette.View.extend({
  
    // used as the prefix for child view events
    // that are forwarded through the collectionview
    childViewEventPrefix: 'childview',
  
    // flag for maintaining the sorted order of the collection
    sort: true,
  
    // constructor
    // option to pass `{sort: false}` to prevent the `CollectionView` from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    //
    // option to pass `{comparator: compFunction()}` to allow the `CollectionView`
    // to use a custom sort order for the collection.
    constructor: function(options) {
      this.once('render', this._initialEvents);
      this._initChildViewStorage();
  
      Marionette.View.apply(this, arguments);
  
      this.on({
        'before:show':   this._onBeforeShowCalled,
        'show':          this._onShowCalled,
        'before:attach': this._onBeforeAttachCalled,
        'attach':        this._onAttachCalled
      });
      this.initRenderBuffer();
    },
  
    // Instead of inserting elements one by one into the page,
    // it's much more performant to insert elements into a document
    // fragment and then insert that document fragment into the page
    initRenderBuffer: function() {
      this._bufferedChildren = [];
    },
  
    startBuffering: function() {
      this.initRenderBuffer();
      this.isBuffering = true;
    },
  
    endBuffering: function() {
      // Only trigger attach if already shown and attached, otherwise Region#show() handles this.
      var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
      var nestedViews;
  
      this.isBuffering = false;
  
      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
      }
      if (canTriggerAttach && this._triggerBeforeAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'before:attach');
      }
  
      this.attachBuffer(this, this._createBuffer());
  
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'show');
      }
      this.initRenderBuffer();
    },
  
    _triggerMethodMany: function(targets, source, eventName) {
      var args = _.drop(arguments, 3);
  
      _.each(targets, function(target) {
        Marionette.triggerMethodOn.apply(target, [target, eventName, target, source].concat(args));
      });
    },
  
    // Configured the initial events that the collection view
    // binds to.
    _initialEvents: function() {
      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this.render);
  
        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
        }
      }
    },
  
    // Handle a child added to the collection
    _onCollectionAdd: function(child, collection, opts) {
      // `index` is present when adding with `at` since BB 1.2; indexOf fallback for < 1.2
      var index = opts.at !== undefined && (opts.index || collection.indexOf(child));
  
      // When filtered or when there is no initial index, calculate index.
      if (this.getOption('filter') || index === false) {
        index = _.indexOf(this._filteredSortedModels(index), child);
      }
  
      if (this._shouldAddChild(child, index)) {
        this.destroyEmptyView();
        var ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
      }
    },
  
    // get the child view by model it holds, and remove it
    _onCollectionRemove: function(model) {
      var view = this.children.findByModel(model);
      this.removeChildView(view);
      this.checkEmpty();
    },
  
    _onBeforeShowCalled: function() {
      // Reset attach event flags at the top of the Region#show() event lifecycle; if the Region's
      // show() options permit onBeforeAttach/onAttach events, these flags will be set true again.
      this._triggerBeforeAttach = this._triggerAttach = false;
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'before:show', childView);
      });
    },
  
    _onShowCalled: function() {
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'show', childView);
      });
    },
  
    // If during Region#show() onBeforeAttach was fired, continue firing it for child views
    _onBeforeAttachCalled: function() {
      this._triggerBeforeAttach = true;
    },
  
    // If during Region#show() onAttach was fired, continue firing it for child views
    _onAttachCalled: function() {
      this._triggerAttach = true;
    },
  
    // Render children views. Override this method to
    // provide your own implementation of a render function for
    // the collection view.
    render: function() {
      this._ensureViewIsIntact();
      this.triggerMethod('before:render', this);
      this._renderChildren();
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },
  
    // Reorder DOM after sorting. When your element's rendering
    // do not use their index, you can pass reorderOnSort: true
    // to only reorder the DOM after a sort instead of rendering
    // all the collectionView
    reorder: function() {
      var children = this.children;
      var models = this._filteredSortedModels();
      var modelsChanged = _.find(models, function(model) {
        return !children.findByModel(model);
      });
  
      // If the models we're displaying have changed due to filtering
      // We need to add and/or remove child views
      // So render as normal
      if (modelsChanged) {
        this.render();
      } else {
        // get the DOM nodes in the same order as the models
        var els = _.map(models, function(model, index) {
          var view = children.findByModel(model);
          view._index = index;
          return view.el;
        });
  
        // since append moves elements that are already in the DOM,
        // appending the elements will effectively reorder them
        this.triggerMethod('before:reorder');
        this._appendReorderedChildren(els);
        this.triggerMethod('reorder');
      }
    },
  
    // Render view after sorting. Override this method to
    // change how the view renders after a `sort` on the collection.
    // An example of this would be to only `renderChildren` in a `CompositeView`
    // rather than the full view.
    resortView: function() {
      if (Marionette.getOption(this, 'reorderOnSort')) {
        this.reorder();
      } else {
        this.render();
      }
    },
  
    // Internal method. This checks for any changes in the order of the collection.
    // If the index of any view doesn't match, it will render.
    _sortViews: function() {
      var models = this._filteredSortedModels();
  
      // check for any changes in sort order of views
      var orderChanged = _.find(models, function(item, index) {
        var view = this.children.findByModel(item);
        return !view || view._index !== index;
      }, this);
  
      if (orderChanged) {
        this.resortView();
      }
    },
  
    // Internal reference to what index a `emptyView` is.
    _emptyViewIndex: -1,
  
    // Internal method. Separated so that CompositeView can append to the childViewContainer
    // if necessary
    _appendReorderedChildren: function(children) {
      this.$el.append(children);
    },
  
    // Internal method. Separated so that CompositeView can have
    // more control over events being triggered, around the rendering
    // process
    _renderChildren: function() {
      this.destroyEmptyView();
      this.destroyChildren({checkEmpty: false});
  
      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
      } else {
        this.triggerMethod('before:render:collection', this);
        this.startBuffering();
        this.showCollection();
        this.endBuffering();
        this.triggerMethod('render:collection', this);
  
        // If we have shown children and none have passed the filter, show the empty view
        if (this.children.isEmpty() && this.getOption('filter')) {
          this.showEmptyView();
        }
      }
    },
  
    // Internal method to loop through collection and show each child view.
    showCollection: function() {
      var ChildView;
  
      var models = this._filteredSortedModels();
  
      _.each(models, function(child, index) {
        ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
      }, this);
    },
  
    // Allow the collection to be sorted by a custom view comparator
    _filteredSortedModels: function(addedAt) {
      var viewComparator = this.getViewComparator();
      var models = this.collection.models;
      addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);
  
      if (viewComparator) {
        var addedModel;
        // Preserve `at` location, even for a sorted view
        if (addedAt) {
          addedModel = models[addedAt];
          models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
        }
        models = this._sortModelsBy(models, viewComparator);
        if (addedModel) {
          models.splice(addedAt, 0, addedModel);
        }
      }
  
      // Filter after sorting in case the filter uses the index
      if (this.getOption('filter')) {
        models = _.filter(models, function(model, index) {
          return this._shouldAddChild(model, index);
        }, this);
      }
  
      return models;
    },
  
    _sortModelsBy: function(models, comparator) {
      if (typeof comparator === 'string') {
        return _.sortBy(models, function(model) {
          return model.get(comparator);
        }, this);
      } else if (comparator.length === 1) {
        return _.sortBy(models, comparator, this);
      } else {
        return models.sort(_.bind(comparator, this));
      }
    },
  
    // Internal method to show an empty view in place of
    // a collection of child views, when the collection is empty
    showEmptyView: function() {
      var EmptyView = this.getEmptyView();
  
      if (EmptyView && !this._showingEmptyView) {
        this.triggerMethod('before:render:empty');
  
        this._showingEmptyView = true;
        var model = new Backbone.Model();
        this.addEmptyView(model, EmptyView);
  
        this.triggerMethod('render:empty');
      }
    },
  
    // Internal method to destroy an existing emptyView instance
    // if one exists. Called when a collection view has been
    // rendered empty, and then a child is added to the collection.
    destroyEmptyView: function() {
      if (this._showingEmptyView) {
        this.triggerMethod('before:remove:empty');
  
        this.destroyChildren();
        delete this._showingEmptyView;
  
        this.triggerMethod('remove:empty');
      }
    },
  
    // Retrieve the empty view class
    getEmptyView: function() {
      return this.getOption('emptyView');
    },
  
    // Render and show the emptyView. Similar to addChild method
    // but "add:child" events are not fired, and the event from
    // emptyView are not forwarded
    addEmptyView: function(child, EmptyView) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;
  
      // get the emptyViewOptions, falling back to childViewOptions
      var emptyViewOptions = this.getOption('emptyViewOptions') ||
                            this.getOption('childViewOptions');
  
      if (_.isFunction(emptyViewOptions)) {
        emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
      }
  
      // build the empty view
      var view = this.buildChildView(child, EmptyView, emptyViewOptions);
  
      view._parent = this;
  
      // Proxy emptyView events
      this.proxyChildEvents(view);
  
      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown) {
          Marionette.triggerMethodOn(view, 'before:show', view);
        }
  
        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
        }
      }, this);
  
      // Store the `emptyView` like a `childView` so we can properly remove and/or close it later
      this.children.add(view);
      this.renderChildView(view, this._emptyViewIndex);
  
      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      // call the 'show' method if the collection view has already been shown
      if (this._isShown) {
        Marionette.triggerMethodOn(view, 'show', view);
      }
    },
  
    // Retrieve the `childView` class, either from `this.options.childView`
    // or from the `childView` in the object definition. The "options"
    // takes precedence.
    // This method receives the model that will be passed to the instance
    // created from this `childView`. Overriding methods may use the child
    // to determine what `childView` class to return.
    getChildView: function(child) {
      var childView = this.getOption('childView');
  
      if (!childView) {
        throw new Marionette.Error({
          name: 'NoChildViewError',
          message: 'A "childView" must be specified'
        });
      }
  
      return childView;
    },
  
    // Render the child's view and add it to the
    // HTML for the collection view at a given index.
    // This will also update the indices of later views in the collection
    // in order to keep the children in sync with the collection.
    addChild: function(child, ChildView, index) {
      var childViewOptions = this.getOption('childViewOptions');
      childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);
  
      var view = this.buildChildView(child, ChildView, childViewOptions);
  
      // increment indices of views after this one
      this._updateIndices(view, true, index);
  
      this.triggerMethod('before:add:child', view);
      this._addChildView(view, index);
      this.triggerMethod('add:child', view);
  
      view._parent = this;
  
      return view;
    },
  
    // Internal method. This decrements or increments the indices of views after the
    // added/removed view to keep in sync with the collection.
    _updateIndices: function(view, increment, index) {
      if (!this.getOption('sort')) {
        return;
      }
  
      if (increment) {
        // assign the index to the view
        view._index = index;
      }
  
      // update the indexes of views after this one
      this.children.each(function(laterView) {
        if (laterView._index >= view._index) {
          laterView._index += increment ? 1 : -1;
        }
      });
    },
  
    // Internal Method. Add the view to children and render it at
    // the given index.
    _addChildView: function(view, index) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;
  
      // set up the child view event forwarding
      this.proxyChildEvents(view);
  
      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown && !this.isBuffering) {
          Marionette.triggerMethodOn(view, 'before:show', view);
        }
  
        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
        }
      }, this);
  
      // Store the child view itself so we can properly remove and/or destroy it later
      this.children.add(view);
      this.renderChildView(view, index);
  
      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      // Trigger `show`
      if (this._isShown && !this.isBuffering) {
        Marionette.triggerMethodOn(view, 'show', view);
      }
    },
  
    // render the child view
    renderChildView: function(view, index) {
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'before:render', view);
      }
      view.render();
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'render', view);
      }
      this.attachHtml(this, view, index);
      return view;
    },
  
    // Build a `childView` for a model in the collection.
    buildChildView: function(child, ChildViewClass, childViewOptions) {
      var options = _.extend({model: child}, childViewOptions);
      var childView = new ChildViewClass(options);
      Marionette.MonitorDOMRefresh(childView);
      return childView;
    },
  
    // Remove the child view and destroy it.
    // This function also updates the indices of
    // later views in the collection in order to keep
    // the children in sync with the collection.
    removeChildView: function(view) {
      if (!view) { return view; }
  
      this.triggerMethod('before:remove:child', view);
  
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'before:destroy', view);
      }
      // call 'destroy' or 'remove', depending on which is found
      if (view.destroy) {
        view.destroy();
      } else {
        view.remove();
      }
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'destroy', view);
      }
  
      delete view._parent;
      this.stopListening(view);
      this.children.remove(view);
      this.triggerMethod('remove:child', view);
  
      // decrement the index of views after this one
      this._updateIndices(view, false);
  
      return view;
    },
  
    // check if the collection is empty
    isEmpty: function() {
      return !this.collection || this.collection.length === 0;
    },
  
    // If empty, show the empty view
    checkEmpty: function() {
      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
      }
    },
  
    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(collectionView, buffer) {
      collectionView.$el.append(buffer);
    },
  
    // Create a fragment buffer from the currently buffered children
    _createBuffer: function() {
      var elBuffer = document.createDocumentFragment();
      _.each(this._bufferedChildren, function(b) {
        elBuffer.appendChild(b.el);
      });
      return elBuffer;
    },
  
    // Append the HTML to the collection's `el`.
    // Override this method to do something other
    // than `.append`.
    attachHtml: function(collectionView, childView, index) {
      if (collectionView.isBuffering) {
        // buffering happens on reset events and initial renders
        // in order to reduce the number of inserts into the
        // document, which are expensive.
        collectionView._bufferedChildren.splice(index, 0, childView);
      } else {
        // If we've already rendered the main collection, append
        // the new child into the correct order if we need to. Otherwise
        // append to the end.
        if (!collectionView._insertBefore(childView, index)) {
          collectionView._insertAfter(childView);
        }
      }
    },
  
    // Internal method. Check whether we need to insert the view into
    // the correct position.
    _insertBefore: function(childView, index) {
      var currentView;
      var findPosition = this.getOption('sort') && (index < this.children.length - 1);
      if (findPosition) {
        // Find the view after this one
        currentView = this.children.find(function(view) {
          return view._index === index + 1;
        });
      }
  
      if (currentView) {
        currentView.$el.before(childView.el);
        return true;
      }
  
      return false;
    },
  
    // Internal method. Append a view to the end of the $el
    _insertAfter: function(childView) {
      this.$el.append(childView.el);
    },
  
    // Internal method to set up the `children` object for
    // storing all of the child views
    _initChildViewStorage: function() {
      this.children = new Backbone.ChildViewContainer();
    },
  
    // Handle cleanup and other destroying needs for the collection of views
    destroy: function() {
      if (this.isDestroyed) { return this; }
  
      this.triggerMethod('before:destroy:collection');
      this.destroyChildren({checkEmpty: false});
      this.triggerMethod('destroy:collection');
  
      return Marionette.View.prototype.destroy.apply(this, arguments);
    },
  
    // Destroy the child views that this collection view
    // is holding on to, if any
    destroyChildren: function(options) {
      var destroyOptions = options || {};
      var shouldCheckEmpty = true;
      var childViews = this.children.map(_.identity);
  
      if (!_.isUndefined(destroyOptions.checkEmpty)) {
        shouldCheckEmpty = destroyOptions.checkEmpty;
      }
  
      this.children.each(this.removeChildView, this);
  
      if (shouldCheckEmpty) {
        this.checkEmpty();
      }
      return childViews;
    },
  
    // Return true if the given child should be shown
    // Return false otherwise
    // The filter will be passed (child, index, collection)
    // Where
    //  'child' is the given model
    //  'index' is the index of that model in the collection
    //  'collection' is the collection referenced by this CollectionView
    _shouldAddChild: function(child, index) {
      var filter = this.getOption('filter');
      return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
    },
  
    // Set up the child view event forwarding. Uses a "childview:"
    // prefix in front of all forwarded events.
    proxyChildEvents: function(view) {
      var prefix = this.getOption('childViewEventPrefix');
  
      // Forward all child view events through the parent,
      // prepending "childview:" to the event name
      this.listenTo(view, 'all', function() {
        var args = _.toArray(arguments);
        var rootEvent = args[0];
        var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
  
        args[0] = prefix + ':' + rootEvent;
        args.splice(1, 0, view);
  
        // call collectionView childEvent if defined
        if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
          childEvents[rootEvent].apply(this, args.slice(1));
        }
  
        this.triggerMethod.apply(this, args);
      });
    },
  
    _getImmediateChildren: function() {
      return _.values(this.children._views);
    },
  
    _getViewAndNested: function(view) {
      // This will not fail on Backbone.View which does not have #_getNestedViews.
      return [view].concat(_.result(view, '_getNestedViews') || []);
    },
  
    getViewComparator: function() {
      return this.getOption('viewComparator');
    }
  });
  
  /* jshint maxstatements: 17, maxlen: 117 */
  
  // Composite View
  // --------------
  
  // Used for rendering a branch-leaf, hierarchical structure.
  // Extends directly from CollectionView and also renders an
  // a child view as `modelView`, for the top leaf
  Marionette.CompositeView = Marionette.CollectionView.extend({
  
    // Setting up the inheritance chain which allows changes to
    // Marionette.CollectionView.prototype.constructor which allows overriding
    // option to pass '{sort: false}' to prevent the CompositeView from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    constructor: function() {
      Marionette.CollectionView.apply(this, arguments);
    },
  
    // Configured the initial events that the composite view
    // binds to. Override this method to prevent the initial
    // events, or to add your own initial events.
    _initialEvents: function() {
  
      // Bind only after composite view is rendered to avoid adding child views
      // to nonexistent childViewContainer
  
      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this._renderChildren);
  
        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
        }
      }
    },
  
    // Retrieve the `childView` to be used when rendering each of
    // the items in the collection. The default is to return
    // `this.childView` or Marionette.CompositeView if no `childView`
    // has been defined
    getChildView: function(child) {
      var childView = this.getOption('childView') || this.constructor;
  
      return childView;
    },
  
    // Serialize the model for the view.
    // You can override the `serializeData` method in your own view
    // definition, to provide custom serialization for your view's data.
    serializeData: function() {
      var data = {};
  
      if (this.model) {
        data = _.partial(this.serializeModel, this.model).apply(this, arguments);
      }
  
      return data;
    },
  
    // Renders the model and the collection.
    render: function() {
      this._ensureViewIsIntact();
      this._isRendering = true;
      this.resetChildViewContainer();
  
      this.triggerMethod('before:render', this);
  
      this._renderTemplate();
      this._renderChildren();
  
      this._isRendering = false;
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },
  
    _renderChildren: function() {
      if (this.isRendered || this._isRendering) {
        Marionette.CollectionView.prototype._renderChildren.call(this);
      }
    },
  
    // Render the root template that the children
    // views are appended to
    _renderTemplate: function() {
      var data = {};
      data = this.serializeData();
      data = this.mixinTemplateHelpers(data);
  
      this.triggerMethod('before:render:template');
  
      var template = this.getTemplate();
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);
  
      // the ui bindings is done here and not at the end of render since they
      // will not be available until after the model is rendered, but should be
      // available before the collection is rendered.
      this.bindUIElements();
      this.triggerMethod('render:template');
    },
  
    // Attaches the content of the root.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);
  
      return this;
    },
  
    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(compositeView, buffer) {
      var $container = this.getChildViewContainer(compositeView);
      $container.append(buffer);
    },
  
    // Internal method. Append a view to the end of the $el.
    // Overidden from CollectionView to ensure view is appended to
    // childViewContainer
    _insertAfter: function(childView) {
      var $container = this.getChildViewContainer(this, childView);
      $container.append(childView.el);
    },
  
    // Internal method. Append reordered childView'.
    // Overidden from CollectionView to ensure reordered views
    // are appended to childViewContainer
    _appendReorderedChildren: function(children) {
      var $container = this.getChildViewContainer(this);
      $container.append(children);
    },
  
    // Internal method to ensure an `$childViewContainer` exists, for the
    // `attachHtml` method to use.
    getChildViewContainer: function(containerView, childView) {
      if (!!containerView.$childViewContainer) {
        return containerView.$childViewContainer;
      }
  
      var container;
      var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
      if (childViewContainer) {
  
        var selector = Marionette._getValue(childViewContainer, containerView);
  
        if (selector.charAt(0) === '@' && containerView.ui) {
          container = containerView.ui[selector.substr(4)];
        } else {
          container = containerView.$(selector);
        }
  
        if (container.length <= 0) {
          throw new Marionette.Error({
            name: 'ChildViewContainerMissingError',
            message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
          });
        }
  
      } else {
        container = containerView.$el;
      }
  
      containerView.$childViewContainer = container;
      return container;
    },
  
    // Internal method to reset the `$childViewContainer` on render
    resetChildViewContainer: function() {
      if (this.$childViewContainer) {
        this.$childViewContainer = undefined;
      }
    }
  });
  
  // Layout View
  // -----------
  
  // Used for managing application layoutViews, nested layoutViews and
  // multiple regions within an application or sub-application.
  //
  // A specialized view class that renders an area of HTML and then
  // attaches `Region` instances to the specified `regions`.
  // Used for composite view management and sub-application areas.
  Marionette.LayoutView = Marionette.ItemView.extend({
    regionClass: Marionette.Region,
  
    options: {
      destroyImmediate: false
    },
  
    // used as the prefix for child view events
    // that are forwarded through the layoutview
    childViewEventPrefix: 'childview',
  
    // Ensure the regions are available when the `initialize` method
    // is called.
    constructor: function(options) {
      options = options || {};
  
      this._firstRender = true;
      this._initializeRegions(options);
  
      Marionette.ItemView.call(this, options);
    },
  
    // LayoutView's render will use the existing region objects the
    // first time it is called. Subsequent calls will destroy the
    // views that the regions are showing and then reset the `el`
    // for the regions to the newly rendered DOM elements.
    render: function() {
      this._ensureViewIsIntact();
  
      if (this._firstRender) {
        // if this is the first render, don't do anything to
        // reset the regions
        this._firstRender = false;
      } else {
        // If this is not the first render call, then we need to
        // re-initialize the `el` for each region
        this._reInitializeRegions();
      }
  
      return Marionette.ItemView.prototype.render.apply(this, arguments);
    },
  
    // Handle destroying regions, and then destroy the view itself.
    destroy: function() {
      if (this.isDestroyed) { return this; }
      // #2134: remove parent element before destroying the child views, so
      // removing the child views doesn't retrigger repaints
      if (this.getOption('destroyImmediate') === true) {
        this.$el.remove();
      }
      this.regionManager.destroy();
      return Marionette.ItemView.prototype.destroy.apply(this, arguments);
    },
  
    showChildView: function(regionName, view) {
      return this.getRegion(regionName).show(view);
    },
  
    getChildView: function(regionName) {
      return this.getRegion(regionName).currentView;
    },
  
    // Add a single region, by name, to the layoutView
    addRegion: function(name, definition) {
      var regions = {};
      regions[name] = definition;
      return this._buildRegions(regions)[name];
    },
  
    // Add multiple regions as a {name: definition, name2: def2} object literal
    addRegions: function(regions) {
      this.regions = _.extend({}, this.regions, regions);
      return this._buildRegions(regions);
    },
  
    // Remove a single region from the LayoutView, by name
    removeRegion: function(name) {
      delete this.regions[name];
      return this.regionManager.removeRegion(name);
    },
  
    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this.regionManager.get(region);
    },
  
    // Get all regions
    getRegions: function() {
      return this.regionManager.getRegions();
    },
  
    // internal method to build regions
    _buildRegions: function(regions) {
      var defaults = {
        regionClass: this.getOption('regionClass'),
        parentEl: _.partial(_.result, this, 'el')
      };
  
      return this.regionManager.addRegions(regions, defaults);
    },
  
    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on this layoutView.
    _initializeRegions: function(options) {
      var regions;
      this._initRegionManager();
  
      regions = Marionette._getValue(this.regions, this, [options]) || {};
  
      // Enable users to define `regions` as instance options.
      var regionOptions = this.getOption.call(options, 'regions');
  
      // enable region options to be a function
      regionOptions = Marionette._getValue(regionOptions, this, [options]);
  
      _.extend(regions, regionOptions);
  
      // Normalize region selectors hash to allow
      // a user to use the @ui. syntax.
      regions = this.normalizeUIValues(regions, ['selector', 'el']);
  
      this.addRegions(regions);
    },
  
    // Internal method to re-initialize all of the regions by updating the `el` that
    // they point to
    _reInitializeRegions: function() {
      this.regionManager.invoke('reset');
    },
  
    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
    },
  
    // Internal method to initialize the region manager
    // and all regions in it
    _initRegionManager: function() {
      this.regionManager = this.getRegionManager();
      this.regionManager._parent = this;
  
      this.listenTo(this.regionManager, 'before:add:region', function(name) {
        this.triggerMethod('before:add:region', name);
      });
  
      this.listenTo(this.regionManager, 'add:region', function(name, region) {
        this[name] = region;
        this.triggerMethod('add:region', name, region);
      });
  
      this.listenTo(this.regionManager, 'before:remove:region', function(name) {
        this.triggerMethod('before:remove:region', name);
      });
  
      this.listenTo(this.regionManager, 'remove:region', function(name, region) {
        delete this[name];
        this.triggerMethod('remove:region', name, region);
      });
    },
  
    _getImmediateChildren: function() {
      return _.chain(this.regionManager.getRegions())
        .pluck('currentView')
        .compact()
        .value();
    }
  });
  

  // Behavior
  // --------
  
  // A Behavior is an isolated set of DOM /
  // user interactions that can be mixed into any View.
  // Behaviors allow you to blackbox View specific interactions
  // into portable logical chunks, keeping your views simple and your code DRY.
  
  Marionette.Behavior = Marionette.Object.extend({
    constructor: function(options, view) {
      // Setup reference to the view.
      // this comes in handle when a behavior
      // wants to directly talk up the chain
      // to the view.
      this.view = view;
      this.defaults = _.result(this, 'defaults') || {};
      this.options  = _.extend({}, this.defaults, options);
      // Construct an internal UI hash using
      // the views UI hash and then the behaviors UI hash.
      // This allows the user to use UI hash elements
      // defined in the parent view as well as those
      // defined in the given behavior.
      this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));
  
      Marionette.Object.apply(this, arguments);
    },
  
    // proxy behavior $ method to the view
    // this is useful for doing jquery DOM lookups
    // scoped to behaviors view.
    $: function() {
      return this.view.$.apply(this.view, arguments);
    },
  
    // Stops the behavior from listening to events.
    // Overrides Object#destroy to prevent additional events from being triggered.
    destroy: function() {
      this.stopListening();
  
      return this;
    },
  
    proxyViewProperties: function(view) {
      this.$el = view.$el;
      this.el = view.el;
    }
  });
  
  /* jshint maxlen: 143 */
  // Behaviors
  // ---------
  
  // Behaviors is a utility class that takes care of
  // gluing your behavior instances to their given View.
  // The most important part of this class is that you
  // **MUST** override the class level behaviorsLookup
  // method for things to work properly.
  
  Marionette.Behaviors = (function(Marionette, _) {
    // Borrow event splitter from Backbone
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
  
    function Behaviors(view, behaviors) {
  
      if (!_.isObject(view.behaviors)) {
        return {};
      }
  
      // Behaviors defined on a view can be a flat object literal
      // or it can be a function that returns an object.
      behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));
  
      // Wraps several of the view's methods
      // calling the methods first on each behavior
      // and then eventually calling the method on the view.
      Behaviors.wrap(view, behaviors, _.keys(methods));
      return behaviors;
    }
  
    var methods = {
      behaviorTriggers: function(behaviorTriggers, behaviors) {
        var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
        return triggerBuilder.buildBehaviorTriggers();
      },
  
      behaviorEvents: function(behaviorEvents, behaviors) {
        var _behaviorsEvents = {};
  
        _.each(behaviors, function(b, i) {
          var _events = {};
          var behaviorEvents = _.clone(_.result(b, 'events')) || {};
  
          // Normalize behavior events hash to allow
          // a user to use the @ui. syntax.
          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));
  
          var j = 0;
          _.each(behaviorEvents, function(behaviour, key) {
            var match     = key.match(delegateEventSplitter);
  
            // Set event name to be namespaced using the view cid,
            // the behavior index, and the behavior event index
            // to generate a non colliding event namespace
            // http://api.jquery.com/event.namespace/
            var eventName = match[1] + '.' + [this.cid, i, j++, ' '].join('');
            var selector  = match[2];
  
            var eventKey  = eventName + selector;
            var handler   = _.isFunction(behaviour) ? behaviour : b[behaviour];
  
            _events[eventKey] = _.bind(handler, b);
          }, this);
  
          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
        }, this);
  
        return _behaviorsEvents;
      }
    };
  
    _.extend(Behaviors, {
  
      // Placeholder method to be extended by the user.
      // The method should define the object that stores the behaviors.
      // i.e.
      //
      // ```js
      // Marionette.Behaviors.behaviorsLookup: function() {
      //   return App.Behaviors
      // }
      // ```
      behaviorsLookup: function() {
        throw new Marionette.Error({
          message: 'You must define where your behaviors are stored.',
          url: 'marionette.behaviors.html#behaviorslookup'
        });
      },
  
      // Takes care of getting the behavior class
      // given options and a key.
      // If a user passes in options.behaviorClass
      // default to using that. Otherwise delegate
      // the lookup to the users `behaviorsLookup` implementation.
      getBehaviorClass: function(options, key) {
        if (options.behaviorClass) {
          return options.behaviorClass;
        }
  
        // Get behavior class can be either a flat object or a method
        return Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key];
      },
  
      // Iterate over the behaviors object, for each behavior
      // instantiate it and get its grouped behaviors.
      parseBehaviors: function(view, behaviors) {
        return _.chain(behaviors).map(function(options, key) {
          var BehaviorClass = Behaviors.getBehaviorClass(options, key);
  
          var behavior = new BehaviorClass(options, view);
          var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));
  
          return [behavior].concat(nestedBehaviors);
        }).flatten().value();
      },
  
      // Wrap view internal methods so that they delegate to behaviors. For example,
      // `onDestroy` should trigger destroy on all of the behaviors and then destroy itself.
      // i.e.
      //
      // `view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);`
      wrap: function(view, behaviors, methodNames) {
        _.each(methodNames, function(methodName) {
          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
        });
      }
    });
  
    // Class to build handlers for `triggers` on behaviors
    // for views
    function BehaviorTriggersBuilder(view, behaviors) {
      this._view      = view;
      this._behaviors = behaviors;
      this._triggers  = {};
    }
  
    _.extend(BehaviorTriggersBuilder.prototype, {
      // Main method to build the triggers hash with event keys and handlers
      buildBehaviorTriggers: function() {
        _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
        return this._triggers;
      },
  
      // Internal method to build all trigger handlers for a given behavior
      _buildTriggerHandlersForBehavior: function(behavior, i) {
        var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
  
        triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));
  
        _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
      },
  
      // Internal method to create and assign the trigger handler for a given
      // behavior
      _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
        // Unique identifier for the `this._triggers` hash
        var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
          return triggerName + '.' + 'behaviortriggers' + i;
        });
  
        this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
      }
    });
  
    function getBehaviorsUI(behavior) {
      return behavior._uiBindings || behavior.ui;
    }
  
    return Behaviors;
  
  })(Marionette, _);
  

  // App Router
  // ----------
  
  // Reduce the boilerplate code of handling route events
  // and then calling a single method on another object.
  // Have your routers configured to call the method on
  // your object, directly.
  //
  // Configure an AppRouter with `appRoutes`.
  //
  // App routers can only take one `controller` object.
  // It is recommended that you divide your controller
  // objects in to smaller pieces of related functionality
  // and have multiple routers / controllers, instead of
  // just one giant router and controller.
  //
  // You can also add standard routes to an AppRouter.
  
  Marionette.AppRouter = Backbone.Router.extend({
  
    constructor: function(options) {
      this.options = options || {};
  
      Backbone.Router.apply(this, arguments);
  
      var appRoutes = this.getOption('appRoutes');
      var controller = this._getController();
      this.processAppRoutes(controller, appRoutes);
      this.on('route', this._processOnRoute, this);
    },
  
    // Similar to route method on a Backbone Router but
    // method is called on the controller
    appRoute: function(route, methodName) {
      var controller = this._getController();
      this._addAppRoute(controller, route, methodName);
    },
  
    // process the route event and trigger the onRoute
    // method call, if it exists
    _processOnRoute: function(routeName, routeArgs) {
      // make sure an onRoute before trying to call it
      if (_.isFunction(this.onRoute)) {
        // find the path that matches the current route
        var routePath = _.invert(this.getOption('appRoutes'))[routeName];
        this.onRoute(routeName, routePath, routeArgs);
      }
    },
  
    // Internal method to process the `appRoutes` for the
    // router, and turn them in to routes that trigger the
    // specified method on the specified `controller`.
    processAppRoutes: function(controller, appRoutes) {
      if (!appRoutes) { return; }
  
      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
  
      _.each(routeNames, function(route) {
        this._addAppRoute(controller, route, appRoutes[route]);
      }, this);
    },
  
    _getController: function() {
      return this.getOption('controller');
    },
  
    _addAppRoute: function(controller, route, methodName) {
      var method = controller[methodName];
  
      if (!method) {
        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
      }
  
      this.route(route, methodName, _.bind(method, controller));
    },
  
    mergeOptions: Marionette.mergeOptions,
  
    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,
  
    triggerMethod: Marionette.triggerMethod,
  
    bindEntityEvents: Marionette.proxyBindEntityEvents,
  
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });
  
  // Application
  // -----------
  
  // Contain and manage the composite application as a whole.
  // Stores and starts up `Region` objects, includes an
  // event aggregator as `app.vent`
  Marionette.Application = Marionette.Object.extend({
    constructor: function(options) {
      this._initializeRegions(options);
      this._initCallbacks = new Marionette.Callbacks();
      this.submodules = {};
      _.extend(this, options);
      this._initChannel();
      Marionette.Object.apply(this, arguments);
    },
  
    // Command execution, facilitated by Backbone.Wreqr.Commands
    execute: function() {
      this.commands.execute.apply(this.commands, arguments);
    },
  
    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
    request: function() {
      return this.reqres.request.apply(this.reqres, arguments);
    },
  
    // Add an initializer that is either run at when the `start`
    // method is called, or run immediately if added after `start`
    // has already been called.
    addInitializer: function(initializer) {
      this._initCallbacks.add(initializer);
    },
  
    // kick off all of the application's processes.
    // initializes all of the regions that have been added
    // to the app, and runs all of the initializer functions
    start: function(options) {
      this.triggerMethod('before:start', options);
      this._initCallbacks.run(options, this);
      this.triggerMethod('start', options);
    },
  
    // Add regions to your app.
    // Accepts a hash of named strings or Region objects
    // addRegions({something: "#someRegion"})
    // addRegions({something: Region.extend({el: "#someRegion"}) });
    addRegions: function(regions) {
      return this._regionManager.addRegions(regions);
    },
  
    // Empty all regions in the app, without removing them
    emptyRegions: function() {
      return this._regionManager.emptyRegions();
    },
  
    // Removes a region from your app, by name
    // Accepts the regions name
    // removeRegion('myRegion')
    removeRegion: function(region) {
      return this._regionManager.removeRegion(region);
    },
  
    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this._regionManager.get(region);
    },
  
    // Get all the regions from the region manager
    getRegions: function() {
      return this._regionManager.getRegions();
    },
  
    // Create a module, attached to the application
    module: function(moduleNames, moduleDefinition) {
  
      // Overwrite the module class if the user specifies one
      var ModuleClass = Marionette.Module.getClass(moduleDefinition);
  
      var args = _.toArray(arguments);
      args.unshift(this);
  
      // see the Marionette.Module object for more information
      return ModuleClass.create.apply(ModuleClass, args);
    },
  
    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business-specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
    },
  
    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on the application instance
    _initializeRegions: function(options) {
      var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
  
      this._initRegionManager();
  
      // Enable users to define `regions` in instance options.
      var optionRegions = Marionette.getOption(options, 'regions');
  
      // Enable region options to be a function
      if (_.isFunction(optionRegions)) {
        optionRegions = optionRegions.call(this, options);
      }
  
      // Overwrite current regions with those passed in options
      _.extend(regions, optionRegions);
  
      this.addRegions(regions);
  
      return this;
    },
  
    // Internal method to set up the region manager
    _initRegionManager: function() {
      this._regionManager = this.getRegionManager();
      this._regionManager._parent = this;
  
      this.listenTo(this._regionManager, 'before:add:region', function() {
        Marionette._triggerMethod(this, 'before:add:region', arguments);
      });
  
      this.listenTo(this._regionManager, 'add:region', function(name, region) {
        this[name] = region;
        Marionette._triggerMethod(this, 'add:region', arguments);
      });
  
      this.listenTo(this._regionManager, 'before:remove:region', function() {
        Marionette._triggerMethod(this, 'before:remove:region', arguments);
      });
  
      this.listenTo(this._regionManager, 'remove:region', function(name) {
        delete this[name];
        Marionette._triggerMethod(this, 'remove:region', arguments);
      });
    },
  
    // Internal method to setup the Wreqr.radio channel
    _initChannel: function() {
      this.channelName = _.result(this, 'channelName') || 'global';
      this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
      this.vent = _.result(this, 'vent') || this.channel.vent;
      this.commands = _.result(this, 'commands') || this.channel.commands;
      this.reqres = _.result(this, 'reqres') || this.channel.reqres;
    }
  });
  
  /* jshint maxparams: 9 */
  
  // Module
  // ------
  
  // A simple module system, used to create privacy and encapsulation in
  // Marionette applications
  Marionette.Module = function(moduleName, app, options) {
    this.moduleName = moduleName;
    this.options = _.extend({}, this.options, options);
    // Allow for a user to overide the initialize
    // for a given module instance.
    this.initialize = options.initialize || this.initialize;
  
    // Set up an internal store for sub-modules.
    this.submodules = {};
  
    this._setupInitializersAndFinalizers();
  
    // Set an internal reference to the app
    // within a module.
    this.app = app;
  
    if (_.isFunction(this.initialize)) {
      this.initialize(moduleName, app, this.options);
    }
  };
  
  Marionette.Module.extend = Marionette.extend;
  
  // Extend the Module prototype with events / listenTo, so that the module
  // can be used as an event aggregator or pub/sub.
  _.extend(Marionette.Module.prototype, Backbone.Events, {
  
    // By default modules start with their parents.
    startWithParent: true,
  
    // Initialize is an empty function by default. Override it with your own
    // initialization logic when extending Marionette.Module.
    initialize: function() {},
  
    // Initializer for a specific module. Initializers are run when the
    // module's `start` method is called.
    addInitializer: function(callback) {
      this._initializerCallbacks.add(callback);
    },
  
    // Finalizers are run when a module is stopped. They are used to teardown
    // and finalize any variables, references, events and other code that the
    // module had set up.
    addFinalizer: function(callback) {
      this._finalizerCallbacks.add(callback);
    },
  
    // Start the module, and run all of its initializers
    start: function(options) {
      // Prevent re-starting a module that is already started
      if (this._isInitialized) { return; }
  
      // start the sub-modules (depth-first hierarchy)
      _.each(this.submodules, function(mod) {
        // check to see if we should start the sub-module with this parent
        if (mod.startWithParent) {
          mod.start(options);
        }
      });
  
      // run the callbacks to "start" the current module
      this.triggerMethod('before:start', options);
  
      this._initializerCallbacks.run(options, this);
      this._isInitialized = true;
  
      this.triggerMethod('start', options);
    },
  
    // Stop this module by running its finalizers and then stop all of
    // the sub-modules for this module
    stop: function() {
      // if we are not initialized, don't bother finalizing
      if (!this._isInitialized) { return; }
      this._isInitialized = false;
  
      this.triggerMethod('before:stop');
  
      // stop the sub-modules; depth-first, to make sure the
      // sub-modules are stopped / finalized before parents
      _.invoke(this.submodules, 'stop');
  
      // run the finalizers
      this._finalizerCallbacks.run(undefined, this);
  
      // reset the initializers and finalizers
      this._initializerCallbacks.reset();
      this._finalizerCallbacks.reset();
  
      this.triggerMethod('stop');
    },
  
    // Configure the module with a definition function and any custom args
    // that are to be passed in to the definition function
    addDefinition: function(moduleDefinition, customArgs) {
      this._runModuleDefinition(moduleDefinition, customArgs);
    },
  
    // Internal method: run the module definition function with the correct
    // arguments
    _runModuleDefinition: function(definition, customArgs) {
      // If there is no definition short circut the method.
      if (!definition) { return; }
  
      // build the correct list of arguments for the module definition
      var args = _.flatten([
        this,
        this.app,
        Backbone,
        Marionette,
        Backbone.$, _,
        customArgs
      ]);
  
      definition.apply(this, args);
    },
  
    // Internal method: set up new copies of initializers and finalizers.
    // Calling this method will wipe out all existing initializers and
    // finalizers.
    _setupInitializersAndFinalizers: function() {
      this._initializerCallbacks = new Marionette.Callbacks();
      this._finalizerCallbacks = new Marionette.Callbacks();
    },
  
    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod
  });
  
  // Class methods to create modules
  _.extend(Marionette.Module, {
  
    // Create a module, hanging off the app parameter as the parent object.
    create: function(app, moduleNames, moduleDefinition) {
      var module = app;
  
      // get the custom args passed in after the module definition and
      // get rid of the module name and definition function
      var customArgs = _.drop(arguments, 3);
  
      // Split the module names and get the number of submodules.
      // i.e. an example module name of `Doge.Wow.Amaze` would
      // then have the potential for 3 module definitions.
      moduleNames = moduleNames.split('.');
      var length = moduleNames.length;
  
      // store the module definition for the last module in the chain
      var moduleDefinitions = [];
      moduleDefinitions[length - 1] = moduleDefinition;
  
      // Loop through all the parts of the module definition
      _.each(moduleNames, function(moduleName, i) {
        var parentModule = module;
        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
      }, this);
  
      // Return the last module in the definition chain
      return module;
    },
  
    _getModule: function(parentModule, moduleName, app, def, args) {
      var options = _.extend({}, def);
      var ModuleClass = this.getClass(def);
  
      // Get an existing module of this name if we have one
      var module = parentModule[moduleName];
  
      if (!module) {
        // Create a new module if we don't have one
        module = new ModuleClass(moduleName, app, options);
        parentModule[moduleName] = module;
        // store the module on the parent
        parentModule.submodules[moduleName] = module;
      }
  
      return module;
    },
  
    // ## Module Classes
    //
    // Module classes can be used as an alternative to the define pattern.
    // The extend function of a Module is identical to the extend functions
    // on other Backbone and Marionette classes.
    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
    getClass: function(moduleDefinition) {
      var ModuleClass = Marionette.Module;
  
      if (!moduleDefinition) {
        return ModuleClass;
      }
  
      // If all of the module's functionality is defined inside its class,
      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
      if (moduleDefinition.prototype instanceof ModuleClass) {
        return moduleDefinition;
      }
  
      return moduleDefinition.moduleClass || ModuleClass;
    },
  
    // Add the module definition and add a startWithParent initializer function.
    // This is complicated because module definitions are heavily overloaded
    // and support an anonymous function, module class, or options object
    _addModuleDefinition: function(parentModule, module, def, args) {
      var fn = this._getDefine(def);
      var startWithParent = this._getStartWithParent(def, module);
  
      if (fn) {
        module.addDefinition(fn, args);
      }
  
      this._addStartWithParent(parentModule, module, startWithParent);
    },
  
    _getStartWithParent: function(def, module) {
      var swp;
  
      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
        swp = module.constructor.prototype.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }
  
      if (_.isObject(def)) {
        swp = def.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }
  
      return true;
    },
  
    _getDefine: function(def) {
      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
        return def;
      }
  
      if (_.isObject(def)) {
        return def.define;
      }
  
      return null;
    },
  
    _addStartWithParent: function(parentModule, module, startWithParent) {
      module.startWithParent = module.startWithParent && startWithParent;
  
      if (!module.startWithParent || !!module.startWithParentIsConfigured) {
        return;
      }
  
      module.startWithParentIsConfigured = true;
  
      parentModule.addInitializer(function(options) {
        if (module.startWithParent) {
          module.start(options);
        }
      });
    }
  });
  

  return Marionette;
}));

/*!{id:msgpack.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"}*/

// === msgpack ===
// MessagePack -> http://msgpack.sourceforge.net/

this.msgpack || (function(globalScope) {

globalScope.msgpack = {
    pack:       msgpackpack,    // msgpack.pack(data:Mix,
                                //              toString:Boolean = false):ByteArray/ByteString/false
                                //  [1][mix to String]    msgpack.pack({}, true) -> "..."
                                //  [2][mix to ByteArray] msgpack.pack({})       -> [...]
    unpack:     msgpackunpack,  // msgpack.unpack(data:BinaryString/ByteArray):Mix
                                //  [1][String to mix]    msgpack.unpack("...") -> {}
                                //  [2][ByteArray to mix] msgpack.unpack([...]) -> {}
    worker:     "msgpack.js",   // msgpack.worker - WebWorkers script filename
    upload:     msgpackupload,  // msgpack.upload(url:String, option:Hash, callback:Function)
    download:   msgpackdownload // msgpack.download(url:String, option:Hash, callback:Function)
};

var _ie         = /MSIE/.test(navigator.userAgent),
    _bin2num    = {}, // BinaryStringToNumber   { "\00": 0, ... "\ff": 255 }
    _num2bin    = {}, // NumberToBinaryString   { 0: "\00", ... 255: "\ff" }
    _num2b64    = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                   "abcdefghijklmnopqrstuvwxyz0123456789+/").split(""),
    _buf        = [], // decode buffer
    _idx        = 0,  // decode buffer[index]
    _error      = 0,  // msgpack.pack() error code. 1 = CYCLIC_REFERENCE_ERROR
    _isArray    = Array.isArray || (function(mix) {
                    return Object.prototype.toString.call(mix) === "[object Array]";
                  }),
    _toString   = String.fromCharCode, // CharCode/ByteArray to String
    _MAX_DEPTH  = 512;

// for WebWorkers Code Block
self.importScripts && (onmessage = function(event) {
    if (event.data.method === "pack") {
        postMessage(base64encode(msgpackpack(event.data.data)));
    } else {
        postMessage(msgpackunpack(event.data.data));
    }
});

// msgpack.pack
function msgpackpack(data,       // @param Mix:
                     toString) { // @param Boolean(= false):
                                 // @return ByteArray/BinaryString/false:
                                 //     false is error return
    //  [1][mix to String]    msgpack.pack({}, true) -> "..."
    //  [2][mix to ByteArray] msgpack.pack({})       -> [...]

    _error = 0;

    var byteArray = encode([], data, 0);

    return _error ? false
                  : toString ? byteArrayToByteString(byteArray)
                             : byteArray;
}

// msgpack.unpack
function msgpackunpack(data) { // @param BinaryString/ByteArray:
                               // @return Mix/undefined:
                               //       undefined is error return
    //  [1][String to mix]    msgpack.unpack("...") -> {}
    //  [2][ByteArray to mix] msgpack.unpack([...]) -> {}

    _buf = typeof data === "string" ? toByteArray(data) : data;
    _idx = -1;
    return decode(); // mix or undefined
}

// inner - encoder
function encode(rv,      // @param ByteArray: result
                mix,     // @param Mix: source data
                depth) { // @param Number: depth
    var size, i, iz, c, pos,        // for UTF8.encode, Array.encode, Hash.encode
        high, low, sign, exp, frac; // for IEEE754

    if (mix == null) { // null or undefined -> 0xc0 ( null )
        rv.push(0xc0);
    } else if (mix === false) { // false -> 0xc2 ( false )
        rv.push(0xc2);
    } else if (mix === true) {  // true  -> 0xc3 ( true  )
        rv.push(0xc3);
    } else {
        switch (typeof mix) {
        case "number":
            if (mix !== mix) { // isNaN
                rv.push(0xcb, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff); // quiet NaN
            } else if (mix === Infinity) {
                rv.push(0xcb, 0x7f, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00); // positive infinity
            } else if (Math.floor(mix) === mix) { // int or uint
                if (mix < 0) {
                    // int
                    if (mix >= -32) { // negative fixnum
                        rv.push(0xe0 + mix + 32);
                    } else if (mix > -0x80) {
                        rv.push(0xd0, mix + 0x100);
                    } else if (mix > -0x8000) {
                        mix += 0x10000;
                        rv.push(0xd1, mix >> 8, mix & 0xff);
                    } else if (mix > -0x80000000) {
                        mix += 0x100000000;
                        rv.push(0xd2, mix >>> 24, (mix >> 16) & 0xff,
                                                  (mix >>  8) & 0xff, mix & 0xff);
                    } else {
                        high = Math.floor(mix / 0x100000000);
                        low  = mix & 0xffffffff;
                        rv.push(0xd3, (high >> 24) & 0xff, (high >> 16) & 0xff,
                                      (high >>  8) & 0xff,         high & 0xff,
                                      (low  >> 24) & 0xff, (low  >> 16) & 0xff,
                                      (low  >>  8) & 0xff,          low & 0xff);
                    }
                } else {
                    // uint
                    if (mix < 0x80) {
                        rv.push(mix); // positive fixnum
                    } else if (mix < 0x100) { // uint 8
                        rv.push(0xcc, mix);
                    } else if (mix < 0x10000) { // uint 16
                        rv.push(0xcd, mix >> 8, mix & 0xff);
                    } else if (mix < 0x100000000) { // uint 32
                        rv.push(0xce, mix >>> 24, (mix >> 16) & 0xff,
                                                  (mix >>  8) & 0xff, mix & 0xff);
                    } else {
                        high = Math.floor(mix / 0x100000000);
                        low  = mix & 0xffffffff;
                        rv.push(0xcf, (high >> 24) & 0xff, (high >> 16) & 0xff,
                                      (high >>  8) & 0xff,         high & 0xff,
                                      (low  >> 24) & 0xff, (low  >> 16) & 0xff,
                                      (low  >>  8) & 0xff,          low & 0xff);
                    }
                }
            } else { // double
                // THX!! @edvakf
                // http://javascript.g.hatena.ne.jp/edvakf/20101128/1291000731
                sign = mix < 0;
                sign && (mix *= -1);

                // add offset 1023 to ensure positive
                // 0.6931471805599453 = Math.LN2;
                exp  = ((Math.log(mix) / 0.6931471805599453) + 1023) | 0;

                // shift 52 - (exp - 1023) bits to make integer part exactly 53 bits,
                // then throw away trash less than decimal point
                frac = mix * Math.pow(2, 52 + 1023 - exp);

                //  S+-Exp(11)--++-----------------Fraction(52bits)-----------------------+
                //  ||          ||                                                        |
                //  v+----------++--------------------------------------------------------+
                //  00000000|00000000|00000000|00000000|00000000|00000000|00000000|00000000
                //  6      5    55  4        4        3        2        1        8        0
                //  3      6    21  8        0        2        4        6
                //
                //  +----------high(32bits)-----------+ +----------low(32bits)------------+
                //  |                                 | |                                 |
                //  +---------------------------------+ +---------------------------------+
                //  3      2    21  1        8        0
                //  1      4    09  6
                low  = frac & 0xffffffff;
                sign && (exp |= 0x800);
                high = ((frac / 0x100000000) & 0xfffff) | (exp << 20);

                rv.push(0xcb, (high >> 24) & 0xff, (high >> 16) & 0xff,
                              (high >>  8) & 0xff,  high        & 0xff,
                              (low  >> 24) & 0xff, (low  >> 16) & 0xff,
                              (low  >>  8) & 0xff,  low         & 0xff);
            }
            break;
        case "string":
            // http://d.hatena.ne.jp/uupaa/20101128
            iz = mix.length;
            pos = rv.length; // keep rewrite position

            rv.push(0); // placeholder

            // utf8.encode
            for (i = 0; i < iz; ++i) {
                c = mix.charCodeAt(i);
                if (c < 0x80) { // ASCII(0x00 ~ 0x7f)
                    rv.push(c & 0x7f);
                } else if (c < 0x0800) {
                    rv.push(((c >>>  6) & 0x1f) | 0xc0, (c & 0x3f) | 0x80);
                } else if (c < 0x10000) {
                    rv.push(((c >>> 12) & 0x0f) | 0xe0,
                            ((c >>>  6) & 0x3f) | 0x80, (c & 0x3f) | 0x80);
                }
            }
            size = rv.length - pos - 1;

            if (size < 32) {
                rv[pos] = 0xa0 + size; // rewrite
            } else if (size < 0x10000) { // 16
                rv.splice(pos, 1, 0xda, size >> 8, size & 0xff);
            } else if (size < 0x100000000) { // 32
                rv.splice(pos, 1, 0xdb,
                          size >>> 24, (size >> 16) & 0xff,
                                       (size >>  8) & 0xff, size & 0xff);
            }
            break;
        default: // array or hash
            if (++depth >= _MAX_DEPTH) {
                _error = 1; // CYCLIC_REFERENCE_ERROR
                return rv = []; // clear
            }
            if (_isArray(mix)) {
                size = mix.length;
                if (size < 16) {
                    rv.push(0x90 + size);
                } else if (size < 0x10000) { // 16
                    rv.push(0xdc, size >> 8, size & 0xff);
                } else if (size < 0x100000000) { // 32
                    rv.push(0xdd, size >>> 24, (size >> 16) & 0xff,
                                               (size >>  8) & 0xff, size & 0xff);
                }
                for (i = 0; i < size; ++i) {
                    encode(rv, mix[i], depth);
                }
            } else { // hash
                // http://d.hatena.ne.jp/uupaa/20101129
                pos = rv.length; // keep rewrite position
                rv.push(0); // placeholder
                size = 0;
                for (i in mix) {
                    ++size;
                    encode(rv, i,      depth);
                    encode(rv, mix[i], depth);
                }
                if (size < 16) {
                    rv[pos] = 0x80 + size; // rewrite
                } else if (size < 0x10000) { // 16
                    rv.splice(pos, 1, 0xde, size >> 8, size & 0xff);
                } else if (size < 0x100000000) { // 32
                    rv.splice(pos, 1, 0xdf,
                              size >>> 24, (size >> 16) & 0xff,
                                           (size >>  8) & 0xff, size & 0xff);
                }
            }
        }
    }
    return rv;
}

// inner - decoder
function decode() { // @return Mix:
    var size, i, iz, c, num = 0,
        sign, exp, frac, ary, hash,
        buf = _buf, type = buf[++_idx];

    if (type >= 0xe0) {             // Negative FixNum (111x xxxx) (-32 ~ -1)
        return type - 0x100;
    }
    if (type < 0xc0) {
        if (type < 0x80) {          // Positive FixNum (0xxx xxxx) (0 ~ 127)
            return type;
        }
        if (type < 0x90) {          // FixMap (1000 xxxx)
            num  = type - 0x80;
            type = 0x80;
        } else if (type < 0xa0) {   // FixArray (1001 xxxx)
            num  = type - 0x90;
            type = 0x90;
        } else { // if (type < 0xc0) {   // FixRaw (101x xxxx)
            num  = type - 0xa0;
            type = 0xa0;
        }
    }
    switch (type) {
    case 0xc0:  return null;
    case 0xc2:  return false;
    case 0xc3:  return true;
    case 0xca:  // float
                num = buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                                                (buf[++_idx] <<  8) + buf[++_idx];
                sign =  num & 0x80000000;    //  1bit
                exp  = (num >> 23) & 0xff;   //  8bits
                frac =  num & 0x7fffff;      // 23bits
                if (!num || num === 0x80000000) { // 0.0 or -0.0
                    return 0;
                }
                if (exp === 0xff) { // NaN or Infinity
                    return frac ? NaN : Infinity;
                }
                return (sign ? -1 : 1) *
                            (frac | 0x800000) * Math.pow(2, exp - 127 - 23); // 127: bias
    case 0xcb:  // double
                num = buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                                                (buf[++_idx] <<  8) + buf[++_idx];
                sign =  num & 0x80000000;    //  1bit
                exp  = (num >> 20) & 0x7ff;  // 11bits
                frac =  num & 0xfffff;       // 52bits - 32bits (high word)
                if (!num || num === 0x80000000) { // 0.0 or -0.0
                    _idx += 4;
                    return 0;
                }
                if (exp === 0x7ff) { // NaN or Infinity
                    _idx += 4;
                    return frac ? NaN : Infinity;
                }
                num = buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                                                (buf[++_idx] <<  8) + buf[++_idx];
                return (sign ? -1 : 1) *
                            ((frac | 0x100000) * Math.pow(2, exp - 1023 - 20) // 1023: bias
                             + num * Math.pow(2, exp - 1023 - 52));
    // 0xcf: uint64, 0xce: uint32, 0xcd: uint16
    case 0xcf:  num =  buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                                                 (buf[++_idx] <<  8) + buf[++_idx];
                return num * 0x100000000 +
                       buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                                                 (buf[++_idx] <<  8) + buf[++_idx];
    case 0xce:  num += buf[++_idx] * 0x1000000 + (buf[++_idx] << 16);
    case 0xcd:  num += buf[++_idx] << 8;
    case 0xcc:  return num + buf[++_idx];
    // 0xd3: int64, 0xd2: int32, 0xd1: int16, 0xd0: int8
    case 0xd3:  num = buf[++_idx];
                if (num & 0x80) { // sign -> avoid overflow
                    return ((num         ^ 0xff) * 0x100000000000000 +
                            (buf[++_idx] ^ 0xff) *   0x1000000000000 +
                            (buf[++_idx] ^ 0xff) *     0x10000000000 +
                            (buf[++_idx] ^ 0xff) *       0x100000000 +
                            (buf[++_idx] ^ 0xff) *         0x1000000 +
                            (buf[++_idx] ^ 0xff) *           0x10000 +
                            (buf[++_idx] ^ 0xff) *             0x100 +
                            (buf[++_idx] ^ 0xff) + 1) * -1;
                }
                return num         * 0x100000000000000 +
                       buf[++_idx] *   0x1000000000000 +
                       buf[++_idx] *     0x10000000000 +
                       buf[++_idx] *       0x100000000 +
                       buf[++_idx] *         0x1000000 +
                       buf[++_idx] *           0x10000 +
                       buf[++_idx] *             0x100 +
                       buf[++_idx];
    case 0xd2:  num  =  buf[++_idx] * 0x1000000 + (buf[++_idx] << 16) +
                       (buf[++_idx] << 8) + buf[++_idx];
                return num < 0x80000000 ? num : num - 0x100000000; // 0x80000000 * 2
    case 0xd1:  num  = (buf[++_idx] << 8) + buf[++_idx];
                return num < 0x8000 ? num : num - 0x10000; // 0x8000 * 2
    case 0xd0:  num  =  buf[++_idx];
                return num < 0x80 ? num : num - 0x100; // 0x80 * 2
    // 0xdb: raw32, 0xda: raw16, 0xa0: raw ( string )
    case 0xdb:  num +=  buf[++_idx] * 0x1000000 + (buf[++_idx] << 16);
    case 0xda:  num += (buf[++_idx] << 8)       +  buf[++_idx];
    case 0xa0:  // utf8.decode
                for (ary = [], i = _idx, iz = i + num; i < iz; ) {
                    c = buf[++i]; // lead byte
                    ary.push(c < 0x80 ? c : // ASCII(0x00 ~ 0x7f)
                             c < 0xe0 ? ((c & 0x1f) <<  6 | (buf[++i] & 0x3f)) :
                                        ((c & 0x0f) << 12 | (buf[++i] & 0x3f) << 6
                                                          | (buf[++i] & 0x3f)));
                }
                _idx = i;
                return ary.length < 10240 ? _toString.apply(null, ary)
                                          : byteArrayToByteString(ary);
    // 0xdf: map32, 0xde: map16, 0x80: map
    case 0xdf:  num +=  buf[++_idx] * 0x1000000 + (buf[++_idx] << 16);
    case 0xde:  num += (buf[++_idx] << 8)       +  buf[++_idx];
    case 0x80:  hash = {};
                while (num--) {
                    // make key/value pair
                    size = buf[++_idx] - 0xa0;

                    for (ary = [], i = _idx, iz = i + size; i < iz; ) {
                        c = buf[++i]; // lead byte
                        ary.push(c < 0x80 ? c : // ASCII(0x00 ~ 0x7f)
                                 c < 0xe0 ? ((c & 0x1f) <<  6 | (buf[++i] & 0x3f)) :
                                            ((c & 0x0f) << 12 | (buf[++i] & 0x3f) << 6
                                                              | (buf[++i] & 0x3f)));
                    }
                    _idx = i;
                    hash[_toString.apply(null, ary)] = decode();
                }
                return hash;
    // 0xdd: array32, 0xdc: array16, 0x90: array
    case 0xdd:  num +=  buf[++_idx] * 0x1000000 + (buf[++_idx] << 16);
    case 0xdc:  num += (buf[++_idx] << 8)       +  buf[++_idx];
    case 0x90:  ary = [];
                while (num--) {
                    ary.push(decode());
                }
                return ary;
    }
    return;
}

// inner - byteArray To ByteString
function byteArrayToByteString(byteArray) { // @param ByteArray
                                            // @return String
    // http://d.hatena.ne.jp/uupaa/20101128
    try {
        return _toString.apply(this, byteArray); // toString
    } catch(err) {
        ; // avoid "Maximum call stack size exceeded"
    }
    var rv = [], i = 0, iz = byteArray.length, num2bin = _num2bin;

    for (; i < iz; ++i) {
        rv[i] = num2bin[byteArray[i]];
    }
    return rv.join("");
}

// msgpack.download - load from server
function msgpackdownload(url,        // @param String:
                         option,     // @param Hash: { worker, timeout, before, after }
                                     //    option.worker - Boolean(= false): true is use WebWorkers
                                     //    option.timeout - Number(= 10): timeout sec
                                     //    option.before  - Function: before(xhr, option)
                                     //    option.after   - Function: after(xhr, option, { status, ok })
                         callback) { // @param Function: callback(data, option, { status, ok })
                                     //    data   - Mix/null:
                                     //    option - Hash:
                                     //    status - Number: HTTP status code
                                     //    ok     - Boolean:
    option.method = "GET";
    option.binary = true;
    ajax(url, option, callback);
}

// msgpack.upload - save to server
function msgpackupload(url,        // @param String:
                       option,     // @param Hash: { data, worker, timeout, before, after }
                                   //    option.data - Mix:
                                   //    option.worker - Boolean(= false): true is use WebWorkers
                                   //    option.timeout - Number(= 10): timeout sec
                                   //    option.before  - Function: before(xhr, option)
                                   //    option.after   - Function: after(xhr, option, { status, ok })
                       callback) { // @param Function: callback(data, option, { status, ok })
                                   //    data   - String: responseText
                                   //    option - Hash:
                                   //    status - Number: HTTP status code
                                   //    ok     - Boolean:
    option.method = "PUT";
    option.binary = true;

    if (option.worker && globalScope.Worker) {
        var worker = new Worker(msgpack.worker);

        worker.onmessage = function(event) {
            option.data = event.data;
            ajax(url, option, callback);
        };
        worker.postMessage({ method: "pack", data: option.data });
    } else {
        // pack and base64 encode
        option.data = base64encode(msgpackpack(option.data));
        ajax(url, option, callback);
    }
}

// inner -
function ajax(url,        // @param String:
              option,     // @param Hash: { data, ifmod, method, timeout,
                          //                header, binary, before, after, worker }
                          //    option.data    - Mix: upload data
                          //    option.ifmod   - Boolean: true is "If-Modified-Since" header
                          //    option.method  - String: "GET", "POST", "PUT"
                          //    option.timeout - Number(= 10): timeout sec
                          //    option.header  - Hash(= {}): { key: "value", ... }
                          //    option.binary  - Boolean(= false): true is binary data
                          //    option.before  - Function: before(xhr, option)
                          //    option.after   - Function: after(xhr, option, { status, ok })
                          //    option.worker  - Boolean(= false): true is use WebWorkers
              callback) { // @param Function: callback(data, option, { status, ok })
                          //    data   - String/Mix/null:
                          //    option - Hash:
                          //    status - Number: HTTP status code
                          //    ok     - Boolean:
    function readyStateChange() {
        if (xhr.readyState === 4) {
            var data, status = xhr.status, worker, byteArray,
                rv = { status: status, ok: status >= 200 && status < 300 };

            if (!run++) {
                if (method === "PUT") {
                    data = rv.ok ? xhr.responseText : "";
                } else {
                    if (rv.ok) {
                        if (option.worker && globalScope.Worker) {
                            worker = new Worker(msgpack.worker);
                            worker.onmessage = function(event) {
                                callback(event.data, option, rv);
                            };
                            worker.postMessage({ method: "unpack",
                                                 data: xhr.responseText });
                            gc();
                            return;
                        } else {
                            byteArray = _ie ? toByteArrayIE(xhr)
                                            : toByteArray(xhr.responseText);
                            data = msgpackunpack(byteArray);
                        }
                    }
                }
                after && after(xhr, option, rv);
                callback(data, option, rv);
                gc();
            }
        }
    }

    function ng(abort, status) {
        if (!run++) {
            var rv = { status: status || 400, ok: false };

            after && after(xhr, option, rv);
            callback(null, option, rv);
            gc(abort);
        }
    }

    function gc(abort) {
        abort && xhr && xhr.abort && xhr.abort();
        watchdog && (clearTimeout(watchdog), watchdog = 0);
        xhr = null;
        globalScope.addEventListener &&
            globalScope.removeEventListener("beforeunload", ng, false);
    }

    var watchdog = 0,
        method = option.method || "GET",
        header = option.header || {},
        before = option.before,
        after = option.after,
        data = option.data || null,
        xhr = globalScope.XMLHttpRequest ? new XMLHttpRequest() :
              globalScope.ActiveXObject  ? new ActiveXObject("Microsoft.XMLHTTP") :
              null,
        run = 0, i,
        overrideMimeType = "overrideMimeType",
        setRequestHeader = "setRequestHeader",
        getbinary = method === "GET" && option.binary;

    try {
        xhr.onreadystatechange = readyStateChange;
        xhr.open(method, url, true); // ASync

        before && before(xhr, option);

        getbinary && xhr[overrideMimeType] &&
            xhr[overrideMimeType]("text/plain; charset=x-user-defined");
        data &&
            xhr[setRequestHeader]("Content-Type",
                                  "application/x-www-form-urlencoded");

        for (i in header) {
            xhr[setRequestHeader](i, header[i]);
        }

        globalScope.addEventListener &&
            globalScope.addEventListener("beforeunload", ng, false); // 400: Bad Request

        xhr.send(data);
        watchdog = setTimeout(function() {
            ng(1, 408); // 408: Request Time-out
        }, (option.timeout || 10) * 1000);
    } catch (err) {
        ng(0, 400); // 400: Bad Request
    }
}

// inner - BinaryString To ByteArray
function toByteArray(data) { // @param BinaryString: "\00\01"
                             // @return ByteArray: [0x00, 0x01]
    var rv = [], bin2num = _bin2num, remain,
        ary = data.split(""),
        i = -1, iz;

    iz = ary.length;
    remain = iz % 8;

    while (remain--) {
        ++i;
        rv[i] = bin2num[ary[i]];
    }
    remain = iz >> 3;
    while (remain--) {
        rv.push(bin2num[ary[++i]], bin2num[ary[++i]],
                bin2num[ary[++i]], bin2num[ary[++i]],
                bin2num[ary[++i]], bin2num[ary[++i]],
                bin2num[ary[++i]], bin2num[ary[++i]]);
    }
    return rv;
}

// inner - BinaryString to ByteArray
function toByteArrayIE(xhr) {
    var rv = [], data, remain,
        charCodeAt = "charCodeAt",
        loop, v0, v1, v2, v3, v4, v5, v6, v7,
        i = -1, iz;

    iz = vblen(xhr);
    data = vbstr(xhr);
    loop = Math.ceil(iz / 2);
    remain = loop % 8;

    while (remain--) {
        v0 = data[charCodeAt](++i); // 0x00,0x01 -> 0x0100
        rv.push(v0 & 0xff, v0 >> 8);
    }
    remain = loop >> 3;
    while (remain--) {
        v0 = data[charCodeAt](++i);
        v1 = data[charCodeAt](++i);
        v2 = data[charCodeAt](++i);
        v3 = data[charCodeAt](++i);
        v4 = data[charCodeAt](++i);
        v5 = data[charCodeAt](++i);
        v6 = data[charCodeAt](++i);
        v7 = data[charCodeAt](++i);
        rv.push(v0 & 0xff, v0 >> 8, v1 & 0xff, v1 >> 8,
                v2 & 0xff, v2 >> 8, v3 & 0xff, v3 >> 8,
                v4 & 0xff, v4 >> 8, v5 & 0xff, v5 >> 8,
                v6 & 0xff, v6 >> 8, v7 & 0xff, v7 >> 8);
    }
    iz % 2 && rv.pop();

    return rv;
}

// inner - base64.encode
function base64encode(data) { // @param ByteArray:
                              // @return Base64String:
    var rv = [],
        c = 0, i = -1, iz = data.length,
        pad = [0, 2, 1][data.length % 3],
        num2bin = _num2bin,
        num2b64 = _num2b64;

    if (globalScope.btoa) {
        while (i < iz) {
            rv.push(num2bin[data[++i]]);
        }
        return btoa(rv.join(""));
    }
    --iz;
    while (i < iz) {
        c = (data[++i] << 16) | (data[++i] << 8) | (data[++i]); // 24bit
        rv.push(num2b64[(c >> 18) & 0x3f],
                num2b64[(c >> 12) & 0x3f],
                num2b64[(c >>  6) & 0x3f],
                num2b64[ c        & 0x3f]);
    }
    pad > 1 && (rv[rv.length - 2] = "=");
    pad > 0 && (rv[rv.length - 1] = "=");
    return rv.join("");
}

// --- init ---
(function() {
    var i = 0, v;

    for (; i < 0x100; ++i) {
        v = _toString(i);
        _bin2num[v] = i; // "\00" -> 0x00
        _num2bin[i] = v; //     0 -> "\00"
    }
    // http://twitter.com/edvakf/statuses/15576483807
    for (i = 0x80; i < 0x100; ++i) { // [Webkit][Gecko]
        _bin2num[_toString(0xf700 + i)] = i; // "\f780" -> 0x80
    }
})();

_ie && document.write('<script type="text/vbscript">\
Function vblen(b)vblen=LenB(b.responseBody)End Function\n\
Function vbstr(b)vbstr=CStr(b.responseBody)+chr(0)End Function</'+'script>');

})(this);

(function() {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
    Number.prototype.mod = function(n) {
        return ((this % n) + n) % n;
    };

    Array.prototype.peek = function() {
        return this[this.length - 1];
    };
    window.parseURLParams = function(url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd   = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;

        if (query === url || query === "") {
            return parms;
        }

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=");
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parms.hasOwnProperty(n)) {
                parms[n] = [];
            }

            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    };
    window.loadScript =function(src, callback) {
        var script = document.createElement('script'),
            loaded;
        script.setAttribute('src', src);
        if (callback) {
            script.onreadystatechange = script.onload = function() {
                if (!loaded) {
                    callback();
                }
                loaded = true;
            };
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    }
})();
(function(window, Backbone, Marionette){
    window.AgarBot = {};
    window.AgarBot.Application = Marionette.Application.extend({
        initialize: function(options) {
            console.log('Application Start');
        }
    });
    window.AgarBot.Models = {};
    window.AgarBot.Views = {};
    window.AgarBot.app  = new window.AgarBot.Application();
    window.AgarBot.Modules  = {};
    window.AgarBot.pubsub = {};
    _.extend(window.AgarBot.pubsub, Backbone.Events);
})(window, Backbone, Marionette);
(function($, Backbone, _, AgarBot, app){

    AgarBot.Modules.Messenger = Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.extId = 'bpiedfhfaipmeaglaemfbfapmknkckop';
            console.log('Module Messenger initialize, extID = ', this.extId);
        },
        sendMessage:function(data, callback){
            chrome.runtime.sendMessage(this.extId, data,callback);
        }
    });
    app.module("Messenger", {
        moduleClass: AgarBot.Modules.Messenger
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);
(function($, Backbone, _, AgarBot, app){
    AgarBot.Modules.TemplateLoader =Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.templates  = {};
            console.log('module TemplateLoader initialize');
        },
        initTemlate : function(){
            this.templates.panel = _.template(
                '<div class="control-panel">' +
                    '<# if(canRunBot == true){ #><button class="btn btn-runbot" id="runbot">Run bot</button><# } #>' +
                '</div>'
            );
            this.templates.mapPanel  = _.template('<div class="grid">'+
                            '<span class="grid-cell">A1</span>'+
                            '<span class="grid-cell">A2</span>'+
                            '<span class="grid-cell">A3</span>'+
                            '<span class="grid-cell">A4</span>'+
                            '<span class="grid-cell">B1</span>'+
                            '<span class="grid-cell">B2</span>'+
                            '<span class="grid-cell">B3</span>'+
                            '<span class="grid-cell">B4</span>'+
                            '<span class="grid-cell">C1</span>'+
                            '<span class="grid-cell">C2</span>'+
                            '<span class="grid-cell">C3</span>'+
                            '<span class="grid-cell">C4</span>'+
                            '<span class="grid-cell">D1</span>'+
                            '<span class="grid-cell">D2</span>'+
                            '<span class="grid-cell">D3</span>'+
                            '<span class="grid-cell">D4</span>'+
                        '</div>'+
                        '<canvas class="minimap-canvas" id="minimap-canvas" width="300" height="300"></canvas>');
            this.templates.feedBotPannel = _.template('<div class="bot-panel">' +
                    '<button id="feedBotToggle_master">Make slave</button>'+
                    '<button id="feedBotToggle_auto">Disable auto</button>'+
                '</div>');
            this.templates.clanFormField = _.template('<input type="text" class="form-control" id="ksIpInput" placeholder="Enter server IP">');
            this.templates.statsPanel = _.template('<p id="serverInfo"><span id="serverIp"><%=serverIp%></span></p>');
        },
        onStart : function(options){
            console.log('module TemplateLoader start.');
            this.initTemlate();
        },
        getTemlate:function(templateName){
            if(typeof this.templates[templateName] !='undefined'){
                return this.templates[templateName];
            }
            return null;
        }
    });
    app.module("TemplateLoader", {
        moduleClass: AgarBot.Modules.TemplateLoader
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);
(function (d, e, AgarBot, app) {
    function lc() {
        Ua = !0;
        K.google.da();
        K.V.init();
        zb();
        setInterval(zb, 18E4);
        Q = Va = document.getElementById("canvas");
        f = Q.getContext("2d");
        Q.onmousedown = function (a) {
            //@author nguyenvanduocit
            if(a.which ==2){
                splitMe();
            }

            if (Ab) {
                var c = a.clientX - (5 + p / 5 / 2), b = a.clientY - (5 + p / 5 / 2);
                if (Math.sqrt(c * c + b * b) <= p / 5 / 2) {
                    ha();
                    L(17);
                    return
                }
            }
            ua = 1 * a.clientX;
            va = 1 * a.clientY;
            Wa();
            ha()
        };
        Q.onmousemove = function (a) {
            ua = 1 * a.clientX;
            va = 1 * a.clientY;
            Wa()
        };
        Q.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", Bb, !1) : document.body.onmousewheel = Bb;
        var a = !1, c = !1, b = !1;
        d.onkeydown = function (d) {
            32 != d.keyCode || a || ("nick" != d.target.id && d.preventDefault(), ha(), L(17), a = !0);
            81 != d.keyCode || c || (L(18), c = !0);
            87 != d.keyCode || b || (ha(), L(21), b = !0);
            27 == d.keyCode && (d.preventDefault(), wa(300))
        };
        d.onkeyup = function (d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (b = !1);
            81 == d.keyCode && c && (L(19), c = !1)
        };
        //@author nguyenvanduocit
        d.onblur = function () {
            //L(19);
            //b = c = a = !1
        };
        d.onresize = Cb;
        d.requestAnimationFrame(Db);
        setInterval(ha, 40);
        C && e("#region").val(C);
        Eb();
        xa(e("#region").val());
        0 == Xa && C && R();
        ya.ABGroupDFP = Fb("AB9");
        ya.ABGroupRubicon = Fb("AB10_Rubicon");
        d.location.search.indexOf("fb");
        za.w = d.hasBottomAd;
        S && console.log("Init ads");
        //@author nguyenvanduocit
        //mc();
        //nc();
        S && console.log("Ads initted");
        S && console.log("Your group: ", Aa() ? "rubicon" : "dfp");
        //@author nguyenvanduocit
        //oc();
        wa(0);
        Cb();
        d.location.hash && 6 <= d.location.hash.length && Gb(d.location.hash)
    }

    function Bb(a) {
        a.preventDefault();
        T *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        /**
         * @author nguyenvanduocit
         */
        .01 > T && (T = .01);
        T > 4 / m && (T = 4 / m)
    }

    function pc() {
        if (.4 > m)ia = null; else {
            for (var a = Number.POSITIVE_INFINITY, c = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, g = 0; g < x.length; g++) {
                var e = x[g];
                !e.H() || e.M || 20 >= e.size * m || (a = Math.min(e.x - e.size, a), c = Math.min(e.y - e.size, c), b = Math.max(e.x + e.size, b), d = Math.max(e.y + e.size, d))
            }
            ia = qc.init({ia: a - 10, ja: c - 10, fa: b + 10, ha: d + 10, ta: 2, ua: 4});
            for (g = 0; g < x.length; g++)if (e = x[g], e.H() && !(20 >= e.size * m))for (a = 0; a < e.a.length; ++a)c = e.a[a].x, b = e.a[a].y, c < u - p / 2 / m || b < v - q / 2 / m || c > u + p / 2 / m || b > v + q / 2 / m || ia.ca(e.a[a])
        }
    }

    function Wa() {
        //@author nguyenvanduocit
        var tmp_Ba = (ua - p / 2) / m + u;
        var tmp_Ca = (va - q / 2) / m + v
        setPoint(tmp_Ba, tmp_Ca);
    }

    function zb() {
        null == Da &&
        (Da = {}, e("#region").children().each(function () {
            var a = e(this), c = a.val();
            c && (Da[c] = a.text())
        }));
        e.get(ja + "info", function (a) {
            var c = {}, b;
            for (b in a.regions) {
                var d = b.split(":")[0];
                c[d] = c[d] || 0;
                c[d] += a.regions[b].numPlayers
            }
            for (b in c)e('#region option[value="' + b + '"]').text(Da[b] + " (" + c[b] + " players)")
        }, "json")
    }

    function Hb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        aa = ka = !1;
        Eb();
        var a = s.aa;
        Ya(a);
        Za(a);
        a = s.ac;
        Ya(a);
        Za(a)
    }

    function xa(a) {
        a && (a == C ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), C = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ua && R()))
    }

    function wa(a) {
        ka || aa || (Ea ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), M = null, $a || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), ab($a ? s.ac : s.aa), $a = !1, 1E3 > a && (w = 1), ka = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function la(a) {
        e("#helloContainer").attr("data-gamemode", a);
        ma = a;
        e("#gamemode").val(a)
    }

    function Eb() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function U(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function oc() {
        var a = -1 != d.location.search.indexOf("fb"), a = Aa() && !a;
        googletag.cmd.push(function () {
            googletag.display("g300x250")
        });
        Ib && googletag.cmd.push(function () {
            googletag.display("g728x90")
        });
        a || (googletag.cmd.push(function () {
            googletag.display("s300x250")
        }), googletag.cmd.push(function () {
            googletag.display("a300x250")
        }), Ib && googletag.cmd.push(function () {
            googletag.display("a728x90")
        }))
    }

    function Aa() {
        return !(50 > bb("ABGroupRubicon"))
    }

    function bb(a) {
        return a in ya ? ya[a] : 0
    }

    function ab(a) {
        Jb(a);
        for (var c = 0; c < a.length; c++)if (!("type" in a[c] && "rubicon" != a[c].type)) {
            var b = a[c].data;
            S && console.log("Rubicon: refreshing:" + b.id);
            ba.F(b.id, b.size, b.json)
        }
    }

    function mc() {
        var a = {}, c = null, b = null, e = null, g = null, t = -1 != d.location.search.indexOf("fb"), k = Aa() && !t, Fa = za.w;
        t ? (a = "/53945695/agar_facebook/agar/300x250", e = "/53945695/agar_facebook/agar/300x250_Stats", g = "/53945695/agar_facebook/agar/300x250") : (g = "/116850162/300x250_init", c = "/116850162/728x90_init", a = "/116850162/300x250_login", e = "/116850162/300x250_stats", b = "/116850162/728x90_login");
        var f = d.googletag;
        f.cmd.push(function () {
            f.pubads().setTargeting("abtest", bb("ABGroupDFP") + "");
            s.ac.push(ca.defineSlot(g, [300, 250], "g300x250"));
            Fa && s.ac.push(ca.defineSlot(c, [728, 90], "g728x90"));
            k || (s.ab.push(ca.defineSlot(e, [300, 250], "s300x250")), s.aa.push(ca.defineSlot(a, [300, 250], "a300x250")), Fa && s.aa.push(ca.defineSlot(b, [728, 90], "a728x90")));
            f.pubads().enableSingleRequest();
            f.pubads().disableInitialLoad();
            f.enableServices();
            cb = !0;
            null != db && (console.log("refreshing from queue"), Jb(db))
        })
    }

    function Jb(a) {
        console.log("dfpInitialized=" + cb);
        cb || (console.log("queuing refresh"), db = a);
        for (var c = [], b = 0; b < a.length; b++)"type" in
        a[b] && "dfpads" != a[b].type ? console.log("trying to refresh a non dfp ad. continue") : (S && console.log("DFP: refreshing:" + a[b].data.A), c.push(a[b].data));
        0 >= c.length || !d.googletag || d.googletag.cmd.push(function () {
            eb && (eb = !1, setTimeout(function () {
                eb = !0
            }, 6E4 * rc), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(c))
        })
    }

    function Ya(a) {
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type || (S && console.log("DFP: destroying:" + a[b].data.A), c.push(a[b].data));
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(c)
    }

    function nc() {
        if (Aa()) {
            var a = {acct: 13694, site: 73068, zone: 346604, size: 15}, c = {
                acct: 13694,
                site: 73068,
                zone: 363786,
                size: 2
            };
            d.location.search.indexOf("fb");
            var b = za.w;
            s.ab.push(ba.defineSlot(a, "300x250", "s300x250"));
            s.aa.push(ba.defineSlot(a, "300x250", "a300x250"));
            b && s.aa.push(ba.defineSlot(c, "728x90", "a728x90"))
        }
    }
    /**
     * @author nguyenvanduocit
     * @type {number}
     */
    var currenConnecttTry = 0;
    var maxConnectRetry = 50;
    function Kb() {
        var a = ++Xa;
        console.log("Find " + C + ma);
        Lb();
        e.ajax(ja + "findServer", {
            error: function () {
                setTimeout(Kb, 3E4)
            }, success: function (c) {
                if (a == Xa) {
                    c.alert && alert(c.alert);
                    var b = c.ip;

                    /**
                     * @author nguyenvanduocit
                     */
                    var wantedIp = window.getWantedIp();
                    if(wantedIp && wantedIp !== b.trim()){
                        console.log('Found ',b,", Wanted : ",wantedIp );
                        if(currenConnecttTry <= maxConnectRetry){
                            currenConnecttTry++;
                            AgarBot.pubsub.trigger('findServer:retry', {time:currenConnecttTry});
                            setTimeout(Kb, 2e3);
                        }else{
                            AgarBot.pubsub.trigger('findServer:ipNotFound');
                        }
                    }else{
                        void 0 != y.$ && (b = d.location.hostname + ":" + y.$);
                        fb("ws" + (gb ? "s" : "") + "://" + b, c.token)
                    }
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (C + ma || "?") + "\n2200049715"
        })
    }

    function R() {
        Ua && C && (e("#connecting").show(), Kb())
    }

    function Lb() {
        if (r) {
            r.onopen = null;
            r.onmessage = null;
            r.onclose = null;
            try {
                r.close()
            } catch (a) {
            }
            r = null
        }
    }

    function fb(a, c) {
        Lb();
        D.ip && (a = "ws" + (gb ? "s" : "") + "://" + D.ip);
        if (null != V) {
            var b = V;
            V = function () {
                b(c)
            }
        }
        if (gb && !y.env_development && !y.env_local) {
            var d = a.split(":");
            a = "wss://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +d[2]
        }
        E = [];
        l = [];
        N = {};
        x = [];
        da = [];
        A = [];
        F = G = null;
        O = 0;
        na = !1;
        console.log("Connecting to " + a);

        /**
         * @author nguyenvanduocit
         */
        serverIP = a;
        token = c;
        AgarBot.pubsub.trigger('Game:connect', {ip:serverIP, token:token});

        r = new WebSocket(a);
        r.binaryType = "arraybuffer";
        r.onopen = function () {
            var a;
            console.log("socket open");
            a = W(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, !0);
            X(a);
            a = W(5);
            a.setUint8(0, 255);
            a.setUint32(1, 2200049715, !0);
            X(a);
            a = W(1 + c.length);
            a.setUint8(0, 80);
            for (var b = 0; b < c.length; ++b)a.setUint8(b + 1, c.charCodeAt(b));
            X(a);
            Mb()
        };
        r.onmessage = sc;
        r.onclose = tc;
        r.onerror = function () {
            console.log("socket error")
        }
    }

    function W(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function X(a) {
        r.send(a.buffer)
    }

    function tc() {
        na && (Ga = 500);
        console.log("socket close");
        setTimeout(R, Ga);
        Ga *= 2
    }

    function sc(a) {
        uc(new DataView(a.data))
    }

    function uc(a) {
        function c() {
            for (var c = ""; ;) {
                var d = a.getUint16(b, !0);
                b += 2;
                if (0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        var b = 0;
        240 == a.getUint8(b) && (b += 5);
        switch (a.getUint8(b++)) {
            case 16:
                vc(a, b);
                break;
            case 17:
                oa = a.getFloat32(b, !0);
                b += 4;
                pa = a.getFloat32(b, !0);
                b += 4;
                qa = a.getFloat32(b, !0);
                b += 4;
                break;
            case 20:
                l = [];
                E = [];
                break;
            case 21:
                hb = a.getInt16(b, !0);
                b += 2;
                ib = a.getInt16(b, !0);
                b += 2;
                jb || (jb = !0, Ha = hb, Ia = ib);
                break;
            case 32:
                E.push(a.getUint32(b, !0));
                b += 4;
                break;
            case 49:
                if (null != G)break;
                var e = a.getUint32(b, !0), b = b + 4;
                A = [];
                for (var g = 0; g < e; ++g) {
                    var t = a.getUint32(b, !0), b = b + 4;
                    A.push({id: t, name: c()})
                }
                Nb();
                break;
            case 50:
                G = [];
                e = a.getUint32(b, !0);
                b += 4;
                for (g = 0; g < e; ++g)G.push(a.getFloat32(b, !0)), b += 4;
                Nb();
                break;
            case 64:
                Ja = a.getFloat64(b, !0);
                b += 8;
                Ka = a.getFloat64(b, !0);
                b += 8;
                La = a.getFloat64(b, !0);
                b += 8;
                Ma = a.getFloat64(b, !0);
                b += 8;
                oa = (La + Ja) / 2;
                pa = (Ma + Ka) / 2;
                qa = 1;
                0 == l.length && (u = oa, v = pa, m = qa);
                a.byteLength > b && (e = a.getUint32(b, !0), b += 4, Ob = !!(e & 1), kb = c(), d.MC.updateServerVersion(kb), console.log("Server version " + kb));
                break;
            case 81:
                var k = a.getUint32(b, !0), b = b + 4, Fa = a.getUint32(b, !0), b = b + 4, f = a.getUint32(b, !0), b = b + 4;
                setTimeout(function () {
                    var a = {level: k, xp: Fa, xpNeeded: f};
                    d.MC.updateUserXPInfo(a);
                    ra(a, null)
                }, 1200)
        }
    }

    function vc(a, c) {
        function b() {
            for (var b =
                ""; ;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        function $() {
            for (var b = ""; ;) {
                var d = a.getUint8(c++);
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        Pb = I = Date.now();
        na || (na = !0, e("#connecting").hide(), Qb(), V && (V(), V = null));
        lb = !1;
        var g = a.getUint16(c, !0);
        c += 2;
        for (var t = 0; t < g; ++t) {
            var k = N[a.getUint32(c, !0)], f = N[a.getUint32(c + 4, !0)];
            c += 8;
            k && f && (f.S(), f.l = f.x, f.m = f.y, f.k = f.size, f.B = k.x, f.C = k.y, f.e = f.size, f.L = I, wc(k, f))
        }
        for (t = 0; ;) {
            g = a.getUint32(c, !0);
            c += 4;
            if (0 == g)break;
            ++t;
            var h, k = a.getInt32(c, !0);
            c += 4;
            f = a.getInt32(c, !0);
            c += 4;
            h = a.getInt16(c, !0);
            c += 2;
            var n = a.getUint8(c++), P = a.getUint8(c++), m = a.getUint8(c++), P = xc(n << 16 | P << 8 | m), m = a.getUint8(c++), p = !!(m & 1), q = !!(m & 16), r = null;
            m & 2 && (c += 4 + a.getUint32(c, !0));
            m & 4 && (r = $());
            var s = b(), n = null;
            N.hasOwnProperty(g) ? (n = N[g], n.K(), n.l = n.x, n.m = n.y, n.k = n.size, n.color = P) : (n = new ea(g, k, f, h, P, s), x.push(n), N[g] = n, n.va = k, n.wa = f);
            n.c = p;
            n.h = q;
            n.B = k;
            n.C = f;
            n.e = h;
            n.L = I;
            n.U = m;
            r && (n.J = r);
            s && n.q(s);
            //nguyenvanduocit
            -1 != E.indexOf(g) && -1 == l.indexOf(n) && (l.push(n),n.birth = getLastUpdate(),n.birthMass = (n.size * n.size / 100), AgarBot.pubsub.trigger('game:start'), 1 == l.length && (u = n.x, v = n.y, Rb(), document.getElementById("overlays").style.display = "none", B = [], mb = 0, nb = l[0].color, Ea = !0, ob = Date.now(), Y = Na = pb = 0));
            //nguyenvanduocit
            interNodes[g] = window.getCells()[g];
        }
        //nguyenvanduocit
        Object.keys(interNodes).forEach(function(element, index) {
            //console.log("start: " + interNodes[element].updateTime + " current: " + D + " life: " + (D - interNodes[element].updateTime));
            var isRemoved = !window.getCells().hasOwnProperty(element);

            //console.log("Time not updated: " + (window.getLastUpdate() - interNodes[element].getUptimeTime()));
            if (isRemoved && (window.getLastUpdate() - interNodes[element].getUptimeTime()) > 3000) {
                delete interNodes[element];
            } else {
                if (isRemoved &&
                    interNodes[element].x > (getX() - (1920 / 2) / getZoomlessRatio()) &&
                    interNodes[element].x < (getX() + (1920 / 2) / getZoomlessRatio()) &&
                    interNodes[element].y > getY() - (1080 / 2) / getZoomlessRatio() &&
                    interNodes[element].y < getY() + (1080 / 2) / getZoomlessRatio()) {
                    delete interNodes[element];
                }
            }
        });
        k = a.getUint32(c, !0);
        c += 4;
        for (t = 0; t < k; t++)g = a.getUint32(c, !0), c += 4, n = N[g], null != n && n.S();
        lb && 0 == l.length && (null == d.storageInfo && d.createDefaultStorage(), qb = Date.now(), Ea = !1, yc(), d.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(O / 100),
            turn_time: (qb - ob) / 1E3,
            cells_eaten: Na
        }),
        AgarBot.pubsub.trigger('stopPlay'))//nguyenvanduocit
    }

    function ha() {
        if (fa()) {

            //@author nguyenvanduocit
            if (getPlayer().length == 0 && !reviving && ~~(getCurrentScore() / 100) > 0) {
                console.log("Dead: " + ~~(getCurrentScore() / 100));
                AgarBot.pubsub.trigger('player:dead');
            }
            if (getPlayer().length == 0 && !firstStart) {
                console.log("Revive");
                setNick(originalName);
                reviving = true;
            } else if (getPlayer().length > 0 && reviving) {
                reviving = false;
                console.log("Done Reviving!");
                AgarBot.pubsub.trigger('player:revive');
            }

            var a = ua - p / 2, c = va - q / 2;
            64 > a * a + c * c || .01 > Math.abs(Sb - Ba) && .01 >
            Math.abs(Tb - Ca) || (Sb = Ba, Tb = Ca, a = W(13), a.setUint8(0, 16), a.setInt32(1, Ba, !0), a.setInt32(5, Ca, !0), a.setUint32(9, 0, !0), X(a))
        }
    }

    function Qb() {
        if (fa() && na && null != M) {
            var a = W(1 + 2 * M.length);
            a.setUint8(0, 0);
            for (var c = 0; c < M.length; ++c)a.setUint16(1 + 2 * c, M.charCodeAt(c), !0);
            X(a);
            M = null
        }
    }

    function fa() {
        return null != r && r.readyState == r.OPEN
    }

    function L(a) {
        if (fa()) {
            var c = W(1);
            c.setUint8(0, a);
            X(c)
        }
    }

    function Mb() {
        if (fa() && null != z) {
            var a = W(1 + z.length);
            a.setUint8(0, 81);
            for (var c = 0; c < z.length; ++c)a.setUint8(c + 1, z.charCodeAt(c));
            X(a)
        }
    }

    function Cb() {
        p = 1 * d.innerWidth;
        q = 1 * d.innerHeight;
        Va.width = Q.width = p;
        Va.height = Q.height = q;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var c = a.height(), b = d.innerHeight;
        0 != c / 2 % 2 && (c++, a.height(c));
        c > b / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + b / c / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Ub()
    }

    function Vb() {
        var a;
        a = 1 * Math.max(q / 1080, p / 1920);
        return a *= T
    }

    /**
     * @author nguyenvanduocit
     */
    function Vb2() {
        var a;
        a = 1 * Math.max(q / 1080, p / 1920);
        return a
    }

    function zc() {
        if (0 != l.length) {
            //nguyenvanduocit
            for (var a = 0, a2= 0, c = 0; c < l.length; c++)a += l[c].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Vb();
            //nguyenvanduocit
            a2 = Math.pow(Math.min(64 / a, 1), .4) * Vb2();
            m = (9 * m + a) / 10;
            //@author nguyenvanduocit
            m2 = (9 * m2+ a2) / 10;
        }
    }

    function Ub() {

        //@author nguyenvanduocit
        dPoints = [];
        circles = [];
        dArc = [];
        dText = [];
        lines = [];

        var a, c = Date.now();
        ++Ac;
        I = c;
        if (0 < l.length) {
            zc();
            for (var b = a = 0, d = 0; d < l.length; d++)l[d].K(), a += l[d].x / l.length, b += l[d].y / l.length;
            oa = a;
            pa = b;
            qa = m;
            u = (u + a) / 2;
            v = (v + b) / 2
        } else u = (29 * u + oa) / 30, v = (29 * v + pa) / 30, m = (9 * m + qa * Vb()) / 10;
        pc();
        Wa();
        rb || f.clearRect(0, 0, p, q);
        rb ? (f.fillStyle = Oa ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, p, q), f.globalAlpha = 1) : Bc();
        x.sort(function (a, c) {
            return a.size == c.size ? a.id - c.id : a.size - c.size
        });
        f.save();
        f.translate(p / 2, q / 2);
        f.scale(m, m);
        f.translate(-u,
            -v);
        for (d = 0; d < da.length; d++)da[d].p(f);
        for (d = 0; d < x.length; d++)x[d].p(f);
        /**
         * @author nguyenvanduocit
         */
        AgarBot.pubsub.trigger('main_out:mainloop');
        customRender(f);
        if (jb) {
            Ha = (3 * Ha + hb) / 4;
            Ia = (3 * Ia + ib) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < l.length; d++)f.moveTo(l[d].x, l[d].y), f.lineTo(Ha, Ia);
            f.stroke();
            f.restore()
        }
        f.restore();
        F && F.width && f.drawImage(F, p - F.width - 10, 10);
        O = Math.max(O, Wb());
        0 != O && (null == Pa && (Pa = new Qa(24, "#FFFFFF")), Pa.r(U("score") + ": " + ~~(O / 100)), b = Pa.D(), a = b.width, f.globalAlpha = .2, f.fillStyle =
            "#000000", f.fillRect(10, q - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(b, 15, q - 10 - 24 - 5));
        Cc();
        c = Date.now() - c;
        c > 1E3 / 60 ? J -= .01 : c < 1E3 / 65 && (J += .01);
        .4 > J && (J = .4);
        1 < J && (J = 1);
        c = I - Xb;
        !fa() || ka || aa ? (w += c / 2E3, 1 < w && (w = 1)) : (w -= c / 300, 0 > w && (w = 0));
        0 < w ? (f.fillStyle = "#000000", Yb ? (f.globalAlpha = w, f.fillRect(0, 0, p, q), H.complete && H.width && (H.width / H.height < p / q ? (c = p, a = H.height * p / H.width) : (c = H.width * q / H.height, a = q), f.drawImage(H, (p - c) / 2, (q - a) / 2, c, a), f.globalAlpha = .5 * w, f.fillRect(0, 0, p, q))) : (f.globalAlpha = .5 * w, f.fillRect(0,
            0, p, q)), f.globalAlpha = 1) : Yb = !1;
        Xb = I
    }
    //@author nguyenvanduocit
    function customRender(d) {
        d.save();
        for (var i = 0; i < lines.length; i++) {
            d.beginPath();

            d.lineWidth = 5;

            if (lines[i][4] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (lines[i][4] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (lines[i][4] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (lines[i][4] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (lines[i][4] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (lines[i][4] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (lines[i][4] == 6) {
                d.strokeStyle = "#008080";
            } else if (lines[i][4] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }

            d.moveTo(lines[i][0], lines[i][1]);
            d.lineTo(lines[i][2], lines[i][3]);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < circles.length; i++) {
            if (circles[i][3] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (circles[i][3] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (circles[i][3] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (circles[i][3] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (circles[i][3] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (circles[i][3] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (circles[i][3] == 6) {
                d.strokeStyle = "#008080";
            } else if (circles[i][3] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }
            d.beginPath();

            d.lineWidth = 10;
            //d.setLineDash([5]);
            d.globalAlpha = 0.3;

            d.arc(circles[i][0], circles[i][1], circles[i][2], 0, 2 * Math.PI, false);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < dArc.length; i++) {
            if (dArc[i][7] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (dArc[i][7] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (dArc[i][7] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (dArc[i][7] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (dArc[i][7] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (dArc[i][7] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (dArc[i][7] == 6) {
                d.strokeStyle = "#008080";
            } else if (dArc[i][7] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }

            d.beginPath();

            d.lineWidth = 5;

            var ang1 = Math.atan2(dArc[i][1] - dArc[i][5], dArc[i][0] - dArc[i][4]);
            var ang2 = Math.atan2(dArc[i][3] - dArc[i][5], dArc[i][2] - dArc[i][4]);

            d.arc(dArc[i][4], dArc[i][5], dArc[i][6], ang1, ang2, false);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < dPoints.length; i++) {
            if (dText[i] == "") {
                var radius = 10;

                d.beginPath();
                d.arc(dPoints[i][0], dPoints[i][1], radius, 0, 2 * Math.PI, false);

                if (dPoints[i][2] == 0) {
                    d.fillStyle = "black";
                } else if (dPoints[i][2] == 1) {
                    d.fillStyle = "yellow";
                } else if (dPoints[i][2] == 2) {
                    d.fillStyle = "blue";
                } else if (dPoints[i][2] == 3) {
                    d.fillStyle = "red";
                } else if (dPoints[i][2] == 4) {
                    d.fillStyle = "#008080";
                } else if (dPoints[i][2] == 5) {
                    d.fillStyle = "#FF69B4";
                } else {
                    d.fillStyle = "#000000";
                }

                d.fill();
                d.lineWidth = 2;
                d.strokeStyle = '#003300';
                d.stroke();
            } else {
                //nguyenvanduocit
                var text = new Qa(18, (getDarkBool() ? '#F2FBFF' : '#111111'), true, (getDarkBool() ? '#111111' : '#F2FBFF'));
                text.r(dText[i]);
                var textRender = text.D();
                d.drawImage(textRender, dPoints[i][0] - (textRender.width / 2), dPoints[i][1] - (textRender.height / 2));
            }

        }
        d.restore();
    }
    function Bc() {
        f.fillStyle = Oa ? "#111111" : "#F2FBFF";
        f.fillRect(0, 0, p, q);
        f.save();
        f.strokeStyle = Oa ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * m;
        for (var a = p / m, c = q / m, b = (-u + a / 2) % 50; b < a; b += 50)f.beginPath(), f.moveTo(b * m - .5, 0), f.lineTo(b * m - .5, c * m), f.stroke();
        for (b = (-v + c / 2) % 50; b < c; b += 50)f.beginPath(), f.moveTo(0, b * m - .5), f.lineTo(a * m, b * m - .5), f.stroke();
        f.restore()
    }

    function Cc() {
        if (Ab && sb.width) {
            var a = p / 5;
            f.drawImage(sb, 5, 5, a, a)
        }
    }

    function Wb() {
        for (var a = 0, c = 0; c < l.length; c++)a += l[c].e * l[c].e;
        return a
    }

    function Nb() {
        F = null;
        if (null != G || 0 != A.length)if (null != G || Ra) {
            F = document.createElement("canvas");
            var a = F.getContext("2d"), c = 60, c = null == G ? c + 24 * A.length : c + 180, b = Math.min(200, .3 * p) / 200;
            F.width = 200 * b;
            F.height = c * b;
            a.scale(b, b);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, c);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            b = null;
            b = U("leaderboard");
            a.font = "30px Ubuntu";
            a.fillText(b, 100 - a.measureText(b).width / 2, 40);
            if (null == G)for (a.font = "20px Ubuntu", c = 0; c < A.length; ++c)b = A[c].name || U("unnamed_cell"),
            Ra || (b = U("unnamed_cell")), -1 != E.indexOf(A[c].id) ? (l[0].name && (b = l[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", b = c + 1 + ". " + b, a.fillText(b, 100 - a.measureText(b).width / 2, 70 + 24 * c); else for (c = b = 0; c < G.length; ++c) {
                var d = b + G[c] * Math.PI * 2;
                a.fillStyle = Dc[c + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, b, d, !1);
                a.fill();
                b = d
            }
        }
    }

    function Ec(a) {
        if (null == a || 0 == a.length)return null;
        if ("%" == a[0]) {
            if (!d.MC || !d.MC.getSkinInfo)return null;
            a = d.MC.getSkinInfo("skin_" + a.slice(1));
            if (null == a)return null;
            for (a = (+a.color).toString(16); 6 > a.length;)a = "0" + a;
            return "#" + a
        }
        return null
    }

    function Fc(a) {
        if (null == a || 0 == a.length)return null;
        if (!sa.hasOwnProperty(a)) {
            var c = new Image;
            if (":" == a[0])c.src = a.slice(1); else if ("%" == a[0]) {
                if (!d.MC || !d.MC.getSkinInfo)return null;
                var b = d.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == b)return null;
                c.src = d.ASSETS_ROOT + "skins/premium/" + b.url
            }
            sa[a] = c
        }
        return 0 != sa[a].width && sa[a].complete ? sa[a] : null
    }

    function tb(a, c, b, d, e) {
        this.Q = a;
        this.x = c;
        this.y = b;
        this.d = d;
        this.b = e
    }
    //nguyenvanduocit
    //function Cell(id, x, y, size, color, name)
    function ea(a, c, b, d, e, f) {
        this.id = a;
        this.l = this.x = c;
        this.m = this.y = b;
        this.k = this.size = d;
        this.color = e;
        this.a = [];
        this.R();
        this.q(f)
    }

    function xc(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Qa(a, c, b, d) {
        a && (this.n = a);
        c && (this.N = c);
        this.P = !!b;
        d && (this.o = d)
    }

    function Gc(a) {
        for (var c = a.length, b, d; 0 < c;)d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b
    }

    function Hc() {
        h = ub
    }

    function Zb(a) {
        h.context = "google" == a ? "google" : "facebook";
        Sa()
    }

    function Sa() {
        d.localStorage[Z] = JSON.stringify(h);
        h = JSON.parse(d.localStorage[Z]);
        d.storageInfo = h;
        "google" == h.context ? (e("#gPlusShare").show(), e("#fbShare").hide()) : (e("#gPlusShare").hide(), e("#fbShare").show())
    }

    function $b(a) {
        e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        e("#helloContainer").attr("data-logged-in", "1");
        e(".agario-profile-panel .progress-bar-star").text(a.level);
        e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP");
        e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%");
        e(".agario-profile-name").text(a.name);
        e(".agario-profile-picture").attr("src", a.picture);
        e("#instructions").show()
    }

    function ra(a, c) {
        var b = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        h.userInfo.xp = a.xp;
        h.userInfo.xpNeeded = a.xpNeeded;
        h.userInfo.level = a.level;
        Sa();
        if (b) {
            var $ = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], b = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], g = e(".agario-profile-panel .progress-bar-star").first().text();
            if (g != a.level)ra({xp: b, xpNeeded: b, level: g}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    ra({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        ra(a, null)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), k = function () {
                    var b;
                    b = (Date.now() - f) / 1E3;
                    b = 0 > b ? 0 : 1 < b ? 1 : b;
                    b = b * b * (3 - 2 * b);
                    e(".agario-exp-bar .progress-bar-text").text(~~($ + (a.xp - $) * b) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * ($ + (a.xp - $) * b) / a.xpNeeded).toFixed(2) + "%");
                    c && c();
                    1 > b && d.requestAnimationFrame(k)
                };
                d.requestAnimationFrame(k)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level),
            e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%")
    }

    function ac() {
        "none" == e("#settings").css("display") && "none" == e("#socialLoginContainer").css("display") && e("#instructions").show()
    }

    function bc(a) {
        if ("connected" == a.status) {
            var c = a.authResponse.accessToken;
            null == c || "undefined" == c || "" == c ? (3 > cc && (cc++, d.facebookRelogin()), d.logout()) : (d.MC.doLoginWithFB(c), d.FB.api("/me/picture?width=180&height=180", function (a) {
                h.userInfo.picture = a.data.url;
                d.updateStorage();
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), h.context = "facebook", h.loginIntent = "1", d.updateStorage(), null != z ? d.checkSocialAPIToken(a) : d.getSocialAPIToken("facebookLogin", c))
        }
    }

    function Gb(a) {
        la(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        vb("#" + d.encodeURIComponent(a));

        e.ajax(ja + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (c) {
                c = c.split("\n");
                e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                e("#helloContainer").attr("data-party-state", "5");
                la(":party");
                fb("ws://" + c[0], a)
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })

    }

    function vb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function wc(a, c) {
        var b = -1 != E.indexOf(a.id), d = -1 != E.indexOf(c.id), e = 30 > c.size;
        b && e && ++mb;
        e || !b || d || c.U & 32 || ++Na
    }

    function dc(a) {
        a = ~~a;
        var c = (a % 60).toString();
        a = (~~(a /
        60)).toString();
        2 > c.length && (c = "0" + c);
        return a + ":" + c
    }

    function Ic() {
        if (null == A)return 0;
        for (var a = 0; a < A.length; ++a)if (-1 != E.indexOf(A[a].id))return a + 1;
        return 0
    }

    function Jc() {
        e(".stats-food-eaten").text(mb);
        e(".stats-time-alive").text(dc((qb - ob) / 1E3));
        e(".stats-leaderboard-time").text(dc(pb));
        e(".stats-highest-mass").text(~~(O / 100));
        e(".stats-cells-eaten").text(Na);
        e(".stats-top-position").text(0 == Y ? ":(" : Y);
        var a = document.getElementById("statsGraph");
        if (a) {
            var c = a.getContext("2d"), b = a.width, a = a.height;
            c.clearRect(0, 0, b, a);
            if (2 < B.length) {
                for (var d = 200, g = 0; g < B.length; g++)d = Math.max(B[g], d);
                c.lineWidth = 3;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.strokeStyle = nb;
                c.fillStyle = nb;
                c.beginPath();
                c.moveTo(0, a - B[0] / d * (a - 10) + 10);
                for (g = 1; g < B.length; g += Math.max(~~(B.length / b), 1)) {
                    for (var f = g / (B.length - 1) * b, k = [], h = -20; 20 >= h; ++h)0 > g + h || g + h >= B.length || k.push(B[g + h]);
                    k = k.reduce(function (a, c) {
                            return a + c
                        }) / k.length / d;
                    c.lineTo(f, a - k * (a - 10) + 10)
                }
                c.stroke();
                c.globalAlpha = .5;
                c.lineTo(b, a);
                c.lineTo(0, a);
                c.fill();
                c.globalAlpha =
                    1
            }
        }
    }

    function yc() {
        if (!ka && !aa)if (ec) {
            ab(s.ab);
            Jc();
            aa = !0;
            e("#overlays").fadeIn(3E3);
            e("#stats").show();
            var a = fc("g_plus_share_stats");
            d.fillSocialValues(a, "gPlusShare")
        } else wa(3E3)
    }

    function fc(a) {
        var c = e(".stats-time-alive").text();
        return d.parseString(a, "%@", [c.split(":")[0], c.split(":")[1], e(".stats-highest-mass").text()])
    }

    function Kc() {
        d.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (d.screenX +
            d.innerWidth / 2 - 242) + ",top=" + (d.innerHeight - 580) / 2)
    }

    var D = {};
    (function () {
        var a = d.location.search;
        "?" == a.charAt(0) && (a = a.slice(1));
        for (var a = a.split("&"), c = 0; c < a.length; c++) {
            var b = a[c].split("=");
            D[b[0]] = b[1]
        }
    })();
    "fb" in D || "miniclip" in D || "http:" == d.location.protocol || (d.location.href = "http:" + d.location.href.substring(d.location.protocol.length));
    d.MC = function () {
    };
    if (void 0 != d.EnvConfig) {
        var y = d.EnvConfig;
        d.EnvConfig = y
    }
    if (!d.agarioNoInit) {
        var wb = d.location.protocol, gb = "https:" == wb;
        D.master && (y.master_url =
            D.master);
        var ja = wb + "//" + y.master_url + "/", Ta = d.navigator.userAgent;
        if (-1 != Ta.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Ta.indexOf("iPhone") || -1 != Ta.indexOf("iPad") || -1 != Ta.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            var K = {};
            d.agarApp = K;
            //@author nguyenvanduocit
            var m2 = 1,
                toggle = false,
                toggleDraw = false,
                shootTime = 0,
                splitTime = 0,
                shootCooldown = 100,
                splitCooldown = 100,
                tempPoint = [0, 0, 1],
                dPoints = [],
                circles = [],
                dArc = [],
                dText = [],
                lines = [],
                names = ["Agar.SenViet.org"],
                firstStart = true;
                originalName = names[Math.floor(Math.random() * names.length)],
                sessionScore = 0,
                serverIP = "",
                token = "",
                interNodes = [],
                lifeTimer = new Date(),
                bestTime = 0,
                botIndex = 0,
                reviving = false,
                message = [];

            var Va, f, Q, p, q, ia = null, r = null, u = 0, v = 0, E = [], l = [], N = {}, x = [], da = [], A = [], ua = 0, va = 0, Ba = -1, Ca = -1, Ac = 0, I = 0, Xb = 0, M = null, Ja = 0, Ka = 0, La = 1E4, Ma = 1E4, m = 1, C = null, gc = !0, Ra = !0, xb = !1, lb = !1, O = 0, Oa = !1, hc = !1, oa = u = ~~((Ja + La) / 2), pa = v = ~~((Ka + Ma) / 2), qa = 1, ma = "", G = null, Ua = !1, jb = !1, hb = 0, ib = 0, Ha = 0, Ia = 0, Dc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], rb = !1, na = !1, Pb = 0, z = null, T = 1, w = 1, ka = !1, Xa = 0, Yb = !0, kb = null, Ob = !1, H = new Image;
            H.src = "/img/background.png";
            var Ab = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent),
                sb = new Image;
            sb.src = "/img/split.png";
            var ic = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == ic || null == ic.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var Da = null;
                d.setNick = function (a) {
                    // @author nguyenvanduocit
                    firstStart = false;
                    originalName = a;
                    if (getPlayer().length == 0) {
                        lifeTimer = new Date();
                    }

                    d.ga && d.ga("send", "event", "Nick", a.toLowerCase());
                    Hb();
                    M = a;
                    Qb();
                    O = 0
                };
                d.setRegion = xa;
                var $a = !0;
                d.setSkins = function (a) {
                    gc = a
                };
                d.setNames = function (a) {
                    Ra = a
                };
                d.setDarkTheme = function (a) {
                    Oa = a
                };
                d.setColors = function (a) {
                    xb = a
                };
                d.setShowMass = function (a) {
                    hc = a
                };
                d.spectate = function () {
                    M = null;
                    L(1);
                    Hb()
                };
                d.setGameMode = function (a) {
                    a != ma && (":party" == ma && e("#helloContainer").attr("data-party-state", "0"), la(a), ":party" != a && R())
                };
                d.setAcid = function (a) {
                    rb = a
                };
                e.get(wb + "//gc.agar.io", function (a) {
                    var c = a.split(" ");
                    a = c[0];
                    c = c[1] || "";
                    -1 == ["UA"].indexOf(a) && jc.push("ussr");
                    ta.hasOwnProperty(a) && ("string" == typeof ta[a] ? C || xa(ta[a]) : ta[a].hasOwnProperty(c) && (C || xa(ta[a][c])))
                }, "text");
                var Fb = function (a) {
                    return a in D ? +D[a] : null != d.localStorage ? (null == d.localStorage[a] && (d.localStorage[a] = 0 + ~~(100 * Math.random())), +d.localStorage[a]) : 0
                }, S = "debugads" in D, ya = {}, eb = !0, rc = 0, Ib = !1, s = {aa: [], ab: [], ac: []};
                d.adSlots = s;
                d.getABGroup = bb;
                d.refreshAd = ab;
                var za = {w: !1};
                d.agarAdModule = za;
                var cb = !1, db = null, ca = function (a) {
                    a.defineSlot = function (a, b, e) {
                        var g = d.googletag;
                        return {type: "dfpads", data: g.defineSlot(a, b, e).addService(g.pubads())}
                    };
                    return a
                }({});
                d.googleAdsModule = ca;
                var Za = function (a) {
                    for (var c = 0; c < a.length; c++)"type" in a[c] && "rubicon" != a[c].type || (S && console.log("Rubicon: destroying:" + a[c].data.id, a[c]), ba.Y(a[c].data.id))
                }, ba = function (a) {
                    a.F = function (a, b, d) {
                        var e = "https:" == document.location.protocol ? "https:" : "http:";
                        b = b.split("x");
                        var f = a + "-fif", k = document.createElement("iframe");
                        k.style.cssText = "width: " + b[0] + "px; height: " + b[1] + "px; border: 0; margin: 0; padding: 0; overflow: hidden;";
                        k.setAttribute("scrolling", "no");
                        k.src = "about:blank";
                        k.id = f;
                        document.getElementById(a).appendChild(k);
                        a = k.contentWindow ? k.contentWindow.document : k.contentDocument.document;
                        a.open().write("<html>\n<head>\n<script type='text/javascript'>inDapIF=true;\n\x3c/script>\n</head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Smart Tag --\x3e\n<script type='text/javascript'>\nrp_account = '" + d.acct + "';\nrp_site = '" + d.site + "';\nrp_zonesize  = '" + d.zone + "-" + d.size + "';\nrp_adtype = 'js';\nrp_kw = '" + d.kw + "';\nrp_visitor = " + d.visitor + ";\nrp_inventory = " + d.inventory + ";\n\x3c/script>\n<script type='text/javascript' src= " +
                            e + "//ads.rubiconproject.com/ad/" + d.acct + '.js">\x3c/script>\n</body>\n</html>');
                        a.close()
                    };
                    a.defineSlot = function (a, b, f) {
                        b = {type: "rubicon", data: {id: f, size: b}};
                        a = e.extend({}, a);
                        a.kw = d.rpx_params.kw;
                        a.visitor = JSON.stringify(d.rpx_params.visitor);
                        a.inventory = JSON.stringify(d.rpx_params.inventory);
                        b.data.json = a;
                        return b
                    };
                    a.ya = function (a, b, d) {
                        var g = a + "-fif", f = e("#" + g);
                        null != f ? f.remove() : console.log("couldn't find element", f, g);
                        this.F(a, b, d)
                    };
                    a.Y = function (a) {
                        a += "-fif";
                        var b = e("#" + a);
                        null != b ? b.remove() : console.log("couldn't find element", b, a)
                    };
                    a.za = function (a, b, d) {
                        this.F(a, b, d)
                    };
                    return a
                }({});
                d.rubiconAds = ba;
                var ta = {
                    AF: "JP-Tokyo",
                    AX: "EU-London",
                    AL: "EU-London",
                    DZ: "EU-London",
                    AS: "SG-Singapore",
                    AD: "EU-London",
                    AO: "EU-London",
                    AI: "US-Atlanta",
                    AG: "US-Atlanta",
                    AR: "BR-Brazil",
                    AM: "JP-Tokyo",
                    AW: "US-Atlanta",
                    AU: "SG-Singapore",
                    AT: "EU-London",
                    AZ: "JP-Tokyo",
                    BS: "US-Atlanta",
                    BH: "JP-Tokyo",
                    BD: "JP-Tokyo",
                    BB: "US-Atlanta",
                    BY: "EU-London",
                    BE: "EU-London",
                    BZ: "US-Atlanta",
                    BJ: "EU-London",
                    BM: "US-Atlanta",
                    BT: "JP-Tokyo",
                    BO: "BR-Brazil",
                    BQ: "US-Atlanta",
                    BA: "EU-London",
                    BW: "EU-London",
                    BR: "BR-Brazil",
                    IO: "JP-Tokyo",
                    VG: "US-Atlanta",
                    BN: "JP-Tokyo",
                    BG: "EU-London",
                    BF: "EU-London",
                    BI: "EU-London",
                    KH: "JP-Tokyo",
                    CM: "EU-London",
                    CA: "US-Atlanta",
                    CV: "EU-London",
                    KY: "US-Atlanta",
                    CF: "EU-London",
                    TD: "EU-London",
                    CL: "BR-Brazil",
                    CN: "CN-China",
                    CX: "JP-Tokyo",
                    CC: "JP-Tokyo",
                    CO: "BR-Brazil",
                    KM: "EU-London",
                    CD: "EU-London",
                    CG: "EU-London",
                    CK: "SG-Singapore",
                    CR: "US-Atlanta",
                    CI: "EU-London",
                    HR: "EU-London",
                    CU: "US-Atlanta",
                    CW: "US-Atlanta",
                    CY: "JP-Tokyo",
                    CZ: "EU-London",
                    DK: "EU-London",
                    DJ: "EU-London",
                    DM: "US-Atlanta",
                    DO: "US-Atlanta",
                    EC: "BR-Brazil",
                    EG: "EU-London",
                    SV: "US-Atlanta",
                    GQ: "EU-London",
                    ER: "EU-London",
                    EE: "EU-London",
                    ET: "EU-London",
                    FO: "EU-London",
                    FK: "BR-Brazil",
                    FJ: "SG-Singapore",
                    FI: "EU-London",
                    FR: "EU-London",
                    GF: "BR-Brazil",
                    PF: "SG-Singapore",
                    GA: "EU-London",
                    GM: "EU-London",
                    GE: "JP-Tokyo",
                    DE: "EU-London",
                    GH: "EU-London",
                    GI: "EU-London",
                    GR: "EU-London",
                    GL: "US-Atlanta",
                    GD: "US-Atlanta",
                    GP: "US-Atlanta",
                    GU: "SG-Singapore",
                    GT: "US-Atlanta",
                    GG: "EU-London",
                    GN: "EU-London",
                    GW: "EU-London",
                    GY: "BR-Brazil",
                    HT: "US-Atlanta",
                    VA: "EU-London",
                    HN: "US-Atlanta",
                    HK: "JP-Tokyo",
                    HU: "EU-London",
                    IS: "EU-London",
                    IN: "JP-Tokyo",
                    ID: "JP-Tokyo",
                    IR: "JP-Tokyo",
                    IQ: "JP-Tokyo",
                    IE: "EU-London",
                    IM: "EU-London",
                    IL: "JP-Tokyo",
                    IT: "EU-London",
                    JM: "US-Atlanta",
                    JP: "JP-Tokyo",
                    JE: "EU-London",
                    JO: "JP-Tokyo",
                    KZ: "JP-Tokyo",
                    KE: "EU-London",
                    KI: "SG-Singapore",
                    KP: "JP-Tokyo",
                    KR: "JP-Tokyo",
                    KW: "JP-Tokyo",
                    KG: "JP-Tokyo",
                    LA: "JP-Tokyo",
                    LV: "EU-London",
                    LB: "JP-Tokyo",
                    LS: "EU-London",
                    LR: "EU-London",
                    LY: "EU-London",
                    LI: "EU-London",
                    LT: "EU-London",
                    LU: "EU-London",
                    MO: "JP-Tokyo",
                    MK: "EU-London",
                    MG: "EU-London",
                    MW: "EU-London",
                    MY: "JP-Tokyo",
                    MV: "JP-Tokyo",
                    ML: "EU-London",
                    MT: "EU-London",
                    MH: "SG-Singapore",
                    MQ: "US-Atlanta",
                    MR: "EU-London",
                    MU: "EU-London",
                    YT: "EU-London",
                    MX: "US-Atlanta",
                    FM: "SG-Singapore",
                    MD: "EU-London",
                    MC: "EU-London",
                    MN: "JP-Tokyo",
                    ME: "EU-London",
                    MS: "US-Atlanta",
                    MA: "EU-London",
                    MZ: "EU-London",
                    MM: "JP-Tokyo",
                    NA: "EU-London",
                    NR: "SG-Singapore",
                    NP: "JP-Tokyo",
                    NL: "EU-London",
                    NC: "SG-Singapore",
                    NZ: "SG-Singapore",
                    NI: "US-Atlanta",
                    NE: "EU-London",
                    NG: "EU-London",
                    NU: "SG-Singapore",
                    NF: "SG-Singapore",
                    MP: "SG-Singapore",
                    NO: "EU-London",
                    OM: "JP-Tokyo",
                    PK: "JP-Tokyo",
                    PW: "SG-Singapore",
                    PS: "JP-Tokyo",
                    PA: "US-Atlanta",
                    PG: "SG-Singapore",
                    PY: "BR-Brazil",
                    PE: "BR-Brazil",
                    PH: "JP-Tokyo",
                    PN: "SG-Singapore",
                    PL: "EU-London",
                    PT: "EU-London",
                    PR: "US-Atlanta",
                    QA: "JP-Tokyo",
                    RE: "EU-London",
                    RO: "EU-London",
                    RU: "RU-Russia",
                    RW: "EU-London",
                    BL: "US-Atlanta",
                    SH: "EU-London",
                    KN: "US-Atlanta",
                    LC: "US-Atlanta",
                    MF: "US-Atlanta",
                    PM: "US-Atlanta",
                    VC: "US-Atlanta",
                    WS: "SG-Singapore",
                    SM: "EU-London",
                    ST: "EU-London",
                    SA: "EU-London",
                    SN: "EU-London",
                    RS: "EU-London",
                    SC: "EU-London",
                    SL: "EU-London",
                    SG: "JP-Tokyo",
                    SX: "US-Atlanta",
                    SK: "EU-London",
                    SI: "EU-London",
                    SB: "SG-Singapore",
                    SO: "EU-London",
                    ZA: "EU-London",
                    SS: "EU-London",
                    ES: "EU-London",
                    LK: "JP-Tokyo",
                    SD: "EU-London",
                    SR: "BR-Brazil",
                    SJ: "EU-London",
                    SZ: "EU-London",
                    SE: "EU-London",
                    CH: "EU-London",
                    SY: "EU-London",
                    TW: "JP-Tokyo",
                    TJ: "JP-Tokyo",
                    TZ: "EU-London",
                    TH: "JP-Tokyo",
                    TL: "JP-Tokyo",
                    TG: "EU-London",
                    TK: "SG-Singapore",
                    TO: "SG-Singapore",
                    TT: "US-Atlanta",
                    TN: "EU-London",
                    TR: "TK-Turkey",
                    TM: "JP-Tokyo",
                    TC: "US-Atlanta",
                    TV: "SG-Singapore",
                    UG: "EU-London",
                    UA: "EU-London",
                    AE: "EU-London",
                    GB: "EU-London",
                    US: "US-Atlanta",
                    UM: "SG-Singapore",
                    VI: "US-Atlanta",
                    UY: "BR-Brazil",
                    UZ: "JP-Tokyo",
                    VU: "SG-Singapore",
                    VE: "BR-Brazil",
                    VN: "JP-Tokyo",
                    WF: "SG-Singapore",
                    EH: "EU-London",
                    YE: "JP-Tokyo",
                    ZM: "EU-London",
                    ZW: "EU-London"
                }, V = null;
                d.connect = fb;
                var Ga = 500, Sb = -1, Tb = -1;
                d.refreshPlayerInfo = function () {
                    L(253)
                };
                var F = null, J = 1, Pa = null, Db = function () {
                    var a = Date.now(), c = 1E3 / 60;
                    return function () {
                        d.requestAnimationFrame(Db);
                        var b = Date.now(), e = b - a;
                        e > c && (a = b - e % c, !fa() || 240 > Date.now() - Pb ? Ub() : console.warn("Skipping draw"), Lc())
                    }
                }(), ga = {}, jc = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), Mc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), sa = {};
                tb.prototype = {Q: null, x: 0, y: 0, d: 0, b: 0};
                ea.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    i: null,
                    I: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    l: 0,
                    m: 0,
                    k: 0,
                    B: 0,
                    C: 0,
                    e: 0,
                    U: 0,
                    L: 0,
                    Z: 0,
                    u: !1,
                    c: !1,
                    h: !1,
                    M: !0,
                    T: 0,
                    J: null,
                    W: 0,
                    //@author nguyenvanduocit
                    updateCode: 0,
                    danger: false,
                    dangerTimeOut: 0,
                    isNotMoving: function() {
                        return (this.x == this.l && this.y == this.m);
                    },
                    isVirus: function() {
                        return this.c;
                    },
                    getUptimeTime: function() {
                        return this.L;
                    },
                    S: function () {
                        var a;
                        for (a = 0; a < x.length; a++)if (x[a] == this) {
                            x.splice(a, 1);
                            break
                        }
                        delete N[this.id];
                        a = l.indexOf(this);
                        -1 != a && (lb = !0, l.splice(a, 1));
                        a = E.indexOf(this.id);
                        -1 != a && E.splice(a, 1);
                        this.u = !0;
                        0 < this.T && da.push(this)
                    },
                    g: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    q: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Qa(this.g(), "#FFFFFF", !0, "#000000") : this.i.G(this.g()), this.i.r(this.name)
                    },
                    R: function () {
                        for (var a = this.v(); this.a.length > a;) {
                            var c = ~~(Math.random() * this.a.length);
                            this.a.splice(c, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new tb(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)c = ~~(Math.random() * this.a.length), c = this.a[c], this.a.push(new tb(this, c.x, c.y, c.d, c.b))
                    },
                    v: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var c = this.size;
                        this.c || (c *= m);
                        c *= J;
                        return ~~Math.max(c, a)
                    },
                    ka: function () {
                        this.R();
                        for (var a = this.a, c = a.length, b = 0; b < c; ++b) {
                            var d = a[(b - 1 + c) % c].b, e = a[(b + 1) % c].b;
                            a[b].b += (Math.random() - .5) * (this.h ? 3 : 1);
                            a[b].b *= .7;
                            10 < a[b].b && (a[b].b = 10);
                            -10 > a[b].b && (a[b].b = -10);
                            a[b].b = (d + e + 8 * a[b].b) / 10
                        }
                        for (var f = this, k = this.c ? 0 : (this.id / 1E3 + I / 1E4) % (2 * Math.PI), h = 0, b = 0; b < c; ++b) {
                            var l = a[b].d, d = a[(b - 1 + c) % c].d, e = a[(b + 1) % c].d;
                            if (15 < this.size && null !=
                                ia && 20 < this.size * m && 0 < this.id) {
                                var n = !1, P = a[b].x, p = a[b].y;
                                ia.na(P - 5, p - 5, 10, 10, function (a) {
                                    a.Q != f && 25 > (P - a.x) * (P - a.x) + (p - a.y) * (p - a.y) && (n = !0)
                                });
                                !n && (a[b].x < Ja || a[b].y < Ka || a[b].x > La || a[b].y > Ma) && (n = !0);
                                n && (0 < a[b].b && (a[b].b = 0), a[b].b -= 1)
                            }
                            l += a[b].b;
                            0 > l && (l = 0);
                            l = this.h ? (19 * l + this.size) / 20 : (12 * l + this.size) / 13;
                            a[b].d = (d + e + 8 * l) / 10;
                            d = 2 * Math.PI / c;
                            e = this.a[b].d;
                            this.c && 0 == b % 2 && (e += 5);
                            a[b].x = this.x + Math.cos(d * b + k) * e;
                            a[b].y = this.y + Math.sin(d * b + k) * e;
                            h = Math.max(h, e)
                        }
                        this.W = h
                    },
                    K: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (I - this.L) / 120;
                        a = 0 > a ? 0 : 1 < a ? 1 : a;
                        var c = 0 > a ? 0 : 1 < a ? 1 : a;
                        this.g();
                        if (this.u && 1 <= c) {
                            var b = da.indexOf(this);
                            -1 != b && da.splice(b, 1)
                        }
                        this.x = a * (this.B - this.l) + this.l;
                        this.y = a * (this.C - this.m) + this.m;
                        this.size = c * (this.e - this.k) + this.k;
                        .01 > Math.abs(this.size - this.e) && (this.size = this.e);
                        return c
                    },
                    H: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < u - p / 2 / m || this.y + this.size + 40 < v - q / 2 / m || this.x - this.size - 40 > u + p / 2 / m || this.y - this.size - 40 > v + q / 2 / m ? !1 : !0
                    },
                    p: function (a) {
                        if (this.H()) {
                            ++this.T;
                            var c = 0 < this.id && !this.c && !this.h && .4 > m;
                            5 > this.v() && 0 < this.id && (c = !0);
                            if (this.M && !c)for (var b = 0; b < this.a.length; b++)this.a[b].d = this.size;
                            this.M = c;
                            a.save();
                            this.Z = I;
                            var e = this.K();
                            this.u && (a.globalAlpha *= 1 - e);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            var b = this.name.toLowerCase(), g = null, e = !1, f = this.color;
                            this.h || !gc || Ob || (-1 != jc.indexOf(b) ? (ga.hasOwnProperty(b) || (ga[b] = new Image, ga[b].src = d.ASSETS_ROOT + "skins/" + b + ".png"), g = 0 != ga[b].width && ga[b].complete ? ga[b] : null) : g = null, null != g ? -1 != Mc.indexOf(b) && (e = !0) : (g = Fc(this.J), null != g && (f = Ec(this.J) || f)));
                            xb ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (a.fillStyle = f, a.strokeStyle = f);
                            if (c)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else for (this.ka(), a.beginPath(), f = this.v(), a.moveTo(this.a[0].x, this.a[0].y), b = 1; b <= f; ++b) {
                                var k = b % f;
                                a.lineTo(this.a[k].x, this.a[k].y)
                            }
                            a.closePath();
                            c || a.stroke();
                            a.fill();
                            null != g && (a.save(), a.clip(), b = Math.max(this.size, this.W), a.drawImage(g, this.x - b - 5, this.y - b - 5, 2 * b + 10, 2 * b + 10), a.restore());
                            (xb || 15 < this.size) && !c && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;
                            g = -1 != l.indexOf(this);
                            c = ~~this.y;
                            0 != this.id && (Ra || g) && this.name && this.i && !e && (b = this.i, b.r(this.name), b.G(this.g()), e = 0 >= this.id ? 1 : Math.ceil(10 * m) / 10, b.X(e), b = b.D(), f = Math.ceil(b.width / e), k = Math.ceil(b.height / e), a.drawImage(b, ~~this.x - ~~(f / 2), c - ~~(k / 2), f, k), c += b.height / 2 / e + 4);
                            0 < this.id && hc && (g || 0 == l.length && (!this.c || this.h) && 20 < this.size) && (null == this.I && (this.I = new Qa(this.g() / 2, "#FFFFFF", !0, "#000000")), g = this.I,
                                g.G(this.g() / 2), g.r(~~(this.size * this.size / 100)), e = Math.ceil(10 * m) / 10, g.X(e), b = g.D(), f = Math.ceil(b.width / e), k = Math.ceil(b.height / e), a.drawImage(b, ~~this.x - ~~(f / 2), c - ~~(k / 2), f, k));
                            a.restore()
                        }
                    }
                };
                d.Maths = function (a) {
                    function c(a, c, d) {
                        return a < c ? c : a > d ? d : a
                    }

                    a.ra = function (a, d, e) {
                        e = c(e, 0, 1);
                        return a + e * (d - a)
                    };
                    a.qa = c;
                    return a
                }({});
                Qa.prototype = {
                    t: "", N: "#000000", P: !1, o: "#000000", n: 16, j: null, O: null, f: !1, s: 1, G: function (a) {
                        this.n != a && (this.n = a, this.f = !0)
                    }, X: function (a) {
                        this.s != a && (this.s = a, this.f = !0)
                    }, setStrokeColor: function (a) {
                        this.o !=
                        a && (this.o = a, this.f = !0)
                    }, r: function (a) {
                        a != this.t && (this.t = a, this.f = !0)
                    }, D: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.O = this.j.getContext("2d"));
                        if (this.f) {
                            this.f = !1;
                            var a = this.j, c = this.O, b = this.t, d = this.s, e = this.n, f = e + "px Ubuntu";
                            c.font = f;
                            var k = ~~(.2 * e);
                            a.width = (c.measureText(b).width + 6) * d;
                            a.height = (e + k) * d;
                            c.font = f;
                            c.scale(d, d);
                            c.globalAlpha = 1;
                            c.lineWidth = 3;
                            c.strokeStyle = this.o;
                            c.fillStyle = this.N;
                            this.P && c.strokeText(b, 3, e - k / 2);
                            c.fillText(b, 3, e - k / 2)
                        }
                        return this.j
                    }
                };
                Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                (function () {
                    for (var a = ["ms", "moz", "webkit", "o"], c = 0; c < a.length && !d.requestAnimationFrame; ++c)d.requestAnimationFrame = d[a[c] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[a[c] + "CancelAnimationFrame"] || d[a[c] + "CancelRequestAnimationFrame"];
                    d.requestAnimationFrame || (d.requestAnimationFrame = function (a) {
                        return setTimeout(a, 1E3 / 60)
                    }, d.cancelAnimationFrame = function (a) {
                        clearTimeout(a)
                    })
                })();
                var qc = {
                    init: function (a) {
                        function c(a) {
                            a < d && (a = d);
                            a > f && (a = f);
                            return ~~((a - d) / 32)
                        }

                        function b(a) {
                            a < e && (a = e);
                            a > k && (a = k);
                            return ~~((a - e) / 32)
                        }

                        var d = a.ia, e = a.ja, f = a.fa, k = a.ha, h = ~~((f - d) / 32) + 1, m = ~~((k - e) / 32) + 1, n = Array(h * m);
                        return {
                            ca: function (a) {
                                var d = c(a.x) + b(a.y) * h;
                                null == n[d] ? n[d] = a : Array.isArray(n[d]) ? n[d].push(a) : n[d] = [n[d], a]
                            }, na: function (a, d, e, f, g) {
                                var k = c(a), l = b(d);
                                a = c(a + e);
                                d = b(d + f);
                                if (0 > k || k >= h || 0 > l || l >= m)debugger;
                                for (; l <= d; ++l)for (f = k; f <= a; ++f)if (e = n[f + l * h], null != e)if (Array.isArray(e))for (var t = 0; t < e.length; t++)g(e[t]); else g(e)
                            }
                        }
                    }
                }, Rb = function () {
                    var a = new ea(0,
                        0, 0, 32, "#ED1C24", ""), c = document.createElement("canvas");
                    c.width = 32;
                    c.height = 32;
                    var b = c.getContext("2d");
                    return function () {
                        0 < l.length && (a.color = l[0].color, a.q(l[0].name));
                        b.clearRect(0, 0, 32, 32);
                        b.save();
                        b.translate(16, 16);
                        b.scale(.4, .4);
                        a.p(b);
                        b.restore();
                        var d = document.getElementById("favicon"), e = d.cloneNode(!0);
                        e.setAttribute("href", c.toDataURL("image/png"));
                        d.parentNode.replaceChild(e, d)
                    }
                }();
                e(function () {
                    Rb()
                });
                var Z = "storeObjectInfo", ub = {
                    context: null,
                    defaultProvider: "facebook",
                    loginIntent: "0",
                    userInfo: {
                        socialToken: null,
                        tokenExpires: "",
                        level: "",
                        xp: "",
                        xpNeeded: "",
                        name: "",
                        picture: ""
                    }
                }, h = ub;
                d.storageInfo = h;
                d.createDefaultStorage = Hc;
                d.updateStorage = Sa;
                e(function () {
                    null != d.localStorage[Z] && (h = JSON.parse(d.localStorage[Z]));
                    "1" == h.loginIntent && Zb(h.context);
                    "" != h.userInfo.name && ($b(h.userInfo), null != h.userInfo.socialToken && (z = h.userInfo.socialToken))
                });
                d.checkLoginStatus = function () {
                    "1" == h.loginIntent && Zb(h.context)
                };
                d.logout = function () {
                    h = ub;
                    z = null;
                    kc();
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    e("#gPlusShare").hide();
                    e("#fbShare").show();
                    e("#user-id-tag").text("");
                    delete d.localStorage[Z];
                    d.localStorage[Z] = JSON.stringify(h);
                    R();
                    d.MC.doLogout()
                };
                d.gameServerLogin = function () {
                    "" != h.userInfo.name && d.localStorage[Z] && (Date.now() + 3E4 > 1E3 * h.userInfo.tokenExpires ? (e("#helloContainer").attr("data-logged-in", "0"), d.logout()) : (z = h.userInfo.socialToken, Mb()))
                };
                d.checkSocialAPIToken = function () {
                    e.ajax(ja + "checkToken", {
                        error: function () {
                            z = null;
                            d.logout()
                        }, success: function (a) {
                            h.sa = "1";
                            a = a.split("\n");
                            ra({level: +a[0], xp: +a[1], xpNeeded: +a[2]}, null);
                            d.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: z
                    })
                };
                d.getSocialAPIToken = function (a, c) {
                    null == c || "undefined" == c ? d.logout() : e.ajax(ja + a, {
                        error: function () {
                            z = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        }, success: function (a) {
                            a = a.split("\n");
                            h.userInfo.socialToken = a[2];
                            h.userInfo.tokenExpires = a[3];
                            h.userInfo.level = a[4];
                            h.userInfo.xp = a[5];
                            h.userInfo.xpNeeded = a[6];
                            h.userInfo.name = a[0].split(" ")[0];
                            $b(h.userInfo);
                            Sa();
                            d.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: c
                    })
                };
                d.toggleSocialLogin = function () {
                    e("#socialLoginContainer").toggle();
                    e("#settings").hide();
                    e("#instructions").hide();
                    ac()
                };
                d.toggleSettings = function () {
                    e("#settings").toggle();
                    e("#socialLoginContainer").hide();
                    e("#instructions").hide();
                    ac()
                };
                var cc = 0;
                d.fbAsyncInit = function () {
                    function a() {
                        null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : (h.loginIntent = "1", d.updateStorage(), d.FB.login(function (a) {
                            bc(a)
                        }, {scope: "public_profile, email"}))
                    }

                    d.FB.init({appId: y.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    "1" == d.storageInfo.loginIntent && "facebook" == d.storageInfo.context && d.FB.getLoginStatus(function (c) {
                        "connected" === c.status ? bc(c) : (d.logout(), a())
                    });
                    d.facebookRelogin = a;
                    d.facebookLogin = a
                };
                var yb = !1;
                (function (a) {
                    function c() {
                        var a = document.createElement("script");
                        a.type = "text/javascript";
                        a.async = !0;
                        a.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
                        var b = document.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b);
                        f = !0
                    }

                    var b = {}, f = !1;
                    d.gapiAsyncInit = function () {
                        e(b).trigger("initialized")
                    };
                    a.google = {
                        da: function () {
                            c()
                        }, ba: function (a, b) {
                            d.gapi.client.load("plus", "v1", function () {
                                console.log("fetching me profile");
                                gapi.client.plus.people.get({userId: "me"}).execute(function (a) {
                                    b(a)
                                })
                            })
                        }
                    };
                    a.ma = function (a) {
                        f || c();
                        "undefined" !== typeof gapi ? a() : e(b).bind("initialized", a)
                    };
                    return a
                })(K);
                var Nc = function (a) {
                    function c(a) {
                        null != z ? d.checkSocialAPIToken() : d.getSocialAPIToken("googleLogin", a);
                        d.MC.doLoginWithGPlus(a)
                    }

                    function b(a) {
                        h.userInfo.picture = a;
                        e(".agario-profile-picture").attr("src", a)
                    }

                    var f = null, g = {
                        client_id: y.gplus_client_id,
                        cookie_policy: "single_host_origin",
                        scope: "profile email"
                    };
                    a.V = {
                        Aa: function () {
                            return f
                        }, init: function () {
                            var a = this, b = h && "1" == h.loginIntent && "google" == h.context;
                            K.ma(function () {
                                d.gapi.ytsubscribe.go("agarYoutube");
                                d.gapi.load("auth2", function () {
                                    f = d.gapi.auth2.init(g);
                                    f.attachClickHandler(document.getElementById("gplusLogin"), {}, function (a) {
                                        console.log("googleUser : " + a)
                                    }, function (a) {
                                        console.log("failed to login in google plus: ", JSON.stringify(a, void 0, 2))
                                    });
                                    f.currentUser.listen(_.bind(a.la, a));
                                    b && 1 == f.isSignedIn.get() && f.signIn()
                                })
                            })
                        }, la: function (a) {
                            if (f && a && f.isSignedIn.get() && !yb) {
                                yb = !0;
                                h.loginIntent = "1";
                                var e = a.getAuthResponse(), g = e.access_token;
                                d.pa = e;
                                console.log("loggedIn with G+!");
                                a = a.getBasicProfile().getImageUrl();
                                void 0 == a ? K.google.ba(e, function (a) {
                                    a.result.isPlusUser ? (a && b(a.image.url), c(g)) : (alert("Please add Google+ to your Google account and try again.\nOr you can login with another account."), d.logout())
                                }) : (b(a), c(g));
                                h.context = "google";
                                d.updateStorage()
                            }
                        }, ea: function () {
                            f && (f.signOut(), yb = !1)
                        }
                    };
                    return a
                }(K);
                d.gplusModule = Nc;
                var kc = function () {
                    K.V.ea()
                };
                d.logoutGooglePlus = kc;
                var Lc = function () {
                    function a(a, b, c, d, e) {
                        var f = b.getContext("2d"), g = b.width;
                        b = b.height;
                        a.color = e;
                        a.q(c);
                        a.size = d;
                        f.save();
                        f.translate(g / 2, b / 2);
                        a.p(f);
                        f.restore()
                    }

                    for (var c = new ea(-1, 0, 0, 32, "#5bc0de", ""), b = new ea(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], h = 0; h < d.length; ++h) {
                        var k = h / d.length * 12, m = 30 * Math.sqrt(h / d.length);
                        f.push(new ea(-1, Math.cos(k) * m, Math.sin(k) * m, 10, d[h], ""))
                    }
                    Gc(f);
                    var l = document.createElement("canvas");
                    l.getContext("2d");
                    l.width = l.height = 70;
                    a(b, l, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var b = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(l, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (b = b.attr("data-itr")) && (b = U(b));
                            a(c, this, b || "", +e(this).attr("data-size"), "#5bc0de")
                        });
                        e("#statsPellets").filter(":visible").each(function () {
                            e(this);
                            var b = this.width, c = this.height;
                            this.getContext("2d").clearRect(0, 0, b, c);
                            for (b = 0; b < f.length; b++)a(f[b], this, "", f[b].size, f[b].color)
                        })
                    }
                }();
                d.createParty = function () {
                    la(":party");
                    V = function (a) {
                        vb("/#" + d.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    R()
                };
                d.joinParty = Gb;
                d.cancelParty = function () {
                    vb("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    la("");
                    R()
                };
                var B = [], mb = 0, nb = "#000000", aa = !1, Ea = !1, ob = 0, qb = 0, pb = 0, Na = 0, Y = 0, ec = !0;
                setInterval(function () {
                    Ea && B.push(Wb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = Ic();
                    0 != a && (++pb, 0 == Y && (Y = a), Y = Math.min(Y, a))
                }, 1E3);
                d.closeStats = function () {
                    aa = !1;
                    e("#stats").hide();
                    var a = s.ab;
                    Ya(a);
                    Za(a);
                    wa(0)
                };
                d.setSkipStats = function (a) {
                    ec = !a
                };
                d.getStatsString = fc;
                d.gPlusShare = Kc;
                d.twitterShareStats = function () {
                    var a =
                        d.getStatsString("g_plus_share_stats");
                    d.open("https://twitter.com/intent/tweet?text=" + a, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (d.screenX + d.innerWidth / 2 - 330) + ",top=" + (d.innerHeight - 310) / 2)
                };
                d.fbShareStats = function () {
                    var a = d.getStatsString("fb_matchresults_subtitle");
                    d.FB.ui({
                        method: "feed",
                        display: "iframe",
                        name: U("fb_matchresults_title"),
                        caption: U("fb_matchresults_description"),
                        description: a,
                        link: "http://agar.io",
                        xa: "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png",
                        oa: {name: "play now!", link: "http://agar.io"}
                    })
                };
                d.fillSocialValues = function (a, c) {
                    1 == d.isChrome && "google" == d.storageInfo.context && d.gapi.interactivepost.render(c, {
                        contenturl: y.game_url,
                        clientid: y.gplus_client_id,
                        cookiepolicy: "http://agar.io",
                        prefilltext: a,
                        calltoactionlabel: "BEAT",
                        calltoactionurl: y.game_url
                    })
                };
                e(function () {
                    e(lc);
                    "MAsyncInit" in d && d.MAsyncInit()
                })
            }
        }
    }
    /**
     * Custom function
     * @author nguyenvanduocit
     */
    function computeDistance(x1, y1, x2, y2) {
        var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
        var ydis = y1 - y2;
        var distance = Math.sqrt(xdis * xdis + ydis * ydis);

        return distance;
    }
    window.setPoint = function(x, y) {
        Ba = x;
        Ca = y;
    };
    window.getDarkBool = function() {
        return Oa;
    };
    window.getMapStartX = function() {
        return Ja;
    };
    window.getMapStartY = function() {
        return Ka;
    };
    window.getMapEndY = function() {
        return Ma;
    };
    window.getMapEndX = function() {
        return La;
    };
    /**
     * The game's current mode. (":ffa", ":experimental", ":teams". ":party")
     * @return {[type]} [description]
     */
    window.getMode = function() {
        return ma;
    };
    /**
     * Returns an array with all the player's cells.
     * @return Player's cells
     */
    window.getPlayer = function() {
        return l;
    };
    /**
     * This is a copy of everything that is shown on screen.
     * Normally stuff will time out when off the screen, this
     * memorizes everything that leaves the screen for a little
     * while longer.
     * @return The memory object.
     */
    window.getMemoryCells = function() {
        return interNodes;
    };

    window.splitMe = function(){
        L(17);
    };
    /**
     * [getCellsArray description]
     * @return {[type]} [description]
     */
    window.getCells = function() {
        return N;
    };
    /**
     * A timestamp since the last time the server sent any data.
     * @return Last update timestamp
     */
    window.getLastUpdate = function() {
        return I;
    };
    /**
     * Scaling ratio of the canvas. The bigger this ration,
     * the further that you see.
     * @return Screen scaling ratio.
     */
    window.getRatio = function() {
        return m;
    };
    window.getZoomlessRatio = function() {
        return m2;
    };
    window.getX = function() {
        return u;
    };
    window.getY = function() {
        return v;
    };
    /**
     * The canvas' width.
     * @return Integer Width
     */
    window.getWidth = function() {
        return p;
    };
    /**
     * The canvas' height
     * @return Integer Height
     */
    window.getHeight = function() {
        return q;
    };
    /**
     * A conversion from the screen's horizontal coordinate system
     * to the game's horizontal coordinate system.
     * @param x in the screen's coordinate system
     * @return x in the game's coordinate system
     */
    window.screenToGameX = function(x) {
        return (x - getWidth() / 2) / getRatio() + getX();
    };
    /**
     * The X location of the mouse.
     * @return Integer X
     */
    window.getMouseX = function() {
        return ua;
    };
    /**
     * The Y location of the mouse.
     * @return Integer Y
     */
    window.getMouseY = function() {
        return va;
    };
    window.getPointX = function() {
        return Ba;
    };

    window.getPointY = function() {
        return Ca;
    };
    window.getRegion = function(){
        return C;
    };
    window.sendMessage = function(a){
        X(a);
    };
    window.getCurrentScore = function() {
        return O;
    };
    /**
     * A conversion from the screen's vertical coordinate system
     * to the game's vertical coordinate system.
     * @param y in the screen's coordinate system
     * @return y in the game's coordinate system
     */
    window.screenToGameY = function(y) {
        return (y - getHeight() / 2) / getRatio() + getY();
    };
    window.drawPoint = function(x_1, y_1, drawColor, text) {
        if (!toggleDraw) {
            dPoints.push([x_1, y_1, drawColor]);
            dText.push(text);
        }
    };
    window.drawArc = function(x_1, y_1, x_2, y_2, x_3, y_3, drawColor) {
        if (!toggleDraw) {
            var radius = computeDistance(x_1, y_1, x_3, y_3);
            dArc.push([x_1, y_1, x_2, y_2, x_3, y_3, radius, drawColor]);
        }
    };

    window.drawLine = function(x_1, y_1, x_2, y_2, drawColor) {
        if (!toggleDraw) {
            lines.push([x_1, y_1, x_2, y_2, drawColor]);
        }
    };

    window.drawCircle = function(x_1, y_1, radius, drawColor) {
        if (!toggleDraw) {
            circles.push([x_1, y_1, radius, drawColor]);
        }
    };

    window.verticalDistance = function() {
        return computeDistance(screenToGameX(0), screenToGameY(0), screenToGameX(getWidth()), screenToGameY(getHeight()));
    };
    window.getServer = function() {
        return serverIP;
    };
    window.getOriginalName  =function(){
        return originalName;
    };
    window.getToken = function(){
        return token;
    };
    window.createDataView = function(a) {
        return new DataView(new ArrayBuffer(a))
    };
    window.shoot = function() {
        if (!toggle && shootTime + shootCooldown < new Date().getTime()) {
            shootTime = new Date().getTime();
            sendMessage(21);
        }
    };
    window.split = function() {
        if (!toggle && splitTime + splitCooldown < new Date().getTime()) {
            splitTime = new Date().getTime();
            sendMessage(17);
        }
    }
})(window, window.jQuery, AgarBot, AgarBot.app);
(function (window, $, Backbone, Marionette, _, AgarBot, app) {

    window.getWantedIp = function(){
        var ip = $('#ksIpInput').val();
        if(ip && ip.length > 0){
            return ip;
        }
        else{
            var _GET = parseURLParams(window.location.href);
            if(typeof _GET.ip != 'undefined'){
                return _GET.ip[0];
            }
        }
        return null;
    };
    window.getWantedCode = function(){
        var ip = $('#ksCodeInput').val();
        if(ip.length > 0){
            return ip;
        }
        return null;
    };
    var clanCells = {};
    window.maybePushClanCell =function(cellData){

        for(var i = 0; i<cellData.length; i++){
            clanCells[cellData[i].id] = cellData[i];
            clanCells[cellData[i].id].lastUpdate = Date.now();
        }
        /**
         * Remove some outdate
         */
        Object.keys(clanCells).forEach(function(k, index) {
            if(Date.now() - clanCells[k].lastUpdate > 300){
                delete clanCells[k];
            }
        });
    };
    window.getClanCells=function(){
        return clanCells;
    };

    AgarBot.Views.ClanFormField = Marionette.ItemView.extend({
        initialize:function(){
            this.listenTo(AgarBot.pubsub, 'findServer:retry', this.onRetry);
        },
        onRetry:function(data){
            this.$el.find('#connectionStatus').text('Retry #' + data.time);
        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('clanFormField');
            return template;
        }
    });
    AgarBot.Modules.Clan = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
            this.settings = new Backbone.Model()
        },
        onStart: function (options) {
            console.log('Module Clan start');
            this.listenTo(AgarBot.pubsub,'document.ready', this.onDocumentReady);
        },
        onDocumentReady:function(){
            $('head').append('<script src="http://127.0.0.1:8181/js/client.js"></script>');
            var $joinPartyToken = $('#joinPartyToken');
            $('<div id="clanFormField"></div>').insertBefore($joinPartyToken);
            $joinPartyToken.attr('placeholder', 'Code');
            if(typeof this.clanFormField =='undefined'){
                this.clanFormField = new AgarBot.Views.ClanFormField({
                    el:'#clanFormField',
                    model:this.settings
                });
            }
            this.clanFormField.render();
        }
    });
    app.module("Clan", {
        moduleClass: AgarBot.Modules.Clan
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Modules.MapUtil = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
        },
        onStart: function (options) {
            console.log('Module MapUtil start');
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.drawRound);
        },
        getCanvasContext:function(){
            if(this.canvasContext === 'undefined'){
                console.log('get canvas');
                this.canvas = $("#canvas")[0];
                this.canvasContext = this.canvas.getContext("2d");
            }
            return this.canvasContext;
        },
        drawRound:function(){
            var context = this.getCanvasContext();;
            context.save();
            context.beginPath();
            context.lineWidth = 5;
            context.strokeStyle = (window.getDarkBool() ? '#F2FBFF' : '#111111');
            context.moveTo(window.getMapStartX(), window.getMapStartY());
            context.lineTo(window.getMapStartX(), window.getMapEndY());
            context.stroke();
            context.moveTo(window.getMapStartX(), window.getMapStartY());
            context.lineTo(window.getMapEndX(), window.getMapStartY());
            context.stroke();
            context.moveTo(window.getMapEndX(), window.getMapStartY());
            context.lineTo(window.getMapEndX(), window.getMapEndY());
            context.stroke();
            context.moveTo(window.getMapStartX(), window.getMapEndY());
            context.lineTo(window.getMapEndX(), window.getMapEndY());
            context.stroke();
            context.restore();
        }
    });
    app.module("MapUtil", {
        moduleClass: AgarBot.Modules.MapUtil
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Views.FeedBotPanel = Marionette.ItemView.extend({
        el:'#feedbot-pannel',
        events:{
            'click #feedBotToggle_master':'onMasterToggle',
            'click #feedBotToggle_auto':'onAutoToggle'
        },
        initialize: function (options){
            var self = this;
            this.options = {};
            _.extend(this.options, options);
        },
        onMasterToggle:function(e){
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.master = !this.options.master;
            if(this.options.master)
            {
                target.text('Make slave');
            }else{
                target.text('Make master');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        onAutoToggle:function(e){
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.botEnabled = !this.options.botEnabled;
            if(this.options.botEnabled)
            {
                target.text('Disable Auto');
            }else{
                target.text('Enable auto');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        getTemplate: function () {
            var templateLoader = app.module('TemplateLoader');
            return templateLoader.getTemlate('feedBotPannel');
        }
    });

    AgarBot.Modules.FeedBot = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.isEnable = true;
            this.master  = true;
            this.lastMasterUpdate = Date.now();
            this.botEnabled = true;
            this.prevBotEnabled = this.botEnabled;
            this.masterLocation = [100, 100];
            this.masterId = false;
            this.splitDistance = 710;
            this.toggleFollow = false;
            this.minimumSizeToGoing = 10;
            this.dangerTimeOut = 1500;
            this.situation = 'DANGER';//DANGER, SAFE, ATTACT
            this.stage = 'EAT'; //EAT, SHOOT, RUN
            this.pannelView = new AgarBot.Views.FeedBotPanel({
                isEnable:this.isEnable,
                master:this.master,
                splitDistance:this.splitDistance,
                dangerTimeOut:this.dangerTimeOut,
                botEnabled:this.botEnabled
            });

        },
        onStart: function (options) {
            var self = this;
            this.changeBotEnableStage(true);
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub,'document.ready', this.setDefautlNick);
            this.listenTo(AgarBot.pubsub, 'FeedBotPanel:changeSetting', this.onChangeSetting);
            document.addEventListener("visibilitychange", function(){self.onVisibilitychanged();}, false);
            this.pannelView.render();
        },
        setDefautlNick:function(){
            $('#nick').val("Agar.SenViet.org");
        },
        changeBotEnableStage:function(isEnabled){
            this.botEnabled = isEnabled;
            if(this.botEnabled){
                document.title = 'Agar.io - ' + 'Bot enabled';
            }
            else{
                document.title = 'Agar.io - ' + 'Bot disabled';
            }
        },
        onVisibilitychanged:function(){
            if (document.hidden) {
                this.prevBotEnabled = this.botEnabled;
                this.changeBotEnableStage(true);
            } else  {
                this.changeBotEnableStage(this.prevBotEnabled);
            }
        },
        onChangeSetting:function(options){
            if(typeof options.master !='undefined'){
                this.master = options.master;
            }
            if(typeof options.botEnabled !='undefined'){
                this.changeBotEnableStage(options.botEnabled);
            }
        },
        mainLoop:function(){
            if (getPlayer().length > 0) {
                //DETECT CURRENT SITUATION
                this.detectSitualtion();
                //DECIDE
                this.decide();
            }
        },
        detectSitualtion:function(){
            this.situation = 'SAFE';
            this.stage = 'EAT';
        },
        decide:function(){
            switch (this.stage){
                case 'EAT':
                    var nextPoint = this.getNextPoint();
                    if(this.botEnabled) {
                        setPoint(nextPoint[0], nextPoint[1]);
                    }
                    break;
            }
        },
        calcMass:function(size){
            return ~~(size*size)/100;
        },
        getNextPoint:function(){
            var player = getPlayer();
            var interNodes = getMemoryCells();
            /**
             * toggle all bot, include send master
             */
            if (this.isEnable) {
                //The following code converts the mouse position into an
                //absolute game coordinate.
                var useMouseX = screenToGameX(getMouseX());
                var useMouseY = screenToGameY(getMouseY());
                var tempPoint = [useMouseX, useMouseY, 1];

                //The current destination that the cells were going towards.
                var tempMoveX = getPointX();
                var tempMoveY = getPointY();

                //This variable will be returned at the end.
                //It will contain the destination choices for all the cells.
                //BTW!!! ERROR ERROR ABORT MISSION!!!!!!! READ BELOW -----------
                //
                //SINCE IT'S STUPID NOW TO ASK EACH CELL WHERE THEY WANT TO GO,
                //THE BOT SHOULD SIMPLY PICK ONE AND THAT'S IT, I MEAN WTF....
                var destinationChoices = []; //destination, size, danger

                //Just to make sure the player is alive.
                /**
                 * Toggle is auto run bot ?
                 */
                if ( (player.length > 0) ) {
                    if (!this.master && Date.now() - this.lastMasterUpdate > 1000) {
                        var self = this;
                       /* query.equalTo("server", getServer());
                        query.first().then(function(object) {
                                if (typeof object != 'undefined') {
                                    console.log("Previous Location: " + self.masterLocation);
                                    console.log("Going to: " + object.get("location"));
                                    self.masterLocation = object.get("location");
                                    self.masterLocation = object.get("location");
                                    self.masterId = object.get("cellId");
                                    console.log("Updated Location: " + self.masterLocation);
                                } else {
                                    console.log("No master was found... Let's be the master.");
                                    self.master = true;
                                }
                            },
                            function(error) {
                                console.log("Error: " + error.code + " " + error.message);
                            });*/
                        this.lastMasterUpdate = Date.now();
                    }

                    //Loop through all the player's cells.
                    for (var k = 0; k < player.length; k++) {
                        var text = Math.round( (getLastUpdate() - player[k].birth)/1000) +"s / "+ Math.round(this.calcMass(player[k].size)) + "Mass / "+ this.calcSpeed(player[k].size)+'km/h';
                        if(player.length > 1){

                            text += this.getTimeToRemerge(this.calcMass(player[k].size))+" /s to merge ";
                        }
                        drawPoint(player[k].x, player[k].y + player[k].size, 0, text);
                    }

                    //Loops only for one cell for now.
                    for (var k = 0; /*k < player.length*/ k < 1; k++) {

                        //console.log("Working on blob: " + k);
                        if(this.canSplit(this.calcMass(player[k].size))) {
                            drawCircle(player[k].x, player[k].y, player[k].size + this.splitDistance, 5);
                        }
                        drawPoint(player[0].x, player[0].y - player[0].size, 3, "" + Math.floor(player[0].x) + ", " + Math.floor(player[0].y));

                        //var allDots = processEverything(interNodes);

                        //loop through everything that is on the screen and
                        //separate everything in it's own category.
                        var allIsAll = this.getAll(player[k], this.master);

                        //The food stored in element 0 of allIsAll
                        var allPossibleFood = allIsAll[0];
                        //The threats are stored in element 1 of allIsAll
                        var allPossibleThreats = allIsAll[1];
                        //The viruses are stored in element 2 of allIsAll
                        var allPossibleViruses = allIsAll[2];

                        if (allIsAll[4].length > 0) {
                            console.log("Found my real Master! " + allIsAll[4][0].id);
                            this.masterLocation = [allIsAll[4][0].x, allIsAll[4][0].y]
                        }


                        //The bot works by removing angles in which it is too
                        //dangerous to travel towards to.
                        var badAngles = [];
                        var obstacleList = [];

                        var isSafeSpot = true;
                        var isMouseSafe = true;

                        var clusterAllFood = this.clusterFood(allPossibleFood, player[k].size);

                        //console.log("Looking for enemies!");

                        //Loop through all the cells that were identified as threats.
                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = this.computeDistanceFromCircleEdge(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y, allPossibleThreats[i].size);

                            allPossibleThreats[i].enemyDist = enemyDistance;
                        }

                        allPossibleThreats.sort(function (a, b) {
                            return a.enemyDist - b.enemyDist;
                        });

                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = this.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);

                            var splitDangerDistance = allPossibleThreats[i].size + this.splitDistance + 150;

                            var normalDangerDistance = allPossibleThreats[i].size + 150;

                            var shiftDistance = player[k].size;

                            //console.log("Found distance.");

                            var enemyCanSplit = (this.master ? this.canSplitToEat(player[k], allPossibleThreats[i]) : false);

                            for (var j = clusterAllFood.length - 1; j >= 0 ; j--) {
                                var secureDistance = (enemyCanSplit ? splitDangerDistance : normalDangerDistance);
                                if (this.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, clusterAllFood[j][0], clusterAllFood[j][1]) < secureDistance)
                                    clusterAllFood.splice(j, 1);
                            }

                            //console.log("Removed some food.");

                            if (enemyCanSplit) {
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, splitDangerDistance, 0);
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, splitDangerDistance + shiftDistance, 6);
                            } else {
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, normalDangerDistance, 3);
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, normalDangerDistance + shiftDistance, 6);
                            }

                            if (allPossibleThreats[i].danger && getLastUpdate() - allPossibleThreats[i].dangerTimeOut > this.dangerTimeOut) {
                                allPossibleThreats[i].danger = false;
                            }

                           if ((enemyCanSplit && enemyDistance < splitDangerDistance) ||
                                (!enemyCanSplit && enemyDistance < normalDangerDistance)) {
                                allPossibleThreats[i].danger = true;
                                allPossibleThreats[i].dangerTimeOut = getLastUpdate();
                            }

                            //console.log("Figured out who was important.");

                            if ((enemyCanSplit && enemyDistance < splitDangerDistance) || (enemyCanSplit && allPossibleThreats[i].danger)) {
                                badAngles.push(this.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance).concat(allPossibleThreats[i].enemyDist));
                            } else if ((!enemyCanSplit && enemyDistance < normalDangerDistance) || (!enemyCanSplit && allPossibleThreats[i].danger)) {

                                badAngles.push(this.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance).concat(allPossibleThreats[i].enemyDist));

                            } else if (enemyCanSplit && enemyDistance < splitDangerDistance + shiftDistance) {
                                var tempOb = this.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = this.rangeToAngle(tempOb);

                                obstacleList.push([[angle1, true], [angle2, false]]);
                            } else if (!enemyCanSplit && enemyDistance < normalDangerDistance + shiftDistance) {
                                var tempOb = this.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = this.rangeToAngle(tempOb);

                                obstacleList.push([[angle1, true], [angle2, false]]);
                            }
                            //console.log("Done with enemy: " + i);
                        }

                        //console.log("Done looking for enemies!");

                        var goodAngles = [];
                        var stupidList = [];

                        for (var i = 0; i < allPossibleViruses.length; i++) {
                            if (player[k].size < allPossibleViruses[i].size) {
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, allPossibleViruses[i].size + 10, 3);
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, allPossibleViruses[i].size * 2, 6);

                            } else {
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].size + 50, 3);
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].size * 2, 6);
                            }
                        }

                        for (var i = 0; i < allPossibleViruses.length; i++) {
                            var virusDistance = this.computeDistance(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].x, player[k].y);
                            if (player[k].size < allPossibleViruses[i].size) {
                                if (virusDistance < (allPossibleViruses[i].size * 2)) {
                                    var tempOb = this.getAngleRange(player[k], allPossibleViruses[i], i, allPossibleViruses[i].size + 10);
                                    var angle1 = tempOb[0];
                                    var angle2 = this.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            } else {
                                if (virusDistance < (player[k].size * 2)) {
                                    var tempOb = this.getAngleRange(player[k], allPossibleViruses[i], i, player[k].size + 50);
                                    var angle1 = tempOb[0];
                                    var angle2 = this.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            }
                        }

                        if (badAngles.length > 0) {
                            //NOTE: This is only bandaid wall code. It's not the best way to do it.
                            stupidList = this.addWall(stupidList, player[k]);
                        }

                        for (var i = 0; i < badAngles.length; i++) {
                            var angle1 = badAngles[i][0];
                            var angle2 = this.rangeToAngle(badAngles[i]);
                            stupidList.push([[angle1, true], [angle2, false], badAngles[i][2]]);
                        }

                        //stupidList.push([[45, true], [135, false]]);
                        //stupidList.push([[10, true], [200, false]]);

                        stupidList.sort(function(a, b){
                            //console.log("Distance: " + a[2] + ", " + b[2]);
                            return a[2]-b[2];
                        });

                        //console.log("Added random noob stuff.");

                        var sortedInterList = [];
                        var sortedObList = [];

                        for (var i = 0; i < stupidList.length; i++) {
                            //console.log("Adding to sorted: " + stupidList[i][0][0] + ", " + stupidList[i][1][0]);
                            var tempList = this.addAngle(sortedInterList, stupidList[i]);

                            if (tempList.length == 0) {
                                console.log("MAYDAY IT'S HAPPENING!");
                                break;
                            } else {
                                sortedInterList = tempList;
                            }
                        }

                        for (var i = 0; i < obstacleList.length; i++) {
                            sortedObList = this.addAngle(sortedObList, obstacleList[i]);

                            if (sortedObList.length == 0) {
                                break;
                            }
                        }

                        var offsetI = 0;
                        var obOffsetI = 1;

                        if (sortedInterList.length > 0 && sortedInterList[0][1]) {
                            offsetI = 1;
                        }
                        if (sortedObList.length > 0 && sortedObList[0][1]) {
                            obOffsetI = 0;
                        }

                        var goodAngles = [];
                        var obstacleAngles = [];

                        for (var i = 0; i < sortedInterList.length; i += 2) {
                            var angle1 = sortedInterList[(i + offsetI).mod(sortedInterList.length)][0];
                            var angle2 = sortedInterList[(i + 1 + offsetI).mod(sortedInterList.length)][0];
                            var diff = (angle2 - angle1).mod(360);
                            goodAngles.push([angle1, diff]);
                        }

                        for (var i = 0; i < sortedObList.length; i += 2) {
                            var angle1 = sortedObList[(i + obOffsetI).mod(sortedObList.length)][0];
                            var angle2 = sortedObList[(i + 1 + obOffsetI).mod(sortedObList.length)][0];
                            var diff = (angle2 - angle1).mod(360);
                            obstacleAngles.push([angle1, diff]);
                        }

                        for (var i = 0; i < goodAngles.length; i++) {
                            var line1 = this.followAngle(goodAngles[i][0], player[k].x, player[k].y, 100 + player[k].size);
                            var line2 = this.followAngle((goodAngles[i][0] + goodAngles[i][1]).mod(360), player[k].x, player[k].y, 100 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 1);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 1);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 1);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        for (var i = 0; i < obstacleAngles.length; i++) {
                            var line1 = this.followAngle(obstacleAngles[i][0], player[k].x, player[k].y, 50 + player[k].size);
                            var line2 = this.followAngle((obstacleAngles[i][0] + obstacleAngles[i][1]).mod(360), player[k].x, player[k].y, 50 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 6);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 6);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 6);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        if (!this.master && goodAngles.length == 0 && this.calcMass(player[k].size) > this.minimumSizeToGoing) {
                            //This is the slave mode
                            console.log("Really Going to: " + this.masterLocation);
                            var distance = this.computeDistance(player[k].x, player[k].y, this.masterLocation[0], this.masterLocation[1]);

                            var shiftedAngle = this.shiftAngle(obstacleAngles, this.getAngle(this.masterLocation[0], this.masterLocation[1], player[k].x, player[k].y), [0, 360]);

                            var destination = this.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else if (this.toggleFollow && goodAngles.length == 0) {
                            //This is the follow the mouse mode
                            var distance = this.computeDistance(player[k].x, player[k].y, tempPoint[0], tempPoint[1]);

                            var shiftedAngle = this.shiftAngle(obstacleAngles, this.getAngle(tempPoint[0], tempPoint[1], player[k].x, player[k].y), [0, 360]);

                            var destination = this.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                            tempMoveX = destination[0];
                            tempMoveY = destination[1];

                        } else if (goodAngles.length > 0) {
                            var bIndex = goodAngles[0];
                            var biggest = goodAngles[0][1];
                            for (var i = 1; i < goodAngles.length; i++) {
                                var size = goodAngles[i][1];
                                if (size > biggest) {
                                    biggest = size;
                                    bIndex = goodAngles[i];
                                }
                            }
                            var perfectAngle = (bIndex[0] + bIndex[1] / 2).mod(360);

                            perfectAngle = this.shiftAngle(obstacleAngles, perfectAngle, bIndex);

                            var line1 = this.followAngle(perfectAngle, player[k].x, player[k].y, verticalDistance());

                            destinationChoices = line1;
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 7);
                            tempMoveX = line1[0];
                            tempMoveY = line1[1];
                        } else if (badAngles.length > 0 && goodAngles.length == 0) {
                            //When there are enemies around but no good angles
                            //You're likely screwed. (This should never happen.)

                            console.log("Failed");
                            destinationChoices = [tempMoveX, tempMoveY];
                            var angleWeights = []; //Put weights on the angles according to enemy distance
                            for (var i = 0; i < allPossibleThreats.length; i++) {
                                var dist = this.computeDistance(player[k].x, player[k].y, allPossibleThreats[i].x, allPossibleThreats[i].y);
                                var angle = this.getAngle(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);
                                angleWeights.push([angle, dist]);
                            }
                            var maxDist = 0;
                            var finalAngle = 0;
                            for (var i = 0; i < angleWeights.length; i++) {
                                if (angleWeights[i][1] > maxDist) {
                                    maxDist = angleWeights[i][1];
                                    finalAngle = (angleWeights[i][0] + 180).mod(360);
                                }
                            }
                            var line1 = this.followAngle(finalAngle, player[k].x, player[k].y, f.verticalDistance());
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 2);
                            destinationChoices.push(line1);
                        } else if (clusterAllFood.length > 0) {
                            for (var i = 0; i < clusterAllFood.length; i++) {
                                //console.log("mefore: " + clusterAllFood[i][2]);
                                //This is the cost function. Higher is better.

                                var clusterAngle = this.getAngle(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);

                                clusterAllFood[i][2] = clusterAllFood[i][2] * 6 - this.computeDistance(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);
                                //console.log("Current Value: " + clusterAllFood[i][2]);

                                //(goodAngles[bIndex][1] / 2 - (Math.abs(perfectAngle - clusterAngle)));

                                clusterAllFood[i][3] = clusterAngle;

                                drawPoint(clusterAllFood[i][0], clusterAllFood[i][1], 1, "");
                                //console.log("After: " + clusterAllFood[i][2]);
                            }

                            var bestFoodI = 0;
                            var bestFood = clusterAllFood[0][2];
                            for (var i = 1; i < clusterAllFood.length; i++) {
                                if (bestFood < clusterAllFood[i][2]) {
                                    bestFood = clusterAllFood[i][2];
                                    bestFoodI = i;
                                }
                            }

                            //console.log("Best Value: " + clusterAllFood[bestFoodI][2]);

                            var distance = this.computeDistance(player[k].x, player[k].y, clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1]);

                            var shiftedAngle = this.shiftAngle(obstacleAngles, this.getAngle(clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1], player[k].x, player[k].y), [0, 360]);

                            var destination = this.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            tempMoveX = destination[0];
                            tempMoveY = destination[1];
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else {
                            //If there are no enemies around and no food to eat.
                            destinationChoices = [tempMoveX, tempMoveY];
                        }
                        if(!this.botEnabled){
                            drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], "");
                            //drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], Math.floor(this.computeDistance(tempPoint[0], tempPoint[1], getPointX(), getPointY())));
                            drawLine(tempPoint[0], tempPoint[1], player[0].x, player[0].y, 6);
                            //console.log("Slope: " + slope(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Angle: " + getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Side: " + (getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) - 90).mod(360));
                        }
                        tempPoint[2] = 1;
                        //console.log("Done working on blob: " + i);
                    }

                   //TODO: Find where to go based on destinationChoices.
                    var dangerFound = false;
                    for (var i = 0; i < destinationChoices.length; i++) {
                        if (destinationChoices[i][2]) {
                            dangerFound = true;
                            break;
                        }
                    }
                    destinationChoices.sort(function (a, b) {
                        return b[1] - a[1]
                    });
                    if (dangerFound) {
                        for (var i = 0; i < destinationChoices.length; i++) {
                            if (destinationChoices[i][2]) {
                                tempMoveX = destinationChoices[i][0][0];
                                tempMoveY = destinationChoices[i][0][1];
                                break;
                            }
                        }
                    }
                }
                else{
                    /**
                     * Disable auto run bot
                     * @type {number[]}
                     */
                    destinationChoices = tempPoint;
                }
                //console.log("MOVING RIGHT NOW!");

                //console.log("______Never lied ever in my life.");
                if (this.master) {
                    this.masterLocation = destinationChoices;
                    this.masterId = player[0].id;
                    if (Date.now() - this.lastMasterUpdate > 1000) {
                        var self = this;
                        /*query.equalTo("server", getServer());
                        query.first({
                            success: function(object) {
                                console.log("Done query");
                                if (typeof object != 'undefined') {
                                    object.set("location", destinationChoices);
                                    object.set("cellId", player[0].id);
                                    object.set("server", getServer());
                                    console.log("New location saved! " + object.get("location") + " ID: " + player[0].id + " Server: " + getServer());
                                    object.save();
                                } else {
                                    console.log("We have a problem!");
                                    var ml = new self.MasterLocation();
                                    ml.set("location", destinationChoices);
                                    ml.set("cellId", player[0].id);
                                    ml.set("server", getServer());
                                    console.log("New location saved! " + ml.get("location") + " ID: " + player[0].id + " Server: " + getServer());
                                    ml.save();
                                }
                            },
                            error: function(error) {
                                console.log("Error: " + error.code + " " + error.message);
                            }
                        });*/
                        this.lastMasterUpdate = Date.now();
                    }
                }

                return destinationChoices;
            }
        },
        shiftAngle:function(listToUse, angle, range) {
            //TODO: shiftAngle needs to respect the range! DONE?
            for (var i = 0; i < listToUse.length; i++) {
                if (this.angleIsWithin(angle, listToUse[i])) {
                    //console.log("Shifting needed!");

                    var angle1 = listToUse[i][0];
                    var angle2 = this.rangeToAngle(listToUse[i]);

                    var dist1 = (angle - angle1).mod(360);
                    var dist2 = (angle2 - angle).mod(360);

                    if (dist1 < dist2) {
                        if (this.angleIsWithin(angle1, range)) {
                            return angle1;
                        } else {
                            return angle2;
                        }
                    } else {
                        if (this.angleIsWithin(angle2, range)) {
                            return angle2;
                        } else {
                            return angle1;
                        }
                    }
                }
            }
            //console.log("No Shifting Was needed!");
            return angle;
        },
        calcSpeed:function(size){
            return Math.round(2.2 * Math.pow(size, -0.439)*100);
        },
        angleRangeIsWithinInverted : function(range1, range2) {
            var distanceFrom0 = (range1[0] - range2[0]).mod(360);
            var distanceFrom1 = (range1[1] - range2[0]).mod(360);

            if (distanceFrom0 < range2[1] && distanceFrom1 < range2[1] && distanceFrom0 > distanceFrom1) {
                return true;
            }
            return false;
        },
        computeAngleRanges : function(blob1, blob2) {
            var mainAngle = this.getAngle(blob1.x, blob1.y, blob2.x, blob2.y);
            var leftAngle = (mainAngle - 90).mod(360);
            var rightAngle = (mainAngle + 90).mod(360);

            var blob1Left = this.followAngle(leftAngle, blob1.x, blob1.y, blob1.size);
            var blob1Right = this.followAngle(rightAngle, blob1.x, blob1.y, blob1.size);

            var blob2Left = this.followAngle(rightAngle, blob2.x, blob2.y, blob2.size);
            var blob2Right = this.followAngle(leftAngle, blob2.x, blob2.y, blob2.size);

            var blob1AngleLeft = this.getAngle(blob2.x, blob2.y, blob1Left[0], blob1Left[1]);
            var blob1AngleRight = this.getAngle(blob2.x, blob2.y, blob1Right[0], blob1Right[1]);

            var blob2AngleLeft = this.getAngle(blob1.x, blob1.y, blob2Left[0], blob2Left[1]);
            var blob2AngleRight = this.getAngle(blob1.x, blob1.y, blob2Right[0], blob2Right[1]);

            var blob1Range = (blob1AngleRight - blob1AngleLeft).mod(360);
            var blob2Range = (blob2AngleRight - blob2AngleLeft).mod(360);

            var tempLine = this.followAngle(blob2AngleLeft, blob2Left[0], blob2Left[1], 400);
            //drawLine(blob2Left[0], blob2Left[1], tempLine[0], tempLine[1], 0);

            if ((blob1Range / blob2Range) > 1) {
                drawPoint(blob1Left[0], blob1Left[1], 3, "");
                drawPoint(blob1Right[0], blob1Right[1], 3, "");
                drawPoint(blob1.x, blob1.y, 3, "" + blob1Range + ", " + blob2Range + " R: " + (Math.round((blob1Range / blob2Range) * 1000) / 1000));
            }

            //drawPoint(blob2.x, blob2.y, 3, "" + blob1Range);
        },
        angleIsWithin:function(angle, range) {
            var diff = (this.rangeToAngle(range) - angle).mod(360);
            if (diff >= 0 && diff <= range[1]) {
                return true;
            }
            return false;
        },
        anglePair : function(range) {
            return (range[0] + ", " + this.rangeToAngle(range) + " range: " + range[1]);
        },
        addAngle:function(listToUse, range) {
            //#1 Find first open element
            //#2 Try to add range1 to the list. If it is within other range, don't add it, set a boolean.
            //#3 Try to add range2 to the list. If it is withing other range, don't add it, set a boolean.

            //TODO: Only add the new range at the end after the right stuff has been removed.

            var newListToUse = listToUse.slice();

            var startIndex = 1;

            if (newListToUse.length > 0 && !newListToUse[0][1]) {
                startIndex = 0;
            }

            var startMark = this.getAngleIndex(newListToUse, range[0][0]);
            var startBool = startMark.mod(2) != startIndex;

            var endMark = this.getAngleIndex(newListToUse, range[1][0]);
            var endBool = endMark.mod(2) != startIndex;

            var removeList = [];

            if (startMark != endMark) {
                //Note: If there is still an error, this would be it.
                var biggerList = 0;
                if (endMark == newListToUse.length) {
                    biggerList = 1;
                }

                for (var i = startMark; i < startMark + (endMark - startMark).mod(newListToUse.length + biggerList); i++) {
                    removeList.push((i).mod(newListToUse.length));
                }
            } else if (startMark < newListToUse.length && endMark < newListToUse.length) {
                var startDist = (newListToUse[startMark][0] - range[0][0]).mod(360);
                var endDist = (newListToUse[endMark][0] - range[1][0]).mod(360);

                if (startDist < endDist) {
                    for (var i = 0; i < newListToUse.length; i++) {
                        removeList.push(i);
                    }
                }
            }

            removeList.sort(function(a, b){return b-a;});

            for (var i = 0; i < removeList.length; i++) {
                newListToUse.splice(removeList[i], 1);
            }

            if (startBool) {
                newListToUse.splice(this.getAngleIndex(newListToUse, range[0][0]), 0, range[0]);
            }
            if (endBool) {
                newListToUse.splice(this.getAngleIndex(newListToUse, range[1][0]), 0, range[1]);
            }

            return newListToUse;
        },
        getAngleIndex:function(listToUse, angle) {
            if (listToUse.length == 0) {
                return 0;
            }

            for (var i = 0; i < listToUse.length; i++) {
                if (angle <= listToUse[i][0]) {
                    return i;
                }
            }

            return listToUse.length;
        },
        addWall:function(listToUse, blob) {
            var mapSizeX = Math.abs(getMapStartX() - getMapEndX());
            var mapSizeY = Math.abs(getMapStartY() -getMapEndY());
            var distanceFromWallX = mapSizeX/8;
            var distanceFromWallY = mapSizeY/8;
            if (blob.x < getMapStartX() + distanceFromWallX) {
                //LEFT
                //console.log("Left");
                listToUse.push([
                    [90, true],
                    [270, false], this.computeDistance(getMapStartX(), blob.y, blob.x, blob.y)
                ]);
                var lineLeft = this.followAngle(90, blob.x, blob.y, 190 + blob.size);
                var lineRight = this.followAngle(270, blob.x, blob.y, 190 + blob.size);
                drawLine(blob.x, blob.y, lineLeft[0], lineLeft[1], 5);
                drawLine(blob.x, blob.y, lineRight[0], lineRight[1], 5);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob.x, blob.y, 5);
            }
            if (blob.y < getMapStartY() + distanceFromWallY) {
                //TOP
                //console.log("TOP");
                listToUse.push([
                    [180, true],
                    [0, false], this.computeDistance(blob.x, getMapStartY, blob.x, blob.y)
                ]);
                var lineLeft = this.followAngle(180, blob.x, blob.y, 190 + blob.size);
                var lineRight = this.followAngle(360, blob.x, blob.y, 190 + blob.size);
                drawLine(blob.x, blob.y, lineLeft[0], lineLeft[1], 5);
                drawLine(blob.x, blob.y, lineRight[0], lineRight[1], 5);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob.x, blob.y, 5);
            }
            if (blob.x > getMapEndX() - distanceFromWallX) {
                //RIGHT
                //console.log("RIGHT");
                listToUse.push([
                    [270, true],
                    [90, false], this.computeDistance(getMapEndX(), blob.y, blob.x, blob.y)
                ]);
                var lineLeft = this.followAngle(270, blob.x, blob.y, 190 + blob.size);
                var lineRight = this.followAngle(90, blob.x, blob.y, 190 + blob.size);
                drawLine(blob.x, blob.y, lineLeft[0], lineLeft[1], 5);
                drawLine(blob.x, blob.y, lineRight[0], lineRight[1], 5);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob.x, blob.y, 5);
            }
            if (blob.y > getMapEndY() - distanceFromWallY) {
                //BOTTOM
                //console.log("BOTTOM");
                listToUse.push([
                    [0, true],
                    [180, false], this.computeDistance(blob.x, getMapEndY(), blob.x, blob.y)
                ]);
                var lineLeft = this.followAngle(0, blob.x, blob.y, 190 + blob.size);
                var lineRight = this.followAngle(180, blob.x, blob.y, 190 + blob.size);
                drawLine(blob.x, blob.y, lineLeft[0], lineLeft[1], 5);
                drawLine(blob.x, blob.y, lineRight[0], lineRight[1], 5);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob.x, blob.y, 5);
            }
            return listToUse;
        },
        getEdgeLinesFromPoint:function(blob1, blob2, radius) {
            var px = blob1.x;
            var py = blob1.y;

            var cx = blob2.x;
            var cy = blob2.y;

            //var radius = blob2.size;

            /*if (blob2.isVirus()) {
             radius = blob1.size;
             } else if(canSplitToEat(blob1, blob2)) {
             radius += splitDistance;
             } else {
             radius += blob1.size * 2;
             }*/

            var shouldInvert = false;

            var tempRadius = this.computeDistance(px, py, cx, cy);
            if (tempRadius <= radius) {
                radius = tempRadius - 5;
                shouldInvert = true;
            }

            var dx = cx - px;
            var dy = cy - py;
            var dd = Math.sqrt(dx * dx + dy * dy);
            var a = Math.asin(radius / dd);
            var b = Math.atan2(dy, dx);

            var t = b - a;
            var ta = {
                x: radius * Math.sin(t),
                y: radius * -Math.cos(t)
            };

            t = b + a;
            var tb = {
                x: radius * -Math.sin(t),
                y: radius * Math.cos(t)
            };
            var angleLeft = this.getAngle(cx + ta.x, cy + ta.y, px, py);
            var angleRight = this.getAngle(cx + tb.x, cy + tb.y, px, py);
            var angleDistance = (angleRight - angleLeft).mod(360);

            /*if (shouldInvert) {
             var temp = angleLeft;
             angleLeft = (angleRight + 180).mod(360);
             angleRight = (temp + 180).mod(360);
             angleDistance = (angleRight - angleLeft).mod(360);
             }*/

            return [angleLeft, angleDistance, [cx + tb.x, cy + tb.y],
                [cx + ta.x, cy + ta.y]
            ];
        },
        getAngle:function(x1, y1, x2, y2) {
            //Handle vertical and horizontal lines.

            if (x1 == x2) {
                if (y1 < y2) {
                    return 271;
                    //return 89;
                } else {
                    return 89;
                }
            }

            return (Math.round(Math.atan2(-(y1 - y2), -(x1 - x2)) / Math.PI * 180 + 180));
        },
        rangeToAngle:function(range) {
            return (range[0] + range[1]).mod(360);
        },
        slopeFromAngle:function(degree) {
            if (degree == 270) {
                degree = 271;
            } else if (degree == 90) {
                degree = 91;
            }
            return Math.tan((degree - 180) / 180 * Math.PI);
        },
        pointsOnLine:function(slope, useX, useY, distance) {
            var b = useY - slope * useX;
            var r = Math.sqrt(1 + slope * slope);

            var newX1 = (useX + (distance / r));
            var newY1 = (useY + ((distance * slope) / r));
            var newX2 = (useX + ((-distance) / r));
            var newY2 = (useY + (((-distance) * slope) / r));

            return [
                [newX1, newY1],
                [newX2, newY2]
            ];
        },
        followAngle:function(angle, useX, useY, distance) {
            var slope = this.slopeFromAngle(angle);
            var coords = this.pointsOnLine(slope, useX, useY, distance);

            var side = (angle - 90).mod(360);
            if (side < 180) {
                return coords[1];
            } else {
                return coords[0];
            }
        },
        getAngleRange:function(blob1, blob2, index, radius) {
            var angleStuff = this.getEdgeLinesFromPoint(blob1, blob2, radius);

            var leftAngle = angleStuff[0];
            var rightAngle = this.rangeToAngle(angleStuff);
            var difference = angleStuff[1];

            drawPoint(angleStuff[2][0], angleStuff[2][1], 3, "");
            drawPoint(angleStuff[3][0], angleStuff[3][1], 3, "");

            //console.log("Adding badAngles: " + leftAngle + ", " + rightAngle + " diff: " + difference);
            var lineLeft = this.followAngle(leftAngle, blob1.x, blob1.y, 150 + blob1.size - index * 10);
            var lineRight = this.followAngle(rightAngle, blob1.x, blob1.y, 150 + blob1.size - index * 10);

            if (blob2.isVirus()) {
                drawLine(blob1.x, blob1.y, lineLeft[0], lineLeft[1], 6);
                drawLine(blob1.x, blob1.y, lineRight[0], lineRight[1], 6);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob1.x, blob1.y, 6);
            } else if(getCells().hasOwnProperty(blob2.id)) {
                drawLine(blob1.x, blob1.y, lineLeft[0], lineLeft[1], 0);
                drawLine(blob1.x, blob1.y, lineRight[0], lineRight[1], 0);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob1.x, blob1.y, 0);
            } else {
                drawLine(blob1.x, blob1.y, lineLeft[0], lineLeft[1], 3);
                drawLine(blob1.x, blob1.y, lineRight[0], lineRight[1], 3);
                drawArc(lineLeft[0], lineLeft[1], lineRight[0], lineRight[1], blob1.x, blob1.y, 3);
            }

            return [leftAngle, difference];
        },
        canSplit:function(mass){
            return mass>=36;
        },
        canSplitToEat:function(player1, player2) {
            return this.compareSize(player1, player2, 2.8) && !this.compareSize(player1, player2, 20);
        },
        computeDistanceFromCircleEdge:function(x1, y1, x2, y2, s2) {
            var tempD = this.computeDistance(x1, y1, x2, y2);

            var offsetX = 0;
            var offsetY = 0;

            var ratioX = tempD / (x1 - x2);
            var ratioY = tempD / (y1 - y2);

            offsetX = x1 - (s2 / ratioX);
            offsetY = y1 - (s2 / ratioY);

            drawPoint(offsetX, offsetY, 5, "");

            return this.computeDistance(x2, y2, offsetX, offsetY);
        },
        clusterFood:function(foodList, blobSize){
            var clusters = [];
            var addedCluster = false;
            //1: x
            //2: y
            //3: size or value
            //4: Angle, not set here.
            for (var i = 0; i < foodList.length; i++) {
                for (var j = 0; j < clusters.length; j++) {
                    if (this.computeDistance(foodList[i][0], foodList[i][1], clusters[j][0], clusters[j][1]) < blobSize * 1.5) {
                        clusters[j][0] = (foodList[i][0] + clusters[j][0]) / 2;
                        clusters[j][1] = (foodList[i][1] + clusters[j][1]) / 2;
                        clusters[j][2] += foodList[i][2];
                        addedCluster = true;
                        break;
                    }
                }
                if (!addedCluster) {
                    clusters.push([foodList[i][0], foodList[i][1], foodList[i][2], 0]);
                }
                addedCluster = false;
            }
            return clusters;
        },
        computeDistance:function(x1, y1, x2, y2) {
            var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
            var ydis = y1 - y2;
            var distance = Math.sqrt(xdis * xdis + ydis * ydis);
            return distance;
        },
        getAll:function(blob){
            var dotList = [];
            var player = getPlayer();
            var interNodes = getMemoryCells();
            dotList = this.separateListBasedOnFunction(interNodes, blob);
            return dotList;
        },
        getTeam : function(red, green, blue) {
            if (red == "ff") {
                return 0;
            } else if (green == "ff") {
                return 1;
            }
            return 2;
        },
        compareSize:function(player1, player2, ratio) {
            if (player1.size * player1.size * ratio < player2.size * player2.size) {
                return true;
            }
            return false;
        },
        isFood:function(blob, cell) {
            if (!cell.isVirus() && this.compareSize(cell, blob, 1.33) || (cell.size <= 13)) {
                return true;
            }
            return false;
        },
        isThreat : function(blob, cell) {

            if (!cell.isVirus() && this.compareSize(blob, cell, 1.30)) {
                return true;
            }
            return false;
        },
        isVirus : function(blob, cell) {
            if (cell.isVirus() && this.compareSize(cell, blob, 1.2)) {
                return true;
            } else if (cell.isVirus() && cell.color.substring(3,5).toLowerCase() != "ff") {
                return true;
            }
            return false;
        },
        isItMe:function(player, cell){
            if (getMode() == ":teams") {
                var currentColor = player[0].color;
                var currentRed = currentColor.substring(1,3);
                var currentGreen = currentColor.substring(3,5);
                var currentBlue = currentColor.substring(5,7);

                var currentTeam = this.getTeam(currentRed, currentGreen, currentBlue);

                var cellColor = cell.color;

                var cellRed = cellColor.substring(1,3);
                var cellGreen = cellColor.substring(3,5);
                var cellBlue = cellColor.substring(5,7);

                var cellTeam = this.getTeam(cellRed, cellGreen, cellBlue);

                if (currentTeam == cellTeam && !cell.isVirus()) {
                    return true;
                }
            }else{
                for (var i = 0; i < player.length; i++) {
                    if (cell.id == player[i].id) {
                        return true;
                    }
                }
            }
            return false;
        },
        getTimeToRemerge : function (mass) {
            return ((mass * 0.2) + 30);
        },
        /**
         * If can eat when split
         * @param that
         * @param blob
         * @param cell
         * @returns {boolean}
         */
        isSplitTarget: function (blob, cell) {
            if (this.canSplitToEat(cell, blob)) {
                return true;
            }
            return false;
        },
        separateListBasedOnFunction:function(listToUse, blob){
            var foodElementList = [];
            var threatList = [];
            var virusList = [];
            var splitTargetList = [];
            var foundMaster = [];
            var equalToMe = [];
            var that = this;
            var player = getPlayer();
            Object.keys(listToUse).forEach(function(element, index) {
                var isMe = that.isItMe(player, listToUse[element]);
                if (!isMe) {
                    if (!that.master && listToUse[element].id == that.masterId) {
                        foundMaster.push(listToUse[element]);
                        console.log("Found master! " + that.masterId + ", " + listToUse[element].id);
                    }else if (that.isFood(blob, listToUse[element]) && listToUse[element].isNotMoving()) {
                        //IT'S FOOD!
                        foodElementList.push(listToUse[element]);
                    }else if (that.isThreat(blob, listToUse[element])) {
                        //IT'S DANGER!
                        if ((!that.master && listToUse[element].id != that.masterId) || that.master) {
                            threatList.push(listToUse[element]);
                        } else {
                            console.log("Found master! " + that.masterId);
                        }
                    }else if (that.isVirus(blob, listToUse[element])) {
                        //IT'S VIRUS!
                        virusList.push(listToUse[element]);
                    }else if (that.isSplitTarget(blob, listToUse[element])) {
                        drawCircle(listToUse[element].x, listToUse[element].y, listToUse[element].size + 50, 7);
                        splitTargetList.push(listToUse[element]);
                        foodElementList.push(listToUse[element]);
                    }else{
                        // EQUAL TO ME
                        equalToMe.push(listToUse[element]);
                    }
                }/*else if(isMe && (getBlobCount(getPlayer()) > 0)){
                 //Attempt to make the other cell follow the mother one
                 foodElementList.push(listToUse[element]);
                 }*/
            });
            var foodList = [];
            for (var i = 0; i < foodElementList.length; i++) {
                foodList.push([foodElementList[i].x, foodElementList[i].y, foodElementList[i].size]);
            }
            return [foodList, threatList, virusList, splitTargetList, foundMaster, equalToMe];
        }
    });
    app.module("FeedBot", {
        moduleClass: AgarBot.Modules.FeedBot
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    /**
     * We donot
     */
    AgarBot.Views.MiniMapPanel = Backbone.View.extend({
        events: {},
        initialize: function (options) {
            this.options = _.extend(this, options);
            this.isFirst = true;
        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('mapPanel');
            return template;
        },
        render:function(){
            this.$el.html(this.template());
            this.canvas = $('#minimap-canvas')[0];
            this.ctx = this.canvas.getContext('2d');
            console.log('MiniMapPanel Render');
        },
        calcPosition:function(x,y,size){
            var nX = ((x - this.mapInfo.start_x)/this.mapInfo.length_x) * this.canvas.width;
            var nY = ((y - this.mapInfo.start_y)/this.mapInfo.length_y) * this.canvas.height;
            var nSize = (size/this.mapInfo.length_x)*this.canvas.width;
            return {x:nX,y:nY,size:nSize};
        },
        /**
         * This method is called sequence. Keep it simple
         */
        updateMap: function () {
            var self = this;
            var player = getPlayer();
            if(player.length > 0) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (var k = 0; k < 1; k++) {
                    var listToUse = getMemoryCells();
                    this.ctx.save();
                    Object.keys(listToUse).forEach(function(tokenId, index) {
                        var position = self.calcPosition(listToUse[tokenId].x, listToUse[tokenId].y, listToUse[tokenId].size);
                        self.drawCycle(position.x, position.y, position.size, listToUse[tokenId].color);
                    });
                    this.ctx.restore();

                    var playerPosition = this.calcPosition(player[k].x, player[k].y, player[k].size);
                    this.ctx.save();
                    this.drawCycle(playerPosition.x, playerPosition.y, playerPosition.size, player[k].color);
                    this.ctx.restore();

                    if (self.mapOptions.enableCross) {
                        self.miniMapDrawCross(playerPosition.x, playerPosition.y, player[k].color);
                    }
                    this.ctx.restore();
                }
                /**
                 * Draw other cell
                 */
                var otherCells = getClanCells();
                //console.table(otherCells);
                this.ctx.save();
                Object.keys(otherCells).forEach(function(k, index) {
                    var cellPosition = self.calcPosition(otherCells[k].x, otherCells[k].y, otherCells[k].size);
                    self.drawCycle(cellPosition.x, cellPosition.y, cellPosition.size, otherCells[k].color);
                });
                this.ctx.restore();
            }
        },
        drawCycle:function(x,y,size,color){
            this.ctx.beginPath();
            this.ctx.arc(
                x,
                y,
                size,
                0,
                2 * Math.PI,
                false
            );
            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();
        },
        miniMapDrawCross:function(x, y, color) {
            this.ctx.save();
            this.ctx.lineWidth = 0.3;
            this.ctx.beginPath();

            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y );
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.closePath();
            this.ctx.strokeStyle = color || '#FFFFFF';
            this.ctx.stroke();
            this.ctx.restore();
        },
    });

    AgarBot.Modules.MiniMap = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            console.log('Module MiniMap initialize');
            this.mini_map_tokens = [];
            this.current_cell_ids = [];
            this.player_name = [];
            this.mapInfo = {
                "start_x": -7000,
                "start_y": -7000,
                "end_x": 7000,
                "end_y": 7000,
                "length_x" : 14000,
                "length_y" : 14000
            };
            console.log(window.getMapEndX());
            this.mapOptions = {
                enableMultiCells: true,
                enablePosition: true,
                enableAxes: true,
                enableCross: true
            };
            this.panelView = new AgarBot.Views.MiniMapPanel({
                el: '#minimap-pannel',
                mapInfo:this.mapInfo,
                mini_map_tokens: this.mini_map_tokens,
                current_cell_ids: this.current_cell_ids,
                mapOptions : this.mapOptions
            });
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub, 'game:start', this.onGameStart);
        },
        onGameStart:function(){
            this.panelView.render();
        },
        onStart: function (options) {
            console.log('Module MiniMap start');
        },
        mainLoop:function(){
            this.panelView.updateMap();
        }
    });
    app.module("MiniMap", {
        moduleClass: AgarBot.Modules.MiniMap
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
(function (window, $, Backbone, Marionette, _, AgarBot, app) {

    AgarBot.Views.StatsPannel = Marionette.ItemView.extend({
        template: function(serialized_model){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('statsPanel');
            return template(serialized_model);
        }
    });
    AgarBot.Modules.Stats = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
            this.info = new Backbone.Model({
                serverIp:'Na',
                clientToken:'Na'
            })
        },
        onStart: function (options) {
            console.log('Module Clan start');
            this.listenTo(AgarBot.pubsub,'document.ready', this.onDocumentReady);
            this.listenTo(AgarBot.pubsub,'Game:connect', this.onSocketConnect);
        },
        onSocketConnect:function(data){
            console.log(data);
            this.info.set('serverIp', data.ip);
            this.info.set('clientToken', data.token);
            this.statsPanel.render();
        },
        onDocumentReady:function(){
            $('<div id="statsPanel"></div>').appendTo($('#control-pannel'));
            if(typeof this.statsPanel =='undefined'){
                this.statsPanel = new AgarBot.Views.StatsPannel({
                    el:'#statsPanel',
                    model:this.info
                });
            }
            this.statsPanel.render();
        }
    });
    app.module("Stats", {
        moduleClass: AgarBot.Modules.Stats
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
/**
 * At the end of the world. We lauch the application
 */
(function($, Backbone, _,AgarBot, app){
    app.start();
    $(document).ready(function(){
        AgarBot.pubsub.trigger('document.ready');
    });
})(jQuery, Backbone, _,AgarBot, AgarBot.app);