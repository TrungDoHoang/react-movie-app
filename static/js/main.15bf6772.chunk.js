(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(31),s=c.n(a),i=c(5),o=(c(39),c(40),c(41),c(42),c.p+"static/media/tmovie.67797e94.png"),l=c.p+"static/media/footer-bg.67e95f05.jpg",j=c(0);var u=function(){return Object(j.jsx)("footer",{className:"footer",style:{backgroundImage:"url(".concat(l,")")},children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)("div",{className:"footer__content__logo",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:o,alt:"Logo"}),Object(j.jsx)(i.b,{to:"/",children:"tMovie"})]})}),Object(j.jsxs)("div",{className:"footer__content__menus",children:[Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"/",children:"Contact us"}),Object(j.jsx)(i.b,{to:"/",children:"Term of Services"}),Object(j.jsx)(i.b,{to:"/",children:"About us"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(i.b,{to:"/",children:"Live"}),Object(j.jsx)(i.b,{to:"/",children:"FAQ"}),Object(j.jsx)(i.b,{to:"/",children:"Premium"}),Object(j.jsx)(i.b,{to:"/",children:"Privacy policy"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(i.b,{to:"/",children:"You must watch"}),Object(j.jsx)(i.b,{to:"/",children:"Recent releases"}),Object(j.jsx)(i.b,{to:"/",children:"Top IMDB"})]})]})]})})},d=c(4);c(44);var b=function(){var e=Object(n.useRef)([{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}]).current,t=Object(d.e)().pathname,c=Object(n.useRef)(),r=e.findIndex((function(e){return e.path===t}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?c.current.classList.add("shrink"):c.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(j.jsx)("div",{ref:c,className:"header",children:Object(j.jsxs)("div",{className:"header__wrap container",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:o,alt:"Logo"}),Object(j.jsx)(i.b,{to:"/",children:"tMovie"})]}),Object(j.jsx)("ul",{className:"header__nav",children:e.map((function(e,t){return Object(j.jsx)("li",{className:t===r?"active":"",children:Object(j.jsx)(i.b,{to:e.path,children:e.display})},t)}))})]})})},m=c(6),h=c.n(m),O=c(9),v=c(21),p=c(32),x=c.n(p),f=c(33),g=c.n(f),_={baseUrl:"https://api.themoviedb.org/3/",apiKey:"36fee2f91710b77ac11bababdff28d11",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},y=x.a.create({baseURL:_.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return g.a.stringify(Object(v.a)(Object(v.a)({},e),{},{api_key:_.apiKey}))}});y.interceptors.request.use(function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var N=y,k={movie:"movie",tv:"tv"},w={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},C={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},L={getMovieList:function(e,t){var c="movie/"+w[e];return N.get(c,t)},getTvList:function(e,t){var c="tv/"+C[e];return N.get(c,t)},getVideos:function(e,t){var c=k[e]+"/"+t+"/videos";return N.get(c,{params:{}})},search:function(e,t){var c="search/"+k[e];return N.get(c,t)},detail:function(e,t,c){var n=k[e]+"/"+t;return N.get(n,c)},credits:function(e,t){var c=k[e]+"/"+t+"/credits";return N.get(c,{params:{}})},similar:function(e,t){var c=k[e]+"/"+t+"/similar";return N.get(c,{params:{}})}},S=c(20),T=c(8);c(78);function I(e){return Object(j.jsx)("button",{className:"btn ".concat(e.className||""),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}function E(e){return Object(j.jsx)(I,{className:"btn-outline ".concat(e.className||""),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}var M=I,V=(c(79),function(e){var t=e.item,c="/"+k[e.category]+"/"+t.id,n=_.w500Image(t.poster_path||t.backdrop_path);return Object(j.jsxs)(i.b,{to:c,children:[Object(j.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(j.jsx)(M,{children:Object(j.jsx)("i",{className:"bx bx-play"})})}),Object(j.jsx)("h3",{children:t.title||t.name})]})}),R=(c(80),function(e){return Object(j.jsx)("input",{className:e.className,value:e.value,type:e.type,placeholder:e.placeholder,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),F=(c(81),function(e){var t=Object(d.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),r=Object(T.a)(c,2),a=r[0],s=r[1],i=Object(n.useCallback)((function(){a.trim().length>0&&t("/".concat(k[e.category],"/search/").concat(a))}),[a,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[a,i]),Object(j.jsxs)("div",{className:"movie-search",children:[Object(j.jsx)(R,{type:"text",placeholder:"Enter key word",value:a,onChange:function(e){s(e.target.value)}}),Object(j.jsx)(M,{className:"small",onClick:i,children:Object(j.jsx)("i",{className:"bx bx-search"})})]})}),q=(c(82),function(e){var t=Object(n.useState)([]),c=Object(T.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(1),i=Object(T.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(0),b=Object(T.a)(u,2),m=b[0],v=b[1],p=Object(d.g)().keyword;Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function t(){var c,n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===k.movie?6:10;break;case 6:return t.next=8,L.getMovieList(w.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,L.getTvList(C.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:p},t.next=18,L.search(e.category,{params:r});case 18:c=t.sent;case 19:console.log(c),a(c.results),v(c.total_pages);case 22:case"end":return t.stop()}}),t)})))()}),[e.category,p]);var x=function(){var t=Object(O.a)(h.a.mark((function t(){var c,n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===k.movie?6:10;break;case 6:return t.next=8,L.getMovieList(w.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,L.getTvList(C.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return s={query:p,page:o+1},t.next=18,L.search(e.category,{params:s});case 18:c=t.sent;case 19:a([].concat(Object(S.a)(r),Object(S.a)(c.results))),l(c.page);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(F,{category:e.category,keyword:p})}),Object(j.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(j.jsx)(V,{item:t,category:e.category},c)}))}),o<m?Object(j.jsx)("div",{className:"movie-grid__load-more",children:Object(j.jsx)(E,{className:"small",onClick:x,children:"Load More"})}):null]})}),A=(c(83),function(e){return Object(j.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(l,")")},children:e.children})});var B=function(){var e=Object(d.g)().category;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{children:e===k.movie?"Movie":"Series TV"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(q,{category:e})})})]})},P=function(e){var t=Object(d.g)().category,c=Object(n.useState)([]),r=Object(T.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function c(){var n;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,L.credits(t,e.id);case 2:n=c.sent,s(n.cast.slice(0,5));case 4:case"end":return c.stop()}}),c)})))()}),[t,e.id]),Object(j.jsx)("div",{className:"casts",children:a.map((function(e,t){return Object(j.jsxs)("div",{className:"casts__item",children:[Object(j.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(_.w500Image(e.profile_path),")")}}),Object(j.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})},H=function(e){var t=e.item,c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(j.jsxs)("div",{className:"video",children:[Object(j.jsx)("div",{className:"video__title",children:Object(j.jsx)("h2",{children:t.name})}),Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),width:"100%",title:"video",ref:c})]})},U=function(e){var t=Object(d.g)().category,c=Object(n.useState)([]),r=Object(T.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function c(){var n;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,L.getVideos(t,e.id);case 2:n=c.sent,s(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})))()}),[t,e.id]),Object(j.jsx)(j.Fragment,{children:a.map((function(e,t){return Object(j.jsx)(H,{item:e},t)}))})},W=c(92),D=c(89);c(84);var J=function(e){var t=Object(n.useState)([]),c=Object(T.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===k.movie?6:10;break;case 6:return t.next=8,L.getMovieList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,L.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,L.similar(e.category,e.id);case 17:c=t.sent;case 18:a(c.results);case 19:case"end":return t.stop()}}),t)})))()}),[]),Object(j.jsx)("div",{className:"movie-list",children:Object(j.jsx)(W.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(j.jsx)(D.a,{children:Object(j.jsx)(V,{item:t,category:e.category})},c)}))})})};c(85);var K=function(){var e=Object(d.g)(),t=e.id,c=e.category,r=Object(n.useState)(null),a=Object(T.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function e(){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,L.detail(c,t,{params:n});case 3:r=e.sent,i(r),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})))()}),[c,t]),Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(_.originalImage(s.backdrop_path||s.poster_path),")")}}),Object(j.jsxs)("div",{className:"movie-content container mb-3",children:[Object(j.jsx)("div",{className:"movie-content__poster",children:Object(j.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(_.originalImage(s.poster_path||s.backdrop_path),")")}})}),Object(j.jsxs)("div",{className:"movie-content__info",children:[Object(j.jsx)("div",{className:"title",children:s.title||s.name}),Object(j.jsx)("div",{className:"genres",children:s.genres&&s.genres.slice(0,5).map((function(e,t){return Object(j.jsx)("span",{children:e.name},t)}))}),Object(j.jsx)("p",{className:"overview",children:s.overview}),Object(j.jsxs)("div",{className:"cast",children:[Object(j.jsx)("div",{className:"section__header",children:Object(j.jsx)("h2",{children:"Casts"})}),Object(j.jsx)(P,{id:s.id})]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(U,{id:s.id})}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsx)("div",{className:"section__header mb-2",children:Object(j.jsx)("h2",{children:"Similar"})}),Object(j.jsx)(J,{category:c,type:"similar",id:s.id})]})]})]})})},z=c(91),Q=c(90);var Y=function(e){var t=Object(d.f)(),c=e.item,n=_.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal__".concat(c.id)),e.next=3,L.getVideos(k.movie,c.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(j.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(j.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(j.jsx)("h2",{className:"title",children:c.title}),Object(j.jsx)("div",{className:"overview",children:c.overview}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(M,{onClick:function(){t("/movie/"+c.id)},children:"Watch Now"}),Object(j.jsx)(E,{onClick:r,children:"Watch trailer"})]})]}),Object(j.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(j.jsx)("img",{src:_.w500Image(c.poster_path),alt:""})})]})})};c(86),c(87);var G=function(e){var t=Object(n.useRef)(null);return Object(j.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(j.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(j.jsx)("i",{className:"bx bx-x"})})]})},X=function(e){var t=Object(n.useState)(!1),c=Object(T.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){a(e.active)}),[e.active]),Object(j.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})};function Z(e){var t=e.item,c=Object(n.useRef)();return Object(j.jsx)(X,{active:!1,id:"modal__".concat(t.id),children:Object(j.jsx)(G,{onClose:function(){return c.current.setAttribute("src","")},children:Object(j.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})}var $=function(){var e=Object(n.useState)([]),t=Object(T.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){Object(O.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,L.getMovieList(w.popular,{params:t});case 4:c=e.sent,r(c.results.slice(0,4)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error loading data hero-slide");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}),[]),z.a.use([Q.a]),Object(j.jsxs)("div",{className:"hero-slide",children:[Object(j.jsx)(W.a,{modules:Q.a,spaceBetween:0,slidesPerView:1,grabCursor:!0,autoplay:{delay:4e3},children:c.map((function(e,t){return Object(j.jsx)(D.a,{children:function(t){var c=t.isActive;return Object(j.jsx)(Y,{item:e,className:c?"active":""})}},t)}))}),c.map((function(e,t){return Object(j.jsx)(Z,{item:e},t)}))]})};var ee=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)($,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section mb3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Trending Movies"}),Object(j.jsx)(i.b,{to:"/movie",children:Object(j.jsx)(E,{className:"small",children:"View more"})})]}),Object(j.jsx)(J,{category:k.movie,type:w.popular})]}),Object(j.jsxs)("div",{className:"section mb3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Top Rated Movies"}),Object(j.jsx)(i.b,{to:"/movie",children:Object(j.jsx)(E,{className:"small",children:"View more"})})]}),Object(j.jsx)(J,{category:k.movie,type:w.top_rated})]}),Object(j.jsxs)("div",{className:"section mb3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Trending TV"}),Object(j.jsx)(i.b,{to:"/movie",children:Object(j.jsx)(E,{className:"small",children:"View more"})})]}),Object(j.jsx)(J,{category:k.tv,type:C.popular})]}),Object(j.jsxs)("div",{className:"section mb3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Top Rated TV"}),Object(j.jsx)(i.b,{to:"/movie",children:Object(j.jsx)(E,{className:"small",children:"View more"})})]}),Object(j.jsx)(J,{category:k.tv,type:C.top_rated})]})]})]})};var te=function(){return Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/:category/:id",element:Object(j.jsx)(K,{})}),Object(j.jsx)(d.a,{path:"/:category/search/:keyword",element:Object(j.jsx)(B,{})}),Object(j.jsx)(d.a,{path:"/:category/",element:Object(j.jsx)(B,{})}),Object(j.jsx)(d.a,{path:"/",element:Object(j.jsx)(ee,{})})]})};var ce=function(){return document.title="tMovie",Object(j.jsxs)(i.a,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(te,{}),Object(j.jsx)(u,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ce,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.15bf6772.chunk.js.map