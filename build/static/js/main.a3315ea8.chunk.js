(this.webpackJsonphomework3=this.webpackJsonphomework3||[]).push([[0],{39:function(e,t,n){e.exports=n(70)},48:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),u=n(8),l=n(13),s=n(2),i=n(37),d=n(18);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={notes:[],newNote:"",actionType:"Add",_id:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST_NOTES":return p({},e,{notes:t.notes});case"SET_ACTION_TYPE":return p({},e,{actionType:t.actionType});case"DELETE_NOTE":return p({},e,{notes:e.notes.filter((function(e){return e._id!==t.id}))});case"SET_NEW_NOTE":return p({},e,{newNote:t.newNote});case"SET_ID":return p({},e,{_id:t._id});default:return e}};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={username:"",password:"",isLoggedIn:!1,activeUsers:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_USERS":return v({},e,{activeUsers:t.activeUsers});case"SET_IS_LOGGED_IN":return v({},e,{isLoggedIn:t.isLoggedIn});case"SET_USERNAME":return v({},e,{username:t.username});case"SET_PASSWORD":return v({},e,{password:t.password});default:return e}},b=Object(l.c)({notesReducer:g,userReducer:h}),O=(n(48),function(e){return{type:"SET_USERNAME",username:e}}),y=function(e){return{type:"SET_IS_LOGGED_IN",isLoggedIn:e}},_=function(e){return{type:"SET_PASSWORD",password:e}},T=function(e){return{type:"SET_ACTIVE_USERS",activeUsers:e}},S=Object(s.b)((function(e){return{username:e.userReducer.username,isLoggedIn:e.userReducer.isLoggedIn,activeUsers:e.userReducer.activeUsers}}))((function(e){var t=e.dispatch,n=e.username,r=e.isLoggedIn,o=e.activeUsers;return a.a.createElement("div",null,a.a.createElement("nav",null,a.a.createElement("ul",{className:"nav-links"},a.a.createElement(u.b,{to:"/"},a.a.createElement("li",null,"Home")),a.a.createElement("span",null,"Note Taking App"),a.a.createElement(u.b,{to:"/viewNotes"},a.a.createElement("li",null,"View All Notes")),r?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Hello, ",n),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){t(y(!1)),t(O("")),t(T(--o)),document.cookie="loggedin=false",document.cookie="activeusers=".concat(o),document.cookie="username="}},"Log out"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(u.b,{to:"/login"},a.a.createElement("li",null,"Login")),a.a.createElement(u.b,{to:"/register"},a.a.createElement("li",null,"Signup"))))))})),N=n(11),k=n.n(N),I=function(){return function(e,t){k.a.get("/notes/allNotes").then((function(t){e(R(t.data))})).then(console.log)}},R=function(e){return{type:"SET_LIST_NOTES",notes:e}},j=function(e){return{type:"SET_ID",_id:e}},L=function(e){return{type:"SET_NEW_NOTE",newNote:e}},P=function(e){return{type:"SET_ACTION_TYPE",actionType:e}},C=Object(s.b)((function(e){return{username:e.userReducer.username,notes:e.notesReducer.notes,actionType:e.notesReducer.actionType,_id:e.notesReducer._id,newNote:e.notesReducer.newNote,isLoggedIn:e.userReducer.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=e.dispatch,r=(e.username,e.notes),o=e.newNote,c=e.actionType,u=e._id;a.a.useEffect((function(){n(I())}),[n]);return a.a.createElement("div",null,!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"You need access to view all notes or add a note. Please log in or Sign up")),a.a.createElement("div",null,a.a.createElement("h1",null,"Make a new note!"),a.a.createElement("input",{onChange:function(e){return n(j(e.target.value))},type:"text",value:u,placeholder:"enter id here"}),a.a.createElement("input",{onChange:function(e){return n(L(e.target.value))},name:"description",placeholder:"enter new note here",value:o,type:"text"}),a.a.createElement("button",{onClick:function(){return"Edit"===c?n((function(e,t){var n=t().notesReducer,r=n._id,a=n.newNote;k.a.get("/notes/update?id=".concat(r,"&newNote=").concat(a)).then((function(){e(P("Add")),e(L("")),e(j("")),e(I())}))})):n((function(e,t){var n=t().notesReducer,r=n.username,a=n.newNote;k.a.get("/notes/addNote?newNote=".concat(a)).then((function(){e(O(r)),e(L("")),e(j("")),e(I())})).catch(console.log)}),window.location.reload())},type:"button"},c," Note")),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"id"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"User"),a.a.createElement("th",null,"Actions")),r.map((function(e){return a.a.createElement("tr",{key:e._id},a.a.createElement("td",{width:"35%"},e._id),a.a.createElement("td",{width:"50%"},e.description),a.a.createElement("td",{width:"10%"}),a.a.createElement("td",{width:"5%"},a.a.createElement("button",{onClick:function(){n(P("Edit")),n(j(e._id)),n(L(e.description))}},"Edit"),a.a.createElement("button",{onClick:function(){n(j(e._id)),n((e._id,function(e,t){var n=t().notesReducer._id;k.a.delete("/notes/deleteNote/".concat(n),{params:{_id:n}}).then((function(t){e({type:"DELETE_NOTE",_id:n}),e(L("")),e(j("")),e(I())})).catch((function(e){console.log(e)}))}))}},"Delete")))})))))})),D=Object(s.b)((function(e){return{username:e.userReducer.username}}))((function(e){var t=e.username;return a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome ",t,"!"),a.a.createElement("p",null,"This is a note taking application for CSC 667 Homework 3"))})),U=n(12),A=n(14),W=n.n(A),x={withCredentials:!0},G=Object(s.b)((function(e){return{username:e.userReducer.username,password:e.userReducer.password,isLoggedIn:e.userReducer.isLoggedIn}}))((function(e){var t=e.dispatch,n=e.username,r=e.password,o=e.isLoggedIn;return a.a.createElement("div",null,o&&a.a.createElement(U.a,{to:"/"}),a.a.createElement("form",null,a.a.createElement("div",null,a.a.createElement("p",null,"Username:"),a.a.createElement("input",{name:"username",type:"text",onChange:function(e){return t(O(e.target.value))}})),a.a.createElement("div",null,a.a.createElement("p",null,"Password"),a.a.createElement("input",{name:"password",type:"text",onChange:function(e){return t(_(e.target.value))}})),a.a.createElement("button",{onClick:function(e){e.preventDefault();var a={username:n,password:W()(r)};k.a.post("/authserver/login",a,x).then((function(e){e.data.valid?(t(y(!0)),t(T(e.data.counter)),document.cookie="username=".concat(n),document.cookie="activeusers=".concat(e.data.counter),document.cookie="password=".concat(W()(r)),document.cookie="loggedin=true"):(t(y(!1)),document.cookie="username=",document.cookie="password=",document.cookie="loggedin=false",console.log("Invalid user credentials")),console.log(e)})).catch(console.log())},type:"button"},"LOGIN")))})),F=Object(s.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn,username:e.userReducer.username,password:e.userReducer.password}}))((function(e){var t=e.dispatch,n=e.username,r=e.password,o=e.isLoggedIn;return a.a.createElement("div",null,o&&a.a.createElement(U.a,{to:"/"}),a.a.createElement("p",null,"Create an account!"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:n,password:W()(r)};k.a.post("/authserver/addUser",a,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){t(y(!0)),document.cookie="username=".concat(n),document.cookie="activeusers=".concat(e.data.counter),document.cookie="password=".concat(W()(r)),document.cookie="loggedin=true"})).catch((function(e){t(y(!1)),document.cookie="username=",document.cookie="password=",document.cookie="loggedin=false",console.log("Invalid user credentials")}))}},a.a.createElement("label",{for:""},"Username:"),a.a.createElement("input",{onChange:function(e){return t(O(e.target.value))},name:"username",type:"text"}),a.a.createElement("br",null),a.a.createElement("label",{for:""},"Password:"),a.a.createElement("input",{onChange:function(e){return t(_(e.target.value))},name:"password",type:"password"}),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"JOIN")))})),H=n(19),J=n.n(H),M=(n(69),Object(s.b)((function(e){return{username:e.userReducer.username,activeUsers:e.userReducer.activeUsers,password:e.userReducer.password}}))((function(e){var t=e.activeUsers;return a.a.createElement("div",null,a.a.createElement("p",null,"Active users: ",t))}))),V=Object(s.b)((function(e){return{username:e.userReducer.username,isLoggedIn:e.userReducer.isLoggedIn}}))((function(e){var t=e.dispatch;e.isLoggedIn,e.username;return a.a.useEffect((function(){var e=J.a.load("username"),n="true"===J.a.load("loggedin"),r=Number(J.a.load("activeusers"));t(y(n)),t(O(e)),t(T(r))}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement(M,null),a.a.createElement(S,null),a.a.createElement(U.d,null,a.a.createElement(U.b,{path:"/viewNotes",component:C}),a.a.createElement(U.b,{path:"/login",component:G}),a.a.createElement(U.b,{path:"/register",component:F}),a.a.createElement(U.b,{path:"/",component:D})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=Object(l.d)(b,Object(l.a)(i.a));c.a.render(a.a.createElement(s.a,{store:Y},a.a.createElement(u.a,null,a.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a3315ea8.chunk.js.map