"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e,u,a=r(439),c=r(791),s=r(689),i=r(367),o=r(168),p=r(444),f=p.ZP.div(e||(e=(0,o.Z)(["\n  p {\n    font-size: 18px;\n  }\n"]))),h=p.ZP.ul(u||(u=(0,o.Z)(["\n  li {\n    padding: 0 0 12px 0;\n    border-bottom: 2px solid #858585;\n  }\n  p {\n    font-size: 18px;\n  }\n  .author {\n    font-weight: 500;\n  }\n"]))),l=r(184),d=function(){var n=(0,c.useState)(null),t=(0,a.Z)(n,2),r=t[0],e=t[1],u=(0,s.UO)().movieId;return(0,c.useEffect)((function(){(0,i.tx)(u).then((function(n){return e(n)})).catch((function(n){return console.log(n)}))}),[u]),(0,l.jsx)(f,{children:r&&(r.length>0?(0,l.jsx)(h,{children:r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{className:"author",children:["Author: ",r]}),(0,l.jsx)("p",{children:e})]},t)}))}):(0,l.jsx)("p",{children:"We don't have any reviews for this movie."}))})}},367:function(n,t,r){r.d(t,{Df:function(){return s},ME:function(){return o},TP:function(){return f},tx:function(){return v},zv:function(){return l}});var e=r(861),u=r(757),a=r.n(u),c=r(243);function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"c32494ab48f2db4575ae8be81883e5e9"}}}]);
//# sourceMappingURL=387.43b4a46d.chunk.js.map