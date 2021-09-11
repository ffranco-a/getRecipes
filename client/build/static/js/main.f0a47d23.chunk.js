(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){e.exports={createRecipe:"CreateRecipe_createRecipe__1zIUX",step:"CreateRecipe_step__3-Ayn",diets:"CreateRecipe_diets__2715H"}},19:function(e,t,c){e.exports={recipeCardContainer:"Recipe_recipeCardContainer__2u7_Z",recipeCardInfo:"Recipe_recipeCardInfo__heRry",diets:"Recipe_diets__3JKtS"}},22:function(e,t,c){e.exports={recipesContainer:"Pagination_recipesContainer__3K9Pl",pagesList:"Pagination_pagesList__298uc",active:"Pagination_active__2fwbA"}},23:function(e,t,c){e.exports={searchBarContainer:"SearchBar_searchBarContainer__1K5nA",searchBar:"SearchBar_searchBar__11Xdm",searchButton:"SearchBar_searchButton__1pSsx"}},40:function(e,t,c){e.exports={navBar:"NavBar_navBar__wR9pT"}},45:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(20),i=c.n(a),r=(c(45),c(5)),s=c(24),o=c(13),l=c(3),u=c(28),j="GET_RECIPES",d="GET_RECIPES_BY_ID",b="GET_TYPES",p="ORDER",h="FILTER",O="http://localhost:3001";function f(){return function(e){u.get("".concat(O,"/recipes")).then((function(t){return e({type:j,payload:t.data})})).catch((function(e){return console.log(e)}))}}var x={recipes:[],details:{},diets:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{recipes:Object(o.a)(t.payload)});case d:return Object(l.a)(Object(l.a)({},e),{},{details:Object(l.a)({},t.payload)});case b:return Object(l.a)(Object(l.a)({},e),{},{diets:Object(o.a)(t.payload)});case p:var c=e.recipes;return c.sort((function(e,c){var n,a;if(t.payload.includes("title")&&(n=e.title.toLowerCase(),a=c.title.toLowerCase()),t.payload.includes("score")&&(n=e.spoonacularScore,a=c.spoonacularScore),t.payload.includes("health")&&(n=e.healthScore,a=c.healthScore),t.payload.includes("ascendent")){if(n<a)return-1;if(n>a)return 1}if(t.payload.includes("descendent")){if(n<a)return 1;if(n>a)return-1}return 0})),Object(l.a)(Object(l.a)({},e),{},{recipes:Object(o.a)(c)});case h:default:return Object(l.a)({},e)}},g=c(38),v=Object(s.c)(m,Object(s.b)(Object(s.a)(g.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),_=c(4),y=c(11),C=c(1);var S=Object(r.b)((function(e){return{recipes:e.recipes}}),{getRecipes:f})((function(e){var t=e.recipes,c=e.getRecipes;return Object(n.useEffect)((function(){0===t.length&&c()}),[t,c]),Object(C.jsx)("div",{children:Object(C.jsx)(y.b,{to:"/home",children:"Entrar"})})})),R=c(40),B=c.n(R);var E=function(){return Object(C.jsxs)("div",{className:B.a.navBar,children:[Object(C.jsx)(y.b,{to:"/",children:"Landing?"}),Object(C.jsx)(y.b,{to:"/home",children:"Home"}),Object(C.jsx)(y.b,{to:"/home/create",children:"Create"}),Object(C.jsx)(y.b,{to:"/home/diets",children:"Diets"})]})};var N=Object(r.b)((function(e){return{details:e.details}}),{getRecipeById:function(e){return function(t){u.get("".concat(O,"/recipes/").concat(e)).then((function(e){return t({type:d,payload:e.data})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.details,c=e.getRecipeById,a=e.match;return Object(n.useEffect)((function(){c(a.params.id)}),[c,a.params.id]),Object(C.jsxs)("h3",{children:["Details of ",t.title]})})),I=c(15),w=c(12),k=c(18),D=c.n(k),T=c(28);function L(){var e=Object(n.useState)({title:"",summary:"",image:"",diets:{vegetarian:!1,vegan:!1,glutenFree:!1}}),t=Object(w.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)({}),r=Object(w.a)(i,2),s=r[0],u=r[1],j=Object(n.useState)({vegetarian:!1,vegan:!1,glutenFree:!1}),d=Object(w.a)(j,2),b=d[0],p=d[1],h=Object(n.useState)([]),O=Object(w.a)(h,2),f=O[0],x=O[1],m={number:f.length+1,step:""},g=function(e){a(Object(l.a)(Object(l.a)({},c),{},Object(I.a)({},e.target.name,e.target.value))),u(function(e){var t={};return e.title||(t.title="(your recipe must have a title!)"),e.summary||(t.summary="(your recipe must have a summary!)"),t}(Object(l.a)(Object(l.a)({},c),{},Object(I.a)({},e.target.name,e.target.value))))},v=function(e){p(Object(l.a)(Object(l.a)({},b),{},Object(I.a)({},e.target.id,e.target.checked)))},_=function(e){var t=Object(o.a)(f);f[e.target.name-1].step=e.target.value,x(t)};return Object(C.jsxs)("form",{className:D.a.createRecipe,children:[Object(C.jsxs)("label",{children:["Recipe title: ",s.title]}),Object(C.jsx)("input",{type:"text",name:"title",onChange:g,required:!0}),Object(C.jsxs)("span",{children:["summary: ",s.summary]}),Object(C.jsx)("textarea",{type:"text",name:"summary",onChange:g,required:!0}),Object(C.jsx)("label",{children:"Step by step:"}),Object(C.jsxs)("ol",{className:D.a.instructions,children:[f.map((function(e){return Object(C.jsx)("li",{className:D.a.step,children:Object(C.jsx)("input",{name:e.number,onChange:_})},e.number)})),Object(C.jsx)("input",{type:"button",value:"Add step",onClick:function(){x([].concat(Object(o.a)(f),[Object(l.a)({},m)]))}}),Object(C.jsx)("input",{type:"button",value:"Remove last step",onClick:function(){var e=f.slice(0,f.length-1);x(e)},style:0===f.length?{visibility:"hidden"}:null})]}),Object(C.jsx)("label",{children:"Select any diets your recipe is a part of:"}),Object(C.jsxs)("div",{className:D.a.diets,children:[Object(C.jsx)("input",{type:"checkbox",name:"diets",id:"vegetarian",onChange:v}),Object(C.jsx)("label",{children:"Vegetarian"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"checkbox",name:"diets",id:"vegan",onChange:v}),Object(C.jsx)("label",{children:"Vegan"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"checkbox",name:"diets",id:"glutenFree",onChange:v}),Object(C.jsx)("label",{children:"Gluten Free"})]}),Object(C.jsx)("label",{children:"URL of custom image:"}),Object(C.jsx)("input",{type:"url",name:"image",onChange:g}),Object(C.jsx)("input",{type:"submit",value:"Upload",onClick:function(e){e.preventDefault();var t=function(e,t,c){var n=Object(l.a)({},e);return console.log(e.image),console.log(n.image),""===n.image&&(n.image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"),Object(l.a)(Object(l.a)(Object(l.a)({},n),c),{},{analyzedInstructions:t})}(c,f,b);T.post("http://localhost:3001/recipe",t)}})]})}var F=Object(r.b)((function(e){return{diets:e.diets}}),{getDiets:function(){return function(e){u.get("".concat(O,"/types")).then((function(t){return e({type:b,payload:t.data})}))}}})((function(e){var t=e.diets,c=e.getDiets;return 0===t.length&&c(),Object(C.jsx)("div",{children:t.map((function(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:e.name}),Object(C.jsx)("span",{children:e.description})]},e.id)}))})})),P=c(19),A=c.n(P);function H(e){var t=e.title,c=e.image,n=e.diets,a=e.id;return Object(C.jsx)("div",{className:A.a.recipeCardContainer,style:{backgroundImage:"url(".concat(c,")")},children:Object(C.jsx)(y.b,{to:"/home/recipe/".concat(a),className:A.a.container,children:Object(C.jsxs)("div",{className:A.a.recipeCardInfo,children:[Object(C.jsx)("h3",{children:t}),Object(C.jsx)("div",{className:A.a.diets,children:n.map((function(e,t){return Object(C.jsx)("div",{children:e},t)}))})]})})})}var G=c(22),X=c.n(G);var U=Object(r.b)((function(e){return{recipes:e.recipes}}))((function(e){var t=e.recipes,c=Object(n.useState)(1),a=Object(w.a)(c,2),i=a[0],r=a[1];Object(n.useEffect)((function(){r(1)}),[t,r]);for(var s=9*(i-1),o=9*i,l=t.slice(s,o),u=[],j=1;j<=Math.ceil(t.length/9);j++)u.push(j);var d=function(e){r(parseInt(e.target.id))};return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:X.a.recipesContainer,children:l.map((function(e){return Object(C.jsx)(H,{id:e.id,title:e.title,image:e.image,diets:e.diets},e.id)}))}),Object(C.jsxs)("ul",{className:X.a.pagesList,children:[Object(C.jsx)("li",{onClick:function(){i>1&&r(i-1)},children:"\u2190"}),u.map((function(e){return Object(C.jsx)("li",{id:e,onClick:d,className:parseInt(i)===e?X.a.active:null,children:e},e)})),Object(C.jsx)("li",{onClick:function(){i!==u[u.length-1]&&r(i+1)},children:"\u2192"})]})]})})),V=c(23),M=c.n(V);var q=Object(r.b)(null,{getRecipesByName:function(e){return function(t){u.get("".concat(O,"/recipes?name=").concat(e)).then((function(e){return t({type:j,payload:e.data})})).catch((function(e){return console.log(e)}))}},order:function(e){return function(t){t({type:p,payload:e})}}})((function(e){var t=e.getRecipesByName,c=e.order,a=Object(n.useState)(""),i=Object(w.a)(a,2),r=i[0],s=i[1];return Object(C.jsxs)("div",{className:M.a.searchBarContainer,children:[Object(C.jsx)("input",{className:M.a.searchBar,type:"text",placeholder:"Search for recipes...",onChange:function(e){s(e.target.value)}}),Object(C.jsx)("button",{onClick:function(){t(r),s("")},className:M.a.searchButton,children:"search"}),Object(C.jsxs)("select",{type:"options",onChange:function(e){c(e.target.value)},children:[Object(C.jsx)("option",{children:"Order by"}),Object(C.jsx)("option",{value:"title-ascendent",children:"Title A-Z"}),Object(C.jsx)("option",{value:"title-descendent",children:"Title Z-A"}),Object(C.jsx)("option",{value:"score-descendent",children:"Best Score"}),Object(C.jsx)("option",{value:"score-ascendent",children:"Score"}),Object(C.jsx)("option",{value:"health-descendent",children:"Best Health Score"}),Object(C.jsx)("option",{value:"health-ascendent",children:"Health Score"})]})]})}));var J=Object(r.b)((function(e){return{recipes:e.recipes}}),{getRecipes:f})((function(e){var t=e.recipes,c=e.getRecipes;return Object(n.useEffect)((function(){0===t.length&&c()}),[t.length,c]),Object(C.jsxs)("div",{children:[Object(C.jsx)(q,{}),Object(C.jsx)(U,{})]})}));var K=function(){return Object(C.jsxs)(r.a,{store:v,children:[Object(C.jsx)(_.a,{exact:!0,path:"/",component:S}),Object(C.jsx)(_.a,{path:"/home",component:E}),Object(C.jsx)(_.a,{exact:!0,path:"/home",component:J}),Object(C.jsx)(_.a,{exact:!0,path:"/home/recipe/:id",component:N}),Object(C.jsx)(_.a,{exact:!0,path:"/home/create",component:L}),Object(C.jsx)(_.a,{exact:!0,path:"/home/diets",component:F})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};i.a.render(Object(C.jsx)(y.a,{children:Object(C.jsx)(K,{})}),document.getElementById("root")),Y()}},[[74,1,2]]]);
//# sourceMappingURL=main.f0a47d23.chunk.js.map