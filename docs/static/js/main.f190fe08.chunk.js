(this["webpackJsonpfh-04-gif-expert-app"]=this["webpackJsonpfh-04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length<3?console.error("Para ingresar un nuevo elemento debe tener al menos 3 caracteres de largo"):(t((function(e){return[c].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})},d=n(10),j=n(6),l=n.n(j),f=n(8),b=function(){var e=Object(f.a)(l.a.mark((function e(t,n,a,r){var c,i,s,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={api_key:n,limit:a,q:encodeURI(r)},Object.keys(c).map((function(e,n){return t+="".concat(0==n?"?":"&").concat(e,"=").concat(c[e])})),e.next=4,fetch(t);case 4:return i=e.sent,e.next=7,i.json();case 7:return s=e.sent,o=s.data,u=o.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),p="OK",h=function(e){var t={data:[],loading:!0,estado:p},n=Object(a.useState)(t),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){b("https://api.giphy.com/v1/gifs/search","7fu47BcWMQD2SA8XzBFSGVZiqNByFauK",10,e).then((function(e){if(0==e.length)throw new Error("No se encontraron GIF con el criterio usado");s({data:e,loading:!1,estado:p})})).catch((function(e){return s({data:[],loading:!1,estado:e.message})}))}),[e]),c},O=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},m=function(e){var t=e.categoria,n=h(t),a=n.data,r=n.loading,c=n.estado;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),r&&Object(o.jsx)("p",{class:"animate__animated animate__flash",children:"Cargando..."}),c==p?Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(o.jsx)(O,Object(d.a)({},e),e.id)}))}):Object(o.jsx)("p",{children:c})]})},g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategorias:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(m,{categoria:e},e)}))})]})};n(17);c.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f190fe08.chunk.js.map