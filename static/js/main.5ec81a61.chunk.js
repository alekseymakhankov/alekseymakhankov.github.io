(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(47)},25:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),l=(n(25),n(52)),i=n(53),s=n(51),u=n(4),m=n(5),d=n(8),p=n(6),f=n(9),h=n(50),b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[0]&&"string"===typeof t[0]?t.join(" "):function(e){return Object.keys(e).filter(function(t){return!!e[t]}).reduce(function(e,t){return e?"".concat(e).concat(t?" ".concat(t):""):"".concat(t)},"")}(t[0])},E=n(18),v=(n(28),function(){return c.a.createElement("div",{className:"home-wrapper"},c.a.createElement("div",{className:"title"},"Welcome to awesome packages landing"))}),O=n(11),j=(n(30),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._updateIframeContent()}},{key:"componentDidUpdate",value:function(e,t){this._updateIframeContent()}},{key:"_defineUrl",value:function(){var e=this.props,t=e.id,n=e.file,a=n?"?file=".concat(n):"";return"https://gist.github.com/".concat(t,".js").concat(a)}},{key:"_updateIframeContent",value:function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,c=a.document;a.contentDocument?c=a.contentDocument:a.contentWindow&&(c=a.contentWindow.document);var r=this._defineUrl(),o='<script type="text/javascript" src="'.concat(r,'"><\/script>'),l=n?"gist-".concat(t,"-").concat(n):"gist-".concat(t),i="onload=\"parent.document.getElementById('".concat(l,"').style.height=document.body.scrollHeight + 'px'\""),s='<html><head><base target="_parent">'.concat("<style>*{font-size:12px;}</style>","</head><body ").concat(i,">").concat(o,"</body></html>");c.open(),c.writeln(s),c.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.file;return c.a.createElement("iframe",{ref:function(t){e.iframeNode=t},id:a?"gist-".concat(n,"-").concat(a):"gist-".concat(n),title:"gist",width:"100%",frameBorder:"0",marginwidth:"0",marginheight:"0",hspace:"0",vspace:"0"})}}]),t}(c.a.PureComponent)),y=(n(32),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).headerRef=c.a.createRef(),n.handleScroll=function(){var e=n.headerRef.current;e&&(document.body.scrollTop>50||document.documentElement.scrollTop>50?e.classList.add("small"):e.classList.remove("small"))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return c.a.createElement("header",{className:"header-wrapper",ref:this.headerRef},c.a.createElement("div",{className:"title"},this.props.title),c.a.createElement("a",{className:"github-icon-wrapper",href:"https://github.com/alekseymakhankov/hyper-modal",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"github-icon"})))}}]),t}(c.a.Component)),w=(n(34),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:b("base-layout-wrapper",this.props.className)},c.a.createElement(y,{title:this.props.title}),c.a.createElement("div",{className:"content-wrapper"},this.props.children))}}]),t}(c.a.Component)),k=(n(36),function(e){var t=e.onClick,n=e.title,a=e.wide,r=e.position,o=void 0===r?"left":r,l=function(){return c.a.createElement("button",{className:"custom-button",onClick:t},n)};return a?c.a.createElement("div",{className:b("button-wrapper",o)},c.a.createElement(l,null)):c.a.createElement(l,null)}),g=n(10),C=(n(38),{h1:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h1",n,t)},h2:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h2",n,t)},h3:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h3",n,t)},h4:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h4",n,t)},h5:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h5",n,t)},h6:function(e){var t=e.title,n=Object(g.a)(e,["title"]);return c.a.createElement("h6",n,t)}}),N=function(e){var t=e.title,n=e.size,a=C[void 0===n?"h1":n];return c.a.createElement(a,{title:t,className:"custom-header-text"})},x=(n(40),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).openModal=function(){return n.setState({isModalOpen:!0})},n.closeModal=function(){return n.setState({isModalOpen:!1})},n.state={isModalOpen:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(w,{className:"example-hyper-modal-wrapper",title:"react hyper modal"},c.a.createElement("div",{className:"content"},c.a.createElement(O.a,{isOpen:this.state.isModalOpen,requestClose:this.closeModal,classes:{contentClassName:"modal-content"}}),c.a.createElement(N,{title:"Simple controlled modal"}),c.a.createElement(j,{id:"965ebd30f423f14ac342ba6be07fe54b",file:"react-hyper-modal-simple-example.jsx"}),c.a.createElement(k,{onClick:this.openModal,title:"open simple modal",position:"center",wide:!0}),c.a.createElement(N,{title:"Uncontrolled modal"}),c.a.createElement(j,{id:"965ebd30f423f14ac342ba6be07fe54b",file:"react-hyper-modal-uncontrolled-example.jsx"}),c.a.createElement(O.a,{classes:{contentClassName:"modal-content"},renderOpenButton:function(e){return c.a.createElement(k,{onClick:e,title:"open uncontrolled modal",position:"center",wide:!0})}}),c.a.createElement(N,{title:"Uncontrolled modal with default button"}),c.a.createElement(j,{id:"965ebd30f423f14ac342ba6be07fe54b",file:"react-hyper-modal-default-button-example.jsx"}),c.a.createElement(O.a,{classes:{contentClassName:"modal-content"},renderOpenButton:!0}),c.a.createElement(N,{title:"Custom modal content"}),c.a.createElement(j,{id:"965ebd30f423f14ac342ba6be07fe54b",file:"react-hyper-modal-custom-content-example.jsx"}),c.a.createElement(O.a,{classes:{contentClassName:"modal-content"},renderOpenButton:function(e){return c.a.createElement(k,{onClick:e,title:"open modal",position:"center",wide:!0})}},c.a.createElement("div",null,"Your awesome modal content")),c.a.createElement(N,{title:"Fullscreen modal"}),c.a.createElement(j,{id:"965ebd30f423f14ac342ba6be07fe54b",file:"react-hyper-modal-fullscreen-example.jsx"}),c.a.createElement(O.a,{classes:{contentClassName:"modal-fullscreen"},isFullscreen:!0,renderOpenButton:function(e){return c.a.createElement(k,{onClick:e,title:"open fullscreen modal",position:"center",wide:!0})}})))}}]),t}(c.a.Component)),M=(n(42),{home:v,"hyper-modal":x}),B=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=function(e){var t={};return e.replace("?","").split("&").forEach(function(e){var n=e.split("="),a=Object(E.a)(n,2),c=a[0],r=a[1];t[c]=r}),t}(this.props.location.search).package||"home",t=M[e];return c.a.createElement(t,null)}}]),t}(a.Component),_=Object(h.a)(B),S=function(e){return c.a.createElement(l.a,{basename:"/packages"},c.a.createElement(i.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:_}),"/>"))};o.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.5ec81a61.chunk.js.map