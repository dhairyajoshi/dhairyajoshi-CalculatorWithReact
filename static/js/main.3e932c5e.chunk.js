(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var c=e(1),i=e.n(c),o=e(4),r=e.n(o),l=(e(9),e(2)),u=e(0);var s=function(){var t=Object(c.useState)(0),n=Object(l.a)(t,2),e=n[0],i=n[1],o=Object(c.useState)(null),r=Object(l.a)(o,2),s=r[0],j=r[1],b=Object(c.useState)(0),a=Object(l.a)(b,2),O=a[0],d=a[1],h=Object(c.useState)(null),f=Object(l.a)(h,2),x=f[0],k=f[1],C=Object(c.useState)(!1),m=Object(l.a)(C,2),v=m[0],N=m[1],g=Object(c.useState)(!1),S=Object(l.a)(g,2),p=S[0],w=S[1],A=Object(c.useState)(!1),J=Object(l.a)(A,2),y=J[0],z=J[1],B=function(t){if(y)i(t),z(!1);else if(v){var n=t.toString(),c=parseFloat(e+n);i(c)}else e<1e14&&i(p?10*e-t:10*e+t)},E=function(t){if(null!=e){d(e),k(t);var n=null==s?e.toString()+t:s+e.toString();i(0),j(n),N(!1),w(!1)}};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"view",children:[Object(u.jsx)("div",{className:"hist",children:Object(u.jsx)("h3",{children:s})}),Object(u.jsx)("div",{className:"active",children:Object(u.jsx)("h3",{children:e})})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{className:"opers",onClick:function(){i(0),j(null),d(0)},children:"AC"}),Object(u.jsx)("button",{className:"opers",onClick:function(){w(!p),i(-1*e)},children:"+/-"}),Object(u.jsx)("button",{className:"opers",onClick:function(){return E("%")},children:"%"}),Object(u.jsx)("button",{className:"orangebut",onClick:function(){return E("\xf7")},children:"\xf7"}),Object(u.jsx)("button",{onClick:function(){return B(7)},children:"7"}),Object(u.jsx)("button",{onClick:function(){return B(8)},children:"8"}),Object(u.jsx)("button",{onClick:function(){return B(9)},children:"9"}),Object(u.jsx)("button",{className:"orangebut",onClick:function(){return E("\xd7")},children:"\xd7"}),Object(u.jsx)("button",{onClick:function(){return B(4)},children:"4"}),Object(u.jsx)("button",{onClick:function(){return B(5)},children:"5"}),Object(u.jsx)("button",{onClick:function(){return B(6)},children:"6"}),Object(u.jsx)("button",{className:"orangebut",onClick:function(){return E("-")},children:"-"}),Object(u.jsx)("button",{onClick:function(){return B(1)},children:"1"}),Object(u.jsx)("button",{onClick:function(){return B(2)},children:"2"}),Object(u.jsx)("button",{onClick:function(){return B(3)},children:"3"}),Object(u.jsx)("button",{className:"orangebut",onClick:function(){return E("+")},children:"+"}),Object(u.jsx)("button",{id:"zero",onClick:function(){return B(0)},children:"0"}),Object(u.jsx)("button",{onClick:function(){if(y)i(0),z(!1);else if(!v){var t=e.toString()+".";i(t),N(!0)}},children:"."}),Object(u.jsx)("button",{className:"orangebut",onClick:function(){v&&N(!1);var t,n=e;console.log(O,n),t="+"===x?O+n:"-"===x?O-n:"\xd7"===x?O*n:"\xf7"===x?O/n:"%"===x?O%n:e,j(null),d(t),i(t),console.log(O,n),k(null),z(!0)},children:"="})]})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s,{})}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.3e932c5e.chunk.js.map