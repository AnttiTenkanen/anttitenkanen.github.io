/*! commentit 2016-03-27 */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("color-convert");b.exports=function(a){var b,c,e,f;if(b=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(a)){var g=b[1],h=g.replace(/a$/,""),i="cmyk"===h?4:3;c=d[h],e=b[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(a,b){return/%$/.test(a)&&b===i?parseFloat(a)/100:/%$/.test(a)?parseFloat(a):parseFloat(a)}),g===h&&e.push(1),f=void 0===e[i]?1:e[i],e=e.slice(0,i),c[h]=function(){return e}}else if(/^#[A-Fa-f0-9]+$/.test(a)){var h=a.replace(/^#/,""),i=h.length;c=d.rgb,e=h.split(3===i?/(.)/:/(..)/),e=e.filter(Boolean).map(function(a){return 3===i?parseInt(a+a,16):parseInt(a,16)}),f=1,c.rgb=function(){return e},e[0]||(e[0]=0),e[1]||(e[1]=0),e[2]||(e[2]=0)}else c=d.keyword,c.keyword=function(){return a},e=a,f=1;var j={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{j.rgb=c.rgb(e)}catch(k){}try{j.hsl=c.hsl(e)}catch(k){}try{j.hsv=c.hsv(e)}catch(k){}try{j.cmyk=c.cmyk(e)}catch(k){}try{j.keyword=c.keyword(e)}catch(k){}return j.rgb&&(j.hex="#"+j.rgb.map(function(a){var b=a.toString(16);return 1===b.length?"0"+b:b}).join("")),j.rgb&&(j.rgba=j.rgb.concat(f)),j.hsl&&(j.hsla=j.hsl.concat(f)),j.hsv&&(j.hsva=j.hsv.concat(f)),j.cmyk&&(j.cmyka=j.cmyk.concat(f)),j}},{"color-convert":3}],2:[function(a,c,d){function e(a){var b,c,d,e=a[0]/255,f=a[1]/255,g=a[2]/255,h=Math.min(e,f,g),i=Math.max(e,f,g),j=i-h;return i==h?b=0:e==i?b=(f-g)/j:f==i?b=2+(g-e)/j:g==i&&(b=4+(e-f)/j),b=Math.min(60*b,360),0>b&&(b+=360),d=(h+i)/2,c=i==h?0:.5>=d?j/(i+h):j/(2-i-h),[b,100*c,100*d]}function f(a){var b,c,d,e=a[0],f=a[1],g=a[2],h=Math.min(e,f,g),i=Math.max(e,f,g),j=i-h;return c=0==i?0:j/i*1e3/10,i==h?b=0:e==i?b=(f-g)/j:f==i?b=2+(g-e)/j:g==i&&(b=4+(e-f)/j),b=Math.min(60*b,360),0>b&&(b+=360),d=i/255*1e3/10,[b,c,d]}function h(a){var b=a[0],c=a[1],d=a[2],f=e(a)[0],g=1/255*Math.min(b,Math.min(c,d)),d=1-1/255*Math.max(b,Math.max(c,d));return[f,100*g,100*d]}function i(a){var b,c,d,e,f=a[0]/255,g=a[1]/255,h=a[2]/255;return e=Math.min(1-f,1-g,1-h),b=(1-f-e)/(1-e)||0,c=(1-g-e)/(1-e)||0,d=(1-h-e)/(1-e)||0,[100*b,100*c,100*d,100*e]}function j(a){return Z[JSON.stringify(a)]}function k(a){var b=a[0]/255,c=a[1]/255,d=a[2]/255;b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92,c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92,d=d>.04045?Math.pow((d+.055)/1.055,2.4):d/12.92;var e=.4124*b+.3576*c+.1805*d,f=.2126*b+.7152*c+.0722*d,g=.0193*b+.1192*c+.9505*d;return[100*e,100*f,100*g]}function l(a){var b,c,d,e=k(a),f=e[0],g=e[1],h=e[2];return f/=95.047,g/=100,h/=108.883,f=f>.008856?Math.pow(f,1/3):7.787*f+16/116,g=g>.008856?Math.pow(g,1/3):7.787*g+16/116,h=h>.008856?Math.pow(h,1/3):7.787*h+16/116,b=116*g-16,c=500*(f-g),d=200*(g-h),[b,c,d]}function m(a){return M(l(a))}function n(a){var b,c,d,e,f,g=a[0]/360,h=a[1]/100,i=a[2]/100;if(0==h)return f=255*i,[f,f,f];c=.5>i?i*(1+h):i+h-i*h,b=2*i-c,e=[0,0,0];for(var j=0;3>j;j++)d=g+1/3*-(j-1),0>d&&d++,d>1&&d--,f=1>6*d?b+6*(c-b)*d:1>2*d?c:2>3*d?b+(c-b)*(2/3-d)*6:b,e[j]=255*f;return e}function o(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100;return 0===f?[0,0,0]:(f*=2,e*=1>=f?f:2-f,c=(f+e)/2,b=2*e/(f+e),[d,100*b,100*c])}function p(a){return h(n(a))}function q(a){return i(n(a))}function s(a){return j(n(a))}function t(a){var b=a[0]/60,c=a[1]/100,d=a[2]/100,e=Math.floor(b)%6,f=b-Math.floor(b),g=255*d*(1-c),h=255*d*(1-c*f),i=255*d*(1-c*(1-f)),d=255*d;switch(e){case 0:return[d,i,g];case 1:return[h,d,g];case 2:return[g,d,i];case 3:return[g,h,d];case 4:return[i,g,d];case 5:return[d,g,h]}}function u(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100;return c=(2-e)*f,b=e*f,b/=1>=c?c:2-c,b=b||0,c/=2,[d,100*b,100*c]}function v(a){return h(t(a))}function w(a){return i(t(a))}function x(a){return j(t(a))}function y(a){var c,d,e,f,h=a[0]/360,i=a[1]/100,j=a[2]/100,k=i+j;switch(k>1&&(i/=k,j/=k),c=Math.floor(6*h),d=1-j,e=6*h-c,0!=(1&c)&&(e=1-e),f=i+e*(d-i),c){default:case 6:case 0:r=d,g=f,b=i;break;case 1:r=f,g=d,b=i;break;case 2:r=i,g=d,b=f;break;case 3:r=i,g=f,b=d;break;case 4:r=f,g=i,b=d;break;case 5:r=d,g=i,b=f}return[255*r,255*g,255*b]}function z(a){return e(y(a))}function A(a){return f(y(a))}function B(a){return i(y(a))}function C(a){return j(y(a))}function D(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100,h=a[3]/100;return b=1-Math.min(1,e*(1-h)+h),c=1-Math.min(1,f*(1-h)+h),d=1-Math.min(1,g*(1-h)+h),[255*b,255*c,255*d]}function E(a){return e(D(a))}function F(a){return f(D(a))}function G(a){return h(D(a))}function H(a){return j(D(a))}function I(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100;return b=3.2406*e+-1.5372*f+g*-.4986,c=e*-.9689+1.8758*f+.0415*g,d=.0557*e+f*-.204+1.057*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:b=12.92*b,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:c=12.92*c,d=d>.0031308?1.055*Math.pow(d,1/2.4)-.055:d=12.92*d,b=Math.min(Math.max(0,b),1),c=Math.min(Math.max(0,c),1),d=Math.min(Math.max(0,d),1),[255*b,255*c,255*d]}function J(a){var b,c,d,e=a[0],f=a[1],g=a[2];return e/=95.047,f/=100,g/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,f=f>.008856?Math.pow(f,1/3):7.787*f+16/116,g=g>.008856?Math.pow(g,1/3):7.787*g+16/116,b=116*f-16,c=500*(e-f),d=200*(f-g),[b,c,d]}function K(a){return M(J(a))}function L(a){var b,c,d,e,f=a[0],g=a[1],h=a[2];return 8>=f?(c=100*f/903.3,e=7.787*(c/100)+16/116):(c=100*Math.pow((f+16)/116,3),e=Math.pow(c/100,1/3)),b=.008856>=b/95.047?b=95.047*(g/500+e-16/116)/7.787:95.047*Math.pow(g/500+e,3),d=.008859>=d/108.883?d=108.883*(e-h/200-16/116)/7.787:108.883*Math.pow(e-h/200,3),[b,c,d]}function M(a){var b,c,d,e=a[0],f=a[1],g=a[2];return b=Math.atan2(g,f),c=360*b/2/Math.PI,0>c&&(c+=360),d=Math.sqrt(f*f+g*g),[e,d,c]}function N(a){return I(L(a))}function O(a){var b,c,d,e=a[0],f=a[1],g=a[2];return d=g/360*2*Math.PI,b=f*Math.cos(d),c=f*Math.sin(d),[e,b,c]}function P(a){return L(O(a))}function Q(a){return N(O(a))}function R(a){return Y[a]}function S(a){return e(R(a))}function T(a){return f(R(a))}function U(a){return h(R(a))}function V(a){return i(R(a))}function W(a){return l(R(a))}function X(a){return k(R(a))}c.exports={rgb2hsl:e,rgb2hsv:f,rgb2hwb:h,rgb2cmyk:i,rgb2keyword:j,rgb2xyz:k,rgb2lab:l,rgb2lch:m,hsl2rgb:n,hsl2hsv:o,hsl2hwb:p,hsl2cmyk:q,hsl2keyword:s,hsv2rgb:t,hsv2hsl:u,hsv2hwb:v,hsv2cmyk:w,hsv2keyword:x,hwb2rgb:y,hwb2hsl:z,hwb2hsv:A,hwb2cmyk:B,hwb2keyword:C,cmyk2rgb:D,cmyk2hsl:E,cmyk2hsv:F,cmyk2hwb:G,cmyk2keyword:H,keyword2rgb:R,keyword2hsl:S,keyword2hsv:T,keyword2hwb:U,keyword2cmyk:V,keyword2lab:W,keyword2xyz:X,xyz2rgb:I,xyz2lab:J,xyz2lch:K,lab2xyz:L,lab2rgb:N,lab2lch:M,lch2lab:O,lch2xyz:P,lch2rgb:Q};var Y={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var $ in Y)Z[JSON.stringify(Y[$])]=$},{}],3:[function(a,b,c){var d=a("./conversions"),e=function(){return new j};for(var f in d){e[f+"Raw"]=function(a){return function(b){return"number"==typeof b&&(b=Array.prototype.slice.call(arguments)),d[a](b)}}(f);var g=/(\w+)2(\w+)/.exec(f),h=g[1],i=g[2];e[h]=e[h]||{},e[h][i]=e[f]=function(a){return function(b){"number"==typeof b&&(b=Array.prototype.slice.call(arguments));var c=d[a](b);if("string"==typeof c||void 0===c)return c;for(var e=0;e<c.length;e++)c[e]=Math.round(c[e]);return c}}(f)}var j=function(){this.convs={}};j.prototype.routeSpace=function(a,b){var c=b[0];return void 0===c?this.getValues(a):("number"==typeof c&&(c=Array.prototype.slice.call(b)),this.setValues(a,c))},j.prototype.setValues=function(a,b){return this.space=a,this.convs={},this.convs[a]=b,this},j.prototype.getValues=function(a){var b=this.convs[a];if(!b){var c=this.space,d=this.convs[c];b=e[c][a](d),this.convs[a]=b}return b},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(a){j.prototype[a]=function(b){return this.routeSpace(a,arguments)}}),b.exports=e},{"./conversions":2}],4:[function(a,b,c){"use strict";!function(){var b="undefined"==typeof commentitHost?"https://commentit.io":commentitHost,c=document.createElement("iframe");c.src=b+"/static/embed/dist/form.html",c.id="commentit-iframe",c.style.width="100%",c.style.height="150px",c.style["border-radius"]="4px",c.style["background-clip"]="padding-box",c.style.border="0px",c.style.padding="0px",c.style.margin="0px",document.getElementById("commentit").appendChild(c),window.addEventListener("message",function(b){if("commentit-ready"===b.data){var d=document.createElement("p");d.style.display="none",document.getElementById("commentit").appendChild(d);var e=document.createElement("a");e.style.display="none",document.getElementById("commentit").appendChild(e);var f=window.getComputedStyle(e).getPropertyValue("color"),g=window.getComputedStyle(d).getPropertyValue("color"),h=a("./yiq")(g)>=128?"dark":"light",i={theme:h,"link-color":f,username:commentitUsername,repo:commentitRepo};"undefined"!=typeof commentitPath?i.path=commentitPath:("undefined"==typeof commentitDatafile?i.datafile="comments":i.datafile=commentitDatafile,i.id=commentitId),c.contentWindow.postMessage({"commentit-options":i},"*")}})}()},{"./yiq":5}],5:[function(a,b,c){"use strict";var d=a("parse-color");b.exports=function(a){a=d(a).rgb;var b=a[0],c=a[1],e=a[2];return(299*b+587*c+114*e)/1e3}},{"parse-color":1}]},{},[4]);