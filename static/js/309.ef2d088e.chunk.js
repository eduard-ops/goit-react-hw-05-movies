"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[309],{309:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(791),a=e(871),o=e(504),i=e(207),u=e(184);function s(){var t=(0,c.useState)(null),n=(0,r.Z)(t,2),e=n[0],s=n[1],l=(0,a.TH)();return(0,c.useEffect)((function(){(0,i.ZS)().then((function(t){return t.results})).then(s)}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Tranding today"}),e&&(0,u.jsx)("ul",{className:"popular-list",children:e.map((function(t){var n=t.original_title,e=t.id;return(0,u.jsx)("li",{className:"popular-list__item",children:(0,u.jsx)(o.rU,{className:"popular-list__item-link",to:"movies/".concat(e),state:l,children:n})},e)}))})]})}},207:function(t,n,e){e.d(n,{ZS:function(){return l},BG:function(){return f},IV:function(){return p},lw:function(){return h},Pv:function(){return m}});var r=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org",i="e95cb0020c8da522f774c98098c822a8";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function t(){var n,e,r,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},t.next=4,fetch(n,e);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(t){return u("".concat(o,"/3/movie/popular?api_key=").concat(i))}function f(t){return u("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(i))}function p(t){return u("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(i))}function h(t){return u("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(i))}function m(t){return u("".concat(o,"/3/search/movie?api_key=").concat(i,"&page=1&query=").concat(t))}}}]);
//# sourceMappingURL=309.ef2d088e.chunk.js.map