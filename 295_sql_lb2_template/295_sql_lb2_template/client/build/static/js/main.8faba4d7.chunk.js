(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,r,t){},130:function(e,r,t){},152:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),i=t(15),c=t.n(i),l=(t(129),t(9)),d=t(14),s=(t(130),t(22)),o=t(207),j=t(209),u=t(210),b=t(216),O=t(106),f=t(197),x=t(201),m=t(79),h=t(156),p=t(202),v=t(164),g=t(161),y=t(215),q=t(159),w=t(163),C=t(204),S=t(198),W=t(208),A=t(213),F=t(205),V=t(206),k=t(21),N=t(211),P=t(102),D=t(3),T=t(145).getNames().sort();function E(e){return e.error?Object(D.jsx)(h.a,{error:!0,fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{error:!0,required:!0,variant:"outlined",label:"Full Name"}))}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"Full Name",variant:"outlined"}))})}function M(e){return e.error?Object(D.jsx)(h.a,{error:!0,fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{error:!0,required:!0,variant:"outlined",label:"Phone Number"}))}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"Phone Number",variant:"outlined"}))})}function B(e){return e.error?Object(D.jsx)(h.a,{error:!0,fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{error:!0,required:!0,variant:"outlined",label:"Address"}))}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"Address",variant:"outlined"}))})}function U(e){return e.error?Object(D.jsx)(h.a,{error:!0,fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{error:!0,required:!0,variant:"outlined",label:"City"}))}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"City",variant:"outlined"}))})}function z(e){return e.error?Object(D.jsx)(h.a,{error:!0,fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{error:!0,required:!0,variant:"outlined",label:"Postcode"}))}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"Postcode",variant:"outlined"}))})}function $(e){return e.error?Object(D.jsxs)(h.a,{fullWidth:!0,variant:"outlined",error:!0,children:[Object(D.jsx)(v.a,{error:!0,required:!0,htmlFor:"grouped-native-select",children:"Country"}),Object(D.jsx)(g.a,Object(l.a)(Object(l.a)({},e.field),{},{children:T.map((function(e){return Object(D.jsx)(y.a,{value:e,children:e},e)}))}))]}):Object(D.jsxs)(h.a,{variant:"outlined",fullWidth:!0,children:[Object(D.jsx)(v.a,{required:!0,children:"Country"}),Object(D.jsx)(g.a,Object(l.a)(Object(l.a)({},e.field),{},{children:T.map((function(e){return Object(D.jsx)(y.a,{value:e,children:e},e)}))}))]})}function I(e){var r=e.duplicateEmail?"Email Already Taken":"";return e.error||e.duplicateEmail?Object(D.jsxs)(h.a,{fullWidth:!0,children:[Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,error:!0,variant:"outlined",label:"Email",onChange:function(r){return t=r,a=e.field,e.duplicateEmail&&e.duplicateEmailSetter(!1),void a.onChange(t);var t,a}})),Object(D.jsxs)(q.a,{error:!0,children:[" ",r," "]})]}):Object(D.jsx)(h.a,{fullWidth:!0,children:Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({},e.field),{},{required:!0,label:"Email",variant:"outlined"}))})}function R(e){var r=e.duplicateUsername?Object(D.jsx)(D.Fragment,{children:"Username already taken "}):Object(D.jsxs)(D.Fragment,{children:["At least 4 characters ",Object(D.jsx)("br",{})," No whitespaces"]});return e.error||e.duplicateUsername?Object(D.jsxs)(h.a,{fullWidth:!0,error:!0,children:[Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({error:!0},e.field),{},{onChange:function(r){return t=r,a=e.field,e.duplicateUsername&&e.duplicateNameSetter(!1),void a.onChange(t);var t,a},required:!0,label:"Username",variant:"outlined"})),Object(D.jsxs)(q.a,{error:!0,children:[" ",r," "]})]}):Object(D.jsxs)(h.a,{fullWidth:!0,children:[Object(D.jsx)(p.a,Object(l.a)(Object(l.a)({required:!0},e.field),{},{variant:"outlined",label:"Username"})),Object(D.jsxs)(q.a,{children:["At least 4 characters",Object(D.jsx)("br",{}),"No whitespaces "]})]})}function Y(e){var r=Object(a.useState)(!1),t=Object(d.a)(r,2),n=t[0],i=t[1];return Object(D.jsxs)(h.a,{variant:"outlined",required:!0,error:void 0!==e.error,fullWidth:!0,children:[Object(D.jsx)(v.a,{children:"Password"}),Object(D.jsx)(w.a,Object(l.a)(Object(l.a)({label:"Password",id:"standard-adornment-password",type:n?"text":"password"},e.field),{},{endAdornment:Object(D.jsx)(C.a,{position:"end",children:Object(D.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(){i(!n)},children:n?Object(D.jsx)(F.a,{}):Object(D.jsx)(V.a,{})})})})),Object(D.jsxs)(q.a,{children:["At least 8 characters ",Object(D.jsx)("br",{}),"At least one special character ",Object(D.jsx)("br",{}),"At least one number"]})]})}function L(e){var r=Object(a.useState)(!1),t=Object(d.a)(r,2),n=t[0],i=t[1],c=e.isSubmitted&&e.password!==e.field.value;return Object(D.jsxs)(h.a,{variant:"outlined",error:void 0!==e.error||c,required:!0,fullWidth:!0,children:[Object(D.jsx)(v.a,{htmlFor:"outlined-adornment-password",children:"Confirm Password"}),Object(D.jsx)(w.a,Object(l.a)(Object(l.a)({label:"Confirm Password",id:"standard-adornment-password-repeat",type:n?"text":"password"},e.field),{},{endAdornment:Object(D.jsx)(C.a,{position:"end",children:Object(D.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(){i(!n)},children:n?Object(D.jsx)(F.a,{}):Object(D.jsx)(V.a,{})})})})),Object(D.jsx)(q.a,{children:void 0!==e.error||c?"Passwords must match":""})]})}function Z(e){return void 0!==e.error?Object(D.jsx)(k.a,{utils:m.a,children:Object(D.jsx)(h.a,{fullWidth:!0,error:!0,children:Object(D.jsx)(N.a,{error:!0,inputVariant:"outlined",variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date of birth",onChange:e.field.onChange,onBlur:e.field.onBlur,value:e.field.value,name:e.field.name,inputRef:e.field.ref,KeyboardButtonProps:{"aria-label":"change date"},helperText:"You must be at least 18 years old"})})}):Object(D.jsx)(k.a,{utils:m.a,children:Object(D.jsx)(h.a,{fullWidth:!0,required:!0,children:Object(D.jsx)(N.a,{required:!0,inputVariant:"outlined",variant:"inline",format:"dd.MM.yyyy",margin:"normal",id:"date-picker-inline",label:"Date of birth",onChange:e.field.onChange,onBlur:e.field.onBlur,value:e.field.value,name:e.field.name,inputRef:e.field.ref,KeyboardButtonProps:{"aria-label":"change date"}})})})}function _(e){var r=void 0===e.error?"ID Confirmation":"Please upload a valid combination of files";return Object(D.jsx)(P.a,Object(l.a)(Object(l.a)({dropzoneText:r},e.field),{},{acceptedFiles:["image/jpeg","image/jpg","image/png","pdf"],maxFileSize:1e7,children:Object(D.jsxs)(q.a,{children:["jpeg, png, pdf ",Object(D.jsx)("br",{})," 10MB per File ",Object(D.jsx)("br",{}),"50Mb Total"]})}))}function K(e){var r=void 0===e.error?"I have read and accepted all terms and conditions as written here":"You must accept the terms and conditions";return e.error?Object(D.jsx)(W.a,{style:{color:"red"},control:Object(D.jsx)(A.a,Object(l.a)(Object(l.a)({},e.field),{},{checked:e.field.value,name:"agb",color:"primary"})),label:r}):Object(D.jsx)(W.a,{control:Object(D.jsx)(A.a,Object(l.a)(Object(l.a)({checked:e.field.value},e.field),{},{name:"agb",color:"primary"})),label:r})}var H=t(103),J=t(212),X=Object(o.a)((function(e){return{paper:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(2),backgroundColor:"white",height:"25%",width:"25%"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var G=function(){var e=Object(J.d)(),r=X(),t=Object(s.b)({reValidateMode:"onChange"}),n=t.control,i=t.watch,c=t.handleSubmit,o=t.formState,m=o.isSubmitted,h=o.errors,p=Object(a.useState)(!1),v=Object(d.a)(p,2),g=v[0],y=v[1],q=Object(a.useState)(!1),w=Object(d.a)(q,2),C=w[0],S=w[1],W=i("password"),A=function(r){var t=new FormData;t.append("name",r.name),t.append("address",r.address),t.append("city",r.city),t.append("phoneNumber",r.phoneNumber),t.append("postcode",r.postcode),t.append("country",r.country),t.append("username",r.username),t.append("email",r.email),t.append("password",r.password),t.append("dateOfBirth",r.birthDate.toString()),r.confirmationFiles.forEach((function(e){t.append("idConfirmation",e)}));var a=new XMLHttpRequest;a.open("POST","http://localhost:3002/login",!0),a.onload=function(){4===a.readyState&&(200===a.status?e.push("/success"):405===a.status&&(0===a.responseText.localeCompare("Username already taken")?y(!0):0===a.responseText.localeCompare("Email already taken")?S(!0):0===a.responseText.localeCompare("Both already taken")&&(S(!0),y(!0))))},a.send(t)};return Object(D.jsxs)(j.a,{component:"main",maxWidth:"xs",children:[Object(D.jsx)(u.a,{}),Object(D.jsxs)("div",{className:r.paper,children:[Object(D.jsx)(b.a,{className:r.avatar,src:"".concat("","/tie_logo.png")}),Object(D.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(D.jsxs)("form",{noValidate:!0,className:r.form,onSubmit:c((function(e){return A(e)})),children:[Object(D.jsx)(f.a,{container:!0,spacing:3,children:Object(D.jsxs)(f.a,{container:!0,spacing:1,children:[Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"name",control:n,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return Object(D.jsx)(E,{error:h.name,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"phoneNumber",control:n,defaultValue:"",rules:{required:!0,pattern:/^\+(?:[0-9] ?){6,14}[0-9]$/},render:function(e){var r=e.field;return Object(D.jsx)(M,{error:h.phoneNumber,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"address",control:n,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return Object(D.jsx)(B,{error:h.address,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"city",control:n,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return Object(D.jsx)(U,{error:h.city,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"postcode",control:n,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return Object(D.jsx)(z,{error:h.postcode,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"country",control:n,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return Object(D.jsx)($,{error:h.country,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"email",control:n,defaultValue:"",rules:{required:!0,pattern:/^\S+@\S+\.\S+$/},render:function(e){var r=e.field;return Object(D.jsx)(I,{duplicateEmailSetter:S,duplicateEmail:C,error:h.email,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"username",control:n,defaultValue:"",rules:{required:!0,pattern:/^[A-Za-z]{1}[A-Za-z0-9+._-]{3,}$/},render:function(e){var r=e.field;return Object(D.jsx)(R,{duplicateNameSetter:y,error:h.username,duplicateUsername:g,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"password",control:n,defaultValue:"",rules:{required:!0,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_+@$!%*#?&])[A-Za-z\d-_+@$!%*#?&]{8,}$/},render:function(e){var r=e.field;return Object(D.jsx)(Y,{error:h.password,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(s.a,{name:"repeatPassword",control:n,defaultValue:"",rules:{required:!0,validate:function(e){return 0===e.localeCompare(W)}},render:function(e){var r=e.field;return Object(D.jsx)(L,{isSubmitted:m,password:W,error:h.repeatPassword,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"birthDate",control:n,defaultValue:new Date,rules:{required:!0,validate:function(e){return!function(e){var r=new Date,t=r.getFullYear(),a=r.getMonth(),n=r.getDate(),i=e,c=t-i.getFullYear(),l=a-i.getMonth(),d=n-i.getDay();return c<18||18===c&&l<=0&&d<=0}(e)}},render:function(e){var r=e.field;return Object(D.jsx)(Z,{error:h.birthDate,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"confirmationFiles",control:n,defaultValue:[],rules:{required:!0,validate:function(e){return!(0===(r=e).length||r.reduce((function(e,r){return e+r.size}),0)>5e6);var r}},render:function(e){var r=e.field;return Object(D.jsx)(_,{error:h.confirmationFiles,field:r})}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"captchaString",control:n,defaultValue:null,rules:{required:!0,validate:function(e){return!(null===e)}},render:function(e){var r=e.field;return Object(D.jsx)(H.a,Object(l.a)({sitekey:"6LecxjAbAAAAAArf0n8KeC9-Yw3l5cMxT5Hg6aDR"},r))}})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{name:"checkbox",control:n,defaultValue:!1,rules:{required:!0,validate:function(e){return e}},render:function(e){var r=e.field;return Object(D.jsx)(K,{error:h.checkbox,field:r})}})})]})}),Object(D.jsx)(x.a,{className:r.submit,variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Submit"})]})]})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,218)).then((function(r){var t=r.getCLS,a=r.getFID,n=r.getFCP,i=r.getLCP,c=r.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},ee=t(35);var re=Object(ee.a)();c.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(J.b,{history:re,children:Object(D.jsxs)(J.c,{children:[Object(D.jsx)(J.a,{exact:!0,path:"/",component:G}),Object(D.jsx)(J.a,{exact:!0,path:"/success",component:function(){return Object(D.jsx)("h1",{children:"Registration successful"})}})]})})}),document.getElementById("root")),Q()}},[[152,1,2]]]);
//# sourceMappingURL=main.8faba4d7.chunk.js.map