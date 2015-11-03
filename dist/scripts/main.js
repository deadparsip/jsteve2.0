/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function z(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);
if("-"===k||"+"===k||0<=k)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var h=d[n];h.shift()();h.length&&b.push(h)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){h=h&&s;++n===
a.length&&b(h)}var n=0,h=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,h){return d[a].some(function(a){return a(b,c,h)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,h,k,D,A,Z,I){function w(a,b){var c=z(a),f=[],m=l[b];m&&u(m,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function g(b){Da(a,p);ca(a,p);p.domOperation();l.complete(!b)}var P,E;if(a=Fa(a))P=z(a),E=a.parent();p=ia(p);var l=new A;if(!P)return g(),l;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return g(),l;var M=0<=["enter","move","leave"].indexOf(S),h=!x||L.get(P),e=!h&&m.get(P)||{},k=!!e.state;h||k&&1==e.state||(h=!ta(a,E,S));if(h)return g(),l;M&&K(a);h={structural:M,element:a,event:S,close:g,options:p,runner:l};if(k){if(b("skip",a,h,e)){if(2===e.state)return g(),l;R(a,e.options,p);return e.runner}if(b("cancel",a,h,e))2===e.state?e.runner.end():e.structural?e.close():R(a,h.options,e.options);else if(b("join",a,h,e))if(2===e.state)R(a,p,{});else return S=h.event=e.event,p=R(a,
e.options,h.options),l}else R(a,p,{});(k=h.structural)||(k="animate"===h.event&&0<Object.keys(h.options.to||{}).length||c(h.options));if(!k)return g(),C(a),l;M&&f(E);var r=(e.counter||0)+1;h.counter=r;ga(a,1,h);s.$$postDigest(function(){var b=m.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),l.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){g(!b);(b=m.get(P))&&b.counter===r&&C(z(a));d(l,S,"close",{})}),l.setHost(b),d(l,S,"start",{})});return l}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function C(a){a=z(a);a.removeAttribute("data-ng-animate");m.remove(a)}function E(a,b){return z(a)===z(b)}function f(a){a=z(a);do{if(!a||1!==
a.nodeType)break;var b=m.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=m.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,g));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?ya(b,c):c;m.put(a,c)}var m=new k,L=new k,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),g=G(h[0].body),l={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=z(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,h){var k=[],D=ha(a),A=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=z(a.element),
m=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var g=m?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,m){var g=c.from,e=c.to;if(g&&e){var l=a[g.animationID],h=a[e.animationID],x=g.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){l.beforeStart();h.beforeStart()},close:function(){l.close();h.close()},classes:E(l.classes,h.classes),
from:l,to:h,anchors:[]};B.classes.length?b.push(B):(b.push(l),b.push(h))}d[x].anchors.push({out:g.element,"in":e.element})}else g=g?g.animationID:e.animationID,e=g.toString(),f[e]||(f[e]=!0,b.push(a[g]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var g=0;g<b.length;g++)if(d===b[g]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function m(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();g&&a.removeClass(w,g);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){m()},cancel:function(){m(!0)}});if(!c.length)return m(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),g=r.tempClasses;g&&(M+=" "+g,r.tempClasses=null);var l;L||(l=A,A+=1);k.push({element:w,classes:M,event:B,classBasedIndex:l,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");g&&a.addClass(w,g)},close:m});w.on("$destroy",ga);if(1<k.length)return x;e.$$postDigest(function(){Z=A;A=0;I.length=0;var a=[];u(k,function(c){b(c.element)&&a.push(c)});k.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,g=a.close,e=a.anchors?
a.from.element||a.to.element:a.element;b(e)&&z(e).parentNode&&(e=f(a))&&(d=e.start);d?(d=d(),d.done(function(a){g(!a)}),ta(a,d)):g()}a.structural?c():(I.push({node:z(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),h(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,
e,s,n,h,k,D){function A(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(h,f,B,k){var m;0<b.count(B)&&(m=c.get(B),m||(f=ba(f,"-stagger"),e.addClass(h,f),m=za(a,h,k),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(h,f),c.put(B,m)));return m||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<
C.length;d++)C[d](a);C.length=0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=z(h).body,C=[];return function(a,c){function d(){m()}function h(){m(!0)}function m(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,
W);ma(g,!1);ja(g,!1);u(l,function(a){g.style[a[0]]=""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(g,a);q.blockKeyframeAnimation&&ma(g,!!a)}function x(){p=new s({end:d,cancel:h});m();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(l,function(a){g.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=g.className+" "+Y;$=A(g,fa);y=w(g,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;
if(0===J){m();return}q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var k;q.applyTransitionDelay&&(y.transitionDelay=Q,k=[ea,Q+"s"],l.push(k),g.style[k[0]]=k[1]);q.applyAnimationDelay&&(y.animationDelay=Q,k=[ra,Q+"s"],l.push(k),g.style[k[0]]=k[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(k=O+"TimingFunction",l.push([k,
r]),g.style[k]=r);q.hasAnimations&&(k=V+"TimingFunction",l.push([k,r]),g.style[k]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),h);n(d,F+1.5*G);xa(a,c)}}function d(){m()}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,m())}if(!K)if(g.parentNode){var x,p=[],k=function(a){if(C)D&&a&&(D=!1,m());else if(D=!a,y.animationDuration)if(a=
ma(g,D),D)l.push(a);else{var b=l,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){k(!0)};t.pause=function(){k(!1)}}else m()}var g=z(a);if(!g||!g.parentNode)return x();c=ia(c);var l=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!k.animations&&!k.transitions)return x();var aa=c.event&&X(c.event)?
c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!(0<(c.keyframeStyle||"").length||r||Y))return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):
($=A(g,fa),T=Z(g,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(g,v),l.push(v));0<=c.duration&&(v=0<g.style[O].length,v=Aa(c.duration,v),da(g,v),l.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(g,v),l.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(g,9999);var y=w(g,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&
"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=
J,v=0<g.style[O+"Property"].length,l.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,l.push([sa,J+"s"]));if(0===J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(g,!1);L(J);return{$$willAnimate:!0,
end:d,start:function(){if(!K)return t={end:d,cancel:h,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function h(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,
e,A){function D(a){var b={},c=z(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=h(A.attr("class")||""),d=k(c,t),c=k(t,c),d=a(n,{to:D(A),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");A.removeClass("ng-animate-shim")}var n=G(z(e).cloneNode(!0)),
t=h(n.attr("class")||"");e.addClass("ng-animate-shim");A.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var m;c=function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(m=s(),!m))return f();var L=c||m;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!m&&(m=s()))return c=m.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function A(a,
b,c,e){var h=t(a),f=t(b),k=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&k.push(a)});if(h||f||0!==k.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];h&&b.push(h.start());f&&b.push(f.start());u(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;
c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=z(s).body;c=z(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&a.to?A(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},A=0;A<c.length;A++){var n=c[A],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=
!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function z(a,b,d,e,g){switch(d){case "animate":b=[b,e.from,e.to,g];break;case "setClass":b=[b,r,K,g];break;case "addClass":b=[b,r,g];break;case "removeClass":b=[b,K,g];break;default:b=[b,g]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(g);else if(Ca(a))return a;return H}function w(a,b,d,e,g){var f=[];u(e,function(e){var h=e[g];h&&f.push(function(){var e,g,f=!1,l=function(a){f||
(f=!0,(g||H)(a),e.complete(!a))};e=new c({end:function(){l()},cancel:function(){l(!0)}});g=z(h,a,b,d,function(a){l(!1===a)});return e})});return f}function B(a,b,d,e,g){var f=w(a,b,d,e,g);if(0===f.length){var h,k;"beforeSetClass"===g?(h=w(a,"removeClass",d,e,"beforeRemoveClass"),k=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=w(a,"removeClass",d,e,"removeClass"),k=w(a,"addClass",d,e,"addClass"));h&&(f=f.concat(h));k&&(f=f.concat(k))}if(0!==f.length)return function(a){var b=[];f.length&&
u(f,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=
!0;t();ca(a,e);g.complete(c)}var d,k=[];E&&k.push(function(a){d=E(a)});k.length?k.push(function(a){t();a(!0)}):t();f&&k.push(function(a){d=f(a)});var n=!1,g=new c({end:function(){n||((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(k,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}
return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.4.4-build.4120+sha.cce084e
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
/*
 AngularJS v1.4.6-build.4208+sha.6f39f10
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,s,y){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(c,e){return function(l,m,g){function h(a){if(!b)return!1;var d=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return r&&75>d&&0<a&&30<a&&.3>d/a}var d=c(g[f]),b,r,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,d){b=a;r=!0},cancel:function(a){r=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);d(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(c){c=c.originalEvent||c;var e=c.touches&&c.touches.length?c.touches:[c];c=c.changedTouches&&c.changedTouches[0]||e[0];return{x:c.clientX,y:c.clientY}}function k(c,e){var l=[];s.forEach(c,function(c){(c=p[c][e])&&l.push(c)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(c,e,l){var m,g,h,d,b=!1;l=l||["mouse","touch"];c.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;d=h;e.start&&e.start(h,a)});var r=k(l,"cancel");if(r)c.on(r,function(a){b=!1;e.cancel&&e.cancel(a)});c.on(k(l,"move"),function(a){if(b&&h){var c=f(a);m+=Math.abs(c.x-d.x);g+=Math.abs(c.y-d.y);d=c;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(c,a)))}});c.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function c(d,b,c){for(var a=0;a<d.length;a+=2){var e=d[a+1],g=c;if(25>Math.abs(d[a]-b)&&25>Math.abs(e-g))return d.splice(a,a+2),!0}return!1}function e(d){if(!(2500<Date.now()-m)){var b=d.touches&&d.touches.length?d.touches:[d],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=d.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);c(g,e,b)||(d.stopPropagation(),d.preventDefault(),d.target&&
d.target.blur&&d.target.blur())}}}function l(d){d=d.touches&&d.touches.length?d.touches:[d];var b=d[0].clientX,c=d[0].clientY;g.push(b,c);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==c){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(d,b,h){var a=f(h.ngClick),k=!1,q,n,t,v;b.on("touchstart",function(a){k=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);b.addClass("ng-click-active");n=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
[a])[0];t=a.clientX;v=a.clientY});b.on("touchcancel",function(a){k=!1;b.removeClass("ng-click-active")});b.on("touchend",function(a){var d=Date.now()-n,f=a.originalEvent||a,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,w=Math.sqrt(Math.pow(f-t,2)+Math.pow(u-v,2));k&&750>d&&12>w&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),c(g,f,u),q&&q.blur(),s.isDefined(h.disabled)&&
!1!==h.disabled||b.triggerHandler("click",[a]));k=!1;b.removeClass("ng-click-active")});b.onclick=function(a){};b.on("click",function(b,c){d.$apply(function(){a(d,{$event:c||b})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

(function() {

    var blepCat = angular.module('whelk.blepCat', ['ngSanitize']);

    blepCat.controller('blepCatController', ['$scope', function ($scope) {
	
		//$scope.isMobile = !!('ontouchstart' in window);
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.blepCats = [

			{
                title: 'Never stop being yourself?',
                content : 'Today\'s truthMissile is targeting your silent shouting space and it\'s a corker!'+
				'Just lie down and remember that you cannot be yourself because yourself does not exist, you are everything and everything is you.' +
				'Consciousness is a deceit propagated by those who would have you buy their overpriced mattresses. ~~ Accept your place in the cosmos and lie down ~ ',
				src: '/img/blepSpaceCat' + $scope.isMobile + 'space-blep-cat-important-things.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },            
			{
                title: 'People watch Vince Vaughn movies',
                content : 'It is true. </p><em>Voluntarily</em>. All the while you bravely chose to attempt to decode existence. I salute you you beautiful clever tin of bitch.',
				src: 'img/blepSpaceCat' + $scope.isMobile + 'space-blep-cat-vince-vaughn.jpg',
				alt: 'Blep Cat does not like Vaughn movies - he is a bitch'
            },			
            {
                title: 'Don\'t worry. In 150 years no one will remember you',
                content : 'Today\'s Truth Missile of Truth missiling away truthfully, cutting through the shyte spectrum towards your pointless head-hole is this:' +
				'Always try your best. Or don\'t. It doesn\'t really matter, because in a relatively short amount of time you will be dead, no one will remember you, and nothing you ever did will have had any impact on the universe. LOVE. ~ ',
				src: '/img/spacesloth/' + $scope.isMobile + '/sloth-bin-of-deathless-infinite.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'				
            },
            {
                title: 'When the Universe was born, all the particles required to make a fully-realised \<em\>Piers Morgan\<\/em\> were present. Probably.',
                content : 'Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.',
				src: '/img/blepSpaceCat/' + $scope.isMobile + '/space-blep-cat-piers-morgan.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            },
            {
                title: 'NOBODY IS DIFFERENT',
                content : '',
				src: '/img/blepSpaceCat/' + $scope.isMobile + '/space-blep-cat-different.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            }				
        ]

        $scope.changeActiveblepCat = function (index) {
			console.log(index);
			$scope.activeblepCat = index;
        };

        $scope.forwardblepCat = function () {
            if ($scope.activeblepCat < [$scope.blepCats.length -1]) {
				$scope.back="fadeInRight";
				$scope.activeblepCat += 1;
			}
        };

        $scope.backblepCat = function () {
			if ($scope.activeblepCat > 0) {
				console.log($scope.activeblepCat);
				$scope.back="fadeInLeft";				
				$scope.activeblepCat -= 1;
			}
        };


    }]);

}());


(function() {

    var blogs = angular.module('whelk.blogs', [
		'ngSanitize',
		'ngTouch'
	]);

    blogs.controller('blogsController', ['$scope', function ($scope) {

		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.blogs= [
            {
                title: 'RULES of social media TO BE OBEYED ALL OF THE TIMES',
                content : '<p>Am I getting old or was the woman just lying? As a species we are getting weirder, and the social framework within which we are all imprisoned, scratching our groins and incoherently gibbering, becomes evermore complex and seemingly arbitrary in this the shiny new age of INTERNETS. Let us not embrace the weirdness but maybe clear it up so we all UNDERSTAND the RULES fully and are all ON BOARD*.</p> <p>Here I attempt to explain some of the more unusual rules/customs for those that still retain some sanity/dignity.</p><ol><li>Go on social media and wish happy birthday to people who AREN\'T ON SOCIAL MEDIA, i.e 1 year old nephew, dead celebrity, deranged auntie, etc. Doesn\'t make sense? JUST DO IT. IT\'S THE RULES. Always remember social media ISN\'T about real life or making sense. People who try to tell you to make sense have miserable faces and Rules instead of hands. Why can\'t you command your favourite singer to R.I.P? So what they won\'t see it? So what it is utterly futile? Please try  to avoid ignore the creeping realisation that you are merely shouting into the electronic  void like a 21st century Shakespearean character.</li><li>Take a PHOTOGRAPH of a pint of beer/glass of wine/mojito etc. and SHARE the EFF out it. Just telling the world you are drinking is NOT ENOUGH, SHOW THEM TOO. They simply won\'t believe you otherwise. And then NOBODY will know for sure that you are having fun. And then in that case are you really having fun?</li><li>If you are a girl or a sufficiently inane bloke and you are on holiday, obligatory photograph of legs must ensue. <br> Optional book-on-top-of-legs. IF book is one you wish the world to know you are reading, i.e. 50 SHADES etc.<br> Very unlikely in majority of cases anyone wants to see your pins but THESE ARE THE RULES and must be obeyed. <br> Also try to adjust angle of shot so that your legs look as much like frankfurters as possible. Bonus points for including semi-smug comment about how tough your Monday is, life is hard right now, etc. etc.<br></li> <li>If you are thinking of joining a dating site, you MUST go on holiday and take a PHOTO of yourself cuddling a dejected TIGER/LION. ALL profile pictures must be captioned with CITY photo was taken in, and DATE, even if photo is a selfie taken in a HOTEL ROOM and could be ANYWHERE IN THE WORLD for all it matters.</li><li>If you are COMMENTING on a youTube thread, you MUST pretend that you are a 9th Level black belt metaphysical solipsist and absolutely reject the concept of other people as independent beings with own thoughts, feelings or opinions. Other people are merely projections of your inner self, and any opinions offered which differ to yours are declarations of war which have to be obliterated in the fiercest and most vociferous manner before schizophrenia sets in and you DIE OF PAIN and UGLY. If you are not sure how to attack, usually a reference to your foe\'s age (\'you are JUST A LITTLE KID\'), or the state of their anus (\'why you so butthurt bruh\') is a good opening foray. As a last resort you can declare them TROLLS. Once you do this all their opinions become void and YOU WIN.</li>	<li>If uploading a PHOTO to Instagram, you MUST include as MANY HASHTAGS AS POSSIBLE, even if they are seemingly pointless ones, like #DAYTIME, #PICTURE, #HAND, #GROUND, #SKY #HAT #ME etc. <br>No one ever searches these hashtags so it is utterly futile BUT A) IT\'S THE RULES and B) STOP KIDDING YOURSELF LIFE ITSELF IS FUTILE and C)rules are for SQUARES. But let\'s not examine that too much right now. Please try not to linger on the creeping realisation that you are a herd animal and doing things for no particular reason other than perhaps the vague compulsion mimic your peers.</li><li>If you are a GURL and are ANNOYED at someone, DO NOT TELL THEM. Upload a picture to the Facebooks which has some WORDS on it, which vaguely describe how you are FEELING. i.e.\'REAL WOMEN DON\'T HAVE TIME FOR WASTEMANZ, REAL WOMEN NEED REAL MEN\', or \'LIFE ISN\'T ABOUT HOW STRONG YOUR SANDWICH IS, BUT HOW MANY TIMES YOU CAN GET BACK UP AGAIN\' etc. These pictures usually have a lovely lovely background, like a waterfall, or a lake or something, to make them extra profound.</li><li>If you are on the TWITTER and see a link to an interesting article, RETWEET IT IMMEDIATELY even if it was originally tweeted by someone everyone in entire known universe ALREADY FOLLOWS and has ALREADY SEEN. Remember twitter is NOT about passing on useful/interesting links but TELLING THE WORLD YOU FOUND THEM AND LIKE THEM so you are totes cool.</li><li>If a female friend uploads a selfie to ANY social media, you must immediately and gushingly tell them THEY ARE UTTERLY UTTERLY SOCK-SHRINKINGLY BEAUTIFUL. If you are also female, you MUST use the word HUN as much as possible when doing this. If you are male feel free to also use word HUN but be prepared to be judged DAMNINGLY like a guilty beaver.</li><li>If you ever find yourself in LAS VEGAS, or ANYWHERE that you deem to be quite a cool place, any PHOTOS you upload must include the words "[vegas||placename] BABY" in the caption. This usefully tells the world that A) the place you are in is totes cool and B) that you are fully aware of this fact, and this is the reason you are actually there - i.e. you are totes cool also</li><li>GURLS: If you are being photographed and you suspect the photograph may end up on social media, then you MUST:<br>1. Stand slightly sideways<br> 2.Turn one foot out 3. Place one hand on thigh 4. Pout like a Babel fish retching up it\'s ribs. If you miss any one of these things YOU WILL IMMEDIATELY DIE AND LOOK FAT AT THE SAME TIME. And as any fule know, following these rules MAKES EVERYONE BEAUTIFUL.</li><li>Celery.</li></ol><small>*see #2 in series, weird things people SAY now</small>',
				src: '/img/memeKitten/meme-kitten-around.jpg',
				alt: 'Social media RULES'
            },
            {
                title: 'Pointless to Phone ratio (5:1)',
                content : '<p>If you could bear with MYSELF for a moment, I will get your details up and be with YOURSELF in just one moment..</p><p>Bear with....</p><p>Bear with....</p><p>Bear with....</p><p>Bear with....</p><p>Now did you say YOURSELF\'S name was.....</p><p>............</p><p>..?</p><em>Oh sorry was that a question or am I just the crazy?</em><br><em>...well, MYSELF\'s name is, er.... never mind I am going to lie down because of the things</em><br>	<p>Excellent. Have I resolved all your issues for you today in a professional and profound and enjoyable way that left you satisfied yet slightly motivated to call us again soon?</p><p>......</p><br> <p>I didn\'t set fire to the body at that point although it would have catharted the flip out of me right then.</p>'
            },
            {
                title: 'An overheard conversation #111',				
                content : '<p>I am LITERALLY such a geek! I went to the zoo last week AND I like the Doctor Who! ohhhh so embarrassing but I am a totes geek! :) You got me :)</br>* note to self, buy a geek t-shirt as am defo a geek *'
            }		
            		
        ]

        $scope.changeactiveblogs = function (index) {
			$scope.activeblogs = index;
        };

        $scope.forwardblogs = function () {
            console.log($scope.activeblogs + " " + [$scope.blogs.length -1]);
			if ($scope.activeblogs < [$scope.blogs.length -1]) {
				$scope.back="fadeInRight";
				$scope.activeblogs += 1;
			}
        };

        $scope.backblogs = function () {
			if ($scope.activeblogs > 0) {
				$scope.back="fadeInLeft";				
				$scope.activeblogs -= 1;
			}
        };


    }]);

}());


(function() {

    var vagueWhelk = {};
    var app = angular.module("whelk", [
		"ngSanitize",
		"ngAnimate",
		"ngTouch"
	]);

    angular.module('whelk', [
        'whelk.main',
        'whelk.poetry',
        'whelk.pics',
        'whelk.films',
        'whelk.spaceSloth',
		'whelk.blepCat',
		'whelk.stories',
		'whelk.memeKitten',
		'whelk.blogs'		
    ]);

    var main = angular.module('whelk.main', ['ngSanitize']);

    main.controller('MainController', ['$scope', function ($scope) {
        $scope.h1 = 'ptere hralk';
        $scope.activeSection = 0;
        $scope.activePoem = 0;
        $scope.activePic = 0;
        $scope.activeFilm = 0;
		$scope.activespaceSloth =0;
		$scope.activeblepCat =0;
		$scope.activeStory = 0;
		$scope.activememeKitten = 0;
		$scope.activeblogs = 0;		
		$scope.back = "fadeInLeft";
		
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
				
        $scope.changeActiveSection = function (index) {
			$scope.activeSection = index;
            $scope.sections[index].showContent = false;
        };
		
		
        $scope.forward = function () {
            if ($scope.activeSection < $scope.sections.length) {
				$scope.back="fadeInRight";
				$scope.activeSection += 1;
			}
        };

        $scope.backs = function () {
			if ($scope.activeSection > 0) {
				$scope.back="fadeInLeft";				
				$scope.activeSection -= 1;
			}
        };

        $scope.navs = [
        {
            link: 'home'
        },
        {
            link: 'poetry'
        },
        {
            link: 'blep cat'
        },			
        {
            link: 'bio'
        },
        {
            link: 'films'
        },
        {
            link: 'meme kitten'
        },		
        {
            link: 'space sloth'
        },
        {
            link: 'stories'
        },
        {
            link: 'pics'
        },
        {
            link: 'blogs'
        }		
        ]


        $scope.sections = [
        {
            name: 'Welcome the flip to my thought trolley',
            href: '',
            cover: '/img/welcometoJsteve.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>Who am I, you sweet sweet sack of bitch? Caster of Hexes, cuckolder of mind-kettles, vin de table. I am eleventy of all these things.</p>" +
                "<p>Poet, Dovahkiin, mage, film director, astral projectionist, part-time badger farmer, moth-worrier and table. These are just some of the things that people can be." +         
            "<p>-- this is where my mind shouts fall outs -- </p><p>FEEL FREE TO HAVE A LOOK ABOUT you coagulated glove-toaster. Sometimes things " +
            "here aren't that rubbish. </p><h3>New Things ---></h3><br><p>" +
			
			"<p>Today we say Goodbye to Brendan, he was a good sort, always up for a laugh, and an expert in statistinguics. Some Interesting facts about Brendan: <br> ~He has the strongest hair in the premier league <br> ~Growing up, he was the shortest man in Northern Ireland, so he moved to Leicester <br> ~He really likes possession, at home all his things are labelled 'BRENDANS' with sticky labels <br> ~ He once fell on top of his nose after listening to 'That's my leg!' by Phil Collins <br> ~ his lips are made from bark, nobody knows why <br><br> Here is a painting of Brendan to help you along x </p><img src='/img/doodles/brendan-rogers.png' alt='The Brendan Rogers is no more'/><br><br>" +
			
			"<p>Whenever life gets too much... take a break, go easy on yourself. ALWAYS REMEMBER JUST ONE THING</p><img src='/img/blepSpaceCat" +$scope.isMobile + "blep-space-cat-toomuch.jpg' alt='The Blep Space Cat would like to offer you some of the console'/><br><br>" +
			
			"<p>REMEMBER you do not know anything - but neither does anybody else!</p><img src='/img/spacesloth/space-sloth-knowledge.jpg' alt='The Space Sloth on knowledge'/><br><br>" +			
			
			"<p>Space Blep Cat! O EM GEE.</a></p>" +
			"<p>People watch Vince Vaughn movies. <br><em>Voluntarily</em>. All the while you bravely chose to attempt to decode existence. I salute you you beautiful clever tin of bitch.</p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-vince-vaughn.jpg' alt='the Space Blep Cat does not like Vince Vaughn movies'/><br><br>" +
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>Here is a Space Blep Cats! Ahhh yeah! These guys know what they are talking about m8.</a></p><p>Don\'t let important things fly away into space!<br></p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-important-things.jpg' alt='the Space Blep Cat likes important things close by'/><br><br>" +
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>Even more Space Blep Cats! Oh my gloves, I am so greasy now!</a></p>"+
			"<p>When the Universe was born, all the particles required to make a fully-realised <em>Piers Morgan</em> were present. Probably."+
			"Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.</p>" + 
			"<img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-piers-morgan.jpg' alt='the Space Blep Cat does not like Piers Morgan'/><br>	<br>" + 
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>One more Space Blep Cats for your lovely bitch faces! If you aren\'t fully mad yet</a></p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-different.jpg' alt='the Space Blep Cat does not like Piers Morgan'/><br><br>",
			
            templateUrl: '',
            showContent: true
        },
        {
            name: 'Poetries',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: '/img/banners/poetry.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>When the poetries falls out of my face part, approximately 39% gets caught in my beard, so I shake it off into the flip-matrix where it can lead a happier life. " +
                   "(The rest I hide where the moth-bodies are)If the Twitter is 300 million identical souls shouting desperately and incoherently into the enormous black void of the eternal gulf of cosmic nihility, my poetry hive is a sweet " + "meaningful sherbet lemon tree humming quiet sense in a profound but moderately-sized corn field with a nice cat in it.<br>" +
                      "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'poetry.html',
            showContent: true
        },
		{
            name: 'Blep Cat',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: 'img/blepSpaceCat/' + $scope.isMobile + 'space-blep-cat-vince-vaughn.jpg',
            alt: 'Blep Cats',
            desc: "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'blep-cat.html',
            showContent: true
        },		
        {
            name: 'Bio of a fully Jon Stevens',
            href: 'http://www.thevaguewhelk.com/bio',
            cover: '/img/hallwayPosters1.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>Poetician, Guru, night-time Russian boxer, Liverpool striker, Man About Town 1998 (Croydon), sometime-moth-destroying trouserless sage:  I am many things to many people. Let me die in in the barrel!</p>" +
                  "<p class='go'>My life story you string of ham holding a bitch --></p>",
            templateUrl: 'bio.html',
            showContent: true
        },
        {
            name: 'Films',
            href: 'http://www.thevaguewhelk.com/bio',
            cover: '/img/films/war-badger2.jpg',
            alt: 'War Badger 2',
            desc: "<p>A series of films spanning a deflating 12 year career as a screenwriter/director in papua new guinea.</p><br> " +
                "<p>Some of these films were severely not that good, but that all came from deep within, like heart-coal, so judge not negatively, lest yea" +
                "be buried in some crows outside the Penge Conservative Club with all the benefits people.</p><p class='go'>Go and look at the films you lovely pile of bitch --></p>",
            templateUrl: 'films.html',
            showContent: true
        },
		{
            name: 'Meme Kitten',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: 'img/memeKitten/space-blep-cat-vince-vaughn.jpg',
            alt: 'Blep Cats',
            desc: "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'meme-kitten.html',
            showContent: true
        },
        {
            name: 'Space Sloth',
            cover: '/img/spaceSloth/sloth-bin-of-deathless-infinite.jpg',
            alt: 'The Space Sloth speeketh!',
            desc: "<p>Wisdimz from the Great Space Sloth! He will blow your mind like a sex-worker therapist with a stun-enema. That is a mind properly blown. His words will almost certainly make your wig go back son!</p>" +
                  "<p class='go'>Go and heed the Space Sloth's words you radish patch and herb garden bitch --></p><br>",
            templateUrl: 'space-sloth.html',
            showContent: true
        },
		
        {
            name: 'Short stories',
            cover: '/img/films/war-badger2.jpg',
            alt: 'The Space Sloth speeketh!',
            desc: "<p>Fables from the broken witterings of a troubled sleep that occasionally make wet and always eventually engage like a troubled gear.</p><br>" +
                    "<p class='go'>Go and look at some of the stories you uncultured but attractive bitch! --></p>",
            templateUrl: 'stories.html',
            showContent: false
        },
		
        {
            name: 'Doodles',
            href: 'http://www.thevaguewhelk.com/pics/index.html',
            cover: '/img/spaceCat1.jpg',
            alt: 'Space CAT',
            desc: "<p>Pictures can engage you like a jealous rage, or they can pass by unnoticed like a shopping trolley with new wheels. Either way, potatoes.</p><br>	" +
                  "<p class='go'>Go and look on the doodles --></p><br>",
            templateUrl: 'pics.html',
            showContent: false
        },
		{
            name: 'Blogs',
            href: 'http://www.thevaguewhelk.com/blog/index.html',
            cover: '/img/banners/reluctant-aubergine.jpg',
            alt: 'Blogs',
            desc: "<p>Bogs are mind shouts that fell into the internet. Some of them I have managed to catch and put down, humanely. This has nothing to do with this part of the site. </p><br>" +
                  "<p class='go'>Go and look on the blogs --></p><br>",
            templateUrl: 'blogs.html',
            showContent: false
        }
		]
		
        $scope.showContent = function (index) {
            if (index > 0) {
				console.log(index + " show");
				$scope.sections[index].showContent = !$scope.sections[index].showContent;
			}

			}			
		
    }]);
   

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3&appId=441624989266596";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

	

}());


(function () {

    var pics = angular.module('whelk.films', ['ngSanitize']);

    pics.controller('filmsController', ['$scope', function ($scope) {
		$scope.back = "fadeInLeft";
        $scope.films = [
            {
                title: 'SOLITUDE',
				content: 'An epic 4 hours one-man stage play, starring William Shatner, SOLITUDE is about a rusty bathtub alone with his thoughts in deep deep space.',
				src: '/img/films/solitude.jpg'
            },

			{
                title: 'Fruit Suitcase',				
				content: 'A film chronicling the unsung heroes of WW2, <Em>the fruits</em> who lived and died as other men, but were never remembered, like the penultimate beer',
				src: '/img/films/fruit-suitcase.jpg'
            },
            {
                title: 'GUN/FAE/MAN starring Ryan Gosling',
				content: 'He doesn&apos;t talk. Hardly at all. He just looks quite moody and shoots people.',
				src: '/img/films/gufama.jpg'
            },
            {
                title: 'Horse with a Pen',					
				content: 'The premise for this film came to me one afternoon, after several solid minutes of wondering about how horses can&apos;t do some things that we take for granted, like	looking behind themselves, laughing, shaving, sexing horizontally and writing. What better way to bring their plight to light, than to make a big budget weepy blockbuster with megastar Nic Cage in it?'+
				'You can thank me by being a little more sensitive to horses in future.',
				src: '/img/films/horseWithaPen.jpg'
            },
            {
                title: 'Something Happens: A New Generic Film',
                content: 'Starring Slightly Funny People and Slightly Attractive Woman, this film, where nothing really happens, features the tried and tested formula of Slightly Douchey Guy Has Slightly Hot'+
				'Girlfriend Who Is Tired of His Slight Douchieness But Tolerates Him With Good Humour Until He Does Something Silly And Confusion Abounds Then They Have A Fight.',
				src: '/img/films/genericfilm.jpg'
            },
            {
                title: 'CATNABBED',
                content: 'THEY TOOK THE WRONG GUY&apos;S CAT!<br>'+
				'This film, based on TrueLife@trade;, explores the events which take place after a burgler unwittingly steals a cat from a man who Dont Take No Sheeit.',
				src: '/img/films/catnabbed.jpg'
            },
            {
                title: 'Death Kestrel on a Trolley',
                content: 'Each Kestrel on a Trolley is more powerful than 7 hawks in a wheelbarrow or 4 eagles in a wheelie bin! So watch out you filthy intentional nipple slip!',
				src: '/img/films/trolleyofkettle.jpg'
            },
            {
                title: 'Space Badgers IV',
                content: 'In the early 90s I spent a few years living in Borundi. While I was there I came across a rare species of badger called the Space Badger (rough translation).'+ 
				'The space badger comes in all different sizes, and is different from the common badger in that it reproduces but laying eggs. This discovery, and the consumption of fourteen pints of the local home brew together inspired me to have a fitful night&apos;s sleep, and a fearsome dream that lasted over nine hours.'+
				'I dedicated the next decade of my life to turning this dream into a film.',
				src: '/img/films/space-badger.jpg'
            },
            {
                title: 'War badger 2',
                content: 'The hugely anticipated sequel to War Badger sees our hero try to rebuild his life after the terrible bit of war that he was near in the last film.'+
				'An interesting analysis of bits of war that, when near ordinary people (or badgers, geese, etc) can totes eff a guy up in the brain cupboard.',
				src: '/img/films/war-badger2.jpg'
            },
			{
				title: 'Vaguely Badgered',
				content: 'A film that based solely on a troubling dream that awoke me one night.',
				src:'/img/films/vaguely-badgered.jpg'
			},
			{
				title: '50 Maids Grey',
				content: 'An adaptation of my 50 Maids story, with extra octopii (octopussay? Octopusssess?)',
				src:'/img/films/50-maids-grey.jpg'
			},			
			{
				title: 'War Badger',
				content: 'A deeply moving and troubling portrayal of what happens when badgers are sent to war. Wars they don@apos;t believe in. A Platoon (with Badgers) for the 21st century (crossed with Rat Race and ConAir)',
				src:'/img/films/war-badger.jpeg'
			}
        ]

        $scope.changeActiveFilms = function (index) {
            $scope.activeFilm = index;
        };

        $scope.forwardFilm = function () {
            console.log($scope.activeFilm + " length = " +  $scope.films.length)
			if ($scope.activeFilm < ($scope.films.length - 1)) {
				$scope.back="fadeInRight";
				$scope.activeFilm += 1;
			}
        };

        $scope.backFilm = function () {
			if ($scope.activeFilm > 0) {
				$scope.back="fadeInLeft";
				$scope.activeFilm -= 1;
			}
        };        

    }]);
    

}());
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});



//swipings
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this),function(e,t){var r={animation:{},transition:{}},i=n.createElement("a"),s=["","webkit-","moz-","o-"];e.each(["animation","transition"],function(n,o){var u=n===0?o+"-"+"name":o;e.each(s,function(n,s){if(i.style[e.camelCase(s+u)]!==t)return r[o].prefix=s,!1}),r[o].duration=e.camelCase(r[o].prefix+o+"-"+"duration"),r[o].event=e.camelCase(r[o].prefix+o+"-"+"end"),r[o].prefix===""&&(r[o].event=r[o].event.toLowerCase())}),e.support.cssTransitions=r.transition.prefix!==t,e.support.cssAnimations=r.animation.prefix!==t,e(i).remove(),e.fn.animationComplete=function(i,s,o){var u,a,f=this,l=function(){clearTimeout(u),i.apply(this,arguments)},c=!s||s==="animation"?"animation":"transition";if(e.support.cssTransitions&&c==="transition"||e.support.cssAnimations&&c==="animation"){if(o===t){e(this).context!==n&&(a=parseFloat(e(this).css(r[c].duration))*3e3);if(a===0||a===t||isNaN(a))a=e.fn.animationComplete.defaultDuration}return u=setTimeout(function(){e(f).off(r[c].event,l),i.apply(f)},a),e(this).one(r[c].event,l)}return setTimeout(e.proxy(i,this),0),e(this)},e.fn.animationComplete.defaultDuration=1e3}(e)});
(function Calippo($) {
    'use strict';

    var $boxes = $('.boxes'),
        $currentBox = $boxes.eq(0),
        $nextBox = $boxes.eq(1),
        $prevBox = $boxes.eq(0),
        $nav = $('nav'),
        $currentNav = $nav.find('li').eq(0),
        _hash = window.location.hash.replace('#', '').toLowerCase();


    function nextItem(e) {
        window.location.hash = "";
        if ($nextBox.length > 0) {
            $prevBox = $currentBox;
            $currentBox = $currentBox.next();
            $nextBox = $currentBox.next().length ? $currentBox.next() : "";
            $currentNav = $currentNav.hasClass('selected') ? $currentNav.next().addClass('selected') : $currentNav.addClass('selected');
            $currentNav.siblings().removeClass('selected');
            $prevBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                window.location.hash = "";
                $prevBox.hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInRightBig');
            });
        }
    }

    function prevItem(e) {
        if ($prevBox.length > 0) {
            $nextBox = $currentBox;
            $currentBox = $currentBox.prev();
            $prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
            $currentNav = $currentNav.prev().length ? $currentNav.prev().addClass('selected') : $currentNav.removeClass('selected');
            $currentNav.siblings().removeClass('selected');
            window.location.hash = "";
            $nextBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutRightBig').on('animationend webkitAnimationEnd', function () {
                $nextBox.hide().removeClass('fadeOutRightBig').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInLeftBig');
            });
        }
    }

    function getItem(e) {        
		var $t = $(e.target),
			item = $t.attr('class');
		if ($t.hasClass('selected')) return;			
        $currentBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
            console.log(item);
			$currentBox = $('.boxes.'+item);
            $nextBox = $currentBox.next();
            $prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
            $(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
            $currentBox.show().addClass('fadeInLeftBig');
        });
		$currentNav = $(e.target);
		$currentNav.addClass('selected').siblings().removeClass('selected');
    }
	
	(function hashLinking(){
		if (_hash.length > 0) { //hash navigations.. might want to deep link or sth
            var $hashBox = $("article:contains('" + _hash + "')");
            if ($hashBox.length) {
                $currentNav = $nav.find("li:contains('" + _hash + "')").addClass('selected');
                $nextBox = $hashBox.next();
                $prevBox = $hashBox.prev();
                $currentBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                    $currentBox.hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
                    $currentBox = $hashBox;
                    $currentBox.show().addClass('fadeInLeftBig');
                });
            }
        }
	})();	
	
    (function initThoBlud() {
		if (typeof window.ontouchstart !== "undefined") { //accidentally 'swiping' with mouse was starting to really get on my legs
			$boxes.on("swiperight", prevItem);
			$boxes.on("swipeleft", nextItem);	
		}        
        $nav.on('click', function (event) { getItem(event); });
    })();

})(jQuery);

(function() {

    var memekitten = angular.module('whelk.memeKitten', [
		'ngSanitize',
		'ngTouch'
	]);

    memekitten.controller('memeKittenController', ['$scope', function ($scope) {

		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.memeKittens= [
            {
                title: 'People Around',
                content : 'Don\'t have people around who don\'t have you around. If a people is real then they will want you around as well, even when you are being more rubbish than them, they will want you around still which is great for you.',
				src: '/img/memeKitten/meme-kitten-around.jpg',
				alt: 'Meme Kitten says don\'t have people around'
            },
            {
                title: 'Don\'t worry about falling over',
                content : 'Falling over can hurt, but it can be a useful way to show the fake people that you don\'t care',
				src: '/img/memeKitten/meme-kitten-falling-over.jpg',
				alt: 'Meme Kitten says don\'t be worried about falling over'
            },				
            {
                title: 'Don\t be ashamed of you',
                content : 'TRY NOT TO BE ASHAMED OF YOU EVEN IF YOU ATE ALL OF THE EGGS and are generally not that good',
				src: '/img/memeKitten/meme-kitten-ashamed.jpg',
				alt: 'Meme Kitten says don\'t be ashamed of you'
            },	
			{
                title: 'Don\t worry about all of the failing!',
                content : 'Sometimes you feel like you are failing! But this is really just you trying to be successing, which is Much Better for you. Keep Struggling because it is still worth it.',
				src: '/img/memeKitten/meme-kitten-failing.jpg',
				alt: 'Meme Kitten says keep struggling and don\t worry about all of the failures'
            },	
			{
                title: 'People can be like the Weather',
                content : 'DON\'T BE LIKE SOME WEATHER, BE LIKE A BEAUTIFUL LAKE AND DON\'T HURT SO MUCH XXX',
				src: '/img/memeKitten/meme-kitten-weather.jpg',
				alt: 'Meme Kitten says don\t be like some weather, be like a lake'
            },				
			{
                title: 'You are not rubbish!',
                content : 'Just because some people don\'t appreciate you, that does not make you rubbish!',
				src: '/img/memeKitten/meme-kitten-special-like-a-star.jpg',
				alt: 'Meme Kitten says your value isn\'t based on how quickly other people appreciate you'			
            },
			{
                title: 'Always Believe In You!',
                content : 'If you don\'t, then who will?',
				src: '/img/memeKitten/meme-kitten-believe-in-you.jpg',
				alt: 'the MemeKitten knows your pain but try to remember it doesn\'t exist'				
            }, 
			{
                title: 'Always Be You',
                content : 'Don\t not be you'+
				'Always be yourself, because if that isn\'t OK for Other People then they aren\'t good and should go away somewhere else, like a shoe factory a million miles away!!!! They should be a ‪#‎real‬ person too.',
				src: '/img/memeKitten/meme-kitten-be-yourself.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },		
            {
                title: 'Not Everyone Is Your Friend',
                content : 'Not everyone is your friend, just because they are nearby!',
				src: '/img/memeKitten/meme-kitten-friends.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'			
            },
            {
                title: 'Don\'t Have Any Bad Relationships',
                content : 'Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.',
				src: '/img/memeKitten/meme-kitten-your-time.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            }			
        ]

        $scope.changeActivememekitten = function (index) {
			console.log(index);
			$scope.activememeKitten = index;
        };

        $scope.forwardmemekittens = function () {
            console.log($scope.activememeKitten + " " + [$scope.memeKittens.length -1]);
			if ($scope.activememeKitten < [$scope.memeKittens.length -1]) {
				console.log("opoo");
				$scope.back="fadeInRight";
				$scope.activememeKitten += 1;
			}
        };

        $scope.backmemekitten = function () {
			if ($scope.activememeKitten > 0) {
				console.log($scope.activememeKitten);
				$scope.back="fadeInLeft";				
				$scope.activememeKitten -= 1;
			}
        };


    }]);

}());


(function () {

    var pics = angular.module('whelk.pics', ['ngSanitize']);
	
    pics.controller('picsController', ['$scope', function ($scope) {
		$scope.back="fadeInLeft";	
		$scope.opac = "opac";
		
        $scope.pics = [
           {
               title: 'the Brendan Rogers',
               content: 'Today we say Goodbye to Brendan, he was a good sort, always up for a laugh, and an expert in statistinguics. Some Interesting facts about Brendan: <br> ~He has the strongest hair in the premier league <br> ~Growing up, he was the shortest man in Northern Ireland, so he moved to Leicester <br> ~He really likes possession, at home all his things are labelled \'BRENDANS\' with sticky labels <br> ~ He once fell on top of his nose after listening to \'That\'s my leg!\' by Phil Collins <br> ~ his lips are made from bark, nobody knows why <br> Here is a painting of Brendan to help you along x', 
			   src : '/img/doodles/brendan-rogers.png',
			   alt: 'Leaf of Agitation!'
           },
		   {
               title: 'Leaf of Agitation',
               content: 'Leaf! Leaf of Agitation! When you are cleary frightened in your leaf-parts, I worry for you. Please relax, leaf ',
			   src : '/img/leaf-of-agitation.jpg',
			   alt: 'Leaf of Agitation!'
           },
		   
           {
               title: 'Reluctant Aubergine.',
               content: 'Weep not, weep not, dear friend. Dear friend with your satisfyingly yielding, yet firm flesh. Your reticence brings a tear to my eye. 	   You who were so positive a vegetable up until the hamsters came. Hold my hand as I attempt to eat your face parts gently. Guilty, but sated.			Come here you bitch blaster. See you in the void, old friend. ',
			   src: '/img/banners/reluctant-aubergine.jpg',
			   alt: 'Reluctant Aubergine.'
           },
		   
           {
               title: 'Cat.',
               content: '',
			   src: '/img/spaceCat1.jpg',
			   alt: 'SPACE CAT.'
           },

		   
           {
               title: 'Bean of Ambivalence',
               content: '',			   
               src:'/img/beanOfAmbivalence.jpg',
			   alt: 'Bean of Ambivalence'
           },        	  
		   
		   
	
	
           {
               title: 'The Hatie Kopkins',
               content: '',			   
               src:'/img/doodles/katie-hopkins.gif',
			   alt: 'The Hatie Kopkins'
           },        	  
           {
               title: 'The STEVIE GERRARD (sadcryface)',
               content: '',			   
               src:'/img/doodles/stevie.gif',
			   alt: 'The STEVIE GERRARD'
           },        	  
           {
               title: 'The Arsene Wenger',
               content: '',			   
               src:'/img/doodles/arsene-wenger-philosopher.gif',
			   alt: 'The Arsene Wenger'
           },        	  
		  
		  
       	  {
               title: 'The Jeremy Clarkson',
               content: '',			   
               src:'/img/doodles/jeremy-clarkson.jpg',
			   alt: 'Bean of Ambivalence'
           },		   
		   
      	  {
               title: 'The Steve Bruce',
               content: '',			   
               src:'/img/doodles/steve-bruce.gif',
			   alt: 'The Steve Bruce'
           },			   
           {
               title: 'Bienvenida the Rafa you are the geez!',
               content: '<img src="/img/doodles/rafaAndAncellotti.gif" alt="Rafa Benitez hath gone Real Madrids"/>'+
			        '<div class="fb-share-button" data-href="http://www.thevaguewhelk.com/pics/index.html#Rafa" data-layout="button_count"></div>'+			
			        '<!--<div class="fb-comments" data-href="http://www.thevaguewhelk.com/junk/buzzfeedheadlinegenerator.html" data-width="300" data-numposts="15"></div>-->'
           },
		   
		   {
               title: 'Putin and Stepp Bladder on holiday now',
               content: '<p>Mr Putin did not like the way the US authorities forgot about jurisdictions and arrested some of the FIFA people. </p>'+
                    '<p>As an ambassador for sovereign integrity and international tables, he of course came to the defence: <br>' +
                    'This is yet another blatant attempt [by the United States] to extend its jurisdiction to other states.<br></p>' +
                    '<img src="/img/doodles/putinandsepp.gif" alt="Sepp Blatter on the hols lols with mr Putin"/>'
           },		   
        ]

        $scope.changeActivePic = function (index) {
            $scope.activePic = index;
        };

        $scope.forwardPic = function () {
            if ($scope.activePic < [$scope.pics.length-1]) {
				$scope.back="fadeInRight";
				$scope.activePic += 1;
			}
        };

        $scope.backPic = function () {
			if ($scope.activePic > 0) {
				$scope.back="fadeInLeft";
				$scope.activePic -= 1;
			}
        };

        

    }]);
    

}());

(function() {

    var poetry = angular.module('whelk.poetry', [
		'ngSanitize',
		'ngTouch'
	]);
	    
	
    poetry.controller('poetryController', ['$scope', function ($scope) {
		$scope.back = "fadeInLeft";
		
        $scope.poems = [
            {
                title: 'New blebs!',
                content : 'prostrate, flattened <br> the tribute shifted <br> insidious eye contact threw me  <br>  I set fire to the moth carefully <br> guilty but never beguiled'
            },
			{
                title: 'My face',
                content: 'ALL OVER MY FACE<br>' +
                    '<em>like a finger</em><br>' +
                    'MY FACE IS NOT BRAILLE, MADAM<br>' +
                    'please evacuate my face<br>' +
                    '<em>Do not linger</em><br>' +
                    'YOU READ ME INCORRECTLY<br>' +
                    'I am for the fully sighted and the polite only<br>' +
                    'SEE MY FACE, SEE IT CLEARLY<br>' +
                    'for it is a FACE, round thing on a neck part<br>' +
                    '<em>not a resting place for digits of the lonely!</em><br><br>'
            },			
            {
                title: 'Moths 1',
                content : 'An indignant flutter <br>invidious squint <br>beneath  aroused antennae <br>intentions cast as impulsions <br>I hid your moth body twice beneath a clock'
            },			
			
			{
                title: 'Wet Sock',
                content : 'my cruel fate<br>' +
                'bestowed by a capricious cosmos<br>' +
                'delivered impassive and cold<br>' +
                '(like angel delight)<br>' +
				
                'What twisted circumstance? <br>' +
				'What limit man&apos;s endurance?<br>'+
                'What sorry state hath <br>' +
				'befallen my not yet cloven hoof<br>' +
                'deliver me from wet sock!<br>' +
				'I did not sign up for this'
            },			
            {
                title: 'A chimeric music man',
                content: '<em>Wouldst thou discredit me with your fibs?</em><br>' +
                    'A man with features <br>' +
                    'taken from instrument (crept onto a face)<br>' +
                    'I little understand<br>' +
                    'what he but meant<br>' +
                    '"Wouldst thou buy my frogs?"<br>' +
                    '"Your nose is a trumpet?"<br>' +
                    '"Wouldst thou buy my socks?<br>' +
                    '"Your mouth reedy clarinet!?"<br>' +
                    '<em>"Circumcise your insensitive jibes, and speak of business matters alone, lest I strike you down like a weasel earthquake!"</em><br><br>' +
                    'my suspicion allayed<br>' +
                    'as warm concrete batter<br>' +
                    '(with no apparent incline)<br>' +
                    'I would buy many elements<br>' +
                    'it would be to flatter<br>' +
                    'to assign any real function<br>' +
                    'trinkets, a trifle, a bibelot<br>' +
                    '"This molecule scraper, it lacks for a handle"<br>' +
                    '"Mine pancreas resembles a hammond organ?"<br>' +
                    '"Your vibrating paintbursh, perhaps missold?"<br>' +
                    '"You of weakened wit may not comprehend functions beyond your field, desist your ignoble ignominy and cease your libellous leakage, ' + 'lest I smite you as a bongo botherer"' +
                    'It was thus I was misled<br>' +
                    'bereft of money and reputation<br>' +
                    '(that I deserved mostly)<br>' +
                    'laughed out of town<br>' +
                    'home and even yet police station<br>' +
                    '"His face was banjolele!"<br>' +
                    '"You speak asunder."<br>' +
                    '"His eyes mere flaps of tamborine"<br>' +
                    '"Your insolence a wonder. Cease your witterings lest I set about you like a warren-full of beavers; Get out!"<br><br>' +
                    'It was thus I learned I was irretrievably, inescapably insane.' +                    
                    '<img class="img-responsive" src="/img/chimericmusicman.jpg" alt="chimerica music man, poem"/>'
            },
            {
                title: 'Dental Negligence',
                content: 'Dental Negligence<br>' +
                    'is not a hippo<br>' +
                    '<em>despite all evidence to the contrary</em><br><br>'
            },
            {
                title: 'What',
                content: 'fate, loftily conspired<br>' +
                    'lucidity had yet fluffed those pillows <br>' +
                    'called upon like some pavement<br>' +
                    'with a face lacking grip, stability and litter<br>' +
                    'he expected very little from that encounter<br>' +
                    'setting fire to the moth was the only way out<br>' +
                    'sorry<br><br>'
            },
            {
                title: 'Fourth Trouser and Sadly the moth',
                content: 'A stride beyond his usual dominion<br>' +
                    'legs confounded, pockets compounded<br>' +
                    'incapable of valued opinion - <br>' +
                    'being so wrought<br>' +
                    'Fourth Trouser had thought, <br>' +
                    'VERY LITTLE OF NOTE, <br>' +
                    'for three hundred years.<br><br>' +
                    'he finished eating the moth Sadly<br>' +
                    'and sliced himself in the seat several times before hiding the body from the authorities.<br><br>'
            },
            {
                title: 'Circle, the vicious water pool',
                content: 'With a watery spleen <br>' +
                    'and frothing grin<br>' +
                    'your foul swirling ripples<br>' +
                    'send my socks in a spin<br>' +
                    'extempore pivotings<br>' +
                    'improbable splishings<br><br>' +
                    'egg stains are sent <br>' +
                    'to their frothy graves<br><br>' +
                    'assigned reservoirs that rarely match'
            },
            {
                title: 'Lairy the Wren',
                content: 'Woken from induced mollification<br>' +
                    'lairy wren, frothing, quoth him<br>' +
                    'I am committed to danger!<br>' +
                    'I will lay my bloody wings upon thee!<br>' +
                    'my wings will chaos arrange her<br>' +
                    'sadly his sentence was lost and sounded very similar to some insanity<br>' +
                    'he established a colony in my kidney				<br>' +
                    'he smoked a pipe in my horror-show<br>' +
                    'when the tobacco, moistend, fell out and about<br>' +
                    'interesting bibilots were fashioned below<br>' +
                    'sadly they looked like droppings from a fevered nought and smelt much like some insanity'
            },
            {
                title: 'Higgs Boson lick my face particles you sexy quantum bastard',
                content: 'Warm me in your tiny ubiquitous quantum field, <br>' +
                    'gently lick my non sweaty bod,<br>' +
                    'I deride you not with my liberal use of commas<br>' +
                    'I fear you as a god,<br>' +
                    'if we were constantly at the speed of light <br>' +
                    'I would be quite a sweaty beast,<br>' +
                    'you give mass to lucky electrons, <br>' +
                    'like a tiny floating magnetic priest,<br>' +
                    'with a 5 sigma recording <br>' +
                    'you are probably the genuine article,<br>' +
                    'Higgs boson lick my atoms <br>' +
                    'you most celebrated elementary particle'
            },
            {
                title: 'HAIRY BLUE CHEESE WHY WONT YOU EAT ME BACK?',
                content: 'Oh cheese, my friend, my food, errant from my plate<br>' +
                    'cheese of blue<br>' +
                    'and hairy hue<br>' +
                    'won&apos;t you stop crying and come back to my plate?<br>' +
                    'You used to be there<br>' +
                    'right next to the biscuit<br>' +
                    'biscuit of brown and inescapable frown<br>' +
                    'biscuit that goes all the way down<br>' +
                    '(eventually to my bottom parts).<br>' +
                    'Come back to me, cheese, I&apos;ll treat you right<br>' +
                    'Try not to eat you<br>' +
                    'or force you to fight<br>' +
                    'the Quiche or the biscuit, or fridge cheese container parts<br>' +
                    'I might eat a bit, would that be OK?<br>' +
                    'If you say no, that&apos;s totes OK.'
            },
            {
                title: 'An existential leak',
                content: 'Leak, get out of my bucket <br>'+
                    'Leak, your natural role in the universe<br>'+
                    'as vegetable, destined for soup pot<br>'+
                    'clutch at ye with this misunderstanding!<br>'+
                    'Attempting to force water from my bucket<br>'+
                    'Don&apos;t you understand, leak?<br>'+
                    'THAT IS THE WRONG TYPE OF LEAK<br>'+
                    'please<br>'+
                    'It is time to adjust yourself to the correct'
            },
            {
                title: 'Man with a ladder',
				content: 'A man with ladder,<br>'+
				    'a stepped contrivance<br>'+
				    'wooden and bold<br>'+
                    'enabling defiance<br>'+
                    'of land based arguments<br>'+
                    'and rungs too old<br>'+
                    'fist nor foot able to hold<br>'+
		            '<em>(even if you used chalk)</em><br>'+
                    'quickly decided to end it&apos;s life'+
				
                    'the man with the ladder,<br>'+
                    'an evil device<br>'+
                    'wrathful and mighty<br>'+
                    'was gripped in a vice<br>'+
                    'a vice of iron <br>'+
                    'tightened with shame<br>'+
                    'to a point where breathing was a bit of a pain<br>'+
                    '<em>(even if you used a bicycle pump)</em><br>'+
                    'quickly decided to plead for mercy<br><br>'+
				
                    'the corpse with the ladder,<br>'+
                    'an apparition allayed<br>'+
                    'fugacious vice killer<br>'+
                    'rungs bloodily sprayed<br>'+
                    'As if in prayer<br>'+
                    'the Gods answered not<br>'+
                    'former owner&apos;s head now tied in a knot<br>'+
                    '<em>(not sure which kind, I never liked sailors much)</em><br>'+
                    'decided to hold his counsel<br><br>'
            },
            {
                title: 'Not actually a Paradoxical frog',
                content: 'Paradoxical Frog <br> '+
				    'Quivered upon leaf <br>'+
				    'Strung tight with strings of strain <br>'+
				    'Then loosened like roasted beef<br>'+
				    'Paradoxical Frog <br> '+
				    'Dictated letters of recrimination <br>'+
				    'Glossed with gloopy grief <br>'+
				    'Then rinsed like post masturbation.<br>'+
				    'Paradoxical Frog <br>Apologised to his crew <br>'+
				    'Dubiously dusted with doubt <br>' +
				    'Cleansed of anger with morning dew<br>	'               
            },
            {
                title: 'Berlusconi',
                content: 'Berlusconi<br>'+
                    'was licking a pony<br>' +
				    'which he thought resembled some fraud<br>'+
				    'but a kinky tycoon<br>'+
				    'addicted to poom poom<br>'+
				    '<em>will almost certainly fall off and break an eyelid if he isn&apos;t careful</em><br><br>'+
		 
				    'Berlusconi<br>'+
				    'was holding a party<br>'+
				    'gripping it tight round the neck<br>'+
				    'an ex-prime minister<br>'+
				    'with trousers quite sinister<br>'+
				    '<em>may well irritate the People of freedom and its right wing chums if he isn&apos;t a bit careful</em>'+
		 
				    'Berlusconi<br>'+
				    'was addressing a crowd<br>'+
				    'trying to find a big stamp<br>'+
				    'a corporate lord<br>'+
				    'will inevitably get bored<br>'+
				    '<em>perhaps undressing them would be a more sensible approach, if of course you are careful with the zip parts</em><br><Br>'+
		 
		 
				    'Berlusconi<br>'+
				    'was coming back from the dead<br>'+
				    'without even using a map.<br>'+
				    'even a priapic zombie<br>'+
				    'with less integrity than romney<br>'+
				    '<em>may lose to Bersani&apos;s Democratic Party coalition which could lead to a shaky coalition government, and a hung Parliament. If he isn&apos;t careful.</em><br><br>'
            },
            {
                title: 'Oboe in a grubby beaker',
                content : '	Improvised vessel for my voluminous vanity<br>'+
				'Subduer of stolen and now stationary sound<br>'+
				'When I woke up next to a beaker<br>'+
				'I was dismayed at what I found<br>'+
				'Perpendicular pipe of facial wind<br>'+
				'Misconstrued my desires<br>'+
				'And conspired to be binned<br>'+
				'Inside a grubby beaker<br><br>'+
		
				'As I loomed aloft<br>'+
				'and peered without heart<br>'+
				'cold and oblivious (like a clown in space)<br>'+
				'My oboe, once rigid musical part<br>'+
				'rested woefully inside the grubby place<br>'+
				'lacking sorely for facial wind, respect and a friendly aperture.<br>'+
				'I am bereft of oboe.<br><br>'+
				
				'>Professionally and worryingly narrated by my former friend and co-worker <a href="pictures.html#feizelCat">Feizel Kidia</a><br>'+
				'<audio controls="controls">Your browser is in love with my wooden buttock.<source src="audio/oboe.mp3" type="audio/mpeg"></audio>'
            },
            {
                title: 'Passing asunder an errant buttock',
                content: 'It was early in the day<br>'+
				    'yet late in the morning<br>'+
				    'when buttocky feelings<br>'+
                    'soon came dawning<br>'+
                    'In a strange place of waking<br>'+
                    'a nervousness accame <br>'+
                    'dry humping my head<br>'+
                    'spawning shame<br>'+
                    'What happens to buttocks<br>'+
                    'during the night<br>'+
                    'When buttockless legs<br>'+
                    'are resting without sight<br>'+
                    'They multiply and sing<br>'+
                    'But not at the same time<br>'+
                    'that would be weird guy<br>'+
                    'Straight down the line<br>'+
                    'My buttock was inside me<br>'+
                    'Nestling my kidney<br>'+
                    'Singing out of tune<br>'+
                    'What sounded like Whitney<br>'+
                    'What followed therafter<br>'+
                    'I recount with a shudder<br>'+
                    'I defecated my buttock<br>' +
                    'I passed it asunder'
            },
			{
				title: 'A Cautionary Christmas Tale',
				content:'Provocatively positioned<br>'+
				'Precariously perched<br>'+
				'Armpit Boris<br>'+
				'larily lurched<br>'+
				'falteringly flailing<br>'+
				'and dangerously decorating<br>'+
				'resting atop ladder<br>'+
				'mistakenly masturbating<br><br>	'+
				'Crushing his christmas<br>'+
				'with daredevil decisions<br>'+
				'Armpit Boris<br>'+
				'lacking in luck<br>'+
				'fell to his death <br>'+
				'destroying a duck<br>'+
				'<em>and slowly died on top of the new carpet</em><br><br>'+
				'<em>epilogue</em><br>'+
				'OH WOE, woe is me!<br>'+
				'he certainly cried <br>'+
				'before remembering his deathly condition<br>'+
				'at which point he held his counsel<br>'+
				'and lay there <br>'+
				'until february the 3rd whereupon his occasional pet cat Graham found him and licked his nose unsatisfactorily.<br><br>'
			},
			{
				title:'Nutcrackerz',
				content: 'And Nutella did shout and curse out loud<br>'+
					'What would you have me do now, o Sea<br>'+
					'Latvian sea that could not be<br>'+
					'The sea remained silent<br>'+
					'For it could not see<br>'+
					'A wise course of action for the young maniac<br><br>'+
					'And what of you, young crab of red<br>'+
					'crab that scuttles, over the shallow sea bed<br>'+
					'The crab that existed only in the mind and head<br>'+
					'of a young and deranged creature<br>'+
					'Who&apos; sanity had long since fled<br>'+
					'who was lost in a whirling tundra of screaming thoughts and NGmailings<br>'+
					'That the crab would hold its counsel again confirmed<br>'+
					'There was no answer to her maniacal bewailings<br><br>'+
					'Would you have me kill again, O latvian frog?<br>'+
					'Frog found squished<br>'+
					'in the petering bog<br>'+
					'Frog with capacity for inciting such interrogation<br>'+
					'An imaginary creature that hails from a frogless nation<br>'+
					'The frog&apos;s reticence only confirmed<br>'+
					'The killing again plan<br>'+
					'was most coldly affirmed<br>'	
			},
			{
				title: 'Intolerant of irrelevance',
				content: 'Lying down, unregarded<br>(like a crumb)<br>Salient Michael, a man fully broken<br>no longer relevant to any, but<br>'+
					'oaf, simpleton, cretin or newsagent<br>rather than change his name<br> slowly died on top of the transponder<br><br>'
			},
			{
				title:'Prodigious underpant',
				content:'Prodigious underpant<br>in a fit of conscience<br>decided to wrap buttocks<br>in a less sinister manner<br>"I have sinned" he'+
				'cried<br>his muffled confession<br>Clarified naught....<br>'
			},
			{
				title: 'A seal named Gerrard',
				content:'(The back parts of a curly bracket)'+
					'A seal named Gerrard<br>with his fins upon the floor<br>swam accross my slumber<br>and thought he saw much more<br>'+
					'sleeping in human form<br>he misconstrued my needs<br>swapping my spine for a curly bracket<br>despite my plaintive pleas<br>'+
					'I live not on a keyboard!<br>I counselled him most wisely<br>But all I said was sadly in vain<br>as he told me nicely<br>'+
					'you resemble in my eyes<br>some sort of punctuation<br>you&apos;re clearly mad, you&apos;re no more human <br>than I am oceanic'+ 'crustacean<br>I killed him and set fire to the body before realising that I was probably going to be stuck this way for life.'
			},
			{
				title:'Harmonic Spatula&apos;s tidy thoughts',
				content: 'Left behind<br><em>like a comb</em>'
			},
			{
				title:'Furious milk',
				content:'Furious Milk<br>happened by chance<br>to mend his shoe<br>after committing his aunts<br><em>who had both become irretrievably '+
				'and fundamentally insane</em><br><br><em>earlier..</em><br><br>Furious Milk<br>broke his blisters<br>tripping upon bacon<br>'+
				'after killing his sisters<br><em>who had both become inexplicably and copiously herbivore</em><br><br>Furious milk<br>'+
				'smashed his sandals<br>cracked upon bones<br>	running on vandals<br><em>who had both purposefully and malevolently desecrated his brothers'+'graves</em><br><Br>Furious milk<br>wet his socks<br>uncontrollably laughing<br>dancing in smocks<br><em>which had both belonged profusely'+
				'and incapably to his mother</em><br><Br>Furious milk<br>ended her life<br>realisation dawning<br>insanity was rife<br>'+
				'<em>in a family all now inescapably and vigorously dead</em><br><br>'
			},
			{
				title:'Intransiently transient',
				content:'fermenting gently<br>on definite parts of his brain<br>Nascent thoughts brewing<br>not entirely made of sane<br>'+
				'<em>struck wonderously affirmed</em><br><br>"I will not kill again!"<br>cried the dangerous caterpillar<br>Then he killed the moth four'+
				'times and set fire to the body again<br>which just goes to show, really.'
			},
			{
				title: 'Simon',
				content:'Nightly prowlings<br>a steamy tread<br>those plastic bags<br>carry the dead<br>hackney hookers<br>'+
					'paid a price most dear<br><em>like errant hagglers in a foreign currency of despair</em><br><br>'+
					'this tear streaked chimera<br>with her satchel of destruction<br>corduroyed product manager <br>lacks compunction<br>'+
					'cries for help<br>a spirit so absent<br><em>lamentations fall on ears made of cloth</em><br><em>like a nuclear dog you are' + ' unexpected and foul</em><br><br>'
			},
			{
				title: 'Lungbash',
				content:'<p>Lungbash wasn\'t a cloth<br> but he wasn\'t a gate <br> what he sometimes wasn\'t, <br>was a wooden red eight<br>he didn\'t be wetter, or ninety minutes late <br>he tried not being bricked in <br>he was never a country fete<br><em>Lungbash was an extremely badly restored baroque bow-fronted corner cabinet with mild depression.</em><br><br>'
			},	
			{
				title: 'Psires the wooly reason',
				content:'<p>And Psires wept and wailed and wheezed<br>and cursed out loud<br>his unsatisfactory knees<br>each and every season<br>it was said he became<br>	not a lot unlike<br>a very unlikely reason<br>(like a dehydrated fish in the sea)<br><br>And he didn\'t fit or match or please<br>his legs and his feet<br>	were more relevant than his knees<br>which were said to leak tizer<br>and renovate peas<br>	but what psires was<br>	was a very wooly reason<br>(like a failing bicep in a breeze)<br><br>Applied to an effect, an outcome or a meal<br>Psires fitted not<br>and sadly wasn\'t real<br>he lacked any sense<br>and an ability to kneel.<br>so he killed himself and set fire to the body three times before disapearing forever<br><br>'
			},	
			{
				title: 'Newly wet poetry! Not about horses! Aaaaah',
				content:'<p>piersmorgan faces - huge and sinister<br>garrulous floating ballbag<br>undulating with pointlessness <br>alone is prone to sag<br>	quivering with obsequiousness in the presence of celebrity crack <br>browning up like a hungry worm	<br>a slavering greasy former hack<br>you are not quite a worm <br>	you are @piersmorgan faces'
			},	
			{
				title: 'Beefy Bob',
				content:'<p>Beefy Bob<br>awoke with a throb<br>momentarily forgetting<br>he was surgical swab<br>and was incapable of throbbing,<br>lobbing<br> or bobbing<br><br><em>or describing a watermelon with accuracy</em><br><br><em>so he stabbed himself in the cloth four times before hiding the body from the authorities</em><br><br>'
			},	
			{
				title: 'Fully Hilt was odd',
				content:'<p>Fully Hilt,<br>gallantly untroubled,<br>upon withdrawing support<br>for sinful snails<br>flippantly precipitated <br>increased trousers sales<br>(though leg counts had doubled)<br>(after a terrible evolution)<br>and therefore had no actual part to play in the events outlined above<br><br>sorry<br><br>'
			},	
			{
				title: 'Potatoes',
				content:'<p>freshly dug up potato<br>O nameless fellow of the soil<br>tell me do you have a soul<br>do your mourn your peaty bed?<br>your silence speaks in volume<br>I really hate it when I find myself in these situations<br>I will eat your face gently<br><em>then set fire to myself in shame</em><br><br>'
			},	
			{
				title: 'Tin of Things',
				content:'<p>a tin I found on a mat one day<br>contained little more<br>than egg and dismay<br>it stiffed me up<br>with it\'s lid of misleading<br>	resting atop metal lip<br>like a robotic moustachioed ceiling<br><em>like one of my socks<br>you contain no biscuits<br>AND I HATE YOU</em><br><br>upon inspection the following week<br>the tin contained<br>some egg and some leek<br>I had been wrong all along<br>				<Em>so I killed myself and set fire to the tin threeteen times</em><br><br>	'
			},	
			{
				title: 'Porrig was a jealous frog, with lips of envy and nostrils of want',
				content:'<p>Porrig was a jealous frog<br>a frog that could not see<br>a frog at odds<br>in petering bogs<br>because he could not be<br><br>Porrig was jealous of all the frogs<br>jealous of their lillies<br>and jealous of their logs<br>but the problem with Porrig<br>the problem you see<br>	Was Porigg\'s colour matched his jealousy<br><br>Porrig was green all over himself<br>green in the pond<br>and green on the shelf<br>green in the toilet<br>and green in bed<br>green from his legs to the top of his head<br>So poor Porrig decided<br>to be ANGRY instead<br><br>	'
			},				
			{
				title: 'beady eyed bastard',
				content:'<p>your tiny beady eyes<br>gripping, squinting, blinking consternation<br>like belligerent rectums, forced to yield,<br>to inexorable defecation<br>flick across that porcine brow<br>evincing a closed uncompromising perspective<br>Your eyes may as well be noughts, sir<br>and join your faecal emitting aperture collective<br><br><em>fin</em><br><br>'
			},			
			{
				title: 'Titty of Fear',
				content:'<p>O titty of fear<br>why rustle my ear<br>I cannot hear your lamentations!<br> like a naked shark<br>your disconsolate hark<br><em>is confusing and frightening in equal measure</em><br><br>your anguished cries <br>wet not my eyes <br>I am deaf to your muffled agitations!<br>oblivious to your plaint<br>I have yet to acquaint<br>the cause of your grief<br>I see no relief<br><em>like a murderous elephant in a balloon, you confuse and frighten me in equal measure</em><br><br>oh titty of fear<br>with your murderous howl<br>please be more titty<br>	and relax on the foul<br><br>until my fear is no longer fully realised<br><br>'
			},			
						{
				title: 'Astral projections',
				content:'As I floated back down to the point,<br>the point I had left very much aggrieved<br>my projected ambivalence had been quite rude <br>		the antipathy there, I had not conceived <br>it seemed I hadn\'t actually murdered the point<br>there and then I felt casually relieved - (like a urination in a sports jacket)<br><em>I celebrated on Tony\'s meat face, she is the pizza-cake I grew up with before I turned out this way</em><br><br>The point I returned to after my physical absence<br>broadened in my vision like an elaborate spot<br>I felt quite secure the point had survived<br>but as I landed aground I saw it had not<br>the point my ambivilance had surely offended<br>had packed it\'s bags and gone for a trot<br><em>I started to panic and I cut up a local wren that had seen everything and was giving it large</em><br><br>'
			},			
			{
				title: 'Tearing asunder my friend\'s cod roe',
				content:'<p>tearing asunder my friend\'s cod roe<br>I had no consideration for the plight of his toe<br>attached to his body but not on the leg <br>' +'my friend\'s only option a fish with no head<br>but fish on the toe is not quite the cure <br>	for misplaced appendages I am reasonably sure. <br>'+'so I\'m not sorry for my actions and I refuse to stop the killing. <br><br>'
			},						
			{
				title: 'Phil Collins cares not for the nerves in my toe',
				content:'<p>when phil collins trod on my foot<br>with his leg of drumming<br>and his shoe of faith<br>this treader of toe<br>'+
				'this invader of space<br>did cry unto my legs<br>did stare at my face<br>who is this musical foe<br>this lyrical clodhopper<br>'+
				'this stepper on toe<br>this deaf drummer of lore<br>this prog-rock mofo?<br>this questionable cockerny<br>this despoiler of chukkers<br>'+
				'<em>These questions remain unanswered to this day, and it is for this reason that when he offers to take me to paradise I am not altogether sure.</em><br>'
			},			
			{
				title: 'Newly wet poetry! About horses! Aaaaah',
				content:'<h4>Cautiously Ahorse</h4><p>I am cautiously<br>Ahorse<br>But no longer,<br>of course<br>Than a normal man standing next to a chicken.</p>'+
				'<p>But I\'m longer<br>Of course<br>Than a cautious<br>horse<br>	That no longer can stand the taste of chicken</p><p>When you are no longer<br>'+
				'Of course<br>A cautious<br>Horse<br>Please get out of my kitchen<br><em>I don\'t like imagining reckless quadripeds in my cooking areas. Get out!' +
				'</em><br><em class="small">~* Unless you are the burgler part that stole my oven! Come back please!</em>	<br><Br>'				
			},						
			{
				title:'Why is there soy sauce on my face?',
				content: '<p>When all is not <br>quite as it seems<br>Soy sauce on your face<br> Isn\'t as pleasant as you might deem<br></p><p>For a brown quality liquid<br>You could do a lot worse<br>But resting on my face<br>Is not the customary place<br>For for a sauce-based liquid or even a purse.</p><p>A cat on my hand<br>Would be less out of place<br>Than a brown salty liquid<br>Resting on my face<br>Am I a freak destined to watch life through the locked bars of insanity for the rest of my days or was the woman just joking?</p><p>So please get off my face<br>Go and find a sushi to rest on<br>	If you don\'t aquiesce<br>I will soak you up to death with a napkin.<br><br>'
			}
        ]

        $scope.changeActivePoem = function (index) {
            $scope.activePoem = index;
        };

        $scope.forwardPoem = function () {
			$scope.back="fadeInRight";
			if ($scope.activePoem < $scope.poems.length) {
				$scope.activePoem += 1;
			}
        };

        $scope.backPoem = function () {
			$scope.back="fadeInLeft";
			if ($scope.activePoem > 0) {
				$scope.activePoem -= 1;
			}
        };		

	
    }]);

		
}());


(function() {

    var spaceSloth = angular.module('whelk.spaceSloth', ['ngSanitize']);

    spaceSloth.controller('spaceSlothController', ['$scope', function ($scope) {
	
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.spaceSloths = [
            										
			{
                title: 'Space Sloth says Nothing Happens For a Reason',
                content : 'Nothing happens! Absurd? No, bitch! Absurd never happens either! Wake up to the correct potatoes!'+
				'Surely reality is merely a construct which serves to enable your own self credibility. Perception itself drives us mad and keeps up sane' +
				'To be human is to draw away from life',
				src: '/img/spacesloth' + $scope.isMobile + 'space-sloth-perception-is-reality.jpg',
				alt: 'Space Sloth spake: Heed my words of truthiness you sack of bitch!'				
            },
			
            {
                title: 'Never stop being yourself?',
                content : 'Today\'s truthMissile is targeting your silent shouting space and it\'s a corker!'+
				'Just lie down and remember that you cannot be yourself because yourself does not exist, you are everything and everything is you.' +
				'Consciousness is a deceit propagated by those who would have you buy their overpriced mattresses. ~~ Accept your place in the cosmos and lie down ~ ',
				src: $scope.isMobile ?  '/img/spacesloth/' + $scope.isMobile + '/sloth-consciousness.jpg' : '/img/spacesloth/sloth-consciousness.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },	

            {
                title: 'Don\'t worry. In 150 years no one will remember you',
                content : 'Today\'s Truth Missile of Truth missiling away truthfully, cutting through the shyte spectrum towards your pointless head-hole is this:' +
				'Always try your best. Or don\'t. It doesn\'t really matter, because in a relatively short amount of time you will be dead, no one will remember you, and nothing you ever did will have had any impact on the universe. LOVE. ~ ',
				src: '/img/spacesloth/' + $scope.isMobile + '/sloth-bin-of-deathless-infinite.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'				
            },	

            {
                title: 'Homogeneous and small, you resemble some grit in a driveway in a painting of Cape Town. But this is Good, not Bad.',
                content : 'Today\'s missile of truth sent fluttering towards your thought-cave like a butterfly of sense, is a simple one. To be at one with the cosmos, you must understand that you are a tiny meaningless part of it, invisible to all, and that if you didn\'t exist (which you can\'t be sure you actually do) nothing would be any different at all! Happy Thursday! :)',
				src: '/img/spacesloth/space-sloth-homogenous.jpg',
				alt: 'the Space Sloth says: Always remember you are homogeneous'				
            },

            {
                title: 'Heed the Space Sloth: Just lie down because your utter nihility is and always won\'t be.',
                content : 'This may or may not sound a bit like some insanity you those of you uninitiated in the ways of the Sloth, '+
				'and quite possibly, it is. Alas there is no way to tell, and there never will be. So let\'s all lie down and try to forget about it all.'+
				'Just remember, although you don\'t fully exist, neither does Bruno Mars, let that provide some comfort.',
				src: '/img/spacesloth/space-sloth-caterpillar-eyebrow.jpg',
				alt: 'the Space Sloth speaks: Embrace your nihility and lie down'				
            },			
			{
				title:	'REMEMBER you do not know anything - but neither does anybody else!',
				src: '/img/spacesloth/space-sloth-knowledge.jpg',
				alt: 'Space Sloth say you know nothing'
			},
			
			{
				title:	'Space Sloth has woken up and he is talking about all the sanities!',
				content: 'Sanities are everywhere it seems, but what exactly are they? Well, Space Sloth teaches us that sanities aren\'t really anything, they are in fact an artificially constructed flange of step-ladders for people who want to to try to measure their ordinariness against that of other bitches.',
				src: '/img/spacesloth' + $scope.isMobile + 'space-sloth-sanity-is-here.jpg',
				alt: 'Space Sloth say you know nothing'
			},				
			{
                title: 'Space Sloth say Embrace Your Cosmic Insignificance tiny cosmic nought!',
                content : 'Heed the wise words of Space Sloth! Your continued existence is so utterly futile and incomprehensibly improbable as to make it '+
				'almost certain that you don&apos;t really exist.<br>Cease this pointless charade you dirty parade of geraniums!' +
				'At the very least this knowledge should help you smoothly succumb to entropy like cocoa being stirred with my Spoon Of Truth.',
				src:'/img/spacesloth/insignificance.jpg',
				alt:'Space Sloth spake: Envelop My Guided Missiles of Truth'				
            },
			{
                title: 'Space Sloth say Indolence The Only True State of Being',
                content: 'If the Universe is infinite, then it is infinitely ridic, and so is everything in it.'+
				'Which means nothing makes sense. Including you. Which explains a lot if you ask me. So go back to bed and try not to think about how shambolically	incompetent you are at existence. ',
				src: '/img/spacesloth/ridic.jpg',
				alt: 'Space Sloth spake: Indolence The Only True State'
            },
			{
				title: 'Space Sloth say Your Existence Matters Not',
				content: 'An apathetic universe is indifferent to your struggles, quoth the Space Sloth. And let&apos;s think about that - surelemement he hath a point here.<br>One must resolve oneself to one&apos;s cosmic insignificance in order to be at peace. You are a crisp packet blowing in the wind, in a carp park that is blowing in the wind, in another car park that is blowing in the wind, in another-....etc',
				src: '/img/spacesloth/dontExist.jpg',
				alt:'Space Sloth spake: I care not'
			},
			{
				title: 'Space Sloth spake: I care not',
				content: 'And Space Sloth spaketh to the insolent man again: "One must still have chaos in oneself to be able to give birth to a dancing'+
				' star" And the man, for whom philosophy was a passion endured, did curse his enigmatic Creator and did throw a hissy fit '+
				'of apostasy. He turned his back on his the One True Spacey Obliqueness, before casting himself off the mountain to his death, and hiding the body.',
				src: '/img/spacesloth/astar.jpg',
				alt:'Space Sloth spake: One must have chaos'
			}
			
        ]

        $scope.changeActivespaceSloth = function (index) {
            $scope.activespaceSloth = index;
        };

        $scope.forwardspaceSloth = function () {
            if ($scope.activespaceSloth < $scope.spaceSloths.length) {
				$scope.back="fadeInRight";
				$scope.activespaceSloth += 1;
			}
        };

        $scope.backspaceSloth = function () {
			if ($scope.activespaceSloth > 0) {
				$scope.back="fadeInLeft";				
				$scope.activespaceSloth -= 1;
			}
        };


    }]);

}());


(function() {

    var stories = angular.module('whelk.stories', [
		'ngSanitize',
		'ngTouch'
	]);

    stories.controller('storiesController', ['$scope', function ($scope) {

		$scope.back = "fadeInLeft";
        $scope.stories = [    
            {
                title: 'Ron the sucidal ham sandwhich',
                content : '<p>There once was a ham sandwich called Gastric Ron. Gastric Ron lived in a pharmacy and had done so quite happily for seventeen sandwhich years. One day Ron was sitting on the shelf quietly rotting away, as no one had eaten him for literally days, when the pharmacist, Staircase Phillip, came over and said<br>"Ron. I am tired of seeing you cluttering up my shelf with your decaying self. Ham should be pink and tasty like a sunburnt Saturday, not green and mildewy like a dead jury.  You make me utterly utterly sick to my stomach parts and also quietly sad. Thus and so I am formally giving you 24 hours notice to vacate my pharmacy".<br>So it was that Staircase Phillip felt extraordinarily pleased with himself as he had been building up the courage to say this for over 41 and a half years. Poor old Ron on the other hand was extremely sad and distressed, and thus decided to end his life.<br>In the back room he found a large supply of Zanex and resolved himself to take the lot with a bottle of parsnip gin that a tall handsome incredibly funny and great bearded guy gave him on a night out in Weston-Super-Mare-upon-Croydon the previous weekend.<br>Only when it came to it, Ron discovered to his disdain that he had no mouth. Or indeed any orifices at all, which  went some way to explaining his slight depression and moribund sex life. <br>Although it didn\'t really explain the mouth ulcers.<br>Desperate and confused, Ron ran out into the road and threw himself to the ground, weeping, in the hope that a hungry dog might come by and scoff him up like a bacon crisp.<br>After 6 and a half untidy and bacon-free hours an old lady and an alsation came past in that order. Ron threw himself at the slavering demented doggy beast and cried<br>"Eat me now, foul slavering demented doggy beast, for I know not happiness in this mortal realm! And without happiness, what is life but a futile camembert! Do not look upon me as I die!"<br>The dog looked at Ron and cocked his head to one side. And then carefully burst into tears. He explained that he was a vegetarian and therefore could not be of any help in Ron\'s suicidal bacony ambitions; by funny coincidence he had also been going through quite a rough time of it just recently.<br>It seemed his canine peers had been very hurtful about some of his life choices and were mocking him on a daily basis. They had been calling him names like "Piss-skip", "Shyte-hawk", "Cum beaker", "Dangerous Kidney", and "Colin". Although he didn\'t mind Colin quite so much as that was his name.<br>So it came to pass that together they concocted a plan: a plan to end their lives together, at midnight.</p><br><p>Several hours later Ron and Colin met up at an industrial estate in north west Penge, just beyond Sydenham West, but not as far as Crystal Palace Observatory South. It was actually about a quarter past midnight as Ron had had an unplanned masturbate before setting off and Colin was urinating out of the wrong hole.<br>"Did you bring the electrified trouser press Col?"<br>"I sure did buddy old pot. Did you remember the rubber pants and the elasticated frogspawn glove?"<br>"Certainment, mon frere. All is here." Ron looked at Colin uncertainly and then at the extra large rubber y-fronts he was wearing above his tail parts, and entertained certain thoughts.<br>"Please refrain from entertaining certain thoughts, guy. This is a strictly business arrangement yo. Are you still keen on going through with this or what?" <br>Ron tried to look at colin with as calm a face as was possible, given the current emotional turmoil that was turmoiling in his head area, and also given the fact that he was a ham sandwich and therefore did not have an actual head or face part at all, except in the imagination of a deranged and bored foot.<br>"Yeeeah. Come on, let\'s get this over with". And with that Colin waddled over to Ron, (for the rubber Y-fronts were very loose and he had to do that funny walk to stop them from falling down, you know that walk you have to do sometimes, it looks like you have done a runny one or you are trying to grip a frogspawn in your nought).<br>They shared an awkward silent embrace during which Ron attempted three times to climb inside the rubber Y-fronts and Colin diplomatically blocked his entrance with the strategic placement of his furry dog tail.<br>They climbed the forty three flights of stairs that took them to the top of the disused sock factory and made their way to the edge of the rooftop.<br> "It\'s quite a view isn\'t it. I think I can see Forest Hill zoo from here. Look, is that a giraffe?" Ron would have been squinting at this point and putting his hand accross his eyebrows, in that way that always helps you see things that are small or far away, but being in an extremely ham-sandwhichy sort of mood he failed to do this and settled instead for an inquisitive yet crusty lean.<br>An especially green and manky part of his ham fell off and floted down the side of the building.<br>"Er, I think that\'s actually Lower Sydenham Cathedral you know."<br></p><p></p><p>.......tbc</p>'				
            },
            {
                title: 'The yoghurty but still interesting existence of the Be Na Kol',
                content : '<h4><em>The woeful tale of a heightist community living inside a yoghurt</em></h4><p>This part of the universe is thick and white; creamy yet nebulous. Like a forgotten soufflé in a snowstorm. Or a bubble bath squinted at by a fostered owl with mild depression.</br></br>It was said that it was similar in colour to the Goddess Ra\'s foot that had never seen daylight. (And was made of cream).This was interesting as the population of Be Nna Koll, a species evolved (slightly) from yoghurt fungus that did not actually grow feet (or hands) of any description, most probably would not have been able to accurately discern the difference between a foot (creamy or otherwise), and a medium sized redundancy package.Indeed, seemingly bizarre and incongruous religious concepts were commonplace in Be Nna Koll and thus it was most fortuitous that the people who lived there were not by their nature very inquisitive. And certainly not prone to cynicism of any sort.</br></br>Except when it came to madras.</br></br>As Be Nna Koll is essentially an enormous cosmic bowl of yoghurt that revolves around the Great Unk\' al Bhens system, an even enormouser crispy ring that from a lot of angles resembles an even more enormouser crispy ring that is further away, it had already occurred to most of the Kyu Ra\'a Nailz that theirs was a most unlikely existence and would not benefit from any kind of existential scrutiny. And it most certainly would not benefit at all from the existence of Madras.</br></br>One of the Kyu Ra\'a Nailz that was particularly unlikely to scrutinise his own existence, or very much anything at all, was Krsz p\'ekk, a simple, slightly deranged, and generally quite happy fungus-based life form.He was currently to be found celebrating the birthday of his neighbour\'s pet Ogg, a small six-headed domesticated beast much revered by the Kyu Ra\'a Nailz. The small Ogg was called Ree djhard and, being of an even lower order of intelligence than the Kyu Ra\'a Nailz, had absolutely no idea that today was it\'s birthday. </br></br>Oggs had a bit of a blind spot for Wednesdays.</br></br>This struck Krsz P\'ekk as profoundly sad, so he decided there and then that he was going to attempt to infuse in the dog some form of sentience, a rudimentary intelligence, if only so that it could properly enjoy it’s birthday celebrations, the ones that Krsz had so meticulously organised for over 5 minutes that morning. And maybe perhaps be able to use a calendar properly.</br></br>A curious character trait amongst the Kyu Ra\'a Nailz was a violent distrust of anyone shorter or taller than the universally agreed height. Generally the population would, as a whole, try to stick to the status quo and not grow any more or less than 3 and a half pots in length, but, as in any civilisation across the cosmos, there were those rebellious and insurrectionary types who decided being different was better than conforming. Evil swines.Every so often, one of these villains was to be found at Leeche Harvester Square, being first ritually humiliated, and then, if they were lucky, publicly executed. Krsz P\'ekk just so happened to be quite interested in public executions and never missed an event. He was also quite good friends with the bacterium that was in charge of disposing of the lengthy or titchy cadavers. And so it was that a plan hatched in this young simpleton\'s mind, or the place where his mind would have been, had he not been a fictitious and most improbable character made entirely of mould and mind-wet.</br></br>"By Ra, hello, have fun!" squeaked Krsz P\'ekk in his oddly high-pitched voice, as he approached the chief executioner bacteria based thing. "May Ra make you prolific in the pot, Krsz P\'ekk, you spoonless wreck!" was the customarily oblique and well-intentioned spouting-sult from Dayv Gbknee. </br></br>Dayv Gbknee was an odd sort of character, even for a Kyu Ra\'a Nailz.Although not in a height-based capacity. He was exactly the correct height. The reason he was odd was that he actually didn\'t exist in any believable or conventional sense. The Kyu Ra\'a Nailz, being yoghurt-bacteria based lifeforms, consisted of a semi-dense liquid/gas mix of spores, promulgated neutrinos and coagulated fluff, which is all far too complicated for me to explain here in any credible way without sending you off to the wet. Dayv however, existed metaphysically in a separate dimensional state from the rest of his fluff-based kin, and, as such, could only actually be perceived by other Kyu Ra\'a Nailz if they pressed a rusty spatula against their foreheads and squinted very tightly whilst thinking of wind-farms. </br></br>However, he was a very pleasant and friendly Kyu Ra, who also happened to be in charge of public executions, so made friends easily, despite this unlikely hindrance. Which is saying something, if you ask me.</br></br>In any case, Krsz was not one to be put off easily when it came to making friends. </br></br>Indeed it was so rare that anyone voluntarily spoke to him, that he had started to entertain certain thoughts involving cable ties and handcuffs, and porcelain. Not that handcuffs would be any use on a yoghurt bacteria based lifeform. But porcelain was certainly a dangerous thought. And one he enjoyed immensely.</br></br>"I have had an lampshade! No, a wall chart. No! Ra deny it, I mean.... er, an IDEA!" Krsz beamed with satisfaction at the magnificent personal achievement of having successfully completed an entire sentence without the intended recipient having run away to commit suicide in the neck parts, atomically collapsed, or forced the acceleration of universal entropy to the point of quantum oblivion through sheer desperate willpower.</br></br>"You are not holding the rusty spatula correctly, the Krsz. Keep it up. If we\'re going to be abstract metaphysical character types we at least have to be consistent. Don\'t be a deckchair." "Oh indeed Dayv! Eff you! No, sorry, I mean runt chaps. No, I mean THANK YOU! And how did the execution go today? I was sorry to lick it, no... squeeze her, AARF, Ra string it up long, I mean miss it!" "It went well enough, young cretin. I used washing up liquid to turn him to stink, the illegally-short bastard face, with his tiny height." Dayv spat fluff. "Oh, washing liquid, my absolute third or fourth favourite method! Joy-faces! What did you do with the buttock, argh, er, the broadband, er, no, um... the REMAINS!" cried Krysz, his bacto nipples hardening with eagerness like a keen chocolate trumpet in the freezer.</br></br>"Leave off Krysz you filthy table, I told you before, you are not allowed to sexually interfere with the-” "Er, no no no nothing like that! I want to scoop out the soggy brain parts and stuff them inside my neighbour\'s pet Ogg, Ree djhard. I love him and play with him every day but he is just too sexy, er... I mean egg-shaped bossanova, I mean, er…. Ra touch it very lightly! I mean too stupid!"</br></br>Krysz P\'ekk\'s conversational skills tended to improve after around 5 minutes or so, but he rarely achieved more than two minutes with sentient life forms. Fortunately. </br></br>"Ra bless your toes until they melt, that is an excellent idea. I cannot believe a tin tray like you came up with it!" cried Dayv, his tiny yoghurty mouth flaps quivering in excitement and joy.</br>"Marry me! I will take you to New York! I love you!" declared Krysz, immediately dropping on to one hind-cleft and scrabbling about for his lassoo.</br></br> "Get away you odd fucker! What do you mean New York, what is that?" Dayv started to back away from Kryz, his mouth flaps immediately drying up like last night’s naan in the fridge no matter how well you wrapped it in foil or even cling film.</br></br>"O lord, it\'s happening again, I must save myself, I\'m too sexy for Bacto-prison! Ooohoooohh! By Ra! I summon you now my undead warrior Ogg, Ree djhard E\'Glish….. EMIT SCORN! No... er, POLITICALLY SANCTION! Ra, insert it very gently! I mean ATTAAAACK!"</br></br>Dayv looked troubled. But only slightly. </br></br>This was an odd turn of events for two reasons. Firstly, the two were quite good friends and had never before summoned demonic pets to attack each other, and secondly because the dim witted Ogg who was not demonic in any way was not actually there to hear his good friend\'s cries. It was also funny because at that moment, Bi hag Rannell the wine merchant entered the execution pots and tripped over Krsz\'s gently quivering left cleftal part and fell on top of him in a screaming tumbling vortex of chaos and death and destruction and oblivion!!!</br></br></p><br><Br><p>You can read the rest of this story on top a kindle if you are quite foolish enough to pay £1.99 for the trouble. It will be on Amazon very shortly</p>'
				},

				{
                title: '50 Maids Grey',
                content : '<h4>Biscuit Eighty Terrified Johnson Legs, or Biscuit Legs to his friends, was into dead things. Really into them, and frequently inside them.</h4><img src="/img/biscuitTrousers-small.jpg" alt="Caught in a wave of post-coital grief, Biscuit Legs" /><div class="articleFloat"><p><em>Introdus:</em><br>The octopus had impugned the mermaid\'s horticultural heritage, and left the kelp bed soon after the improbably perennial pairing. It was the first time he had truly let his dark side out during a one-on-one session, and though the mermaid had this time survived intact and unbroken, Biscuit Legs had soonafter tarnished the tentative tranquility and put his size 19 tentacle right in it. A salacious suggestion regarding water parsnips had put paid to next summer\'s sojourn, and so it was with a heavy heart that our hero took his leave and drifted away into the murky depths of solitude forever. In the Indian Ocean.</p><br></div><h3 style="clear:both;float:none">Part One</h3><p>"-clearly the sign of a broken mind. Have him immediately incinerated. But don\'t forget a similie in a book is worth nine in a tabloid frenzy. Save the nipples. Bye now". The psychiatrist, a young catfish of startlingly bright colour, was trying his best to give off an air of experienced professionalism, and not one of a junior in the field who had inadvertantly landed such a high profile case. He put down the ciabbatta loaf, which, he had decided, was almost definitely not a telephone, and turned around on his swivel chair to look at his client.<br>After a pause sufficient, he hoped, to engender what is known in professional circles as a "pregnant atmosphere", whatever that means, and not a "pungent moss sphere" which, he was led to believe, was almost indistinguishable from the former but could affect vastly different results.</p><p>"Mr Trousers, sorry to keep you waiting. Still, I suppose you have nowhere else to be." He shuffled some dairylea singles on his desk which had apparantly become confused as to whether they were supposed to be playing cards or cheese slices, and had decided, at the last minute, that everyone likes cheese but in reality very few people like playing cards, except gambling addicts, magicians, and Kettle fish, none of whom would be likely to be reading this novellette, and even if they were, they could get stuffed, the lot of em, the--<br>"I understand you are here to be examined, and I am required to give the prosection service my professional opinion on your current psychological state, whereby a decision will be reached whether or not you are to be toasted- er, sorry, prosecuted for the.." <br>	he squinted his eye and moved the cheese flap closer, "the crime of multiple homicide".<br>	The client remained silent, his tiny black eyes still fixed to the floor.<br>"Perhaps we could start with you telling me what happened. Right at the beginning."</p><p>The client at last looked up towards him, and for the first time the young psychiafish saw his eyes, and within them the twin black voids of grief and nausiating sexual desire. (He was quite intuitive for a catfish).<br>	"Very well. But let it not be said that I did not warn you. Oh hang on. Let me warn you, that what you are about to hear is a story of love, desire and despair. A story so grief inspiring, so utterly despairingly bad it will make you long for a Julia Roberts film. A story so profoundly sinister and badly thought out it will make you long for a Wes Craven movie. And let it not be said I did not warn thee."<br>"It all started one morning, when I woke up with a bit of a trumpet trouser. I had had this dream you see. This strange dream. I still remember it as if it were yesterday..."</p><a href="/img/biscuitTrousers4.jpg"><img src="/img/biscuitTrousers4-small.jpg" alt="Caught in a wave of post-coital grief, Biscuit Legs in 50 Maids Deep"/></a><p>I was tending my kelp garden. It was very early in the morning and I had decided to go out and get some work done on the parsnips as I was having trouble sleeping. Just as I was plucking out a ripe and wonderful beauty, I looked upon it, and I saw it anew. It had a face. And verily that face did speak unto me.<br>"Biscuit. Biscuit Legs you must heed my words carefully. You seek excitement, you seek love, you seek validation. One of these will come to you, and the other two will be lost forevermore. In your quest you will face great dangers, and you will see death at every turn." <br>I was a little bit puzzled at this I must say. Anyway I cooked him up and ate him, wonderful spicy parsnip soup it was, and it tasted great. Better than any parsnip I had eaten before. Truly. "</p><p>"Immediately after finishing the beautiful broth, I felt a strange feeling come over me, and one of my tentacles, the small one in the middle, started to harden. It\'s never done this before. It became as a piece of coral, so hard and brittle it was. And as it started to harden it started to rise, up to the heavens it did, and as it did so, fevered imaginings gripped my mind. I saw mermaids, mermaids everywhere..."</p><img src="/img/octy3-small.jpg" /><img src="/img/biscuitTrousers2-small.jpg" /><p><em>To be continued...</em></p>'
			},

            {
                title: 'Sett Up',
                content : '<h2>Welcome to the Iranian badger foetus western soap drama thriller, <em>Sett Up</em>, Act 1 Scene Scene 2*</h2><p>Scene 1 was tragically lost during an altercation with an overexcited sniffer dog at Iranian customs and was destroyed by saliva and human feaces/blood</p><p><em>A badger hole, brightly lit. We see we are in a doctor\'s surgery. There is a big desk, with one of the things where you move a ball and it makes other balls move. They are quite cool aren\'t they. There is also an antique rollerdeck with all the cards completely blank. We can also see a large paper pad with obscene pictures doodled all over it. There also appears to be a generous sprinkling of carrotts all over the room.</em><br><strong>It is Doctor Abdullah\s sett, he has changed clothes and removed all traces of the badger foetii from his person. He is looking slightly traumatised, yet still at peace with the universe and most of it\s contents, but with a very slight air of recalcitrant defiantic self-revulsion.</strong> <em>N.B. we may need someone of the calibre of Harrison Ford for this role, very complicated character</em></p><p><em>Doctor A</em>Ay, I see Smi has cleaned my office and replaced the carrotts. May the universe continue in it\'s peaceful state. I am very glad. -<br><em>Slight pause</em><br><em>Doctor A </em>I seem to be talking to myself. How odd. It is almost as if I am trying to sett the scene for any observers who are extremely disappointed that Iraninan customs are so -<br><em>The Doctor is cut off by a knock at the door. It is repeated almost as soon as it has ended, and then again. Then the door swings open and a large dust pan is ushered into the office by the paw of an unseen badger who we assume is the receptionist</em><br>	<em>Doctor A </em>Thank you Smi. ArsalAn! My good friend, please be seated. Can I offer you a carrot?<br><em>The dustpan, whom we can assume is ArsalAn, attempts to wedge itself onto a chair and recount a sorry tale of treachery and deceit, only to then remember it has no mouth parts. After a short and slightly awkward pause, the Doctor speaks</em><br><em>Doctor A </em>Is there anything I can help with, Ars?<br><em>Ars trembles up and down, in a what could be vaguely described as a nod, if it were being described by a politician in an expenses-receipt sort of way</em><br><em>Doctor A </em>What\'s that? Pregnant? Well congratulations! So, what happens, when a dustpan, and a brush... you know.. erm, what I mean to say, er, well, as a Doctor, I am very curious, to, what kind, what will it, <br><em>The dustpan jiggles again, in a manner indescribable from the first jiggle</em><br><em>Doctor A </em> Alright, I was only asking! From a purely medical point of view..			<p>.......tbc</p>'	
            }			
        ]

        $scope.changeActiveStory = function (index) {
			$scope.activeStory = index;
        };

        $scope.forwardStory = function () {
            if ($scope.activeStory < [$scope.stories.length -1]) {
				$scope.back="fadeInRight";
				$scope.activeStory += 1;
			}
        };

        $scope.backStory = function () {
			if ($scope.activeStory > 0) {
				console.log($scope.activeStory);
				$scope.back="fadeInLeft";				
				$scope.activeStory -= 1;
			}
        };


    }]);

}());
