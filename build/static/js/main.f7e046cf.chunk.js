(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{44:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),u=n(16),o=n(40),i=n(10);var m=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},E=n(37),p=n.n(E),b=n(38),s=n.n(b),d=n(35),v=n.n(d);var j=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(e.title),o=Object(i.a)(u,2),m=o[0],f=o[1],E=Object(a.useState)(e.content),b=Object(i.a)(E,2),d=b[0],j=b[1];return l.a.createElement("div",{className:"note"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{className:"modify-input",type:"text",value:m,onChange:function(e){f(e.target.value)}}),l.a.createElement("textarea",{className:"modify-text",value:d,onChange:function(e){j(e.target.value)}}),l.a.createElement("button",{onClick:function(){e.onModify(e.id,{title:m,content:d}),r(!1)}},l.a.createElement(v.a,null))):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)),l.a.createElement("button",{onClick:function(){r(!0)}},l.a.createElement(s.a,null))))},O=n(27),h=n(39),g=n.n(h),k=n(72),C=n(71);var y=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),m=Object(i.a)(o,2),f=m[0],E=m[1];function p(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(O.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:p,value:f.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:p,value:f.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(C.a,{in:c},l.a.createElement(k.a,{onClick:function(t){e.onAdd(f),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(g.a,null)))))};var S=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];function r(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}function E(e,t){c((function(n){return n.map((function(n,a){return a===e?Object(u.a)(Object(u.a)({},n),t):n}))}))}return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(y,{onAdd:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(j,{key:t,id:t,title:e.title,content:e.content,onDelete:r,onModify:E})})),l.a.createElement(f,null))};r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f7e046cf.chunk.js.map