(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),o=n(2),l=n(3),i=n.n(l),s="http://localhost:3001/api/persons",m=function(){return i.a.get(s)},f=function(e){return i.a.post(s,e)},d=function(e){return i.a.delete("".concat(s,"/").concat(e))},h=(n(36),function(e){var t=e.phonebook,n=e.search,a=e.Delete;return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{type:"button",value:e,onClick:function(){return a(e)}},"delete"))}))}),b=function(e){var t=e.persons,n=e.setPersons,c=e.setBannerMessage,u=Object(a.useState)(""),l=Object(o.a)(u,2),i=l[0],s=l[1],m=Object(a.useState)(""),d=Object(o.a)(m,2),h=d[0],b=d[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:i,number:h};t.map((function(e){return e.name})).includes(a.name)?alert("".concat(i," is already added to phonebook")):f(a).then((function(e){n(t.concat(e.data)),s(""),b(""),c("Added ".concat(i)),setTimeout((function(){c(null)}),5e3)}))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:i,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:h,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var t=e.newSearch,n=e.setNewSearch;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},v=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"banner"},t)},E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),i=l[0],s=l[1],f=Object(a.useState)(null),E=Object(o.a)(f,2),w=E[0],g=E[1];return Object(a.useEffect)((function(){m().then((function(e){c(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:w}),r.a.createElement(p,{newSearch:i,setNewSearch:s}),r.a.createElement("h3",null,"add a new"),r.a.createElement(b,{persons:n,setPersons:c,setBannerMessage:g}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(h,{phonebook:n,search:i,Delete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&d(e.id).then((function(t){c(n.filter((function(t){return t.id!==e.id})))})).catch((function(t){alert("the name ".concat(e.name," was already deleted from the server")),c(n.filter((function(t){return t.id!==e.id})))}))}}))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.56810ddf.chunk.js.map