(this.webpackJsonpseer=this.webpackJsonpseer||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(98),t(17)),c=t(18),s=t(20),m=t(19),u=t(46),d=t(11),h=t(150),p=t(153),g=t(155),E=t(156),f=t(157),b=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),v=function(){var e=b();return l.a.createElement(p.a,{style:{backgroundColor:"#52b788",background:"transparent",boxShadow:"none"},position:"static"},l.a.createElement(g.a,{style:{margin:10}},l.a.createElement(E.a,{variant:"h6",className:e.title},"SEER"),l.a.createElement(f.a,{color:"inherit",component:u.b,to:"/search"},"Search"),l.a.createElement(f.a,{variant:"outlined",color:"inherit",component:u.b,to:"/register",size:"medium"},"Login/Register")))},_=t(40),y=t(33),C=t(54),O=t.n(C),j=t(158),S=t(173),k={input:{backgroundColor:"white"}},w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={email:"",username:"",password:"",organisation:"",user_type:""},e.onChange=e.onChange.bind(Object(y.a)(e)),e.onSubmit=e.onSubmit.bind(Object(y.a)(e)),e}return Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),function(e){return O.a.post("/register",{email:e.email,username:e.username,password:e.password,organisation:e.organisation,user_type:e.user_type}).then((function(e){console.log("Registered")}))}({email:this.state.email,username:this.state.username,password:this.state.password,organisation:this.state.organisation,user_type:this.state.user_type}).then((function(e){}))}},{key:"render",value:function(){return l.a.createElement(j.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,{component:"h1",variant:"h5"},"Register"),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(S.a,{fullWidth:!0,variant:"outlined",margin:"normal",required:!0,autoComplete:"email",autoFocus:!0,id:"email",label:"Email Address",name:"email",value:this.state.email,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"username",autoFocus:!0,id:"username",label:"Username",name:"username",value:this.state.username,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"password",autoFocus:!0,id:"password",label:"Password",name:"password",value:this.state.password,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"organisation",label:"Organisation",name:"organisation",value:this.state.organisation,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"user_type",label:"User Type",name:"user_type",value:this.state.user_type,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Register")))}}]),t}(n.Component),D=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(w,null)}}]),t}(n.Component),x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Home Page"))}}]),t}(n.Component),I=t(162),N=t(163),T=t(123),F=t(164),P=t(165),W=t(166),q=t(167),R=t(168),V=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this.props.records;return e=a?l.a.createElement(I.a,{container:!0,direction:"column",spacing:3},l.a.createElement(N.a,{component:T.a},l.a.createElement(F.a,{stickyHeader:!0,"aria-label":"sticky table"},l.a.createElement(P.a,null,l.a.createElement(W.a,null,l.a.createElement(q.a,null,"Title"),l.a.createElement(q.a,{align:"right"},"Author"),l.a.createElement(q.a,{align:"right"},"Year"),l.a.createElement(q.a,{align:"right"},"Type"),l.a.createElement(q.a,{align:"right"},"Journal"),l.a.createElement(q.a,{align:"right"},"SE Practice"),l.a.createElement(q.a,{align:"right"},"Claims"),l.a.createElement(q.a,{align:"right"},"DOI"))),l.a.createElement(R.a,null,a.map((function(e,a){return l.a.createElement(W.a,{key:a},l.a.createElement(q.a,{align:"right"},e.title),l.a.createElement(q.a,{align:"right"},e.author),l.a.createElement(q.a,{align:"right"},e.year),l.a.createElement(q.a,{align:"right"},e.type),l.a.createElement(q.a,{align:"right"},e.journal),l.a.createElement(q.a,{align:"right"},e.se_practice),l.a.createElement(q.a,{align:"right"},e.claims),l.a.createElement(q.a,{align:"right"},e.doi))})))))):null,console.log(e),l.a.createElement("div",null,e)}}]),t}(n.Component),A=t(161),B=t(175),J=t(172),G=t(176),H=t(169),L=t(80),U=t.n(L),z=t(81),M=t.n(z),Y=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),$=function(e){var a=Y();return console.log(e.operators),console.log(e.values),l.a.createElement(T.a,{elevation:7,variant:"outlined"},l.a.createElement(I.a,{container:!0,direction:"row"},l.a.createElement(I.a,{item:!0,xs:1,sm:2},l.a.createElement(E.a,null,"IF")),l.a.createElement(I.a,{item:!0},l.a.createElement(A.a,{className:a.formControl},l.a.createElement(B.a,{id:"demo-simple-select-outlined-label"},"Name of Field"),l.a.createElement(J.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.name_of_field||"",onClick:e.handleFieldNameChange,label:"Name of Field",name:"name_of_field"},l.a.createElement(G.a,{value:"SE Practice"},"SE Practice"),l.a.createElement(G.a,{value:"TDD Claims"},"TDD Claims"))),l.a.createElement(A.a,{className:a.formControl},l.a.createElement(B.a,{id:"demo-simple-select-outlined-label"},"Operator"),l.a.createElement(J.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.selected_operator,onChange:e.handleChange,label:"Operator",name:"selected_operator"},e.operators.map((function(e,a){return l.a.createElement(G.a,{key:a,value:e.value},e.label)})))),l.a.createElement(A.a,{className:a.formControl},l.a.createElement(B.a,{id:"demo-simple-select-outlined-label"},"Value"),l.a.createElement(J.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.selected_value,onChange:e.handleChange,label:"Value",name:"selected_value"},e.values.map((function(e,a){return l.a.createElement(G.a,{key:a,value:e.value},e.label)})))),l.a.createElement(H.a,{"aria-label":"add"},l.a.createElement(U.a,null)),l.a.createElement(H.a,{"aria-label":"remove"},l.a.createElement(M.a,null)))))},K=t(83),Q=t(177),X=Object(h.a)((function(e){return{root:{width:200,height:70,padding:10}}}));function Z(e){return"".concat(e)}function ee(e){var a=X(),t=l.a.useState([e.from_date,e.to_date]),n=Object(K.a)(t,2),r=n[0],o=n[1],i=r;return l.a.createElement(T.a,{elevation:7,variant:"outlined",className:a.root},l.a.createElement(E.a,{id:"range-slider",gutterBottom:!0},"Select Date Range"),l.a.createElement(Q.a,{value:r,onChange:function(a,t){o(t),e.callbackFromParent(i)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Z,min:1990,max:2020}))}var ae=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSubmit=function(a){a.preventDefault(),e.setState(Object(_.a)({},a.target.name,a.target.value),(function(){O.a.get("/records",{params:{se_practice:e.state.selected_value,from_date:e.state.from_date,to_date:e.state.to_date,claims:e.state.selected_value,selected_operator:e.state.selected_operator}}).then((function(a){e.setState({records:a.data})})).catch((function(e){return console.log(e)}))}))},e.handleFieldNameChange=function(a){e.setState(Object(_.a)({},a.target.name,a.target.value),(function(){return e.populateOperator()}),console.log("values done"))},e.myCallback=function(a){e.setState({from_date:a[0]}),e.setState({to_date:a[1]})},e.onCancel=function(a){e.setState({se_practice:""}),e.setState({from_date:2015}),e.setState({to_date:2020})},e.state={se_practice:"",operators:[],values:[],selected_value:"",selected_operator:"",name_of_field:"",from_date:2015,to_date:2020,claims:"",records:[]},e.handleChange=e.handleChange.bind(Object(y.a)(e)),e}return Object(c.a)(t,[{key:"populateValues",value:function(){console.log(this.state.name_of_field),"SE Practice"===this.state.name_of_field&&this.setState({values:[{label:"TDD",value:"TDD"},{label:"Agile",value:"Agile"}]}),"TDD Claims"===this.state.name_of_field&&this.setState({values:[{label:"improves code quality",value:"improves code quality"},{label:"improves team confidence",value:"improves team confidence"}]})}},{key:"populateOperator",value:function(){"SE Practice"!==this.state.name_of_field&&"TDD Claims"!==this.state.name_of_field||(this.setState({operators:[{label:"Is Equal To",value:"Is Equal To"},{label:"Is Not Equal To",value:"Is Not Equal To"}]}),this.populateValues())}},{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:150}},l.a.createElement(I.a,{container:!0,direction:"column",spacing:3},l.a.createElement(I.a,{item:!0,container:!0},l.a.createElement(I.a,{item:!0,xs:1,sm:2}),l.a.createElement(I.a,{item:!0,xs:12,sm:8},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(ee,{callbackFromParent:this.myCallback,from_date:this.state.from_date,to_date:this.state.to_date}),l.a.createElement($,{operators:this.state.operators,values:this.state.values,selected_value:this.state.selected_value,selected_operator:this.state.selected_operator,name_of_field:this.state.name_of_field,handleChange:this.handleChange,handleFieldNameChange:this.handleFieldNameChange}),l.a.createElement(I.a,{item:!0,xs:1,sm:2,md:5}),l.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},"Search"),l.a.createElement(f.a,{type:"cancel",variant:"contained",color:"primary",onClick:this.onCancel},"Cancel"))),l.a.createElement(I.a,{item:!0,xs:1,sm:2}))),this.state.records.length>0?l.a.createElement(V,{records:this.state.records}):null)}}]),t}(n.Component),te=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(ae,null)}}]),t}(n.Component),ne=t(82),le=t(170),re=t(171),oe=Object(ne.a)({palette:{background:{default:"#52b788"}}}),ie=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(le.a,{theme:oe},l.a.createElement(re.a,null),l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(d.a,{exact:!0,path:"/",component:x}),l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{exact:!0,path:"/search",component:te}),l.a.createElement(d.a,{exact:!0,path:"/register",component:D})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a,t){e.exports=t(122)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.acaa7157.chunk.js.map