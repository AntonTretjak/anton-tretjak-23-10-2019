(this["webpackJsonpanton-tretjak-22-10-2019"]=this["webpackJsonpanton-tretjak-22-10-2019"]||[]).push([[0],{44:function(e,t,r){e.exports=r(81)},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},61:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(16),i=r.n(c),s=r(84),o=r(11),u=(r(54),r(87)),l=r(86),p=(r(55),r(83)),f=(r(56),Object(o.b)((function(e){return{isError:e.favoritesCitiesData.error||e.forecastData.error||e.favoritesCitiesData.error}}),null)((function(e){return n.a.createElement("div",{className:"main-header"},e.isError&&n.a.createElement("span",{className:"error"},"Error"),n.a.createElement("div",{className:"main-header__logo"},n.a.createElement("span",null,"Herolo Weather Task")),n.a.createElement("div",{className:"main-header__nav"},n.a.createElement(p.a,{to:"/"},"Home"),n.a.createElement(p.a,{to:"/favorites"},"Favorites")))}))),v=r(42),y=(r(57),function(e){var t=e.searchResults,r=e.error,a=e.search,c=e.select,i=n.a.useState(""),s=Object(v.a)(i,2),o=s[0],u=s[1],l=r?n.a.createElement("div",{className:"search-app__option search-app__option_error"},r):t.map((function(e){return n.a.createElement("div",{onClick:function(){return c(e.Key,e.LocalizedName)},key:e.Key,className:"search-app__option"},e.LocalizedName)}));return n.a.createElement("div",{className:"search-app"},n.a.createElement("div",{className:"search-app__wrapper"},n.a.createElement("input",{value:o,onChange:function(e){u(e.target.value)},className:"search-app__input"}),n.a.createElement("div",{className:"search-app__icon",onClick:function(){return a(o)}},n.a.createElement("i",{className:"material-icons"},"search"))),n.a.createElement("div",{className:"search-app__results"},l))}),d="SEARCH",m=d+"_SUCCESS",h=d+"_FAIL",b=d+"_SELECT";function O(e){return{type:h,payload:{isLoading:!1,searchResults:[],error:e}}}function j(e){return{type:b,payload:{selectedKey:e.key,selectedCity:e.city,isLoading:!1,searchResults:[],error:""}}}var g=Object(o.b)((function(e){return{error:e.search.error,searchResults:e.search.searchResults}}),(function(e){return{search:function(t){e(function(e){return{type:d,payload:{searchString:e,isLoading:!0,error:""}}}(t))},select:function(t,r){e(j({key:t,city:r}))}}}))(y),E=r(13),w=r(18),k=r(19),x=r(23),_=r(20),C=r(24),S=r(40),D=r.n(S),P=(r(59),function(e){var t=e.topText,r=e.middleText,a=e.additionalText;return n.a.createElement("div",{className:"card"},n.a.createElement("span",{className:"card_top"},t),n.a.createElement("span",{className:"card_middle"},r),a&&n.a.createElement("span",{className:"card_additional"},a))});r(60);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach((function(t){Object(E.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){function t(){var e,r;Object(w.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(x.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(n)))).state={favorites:JSON.parse(localStorage.getItem("favorites"))||{}},r}return Object(C.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.cityKey)}},{key:"componentWillUnmount",value:function(){localStorage.setItem("favorites",JSON.stringify(this.state.favorites))}},{key:"setToFavorite",value:function(e,t){var r=this;this.state.favorites[e],this.setState({favorites:T({},this.state.favorites,Object(E.a)({},e,this.state.favorites[e]?void 0:t))},(function(){localStorage.setItem("favorites",JSON.stringify(r.state.favorites))}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.city,a=t.temperature,c=t.weeklyForecast,i=t.currentStatus,s=t.cityKey,o=function(e){var t=e.Temperature.Maximum;return t?t.Value+t.Unit:"- -"},u=c&&c.map((function(e,t){return n.a.createElement(P,{key:t,topText:D()(e.Date).format("ddd"),middleText:o(e)})}));return n.a.createElement("div",{className:"city-weather"},n.a.createElement("div",{className:"city-weather__current"},n.a.createElement("div",{className:"city-weather__info"},n.a.createElement("div",{className:"city-weather__city-icon"}),n.a.createElement("div",{className:"city-weather__city-info"},n.a.createElement("span",null,r),n.a.createElement("span",null,a))),n.a.createElement("div",{className:"city-weather__favorite ".concat(this.state.favorites[s]?"city-weather__favorite_selected":""),onClick:function(){return e.setToFavorite(s,r)}},n.a.createElement("span",null,"Favorites"))),n.a.createElement("div",{className:"city-weather__status"},i),n.a.createElement("div",{className:"city-weather__forecast"},u))}}]),t}(n.a.Component),K="WEATHER",A=K+"_SUCCESS",F=K+"_FAIL";function R(e){return{type:K,key:e,payload:{isLoading:!0,error:""}}}function I(e){return{type:F,payload:{isLoading:!1,error:e}}}var U="FORECAST",M=U+"_SUCCESS",H=U+"_FAIL";function J(e){return{type:H,payload:{isLoading:!1,error:e}}}var V=Object(o.b)((function(e){var t=e.favoritesCitiesData.favoritesCities[e.search.selectedKey]?e.favoritesCitiesData.favoritesCities[e.search.selectedKey].Temperature[e.favoritesCitiesData.metric]:{Value:"-",Unit:"-"},r=t.Value+t.Unit;return{city:e.search.selectedCity,cityKey:e.search.selectedKey,temperature:r,currentStatus:e.favoritesCitiesData.favoritesCities[e.search.selectedKey]?e.favoritesCitiesData.favoritesCities[e.search.selectedKey].WeatherText:"-",weeklyForecast:e.forecastData.data}}),(function(e){return{getData:function(t){e(R(t)),e({type:U,payload:{isLoading:!0,error:""}})}}}))(L),W=function(){return a.createElement("div",null,a.createElement(g,null),a.createElement(V,null))},z=r(85),q=(r(61),function(e){function t(){var e,r;Object(w.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(x.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(n)))).state={favorites:JSON.parse(localStorage.getItem("favorites"))||{},redirect:!1},r.navigateToHome=function(e,t){r.props.selectCity(e,t),r.setState({redirect:!0})},r}return Object(C.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object.keys(this.state.favorites);t.length&&t.forEach((function(t){e.props.getData(t)}))}},{key:"render",value:function(){var e=this;if(this.state.redirect)return n.a.createElement(z.a,{to:"/"});var t=this.props.cities,r=Object.keys(this.state.favorites)&&Object.keys(this.state.favorites).map((function(r){var a=t[r],c=a&&a.Temperature.Metric.Value?a.Temperature.Metric.Value+a.Temperature.Metric.Unit:"- -";return n.a.createElement("div",{key:r,onClick:function(){return e.navigateToHome(r,e.state.favorites[r])}},n.a.createElement(P,{topText:e.state.favorites[r],middleText:c,additionalText:a&&a.WeatherText}))}));return n.a.createElement("div",{className:"city-weather"},n.a.createElement("div",{className:"city-weather__forecast"},r))}}]),t}(n.a.Component)),G=Object(o.b)((function(e){return{cities:e.favoritesCitiesData.favoritesCities}}),(function(e){return{getData:function(t){e(R(t))},selectCity:function(t,r){e(j({key:t,city:r}))}}}))(q),B=function(e){return a.createElement(G,null)},Z=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(u.a,null,n.a.createElement(l.a,{exact:!0,path:"/",component:W}),n.a.createElement(l.a,{exact:!0,path:"/favorites",component:B})))},Q=r(12),X=r(43);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(r,!0).forEach((function(t){Object(E.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee={isLoading:!1,searchString:"",searchResults:[],error:"",selectedKey:"215854",selectedCity:"Tel Aviv"};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(r,!0).forEach((function(t){Object(E.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={isLoading:!1,favoritesCities:{},error:"",metric:"Metric"};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(r,!0).forEach((function(t){Object(E.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie={isLoading:!1,data:[],error:""};var se=Object(Q.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case m:case h:case b:return $({},e,{},t.payload);default:return $({},e)}},favoritesCitiesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:case F:return re({},e,{},t.payload);case A:var r=re({},e.favoritesCities,Object(E.a)({},t.payload.key,t.payload.data));return re({},e,{error:t.payload.error,isLoading:t.payload.isLoading,favoritesCities:r});default:return re({},e)}},forecastData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:case H:case M:return ce({},e,{},t.payload);default:return ce({},e)}}}),oe=r(6),ue=r.n(oe),le=r(5),pe=r(29),fe=r(41);function ve(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(pe.a)(ue.a.mark((function e(t,r){var a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.request(r),e.next=3,a;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=r.n(fe).a.create();function me(e){return he.apply(this,arguments)}function he(){return(he=Object(pe.a)(ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(de,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be="1ON1wZSnkAvb6KTCKqPLRuSpc9Izsmzg";function Oe(e){return new Promise((function(t,r){me({url:"http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(be,"&q=").concat(e),method:"GET",headers:{"content-type":"application/json"}}).then((function(e){t(e)}),(function(e){r(e)}))}))}function je(e){return new Promise((function(t,r){me({url:"http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(be),method:"GET",headers:{"content-type":"application/json"}}).then((function(e){t(e)}),(function(e){r(e)}))}))}function ge(e){return new Promise((function(t,r){me({url:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(be,"&metric=true"),method:"GET",headers:{"content-type":"application/json"}}).then((function(e){t(e)}),(function(e){r(e)}))}))}var Ee=ue.a.mark(xe),we=ue.a.mark(_e),ke=ue.a.mark(Ce);function xe(e){var t;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(le.b)(Oe,e.payload.searchString);case 3:if(200!==(t=r.sent).status){r.next=7;break}return r.next=7,Object(le.e)((a=t.data,{type:m,payload:{isLoading:!1,searchResults:a,searchString:"",error:""}}));case 7:r.next=17;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,Object(le.e)(O(r.t0.name));case 13:return r.next=15,Object(le.c)(3e3);case 15:return r.next=17,Object(le.e)(O(""));case 17:case"end":return r.stop()}var a}),Ee,null,[[0,9]])}function _e(e){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(le.e)(R(e.payload.key||e.payload.selectedKey));case 2:case"end":return t.stop()}}),we)}function Ce(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.g)(d,xe);case 2:return e.next=4,Object(le.g)(b,_e);case 4:case"end":return e.stop()}}),ke)}var Se=ue.a.mark(Pe),De=ue.a.mark(Ne);function Pe(e){var t,r;return ue.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(le.f)((function(e){return e.favoritesCitiesData.favoritesCities}));case 3:if(t=a.sent,-1!==Object.keys(t).indexOf(e.key)){a.next=12;break}return a.next=8,Object(le.b)(je,e.key);case 8:if(200!==(r=a.sent).status){a.next=12;break}return a.next=12,Object(le.e)((n={data:r.data[0],key:e.key},{type:A,payload:{isLoading:!1,data:n.data,key:n.key,error:""}}));case 12:a.next=22;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(le.e)(I(a.t0.name));case 18:return a.next=20,Object(le.c)(3e3);case 20:return a.next=22,Object(le.e)(I(""));case 22:case"end":return a.stop()}var n}),Se,null,[[0,14]])}function Ne(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.g)(K,Pe);case 2:case"end":return e.stop()}}),De)}var Te=ue.a.mark(Ke),Le=ue.a.mark(Ae);function Ke(){var e,t;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(le.f)((function(e){return e.search.selectedKey}));case 3:return e=r.sent,r.next=6,Object(le.b)(ge,e);case 6:if(200!==(t=r.sent).status){r.next=10;break}return r.next=10,Object(le.e)((a=t.data.DailyForecasts,{type:M,payload:{isLoading:!1,data:a,error:""}}));case 10:r.next=20;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(le.e)(J(r.t0.name));case 16:return r.next=18,Object(le.c)(3e3);case 18:return r.next=20,Object(le.e)(J(""));case 20:case"end":return r.stop()}var a}),Te,null,[[0,12]])}function Ae(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.h)(U,Ke);case 2:return e.next=4,Object(le.h)(b,Ke);case 4:case"end":return e.stop()}}),Le)}var Fe=ue.a.mark(Re);function Re(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.d)(Ce),Object(le.d)(Ne),Object(le.d)(Ae)]);case 2:case"end":return e.stop()}}),Fe)}var Ie=function(){var e=Object(X.a)(),t=[e],r=Q.d.apply(void 0,[Q.a.apply(void 0,t)].concat([])),a=Object(Q.e)(se,{},r);return e.run(Re),{store:a}}().store,Ue=n.a.createElement(o.a,{store:Ie},n.a.createElement(s.a,null,n.a.createElement(Z,null))),Me=document.getElementById("root");i.a.render(Ue,Me)}},[[44,1,2]]]);
//# sourceMappingURL=main.1a6bb3d4.chunk.js.map