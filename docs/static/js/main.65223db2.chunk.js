(this.webpackJsonpmyprueba=this.webpackJsonpmyprueba||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),i=t(1),u=function(e){var a=e.setcategoria,t=Object(n.useState)(""),c=Object(i.a)(t,2),l=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(a((function(e){return[l]})),u(""))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:""},r.a.createElement("input",{id:"IdInput",className:"form-control input-lg",type:"text",value:l,onChange:function(e){u(e.target.value)},placeholder:"Buscar..."})))))},m=t(2),s=t.n(m),o=t(5),d=function(){var e=Object(o.a)(s.a.mark((function e(a){var t,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(a),"&limit=15&api_key=aLxa6DuC0VoAA24qr6vxiUDNIplQnsIF"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var a;return{id:e.id,title:e.title,url:null===(a=e.images)||void 0===a?void 0:a.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=function(e){e.id;var a=e.title,t=e.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("img",{src:t,alt:a})))))},f=function(e){var a=e.category,t=function(e){var a=Object(n.useState)({data:[],loading:!0}),t=Object(i.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(a),c=t.data,l=t.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Resultados de:",a),l&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))))},p=function(){var e=Object(n.useState)(["Simpson"]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:""},"AppReactPrueba")),r.a.createElement("ul",{className:"nav navbar-nav right-align"},r.a.createElement("li",{className:"active"},r.a.createElement("a",{href:""},"Home"))))),r.a.createElement(u,{setcategoria:c}),r.a.createElement("form",null,r.a.createElement("ol",null,t.map((function(e){return r.a.createElement(f,{key:e,category:t})})))))};t(12);l.a.render(r.a.createElement(p,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.65223db2.chunk.js.map