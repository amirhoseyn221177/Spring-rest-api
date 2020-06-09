(this["webpackJsonpspring-react"]=this["webpackJsonpspring-react"]||[]).push([[0],{43:function(e,t,a){e.exports=a(77)},48:function(e,t,a){},49:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a.n(c),l=(a(48),a(49),a(30),a(3)),s=a(7),i=function(e){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(l.b,{className:"btn btn-lg btn-primary mr-2",to:"/register"},"Sign Up"),n.a.createElement(l.b,{className:"btn btn-lg btn-secondary mr-2",to:"/login"},"Login"))))))},u=a(1),m=a(6),p=a(2),d=a.n(p),f=a(8),b=a(10),v=a.n(b),E=function(e){e?v.a.defaults.headers.common.Authorization=e:delete v.a.defaults.headers.common.Authorization},h=a(19),j=a.n(h),g=function(){return{type:"response"}},N=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var r,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/backlog/".concat(e));case 3:return r=t.sent,t.next=6,r.data;case 6:n=t.sent,a({type:"tasks",tasks:n}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data),a({type:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return{type:"tokenRecieved",token:e}},y=function(e){return{type:"errorForAuth",resp:e}},k=function(){return localStorage.removeItem("jwt"),E(!1),{type:"logout"}},x=a(4),w=a.n(x),S=Object(m.b)((function(e){return{error:e.auth.error}}),(function(e){return{sendingAuthToBack:function(t){return e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/users/register",e);case 3:return r=t.sent,t.next=6,r.data;case 6:t.sent,a(y(!1)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data),a(y(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(s.f)((function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(r.useState)(""),d=Object(u.a)(p,2),f=d[0],b=d[1],v=Object(r.useState)(""),E=Object(u.a)(v,2),h=E[0],j=E[1],g=Object(r.useState)(!1),N=Object(u.a)(g,2),O=N[0],y=N[1],k=Object(r.useRef)(!0);Object(r.useEffect)((function(){k.current?k.current=!1:!1===e.error&&e.history.push("/login")}),[e.error]);var x,S=function(e,t){t(e.target.value)};e.error&&(x=Object.values(e.error).map((function(e){return n.a.createElement("p",{key:e,style:{position:"relative",left:"254px",color:"red"}},e)})));return n.a.createElement(r.Fragment,null,n.a.createElement("div",{style:{position:"relative",top:"100px"},className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),O&&f!==h?n.a.createElement("p",{style:{position:"relative",color:"red",left:"216px"}},"Please make sure that passwords match"):null,x,n.a.createElement("form",{action:"create-profile.html"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":O&&""===i}),placeholder:"Full Name",name:"fullname",required:!0,onChange:function(e){return S(e,m)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:w()("form-control form-control-lg",{"is-invalid":O&&""===c}),placeholder:"Email Address",name:"username",onChange:function(e){return S(e,o)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":O&&""===f}),placeholder:"Password",name:"password",onChange:function(e){return S(e,b)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":O&&""===h}),placeholder:"Confirm Password",name:"password2",onChange:function(e){return S(e,j)}})),n.a.createElement("input",{onClick:function(){if(y(!0),""!==c&&""!==i&&""!==f&&""!==h&&f===h){var t={username:c,fullName:i,password:f,confirmPassword:h};e.sendingAuthToBack(t)}},type:"button",className:"btn btn-info btn-block mt-4",defaultValue:"Submit"})))))))}))),C=Object(m.b)((function(e){return{token:e.auth.token}}),(function(e){return{logingIn:function(t){return e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var r,n,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/users/login",e);case 3:return r=t.sent,t.next=6,r.data;case 6:n=t.sent,c=n.token,localStorage.setItem("jwt",c),E(c),o=j()(c),a(O(o)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.response.data),a(y(t.t0.response.data));case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(s.f)((function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(r.useState)(!1),d=Object(u.a)(p,2),f=d[0],b=d[1],v=Object(r.useRef)(!0);Object(r.useEffect)((function(){v.current?v.current=!1:e.token&&e.history.push("/dashboard")}),[e.token]);var E=function(e,t){t(e.target.value)};return n.a.createElement("div",{style:{position:"relative",top:"200px"},className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{action:"dashboard.html"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:w()("form-control form-control-lg",{"is-invalid":""===c&&f}),placeholder:"Email Address",name:"email",onChange:function(e){return E(e,o)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":""===i&&f}),placeholder:"Password",name:"password",onChange:function(e){return E(e,m)}})),n.a.createElement("input",{type:"button",onClick:function(){if(b(!0),""!==c&&""!==i){var t={username:c,password:i};e.logingIn(t)}},className:"btn btn-info btn-block mt-4",defaultValue:"Submit"}))))))}))),P=Object(s.f)((function(e){var t=function(){var t=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.history.push({pathname:"/project/".concat(e.id),state:e.id});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.name)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,"Project id:",e.id),n.a.createElement("p",null,e.desc)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(l.b,{to:"/projectboard/".concat(e.id)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{onClick:t,className:"fa fa-edit pr-1"}," Update Project Info")),n.a.createElement("li",{className:"list-group-item delete"},n.a.createElement("i",{onClick:function(){return e.Deleting(e.id)},className:"fa fa-minus-circle pr-1"}," Delete Project")))))))})),D=function(e){return n.a.createElement(r.Fragment,null,n.a.createElement(l.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},T=Object(m.b)((function(e){return{projects:e.reducer.projects}}),(function(e){return{getProjects:function(t){return e(function(e){return{type:"projects",projects:e}}(t))}}}))((function(e){var t=Object(r.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)(!0),s=Object(u.a)(l,2),i=s[0],m=s[1];Object(r.useEffect)((function(){localStorage.getItem("jwt")||e.history.push("/"),function(){var t=Object(f.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/project/all");case 3:return a=t.sent,t.next=6,a.data;case 6:return r=t.sent,t.next=9,e.getProjects(r);case 9:o(r),m(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.response.data);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}()()}),[i]);var p=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/api/project/".concat(t));case 2:return a=e.sent,e.next=5,a.data;case 5:e.sent,m(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=null;return b=null===c||0===c.length?null:c.map((function(e){return n.a.createElement(P,{Deleting:p,key:e.projectIdentifier,name:e.projectName,id:e.projectIdentifier,desc:e.description})})),n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(D,null),n.a.createElement("br",null),n.a.createElement("hr",null),b||n.a.createElement("p",{style:{fontSize:"50px",left:"400px",position:"absolute"}},"You have no projects")))))})),I=(a(75),a(76),function(e){return e.show?n.a.createElement("div",{className:"back",onClick:e.click}):null}),_=function(e){return n.a.createElement(r.Fragment,null,n.a.createElement(I,{show:e.show,click:e.close}),n.a.createElement("div",{className:"modal-wrapper ",style:{opacity:(e.show,"1"),transform:e.show?"translateY(0vh)":"translateY(-100vh)"}},n.a.createElement("div",{className:"modal-header"},n.a.createElement("label",{style:{color:"white",left:"134px",position:"relative"}}," We have encountered an error"),n.a.createElement("span",{className:"close-modal-btn",onClick:e.close},"x")),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",null," ",e.children)),n.a.createElement("div",{className:"modal-footer"})))},q=Object(s.f)(Object(m.b)((function(e){return{error:e.reducer.error}}),(function(e){return{createProject:function(t,a){return e(function(e,t){return function(){var t=Object(f.a)(d.a.mark((function t(a){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/project",e);case 3:return r=t.sent,t.next=6,r.data;case 6:t.sent,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),a(g());case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(r.useState)(""),d=Object(u.a)(p,2),f=d[0],b=d[1],v=Object(r.useState)(""),E=Object(u.a)(v,2),h=E[0],j=E[1],g=Object(r.useState)(""),N=Object(u.a)(g,2),O=N[0],y=N[1],k=Object(r.useState)(!1),x=Object(u.a)(k,2),S=x[0],C=x[1],P=Object(r.useState)(!1),D=Object(u.a)(P,2),T=D[0],I=D[1],q=function(e,t){t(e.target.value)};return n.a.createElement(r.Fragment,null,e.error&&!1===T?n.a.createElement(_,{close:function(){I(!0)},show:e.error},"There is an error with your request, please try again"):null,n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg ",{"is-invalid":""===c&&S}),placeholder:"Project Name",name:"projectName",value:c,onChange:function(e){return q(e,o)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":""===i&&S}),placeholder:"Unique Project ID",name:"projectIdentifier",value:i,onChange:function(e){return q(e,m)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":""===f&&S}),placeholder:"Project Description",name:"description",value:f,onChange:function(e){return q(e,b)}})),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:w()("form-control form-control-lg",{"is-invalid":""===h&&S}),name:"start_date",value:h,onChange:function(e){return q(e,j)}})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:w()("form-control form-control-lg",{"is-invalid":""===O&&S}),name:"end_date",value:O,onChange:function(e){return q(e,y)}})),n.a.createElement("button",{type:"button",onClick:function(t){t.preventDefault(),C(!0),I(!1);for(var a={projectName:c,projectIdentifier:i,description:f,start_date:h,end_date:O},r=0,n=Object.values(a);r<n.length;r++){if(""===n[r])return}e.createProject(a,e.history),e.error||e.history.push("/dashboard")},className:"btn btn-primary btn-block mt-4"},"SUBMIT"))))))))}))),R=a(9),A=Object(m.b)((function(e){return{projects:e.reducer.projects}}))(Object(s.f)((function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1],b=Object(r.useState)(null),E=Object(u.a)(b,2),h=E[0],j=E[1],g=Object(r.useState)(!1),N=Object(u.a)(g,2),O=N[0],y=N[1],k=Object(r.useState)(!1),x=Object(u.a)(k,2),S=x[0],C=x[1];Object(r.useEffect)((function(){(function(){var t=Object(f.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("http://localhost:8080/api/project/".concat(e.history.location.state));case 3:return a=t.sent,t.next=6,a.data;case 6:r=t.sent,o(r.projectName),p(r.description),j(r),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),y(!0),setTimeout((function(){e.history.push("/dashboard")}),2e3);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var P=function(e,t){t(e.target.value)},D=function(){var t=Object(f.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C(!0),""!==c&&""!==m){t.next=3;break}return t.abrupt("return");case 3:return(a=Object(R.a)({},h)).projectName=c,a.description=m,t.next=9,v.a.post("/api/project/",a);case 9:e.history.push("/dashboard");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=null;return T=O?n.a.createElement("p",{style:{fontSize:"40px",position:"absolute",left:"650px",top:"300px"}},"Unfortunately this project doesn't exist"):n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(l.b,{to:"/dashboard",className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg ",{"is-invalid":""===c&&S}),placeholder:"Project Name",defaultValue:h?c:null,onChange:function(e){return P(e,o)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:h?h.projectIdentifier:null,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":""===m&&S}),value:h?m:"Description...",onChange:function(e){return P(e,p)},placeholder:"Description"})),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"start_date",placeholder:h?h.start_date:null,disabled:!0})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"end_date",placeholder:h?h.end_date:null,disabled:!0})),n.a.createElement("input",{type:"button",className:"btn btn-primary btn-block mt-4",onClick:D,defaultValue:"Update"}))))))),n.a.createElement(r.Fragment,null,T)}))),B=a(24),U=a(41),F=Object(m.b)(null,(function(e){return{requestingTasks:function(t){return e(N(t))}}}))(Object(s.f)((function(e){var t,a,r=function(){var t=Object(f.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("/api/backlog/".concat(e.match.params.id,"/").concat(e.projectSequence));case 3:return a=t.sent,t.next=6,a.data;case 6:t.sent,window.location.reload(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),window.alert("there was a problem with your request please try again");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return 1===e.priorityString?(t="bg-danger text-light",a="HIGH"):2===e.priorityString?(t="bg-warning text-light",a="MEDIUM"):(t="bg-info text-light",a="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},n.a.createElement("div",null,"ID: ",e.projectSequence),"Priority: ",a),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},e.summary),n.a.createElement("p",{className:"card-text text-truncate "},e.acceptanceCriteria),n.a.createElement(l.b,{to:"/updateprojecttask/".concat(e.match.params.id,"/").concat(e.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{onClick:r,className:"btn btn-danger ml-4"},"Delete")))}))),V=Object(m.b)((function(e){return{tasks:e.backlog.projectTasks}}))(Object(s.f)((function(e){var t=Object(r.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)([]),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(r.useState)([]),d=Object(u.a)(p,2),f=d[0],b=d[1],v=Object(r.useRef)(1);Object(r.useEffect)((function(){if(1!==v.current){console.log(e.tasks);var t,a=Object(U.a)(e.tasks);try{var r=function(){var e=t.value;"TO_DO"===e.status?o((function(t){return[].concat(Object(B.a)(t),[e])})):"IN_PROGRESS"===e.status?m((function(t){return[].concat(Object(B.a)(t),[e])})):b((function(t){return[].concat(Object(B.a)(t),[e])}))};for(a.s();!(t=a.n()).done;)r()}catch(n){a.e(n)}finally{a.f()}}else v.current--}),[v.current]);var E=c.sort((function(e,t){return e.priority>t.priority?1:-1})),h=i.sort((function(e,t){return e.priority>t.priority?1:-1})),j=f.sort((function(e,t){return e.priority>t.priority?1:-1}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),E.map((function(e){return n.a.createElement(F,{key:e.projectSequence,projectSequence:e.projectSequence,priorityString:e.priority,summary:e.summary,acceptanceCriteria:e.acceptanceCriteria})}))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),h.map((function(e){return n.a.createElement(F,{key:e.projectSequence,projectSequence:e.projectSequence,priorityString:e.priority,summary:e.summary,acceptanceCriteria:e.acceptanceCriteria})}))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),j.map((function(e){return n.a.createElement(F,{key:e.projectSequence,projectSequence:e.projectSequence,priorityString:e.priority,summary:e.summary,acceptanceCriteria:e.acceptanceCriteria})})))))}))),L=Object(m.b)((function(e){return{error:e.backlog.error}}),(function(e){return{requestingTasks:function(t){return e(N(t))}}}))(Object(s.f)((function(e){var t,a=Object(r.useState)(e.match.params.id),c=Object(u.a)(a,1)[0];return Object(r.useEffect)((function(){e.requestingTasks(c)}),[]),e.error?(t=n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"We can't find any project with this id ",e.match.params.id),setTimeout((function(){e.history.push("/dashboard")}),3e3)):t=n.a.createElement("div",{className:"container"},n.a.createElement(l.b,{to:"/addProjectTask/".concat(c),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement(V,null)),n.a.createElement(r.Fragment,null,t)}))),M=Object(s.f)(Object(m.b)((function(e){return{error:e.backlog.error}}),(function(e){return{SendingdataToAction:function(t,a){return e(function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(r){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.post("/api/backlog/".concat(t),e);case 3:return n=a.sent,a.next=6,n.data;case 6:a.sent,a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0.response.data),r({type:"error"});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){var t=Object(r.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1],b=Object(r.useState)(""),v=Object(u.a)(b,2),E=v[0],h=v[1],j=Object(r.useState)(""),g=Object(u.a)(j,2),N=g[0],O=g[1],y=Object(r.useState)(0),k=Object(u.a)(y,2),x=k[0],S=k[1],C=Object(r.useState)(""),P=Object(u.a)(C,2),D=P[0],T=P[1],I=Object(r.useState)(!1),q=Object(u.a)(I,2),R=q[0],A=q[1],B=Object(r.useState)(!1),U=Object(u.a)(B,2),F=U[0],V=U[1];Object(r.useEffect)((function(){o(e.match.params.id)}),[]);var L=function(e,t){e.preventDefault(),t(e.target.value)},M=function(){var t=Object(f.a)(d.a.mark((function t(a){var r,n,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),A(!0),r={summary:m,acceptanceCriteria:E,dueDate:N,priority:x,status:D},n=0,o=Object.values(r);case 4:if(!(n<o.length)){t.next=11;break}if(""!==(l=o[n])&&0!==l){t.next=8;break}return t.abrupt("return");case 8:n++,t.next=4;break;case 11:e.SendingdataToAction(r,c),setTimeout((function(){G()}),2e3);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){e.history.push("/projectboard/".concat(c))};return n.a.createElement(r.Fragment,null,e.error&&!1===F?n.a.createElement(_,{close:function(){V(!0)},show:e.error},"There is an error with your request, please try again"):null,n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(l.b,{to:"/projectBoard/".concat(c),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":""===m&&R}),name:"summary",placeholder:"Project Task summary",onChange:function(e){return L(e,p)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":""===E&&R}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",onChange:function(e){return L(e,h)}})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:w()("form-control form-control-lg",{"is-invalid":""===N&&R}),name:"dueDate",onChange:function(e){return L(e,O)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:w()("form-control form-control-lg",{"is-invalid":0===x&&R}),name:"priority",onChange:function(e){return L(e,S)}},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:w()("form-control form-control-lg",{"is-invalid":""===D&&R}),name:"status",onChange:function(e){return L(e,T)}},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"button",className:"btn btn-primary btn-block mt-4",defaultValue:"Submit",onClick:M})))))))}))),G=Object(s.f)((function(e){var t=Object(r.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),m=i[0],p=i[1],b=Object(r.useState)(!1),E=Object(u.a)(b,2),h=E[0],j=E[1];Object(r.useEffect)((function(){(function(){var t=Object(f.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/backlog/".concat(e.match.params.id,"/").concat(e.match.params.id2));case 3:return a=t.sent,t.next=6,a.data;case 6:r=t.sent,o(r),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),p(!0),setTimeout((function(){e.history.push("/projectboard/".concat(e.match.params.id))}),3e3);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var g,N=function(e,t){e.preventDefault();var a=Object(R.a)({},c),r=a[t];r=e.target.value,a[t]=r,o(a)},O=function(){var t=Object(f.a)(d.a.mark((function t(){var a,r,n,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(!0),a=0,r=Object.values(c);case 2:if(!(a<r.length)){t.next=9;break}if(""!==(n=r[a])&&0!==n){t.next=6;break}return t.abrupt("return");case 6:a++,t.next=2;break;case 9:return t.prev=9,t.next=12,v.a.patch("/api/backlog/".concat(e.match.params.id,"/").concat(e.match.params.id2),c);case 12:return o=t.sent,t.next=15,o.data;case 15:l=t.sent,console.log(l),e.history.push("/projectboard/".concat(e.match.params.id)),t.next=25;break;case 20:t.prev=20,t.t0=t.catch(9),console.log(t.t0),p(!0),setTimeout((function(){e.history.push("/projectboard/".concat(e.match.params.id))}),3e3);case 25:case"end":return t.stop()}}),t,null,[[9,20]])})));return function(){return t.apply(this,arguments)}}();return g=m||null===c?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"We can't find any project Task with this id ",e.match.params.id2):n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(l.b,{to:"/projectboard/".concat(e.match.params.id),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":""===c.summary&&h}),name:"summary",placeholder:"Project Task summary",defaultValue:c?c.summary:null,onChange:function(e){return N(e,"summary")}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":""===c.acceptanceCriteria&&h}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",defaultValue:c?c.acceptanceCriteria:null,onChange:function(e){return N(e,"acceptanceCriteria")}})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:w()("form-control form-control-lg",{"is-invalid":""===c.dueDate&&h}),name:"dueDate",defaultValue:c?c.dueDate:null,onChange:function(e){return N(e,"dueDate")}})),n.a.createElement("div",{className:"form-group"},"your last choice is: ",c?c.priority:null,n.a.createElement("select",{className:w()("form-control form-control-lg",{"is-invalid":0===c.priority&&h}),name:"priority",onChange:function(e){return N(e,"priority")}},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},"your last choice is: ",c?c.status:null,n.a.createElement("select",{className:w()("form-control form-control-lg",{"is-invalid":""===c.status&&h}),name:"status",onChange:function(e){return N(e,"status")}},n.a.createElement("option",{value:""},"select status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"button",className:"btn btn-primary btn-block mt-4",defaultValue:"Submit",onClick:O})))))),n.a.createElement(r.Fragment,null,g)})),W=Object(s.f)((function(e){return n.a.createElement("div",null,n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/dashboard",component:T}),n.a.createElement(s.a,{exact:!0,path:"/addproject",component:q}),n.a.createElement(s.a,{exact:!0,path:"/project/:id",component:A}),n.a.createElement(s.a,{exact:!0,path:"/projectboard/:id",component:L}),n.a.createElement(s.a,{exact:!0,path:"/addprojecttask/:id",component:M}),n.a.createElement(s.a,{exact:!0,path:"/updateprojecttask/:id/:id2",component:G})))})),z=Object(s.f)(Object(m.b)((function(e){return{decodedToken:e.auth.token}}),(function(e){return{logout:function(){return e(k())}}}))((function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1];Object(r.useEffect)((function(){var e=localStorage.getItem("jwt");if(e){var t=j()(e);o(t.fullname)}}),[e.decodedToken]);var s;return s=""===c?n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{className:"nav-link ",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{className:"nav-link",to:"/login"},"Login"))):n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),c)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{className:"nav-link",to:"/",onClick:function(){try{e.logout(),o(""),e.history.push("/")}catch(t){console.log(t)}}},"Logout"))),n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"/Dashboard.html"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/dashboard"},"Dashboard"))),s)))}))),H=localStorage.getItem("jwt");if(H){var Y=j()(H),J=Date.now()/1e3;Y.exp<J?(k(),window.location.href="/"):(O(Y),E(H))}var X=Object(m.b)(null,(function(e){return{logingIn:function(t){return e(O(t))},logout:function(){return e(k)}}}))((function(e){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(z,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:i}),n.a.createElement(s.a,{exact:!0,path:"/register",component:S}),n.a.createElement(s.a,{exact:!0,path:"/login",component:C})),n.a.createElement(W,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(16),K=a(42),Q={error:!1,projects:[]},Z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;return"response"===a.type?Object(R.a)(Object(R.a)({},t),{},{error:!0}):"projects"===a.type?Object(R.a)(Object(R.a)({},t),{},{projects:a.projects}):e},ee={projectTasks:null,projectTask:null,error:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return"tasks"===t.type?Object(R.a)(Object(R.a)({},e),{},{projectTasks:t.tasks}):"error"===t.type?Object(R.a)(Object(R.a)({},e),{},{error:!0}):e},ae={token:null,error:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return"errorForAuth"===t.type?Object(R.a)(Object(R.a)({},e),{},{error:t.resp}):"tokenRecieved"===t.type?Object(R.a)(Object(R.a)({},e),{},{token:t.token,error:!1}):"logout"===t.type?Object(R.a)(Object(R.a)({},e),{},{token:null,error:null}):e},ne=Object($.c)({reducer:Z,backlog:te,auth:re}),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,oe=Object($.e)(ne,ce(Object($.a)(K.a)));o.a.render(n.a.createElement(m.a,{store:oe},n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d7ad51dc.chunk.js.map