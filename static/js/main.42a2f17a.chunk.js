(this["webpackJsonpcamps-react-app"]=this["webpackJsonpcamps-react-app"]||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var i=t(3),r=t(2),a=t.n(r),c=t(24),o=t.n(c),s=t(23),u=t(7),l=t(10);function d(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 30px;\n  font-family: 'Satisfy', cursive;\n  color: #ffffff;\n"]);return d=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 100%;\n  height: 90px;\n  position: relative;\n  background-color: #2f7510;\n  border-bottom: 1px solid #ffffff;\n"]);return p=function(){return n},n}var b=l.a.div(p()),f=l.a.h1(d());function j(){return Object(i.jsx)(b,{children:Object(i.jsx)(f,{children:"Le bon camping"})})}var h=t(81);function m(){var n=Object(u.a)(["\n  query ListCampingItems {\n    campings {\n      id\n      name\n      location {\n        longitude\n        latitude\n      }\n    }\n  }\n"]);return m=function(){return n},n}var x=Object(s.gql)(m());var g=t(14),v=t(79),O=t(80),w=t.n(O),I=t(57),y=t(46),C=function(n){var e=n.title,t=n.size,r=void 0===t?24:t,a=n.color,c=void 0===a?"currentColor":a,o=Object(y.a)(n,["title","size","color"]);return Object(i.jsxs)("svg",Object(I.a)(Object(I.a)({viewBox:"0 0 24 24",width:r,height:r},o),{},{children:[e&&Object(i.jsx)("title",{children:e}),Object(i.jsx)("g",{fillRule:"nonzero",stroke:c,fill:"none",strokeLinecap:"round",children:Object(i.jsx)("path",{d:"M4 4l16 16M20 4L4 20"})})]}))},k=function(n){n.title;var e=n.size,t=void 0===e?24:e,r=n.color,a=void 0===r?"currentColor":r;Object(y.a)(n,["title","size","color"]);return Object(i.jsx)("svg",{role:"img","aria-label":"StarIcon",height:t,width:t,children:Object(i.jsx)("polygon",{fill:a,points:"9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"})})};function E(){var n=Object(u.a)(["\n  padding: 0 10px;\n"]);return E=function(){return n},n}function S(){var n=Object(u.a)(["\n  display: inline-block;\n  position: relative;\n  list-style: none;\n  padding: 16px 0px;\n  cursor: pointer;\n  width: 49%;\n  text-align: center;\n  color: #dbdbdb;\n\n  &:hover {\n    color: white;\n  }\n\n  ","\n"]);return S=function(){return n},n}function L(){var n=Object(u.a)(["\n  margin: 0 0 10px;\n  padding: 0;\n  background-color: #2f7510;\n"]);return L=function(){return n},n}function A(){var n=Object(u.a)(["\n  border: #2f7510 2px solid;\n  margin: 10px;\n  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.55);\n"]);return A=function(){return n},n}var z=l.a.div(A()),M=l.a.ul(L()),_=l.a.li(S(),(function(n){if(n.isSelected)return"\n        border-bottom: white 4px solid;\n        color: white;\n      "})),q=l.a.div(E());function N(n){var e=n.children,t=a.a.useState(0),r=Object(g.a)(t,2),c=r[0],o=r[1];return Object(i.jsxs)(z,{children:[Object(i.jsx)(M,{children:e.map((function(n,e){return Object(i.jsx)(_,{"aria-selected":e===c?"true":"false",onClick:function(){o(e)},isSelected:e===c,children:n.props.title},e)}))}),e.map((function(n,e){return e===c?n:null}))]})}function P(n){var e=n.children;return Object(i.jsx)(q,{children:e})}t(69);function R(){var n=Object(u.a)(["\n  query DetailCampingItem($campingId: ID!) {\n    camping(id: $campingId) {\n      id\n      name\n      description\n      image\n      address\n      zipcode\n      city\n      nb_spots\n      nb_stars\n      phone_number\n      email\n      website\n      location {\n        longitude\n        latitude\n      }\n    }\n  }\n"]);return R=function(){return n},n}var U=Object(s.gql)(R());function T(n){var e=Object(s.useLazyQuery)(U,{fetchPolicy:"network-only"}),t=Object(g.a)(e,2),i=t[0],r=t[1],c=r.called,o=r.loading,u=r.data,l=a.a.useCallback((function(){null!==n&&i({variables:{campingId:n}})}),[n,i]);return a.a.useEffect((function(){l()}),[n,l]),!c||o?{campingItem:null}:{campingItem:u.camping}}var W={isExpanded:!1,updateIsExpanded:function(){},campingId:null,updateCampingId:function(){}},D=a.a.createContext(W);function B(n){var e=n.children,t=function(){var n=a.a.useState(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],r=a.a.useState(null),c=Object(g.a)(r,2),o=c[0],s=c[1];return{isExpanded:t,updateIsExpanded:a.a.useCallback((function(n){i(n)}),[]),campingId:o,updateCampingId:a.a.useCallback((function(n){s(n)}),[])}}();return Object(i.jsx)(D.Provider,{value:t,children:e})}function G(){var n=Object(u.a)(["\n  width: 220px;\n  margin: 0 10px 10px 10px;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.55);\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  font-size: 20px;\n"]);return H=function(){return n},n}function V(){var n=Object(u.a)(["\n  background-color: white;\n  border: none;\n  float: right;\n  margin-right: 10px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return V=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 250px;\n"]);return $=function(){return n},n}function J(){var n=Object(u.a)(["\n  width: 250px;\n  margin-top: 40px;\n  text-align: center;\n"]);return J=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  margin-top: 10px;\n  padding-bottom: 20px;\n  border-bottom: #2f7510 2px solid;\n  min-height: 170px;\n"]);return Q=function(){return n},n}var F=l.a.header(Q()),K=l.a.div(J()),X=l.a.div($()),Y=l.a.button(V()),Z=l.a.h2(H()),nn=l.a.img(G());function en(){var n=a.a.useContext(D),e=n.updateIsExpanded,t=T(n.campingId).campingItem;return t?Object(i.jsxs)(F,{children:[Object(i.jsxs)(K,{children:[Object(i.jsx)(Z,{children:t.name}),null!==t.nb_stars&&function(n){for(var e=[],t=0;t<n;t++)e.push(Object(i.jsx)(k,{size:24,color:"#ffd055"},t));return e}(t.nb_stars)]}),Object(i.jsxs)(X,{children:[Object(i.jsx)(Y,{"aria-label":"Close",onClick:function(){return e(!1)},children:Object(i.jsx)(C,{title:"Close",size:20})}),Object(i.jsx)(nn,{src:t.image,alt:t.name})]})]}):null}function tn(){var n=Object(u.a)(["\n  border-bottom: #2f7510 1px solid;\n  padding-bottom: 10px;\n  color: #2f7510;\n"]);return tn=function(){return n},n}var rn=l.a.h3(tn());function an(){var n=T(a.a.useContext(D).campingId).campingItem;return n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{children:[Object(i.jsx)(rn,{children:"Description"}),null!==n.description&&Object(i.jsx)("p",{children:n.description}),null!==n.nb_spots&&Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Capacity: "})," ",n.nb_spots," spots"]})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)(rn,{children:"Address"}),null!==n.address&&Object(i.jsx)("p",{children:n.address}),Object(i.jsxs)("p",{children:[n.zipcode," ",n.city]})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)(rn,{children:"Contact"}),null!==n.phone_number&&Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Phone number: "})," ",n.phone_number]}),null!==n.email&&Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Email: "})," ",n.email]}),null!==n.website&&Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Website:"})," ",Object(i.jsx)("a",{href:n.website,title:n.name,children:n.website})]})]})]}):null}function cn(){var n=Object(u.a)(["\n  max-height: 60vh;\n  width: 500px;\n  padding-top: 20px;\n  overflow-y: scroll;\n"]);return cn=function(){return n},n}var on=l.a.div(cn());function sn(){return Object(i.jsx)(on,{children:Object(i.jsxs)(N,{children:[Object(i.jsx)(P,{title:"Detail",children:Object(i.jsx)(an,{})}),Object(i.jsx)(P,{title:"Comment",children:Object(i.jsx)("h2",{children:"Comment"})})]})})}function un(){var n=Object(u.a)(["\n  ","\n  transition: width 0.3s ease-in-out;\n"]);return un=function(){return n},n}var ln=l.a.aside(un(),(function(n){return n.isExpanded?"\n        width: 500px;\n      ":"\n        width: 0px;\n        overflow: hidden;\n      "})),dn=function(){var n=a.a.useContext(D),e=n.isExpanded;return null===n.campingId?null:Object(i.jsxs)(ln,{"aria-label":"Sidebar","aria-expanded":e,isExpanded:e,children:[Object(i.jsx)(en,{}),Object(i.jsx)(sn,{})]})};function pn(){var n=Object(u.a)(['\n  position: absolute;\n  bottom: 5px;\n  left: -20px;\n  width: 80px;\n  z-index: 1000000;\n  background-color: #3986ac;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 12px rgba(0,0,0,.5);\n  color: #ffff;\n  font-family: ui-sans-serif;\n  &:after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -15px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #3986ac transparent transparent transparent;\n  }\n']);return pn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  display: block;\n"]);return bn=function(){return n},n}var fn=l.a.li(bn()),jn=l.a.div(pn());function hn(n){var e=n.id,t=n.name,r=(n.lng,n.lat,a.a.useState(!1)),c=Object(g.a)(r,2),o=c[0],s=c[1],u=a.a.useContext(D),l=u.isExpanded,d=u.updateIsExpanded,p=u.updateCampingId;return Object(i.jsxs)(fn,{"aria-label":"CampingMarker","aria-describedby":t,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},onClick:function(){return p(e),void(!1===l&&d(!0))},children:[o&&Object(i.jsx)(jn,{id:t,role:"tooltip",children:t}),Object(i.jsx)(v.Icon,{icon:w.a,width:40,color:"#2f7510"})]})}function mn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 90vh;\n  position: relative;\n"]);return mn=function(){return n},n}var xn=l.a.main(mn()),gn=a.a.memo((function(){var n=function(){var n=Object(s.useQuery)(x);return void 0===n.data?{campingItems:[]}:{campingItems:n.data.campings}}().campingItems.map((function(n){return Object(i.jsx)(hn,{id:n.id,name:n.name,lng:n.location.longitude,lat:n.location.latitude},n.id)}));return Object(i.jsx)(xn,{"aria-label":"Map",children:Object(i.jsx)(h.a,{bootstrapURLKeys:{key:"AIzaSyD5yNw_1eBAooLt00Hk3NqgRndNlNCHSGA"},defaultCenter:{lat:48.7717719,lng:2.0907224},defaultZoom:8.5,children:n})})}));function vn(){var n=Object(u.a)(["\n  display: flex\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return On=function(){return n},n}var wn=l.a.div(On()),In=l.a.div(vn());var yn=function(){return Object(i.jsxs)(wn,{role:"document",children:[Object(i.jsx)(j,{}),Object(i.jsx)(In,{children:Object(i.jsxs)(B,{children:[Object(i.jsx)(dn,{}),Object(i.jsx)(gn,{})]})})]})},Cn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function kn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var En=t(33),Sn=t(53),Ln=t(50),An=[Ln.a.query("ListCampingItems",(function(n,e,t){return e(t.data({campings:[{id:"bccb351c-e447-4683-acf6-6c9be9a407cb",name:"CAMPING HUTTOPIA RAMBOUILLET",location:{latitude:48.630059,longitude:1.835694}},{id:"f8317142-7897-42bc-8f9c-33bb5cc68eec",name:"CARAVANING LE VAUVERT",location:{latitude:48.411278,longitude:2.143939}}]}))})),Ln.a.query("DetailCampingItem",(function(n,e,t){var i=n.variables.campingId;return e(t.data({camping:{id:i,name:"CAMPING HUTTOPIA RAMBOUILLET",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.",image:"https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=",address:"Route du Ch\xe2teau d'eau",zipcode:78120,city:"RAMBOUILLET",longitude:48.630059,latitude:1.835694,nb_spots:20,nb_stars:3,phone_number:"168403928",email:"contact@le-camping-huttopia.com",website:"le-camping-huttopia.com"}}))}))],zn=(Sn.a.apply(void 0,Object(En.a)(An)),new s.InMemoryCache),Mn=new s.HttpLink({uri:"".concat("https://camps-api.herokuapp.com","/graphql"),fetch:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){return fetch.apply(void 0,arguments)}))}),_n=new s.ApolloClient({cache:zn,link:Mn});o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(s.ApolloProvider,{client:_n,children:Object(i.jsx)(yn,{})})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");Cn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):kn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):kn(e,n)}))}}()},69:function(n,e,t){"use strict";t(70)},70:function(n,e){}},[[100,1,2]]]);
//# sourceMappingURL=main.42a2f17a.chunk.js.map