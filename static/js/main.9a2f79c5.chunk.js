(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),l=n(1),s=(n(9),n(10),function(e){var t=e.monster;return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,t.name),a.a.createElement("p",null,t.email))}),u=function(e){var t=e.monsters;return a.a.createElement("div",{className:"card-list"},t.map((function(e){return a.a.createElement(s,{key:e.id,monster:e})})))},i=(n(11),n(12),function(e){var t=e.searchField,n=e.onChangeSearch,r=e.placeholder;return a.a.createElement("input",{className:"search",type:"search",placeholder:r,value:t,onChange:n})}),m=(n(13),function(){return a.a.createElement("p",{className:"footer-text"},"Created by"," ",a.a.createElement("a",{href:"https://www.linkedin.com/in/alejandrrhernandez/",target:"_blank",rel:"noopener noreferrer"},"Alejandro Exequiel Hern\xe1ndez Lara")," - ",a.a.createElement("a",{href:"https://github.com/Alejandrehl/monster-rolodex",target:"_blank",rel:"noopener noreferrer"},"Github Repository"))}),h=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),h=s[0],d=s[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return alert(e.message)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(i,{searchField:h,onChangeSearch:function(e){return d(e.target.value)},placeholder:"Search monster"}),a.a.createElement(u,{monsters:f}),a.a.createElement(m,null))};n(14);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.9a2f79c5.chunk.js.map