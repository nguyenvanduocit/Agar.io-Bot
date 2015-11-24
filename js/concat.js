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
(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    var _WebSocket = window._WebSocket = window.WebSocket;
    // the injected point, overwriting the WebSocket constructor
    window.WebSocket = function(url, protocols) {
        console.log('Listen');
        if (protocols === undefined) {
            protocols = [];
        }

        var ws = new _WebSocket(url, protocols);

        refer(this, ws, 'binaryType');
        refer(this, ws, 'bufferedAmount');
        refer(this, ws, 'extensions');
        refer(this, ws, 'protocol');
        refer(this, ws, 'readyState');
        refer(this, ws, 'url');

        this.send = function(data){
            //extractSendPacket(data);
            AgarBot.pubsub.trigger('websocket:send', data);
            return ws.send.call(ws, data);
        };

        this.close = function(){
            return ws.close.call(ws);
        };

        this.onopen = function(event){};
        this.onclose = function(event){};
        this.onerror = function(event){};
        this.onmessage = function(event){};

        ws.onopen = function(event) {
            AgarBot.pubsub.trigger('websocket:onopen', {
                url: url,
                region: $('#region').val(),
                gamemode: $('#gamemode').val(),
                party: location.hash
            });
            if (this.onopen) {
                return this.onopen.call(ws, event);
            }
        }.bind(this);

        ws.onmessage = function(event) {
            AgarBot.pubsub.trigger("websocket:onmessage",event);
            if (this.onmessage)
                return this.onmessage.call(ws, event);
        }.bind(this);

        ws.onclose = function(event) {
            AgarBot.pubsub.trigger("websocket:onclose",{event:event});
            if (this.onclose)
                return this.onclose.call(ws, event);
        }.bind(this);

        ws.onerror = function(event) {
            AgarBot.pubsub.trigger("websocket:onclose",{event:onerror});
            if (this.onerror)
                return this.onerror.call(ws, event);
        }.bind(this);
    };
    window.WebSocket.prototype = _WebSocket;
    // create a linked property from slave object
    // whenever master[prop] update, slave[prop] update
    function refer(master, slave, prop) {
        Object.defineProperty(master, prop, {
            get: function(){
                return slave[prop];
            },
            set: function(val) {
                slave[prop] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
var MapControl = {
    splitDistance : 710,
    minimumSizeToGoing:10,
    dangerTimeOut:1000,
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
    angleIsWithin:function(angle, range) {
        var diff = (this.rangeToAngle(range) - angle).mod(360);
        if (diff >= 0 && diff <= range[1]) {
            return true;
        }
        return false;
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
        //var mapSizeX = Math.abs(f.getMapStartX - f.getMapEndX);
        //var mapSizeY = Math.abs(f.getMapStartY - f.getMapEndY);
        //var distanceFromWallX = mapSizeX/3;
        //var distanceFromWallY = mapSizeY/3;
        var distanceFromWallY = 2000;
        var distanceFromWallX = 2000;
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
         } else if(canSplit(blob1, blob2)) {
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
    canSplit:function(player1, player2) {
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
        dotList = this.separateListBasedOnFunction(this, interNodes, blob);
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
    getTimeToRemerge: function (mass) {
        return ((mass * 0.02) + 30);
    },
    isSplitTarget: function (that, blob, cell) {
        if (that.canSplit(cell, blob)) {
            return true;
        }
        return false;
    },
    separateListBasedOnFunction:function(that, listToUse, blob){
        var foodElementList = [];
        var threatList = [];
        var virusList = [];
        var splitTargetList = [];
        var foundMaster = [];
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
                }else if (that.isSplitTarget(that, blob, listToUse[element])) {
                    drawCircle(listToUse[element].x, listToUse[element].y, listToUse[element].size + 50, 7);
                    splitTargetList.push(listToUse[element]);
                    foodElementList.push(listToUse[element]);
                }else{

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
        return [foodList, threatList, virusList, splitTargetList, foundMaster];
    }
};
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
            this.templates.feedBotPannel = _.template(
                '<div class="bot-panel">' +
                    '<button id="feedBotToggle_master">Make slave</button>'+
                    '<button id="feedBotToggle_auto">Disable auto</button>'+
                '</div>'
            );
            this.templates.clanFormField = _.template(
                '<input type="text" class="form-control" id="ksIpInput" placeholder="Enter server IP">'
            );
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
    function bc() {
        Ra = !0;
        wb();
        setInterval(wb, 18E4);
        P = Sa = document.getElementById("canvas");
        f = P.getContext("2d");
        P.onmousedown = function (a) {
            if (xb) {
                var c = a.clientX - (5 + m / 5 / 2), b = a.clientY - (5 + m / 5 / 2);
                if (Math.sqrt(c * c + b * b) <= m / 5 / 2) {
                    ha();
                    J(17);
                    return
                }
            }
            ta = 1 * a.clientX;
            ua = 1 * a.clientY;
            Ta();
            ha()
        };
        P.onmousemove = function (a) {
            ta = 1 * a.clientX;
            ua = 1 * a.clientY;
            Ta()
        };
        P.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", yb, !1) : document.body.onmousewheel = yb;
        var a = !1, c = !1, b = !1;
        d.onkeydown = function (d) {
            32 != d.keyCode || a || ("nick" != d.target.id && d.preventDefault(), ha(), J(17), a = !0);
            81 != d.keyCode || c || (J(18), c = !0);
            87 != d.keyCode || b || (ha(), J(21), b = !0);
            27 == d.keyCode && (d.preventDefault(), va(300))
        };
        d.onkeyup = function (d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (b = !1);
            81 == d.keyCode && c && (J(19), c = !1)
        };
        d.onblur = function () {
            J(19);
            b = c = a = !1
        };
        d.onresize = zb;
        d.requestAnimationFrame(Ab);
        setInterval(ha, 40);
        A && e("#region").val(A);
        Bb();
        wa(e("#region").val());
        0 == Ua && A && Q();
        xa.ABGroupDFP = Cb("AB9");
        xa.ABGroupRubicon = Cb("AB10_Rubicon");
        ya.w = d.hasBottomAd;
        R && console.log("Init ads");
        cc();
        dc();
        R && console.log("Ads initted");
        R && console.log("Your group: ", za() ? "rubicon" : "dfp");
        ec();
        va(0);
        zb();
        d.location.hash && 6 <= d.location.hash.length && Db(d.location.hash)
    }

    function yb(a) {
        S *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        /**
         * @author nguyenvanduocit
         */
        0.1 > S && (S = 0.1);
        S > 4 / g && (S = 4 / g)
    }

    function fc() {
        if (.4 > g)ia = null; else {
            for (var a = Number.POSITIVE_INFINITY, c = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, h = 0; h < x.length; h++) {
                var e = x[h];
                !e.H() || e.M || 20 >= e.size * g || (a = Math.min(e.x - e.size, a), c = Math.min(e.y - e.size, c), b = Math.max(e.x + e.size, b), d = Math.max(e.y + e.size, d))
            }
            ia = gc.init({ca: a - 10, da: c - 10, $: b + 10, ba: d + 10, ha: 2, ia: 4});
            for (h = 0; h < x.length; h++)if (e = x[h], e.H() && !(20 >= e.size * g))for (a = 0; a < e.a.length; ++a)c = e.a[a].x, b = e.a[a].y, c < v - m / 2 / g || b < w - q / 2 / g || c > v + m / 2 / g || b > w + q / 2 / g || ia.Z(e.a[a])
        }
    }

    function Ta() {
        //@author nguyenvanduocit
        var tmp_ta = (ta - m / 2) / g + v;
        var temp_ua = (ua - q / 2) / g + w
        setPoint(tmp_ta, temp_ua);
    }

    function wb() {
        null == Ca && (Ca = {}, e("#region").children().each(function () {
            var a = e(this), c = a.val();
            c && (Ca[c] =
                a.text())
        }));
        e.get(ja + "info", function (a) {
            var c = {}, b;
            for (b in a.regions) {
                var d = b.split(":")[0];
                c[d] = c[d] || 0;
                c[d] += a.regions[b].numPlayers
            }
            for (b in c)e('#region option[value="' + b + '"]').text(Ca[b] + " (" + c[b] + " players)")
        }, "json")
    }

    function Eb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        $ = ka = !1;
        Bb();
        var a = u.aa;
        Va(a);
        Wa(a);
        a = u.ac;
        Va(a);
        Wa(a)
    }

    function wa(a) {
        a && (a == A ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), A = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ra && Q()))
    }

    function va(a) {
        ka || $ || (Da ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), K = null, Xa || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), Ya(Xa ? u.ac : u.aa), Xa = !1, 1E3 > a && (t = 1), ka = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function la(a) {
        e("#helloContainer").attr("data-gamemode", a);
        T = a;
        e("#gamemode").val(a)
    }

    function Bb() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function ma(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function ec() {
        var a = -1 != d.location.search.indexOf("fb"), a = za() && !a;
        googletag.cmd.push(function () {
            googletag.display("g300x250")
        });
        Fb && googletag.cmd.push(function () {
            googletag.display("g728x90")
        });
        a || (googletag.cmd.push(function () {
            googletag.display("s300x250")
        }), googletag.cmd.push(function () {
            googletag.display("a300x250")
        }), Fb && googletag.cmd.push(function () {
            googletag.display("a728x90")
        }))
    }

    function za() {
        return !(50 > Za("ABGroupRubicon"))
    }

    function Za(a) {
        return a in xa ? xa[a] : 0
    }

    function Ya(a) {
        Gb(a);
        for (var c = 0; c < a.length; c++)if (!("type" in a[c] && "rubicon" != a[c].type)) {
            var b = a[c].data;
            R && console.log("Rubicon: refreshing:" + b.id);
            aa.F(b.id, b.size, b.json)
        }
    }

    function cc() {
        var a = {}, c = null, b = null, s = null, h = null, e = -1 != d.location.search.indexOf("fb"), f = za() && !e, n = ya.w;
        e ? (a = "/53945695/agar_facebook/agar/300x250", s = "/53945695/agar_facebook/agar/300x250_Stats", h = "/53945695/agar_facebook/agar/300x250") : (h = "/116850162/300x250_init", c = "/116850162/728x90_init", a = "/116850162/300x250_login", s = "/116850162/300x250_stats", b = "/116850162/728x90_login");
        var g = d.googletag;
        g.cmd.push(function () {
            g.pubads().setTargeting("abtest", Za("ABGroupDFP") + "");
            u.ac.push(ba.defineSlot(h, [300, 250], "g300x250"));
            n && u.ac.push(ba.defineSlot(c, [728, 90], "g728x90"));
            f || (u.ab.push(ba.defineSlot(s, [300, 250], "s300x250")), u.aa.push(ba.defineSlot(a, [300, 250], "a300x250")), n && u.aa.push(ba.defineSlot(b, [728, 90], "a728x90")));
            g.pubads().enableSingleRequest();
            g.pubads().disableInitialLoad();
            g.enableServices();
            $a = !0;
            null != ab && (console.log("refreshing from queue"), Gb(ab))
        })
    }

    function Gb(a) {
        console.log("dfpInitialized=" + $a);
        $a || (console.log("queuing refresh"), ab = a);
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type ? console.log("trying to refresh a non dfp ad. continue") : (R && console.log("DFP: refreshing:" + a[b].data.A), c.push(a[b].data));
        0 >= c.length || !d.googletag || d.googletag.cmd.push(function () {
            bb && (bb = !1, setTimeout(function () {
                bb = !0
            }, 6E4 * hc), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(c))
        })
    }

    function Va(a) {
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type || (R && console.log("DFP: destroying:" + a[b].data.A), c.push(a[b].data));
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(c)
    }

    function dc() {
        if (za()) {
            var a = {acct: 13694, site: 73068, zone: 346604, size: 15}, c = {
                acct: 13694,
                site: 73068,
                zone: 363786,
                size: 2
            }, b = ya.w;
            u.ab.push(aa.defineSlot(a, "300x250", "s300x250"));
            u.aa.push(aa.defineSlot(a, "300x250", "a300x250"));
            b && u.aa.push(aa.defineSlot(c, "728x90", "a728x90"))
        }
    }

    function Hb() {
        var a = ++Ua;
        console.log("Find " + A + T);
        Ib();
        e.ajax(ja + "findServer", {
            error: function () {
                setTimeout(Hb, 3E4)
            }, success: function (c) {
                if (a == Ua) {
                    c.alert && alert(c.alert);
                    var b = c.ip;
                    void 0 != L.Y && (b = d.location.hostname + ":" + L.Y);
                    cb("ws" +
                        (db ? "s" : "") + "://" + b, c.token)
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (A + T || "?") + "\n2200049715"
        })
    }

    function Q() {
        Ra && A && (e("#connecting").show(), Hb())
    }

    function Ib() {
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

    function cb(a, c) {
        Ib();
        B.ip && (a = "ws" + (db ? "s" : "") + "://" + B.ip);
        if (null != U) {
            var b = U;
            U = function () {
                b(c)
            }
        }
        if (db && !L.env_development && !L.env_local) {
            var d = a.split(":");
            a = "wss://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +d[2]
        }
        C = [];
        k = [];
        M = {};
        x = [];
        ca = [];
        y = [];
        D = E = null;
        N = 0;
        na = !1;
        console.log("Connecting to " + a);
        r = new WebSocket(a);
        r.binaryType = "arraybuffer";
        r.onopen = function () {
            var a;
            console.log("socket open");
            a = V(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, !0);
            W(a);
            a = V(5);
            a.setUint8(0, 255);
            a.setUint32(1, 2200049715, !0);
            W(a);
            a = V(1 + c.length);
            a.setUint8(0, 80);
            for (var b = 0; b < c.length; ++b)a.setUint8(b + 1, c.charCodeAt(b));
            W(a);
            Jb()
        };
        r.onmessage = ic;
        r.onclose = jc;
        r.onerror = function () {
            console.log("socket error")
        }
    }

    function V(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function W(a) {
        r.send(a.buffer)
    }

    function jc() {
        na && (Ea = 500);
        console.log("socket close");
        setTimeout(Q, Ea);
        Ea *= 2
    }

    function ic(a) {
        kc(new DataView(a.data))
    }

    function kc(a) {
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
                lc(a, b);
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
                k = [];
                C = [];
                break;
            case 21:
                eb = a.getInt16(b, !0);
                b += 2;
                fb = a.getInt16(b, !0);
                b += 2;
                gb || (gb = !0, Fa = eb, Ga = fb);
                break;
            case 32:
                C.push(a.getUint32(b, !0));
                b += 4;
                break;
            case 49:
                if (null != E)break;
                var s = a.getUint32(b, !0), b = b + 4;
                y = [];
                for (var e = 0; e < s; ++e) {
                    var f = a.getUint32(b, !0), b = b + 4;
                    y.push({id: f, name: c()})
                }
                Kb();
                break;
            case 50:
                E = [];
                s = a.getUint32(b, !0);
                b += 4;
                for (e = 0; e < s; ++e)E.push(a.getFloat32(b, !0)), b += 4;
                Kb();
                break;
            case 64:
                Ha = a.getFloat64(b, !0);
                b += 8;
                Ia = a.getFloat64(b, !0);
                b += 8;
                Ja = a.getFloat64(b, !0);
                b += 8;
                Ka = a.getFloat64(b, !0);
                b += 8;
                oa = (Ja + Ha) / 2;
                pa = (Ka + Ia) / 2;
                qa = 1;
                0 == k.length &&
                (v = oa, w = pa, g = qa);
                a.byteLength > b && (a.getUint32(b, !0), b += 4, hb = c(), d.MC.updateServerVersion(hb), console.log("Server version " + hb));
                break;
            case 81:
                var p = a.getUint32(b, !0), b = b + 4, n = a.getUint32(b, !0), b = b + 4, m = a.getUint32(b, !0), b = b + 4;
                setTimeout(function () {
                    var a = {level: p, xp: n, xpNeeded: m};
                    d.MC.updateUserXPInfo(a);
                    da(a)
                }, 1200)
        }
    }

    function lc(a, c) {
        function b() {
            for (var b = ""; ;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        function s() {
            for (var b = ""; ;) {
                var d = a.getUint8(c++);
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        Lb = H = Date.now();
        na || (na = !0, mc());
        ib = !1;
        var h = a.getUint16(c, !0);
        c += 2;
        for (var f = 0; f < h; ++f) {
            var p = M[a.getUint32(c, !0)], n = M[a.getUint32(c + 4, !0)];
            c += 8;
            p && n && (n.S(), n.l = n.x, n.m = n.y, n.k = n.size, n.B = p.x, n.C = p.y, n.h = n.size, n.L = H, nc(p, n))
        }
        for (f = 0; ;) {
            h = a.getUint32(c, !0);
            c += 4;
            if (0 == h)break;
            ++f;
            var g, p = a.getInt32(c, !0);
            c += 4;
            n = a.getInt32(c, !0);
            c += 4;
            g = a.getInt16(c, !0);
            c += 2;
            var l = a.getUint8(c++), O = a.getUint8(c++), X = a.getUint8(c++), O = oc(l << 16 | O << 8 | X), X = a.getUint8(c++), m = !!(X & 1), q = !!(X & 16), r = null;
            X & 2 && (c += 4 + a.getUint32(c, !0));
            X & 4 && (r = s());
            var t = b(), l = null;
            M.hasOwnProperty(h) ? (l = M[h], l.K(), l.l = l.x, l.m = l.y, l.k = l.size, l.color = O) : (l = new ea(h, p, n, g, O, t), x.push(l), M[h] = l, l.ja = p, l.ka = n);
            l.c = m;
            l.g = q;
            l.B = p;
            l.C = n;
            l.h = g;
            l.L = H;
            l.U = X;
            r && (l.J = r);
            t && l.q(t);
            //@author nguyenvanduocit
            -1 != C.indexOf(h) && -1 == k.indexOf(l) && (k.push(l),l.birth = getLastUpdate(), l.birthMass = (l.size * l.size / 100), AgarBot.pubsub.trigger('startPlay'), 1 == k.length && (v = l.x, w = l.y, Mb(), document.getElementById("overlays").style.display = "none", z = [], jb = 0, kb = k[0].color, Da = !0, lb = Date.now(), Y = La = mb = 0))
            /**
             * @author nguyenvanduocit
             */
            interNodes[h] = window.getCells()[h];
        }
        /**
         * @author nguyenvanduocit
         */
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
        p = a.getUint32(c, !0);
        c += 4;
        for (f = 0; f < p; f++)h = a.getUint32(c, !0), c += 4, l = M[h], null != l && l.S();
        /**
         * @author nguyenvanduocit
         */
        ib && 0 == k.length && (nb = Date.now(), Da = !1, ka || $ || (Nb ? (Ya(u.ab), pc(), $ = !0,AgarBot.pubsub.trigger('stopPlay'), e("#overlays").fadeIn(3E3), e("#stats").show()) : va(3E3)), d.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(N / 100),
            turn_time: (nb - lb) / 1E3,
            cells_eaten: La
        }))
    }

    function mc() {
        e("#connecting").hide();
        Ob();
        U && (U(), U = null)
    }

    function ha() {
        if (fa()) {
            //@author nguyenvanduocit
            if (getPlayer().length == 0 && !reviving && ~~(getCurrentScore() / 100) > 0) {
                console.log("Dead: " + ~~(getCurrentScore() / 100));
            }
            if (getPlayer().length == 0 && !firstStart) {
                console.log("Revive");
                setNick(originalName);
                reviving = true;
            } else if (getPlayer().length > 0 && reviving) {
                reviving = false;
                console.log("Done Reviving!");
            }
            var a = ta - m / 2, c = ua - q / 2;
            64 > a * a + c * c || .01 > Math.abs(Pb - Aa) && .01 > Math.abs(Qb - Ba) || (Pb = Aa, Qb = Ba, a = V(13), a.setUint8(0, 16), a.setInt32(1, Aa, !0), a.setInt32(5,
                Ba, !0), a.setUint32(9, 0, !0), W(a))
        }
    }

    function Ob() {
        if (fa() && na && null != K) {
            var a = V(1 + 2 * K.length);
            a.setUint8(0, 0);
            for (var c = 0; c < K.length; ++c)a.setUint16(1 + 2 * c, K.charCodeAt(c), !0);
            W(a);
            K = null
        }
    }

    function fa() {
        return null != r && r.readyState == r.OPEN
    }

    function J(a) {
        if (fa()) {
            var c = V(1);
            c.setUint8(0, a);
            W(c)
        }
    }

    function Jb() {
        if (fa() && null != F) {
            var a = V(1 + F.length);
            a.setUint8(0, 81);
            for (var c = 0; c < F.length; ++c)a.setUint8(c + 1, F.charCodeAt(c));
            W(a)
        }
    }

    function zb() {
        m = 1 * d.innerWidth;
        q = 1 * d.innerHeight;
        Sa.width = P.width = m;
        Sa.height = P.height = q;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var c = a.height(), b = d.innerHeight;
        0 != c / 2 % 2 && (c++, a.height(c));
        c > b / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + b / c / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Rb()
    }

    function Sb() {
        var a;
        a = 1 * Math.max(q / 1080, m / 1920);
        return a *= S
    }
    /**
     * @author nguyenvanduocit
     */
    function Sb2() {
        var a;
        a = 1 * Math.max(q / 1080, m / 1920);
        return a;
    }

    function qc() {
        if (0 != k.length) {
            for (var a = 0, c = 0; c < k.length; c++)a += k[c].size;
            var a2 = Math.pow(Math.min(64 / a, 1), .4) * Sb2();
            a = Math.pow(Math.min(64 / a, 1), .4) * Sb();
            g = (9 * g + a) / 10;
            //@author nguyenvanduocit
            g2 = (9 * g2 + a2) / 10;
        }
    }

    function Rb() {
        //@author nguyenvanduocit
        dPoints = [];
        circles = [];
        dArc = [];
        dText = [];
        lines = [];

        var a, c = Date.now();
        ++rc;
        H = c;
        if (0 < k.length) {
            qc();
            for (var b = a =
                0, d = 0; d < k.length; d++)k[d].K(), a += k[d].x / k.length, b += k[d].y / k.length;
            oa = a;
            pa = b;
            qa = g;
            v = (v + a) / 2;
            w = (w + b) / 2
        } else v = (29 * v + oa) / 30, w = (29 * w + pa) / 30, g = (9 * g + qa * Sb()) / 10;
        fc();
        Ta();
        ob || f.clearRect(0, 0, m, q);
        ob ? (f.fillStyle = Ma ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, m, q), f.globalAlpha = 1) : sc();
        x.sort(function (a, c) {
            return a.size == c.size ? a.id - c.id : a.size - c.size
        });
        f.save();
        f.translate(m / 2, q / 2);
        f.scale(g, g);
        f.translate(-v, -w);
        for (d = 0; d < ca.length; d++)ca[d].p(f);
        for (d = 0; d < x.length; d++)x[d].p(f);
        /**
         * @author nguyenvanduocit
         */
        AgarBot.pubsub.trigger('main_out:mainloop');
        customRender(f);
        if (gb) {
            Fa = (3 *
                Fa + eb) / 4;
            Ga = (3 * Ga + fb) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < k.length; d++)f.moveTo(k[d].x, k[d].y), f.lineTo(Fa, Ga);
            f.stroke();
            f.restore()
        }
        f.restore();
        D && D.width && f.drawImage(D, m - D.width - 10, 10);
        N = Math.max(N, Tb());
        0 != N && (null == Na && (Na = new Oa(24, "#FFFFFF")), Na.r(ma("score") + ": " + ~~(N / 100)), b = Na.D(), a = b.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, q - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(b, 15,
            q - 10 - 24 - 5));
        tc();
        c = Date.now() - c;
        c > 1E3 / 60 ? I -= .01 : c < 1E3 / 65 && (I += .01);
        .4 > I && (I = .4);
        1 < I && (I = 1);
        c = H - Ub;
        !fa() || ka || $ ? (t += c / 2E3, 1 < t && (t = 1)) : (t -= c / 300, 0 > t && (t = 0));
        0 < t ? (f.fillStyle = "#000000", Vb ? (f.globalAlpha = t, f.fillRect(0, 0, m, q), G.complete && G.width && (G.width / G.height < m / q ? (c = m, a = G.height * m / G.width) : (c = G.width * q / G.height, a = q), f.drawImage(G, (m - c) / 2, (q - a) / 2, c, a), f.globalAlpha = .5 * t, f.fillRect(0, 0, m, q))) : (f.globalAlpha = .5 * t, f.fillRect(0, 0, m, q)), f.globalAlpha = 1) : Vb = !1;
        Ub = H
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
                var text = new Oa(18, (getDarkBool() ? '#F2FBFF' : '#111111'), true, (getDarkBool() ? '#111111' : '#F2FBFF'));
                text.r(dText[i]);
                var textRender = text.D();
                d.drawImage(textRender, dPoints[i][0] - (textRender.width / 2), dPoints[i][1] - (textRender.height / 2));
            }

        }
        d.restore();
    }
    function sc() {
        f.fillStyle = Ma ? "#111111" :
            "#F2FBFF";
        f.fillRect(0, 0, m, q);
        f.save();
        f.strokeStyle = Ma ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * g;
        for (var a = m / g, c = q / g, b = (-v + a / 2) % 50; b < a; b += 50)f.beginPath(), f.moveTo(b * g - .5, 0), f.lineTo(b * g - .5, c * g), f.stroke();
        for (b = (-w + c / 2) % 50; b < c; b += 50)f.beginPath(), f.moveTo(0, b * g - .5), f.lineTo(a * g, b * g - .5), f.stroke();
        f.restore()
    }

    function tc() {
        if (xb && pb.width) {
            var a = m / 5;
            f.drawImage(pb, 5, 5, a, a)
        }
    }

    function Tb() {
        for (var a = 0, c = 0; c < k.length; c++)a += k[c].h * k[c].h;
        return a
    }

    function Kb() {
        D = null;
        if (null != E || 0 != y.length)if (null != E || Pa) {
            D = document.createElement("canvas");
            var a = D.getContext("2d"), c = 60, c = null == E ? c + 24 * y.length : c + 180, b = Math.min(200, .3 * m) / 200;
            D.width = 200 * b;
            D.height = c * b;
            a.scale(b, b);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, c);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            b = null;
            b = ma("leaderboard");
            a.font = "30px Ubuntu";
            a.fillText(b, 100 - a.measureText(b).width / 2, 40);
            if (null == E)for (a.font = "20px Ubuntu", c = 0; c < y.length; ++c)b = y[c].name || ma("unnamed_cell"), Pa || (b = ma("unnamed_cell")), -1 != C.indexOf(y[c].id) ? (k[0].name &&
            (b = k[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", b = c + 1 + ". " + b, a.fillText(b, 100 - a.measureText(b).width / 2, 70 + 24 * c); else for (c = b = 0; c < E.length; ++c) {
                var d = b + E[c] * Math.PI * 2;
                a.fillStyle = uc[c + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, b, d, !1);
                a.fill();
                b = d
            }
        }
    }

    function vc(a) {
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

    function wc(a) {
        if (null == a || 0 == a.length)return null;
        if (!ra.hasOwnProperty(a)) {
            var c = new Image;
            if (":" == a[0])c.src = a.slice(1); else if ("%" == a[0]) {
                if (!d.MC || !d.MC.getSkinInfo)return null;
                var b = d.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == b)return null;
                c.src = d.ASSETS_ROOT + "skins/premium/" + b.url
            }
            ra[a] = c
        }
        return 0 != ra[a].width && ra[a].complete ? ra[a] : null
    }

    function qb(a, c, b, d, e) {
        this.Q = a;
        this.x = c;
        this.y = b;
        this.d = d;
        this.b = e
    }

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

    function oc(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Oa(a, c, b, d) {
        a && (this.n = a);
        c && (this.N = c);
        this.P = !!b;
        d && (this.o = d)
    }

    function xc(a) {
        for (var c = a.length, b, d; 0 < c;)d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b
    }

    function da(a, c) {
        var b = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        if (null == c && d.localStorage[Z]) {
            var s = JSON.parse(d.localStorage[Z]);
            s.xp = a.xp;
            s.xpNeeded = a.xpNeeded;
            s.level = a.level;
            d.localStorage[Z] = JSON.stringify(s)
        }
        if (b) {
            var h = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], b = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], s = e(".agario-profile-panel .progress-bar-star").first().text();
            if (s != a.level)da({xp: b, xpNeeded: b, level: s}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    da({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        da(a, c)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), p = function () {
                    var b;
                    b = (Date.now() - f) / 1E3;
                    b = 0 > b ? 0 : 1 < b ? 1 : b;
                    b = b * b * (3 - 2 * b);
                    e(".agario-exp-bar .progress-bar-text").text(~~(h + (a.xp - h) * b) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * (h + (a.xp - h) * b) / a.xpNeeded).toFixed(2) +
                        "%");
                    1 > b ? d.requestAnimationFrame(p) : c && c()
                };
                d.requestAnimationFrame(p)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level), e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%"), c && c()
    }

    function Wb(a) {
        "string" == typeof a && (a = JSON.parse(a));
        d.localStorage[Z] = JSON.stringify(a);
        F = a.authToken;
        var c = a.name, c = c.substring(0, c.indexOf(" "));
        e(".agario-profile-name").text(c);
        Jb();
        da({xp: a.xp, xpNeeded: a.xpNeeded, level: a.level});
        e("#helloContainer").attr("data-logged-in", "1")
    }

    function yc(a) {
        a = a.split("\n");
        Wb({name: a[0], fbid: a[1], authToken: a[2], expires: 1E3 * +a[3], level: +a[4], xp: +a[5], xpNeeded: +a[6]})
    }

    function rb(a) {
        if ("connected" == a.status && +d.localStorage.wannaLogin) {
            var c = a.authResponse.accessToken;
            null == c || "undefined" == c || "" == c ? (3 > Xb && (Xb++, d.facebookRelogin()), d.logout()) : (d.localStorage.fbTokenCache = c, delete d.localStorage.wannaLogin, console.log("doLogin because fb logged in"), d.MC.doLoginWithFB(c), d.FB.api("/me/picture?width=180&height=180", function (a) {
                d.localStorage.fbPictureCache = a.data.url;
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), null != F ? d.checkSocialAPIToken(a) : d.getSocialAPIToken())
        }
    }
    /**
     * @author nguyenvanduocit
     * @type {number}
     */
    var currenConnecttTry = 0;
    var maxConnectRetry = 50;
    function Db(a) {
        la(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        sb("#" + d.encodeURIComponent(a));
        e.ajax(ja + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (c) {
                c = c.split("\n");
                /**
                 * @author nguyenvanduocit
                 */
                var wantedIp = window.getWantedIp();
                if(wantedIp && wantedIp !== c[0].trim()){
                    console.log('Found ',c[0],", Wanted : ",wantedIp );
                    if(currenConnecttTry <= maxConnectRetry){
                        currenConnecttTry++;
                        AgarBot.pubsub.trigger('findServer:retry', {time:currenConnecttTry});
                        setTimeout(function(){Db(a);}, 2e3);
                    }else{
                        AgarBot.pubsub.trigger('findServer:ipNotFound');
                    }
                }else{
                    e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                    e("#helloContainer").attr("data-party-state", "5");
                    la(":party");
                    cb("ws://" + c[0], a)
                }
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })
    }

    function sb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function nc(a, c) {
        var b = -1 != C.indexOf(a.id), d = -1 != C.indexOf(c.id), e = 30 > c.size;
        b && e && ++jb;
        e || !b || d || c.U & 32 || ++La
    }

    function Yb(a) {
        a = ~~a;
        var c = (a % 60).toString();
        a = (~~(a / 60)).toString();
        2 > c.length && (c = "0" + c);
        return a + ":" + c
    }

    function zc() {
        if (null == y)return 0;
        for (var a = 0; a < y.length; ++a)if (-1 != C.indexOf(y[a].id))return a + 1;
        return 0
    }

    function pc() {
        e(".stats-food-eaten").text(jb);
        e(".stats-time-alive").text(Yb((nb - lb) / 1E3));
        e(".stats-leaderboard-time").text(Yb(mb));
        e(".stats-highest-mass").text(~~(N / 100));
        e(".stats-cells-eaten").text(La);
        e(".stats-top-position").text(0 == Y ? ":(" : Y);
        var a = document.getElementById("statsGraph");
        if (a) {
            var c = a.getContext("2d"), b = a.width, a = a.height;
            c.clearRect(0, 0, b, a);
            if (2 < z.length) {
                for (var d = 200, h = 0; h < z.length; h++)d =
                    Math.max(z[h], d);
                c.lineWidth = 3;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.strokeStyle = kb;
                c.fillStyle = kb;
                c.beginPath();
                c.moveTo(0, a - z[0] / d * (a - 10) + 10);
                for (h = 1; h < z.length; h += Math.max(~~(z.length / b), 1)) {
                    for (var f = h / (z.length - 1) * b, p = [], g = -20; 20 >= g; ++g)0 > h + g || h + g >= z.length || p.push(z[h + g]);
                    p = p.reduce(function (a, c) {
                            return a + c
                        }) / p.length / d;
                    c.lineTo(f, a - p * (a - 10) + 10)
                }
                c.stroke();
                c.globalAlpha = .5;
                c.lineTo(b, a);
                c.lineTo(0, a);
                c.fill();
                c.globalAlpha = 1
            }
        }
    }

    var B = {};
    (function () {
        var a = d.location.search;
        "?" == a.charAt(0) &&
        (a = a.slice(1));
        for (var a = a.split("&"), c = 0; c < a.length; c++) {
            var b = a[c].split("=");
            B[b[0]] = b[1]
        }
    })();
    "fb" in B || "miniclip" in B || "http:" == d.location.protocol || (d.location.href = "http:" + d.location.href.substring(d.location.protocol.length));
    d.MC = function () {
    };
    if (void 0 != d.EnvConfig) {
        var L = d.EnvConfig;
        d.EnvConfig = L
    }
    if (!d.agarioNoInit) {
        var tb = d.location.protocol, db = "https:" == tb;
        B.master && (L.master_url = B.master);
        var ja = tb + "//" + L.master_url + "/", Qa = d.navigator.userAgent;
        if (-1 != Qa.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Qa.indexOf("iPhone") || -1 != Qa.indexOf("iPad") || -1 != Qa.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            //@author nguyenvanduocit
            var Sa, f, P, m, q, ia = null, r = null, v = 0, w = 0, C = [], k = [], M = {}, x = [], ca = [], y = [], ta = 0, ua = 0, Aa = -1, Ba = -1, rc = 0, H = 0, Ub = 0, K = null, Ha = 0, Ia = 0, Ja = 1E4, Ka = 1E4, g = 1, g2 = 1, A = null, ub = !0, Pa = !0, vb = !1, ib = !1, N = 0, Ma = !1, Zb = !1, oa = v = ~~((Ha + Ja) / 2), pa = w = ~~((Ia + Ka) / 2), qa = 1, T = "", E = null, Ra = !1, gb = !1, eb = 0, fb = 0, Fa = 0, Ga = 0, uc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], ob = !1, na = !1, Lb = 0, F = null, S = 1, t = 1, ka = !1, Ua = 0, Vb = !0, hb = null, G = new Image,
            // @author nguyenvanduocit
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
                names = ["SenViet.org"],
                firstStart = true;
                originalName = names[Math.floor(Math.random() * names.length)],
                sessionScore = 0,
                serverIP = "",
                interNodes = [],
                lifeTimer = new Date(),
                bestTime = 0,
                botIndex = 0,
                reviving = false,
                message = [];
            G.src = "/img/background.png";
            var xb = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent), pb = new Image;
            pb.src = "/img/split.png";
            var $b = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == $b || null == $b.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var Ca = null;
                d.setNick = function (a) {
                    // @author nguyenvanduocit
                    firstStart = false;
                    originalName = a;
                    if (getPlayer().length == 0) {
                        lifeTimer = new Date();
                    }
                    d.ga && d.ga("send", "event", "Nick", a.toLowerCase());
                    Eb();
                    K = a;
                    Ob();
                    N = 0
                };
                d.setRegion = wa;
                var Xa = !0;
                d.setSkins = function (a) {
                    ub = a
                };
                d.setNames = function (a) {
                    Pa = a
                };
                d.setDarkTheme = function (a) {
                    Ma = a
                };
                d.setColors = function (a) {
                    vb = a
                };
                d.setShowMass = function (a) {
                    Zb = a
                };
                d.spectate = function () {
                    K = null;
                    J(1);
                    Eb()
                };
                d.setGameMode = function (a) {
                    a != T && (":party" == T && e("#helloContainer").attr("data-party-state", "0"), la(a), ":party" != a && Q())
                };
                d.setAcid = function (a) {
                    ob = a
                };
                e.get(tb + "//gc.agar.io", function (a) {
                    var c = a.split(" ");
                    a = c[0];
                    c = c[1] || "";
                    -1 == ["UA"].indexOf(a) && ac.push("ussr");
                    sa.hasOwnProperty(a) && ("string" == typeof sa[a] ? A || wa(sa[a]) : sa[a].hasOwnProperty(c) && (A || wa(sa[a][c])))
                }, "text");
                var Cb = function (a) {
                    return a in B ? +B[a] : null != d.localStorage ? (null == d.localStorage[a] && (d.localStorage[a] = 0 + ~~(100 * Math.random())), +d.localStorage[a]) : 0
                }, R = "debugads" in B, xa = {}, bb = !0, hc = 0, Fb = !1, u = {aa: [], ab: [], ac: []};
                d.adSlots = u;
                d.getABGroup = Za;
                d.refreshAd = Ya;
                var ya = {w: !1};
                d.agarAdModule = ya;
                var $a = !1, ab = null, ba = function (a) {
                    a.defineSlot = function (a, b, e) {
                        var h = d.googletag;
                        return {type: "dfpads", data: h.defineSlot(a, b, e).addService(h.pubads())}
                    };
                    return a
                }({});
                d.googleAdsModule = ba;
                var Wa = function (a) {
                    for (var c = 0; c < a.length; c++)"type" in a[c] && "rubicon" != a[c].type || (R && console.log("Rubicon: destroying:" +
                        a[c].data.id, a[c]), aa.W(a[c].data.id))
                }, aa = function (a) {
                    a.F = function (a, b, d) {
                        var e = "https:" == document.location.protocol ? "https:" : "http:";
                        b = b.split("x");
                        var f = a + "-fif", g = document.createElement("iframe");
                        g.style.cssText = "width: " + b[0] + "px; height: " + b[1] + "px; border: 0; margin: 0; padding: 0; overflow: hidden;";
                        g.setAttribute("scrolling", "no");
                        g.src = "about:blank";
                        g.id = f;
                        document.getElementById(a).appendChild(g);
                        a = g.contentWindow ? g.contentWindow.document : g.contentDocument.document;
                        a.open().write("<html>\n<head>\n<script type='text/javascript'>inDapIF=true;\n\x3c/script>\n</head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Smart Tag --\x3e\n<script type='text/javascript'>\nrp_account = '" +
                            d.acct + "';\nrp_site = '" + d.site + "';\nrp_zonesize  = '" + d.zone + "-" + d.size + "';\nrp_adtype = 'js';\nrp_kw = '" + d.kw + "';\nrp_visitor = " + d.visitor + ";\nrp_inventory = " + d.inventory + ";\n\x3c/script>\n<script type='text/javascript' src= " + e + "//ads.rubiconproject.com/ad/" + d.acct + '.js">\x3c/script>\n</body>\n</html>');
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
                    a.la = function (a, b, d) {
                        var h = a + "-fif", f = e("#" + h);
                        null != f ? f.remove() : console.log("couldn't find element", f, h);
                        this.F(a, b, d)
                    };
                    a.W = function (a) {
                        a += "-fif";
                        var b = e("#" + a);
                        null != b ? b.remove() : console.log("couldn't find element", b, a)
                    };
                    a.ma = function (a, b, d) {
                        this.F(a, b, d)
                    };
                    return a
                }({});
                d.rubiconAds = aa;
                var sa = {
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
                }, U = null;
                d.connect = cb;
                var Ea = 500, Pb = -1, Qb = -1;
                d.refreshPlayerInfo = function () {
                    J(253)
                };
                var D = null, I = 1, Na = null, Ab = function () {
                    var a = Date.now(), c = 1E3 / 60;
                    return function () {
                        d.requestAnimationFrame(Ab);
                        var b = Date.now(), e = b - a;
                        e > c && (a = b - e % c, !fa() || 240 > Date.now() - Lb ? Rb() : console.warn("Skipping draw"), Ac())
                    }
                }(), ga = {}, ac = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), Bc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), ra = {};
                qb.prototype = {Q: null, x: 0, y: 0, d: 0, b: 0};
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
                    h: 0,
                    U: 0,
                    L: 0,
                    X: 0,
                    u: !1,
                    c: !1,
                    g: !1,
                    M: !0,
                    T: 0,
                    J: null,
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
                        delete M[this.id];
                        a = k.indexOf(this);
                        -1 != a && (ib = !0, k.splice(a, 1));
                        a = C.indexOf(this.id);
                        -1 != a && C.splice(a, 1);
                        this.u = !0;
                        0 < this.T && ca.push(this)
                    },
                    f: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    q: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Oa(this.f(), "#FFFFFF", !0, "#000000") : this.i.G(this.f()), this.i.r(this.name)
                    },
                    R: function () {
                        for (var a = this.v(); this.a.length > a;) {
                            var c = ~~(Math.random() * this.a.length);
                            this.a.splice(c, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new qb(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)c = ~~(Math.random() * this.a.length), c = this.a[c], this.a.push(new qb(this, c.x, c.y, c.d, c.b))
                    },
                    v: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var c = this.size;
                        this.c || (c *= g);
                        c *= I;
                        return ~~Math.max(c, a)
                    },
                    ea: function () {
                        this.R();
                        for (var a = this.a, c = a.length, b = 0; b < c; ++b) {
                            var d = a[(b - 1 + c) % c].b, e = a[(b + 1) % c].b;
                            a[b].b += (Math.random() - .5) * (this.g ? 3 : 1);
                            a[b].b *= .7;
                            10 < a[b].b && (a[b].b = 10);
                            -10 > a[b].b && (a[b].b = -10);
                            a[b].b = (d + e + 8 * a[b].b) / 10
                        }
                        for (var f = this, p = this.c ? 0 : (this.id / 1E3 + H / 1E4) % (2 * Math.PI), b = 0; b < c; ++b) {
                            var n = a[b].d, d = a[(b - 1 + c) % c].d, e = a[(b + 1) % c].d;
                            if (15 < this.size && null != ia &&
                                20 < this.size * g && 0 < this.id) {
                                var k = !1, l = a[b].x, O = a[b].y;
                                ia.fa(l - 5, O - 5, 10, 10, function (a) {
                                    a.Q != f && 25 > (l - a.x) * (l - a.x) + (O - a.y) * (O - a.y) && (k = !0)
                                });
                                !k && (a[b].x < Ha || a[b].y < Ia || a[b].x > Ja || a[b].y > Ka) && (k = !0);
                                k && (0 < a[b].b && (a[b].b = 0), a[b].b -= 1)
                            }
                            n += a[b].b;
                            0 > n && (n = 0);
                            n = this.g ? (19 * n + this.size) / 20 : (12 * n + this.size) / 13;
                            a[b].d = (d + e + 8 * n) / 10;
                            d = 2 * Math.PI / c;
                            e = this.a[b].d;
                            this.c && 0 == b % 2 && (e += 5);
                            a[b].x = this.x + Math.cos(d * b + p) * e;
                            a[b].y = this.y + Math.sin(d * b + p) * e
                        }
                    },
                    K: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (H - this.L) / 120;
                        a = 0 >
                        a ? 0 : 1 < a ? 1 : a;
                        var c = 0 > a ? 0 : 1 < a ? 1 : a;
                        this.f();
                        if (this.u && 1 <= c) {
                            var b = ca.indexOf(this);
                            -1 != b && ca.splice(b, 1)
                        }
                        this.x = a * (this.B - this.l) + this.l;
                        this.y = a * (this.C - this.m) + this.m;
                        this.size = c * (this.h - this.k) + this.k;
                        return c
                    },
                    H: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < v - m / 2 / g || this.y + this.size + 40 < w - q / 2 / g || this.x - this.size - 40 > v + m / 2 / g || this.y - this.size - 40 > w + q / 2 / g ? !1 : !0
                    },
                    p: function (a) {
                        if (this.H()) {
                            ++this.T;
                            var c = 0 < this.id && !this.c && !this.g && .4 > g;
                            5 > this.v() && 0 < this.id && (c = !0);
                            if (this.M && !c)for (var b = 0; b < this.a.length; b++)this.a[b].d = this.size;
                            this.M = c;
                            a.save();
                            this.X = H;
                            b = this.K();
                            this.u && (a.globalAlpha *= 1 - b);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            vb ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (b = vc(this.J) || this.color, ub && ":teams" != T || (b = this.color), a.fillStyle = b, a.strokeStyle = b);
                            if (c)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else {
                                this.ea();
                                a.beginPath();
                                var e = this.v();
                                a.moveTo(this.a[0].x, this.a[0].y);
                                for (b = 1; b <= e; ++b) {
                                    var h = b % e;
                                    a.lineTo(this.a[h].x, this.a[h].y)
                                }
                            }
                            a.closePath();
                            e = this.name.toLowerCase();
                            !this.g && ub && ":teams" != T ? (b = wc(this.J)) || (-1 != ac.indexOf(e) ? (ga.hasOwnProperty(e) || (ga[e] = new Image, ga[e].src = d.ASSETS_ROOT + "skins/" + e + ".png"), b = 0 != ga[e].width && ga[e].complete ? ga[e] : null) : b = null) : b = null;
                            h = b;
                            c || a.stroke();
                            a.fill();
                            null != h && (a.save(), a.clip(), b = Math.max(this.size, this.h), a.drawImage(h, this.x - b - 5, this.y - b - 5, 2 * b + 10, 2 * b + 10), a.restore());
                            (vb || 15 < this.size) && !c && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;
                            b = -1 != k.indexOf(this);
                            c = ~~this.y;
                            if (0 != this.id && (Pa || b) && this.name && this.i && (null == h || -1 == Bc.indexOf(e))) {
                                h = this.i;
                                h.r(this.name);
                                h.G(this.f());
                                e = 0 >= this.id ? 1 : Math.ceil(10 * g) / 10;
                                h.V(e);
                                var h = h.D(), f = ~~(h.width / e), p = ~~(h.height / e);
                                a.drawImage(h, ~~this.x - ~~(f / 2), c - ~~(p / 2), f, p);
                                c += h.height / 2 / e + 4
                            }
                            0 < this.id && Zb && (b || 0 == k.length && (!this.c || this.g) && 20 < this.size) && (null == this.I && (this.I = new Oa(this.f() / 2, "#FFFFFF", !0, "#000000")), b = this.I, b.G(this.f() / 2), b.r(~~(this.size * this.size / 100)), e = Math.ceil(10 * g) / 10,
                                b.V(e), h = b.D(), f = ~~(h.width / e), p = ~~(h.height / e), a.drawImage(h, ~~this.x - ~~(f / 2), c - ~~(p / 2), f, p));
                            a.restore()
                        }
                    }
                };
                Oa.prototype = {
                    t: "",
                    N: "#000000",
                    P: !1,
                    o: "#000000",
                    n: 16,
                    j: null,
                    O: null,
                    e: !1,
                    s: 1,
                    G: function (a) {
                        this.n != a && (this.n = a, this.e = !0)
                    },
                    V: function (a) {
                        this.s != a && (this.s = a, this.e = !0)
                    },
                    setStrokeColor: function (a) {
                        this.o != a && (this.o = a, this.e = !0)
                    },
                    r: function (a) {
                        a != this.t && (this.t = a, this.e = !0)
                    },
                    D: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.O = this.j.getContext("2d"));
                        if (this.e) {
                            this.e = !1;
                            var a = this.j, c = this.O, b = this.t, d = this.s, e = this.n, f = e + "px Ubuntu";
                            c.font = f;
                            var g = ~~(.2 * e);
                            a.width = (c.measureText(b).width + 6) * d;
                            a.height = (e + g) * d;
                            c.font = f;
                            c.scale(d, d);
                            c.globalAlpha = 1;
                            c.lineWidth = 3;
                            c.strokeStyle = this.o;
                            c.fillStyle = this.N;
                            this.P && c.strokeText(b, 3, e - g / 2);
                            c.fillText(b, 3, e - g / 2)
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
                var gc = {
                    init: function (a) {
                        function c(a) {
                            a < d && (a = d);
                            a > f && (a = f);
                            return ~~((a - d) / 32)
                        }

                        function b(a) {
                            a < e && (a = e);
                            a > g && (a = g);
                            return ~~((a - e) / 32)
                        }

                        var d = a.ca, e = a.da, f = a.$, g = a.ba, n = ~~((f - d) / 32) + 1, k = ~~((g - e) / 32) + 1, l = Array(n * k);
                        return {
                            Z: function (a) {
                                var d = c(a.x) + b(a.y) * n;
                                null ==
                                l[d] ? l[d] = a : Array.isArray(l[d]) ? l[d].push(a) : l[d] = [l[d], a]
                            }, fa: function (a, d, e, f, h) {
                                var g = c(a), p = b(d);
                                a = c(a + e);
                                d = b(d + f);
                                if (0 > g || g >= n || 0 > p || p >= k)debugger;
                                for (; p <= d; ++p)for (f = g; f <= a; ++f)if (e = l[f + p * n], null != e)if (Array.isArray(e))for (var m = 0; m < e.length; m++)h(e[m]); else h(e)
                            }
                        }
                    }
                }, Mb = function () {
                    var a = new ea(0, 0, 0, 32, "#ED1C24", ""), c = document.createElement("canvas");
                    c.width = 32;
                    c.height = 32;
                    var b = c.getContext("2d");
                    return function () {
                        0 < k.length && (a.color = k[0].color, a.q(k[0].name));
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
                    Mb()
                });
                var Z = "loginCache3", Xb = 0;
                d.checkSocialAPIToken = function (a) {
                    e.ajax(ja + "checkToken", {
                        error: function () {
                            F = null;
                            rb(a)
                        }, success: function (a) {
                            a = a.split("\n");
                            da({level: +a[0], xp: +a[1], xpNeeded: +a[2]})
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: F
                    })
                };
                d.getSocialAPIToken = function () {
                    e.ajax(ja + "facebookLogin", {
                        error: function () {
                            F = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        },
                        success: yc,
                        dataType: "text",
                        method: "POST",
                        cache: !1,
                        crossDomain: !0,
                        data: d.localStorage.fbTokenCache
                    })
                };
                d.facebookLogin = function () {
                    d.localStorage.wannaLogin = 1
                };
                d.checkLoginStatus = function () {
                    d.gameServerLogin();
                    if (+d.localStorage.wannaLogin) {
                        var a = d.localStorage.fbTokenCache;
                        a && (delete d.localStorage.wannaLogin, d.MC.doLoginWithFB(a, !0))
                    }
                };
                d.fbAsyncInit = function () {
                    function a() {
                        d.localStorage.wannaLogin = 1;
                        null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : d.FB.login(function (a) {
                            rb(a)
                        }, {scope: "public_profile, email"})
                    }

                    d.FB.init({appId: L.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    d.FB.Event.subscribe("auth.statusChange", function (c) {
                        console.log("window.localStorage['wannaLogin'] = " + d.localStorage.wannaLogin);
                        +d.localStorage.wannaLogin && ("connected" == c.status ? rb(c) : (console.log("user not connected, facebookLogin()"), a()))
                    });
                    d.facebookRelogin = a;
                    d.facebookLogin = a
                };
                d.logout = function () {
                    F = null;
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    delete d.localStorage.wannaLogin;
                    delete d.localStorage[Z];
                    delete d.localStorage.fbPictureCache;
                    delete d.localStorage.fbTokenCache;
                    Q();
                    d.MC.doLogout()
                };
                d.gameServerLogin = function () {
                    if (+d.localStorage.wannaLogin) {
                        var a = d.localStorage[Z];
                        a && Wb(a);
                        d.localStorage.fbPictureCache && e(".agario-profile-picture").attr("src", d.localStorage.fbPictureCache)
                    }
                };
                e(function () {
                    d.localStorage[Z] && (d.facebookLogin(), d.gameServerLogin())
                });
                var Ac = function () {
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

                    for (var c = new ea(-1, 0, 0, 32, "#5bc0de", ""), b = new ea(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], g = 0; g < d.length; ++g) {
                        var k = g / d.length * 12, n = 30 * Math.sqrt(g / d.length);
                        f.push(new ea(-1, Math.cos(k) * n, Math.sin(k) * n, 10, d[g], ""))
                    }
                    xc(f);
                    var m = document.createElement("canvas");
                    m.getContext("2d");
                    m.width = m.height = 70;
                    a(b, m, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var b = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(m, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (b = b.attr("data-itr")) && (b = ma(b));
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
                    U = function (a) {
                        sb("/#" + d.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    Q()
                };
                d.joinParty = Db;
                d.cancelParty = function () {
                    sb("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    la("");
                    Q()
                };
                var z = [], jb = 0, kb = "#000000", $ = !1, Da = !1, lb = 0, nb = 0, mb = 0, La = 0, Y = 0, Nb = !0;
                setInterval(function () {
                    Da && z.push(Tb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = zc();
                    0 != a && (++mb, 0 == Y && (Y = a), Y = Math.min(Y, a))
                }, 1E3);
                d.closeStats = function () {
                    $ = !1;
                    e("#stats").hide();
                    var a = u.ab;
                    Va(a);
                    Wa(a);
                    va(0)
                };
                d.setSkipStats = function (a) {
                    Nb = !a
                };
                e(function () {
                    e(bc);
                    "MAsyncInit" in d && d.MAsyncInit()
                })
            }
        }
    }
    /**
     * Custom function
     * @author nguyenvanduocit
     */
    //UPDATE
    function computeDistance(x1, y1, x2, y2) {
        var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
        var ydis = y1 - y2;
        var distance = Math.sqrt(xdis * xdis + ydis * ydis);

        return distance;
    }
    window.setPoint = function(x, y) {
        Aa = x;
        Ba = y;
    };
    window.getDarkBool = function() {
        return Ma;
    };
    window.getMapStartX = function() {
        return Ha;
    };
    window.getMapStartY = function() {
        return Ia;
    };
    window.getMapEndY = function() {
        return Ka;
    };
    window.getMapEndX = function() {
        return Ja;
    };
    /**
     * The game's current mode. (":ffa", ":experimental", ":teams". ":party")
     * @return {[type]} [description]
     */
    window.getMode = function() {
        return T;
    };
    /**
     * Returns an array with all the player's cells.
     * @return Player's cells
     */
    window.getPlayer = function() {
        return k;
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
    /**
     * [getCellsArray description]
     * @return {[type]} [description]
     */
    window.getCells = function() {
        return M;
    };
    /**
     * A timestamp since the last time the server sent any data.
     * @return Last update timestamp
     */
    window.getLastUpdate = function() {
        return H;
    };
    /**
     * Scaling ratio of the canvas. The bigger this ration,
     * the further that you see.
     * @return Screen scaling ratio.
     */
    window.getRatio = function() {
        return g;
    };
    window.getZoomlessRatio = function() {
        return g2;
    };
    window.getX = function() {
        return v;
    };
    window.getY = function() {
        return w;
    };
    /**
     * The canvas' width.
     * @return Integer Width
     */
    window.getWidth = function() {
        return m;
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
        return ta;
    };
    /**
     * The Y location of the mouse.
     * @return Integer Y
     */
    window.getMouseY = function() {
        return ua;
    };
    window.getPointX = function() {
        return Aa;
    };

    window.getPointY = function() {
        return Ba;
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
    window.getCurrentScore = function() {
        return K;
    };
    window.sendMessage = function(a){
        T(a);
    };
    window.createDataView = function(a) {
        return new DataView(new ArrayBuffer(a))
    };
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
            $('<div id="clanFormField"></div>').insertBefore($('#joinPartyToken'));
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
!function(a){a.Parse=a.Parse||{},a.Parse.VERSION="js1.5.0"}(this),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?void(this._wrapped=a):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.4.4";var y=x.each=x.forEach=function(a,b,d){if(null!=a)if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g in a)if(x.has(a,g)&&b.call(d,a[g],g,a)===c)return};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b]})},x.where=function(a,b,c){return x.isEmpty(b)?c?null:[]:x[c?"find":"filter"](a,function(a){for(var c in b)if(b[c]!==a[c])return!1;return!0})},x.findWhere=function(a,b){return x.where(a,b,!0)},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-(1/0);var d={computed:-(1/0),value:-(1/0)};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!b&&x.isEmpty(a))return 1/0;var d={computed:1/0,value:1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d};var B=function(a){return x.isFunction(a)?a:function(b){return b[a]}};x.sortBy=function(a,b,c){var d=B(b);return x.pluck(x.map(a,function(a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")};var C=function(a,b,c,d){var e={},f=B(b||x.identity);return y(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};x.groupBy=function(a,b,c){return C(a,b,c,function(a,b,c){(x.has(a,b)?a[b]:a[b]=[]).push(c)})},x.countBy=function(a,b,c){return C(a,b,c,function(a,b){x.has(a,b)||(a[b]=0),a[b]++})},x.sortedIndex=function(a,b,c,d){c=null==c?x.identity:B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return y(a,function(a){x.isArray(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(i.apply(d,arguments))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=h.call(arguments),b=x.max(x.pluck(a,"length")),c=new Array(b),d=0;b>d;d++)c[d]=x.pluck(a,""+d);return c},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f},x.bind=function(a,b){if(a.bind===w&&w)return w.apply(a,h.call(arguments,1));var c=h.call(arguments,2);return function(){return a.apply(b,c.concat(h.call(arguments)))}},x.partial=function(a){var b=h.call(arguments,1);return function(){return a.apply(this,b.concat(h.call(arguments)))}},x.bindAll=function(a){var b=h.call(arguments,1);return 0===b.length&&(b=x.functions(a)),y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b){var c,d,e,f,g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)};return function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},x.debounce=function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return function(){var c=[a];return g.apply(c,arguments),b.apply(this,c)}},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return 0>=a?b():function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=v||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&(b[b.length]=c);return b},x.values=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push(a[c]);return b},x.pairs=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push([c,a[c]]);return b},x.invert=function(a){var b={};for(var c in a)x.has(a,c)&&(b[a[c]]=c);return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)null==a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var E=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;c.push(a),d.push(b);var g=0,h=!0;if("[object Array]"==e){if(g=a.length,h=g==b.length)for(;g--&&(h=E(a[g],b[g],c,d)););}else{var i=a.constructor,k=b.constructor;if(i!==k&&!(x.isFunction(i)&&i instanceof i&&x.isFunction(k)&&k instanceof k))return!1;for(var l in a)if(x.has(a,l)&&(g++,!(h=x.has(b,l)&&E(a[l],b[l],c,d))))break;if(h){for(l in b)if(x.has(b,l)&&!g--)break;h=!g}}return c.pop(),d.pop(),h};x.isEqual=function(a,b){return E(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.times=function(a,b,c){for(var d=Array(a),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var F={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};F.unescape=x.invert(F.escape);var G={escape:new RegExp("["+x.keys(F.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(F.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(G[a],function(b){return F[a][b]})}}),x.result=function(a,b){if(null==a)return null;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),L.call(this,c.apply(x,a))}})};var H=0;x.uniqueId=function(a){var b=++H+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},K=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||I).source,(c.interpolate||I).source,(c.evaluate||I).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(K,function(a){return"\\"+J[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var L=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],L.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return L.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c="function"==typeof require?require:null;"undefined"!=typeof XMLHttpRequest?b.XMLHttpRequest=XMLHttpRequest:"function"==typeof require&&"undefined"==typeof require.ensure&&(b.XMLHttpRequest=c("xmlhttprequest").XMLHttpRequest),"undefined"!=typeof exports&&exports._?(b._=exports._.noConflict(),exports.Parse=b):b._=_.noConflict(),"undefined"!=typeof $&&(b.$=$);var d=function(){},e=function(a,c,e){var f;return f=c&&c.hasOwnProperty("constructor")?c.constructor:function(){a.apply(this,arguments)},b._.extend(f,a),d.prototype=a.prototype,f.prototype=new d,c&&b._.extend(f.prototype,c),e&&b._.extend(f,e),f.prototype.constructor=f,f.__super__=a.prototype,f};b.serverURL="https://api.parse.com","undefined"!=typeof process&&process.versions&&process.versions.node&&(b._isNode=!0),b.initialize=function(a,c,d){if(d)throw"Parse.initialize() was passed a Master Key, which is only allowed from within Node.js.";b._initialize(a,c)},b._initialize=function(a,c,d){b.applicationId=a,b.javaScriptKey=c,b.masterKey=d,b._useMasterKey=!1},b._isNode&&(b.initialize=b._initialize,b.Cloud=b.Cloud||{},b.Cloud.useMasterKey=function(){b._useMasterKey=!0}),b._getParsePath=function(a){if(!b.applicationId)throw"You need to call Parse.initialize before using Parse.";if(a||(a=""),!b._.isString(a))throw"Tried to get a Storage path that wasn't a String.";return"/"===a[0]&&(a=a.substring(1)),"Parse/"+b.applicationId+"/"+a},b._installationId=null,b._getInstallationId=function(){if(b._installationId)return b.Promise.as(b._installationId);var a=b._getParsePath("installationId");return b.Storage.getItemAsync(a).then(function(c){if(b._installationId=c,!b._installationId||""===b._installationId){var d=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return b._installationId=d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d(),b.Storage.setItemAsync(a,b._installationId)}return b.Promise.as(b._installationId)})},b._parseDate=function(a){var b=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),c=b.exec(a);if(!c)return null;var d=c[1]||0,e=(c[2]||1)-1,f=c[3]||0,g=c[4]||0,h=c[5]||0,i=c[6]||0,j=c[8]||0;return new Date(Date.UTC(d,e,f,g,h,i,j))},b._ajaxIE8=function(a,c,d){var e=new b.Promise,f=new XDomainRequest;return f.onload=function(){var a;try{a=JSON.parse(f.responseText)}catch(b){e.reject(b)}a&&e.resolve(a)},f.onerror=f.ontimeout=function(){var a={responseText:JSON.stringify({code:b.Error.X_DOMAIN_REQUEST,error:"IE's XDomainRequest does not supply error info."})};e.reject(a)},f.onprogress=function(){},f.open(a,c),f.send(d),e},b._useXDomainRequest=function(){return"undefined"!=typeof XDomainRequest?"withCredentials"in new XMLHttpRequest?!1:!0:!1},b._ajax=function(a,c,d,e,f){var g={success:e,error:f};if(b._useXDomainRequest())return b._ajaxIE8(a,c,d)._thenRunCallbacks(g);var h=new b.Promise,i=0,j=function(){var e=!1,f=new b.XMLHttpRequest;f.onreadystatechange=function(){if(4===f.readyState){if(e)return;if(e=!0,f.status>=200&&f.status<300){var a;try{a=JSON.parse(f.responseText)}catch(b){h.reject(b)}a&&h.resolve(a,f.status,f)}else if(f.status>=500)if(++i<5){var c=Math.round(125*Math.random()*Math.pow(2,i));setTimeout(j,c)}else h.reject(f);else h.reject(f)}},f.open(a,c,!0),f.setRequestHeader("Content-Type","text/plain"),b._isNode&&f.setRequestHeader("User-Agent","Parse/"+b.VERSION+" (NodeJS "+process.versions.node+")"),f.send(d)};return j(),h._thenRunCallbacks(g)},b._extend=function(a,b){var c=e(this,a,b);return c.extend=this.extend,c},b._request=function(a){var c=a.route,d=a.className,e=a.objectId,f=a.method,g=a.useMasterKey,h=a.sessionToken,i=a.data;if(!b.applicationId)throw"You must specify your applicationId using Parse.initialize.";if(!b.javaScriptKey&&!b.masterKey)throw"You must specify a key using Parse.initialize.";if("batch"!==c&&"classes"!==c&&"events"!==c&&"files"!==c&&"functions"!==c&&"login"!==c&&"logout"!==c&&"push"!==c&&"requestPasswordReset"!==c&&"rest_verify_analytics"!==c&&"users"!==c&&"jobs"!==c&&"config"!==c&&"sessions"!==c&&"upgradeToRevocableSession"!==c)throw"Bad route: '"+c+"'.";var j=b.serverURL;if("/"!==j.charAt(j.length-1)&&(j+="/"),j+="1/"+c,d&&(j+="/"+d),e&&(j+="/"+e),i=b._.clone(i||{}),"POST"!==f&&(i._method=f,f="POST"),b._.isUndefined(g)&&(g=b._useMasterKey),i._ApplicationId=b.applicationId,g){if(!b.masterKey)throw new Error("Cannot use the Master Key, it has not been provided.");i._MasterKey=b.masterKey}else i._JavaScriptKey=b.javaScriptKey;return i._ClientVersion=b.VERSION,b._getInstallationId().then(function(a){return i._InstallationId=a,h?b.Promise.as({_sessionToken:h}):b.User._canUseCurrentUser()?b.User._currentAsync():b.Promise.as(null)}).then(function(a){a&&a._sessionToken&&(i._SessionToken=a._sessionToken),b.User._isRevocableSessionEnabled&&(i._RevocableSession="1");var c=JSON.stringify(i);return b._ajax(f,j,c)}).then(null,function(a){var c;if(a&&a.responseText)try{var d=JSON.parse(a.responseText);c=new b.Error(d.code,d.error)}catch(e){c=new b.Error(b.Error.INVALID_JSON,"Received an error with invalid JSON from Parse: "+a.responseText)}else c=new b.Error(b.Error.CONNECTION_FAILED,"XMLHttpRequest failed: "+JSON.stringify(a));return b.Promise.error(c)})},b._getValue=function(a,c){return a&&a[c]?b._.isFunction(a[c])?a[c]():a[c]:null},b._encode=function(a,c,d){var e=b._;if(a instanceof b.Object){if(d)throw"Parse.Objects not allowed here";if(!c||e.include(c,a)||!a._hasData)return a._toPointer();if(!a.dirty())return c=c.concat(a),b._encode(a._toFullJSON(c),c,d);throw"Tried to save an object with a pointer to a new, unsaved object."}if(a instanceof b.ACL)return a.toJSON();if(e.isDate(a)){if(isNaN(a))throw new Error("Cannot encode invalid Date");return{__type:"Date",iso:a.toJSON()}}if(a instanceof b.GeoPoint)return a.toJSON();if(e.isArray(a))return e.map(a,function(a){return b._encode(a,c,d)});if(e.isRegExp(a))return a.source;if(a instanceof b.Relation)return a.toJSON();if(a instanceof b.Op)return a.toJSON();if(a instanceof b.File){if(!a.url())throw"Tried to save an object containing an unsaved file.";return{__type:"File",name:a.name(),url:a.url()}}if(e.isObject(a)){var f={};return b._objectEach(a,function(a,e){f[e]=b._encode(a,c,d)}),f}return a},b._decode=function(a,c){var d=b._;if(!d.isObject(c))return c;if(d.isArray(c))return b._arrayEach(c,function(a,d){c[d]=b._decode(d,a)}),c;if(c instanceof b.Object)return c;if(c instanceof b.File)return c;if(c instanceof b.Op)return c;if(c.__op)return b.Op._decode(c);if("Pointer"===c.__type&&c.className){var e=b.Object._create(c.className);return e._finishFetch({objectId:c.objectId},!1),e}if("Object"===c.__type&&c.className){var f=c.className;delete c.__type,delete c.className;var g=b.Object._create(f);return g._finishFetch(c,!0),g}if("Date"===c.__type)return b._parseDate(c.iso);if("GeoPoint"===c.__type)return new b.GeoPoint({latitude:c.latitude,longitude:c.longitude});if("ACL"===a)return c instanceof b.ACL?c:new b.ACL(c);if("Relation"===c.__type){var h=new b.Relation(null,a);return h.targetClassName=c.className,h}if("File"===c.__type){var i=new b.File(c.name);return i._url=c.url,i}return b._objectEach(c,function(a,d){c[d]=b._decode(d,a)}),c},b._arrayEach=b._.each,b._traverse=function(a,c,d){if(a instanceof b.Object){if(d=d||[],b._.indexOf(d,a)>=0)return;return d.push(a),b._traverse(a.attributes,c,d),c(a)}return a instanceof b.Relation||a instanceof b.File?c(a):b._.isArray(a)?(b._.each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):b._.isObject(a)?(b._each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):c(a)},b._objectEach=b._each=function(a,c){var d=b._;d.isObject(a)?d.each(d.keys(a),function(b){c(a[b],b)}):d.each(a,c)},b._isNullOrUndefined=function(a){return b._.isNull(a)||b._.isUndefined(a)}}(this),function(root){root.Parse=root.Parse||{};var Parse=root.Parse,Storage={async:!1},hasLocalStorage="undefined"!=typeof localStorage;if(hasLocalStorage)try{localStorage.setItem("supported",!0),localStorage.removeItem("supported")}catch(e){hasLocalStorage=!1}if(hasLocalStorage)Storage.getItem=function(a){return localStorage.getItem(a)},Storage.setItem=function(a,b){return localStorage.setItem(a,b)},Storage.removeItem=function(a){return localStorage.removeItem(a)},Storage.clear=function(){return localStorage.clear()};else if("function"==typeof require){var AsyncStorage;try{AsyncStorage=eval("require('AsyncStorage')"),Storage.async=!0,Storage.getItemAsync=function(a){var b=new Parse.Promise;return AsyncStorage.getItem(a,function(a,c){a?b.reject(a):b.resolve(c)}),b},Storage.setItemAsync=function(a,b){var c=new Parse.Promise;return AsyncStorage.setItem(a,b,function(a){a?c.reject(a):c.resolve(b)}),c},Storage.removeItemAsync=function(a){var b=new Parse.Promise;return AsyncStorage.removeItem(a,function(a){a?b.reject(a):b.resolve()}),b},Storage.clear=function(){AsyncStorage.clear()}}catch(e){}}if(!Storage.async&&!Storage.getItem){var memMap=Storage.inMemoryMap={};Storage.getItem=function(a){return memMap.hasOwnProperty(a)?memMap[a]:null},Storage.setItem=function(a,b){memMap[a]=String(b)},Storage.removeItem=function(a){delete memMap[a]},Storage.clear=function(){for(var a in memMap)memMap.hasOwnProperty(a)&&delete memMap[a]}}Storage.async||(Storage.getItemAsync=function(a){return Parse.Promise.as(Storage.getItem(a))},Storage.setItemAsync=function(a,b){return Storage.setItem(a,b),Parse.Promise.as(b)},Storage.removeItemAsync=function(a){return Parse.Promise.as(Storage.removeItem(a))}),Parse.Storage=Storage}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Analytics=b.Analytics||{},c.extend(b.Analytics,{track:function(a,d,e){if(a=a||"",a=a.replace(/^\s*/,""),a=a.replace(/\s*$/,""),0===a.length)throw"A name for the custom event must be provided";return c.each(d,function(a,b){if(!c.isString(b)||!c.isString(a))throw'track() dimensions expects keys and values of type "string".'}),e=e||{},b._request({route:"events",className:a,method:"POST",data:{dimensions:d}})._thenRunCallbacks(e)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Config=function(){this.attributes={},this._escapedAttributes={}},b.Config.current=function(){if(b.Config._currentConfig)return b.Config._currentConfig;var a=new b.Config;if(b.Storage.async)return a;var c=b.Storage.getItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY));return c&&(a._finishFetch(JSON.parse(c)),b.Config._currentConfig=a),a},b.Config.get=function(a){a=a||{};var c=b._request({route:"config",method:"GET"});return c.then(function(a){if(!a||!a.params){var c=new b.Error(b.Error.INVALID_JSON,"Config JSON response invalid.");return b.Promise.error(c)}var d=new b.Config;return d._finishFetch(a),b.Config._currentConfig=d,d})._thenRunCallbacks(a)},b.Config.prototype={escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},get:function(a){return this.attributes[a]},_finishFetch:function(a){this.attributes=b._decode(null,c.clone(a.params)),b.Storage.async||b.Storage.setItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY),JSON.stringify(a))}},b.Config._currentConfig=null,b.Config._CURRENT_CONFIG_KEY="currentConfig"}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Error=function(a,b){this.code=a,this.message=b},c.extend(b.Error,{OTHER_CAUSE:-1,INTERNAL_SERVER_ERROR:1,CONNECTION_FAILED:100,OBJECT_NOT_FOUND:101,INVALID_QUERY:102,INVALID_CLASS_NAME:103,MISSING_OBJECT_ID:104,INVALID_KEY_NAME:105,INVALID_POINTER:106,INVALID_JSON:107,COMMAND_UNAVAILABLE:108,NOT_INITIALIZED:109,INCORRECT_TYPE:111,INVALID_CHANNEL_NAME:112,PUSH_MISCONFIGURED:115,OBJECT_TOO_LARGE:116,OPERATION_FORBIDDEN:119,CACHE_MISS:120,INVALID_NESTED_KEY:121,INVALID_FILE_NAME:122,INVALID_ACL:123,TIMEOUT:124,INVALID_EMAIL_ADDRESS:125,MISSING_CONTENT_TYPE:126,MISSING_CONTENT_LENGTH:127,INVALID_CONTENT_LENGTH:128,FILE_TOO_LARGE:129,FILE_SAVE_ERROR:130,DUPLICATE_VALUE:137,INVALID_ROLE_NAME:139,EXCEEDED_QUOTA:140,SCRIPT_FAILED:141,VALIDATION_ERROR:142,INVALID_IMAGE_DATA:150,UNSAVED_FILE_ERROR:151,INVALID_PUSH_TIME_ERROR:152,FILE_DELETE_ERROR:153,REQUEST_LIMIT_EXCEEDED:155,INVALID_EVENT_NAME:160,USERNAME_MISSING:200,PASSWORD_MISSING:201,USERNAME_TAKEN:202,EMAIL_TAKEN:203,EMAIL_MISSING:204,EMAIL_NOT_FOUND:205,SESSION_MISSING:206,MUST_CREATE_USER_THROUGH_SIGNUP:207,ACCOUNT_ALREADY_LINKED:208,INVALID_SESSION_TOKEN:209,LINKED_ID_MISSING:250,INVALID_LINKED_SESSION:251,UNSUPPORTED_SERVICE:252,AGGREGATE_ERROR:600,FILE_READ_ERROR:601,X_DOMAIN_REQUEST:602})}(this),function(){var a=this,b=a.Parse||(a.Parse={}),c=/\s+/,d=Array.prototype.slice;b.Events={on:function(a,b,d){var e,f,g,h,i;if(!b)return this;for(a=a.split(c),e=this._callbacks||(this._callbacks={}),f=a.shift();f;)i=e[f],g=i?i.tail:{},g.next=h={},g.context=d,g.callback=b,e[f]={tail:h,next:i?i.next:g},f=a.shift();return this},off:function(a,b,d){var e,f,g,h,i,j;if(f=this._callbacks){if(!(a||b||d))return delete this._callbacks,this;for(a=a?a.split(c):Object.keys(f),e=a.shift();e;)if(g=f[e],delete f[e],g&&(b||d)){for(h=g.tail,g=g.next;g!==h;)i=g.callback,j=g.context,(b&&i!==b||d&&j!==d)&&this.on(e,i,j),g=g.next;e=a.shift()}else e=a.shift();return this}},trigger:function(a){var b,e,f,g,h,i,j;if(!(f=this._callbacks))return this;for(i=f.all,a=a.split(c),j=d.call(arguments,1),b=a.shift();b;){if(e=f[b])for(g=e.tail;(e=e.next)!==g;)e.callback.apply(e.context||this,j);if(e=i)for(g=e.tail,h=[b].concat(j);(e=e.next)!==g;)e.callback.apply(e.context||this,h);b=a.shift()}return this}},b.Events.bind=b.Events.on,b.Events.unbind=b.Events.off}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.GeoPoint=function(a,d){c.isArray(a)?(b.GeoPoint._validate(a[0],a[1]),this.latitude=a[0],this.longitude=a[1]):c.isObject(a)?(b.GeoPoint._validate(a.latitude,a.longitude),this.latitude=a.latitude,this.longitude=a.longitude):c.isNumber(a)&&c.isNumber(d)?(b.GeoPoint._validate(a,d),this.latitude=a,this.longitude=d):(this.latitude=0,this.longitude=0);var e=this;this.__defineGetter__&&this.__defineSetter__&&(this._latitude=this.latitude,this._longitude=this.longitude,this.__defineGetter__("latitude",function(){return e._latitude}),this.__defineGetter__("longitude",function(){return e._longitude}),this.__defineSetter__("latitude",function(a){b.GeoPoint._validate(a,e.longitude),e._latitude=a}),this.__defineSetter__("longitude",function(a){b.GeoPoint._validate(e.latitude,a),e._longitude=a}))},b.GeoPoint._validate=function(a,b){if(-90>a)throw"Parse.GeoPoint latitude "+a+" < -90.0.";if(a>90)throw"Parse.GeoPoint latitude "+a+" > 90.0.";if(-180>b)throw"Parse.GeoPoint longitude "+b+" < -180.0.";if(b>180)throw"Parse.GeoPoint longitude "+b+" > 180.0."},b.GeoPoint.current=function(a){var c=new b.Promise;return navigator.geolocation.getCurrentPosition(function(a){c.resolve(new b.GeoPoint({latitude:a.coords.latitude,longitude:a.coords.longitude}))},function(a){c.reject(a)}),c._thenRunCallbacks(a)},b.GeoPoint.prototype={toJSON:function(){return b.GeoPoint._validate(this.latitude,this.longitude),{__type:"GeoPoint",latitude:this.latitude,longitude:this.longitude}},radiansTo:function(a){var b=Math.PI/180,c=this.latitude*b,d=this.longitude*b,e=a.latitude*b,f=a.longitude*b,g=c-e,h=d-f,i=Math.sin(g/2),j=Math.sin(h/2),k=i*i+Math.cos(c)*Math.cos(e)*j*j;return k=Math.min(1,k),2*Math.asin(Math.sqrt(k))},kilometersTo:function(a){return 6371*this.radiansTo(a)},milesTo:function(a){return 3958.8*this.radiansTo(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d="*";b.ACL=function(a){var d=this;if(d.permissionsById={},c.isObject(a))if(a instanceof b.User)d.setReadAccess(a,!0),d.setWriteAccess(a,!0);else{if(c.isFunction(a))throw"Parse.ACL() called with a function.  Did you forget ()?";b._objectEach(a,function(a,e){if(!c.isString(e))throw"Tried to create an ACL with an invalid userId.";d.permissionsById[e]={},b._objectEach(a,function(a,b){if("read"!==b&&"write"!==b)throw"Tried to create an ACL with an invalid permission type.";if(!c.isBoolean(a))throw"Tried to create an ACL with an invalid permission value.";d.permissionsById[e][b]=a})})}},b.ACL.prototype.toJSON=function(){return c.clone(this.permissionsById)},b.ACL.prototype._setAccess=function(a,d,e){if(d instanceof b.User?d=d.id:d instanceof b.Role&&(d="role:"+d.getName()),!c.isString(d))throw"userId must be a string.";if(!c.isBoolean(e))throw"allowed must be either true or false.";var f=this.permissionsById[d];if(!f){if(!e)return;f={},this.permissionsById[d]=f}e?this.permissionsById[d][a]=!0:(delete f[a],c.isEmpty(f)&&delete f[d])},b.ACL.prototype._getAccess=function(a,c){c instanceof b.User?c=c.id:c instanceof b.Role&&(c="role:"+c.getName());var d=this.permissionsById[c];return d&&d[a]?!0:!1},b.ACL.prototype.setReadAccess=function(a,b){this._setAccess("read",a,b)},b.ACL.prototype.getReadAccess=function(a){return this._getAccess("read",a)},b.ACL.prototype.setWriteAccess=function(a,b){this._setAccess("write",a,b)},b.ACL.prototype.getWriteAccess=function(a){return this._getAccess("write",a)},b.ACL.prototype.setPublicReadAccess=function(a){this.setReadAccess(d,a)},b.ACL.prototype.getPublicReadAccess=function(){return this.getReadAccess(d)},b.ACL.prototype.setPublicWriteAccess=function(a){this.setWriteAccess(d,a)},b.ACL.prototype.getPublicWriteAccess=function(){return this.getWriteAccess(d)},b.ACL.prototype.getRoleReadAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getReadAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.getRoleWriteAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getWriteAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleReadAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setReadAccess("role:"+a,d);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleWriteAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setWriteAccess("role:"+a,d);throw"role must be a Parse.Role or a String"}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Op=function(){this._initialize.apply(this,arguments)},b.Op.prototype={_initialize:function(){}},c.extend(b.Op,{_extend:b._extend,_opDecoderMap:{},_registerDecoder:function(a,c){b.Op._opDecoderMap[a]=c},_decode:function(a){var c=b.Op._opDecoderMap[a.__op];return c?c(a):void 0;
}}),b.Op._registerDecoder("Batch",function(a){var c=null;return b._arrayEach(a.ops,function(a){a=b.Op._decode(a),c=a._mergeWithPrevious(c)}),c}),b.Op.Set=b.Op._extend({_initialize:function(a){this._value=a},value:function(){return this._value},toJSON:function(){return b._encode(this.value())},_mergeWithPrevious:function(a){return this},_estimate:function(a){return this.value()}}),b.Op._UNSET={},b.Op.Unset=b.Op._extend({toJSON:function(){return{__op:"Delete"}},_mergeWithPrevious:function(a){return this},_estimate:function(a){return b.Op._UNSET}}),b.Op._registerDecoder("Delete",function(a){return new b.Op.Unset}),b.Op.Increment=b.Op._extend({_initialize:function(a){this._amount=a},amount:function(){return this._amount},toJSON:function(){return{__op:"Increment",amount:this._amount}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.amount());if(a instanceof b.Op.Set)return new b.Op.Set(a.value()+this.amount());if(a instanceof b.Op.Increment)return new b.Op.Increment(this.amount()+a.amount());throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a+this.amount():this.amount()}}),b.Op._registerDecoder("Increment",function(a){return new b.Op.Increment(a.amount)}),b.Op.Add=b.Op._extend({_initialize:function(a){this._objects=a},objects:function(){return this._objects},toJSON:function(){return{__op:"Add",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Add)return new b.Op.Add(a.objects().concat(this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a.concat(this.objects()):c.clone(this.objects())}}),b.Op._registerDecoder("Add",function(a){return new b.Op.Add(b._decode(void 0,a.objects))}),b.Op.AddUnique=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"AddUnique",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.AddUnique)return new b.Op.AddUnique(this._estimate(a.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.clone(a);return b._arrayEach(this.objects(),function(a){if(a instanceof b.Object&&a.id){var e=c.find(d,function(c){return c instanceof b.Object&&c.id===a.id});if(e){var f=c.indexOf(d,e);d[f]=a}else d.push(a)}else c.contains(d,a)||d.push(a)}),d}return c.clone(this.objects())}}),b.Op._registerDecoder("AddUnique",function(a){return new b.Op.AddUnique(b._decode(void 0,a.objects))}),b.Op.Remove=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"Remove",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return a;if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Remove)return new b.Op.Remove(c.union(a.objects(),this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.difference(a,this.objects());return b._arrayEach(this.objects(),function(a){a instanceof b.Object&&a.id&&(d=c.reject(d,function(c){return c instanceof b.Object&&c.id===a.id}))}),d}return[]}}),b.Op._registerDecoder("Remove",function(a){return new b.Op.Remove(b._decode(void 0,a.objects))}),b.Op.Relation=b.Op._extend({_initialize:function(a,d){this._targetClassName=null;var e=this,f=function(a){if(a instanceof b.Object){if(!a.id)throw"You can't add an unsaved Parse.Object to a relation.";if(e._targetClassName||(e._targetClassName=a.className),e._targetClassName!==a.className)throw"Tried to create a Parse.Relation with 2 different types: "+e._targetClassName+" and "+a.className+".";return a.id}return a};this.relationsToAdd=c.uniq(c.map(a,f)),this.relationsToRemove=c.uniq(c.map(d,f))},added:function(){var a=this;return c.map(this.relationsToAdd,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},removed:function(){var a=this;return c.map(this.relationsToRemove,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},toJSON:function(){var a=null,b=null,d=this,e=function(a){return{__type:"Pointer",className:d._targetClassName,objectId:a}},f=null;return this.relationsToAdd.length>0&&(f=c.map(this.relationsToAdd,e),a={__op:"AddRelation",objects:f}),this.relationsToRemove.length>0&&(f=c.map(this.relationsToRemove,e),b={__op:"RemoveRelation",objects:f}),a&&b?{__op:"Batch",ops:[a,b]}:a||b||{}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)throw"You can't modify a relation after deleting it.";if(a instanceof b.Op.Relation){if(a._targetClassName&&a._targetClassName!==this._targetClassName)throw"Related object must be of class "+a._targetClassName+", but "+this._targetClassName+" was passed in.";var d=c.union(c.difference(a.relationsToAdd,this.relationsToRemove),this.relationsToAdd),e=c.union(c.difference(a.relationsToRemove,this.relationsToAdd),this.relationsToRemove),f=new b.Op.Relation(d,e);return f._targetClassName=this._targetClassName,f}throw"Op is invalid after previous op."}return this},_estimate:function(a,c,d){if(a){if(a instanceof b.Relation){if(this._targetClassName)if(a.targetClassName){if(a.targetClassName!==this._targetClassName)throw"Related object must be a "+a.targetClassName+", but a "+this._targetClassName+" was passed in."}else a.targetClassName=this._targetClassName;return a}throw"Op is invalid after previous op."}var e=new b.Relation(c,d);e.targetClassName=this._targetClassName}}),b.Op._registerDecoder("AddRelation",function(a){return new b.Op.Relation(b._decode(void 0,a.objects),[])}),b.Op._registerDecoder("RemoveRelation",function(a){return new b.Op.Relation([],b._decode(void 0,a.objects))})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Relation=function(a,b){this.parent=a,this.key=b,this.targetClassName=null},b.Relation.prototype={_ensureParentAndKey:function(a,b){if(this.parent=this.parent||a,this.key=this.key||b,this.parent!==a)throw"Internal Error. Relation retrieved from two different Objects.";if(this.key!==b)throw"Internal Error. Relation retrieved from two different keys."},add:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation(a,[]);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},remove:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation([],a);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},toJSON:function(){return{__type:"Relation",className:this.targetClassName}},query:function(){var a,c;return this.targetClassName?(a=b.Object._getSubclass(this.targetClassName),c=new b.Query(a)):(a=b.Object._getSubclass(this.parent.className),c=new b.Query(a),c._extraOptions.redirectClassNameForKey=this.key),c._addCondition("$relatedTo","object",this.parent._toPointer()),c._addCondition("$relatedTo","key",this.key),c}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Promise=function(){this._resolved=!1,this._rejected=!1,this._resolvedCallbacks=[],this._rejectedCallbacks=[]},c.extend(b.Promise,{_isPromisesAPlusCompliant:!1,is:function(a){return a&&a.then&&c.isFunction(a.then)},as:function(){var a=new b.Promise;return a.resolve.apply(a,arguments),a},error:function(){var a=new b.Promise;return a.reject.apply(a,arguments),a},when:function(a){var c;c=a&&b._isNullOrUndefined(a.length)?arguments:a;var d=c.length,e=!1,f=[],g=[];if(f.length=c.length,g.length=c.length,0===d)return b.Promise.as.apply(this,f);var h=new b.Promise,i=function(){d-=1,0===d&&(e?h.reject(g):h.resolve.apply(h,f))};return b._arrayEach(c,function(a,c){b.Promise.is(a)?a.then(function(a){f[c]=a,i()},function(a){g[c]=a,e=!0,i()}):(f[c]=a,i())}),h},_continueWhile:function(a,c){return a()?c().then(function(){return b.Promise._continueWhile(a,c)}):b.Promise.as()}}),c.extend(b.Promise.prototype,{resolve:function(a){if(this._resolved||this._rejected)throw"A promise was resolved even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._resolved=!0,this._result=arguments;var c=arguments;b._arrayEach(this._resolvedCallbacks,function(a){a.apply(this,c)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},reject:function(a){if(this._resolved||this._rejected)throw"A promise was rejected even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._rejected=!0,this._error=a,b._arrayEach(this._rejectedCallbacks,function(b){b(a)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},then:function(a,c){var d=new b.Promise,e=function(){var c=arguments;if(a)if(b.Promise._isPromisesAPlusCompliant)try{c=[a.apply(this,c)]}catch(e){c=[b.Promise.error(e)]}else c=[a.apply(this,c)];1===c.length&&b.Promise.is(c[0])?c[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):d.resolve.apply(d,c)},f=function(a){var e=[];if(c){if(b.Promise._isPromisesAPlusCompliant)try{e=[c(a)]}catch(f){e=[b.Promise.error(f)]}else e=[c(a)];1===e.length&&b.Promise.is(e[0])?e[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):b.Promise._isPromisesAPlusCompliant?d.resolve.apply(d,e):d.reject(e[0])}else d.reject(a)},g=function(a){a.call()};b.Promise._isPromisesAPlusCompliant&&("undefined"!=typeof window&&window.setTimeout?g=function(a){window.setTimeout(a,0)}:"undefined"!=typeof process&&process.nextTick&&(g=function(a){process.nextTick(a)}));var h=this;return this._resolved?g(function(){e.apply(h,h._result)}):this._rejected?g(function(){f(h._error)}):(this._resolvedCallbacks.push(e),this._rejectedCallbacks.push(f)),d},always:function(a){return this.then(a,a)},done:function(a){return this.then(a)},fail:function(a){return this.then(null,a)},_thenRunCallbacks:function(a,d){var e;if(c.isFunction(a)){var f=a;e={success:function(a){f(a,null)},error:function(a){f(null,a)}}}else e=c.clone(a);return e=e||{},this.then(function(a){return e.success?e.success.apply(this,arguments):d&&d.trigger("sync",d,a,e),b.Promise.as.apply(b.Promise,arguments)},function(a){return e.error?c.isUndefined(d)?e.error(a):e.error(d,a):d&&d.trigger("error",d,a,e),b.Promise.error(a)})},_continueWith:function(a){return this.then(function(){return a(arguments,null)},function(b){return a(null,b)})}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d=function(a){if(26>a)return String.fromCharCode(65+a);if(52>a)return String.fromCharCode(97+(a-26));if(62>a)return String.fromCharCode(48+(a-52));if(62===a)return"+";if(63===a)return"/";throw"Tried to encode large digit "+a+" in base64."},e=function(a){var b=[];return b.length=Math.ceil(a.length/3),c.times(b.length,function(c){var e=a[3*c],f=a[3*c+1]||0,g=a[3*c+2]||0,h=3*c+1<a.length,i=3*c+2<a.length;b[c]=[d(e>>2&63),d(e<<4&48|f>>4&15),h?d(f<<2&60|g>>6&3):"=",i?d(63&g):"="].join("")}),b.join("")},f=function(a,c){var d=new b.Promise;if("undefined"==typeof FileReader)return b.Promise.error(new b.Error(b.Error.FILE_READ_ERROR,"Attempted to use a FileReader on an unsupported browser."));var e=new FileReader;return e.onloadend=function(){if(2!==e.readyState)return void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Error reading file."));var a=e.result,f=/^data:([^;]*);base64,(.*)$/.exec(a);return f?void d.resolve(f[2],c||f[1]):void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Unable to interpret data URL: "+a))},e.readAsDataURL(a),d};b.File=function(a,d,g){this._name=a;var h=/\.([^.]*)$/.exec(a);h&&(h=h[1].toLowerCase());var i=g||"";if(c.isArray(d))this._source=b.Promise.as(e(d),i);else if(d&&d.base64){var j=/^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/,k=j.exec(d.base64);k&&k.length>0?this._source=b.Promise.as(4===k.length?k[3]:k[2],k[1]):this._source=b.Promise.as(d.base64,i)}else if("undefined"!=typeof File&&d instanceof File)this._source=f(d,g);else if(c.isString(d))throw"Creating a Parse.File from a String is not yet supported."},b.File.prototype={name:function(){return this._name},url:function(){return this._url},save:function(a){a=a||{};var c=this;return c._previousSave||(c._previousSave=c._source.then(function(d,e){var f={base64:d,_ContentType:e};return b._request({route:"files",className:c._name,method:"POST",data:f,useMasterKey:a.useMasterKey})}).then(function(a){return c._name=a.name,c._url=a.url,c})),c._previousSave._thenRunCallbacks(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Object=function(a,d){if(c.isString(a))return b.Object._create.apply(this,arguments);a=a||{},d&&d.parse&&(a=this.parse(a));var e=b._getValue(this,"defaults");if(e&&(a=c.extend({},e,a)),d&&d.collection&&(this.collection=d.collection),this._serverData={},this._opSetQueue=[{}],this.attributes={},this._hashedJSON={},this._escapedAttributes={},this.cid=c.uniqueId("c"),this.changed={},this._silent={},this._pending={},!this.set(a,{silent:!0}))throw new Error("Can't create an invalid Parse.Object");this.changed={},this._silent={},this._pending={},this._hasData=!0,this._previousAttributes=c.clone(this.attributes),this.initialize.apply(this,arguments)},b.Object.saveAll=function(a,c){return c=c||{},b.Object._deepSaveAsync(a,{useMasterKey:c.useMasterKey,sessionToken:c.sessionToken})._thenRunCallbacks(c)},b.Object.destroyAll=function(a,d){d=d||{};var e=function(a){a.trigger("destroy",a,a.collection,d)},f=[],g=function(a){var g=b.Promise.as();return a.length>0&&(g=g.then(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,sessionToken:d.sessionToken,data:{requests:c.map(a,function(a){return{method:"DELETE",path:"/1/classes/"+a.className+"/"+a.id}})}})}).then(function(c,g,h){b._arrayEach(a,function(a,g){if(c[g].success&&d.wait)e(a);else if(c[g].error){var h=new b.Error(c[g].error.code,c[g].error.error);h.object=a,f.push(h)}})})),g},h=b.Promise.as(),i=[];return b._arrayEach(a,function(b,c){if(b.id&&d.wait||e(b),b.id&&i.push(b),20===i.length||c+1===a.length){var f=i;i=[],h=h.then(function(){return g(f)})}}),h.then(function(){if(0===f.length)return!0;var a=new b.Error(b.Error.AGGREGATE_ERROR,"Error deleting an object in destroyAll");return a.errors=f,b.Promise.error(a)})._thenRunCallbacks(d)},b.Object.fetchAll=function(a,c){return b.Object._fetchAll(a,!0)._thenRunCallbacks(c)},b.Object.fetchAllIfNeeded=function(a,c){return b.Object._fetchAll(a,!1)._thenRunCallbacks(c)},c.extend(b.Object.prototype,b.Events,{_existed:!1,initialize:function(){},toJSON:function(){var a=this._toFullJSON();return b._arrayEach(["__type","className"],function(b){delete a[b]}),a},_toFullJSON:function(a){var d=c.clone(this.attributes);return b._objectEach(d,function(c,e){d[e]=b._encode(c,a)}),b._objectEach(this._operations,function(a,b){d[b]=a}),c.has(this,"id")&&(d.objectId=this.id),c.has(this,"createdAt")&&(c.isDate(this.createdAt)?d.createdAt=this.createdAt.toJSON():d.createdAt=this.createdAt),c.has(this,"updatedAt")&&(c.isDate(this.updatedAt)?d.updatedAt=this.updatedAt.toJSON():d.updatedAt=this.updatedAt),d.__type="Object",d.className=this.className,d},_refreshCache:function(){var a=this;a._refreshingCache||(a._refreshingCache=!0,b._objectEach(this.attributes,function(d,e){if(d instanceof b.Object)d._refreshCache();else if(c.isObject(d)){var f=!1;c.isArray(d)&&c.each(d,function(a){a instanceof b.Object&&(f=!0,a._refreshCache())}),!f&&a._resetCacheForKey(e)&&a.set(e,new b.Op.Set(d),{silent:!0})}}),delete a._refreshingCache)},dirty:function(a){this._refreshCache();var b=c.last(this._opSetQueue);return a?b[a]?!0:!1:this.id?c.keys(b).length>0?!0:!1:!0},dirtyKeys:function(){return c.keys(c.last(this._opSetQueue))},_toPointer:function(){if(!this.id)throw new Error("Can't serialize an unsaved Parse.Object");return{__type:"Pointer",className:this.className,objectId:this.id}},get:function(a){return this.attributes[a]},relation:function(a){var c=this.get(a);if(c){if(!(c instanceof b.Relation))throw"Called relation() on non-relation field "+a;return c._ensureParentAndKey(this,a),c}return new b.Relation(this,a)},escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},has:function(a){return!b._isNullOrUndefined(this.attributes[a])},_mergeMagicFields:function(a){var d=this,e=["id","objectId","createdAt","updatedAt"];b._arrayEach(e,function(e){a[e]&&("objectId"===e?d.id=a[e]:"createdAt"!==e&&"updatedAt"!==e||c.isDate(a[e])?d[e]=a[e]:d[e]=b._parseDate(a[e]),delete a[e])})},_copyServerData:function(a){var c={};b._objectEach(a,function(a,d){c[d]=b._decode(d,a)}),this._serverData=c,this._rebuildAllEstimatedData(),this._refreshCache(),this._opSetQueue=[{}],this._rebuildAllEstimatedData()},_mergeFromObject:function(a){a&&(this.id=a.id,this.createdAt=a.createdAt,this.updatedAt=a.updatedAt,this._copyServerData(a._serverData),this._hasData=!0)},_startSave:function(){this._opSetQueue.push({})},_cancelSave:function(){var a=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue);var d=c.first(this._opSetQueue);b._objectEach(a,function(b,c){var e=a[c],f=d[c];e&&f?d[c]=f._mergeWithPrevious(e):e&&(d[c]=e)}),this._saving=this._saving-1},_finishSave:function(a){var d={};b._traverse(this.attributes,function(a){a instanceof b.Object&&a.id&&a._hasData&&(d[a.id]=a)});var e=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue),this._applyOpSet(e,this._serverData),this._mergeMagicFields(a);var f=this;b._objectEach(a,function(a,c){f._serverData[c]=b._decode(c,a);var e=b._traverse(f._serverData[c],function(a){return a instanceof b.Object&&d[a.id]?d[a.id]:void 0});e&&(f._serverData[c]=e)}),this._rebuildAllEstimatedData(),this._saving=this._saving-1},_finishFetch:function(a,b){this._opSetQueue=[{}],this._mergeMagicFields(a),this._copyServerData(a),this._hasData=b},_applyOpSet:function(a,c){var d=this;b._objectEach(a,function(a,e){c[e]=a._estimate(c[e],d,e),c[e]===b.Op._UNSET&&delete c[e]})},_resetCacheForKey:function(a){var d=this.attributes[a];if(!(!c.isObject(d)||d instanceof b.Object||d instanceof b.File)){d=d.toJSON?d.toJSON():d;var e=JSON.stringify(d);if(this._hashedJSON[a]!==e){var f=!!this._hashedJSON[a];return this._hashedJSON[a]=e,f}}return!1},_rebuildEstimatedDataForKey:function(a){var c=this;delete this.attributes[a],this._serverData[a]&&(this.attributes[a]=this._serverData[a]),b._arrayEach(this._opSetQueue,function(d){var e=d[a];e&&(c.attributes[a]=e._estimate(c.attributes[a],c,a),c.attributes[a]===b.Op._UNSET?delete c.attributes[a]:c._resetCacheForKey(a))})},_rebuildAllEstimatedData:function(){var a=this,d=c.clone(this.attributes);this.attributes=c.clone(this._serverData),b._arrayEach(this._opSetQueue,function(c){a._applyOpSet(c,a.attributes),b._objectEach(c,function(b,c){a._resetCacheForKey(c)})}),b._objectEach(d,function(b,c){a.attributes[c]!==b&&a.trigger("change:"+c,a,a.attributes[c],{})}),b._objectEach(this.attributes,function(b,e){c.has(d,e)||a.trigger("change:"+e,a,b,{})})},set:function(a,d,e){var f;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,b._objectEach(f,function(a,c){f[c]=b._decode(c,a)}),e=d):(f={},f[a]=b._decode(a,d)),e=e||{},!f)return this;f instanceof b.Object&&(f=f.attributes);var g=this;b._objectEach(f,function(a,b){if(g.constructor.readOnlyAttributes&&g.constructor.readOnlyAttributes[b])throw new Error("Cannot modify readonly key: "+b)}),e.unset&&b._objectEach(f,function(a,c){f[c]=new b.Op.Unset});var h=c.clone(f);if(b._objectEach(h,function(a,c){a instanceof b.Op&&(h[c]=a._estimate(g.attributes[c],g,c),h[c]===b.Op._UNSET&&delete h[c])}),!this._validate(f,e))return!1;this._mergeMagicFields(f),e.changes={};var i=this._escapedAttributes;this._previousAttributes||{};return b._arrayEach(c.keys(f),function(a){var d=f[a];d instanceof b.Relation&&(d.parent=g),d instanceof b.Op||(d=new b.Op.Set(d));var h=!0;d instanceof b.Op.Set&&c.isEqual(g.attributes[a],d.value)&&(h=!1),h&&(delete i[a],e.silent?g._silent[a]=!0:e.changes[a]=!0);var j=c.last(g._opSetQueue);j[a]=d._mergeWithPrevious(j[a]),g._rebuildEstimatedDataForKey(a),h?(g.changed[a]=g.attributes[a],e.silent||(g._pending[a]=!0)):(delete g.changed[a],delete g._pending[a])}),e.silent||this.change(e),this},unset:function(a,b){return b=b||{},b.unset=!0,this.set(a,null,b)},increment:function(a,d){return(c.isUndefined(d)||c.isNull(d))&&(d=1),this.set(a,new b.Op.Increment(d))},add:function(a,c){return this.set(a,new b.Op.Add([c]))},addUnique:function(a,c){return this.set(a,new b.Op.AddUnique([c]))},remove:function(a,c){return this.set(a,new b.Op.Remove([c]))},op:function(a){return c.last(this._opSetQueue)[a]},clear:function(a){a=a||{},a.unset=!0;var b=c.extend(this.attributes,this._operations);return this.set(b,a)},_getSaveJSON:function(){var a=c.clone(c.first(this._opSetQueue));return b._objectEach(a,function(b,c){a[c]=b.toJSON()}),a},_canBeSerialized:function(){return b.Object._canBeSerializedAsValue(this.attributes)},fetch:function(a){var c=this;a=a||{};var d=b._request({method:"GET",route:"classes",className:this.className,objectId:this.id,useMasterKey:a.useMasterKey,sessionToken:a.sessionToken});return d.then(function(a,b,d){return c._finishFetch(c.parse(a,b,d),!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g,h;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,h=d):(f={},f[a]=d,h=e),!h&&f){var i=c.reject(f,function(a,b){return c.include(["success","error","wait"],b)});if(0===i.length){var j=!0;if(c.has(f,"success")&&!c.isFunction(f.success)&&(j=!1),c.has(f,"error")&&!c.isFunction(f.error)&&(j=!1),j)return this.save(null,f)}}h=c.clone(h)||{},h.wait&&(g=c.clone(this.attributes));var k=c.clone(h)||{};k.wait&&(k.silent=!0);var l;if(k.error=function(a,b){l=b},f&&!this.set(f,k))return b.Promise.error(l)._thenRunCallbacks(h,this);var m=this;m._refreshCache();var n=[],o=[];return b.Object._findUnsavedChildren(m.attributes,n,o),n.length+o.length>0?b.Object._deepSaveAsync(this.attributes,{useMasterKey:h.useMasterKey,sessionToken:h.sessionToken}).then(function(){return m.save(null,h)},function(a){return b.Promise.error(a)._thenRunCallbacks(h,m)}):(this._startSave(),this._saving=(this._saving||0)+1,this._allPreviousSaves=this._allPreviousSaves||b.Promise.as(),this._allPreviousSaves=this._allPreviousSaves._continueWith(function(){var a=m.id?"PUT":"POST",d=m._getSaveJSON(),e="classes",i=m.className;"_User"!==m.className||m.id||(e="users",i=null);var j=b._request({route:e,className:i,objectId:m.id,method:a,useMasterKey:h.useMasterKey,sessionToken:h.sessionToken,data:d});return j=j.then(function(a,b,d){var e=m.parse(a,b,d);return h.wait&&(e=c.extend(f||{},e)),m._finishSave(e),h.wait&&m.set(g,k),m},function(a){return m._cancelSave(),b.Promise.error(a)})._thenRunCallbacks(h,m)}),this._allPreviousSaves)},destroy:function(a){a=a||{};var c=this,d=function(){c.trigger("destroy",c,c.collection,a)};if(!this.id)return d();a.wait||d();var e=b._request({route:"classes",className:this.className,objectId:this.id,method:"DELETE",useMasterKey:a.useMasterKey,sessionToken:a.sessionToken});return e.then(function(){return a.wait&&d(),c})._thenRunCallbacks(a,this)},parse:function(a,d,e){var f=c.clone(a);return c(["createdAt","updatedAt"]).each(function(a){f[a]&&(f[a]=b._parseDate(f[a]))}),f.updatedAt||(f.updatedAt=f.createdAt),d&&(this._existed=201!==d),f},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.id},change:function(a){a=a||{};var d=this._changing;this._changing=!0;var e=this;b._objectEach(this._silent,function(a){e._pending[a]=!0});var f=c.extend({},a.changes,this._silent);if(this._silent={},b._objectEach(f,function(b,c){e.trigger("change:"+c,e,e.get(c),a)}),d)return this;for(var g=function(a,b){e._pending[b]||e._silent[b]||delete e.changed[b]};!c.isEmpty(this._pending);)this._pending={},this.trigger("change",this,a),b._objectEach(this.changed,g),e._previousAttributes=c.clone(this.attributes);return this._changing=!1,this},existed:function(){return this._existed},hasChanged:function(a){return arguments.length?this.changed&&c.has(this.changed,a):!c.isEmpty(this.changed)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var d={},e=this._previousAttributes;return b._objectEach(a,function(a,b){c.isEqual(e[b],a)||(d[b]=a)}),d},previous:function(a){return arguments.length&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},validate:function(a,d){if(c.has(a,"ACL")&&!(a.ACL instanceof b.ACL))return new b.Error(b.Error.OTHER_CAUSE,"ACL must be a Parse.ACL.");var e=!0;return b._objectEach(a,function(a,b){/^[A-Za-z][0-9A-Za-z_]*$/.test(b)||(e=!1)}),e?!1:new b.Error(b.Error.INVALID_KEY_NAME)},_validate:function(a,b){if(b.silent||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validate(a,b);return d?(b&&b.error?b.error(this,d,b):this.trigger("error",this,d,b),!1):!0},getACL:function(){return this.get("ACL")},setACL:function(a,b){return this.set("ACL",a,b)}}),b.Object._getSubclass=function(a){if(!c.isString(a))throw"Parse.Object._getSubclass requires a string argument.";var d=b.Object._classMap[a];return d||(d=b.Object.extend(a),b.Object._classMap[a]=d),d},b.Object._create=function(a,c,d){var e=b.Object._getSubclass(a);return new e(c,d)},b.Object._toObjectIdArray=function(a,c){if(0===a.length)return b.Promise.as(a);for(var d,e=a[0].className,f=[],g=0;g<a.length;g++){var h=a[g];if(e!==h.className)return d=new b.Error(b.Error.INVALID_CLASS_NAME,"All objects should be of the same class"),b.Promise.error(d);if(!h.id)return d=new b.Error(b.Error.MISSING_OBJECT_ID,"All objects must have an ID"),b.Promise.error(d);c&&h._hasData||f.push(h.id)}return b.Promise.as(f)},b.Object._updateWithFetchedResults=function(a,c,d){var e={};b._arrayEach(c,function(a,b){e[a.id]=a});for(var f=0;f<a.length;f++){var g=a[f],h=e[g.id];if(!h&&d){var i=new b.Error(b.Error.OBJECT_NOT_FOUND,"All objects must exist on the server");return b.Promise.error(i)}g._mergeFromObject(h)}return b.Promise.as(a)},b.Object._fetchAll=function(a,c){if(0===a.length)return b.Promise.as(a);var d=!c;return b.Object._toObjectIdArray(a,d).then(function(c){var d=a[0].className,e=new b.Query(d);return e.containedIn("objectId",c),e.limit=c.length,e.find()}).then(function(d){return b.Object._updateWithFetchedResults(a,d,c)})},b.Object._classMap={},b.Object._extend=b._extend,b.Object.extend=function(a,d,e){if(!c.isString(a)){if(a&&c.has(a,"className"))return b.Object.extend(a.className,a,d);throw new Error("Parse.Object.extend's first argument should be the className.")}"User"===a&&b.User._performUserRewrite&&(a="_User"),d=d||{},d.className=a;var f=null;if(c.has(b.Object._classMap,a)){var g=b.Object._classMap[a];f=g._extend(d,e)}else f=this._extend(d,e);return f.extend=function(d){if(c.isString(d)||d&&c.has(d,"className"))return b.Object.extend.apply(f,arguments);var e=[a].concat(b._.toArray(arguments));return b.Object.extend.apply(f,e)},f.createWithoutData=function(a){var b=new f;return b.id=a,b},b.Object._classMap[a]=f,f},b.Object._findUnsavedChildren=function(a,c,d){b._traverse(a,function(a){return a instanceof b.Object?(a._refreshCache(),void(a.dirty()&&c.push(a))):a instanceof b.File?void(a.url()||d.push(a)):void 0})},b.Object._canBeSerializedAsValue=function(a){if(a instanceof b.Object)return!!a.id;if(a instanceof b.File)return!0;var d=!0;return c.isArray(a)?b._arrayEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}):c.isObject(a)&&b._objectEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}),d},b.Object._deepSaveAsync=function(a,d){var e=[],f=[];b.Object._findUnsavedChildren(a,e,f);var g=b.Promise.as();c.each(f,function(a){g=g.then(function(){return a.save(d)})});var h=c.uniq(e),i=c.uniq(h);return g.then(function(){return b.Promise._continueWhile(function(){return i.length>0},function(){var a=[],e=[];if(b._arrayEach(i,function(b){return a.length>20?void e.push(b):void(b._canBeSerialized()?a.push(b):e.push(b))}),i=e,0===a.length)return b.Promise.error(new b.Error(b.Error.OTHER_CAUSE,"Tried to save a batch with a cycle."));var f=b.Promise.when(c.map(a,function(a){return a._allPreviousSaves||b.Promise.as()})),g=new b.Promise;return b._arrayEach(a,function(a){a._allPreviousSaves=g}),f._continueWith(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,sessionToken:d.sessionToken,data:{requests:c.map(a,function(a){var b=a._getSaveJSON(),c="POST",d="/1/classes/"+a.className;return a.id&&(d=d+"/"+a.id,c="PUT"),a._startSave(),{method:c,path:d,body:b}})}}).then(function(c,d,e){var f;return b._arrayEach(a,function(a,b){c[b].success?a._finishSave(a.parse(c[b].success,d,e)):(f=f||c[b].error,a._cancelSave())}),f?b.Promise.error(new b.Error(f.code,f.error)):void 0}).then(function(a){return g.resolve(a),a},function(a){return g.reject(a),b.Promise.error(a)})})})}).then(function(){return a})}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Role=b.Object.extend("_Role",{constructor:function(a,d){c.isString(a)&&d instanceof b.ACL?(b.Object.prototype.constructor.call(this,null,null),this.setName(a),this.setACL(d)):b.Object.prototype.constructor.call(this,a,d)},getName:function(){return this.get("name")},setName:function(a,b){return this.set("name",a,b)},getUsers:function(){return this.relation("users")},getRoles:function(){return this.relation("roles")},validate:function(a,d){if("name"in a&&a.name!==this.getName()){var e=a.name;if(this.id&&this.id!==a.objectId)return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only be set before it has been saved.");if(!c.isString(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name must be a String.");if(!/^[0-9a-zA-Z\-_ ]+$/.test(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _, -, and spaces.")}return b.Object.prototype.validate?b.Object.prototype.validate.call(this,a,d):!1}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Collection=function(a,b){b=b||{},b.comparator&&(this.comparator=b.comparator),b.model&&(this.model=b.model),b.query&&(this.query=b.query),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,{silent:!0,parse:b.parse})},c.extend(b.Collection.prototype,b.Events,{model:b.Object,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,d){var e,f,g,h,i,j,k={},l={};for(d=d||{},a=c.isArray(a)?a.slice():[a],e=0,g=a.length;g>e;e++){if(a[e]=this._prepareModel(a[e],d),h=a[e],!h)throw new Error("Can't add an invalid model to a collection");if(i=h.cid,k[i]||this._byCid[i])throw new Error("Duplicate cid: can't add the same model to a collection twice");if(j=h.id,!b._isNullOrUndefined(j)&&(l[j]||this._byId[j]))throw new Error("Duplicate id: can't add the same model to a collection twice");l[j]=h,k[i]=h}for(e=0;g>e;e++)(h=a[e]).on("all",this._onModelEvent,this),this._byCid[h.cid]=h,h.id&&(this._byId[h.id]=h);if(this.length+=g,f=b._isNullOrUndefined(d.at)?this.models.length:d.at,this.models.splice.apply(this.models,[f,0].concat(a)),this.comparator&&this.sort({silent:!0}),d.silent)return this;for(e=0,g=this.models.length;g>e;e++)h=this.models[e],k[h.cid]&&(d.index=e,h.trigger("add",h,this,d));return this},remove:function(a,b){var d,e,f,g;for(b=b||{},a=c.isArray(a)?a.slice():[a],d=0,e=a.length;e>d;d++)g=this.getByCid(a[d])||this.get(a[d]),g&&(delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g));return this},get:function(a){return a&&this._byId[a.id||a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){if(a=a||{},!this.comparator)throw new Error("Cannot sort a set without a comparator");
var b=c.bind(this.comparator,this);return 1===this.comparator.length?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return c.map(this.models,function(b){return b.get(a)})},reset:function(a,c){var d=this;return a=a||[],c=c||{},b._arrayEach(this.models,function(a){d._removeReference(a)}),this._reset(),this.add(a,{silent:!0,parse:c.parse}),c.silent||this.trigger("reset",this,c),this},fetch:function(a){a=c.clone(a)||{},void 0===a.parse&&(a.parse=!0);var d=this,e=this.query||new b.Query(this.model);return e.find({useMasterKey:a.useMasterKey,sessionToken:a.sessionToken}).then(function(b){return a.add?d.add(b,a):d.reset(b,a),d})._thenRunCallbacks(a,this)},create:function(a,b){var d=this;if(b=b?c.clone(b):{},a=this._prepareModel(a,b),!a)return!1;b.wait||d.add(a,b);var e=b.success;return b.success=function(c,f,g){b.wait&&d.add(c,b),e?e(c,f):c.trigger("sync",a,f,b)},a.save(null,b),a},parse:function(a,b){return a},chain:function(){return c(this.models).chain()},_reset:function(a){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,c){if(a instanceof b.Object)a.collection||(a.collection=this);else{var d=a;c.collection=this,a=new this.model(d,c),a._validate(a.attributes,c)||(a=!1)}return a},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&"change:objectId"===a&&(delete this._byId[b.previous("objectId")],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});var d=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];b._arrayEach(d,function(a){b.Collection.prototype[a]=function(){return c[a].apply(c,[this.models].concat(c.toArray(arguments)))}}),b.Collection.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.View=function(a){this.cid=c.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()};var d=/^(\S+)\s*(.*)$/,e=["model","collection","el","id","attributes","className","tagName"];c.extend(b.View.prototype,b.Events,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(a,c,d){var e=document.createElement(a);return c&&b.$(e).attr(c),d&&b.$(e).html(d),e},setElement:function(a,c){return this.$el=b.$(a),this.el=this.$el[0],c!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(a=a||b._getValue(this,"events")){this.undelegateEvents();var e=this;b._objectEach(a,function(b,f){if(c.isFunction(b)||(b=e[a[f]]),!b)throw new Error('Event "'+a[f]+'" does not exist');var g=f.match(d),h=g[1],i=g[2];b=c.bind(b,e),h+=".delegateEvents"+e.cid,""===i?e.$el.bind(h,b):e.$el.delegate(i,h,b)})}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=c.extend({},this.options,a));var b=this;c.each(e,function(c){a[c]&&(b[c]=a[c])}),this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var a=b._getValue(this,"attributes")||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.setElement(this.make(this.tagName,a),!1)}}}),b.View.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.User=b.Object.extend("_User",{_isCurrentUser:!1,_mergeFromObject:function(a){a.getSessionToken()&&(this._sessionToken=a.getSessionToken()),b.User.__super__._mergeFromObject.call(this,a)},_mergeMagicFields:function(a){a.sessionToken&&(this._sessionToken=a.sessionToken,delete a.sessionToken),b.User.__super__._mergeMagicFields.call(this,a)},_cleanupAuthData:function(){if(this.isCurrent()){var a=this.get("authData");a&&b._objectEach(this.get("authData"),function(b,c){a[c]||delete a[c]})}},_synchronizeAllAuthData:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._synchronizeAuthData(b)})}},_synchronizeAuthData:function(a){if(this.isCurrent()){var d;c.isString(a)?(d=a,a=b.User._authProviders[d]):d=a.getAuthType();var e=this.get("authData");if(e&&a){var f=a.restoreAuthentication(e[d]);f||this._unlinkFrom(a)}}},_handleSaveResult:function(a){a&&(this._isCurrentUser=!0),this._cleanupAuthData(),this._synchronizeAllAuthData(),delete this._serverData.password,this._rebuildEstimatedDataForKey("password"),this._refreshCache(),(a||this.isCurrent())&&b.User._saveCurrentUser(this)},_linkWith:function(a,d){var e;if(c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType(),c.has(d,"authData")){var f=this.get("authData")||{};f[e]=d.authData,this.set("authData",f);var g=c.clone(d)||{};return g.success=function(a){a._handleSaveResult(!0),d.success&&d.success.apply(this,arguments)},this.save({authData:f},g)}var h=this,i=new b.Promise;return a.authenticate({success:function(a,b){h._linkWith(a,{authData:b,success:d.success,error:d.error}).then(function(){i.resolve(h)})},error:function(a,b){d.error&&d.error(h,b),i.reject(b)}}),i},_unlinkFrom:function(a,d){var e;c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType();var f=c.clone(d),g=this;return f.authData=null,f.success=function(b){g._synchronizeAuthData(a),d.success&&d.success.apply(this,arguments)},this._linkWith(a,f)},_isLinked:function(a){var b;b=c.isString(a)?a:a.getAuthType();var d=this.get("authData")||{};return!!d[b]},_logOutWithAll:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._logOutWith(b)})}},_logOutWith:function(a){this.isCurrent()&&(c.isString(a)&&(a=b.User._authProviders[a]),a&&a.deauthenticate&&a.deauthenticate())},signUp:function(a,d){var e;d=d||{};var f=a&&a.username||this.get("username");if(!f||""===f)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty name."),d&&d.error&&d.error(this,e),b.Promise.error(e);var g=a&&a.password||this.get("password");if(!g||""===g)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty password."),d&&d.error&&d.error(this,e),b.Promise.error(e);var h=c.clone(d);return h.success=function(a){a._handleSaveResult(b.User._canUseCurrentUser()),d.success&&d.success.apply(this,arguments)},this.save(a,h)},logIn:function(a){if(!b.User._canUseCurrentUser())throw new Error("It is not possible to log in on a server environment.");var c=this;a=a||{};var d=b._request({route:"login",method:"GET",useMasterKey:a.useMasterKey,data:this.toJSON()});return d.then(function(a,b,d){var e=c.parse(a,b,d);return c._finishFetch(e),c._handleSaveResult(!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g;c.isObject(a)||c.isNull(a)||c.isUndefined(a)?(f=a,g=d):(f={},f[a]=d,g=e),g=g||{};var h=c.clone(g);return h.success=function(a){a._handleSaveResult(!1),g.success&&g.success.apply(this,arguments)},b.Object.prototype.save.call(this,f,h)},fetch:function(a){var d=a?c.clone(a):{};return d.success=function(b){b._handleSaveResult(!1),a&&a.success&&a.success.apply(this,arguments)},b.Object.prototype.fetch.call(this,d)},isCurrent:function(){return this._isCurrentUser},getUsername:function(){return this.get("username")},setUsername:function(a,b){return this.set("username",a,b)},setPassword:function(a,b){return this.set("password",a,b)},getEmail:function(){return this.get("email")},setEmail:function(a,b){return this.set("email",a,b)},authenticated:function(){return!!this._sessionToken&&b.User.current()&&b.User.current().id===this.id},getSessionToken:function(){return this._sessionToken},_upgradeToRevocableSession:function(a){if(a=a||{},!b.User.current())return b.Promise.as()._thenRunCallbacks(a);var c=b.User.current().getSessionToken();return b.Session._isRevocable(c)?b.Promise.as()._thenRunCallbacks(a):b._request({route:"upgradeToRevocableSession",method:"POST",useMasterKey:a.useMasterKey,sessionToken:c}).then(function(a){var c=new b.Session;c._finishFetch(a);var d=b.User.current();d._sessionToken=c.getSessionToken(),b.User._saveCurrentUser(d)})._thenRunCallbacks(a)}},{_currentUser:null,_currentUserMatchesDisk:!1,_CURRENT_USER_KEY:"currentUser",_authProviders:{},_performUserRewrite:!0,_isRevocableSessionEnabled:!1,_enableUnsafeCurrentUser:!1,signUp:function(a,c,d,e){d=d||{},d.username=a,d.password=c;var f=b.Object._create("_User");return f.signUp(d,e)},logIn:function(a,c,d){var e=b.Object._create("_User");return e._finishFetch({username:a,password:c}),e.logIn(d)},become:function(a,c){if(!b.User._canUseCurrentUser())throw new Error("It is not secure to become a user on a node.js server environment.");c=c||{};var d=b.Object._create("_User");return b._request({route:"users",className:"me",method:"GET",useMasterKey:c.useMasterKey,sessionToken:a}).then(function(a,b,c){var e=d.parse(a,b,c);return d._finishFetch(e),d._handleSaveResult(!0),d})._thenRunCallbacks(c,d)},logOut:function(){if(!b.User._canUseCurrentUser())throw new Error("There is no current user user on a node.js server environment.");return b.User._currentAsync().then(function(a){var c=b.Storage.removeItemAsync(b._getParsePath(b.User._CURRENT_USER_KEY));if(null!==a){var d=a.getSessionToken();b.Session._isRevocable(d)&&c.then(function(){return b._request({route:"logout",method:"POST",sessionToken:d})}),a._logOutWithAll(),a._isCurrentUser=!1}return b.User._currentUserMatchesDisk=!0,b.User._currentUser=null,c})},requestPasswordReset:function(a,c){c=c||{};var d=b._request({route:"requestPasswordReset",method:"POST",useMasterKey:c.useMasterKey,data:{email:a}});return d._thenRunCallbacks(c)},current:function(){if(!b.User._canUseCurrentUser())throw new Error("There is no current user user on a node.js server environment.");if(b.Storage.async)return b.User._currentAsync(),b.User._currentUser;if(b.User._currentUser)return b.User._currentUser;if(b.User._currentUserMatchesDisk)return b.User._currentUser;b.User._currentUserMatchesDisk=!0;var a=b.Storage.getItem(b._getParsePath(b.User._CURRENT_USER_KEY));if(!a)return null;b.User._currentUser=b.Object._create("_User"),b.User._currentUser._isCurrentUser=!0;var c=JSON.parse(a);return b.User._currentUser.id=c._id,delete c._id,b.User._currentUser._sessionToken=c._sessionToken,delete c._sessionToken,b.User._currentUser._finishFetch(c),b.User._currentUser._synchronizeAllAuthData(),b.User._currentUser._refreshCache(),b.User._currentUser._opSetQueue=[{}],b.User._currentUser},_currentAsync:function(){return b.User._currentUser?b.Promise.as(b.User._currentUser):b.User._currentUserMatchesDisk?b.Promise.as(b.User._currentUser):b.Storage.getItemAsync(b._getParsePath(b.User._CURRENT_USER_KEY)).then(function(a){if(!a)return null;b.User._currentUser=b.Object._create("_User"),b.User._currentUser._isCurrentUser=!0;var c=JSON.parse(a);return b.User._currentUser.id=c._id,delete c._id,b.User._currentUser._sessionToken=c._sessionToken,delete c._sessionToken,b.User._currentUser._finishFetch(c),b.User._currentUser._synchronizeAllAuthData(),b.User._currentUser._refreshCache(),b.User._currentUser._opSetQueue=[{}],b.User._currentUser})},allowCustomUserClass:function(a){this._performUserRewrite=!a},enableRevocableSession:function(a){return a=a||{},b.User._isRevocableSessionEnabled=!0,b.User._canUseCurrentUser()&&b.User.current()?b.User.current()._upgradeToRevocableSession(a):b.Promise.as()._thenRunCallbacks(a)},enableUnsafeCurrentUser:function(){b.User._enableUnsafeCurrentUser=!0},_canUseCurrentUser:function(){return!b._isNode||b.User._enableUnsafeCurrentUser},_saveCurrentUser:function(a){null!==b.User._currentUser&&b.User._currentUser!==a&&b.User.logOut(),a._isCurrentUser=!0,b.User._currentUser=a,b.User._currentUserMatchesDisk=!0;var c=a.toJSON();c._id=a.id,c._sessionToken=a._sessionToken,b.Storage.async?b.Storage.setItemAsync(b._getParsePath(b.User._CURRENT_USER_KEY),JSON.stringify(c)):b.Storage.setItem(b._getParsePath(b.User._CURRENT_USER_KEY),JSON.stringify(c))},_registerAuthenticationProvider:function(a){b.User._authProviders[a.getAuthType()]=a,b.User.current()&&b.User.current()._synchronizeAuthData(a.getAuthType())},_logInWith:function(a,c){var d=b.Object._create("_User");return d._linkWith(a,c)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;b.Session=b.Object.extend("_Session",{getSessionToken:function(){return this._sessionToken},_mergeMagicFields:function(a){a.sessionToken&&(this._sessionToken=a.sessionToken,delete a.sessionToken),b.Session.__super__._mergeMagicFields.call(this,a)}},{readOnlyAttributes:{createdWith:!0,expiresAt:!0,installationId:!0,restricted:!0,sessionToken:!0,user:!0},current:function(a){a=a||{};var c=b.Object._create("_Session"),d=b.User.current().getSessionToken();return b._request({route:"sessions",className:"me",method:"GET",useMasterKey:a.useMasterKey,sessionToken:d}).then(function(a,b,d){var e=c.parse(a,b,d);return c._finishFetch(e),c})._thenRunCallbacks(a,c)},_isRevocable:function(a){return a.indexOf("r:")>-1},isCurrentSessionRevocable:function(){return null!==b.User.current()?b.Session._isRevocable(b.User.current().getSessionToken()):void 0}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Query=function(a){c.isString(a)&&(a=b.Object._getSubclass(a)),this.objectClass=a,this.className=a.prototype.className,this._where={},this._include=[],this._limit=-1,this._skip=0,this._extraOptions={}},b.Query.or=function(){var a=c.toArray(arguments),d=null;b._arrayEach(a,function(a){if(c.isNull(d)&&(d=a.className),d!==a.className)throw"All queries must be for the same class"});var e=new b.Query(d);return e._orQuery(a),e},b.Query.prototype={get:function(a,d){var e=this;e.equalTo("objectId",a);var f={};return d&&c.has(d,"useMasterKey")&&(f={useMasterKey:d.useMasterKey}),d&&c.has(d,"sessionToken")&&(f.sessionToken=d.sessionToken),e.first(f).then(function(a){if(a)return a;var c=new b.Error(b.Error.OBJECT_NOT_FOUND,"Object not found.");return b.Promise.error(c)})._thenRunCallbacks(d,null)},toJSON:function(){var a={where:this._where};return this._include.length>0&&(a.include=this._include.join(",")),this._select&&(a.keys=this._select.join(",")),this._limit>=0&&(a.limit=this._limit),this._skip>0&&(a.skip=this._skip),void 0!==this._order&&(a.order=this._order.join(",")),b._objectEach(this._extraOptions,function(b,c){a[c]=b}),a},find:function(a){var d=this;a=a||{};var e=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,sessionToken:a.sessionToken,data:this.toJSON()});return e.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})})._thenRunCallbacks(a)},count:function(a){var c=this;a=a||{};var d=this.toJSON();d.limit=0,d.count=1;var e=b._request({route:"classes",className:c.className,method:"GET",useMasterKey:a.useMasterKey,sessionToken:a.sessionToken,data:d});return e.then(function(a){return a.count})._thenRunCallbacks(a)},first:function(a){var d=this;a=a||{};var e=this.toJSON();e.limit=1;var f=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,sessionToken:a.sessionToken,data:e});return f.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})[0]})._thenRunCallbacks(a)},collection:function(a,d){return d=d||{},new b.Collection(a,c.extend(d,{model:this.objectClass,query:this}))},skip:function(a){return this._skip=a,this},limit:function(a){return this._limit=a,this},equalTo:function(a,d){return c.isUndefined(d)?this.doesNotExist(a):(this._where[a]=b._encode(d),this)},_addCondition:function(a,c,d){return this._where[a]||(this._where[a]={}),this._where[a][c]=b._encode(d),this},notEqualTo:function(a,b){return this._addCondition(a,"$ne",b),this},lessThan:function(a,b){return this._addCondition(a,"$lt",b),this},greaterThan:function(a,b){return this._addCondition(a,"$gt",b),this},lessThanOrEqualTo:function(a,b){return this._addCondition(a,"$lte",b),this},greaterThanOrEqualTo:function(a,b){return this._addCondition(a,"$gte",b),this},containedIn:function(a,b){return this._addCondition(a,"$in",b),this},notContainedIn:function(a,b){return this._addCondition(a,"$nin",b),this},containsAll:function(a,b){return this._addCondition(a,"$all",b),this},exists:function(a){return this._addCondition(a,"$exists",!0),this},doesNotExist:function(a){return this._addCondition(a,"$exists",!1),this},matches:function(a,b,c){return this._addCondition(a,"$regex",b),c||(c=""),b.ignoreCase&&(c+="i"),b.multiline&&(c+="m"),c&&c.length&&this._addCondition(a,"$options",c),this},matchesQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$inQuery",c),this},doesNotMatchQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$notInQuery",c),this},matchesKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$select",{key:b,query:d}),this},doesNotMatchKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$dontSelect",{key:b,query:d}),this},_orQuery:function(a){var b=c.map(a,function(a){return a.toJSON().where});return this._where.$or=b,this},_quote:function(a){return"\\Q"+a.replace("\\E","\\E\\\\E\\Q")+"\\E"},contains:function(a,b){return this._addCondition(a,"$regex",this._quote(b)),this},startsWith:function(a,b){return this._addCondition(a,"$regex","^"+this._quote(b)),this},endsWith:function(a,b){return this._addCondition(a,"$regex",this._quote(b)+"$"),this},ascending:function(){return this._order=[],this.addAscending.apply(this,arguments)},addAscending:function(a){var c=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(a){Array.isArray(a)&&(a=a.join()),c._order=c._order.concat(a.replace(/\s/g,"").split(","))}),this},descending:function(a){return this._order=[],this.addDescending.apply(this,arguments)},addDescending:function(a){var d=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(a){Array.isArray(a)&&(a=a.join()),d._order=d._order.concat(c.map(a.replace(/\s/g,"").split(","),function(a){return"-"+a}))}),this},near:function(a,c){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),this._addCondition(a,"$nearSphere",c),this},withinRadians:function(a,b,c){return this.near(a,b),this._addCondition(a,"$maxDistance",c),this},withinMiles:function(a,b,c){return this.withinRadians(a,b,c/3958.8)},withinKilometers:function(a,b,c){return this.withinRadians(a,b,c/6371)},withinGeoBox:function(a,c,d){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),d instanceof b.GeoPoint||(d=new b.GeoPoint(d)),this._addCondition(a,"$within",{$box:[c,d]}),this},include:function(){var a=this;return b._arrayEach(arguments,function(b){c.isArray(b)?a._include=a._include.concat(b):a._include.push(b)}),this},select:function(){var a=this;return this._select=this._select||[],b._arrayEach(arguments,function(b){c.isArray(b)?a._select=a._select.concat(b):a._select.push(b)}),this},each:function(a,d){if(d=d||{},this._order||this._skip||this._limit>=0){var e="Cannot iterate on a query with sort, skip, or limit.";return b.Promise.error(e)._thenRunCallbacks(d)}var f=(new b.Promise,new b.Query(this.objectClass));f._limit=d.batchSize||100,f._where=c.clone(this._where),f._include=c.clone(this._include),this._select&&(f._select=c.clone(this._select)),f.ascending("objectId");var g={};c.has(d,"useMasterKey")&&(g.useMasterKey=d.useMasterKey),c.has(d,"sessionToken")&&(g.sessionToken=d.sessionToken);var h=!1;return b.Promise._continueWhile(function(){return!h},function(){return f.find(g).then(function(c){var d=b.Promise.as();return b._.each(c,function(b){d=d.then(function(){return a(b)})}),d.then(function(){c.length>=f._limit?f.greaterThan("objectId",c[c.length-1].id):h=!0})})})._thenRunCallbacks(d)}}}(this),function(a){a.Parse=a.Parse||{};var b,c,d=a.Parse,e=d._,f=!1,g={authenticate:function(a){var c=this;FB.login(function(b){b.authResponse?a.success&&a.success(c,{id:b.authResponse.userID,access_token:b.authResponse.accessToken,expiration_date:new Date(1e3*b.authResponse.expiresIn+(new Date).getTime()).toJSON()}):a.error&&a.error(c,b)},{scope:b})},restoreAuthentication:function(a){if(a){var b={userID:a.id,accessToken:a.access_token,expiresIn:(d._parseDate(a.expiration_date).getTime()-(new Date).getTime())/1e3},f=e.clone(c);f.authResponse=b,f.status=!1;var g=FB.getAuthResponse();g&&g.userID!==b.userID&&FB.logout(),FB.init(f)}return!0},getAuthType:function(){return"facebook"},deauthenticate:function(){this.restoreAuthentication(null)}};d.FacebookUtils={init:function(a){if("undefined"==typeof FB)throw"The Facebook JavaScript SDK must be loaded before calling init.";if(c=e.clone(a)||{},c.status&&"undefined"!=typeof console){var b=console.warn||console.log||function(){};b.call(console,"The 'status' flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.")}c.status=!1,FB.init(c),d.User._registerAuthenticationProvider(g),f=!0},isLinked:function(a){return a._isLinked("facebook")},logIn:function(a,c){if(!a||e.isString(a)){if(!f)throw"You must initialize FacebookUtils before calling logIn.";return b=a,d.User._logInWith("facebook",c)}var g=e.clone(c)||{};return g.authData=a,d.User._logInWith("facebook",g)},link:function(a,c,d){if(!c||e.isString(c)){if(!f)throw"You must initialize FacebookUtils before calling link.";return b=c,a._linkWith("facebook",d)}var g=e.clone(d)||{};return g.authData=c,a._linkWith("facebook",g)},unlink:function(a,b){if(!f)throw"You must initialize FacebookUtils before calling unlink.";return a._unlinkFrom("facebook",b)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl")};var d=/^[#\/]/,e=/msie [\w.]+/;b.History.started=!1,c.extend(b.History.prototype,b.Events,{interval:50,getHash:function(a){var b=a?a.location:window.location,c=b.href.match(/#(.*)$/);return c?c[1]:""},getFragment:function(a,c){if(b._isNullOrUndefined(a))if(this._hasPushState||c){a=window.location.pathname;var e=window.location.search;e&&(a+=e)}else a=this.getHash();return a.indexOf(this.options.root)||(a=a.substr(this.options.root.length)),a.replace(d,"")},start:function(a){if(b.History.started)throw new Error("Parse.history has already been started");b.History.started=!0,this.options=c.extend({},{root:"/"},this.options,a),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var f=this.getFragment(),g=document.documentMode,h=e.exec(navigator.userAgent.toLowerCase())&&(!g||7>=g);h&&(this.iframe=b.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(f)),this._hasPushState?b.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!h?b.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=window.setInterval(this.checkUrl,this.interval)),this.fragment=f;var i=window.location,j=i.pathname===this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!j?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&j&&i.hash&&(this.fragment=this.getHash().replace(d,""),window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){b.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),window.clearInterval(this._checkUrlInterval),b.History.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();return b===this.fragment&&this.iframe&&(b=this.getFragment(this.getHash(this.iframe))),b===this.fragment?!1:(this.iframe&&this.navigate(b),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(a){var b=this.fragment=this.getFragment(a),d=c.any(this.handlers,function(a){return a.route.test(b)?(a.callback(b),!0):void 0});return d},navigate:function(a,c){if(!b.History.started)return!1;c&&c!==!0||(c={trigger:c});var e=(a||"").replace(d,"");if(this.fragment!==e){if(this._hasPushState){0!==e.indexOf(this.options.root)&&(e=this.options.root+e),this.fragment=e;var f=c.replace?"replaceState":"pushState";window.history[f]({},document.title,e)}else this._wantsHashChange?(this.fragment=e,this._updateHash(window.location,e,c.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(c.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,c.replace))):window.location.assign(this.options.root+a);c.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){if(c){var d=a.toString().replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash=b}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Router=function(a){a=a||{},a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var d=/:\w+/g,e=/\*\w+/g,f=/[\-\[\]{}()+?.,\\\^\$\|#\s]/g;c.extend(b.Router.prototype,b.Events,{initialize:function(){},route:function(a,d,e){return b.history=b.history||new b.History,c.isRegExp(a)||(a=this._routeToRegExp(a)),e||(e=this[d]),b.history.route(a,c.bind(function(c){var f=this._extractParameters(a,c);e&&e.apply(this,f),this.trigger.apply(this,["route:"+d].concat(f)),b.history.trigger("route",this,d,f)},this)),this},navigate:function(a,c){b.history.navigate(a,c)},_bindRoutes:function(){if(this.routes){var a=[];for(var b in this.routes)this.routes.hasOwnProperty(b)&&a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;d>c;c++)this.route(a[c][0],a[c][1],this[a[c][1]])}},_routeToRegExp:function(a){return a=a.replace(f,"\\$&").replace(d,"([^/]+)").replace(e,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}}),b.Router.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Cloud=b.Cloud||{},c.extend(b.Cloud,{run:function(a,c,d){d=d||{};var e=b._request({route:"functions",className:a,method:"POST",useMasterKey:d.useMasterKey,sessionToken:d.sessionToken,data:b._encode(c,null,!0)});return e.then(function(a){return b._decode(null,a).result})._thenRunCallbacks(d)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;b.Installation=b.Object.extend("_Installation"),b.Push=b.Push||{},b.Push.send=function(a,c){if(c=c||{},a.where&&(a.where=a.where.toJSON().where),a.push_time&&(a.push_time=a.push_time.toJSON()),a.expiration_time&&(a.expiration_time=a.expiration_time.toJSON()),a.expiration_time&&a.expiration_interval)throw"Both expiration_time and expiration_interval can't be set";var d=b._request({route:"push",method:"POST",data:a,useMasterKey:c.useMasterKey});return d._thenRunCallbacks(c)}}(this);
Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
};

Array.prototype.peek = function() {
    return this[this.length - 1];
};
(function (window, Parse, $, Backbone, Marionette, _, AgarBot, app) {
    Parse.initialize("nj3ycKuqW4k4CnzN1ZYtMYowoa97qNw7NafLimrF", "nh6arPQQxbE5rFOyR0dCgecQiDAN54Zgjsf7eAKH");
    AgarBot.Views.FeedBotPanel = Marionette.ItemView.extend({
        el:'#feedbot-pannel',
        events:{
            'click #feedBotToggle_master':'onMasterToggle',
            'click #feedBotToggle_auto':'onAutoToggle'
        },
        initialize: function (options){
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
            this.MasterLocation = Parse.Object.extend("MasterLocation");
            this.isEnable = true;
            this.master  = true;
            this.lastMasterUpdate = Date.now();
            this.botEnabled = true;
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
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub, 'FeedBotPanel:changeSetting', this.onChangeSetting);
            this.pannelView.render();
        },
        onChangeSetting:function(options){
            console.log(options);
            if(typeof options.master !='undefined'){
                this.master = options.master;
            }
            if(typeof options.botEnabled !='undefined'){
                this.botEnabled = options.botEnabled;
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
                    setPoint(nextPoint[0], nextPoint[1]);
                    break;
            }
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
                if ( (player.length > 0) && this.botEnabled ) {
                    if (!this.master && Date.now() - this.lastMasterUpdate > 100) {
                        var query = new Parse.Query(this.MasterLocation);
                        var self = this;
                        query.equalTo("server", getServer());
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
                            });
                        this.lastMasterUpdate = Date.now();
                    }

                    //Loop through all the player's cells.
                    for (var k = 0; k < player.length; k++) {
                        if (true) {
                            drawPoint(player[k].x, player[k].y + player[k].size, 0, "" + (getLastUpdate() - player[k].birth) + " / " + (30000 + (player[k].birthMass * 57) - (getLastUpdate() - player[k].birth)) + " / " + player[k].birthMass);
                        }
                    }

                    //Loops only for one cell for now.
                    for (var k = 0; /*k < player.length*/ k < 1; k++) {

                        //console.log("Working on blob: " + k);

                        drawCircle(player[k].x, player[k].y, player[k].size + this.splitDistance, 5);
                        drawPoint(player[0].x, player[0].y - player[0].size, 3, "" + Math.floor(player[0].x) + ", " + Math.floor(player[0].y));

                        //var allDots = processEverything(interNodes);

                        //loop through everything that is on the screen and
                        //separate everything in it's own category.
                        var allIsAll = MapControl.getAll(player[k]);

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

                        var clusterAllFood = MapControl.clusterFood(allPossibleFood, player[k].size);

                        //console.log("Looking for enemies!");

                        //Loop through all the cells that were identified as threats.
                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = MapControl.computeDistanceFromCircleEdge(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y, allPossibleThreats[i].size);

                            allPossibleThreats[i].enemyDist = enemyDistance;
                        }

                        allPossibleThreats.sort(function (a, b) {
                            return a.enemyDist - b.enemyDist;
                        });

                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = MapControl.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);

                            var splitDangerDistance = allPossibleThreats[i].size + this.splitDistance + 150;

                            var normalDangerDistance = allPossibleThreats[i].size + 150;

                            var shiftDistance = player[k].size;

                            //console.log("Found distance.");

                            var enemyCanSplit = (this.master ? MapControl.canSplit(player[k], allPossibleThreats[i]) : false);

                            for (var j = clusterAllFood.length - 1; j >= 0 ; j--) {
                                var secureDistance = (enemyCanSplit ? splitDangerDistance : normalDangerDistance);
                                if (MapControl.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, clusterAllFood[j][0], clusterAllFood[j][1]) < secureDistance)
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

                                badAngles.push(MapControl.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance).concat(allPossibleThreats[i].enemyDist));

                            } else if ((!enemyCanSplit && enemyDistance < normalDangerDistance) || (!enemyCanSplit && allPossibleThreats[i].danger)) {

                                badAngles.push(MapControl.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance).concat(allPossibleThreats[i].enemyDist));

                            } else if (enemyCanSplit && enemyDistance < splitDangerDistance + shiftDistance) {
                                var tempOb = MapControl.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = MapControl.rangeToAngle(tempOb);

                                obstacleList.push([[angle1, true], [angle2, false]]);
                            } else if (!enemyCanSplit && enemyDistance < normalDangerDistance + shiftDistance) {
                                var tempOb = MapControl.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = MapControl.rangeToAngle(tempOb);

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
                            var virusDistance = MapControl.computeDistance(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].x, player[k].y);
                            if (player[k].size < allPossibleViruses[i].size) {
                                if (virusDistance < (allPossibleViruses[i].size * 2)) {
                                    var tempOb = MapControl.getAngleRange(player[k], allPossibleViruses[i], i, allPossibleViruses[i].size + 10);
                                    var angle1 = tempOb[0];
                                    var angle2 = MapControl.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            } else {
                                if (virusDistance < (player[k].size * 2)) {
                                    var tempOb = MapControl.getAngleRange(player[k], allPossibleViruses[i], i, player[k].size + 50);
                                    var angle1 = tempOb[0];
                                    var angle2 = MapControl.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            }
                        }

                        if (badAngles.length > 0) {
                            //NOTE: This is only bandaid wall code. It's not the best way to do it.
                            stupidList = MapControl.addWall(stupidList, player[k]);
                        }

                        for (var i = 0; i < badAngles.length; i++) {
                            var angle1 = badAngles[i][0];
                            var angle2 = MapControl.rangeToAngle(badAngles[i]);
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
                            var tempList = MapControl.addAngle(sortedInterList, stupidList[i]);

                            if (tempList.length == 0) {
                                console.log("MAYDAY IT'S HAPPENING!");
                                break;
                            } else {
                                sortedInterList = tempList;
                            }
                        }

                        for (var i = 0; i < obstacleList.length; i++) {
                            sortedObList = MapControl.addAngle(sortedObList, obstacleList[i]);

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
                            var line1 = MapControl.followAngle(goodAngles[i][0], player[k].x, player[k].y, 100 + player[k].size);
                            var line2 = MapControl.followAngle((goodAngles[i][0] + goodAngles[i][1]).mod(360), player[k].x, player[k].y, 100 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 1);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 1);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 1);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        for (var i = 0; i < obstacleAngles.length; i++) {
                            var line1 = MapControl.followAngle(obstacleAngles[i][0], player[k].x, player[k].y, 50 + player[k].size);
                            var line2 = MapControl.followAngle((obstacleAngles[i][0] + obstacleAngles[i][1]).mod(360), player[k].x, player[k].y, 50 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 6);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 6);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 6);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        if (!this.master && goodAngles.length == 0 && (player[k].size * player[k].size / 100) > this.minimumSizeToGoing) {
                            //This is the slave mode
                            console.log("Really Going to: " + this.masterLocation);
                            var distance = MapControl.computeDistance(player[k].x, player[k].y, this.masterLocation[0], this.masterLocation[1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(this.masterLocation[0], this.masterLocation[1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else if (this.toggleFollow && goodAngles.length == 0) {
                            //This is the follow the mouse mode
                            var distance = MapControl.computeDistance(player[k].x, player[k].y, tempPoint[0], tempPoint[1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(tempPoint[0], tempPoint[1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

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

                            perfectAngle = MapControl.shiftAngle(obstacleAngles, perfectAngle, bIndex);

                            var line1 = MapControl.followAngle(perfectAngle, player[k].x, player[k].y, verticalDistance());

                            destinationChoices = line1;
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 7);
                            //tempMoveX = line1[0];
                            //tempMoveY = line1[1];
                        } else if (badAngles.length > 0 && goodAngles == 0) {
                            //When there are enemies around but no good angles
                            //You're likely screwed. (This should never happen.)

                            console.log("Failed");
                            destinationChoices = [tempMoveX, tempMoveY];
                            /*var angleWeights = [] //Put weights on the angles according to enemy distance
                             for (var i = 0; i < allPossibleThreats.length; i++){
                             var dist = MapControl.computeDistance(player[k].x, player[k].y, allPossibleThreats[i].x, allPossibleThreats[i].y);
                             var angle = MapControl.getAngle(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);
                             angleWeights.push([angle,dist]);
                             }
                             var maxDist = 0;
                             var finalAngle = 0;
                             for (var i = 0; i < angleWeights.length; i++){
                             if (angleWeights[i][1] > maxDist){
                             maxDist = angleWeights[i][1];
                             finalAngle = (angleWeights[i][0] + 180).mod(360);
                             }
                             }
                             var line1 = MapControl.followAngle(finalAngle,player[k].x,player[k].y,f.verticalDistance());
                             drawLine(player[k].x, player[k].y, line1[0], line1[1], 2);
                             destinationChoices.push(line1);*/
                        } else if (clusterAllFood.length > 0) {
                            for (var i = 0; i < clusterAllFood.length; i++) {
                                //console.log("mefore: " + clusterAllFood[i][2]);
                                //This is the cost function. Higher is better.

                                var clusterAngle = MapControl.getAngle(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);

                                clusterAllFood[i][2] = clusterAllFood[i][2] * 6 - MapControl.computeDistance(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);
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

                            var distance = MapControl.computeDistance(player[k].x, player[k].y, clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            //tempMoveX = destination[0];
                            //tempMoveY = destination[1];
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else {
                            //If there are no enemies around and no food to eat.
                            destinationChoices = [tempMoveX, tempMoveY];
                        }

                        drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], "");
                        //drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], "" + Math.floor(MapControl.computeDistance(tempPoint[0], tempPoint[1], I, J)));
                        //drawLine(tempPoint[0], tempPoint[1], player[0].x, player[0].y, 6);
                        //console.log("Slope: " + slope(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Angle: " + getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Side: " + (getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) - 90).mod(360));
                        tempPoint[2] = 1;
                        //console.log("Done working on blob: " + i);
                    }

                   //TODO: Find where to go based on destinationChoices.
                    /** var dangerFound = false;
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
                    } else {
                        /!*tempMoveX = destinationChoices.peek()[0][0];
                        tempMoveY = destinationChoices.peek()[0][1];*!/
                        //console.log("Done " + tempMoveX + ", " + tempMoveY);
                    }*/
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
                    if (Date.now() - this.lastMasterUpdate > 100) {
                        var self = this;
                        var query = new Parse.Query(this.MasterLocation);
                        query.equalTo("server", getServer());
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
                        });
                        this.lastMasterUpdate = Date.now();
                    }
                }

                return destinationChoices;
            }
        },
    });
    app.module("FeedBot", {
        moduleClass: AgarBot.Modules.FeedBot
    });
})(window, Parse, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);
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
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var k = 0; k < player.length; k++) {
                var allIsAll = MapControl.getAll(player[k]);
                //The food stored in element 0 of allIsAll
                var allPossibleFood = allIsAll[0];
                //The threats are stored in element 1 of allIsAll
                var allPossibleThreats = allIsAll[1];
                //The viruses are stored in element 2 of allIsAll
                var allPossibleViruses = allIsAll[2];
                this.ctx.save();
                //Loop through all the cells that were identified as threats.
                for (var i = 0; i < allPossibleThreats.length; i++) {
                    var token = allPossibleThreats[i];
                    var position = this.calcPosition(token.x, token.y, token.size);
                    this.drawCycle(position.x,position.y,position.size,token.color);
                }

                this.ctx.restore();

                var playerPosition = this.calcPosition(player[k].x, player[k].y, player[k].size);
                this.ctx.save();
                this.drawCycle(playerPosition.x,playerPosition.y,playerPosition.size,player[k].color);
                this.ctx.restore();

                if (self.mapOptions.enableCross) {
                    self.miniMapDrawCross(playerPosition.x, playerPosition.y, player[k].color);
                }
                if (self.mapOptions.enableAxes) {
                    self.miniMapDrawMiddleCross();
                }
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
        miniMapDrawMiddleCross:function(){
            this.ctx.save();
            this.ctx.lineWidth = 0.2;
            this.ctx.beginPath();

            var heightOneThird = this.canvas.height/3;
            var widthOneThird = this.canvas.height/3;

            this.ctx.moveTo(0, heightOneThird);
            this.ctx.lineTo(this.canvas.width, widthOneThird);

            this.ctx.moveTo(0, heightOneThird*2);
            this.ctx.lineTo(this.canvas.width, widthOneThird*2);

            this.ctx.moveTo(heightOneThird, 0);
            this.ctx.lineTo(heightOneThird, this.canvas.height);

            this.ctx.moveTo(heightOneThird*2, 0);
            this.ctx.lineTo(heightOneThird*2, this.canvas.height);

            this.ctx.closePath();
            this.ctx.strokeStyle = '#000000';
            this.ctx.stroke();
            this.ctx.restore();
        }
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
        },
        onStart: function (options) {
            this.panelView.render();
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
/**
 * At the end of the world. We lauch the application
 */
(function($, Backbone, _,AgarBot, app){
    app.start();
    $(document).ready(function(){
        AgarBot.pubsub.trigger('document.ready');
    });
})(jQuery, Backbone, _,AgarBot, AgarBot.app);