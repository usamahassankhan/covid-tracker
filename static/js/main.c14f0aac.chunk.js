(this["webpackJsonpfirst-day"]=this["webpackJsonpfirst-day"]||[]).push([[0],{14:function(e,t,a){e.exports={Container:"Cards_Container__26V6b",card:"Cards_card__1cfxt",infacted:"Cards_infacted__3vB5a",recovered:"Cards_recovered__1lIrU",deaths:"Cards_deaths__2e4MB"}},207:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a(71),o=a.n(c),s=a(6),i=a.n(s),u=a(11),d=a(72),l=a(73),f=a(81),j=a(80),p=a(225),h=a(229),b=a(226),v=a(227),x=a(14),m=a.n(x),O=a(31),g=a.n(O),y=a(32),C=a.n(y),_=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(n.jsx)("div",{className:m.a.Container,children:Object(n.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.infacted),children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(v.a,{color:" textSecondary",gutterBottm:!0,children:"Infacted "}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:a.value,duration:15.5,seperator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of active cases of Covid -19"})]})}),Object(n.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.recovered),children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(v.a,{color:"textSecondary",gutterBottm:!0,children:"Recovered "}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:r.value,duration:15.5,seperator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of Recovered cases from Covid -19"})]})}),Object(n.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.deaths),children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(v.a,{color:"textSecondary",gutterBottm:!0,children:"Death"}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:c.value,duration:15.5,seperator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of death cases of Covid -19"})]})})]})}):"loading... "},w=a(30),k=a(33),S=a.n(k),D="https://covid19.mathdro.id/api",N=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log("error");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(78),E=a.n(A),U=a(45),R=function(e){var t=e.data,a=e.country,c=Object(r.useState)([]),o=Object(w.a)(c,2),s=o[0],d=o[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(s),e()}),[]);var l=s.length?Object(n.jsx)(U.Line,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infacted",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,f=t.confirmed?Object(n.jsx)(U.Bar,{data:{labels:["infacted","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!0,text:"current state in ".concat(a)}}}):null;return Object(n.jsx)("div",{className:E.a.container,children:a?f:l})},V=a(79),J=a.n(V),M=a(230),P=a(228),F=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(o),Object(n.jsx)(M.a,{className:J.a.formControler,children:Object(n.jsxs)(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"global",children:"Global"}),o.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})},G=a(46),L=a.n(G),Q=a.p+"static/media/image.9e5d4fc7.png",Z=function(e){Object(f.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:L.a.Container,children:[Object(n.jsx)("img",{className:L.a.image,src:Q,alt:"COVID-19"}),Object(n.jsx)(_,{data:t}),Object(n.jsx)(F,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(R,{data:t,country:a})]})}}]),a}(r.Component);o.a.render(Object(n.jsx)(Z,{}),document.getElementById("root"))},46:function(e,t,a){e.exports={Container:"App_Container__QPfv-",image:"App_image__3EZA4"}},78:function(e,t,a){e.exports={container:"Chart_container___Fwya"}},79:function(e,t,a){}},[[207,1,2]]]);
//# sourceMappingURL=main.c14f0aac.chunk.js.map