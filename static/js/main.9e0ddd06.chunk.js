(this["webpackJsonpcamps-react-app"]=this["webpackJsonpcamps-react-app"]||[]).push([[0],{97:function(n,t,e){"use strict";e.r(t);var o=e(11),r=e(2),i=e.n(r),a=e(22),c=e.n(a),s=e(26),l=e(21),u=e(23);function d(){var n=Object(l.a)(["\n  text-align: center;\n  font-size: 30px;\n  font-family: 'Satisfy', cursive;\n  color: #ffffff;\n"]);return d=function(){return n},n}function f(){var n=Object(l.a)(["\n  width: 100%;\n  height: 90px;\n  position: relative;\n  background-color: #2f7510;\n  border-bottom: 1px solid #ffffff;\n"]);return f=function(){return n},n}var p=u.a.div(f()),b=u.a.h1(d());function h(){return Object(o.jsx)(p,{children:Object(o.jsx)(b,{children:"Le bon camping"})})}var v=e(77);function g(){var n=Object(l.a)(["\n  query listCampingItems {\n    campings {\n      id\n      name\n      location {\n        longitude\n        latitude\n      }\n    }\n  }\n"]);return g=function(){return n},n}var m=Object(s.gql)(g());var j=e(14),w=e(75),x=e(76),O=e.n(x);function y(){var n=Object(l.a)(['\n  position: absolute;\n  bottom: 5px;\n  left: -20px;\n  width: 80px;\n  z-index: 1000000;\n  background-color: #3986ac;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 12px rgba(0,0,0,.5);\n  color: #ffff;\n  font-family: ui-sans-serif;\n  &:after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -15px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #3986ac transparent transparent transparent;\n  }\n']);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: block;\n"]);return k=function(){return n},n}var A=u.a.div(k()),I=u.a.div(y());function S(n){var t=n.name,e=Object(r.useState)(!1),i=Object(j.a)(e,2),a=i[0],c=i[1];return Object(o.jsxs)(A,{"data-testid":"camping-marker",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[a&&Object(o.jsx)(I,{children:t}),Object(o.jsx)(w.Icon,{icon:O.a,width:40,color:"#2f7510"})]})}function L(){var n=Object(l.a)(["\n  width: 100%;\n  height: 90vh;\n  position: relative;\n"]);return L=function(){return n},n}var C=u.a.div(L());function N(){var n=function(){var n=Object(s.useQuery)(m).data;return void 0===n?{campingItems:[]}:{campingItems:n.campings}}().campingItems.map((function(n){return Object(o.jsx)(S,{lng:n.location.longitude,lat:n.location.latitude,name:n.name},n.id)}));return Object(o.jsx)(C,{"data-testid":"camping-map",children:Object(o.jsx)(v.a,{bootstrapURLKeys:{key:"AIzaSyD5yNw_1eBAooLt00Hk3NqgRndNlNCHSGA"},defaultCenter:{lat:48.7717719,lng:2.0907224},defaultZoom:8.5,children:n})})}function W(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return W=function(){return n},n}var E=u.a.div(W());var M=function(){return Object(o.jsxs)(E,{"data-testid":"app-container",children:[Object(o.jsx)(h,{}),Object(o.jsx)(N,{})]})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(n,t){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var T=e(33),q=e(52),P=[e(49).a.query("listCampingItems",(function(n,t,e){return t(e.data({campings:[{id:"bccb351c-e447-4683-acf6-6c9be9a407cb",name:"CAMPING HUTTOPIA RAMBOUILLET",location:{latitude:48.630059,longitude:1.835694}},{id:"f8317142-7897-42bc-8f9c-33bb5cc68eec",name:"CARAVANING LE VAUVERT",location:{latitude:48.411278,longitude:2.143939}}]}))}))],B=(q.a.apply(void 0,Object(T.a)(P)),new s.InMemoryCache),H=new s.HttpLink({uri:"".concat("https://camps-api.herokuapp.com","/graphql"),fetch:function(n){function t(){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(){return fetch.apply(void 0,arguments)}))}),z=new s.ApolloClient({ssrMode:!0,ssrForceFetchDelay:100,cache:B,link:H});c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(s.ApolloProvider,{client:z,children:Object(o.jsx)(M,{})})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/camps-react-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/camps-react-app","/service-worker.js");U?(!function(n,t){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(e){var o=e.headers.get("content-type");404===e.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):R(n,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,n)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.9e0ddd06.chunk.js.map