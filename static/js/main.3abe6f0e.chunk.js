(this["webpackJsonpcinema-app"]=this["webpackJsonpcinema-app"]||[]).push([[0],{160:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a.n(n),c=a(5),i=a(39),o=a(13),s=a(0),l=a.n(s),j=a(236),d=a(228),u=a(238),b=a(234),h=a(237),v=a(231),f=a(103),x=a.n(f),O=a(102),p=a.n(O),m=a(99),g=a.n(m),y=a(101),S=a.n(y),w=a(100),k=a.n(w),C=a(54),F=a.n(C),M=a(97),V=a(16),z=a(2),D=Object(s.createContext)({searchVal:"",setSearchValue:function(e){},moviesData:null,setMoviesList:function(e){},favoriteMovies:[],setFavoriteMovies:function(e){},favoritesFlag:!1,setFlag:function(){}}),E=function(){return Object(s.useContext)(D)},L=function(e){var t=Object(s.useState)(null),a=Object(o.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(""),i=Object(o.a)(c,2),l=i[0],j=i[1],d=Object(s.useState)([]),u=Object(o.a)(d,2),b=u[0],h=u[1],v=Object(s.useState)(!1),f=Object(o.a)(v,2),x=f[0],O=f[1];return Object(z.jsx)(D.Provider,{value:{searchVal:l,setSearchValue:function(e){j(e)},moviesData:n,setMoviesList:function(e){r(e)},favoriteMovies:b,setFavoriteMovies:function(e){b.find((function(t){return t.id===e.id}))?alert("movie with id ".concat(e.id," already exists")):h((function(t){return[].concat(Object(V.a)(t),[e])}))},favoritesFlag:x,setFlag:function(){O(!x)}},children:e.children})},_={display:"flex",alignItems:"center",fontSize:"1.3rem"};var T=function(){var e=Object(s.useState)({right:!1}),t=Object(o.a)(e,2),a=t[0],n=t[1],r=E();function f(){r.setSearchValue("nonsencenonsencenonsence")}function O(){r.setFlag(!r.favoritesFlag)}function m(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&n(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},e,t)))}}var y=function(e){return Object(z.jsx)(j.a,{role:"presentation",onClick:m(e,!1),onKeyDown:m(e,!1),children:Object(z.jsxs)(h.a,{children:[Object(z.jsxs)(v.a,{button:!0,sx:_,children:[Object(z.jsx)(g.a,{fontSize:"small"}),"\xa0Add Movie"]}),Object(z.jsxs)(v.a,{onClick:f,button:!0,sx:_,children:[Object(z.jsx)(k.a,{fontSize:"small"}),"\xa0Clear Movie List"]}),Object(z.jsx)(v.a,{onClick:O,button:!0,sx:_,children:r.favoritesFlag?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(S.a,{fontSize:"small"}),"\xa0 back to list"]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(F.a,{fontSize:"small"}),"\xa0 Favorite Movies"]})})]})})};return Object(z.jsxs)(j.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(z.jsx)(j.a,{p:3,children:Object(z.jsx)(p.a,{fontSize:"large",color:"primary"})}),Object(z.jsx)(j.a,{component:"form",sx:{width:"50%",marginTop:"1.5rem"},noValidate:!0,autoComplete:"on",children:Object(z.jsx)(d.a,{color:"secondary",onKeyUp:Object(M.debounce)((function(e){return t=e.target.value,e.preventDefault(),void r.setSearchValue(t);var t}),1e3),onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},label:"Search movie",type:"search",placeholder:"Example: The fast and the furious",sx:{width:"100%"},helperText:"Live Search"})}),Object(z.jsxs)(j.a,{p:3,display:"flex",alignItems:"center",children:[Object(z.jsx)(u.a,{onClick:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",a=t.length,n=0;n<2;n++)e+=t.charAt(Math.floor(Math.random()*a));r.setSearchValue(e),r.favoritesFlag&&r.setFlag(!r.favoritesFlag)},variant:"contained",color:"secondary",children:"Show Random Movies"}),Object(z.jsx)(u.a,{sx:{marginTop:"0.5rem"},children:Object(z.jsx)("div",{children:["right"].map((function(e){return Object(z.jsxs)(l.a.Fragment,{children:[Object(z.jsx)(x.a,{color:"secondary",onClick:m(e,!0),children:e}),Object(z.jsx)(b.a,{anchor:e,open:a[e],onClose:m(e,!1),children:y(e)})]},e)}))})})]})]})},I=a(46),K=a.n(I),A=a(65),B=a(104),N=a.n(B),P="https://api.themoviedb.org/3/search/movie?api_key=ba9afec588f7354242a4bc48a183c12e&query=";function U(e){return H.apply(this,arguments)}function H(){return(H=Object(A.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(P+t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=a(109),R=a(4),q=a(241),Y=a(242),G=a(244),Q=a(245),W=a(246),X=a(247),Z=a(240),$=a(243),ee=a(106),te=a.n(ee),ae=a(107),ne=a.n(ae),re=a(105),ce=a.n(re),ie=a(248),oe=a(251),se=a(250),le=a(249),je=a(239),de=a(253),ue=a(232),be=Object(R.a)((function(e){e.expand;var t=Object(J.a)(e,["expand"]);return Object(z.jsx)(Z.a,Object(i.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function he(e){var t=E(),a=s.useState(!1),n=Object(o.a)(a,2),r=n[0],c=n[1],l=s.useState(!1),j=Object(o.a)(l,2),b=j[0],h=j[1],v=s.useState(e.card.title),f=Object(o.a)(v,2),x=f[0],O=f[1],p=s.useState(e.card.overview),m=Object(o.a)(p,2),g=m[0],y=m[1],S=s.useState("Added Movie To Favorites"),w=Object(o.a)(S,2),k=w[0],C=w[1],M=s.useState({openSnack:!1,vertical:"top",horizontal:"center"}),V=Object(o.a)(M,2),D=V[0],L=V[1],_=D.vertical,T=D.horizontal,I=D.openSnack,K=function(e){return function(){L(Object(i.a)({openSnack:!0},e))}},A=Object(z.jsx)(s.Fragment,{children:Object(z.jsx)(u.a,{onClick:K({vertical:"bottom",horizontal:"center"}),children:Object(z.jsxs)(Z.a,{onClick:function(){var a;a=e.card,e.card.favorite?C("Movie Already In Favorites"):(e.card.favorite=!0,t.setFavoriteMovies(a)),K({vertical:"bottom",horizontal:"center"})},"aria-label":"add to favorites",children:[e.card.favorite?Object(z.jsx)(F.a,{htmlColor:"red"}):Object(z.jsx)(F.a,{htmlColor:"black"}),Object(z.jsx)(ue.a,{anchorOrigin:{vertical:_,horizontal:T},open:I,onClose:function(){L(Object(i.a)(Object(i.a)({},D),{},{openSnack:!1}))},message:k,autoHideDuration:2500},_+T)]})})});function B(){h(!b)}return Object(z.jsxs)(q.a,{sx:{width:300,marginBottom:4,flexBasis:400,backgroundColor:"#0000008f",color:"white"},children:[Object(z.jsx)(Y.a,{sx:{minHeight:180},action:Object(z.jsx)(Z.a,{onClick:B,"aria-label":"settings",sx:{color:"white"},children:Object(z.jsx)(ce.a,{})}),title:e.card.title}),Object(z.jsx)(G.a,{component:"img",height:"194",image:e.card.poster_path?"https://image.tmdb.org/t/p/w200"+e.card.poster_path:"https://kfcb.go.ke/sites/default/files/styles/film/public/2021-03/500x735_0_0_64.png?itok=9OY_x7fE",alt:"Poster"}),Object(z.jsx)(Q.a,{children:"release date: "+e.card.release_date}),Object(z.jsxs)(W.a,{disableSpacing:!0,children:[A,Object(z.jsx)(Z.a,{"aria-label":"share",children:Object(z.jsx)(te.a,{})})]}),Object(z.jsx)(de.a,{sx:{marginLeft:1},control:Object(z.jsx)(be,{expand:r,onClick:function(){c(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(z.jsx)(ne.a,{})}),label:"Read more"}),Object(z.jsx)(X.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(z.jsx)(Q.a,{children:Object(z.jsx)($.a,{paragraph:!0,children:e.card.overview})})}),Object(z.jsxs)(ie.a,{open:b,onClose:B,children:[Object(z.jsx)(le.a,{children:"Edit Movie"}),Object(z.jsx)("br",{}),Object(z.jsxs)(se.a,{children:[Object(z.jsx)(je.a,{sx:{width:"25ch"},children:Object(z.jsx)(d.a,{focused:!0,label:"Movie Name",placeholder:e.card.title,color:"secondary",onKeyUp:function(e){return t=e.target.value,void O(t);var t}})}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)(je.a,{sx:{width:"25ch"},children:Object(z.jsx)(d.a,{color:"secondary",id:"outlined-multiline-static",label:"Overview",multiline:!0,rows:8,defaultValue:e.card.overview,onKeyUp:function(e){return t=e.target.value,void y(t);var t}})})]}),Object(z.jsxs)(oe.a,{sx:{display:"flex",justifyContent:"center"},children:[Object(z.jsx)(u.a,{color:"secondary",onClick:function(){e.card.title!==x?e.card.title=x:e.card.title=e.card.title,e.card.overview!==g?e.card.overview=g:e.card.overview=e.card.overview,B()},children:"Edit"}),Object(z.jsx)(u.a,{color:"secondary",onClick:B,children:"Cancel"})]})]})]})}a(160);function ve(){var e,t,a,n,r=E();return Object(s.useEffect)((function(){function e(){return(e=Object(A.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:a=e.sent,r.setMoviesList(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.searchVal.length>1&&function(t){e.apply(this,arguments)}(r.searchVal)}),[r.searchVal]),Object(z.jsx)("div",{style:{flex:"1",overflow:"hidden auto"},children:Object(z.jsx)("div",{className:"mov-container",children:r.favoritesFlag?(null===r||void 0===r||null===(e=r.favoriteMovies)||void 0===e?void 0:e.length)?null===r||void 0===r?void 0:r.favoriteMovies.map((function(e,t){return Object(z.jsx)(he,{card:e},t)})):"No favorites yet":(null===r||void 0===r||null===(t=r.moviesData)||void 0===t||null===(a=t.results)||void 0===a?void 0:a.length)?null===r||void 0===r||null===(n=r.moviesData)||void 0===n?void 0:n.results.map((function(e,t){return Object(z.jsx)(he,{card:e},t)})):"Search for movies"})})}a(161);var fe=function(){return Object(z.jsxs)(L,{children:[Object(z.jsx)(T,{}),Object(z.jsx)(j.a,{sx:{display:"flex",justifyContent:"center"},children:Object(z.jsx)("h1",{style:{margin:"1rem 0 0.25rem 0",color:"rgb(117, 16, 247)"},children:"Movies List"})}),Object(z.jsx)("hr",{style:{width:"2%",border:"1px solid rgb(117 16 247 / 70%)"}}),Object(z.jsx)(ve,{})]})};r.a.render(Object(z.jsx)(fe,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.3abe6f0e.chunk.js.map