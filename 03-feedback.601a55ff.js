function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(T,t),s?S(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function T(){var e=g();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?v(n,u-(e-l)):n}(e))}function h(e){return f=void 0,p&&r?S(e):(r=i=void 0,a)}function w(){var e=g(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(T,t),S(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const S=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]'),O=document.querySelector(".feedback-form"),T="feedback-form-state";!function(){const e=localStorage.getItem(T),t=JSON.parse(e);if(!t)return;S.value=t.email,j.value=t.message}(),O.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T)})),O.addEventListener("input",e(t)((function(){h[S.name]=S.value,h[j.name]=j.value,localStorage.setItem(T,JSON.stringify(h))}),300));const h={[S.name]:S.value,[j.name]:j.value};localStorage.setItem(T,JSON.stringify(h)),console.log(h);
//# sourceMappingURL=03-feedback.601a55ff.js.map