(this["webpackJsonpunform-examples"]=this["webpackJsonpunform-examples"]||[]).push([[0],{59:function(e,n,t){e.exports=t.p+"static/media/logo-unform.5ab9ac7c.svg"},60:function(e,n,t){e.exports=t(87)},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),u=t.n(c),o=t(24),l=t(4),i=t(28),s=t.n(i),f=t(43),b=t(39),m=t(23),p=t(14),d=t(18),O=t(54),j=t(19),v=function(e){var n=e.name,t=Object(d.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(j.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(p.a)({},e,{borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(p.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.state.value?e.state.value.map((function(e){return e.value})):[]:e.state.value?e.state.value.value:""},setValue:function(e,n){e.state.value=n},clearValue:function(e){e.state.value=null}})}),[o,i,t.isMulti]),r.a.createElement(O.a,Object.assign({defaultValue:l,ref:c,classNamePrefix:"react-select",styles:s,theme:function(e){return Object(p.a)({},e,{colors:Object(p.a)({},e.colors,{primary:"#666360",neutral0:"#232129",primary25:"#666360",primary50:"#999591",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250},t))},g=t(56),h=function(e){var n=e.name,t=Object(d.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(j.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(p.a)({},e,{marginTop:8,borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(p.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.select.state.value?e.select.state.value.map((function(e){return e.value})):[]:e.select.state.value?e.select.state.value.value:""},setValue:function(e,n){e.select.state.value=n},clearValue:function(e){e.select.state.value=null}})}),[o,i,t.isMulti]),r.a.createElement(g.a,Object.assign({cacheOptions:!0,defaultValue:l,ref:c,classNamePrefix:"react-select",theme:function(e){return Object(p.a)({},e,{colors:Object(p.a)({},e.colors,{primary:"#666360",primary25:"#666360",primary50:"#999591",neutral0:"#232129",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250,styles:s},t))},x=t(12),E=t(13);function w(){var e=Object(x.a)(["\n  height: 40px;\n  width: 100%;\n  background: #fbc131;\n  padding: 0px 16px;\n  border-radius: 10px;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 16px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n\n  transition: background 0.3s;\n\n  :hover {\n    background: #cc9d29;\n  }\n"]);return w=function(){return e},e}var k=E.b.button(w()),y=function(e){var n=e.children,t=Object(d.a)(e,["children"]);return r.a.createElement(k,t,n)},C=t(58),S=t.n(C).a.create({baseURL:"https://api.github.com"}),V=t(36);function F(){var e=Object(x.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n"]);return F=function(){return e},e}var M=Object(E.b)(V.a)(F()),R=function(){var e=Object(a.useRef)(null),n=Object(a.useState)("repos"),t=Object(m.a)(n,2),c=t[0],u=t[1],o=Object(a.useState)(!0),l=Object(m.a)(o,2),i=l[0],p=l[1],d=Object(a.useState)(1),O=Object(m.a)(d,2),j=O[0],g=O[1],x=Object(a.useState)(""),E=Object(m.a)(x,2),w=E[0],k=E[1],C=Object(a.useState)([]),V=Object(m.a)(C,2),F=V[0],R=V[1],z=Object(a.useCallback)((function(){var n;p(!0),u((function(e){return"repos"===e?"starred":"repos"})),k(""),null===(n=e.current)||void 0===n||n.clearField("repo")}),[]),N=Object(a.useCallback)((function(e,n){n(F.filter((function(n){return n.label.includes(e)})))}),[F]),B=Object(a.useCallback)((function(e){k(e.value)}),[]),D=Object(a.useCallback)(Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/users/EliasGcf/".concat(c),{params:{page:j+1}});case 3:if(0===(n=e.sent).data.length){e.next=10;break}t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),R((function(e){return[].concat(Object(f.a)(e),Object(f.a)(t))})),g(j+1),e.next=11;break;case 10:throw new Error("No more repos to loading");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),window.alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[c,j]),G=Object(a.useCallback)((function(e){e.repo&&window.open("https://github.com/".concat(e.repo))}),[]);return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/users/EliasGcf/".concat(c));case 2:n=e.sent,t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),R(t),p(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),r.a.createElement(M,{ref:e,onSubmit:G},r.a.createElement(v,{name:"name",defaultValue:{value:"repos",label:"Owner"},onChange:z,options:[{value:"repos",label:"Owner"},{value:"starred",label:"Starred"}]}),r.a.createElement(h,{name:"repo",isLoading:i,defaultOptions:F,loadOptions:N,onChange:B,onMenuScrollToBottom:D}),r.a.createElement(y,{type:"submit"},"Open ".concat(w)))},z=t(59),N=t.n(z);function B(){var e=Object(x.a)(["\n  max-width: 450px;\n  width: 100%;\n\n  margin-bottom: 40px;\n"]);return B=function(){return e},e}function D(){var e=Object(x.a)(["\n  max-width: 450px;\n  width: 100%;\n"]);return D=function(){return e},e}function G(){var e=Object(x.a)(["\n  height: 100vh;\n\n  > h1 {\n    font-size: 24px;\n    color: #fff;\n    margin-bottom: 16px;\n  }\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  img {\n    margin-bottom: 32px;\n  }\n"]);return G=function(){return e},e}var H=E.b.div(G()),L=E.b.div(D()),I=Object(E.b)(V.a)(B()),J=function(e){var n=e.children,t=Object(l.f)(),c=Object(l.g)(),u=[{value:"react-select",label:"React Select"}],o=u.find((function(e){return e.value===c.pathname.replace("/","")})),i=Object(a.useCallback)((function(e){t.push("/".concat(e.value))}),[t]),s=Object(a.useCallback)((function(e){var n=e.input;n&&window.open("https://github.com/EliasGcf/unform-examples/tree/master/src/components/".concat(n))}),[]);return r.a.createElement(H,null,r.a.createElement("img",{src:N.a,alt:"Logo unForm"}),r.a.createElement("h1",null,"Inputs examples with Unform"),r.a.createElement(I,{onSubmit:s},r.a.createElement(v,{onChange:i,options:u,defaultValue:o,name:"input"}),r.a.createElement(y,{type:"submit"},"Open code on GitHub")),r.a.createElement(L,null,n))},P=function(e){var n=e.component,t=Object(d.a)(e,["component"]),a=J;return r.a.createElement(l.a,Object.assign({},t,{render:function(){return r.a.createElement(a,null,r.a.createElement(n,null))}}))},T=function(){return r.a.createElement(l.c,null,r.a.createElement(P,{path:"/",exact:!0,component:function(){return null}}),r.a.createElement(P,{path:"/react-select",component:R}))};function U(){var e=Object(x.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #7159c1;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return U=function(){return e},e}var _=Object(E.a)(U()),q=function(){return r.a.createElement(o.a,{basename:"/unform-examples"},r.a.createElement(_,null),r.a.createElement(T,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.5b64e2ef.chunk.js.map