(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=a(36),i=a(2),o=a.n(i),u=a(6),m=a(7),p=a(8),h=a(10),d=a(9),v=a(11),f=a(38),g=a(19),b=a(37),E=(a(28),a(15)),y=a(35),w=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(E.a,{to:"/",className:"navbar-brand"},r.a.createElement("h1",null,"Star DB")),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.a,{to:"/people",className:"nav-link link"},"People")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.a,{to:"/planets",className:"nav-link link"},"Planets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.a,{to:"/starships",className:"nav-link link"},"Starships"))))},N="https://swapi.co/api",k="https://starwars-visualguide.com/assets/img";function x(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark(function e(t){var a,n,r=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:"",e.prev=1,e.next=4,fetch("".concat(N).concat(t).concat(a));case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function O(e){return e.match(/\/([0-9]*)\/$/)[1]}function C(e,t){switch(e){case"/people":return[{label:"",value:t.name},{label:"Birth year",value:t.birth_year},{label:"Gender",value:t.gender},{label:"Birth year",value:t.birth_year}];case"/planets":return[{label:"",value:t.name},{label:"Population",value:t.population},{label:"Diameter",value:t.diameter},{label:"Rotation_period",value:t.rotation_period},{label:"Terrain",value:t.terrain}];case"/starships":return[{label:"",value:t.name},{label:"Model",value:t.model},{label:"Cost",value:t.cost_in_credits},{label:"Length",value:t.length},{label:"Max speed",value:t.max_atmosphering_speed},{label:"Hyperdrive Rating",value:t.hyperdrive_rating},{label:"Starship Class",value:t.starship_class}];default:return[]}}function I(e,t){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(o.a.mark(function e(t,a){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,"/people"===t&&(t="/characters"),e.next=4,fetch("".concat(k).concat(t,"/").concat(a,".jpg"));case 4:return r=e.sent,n=200===r.status?r.url:"https://starwars-visualguide.com/assets/img/big-placeholder.jpg",e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S=function(){return r.a.createElement("div",{className:"d-flex align-items-center text-white"},r.a.createElement("strong",null,"Loading..."),r.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}))},_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={planets:a.props.planets,intervalId:null,randomId:0,imageUrl:""},a.timer=function(){a.getRandomPlanet()},a.getRandomPlanet=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Math.random()*a.state.planets.length),e.next=3,I("/planets",t+2);case 3:n=e.sent,a.setState({randomId:t,imageUrl:n});case 5:case"end":return e.stop()}},e)})),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.timer,2e4);this.getRandomPlanet(),this.setState({intervalId:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.state,t=e.planets,a=e.imageUrl,n=e.randomId;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement(S,null):r.a.createElement("div",{className:"card bg-secondary text-white"},r.a.createElement("div",{className:"row my-row no-gutters"},r.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3"},r.a.createElement("img",{src:a,className:"p-2 card-img ",alt:"..."})),r.a.createElement("div",{className:" col-sm-6 col-md-8 col-lg-9 pl-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},t[n].name),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Population:",t[n].population),r.a.createElement("li",{className:"list-group-item"},"Rotation Period:",t[n].rotation_period),r.a.createElement("li",{className:"list-group-item"},"Diameter: ",t[n].diameter)))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{planets:e.planets}}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],next:"",previous:""},a.handleChangePage=function(e){null!==e&&fetch(e).then(function(e){return e.json()}).then(function(e){return a.setState({data:e.results,next:e.next,previous:e.previous})})},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(this.props.match.path);case 2:t=e.sent,this.setState({data:t.results,next:t.next,previous:t.previous});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.match.path===t.match.path){e.next=5;break}return e.next=3,x(this.props.match.path);case 3:a=e.sent,this.setState({data:a.results,next:a.next,previous:a.previous});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.next,l=t.previous,c=this.props.getInfoCard;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-group pb-3 text-white"},a.map(function(e){return r.a.createElement("li",{key:e.created,onClick:function(){c(e.url)},className:"list-group-item link-info"},e.name)})),r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination "},r.a.createElement("li",{className:null===l?"page-item disabled":"page-item"},r.a.createElement("button",{onClick:function(){return e.handleChangePage(l)},className:"page-link"},"Previous")),r.a.createElement("li",{className:null===n?"page-item disabled":"page-item"},r.a.createElement("button",{onClick:function(){return e.handleChangePage(n)},className:"page-link"},"Next"))))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedItem,a=e.imageUrl;return r.a.createElement("div",{className:"col-md-6"},0===t.length?r.a.createElement("p",{className:"text-monospace text-white"}," ","Choose the item to know more"):r.a.createElement("div",{className:"card bg-secondary text-white "},r.a.createElement("div",{className:"row my-row no-gutters"},r.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3"},r.a.createElement("img",{src:a,className:"card-img ",alt:"..."})),r.a.createElement("div",{className:" col-sm-6 col-md-8 col-lg-9"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},t[0].value),r.a.createElement("ul",{className:"list-group list-group-flush"},t.map(function(e,t){return e.label&&r.a.createElement("li",{key:t,className:"list-group-item"},e.label," : ",e.value)})))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:[],imageUrl:""},a.getInfoCard=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,l,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=O(t),e.next=3,x(a.props.match.url,"/".concat(n,"/"));case 3:return r=e.sent,e.next=6,I(a.props.match.url,n);case 6:l=e.sent,c=C(a.props.match.url,r),a.setState({selectedItem:c,imageUrl:l});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"row my-3"},r.a.createElement(U,{match:e,getInfoCard:this.getInfoCard}),r.a.createElement(D,{selectedItem:this.state.selectedItem,imageUrl:this.state.imageUrl}))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={planets:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/planets");case 2:t=e.sent,this.setState({planets:t.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"container p-3"},r.a.createElement(w,null),r.a.createElement(_,{planets:this.state.planets}),r.a.createElement(f.a,null,["/people","/planets","/starships"].map(function(e,t){return r.a.createElement(g.a,{path:e,render:function(e){return r.a.createElement(M,e)},key:t})}),r.a.createElement(b.a,{from:"/",exact:!0,to:"/people"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32),a(33);c.a.render(r.a.createElement(s.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.7d231e2c.chunk.js.map