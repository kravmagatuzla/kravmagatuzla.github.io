(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),s=(a(140),function(e){return r.a.createElement("div",{className:"first-section"},r.a.createElement("div",{className:"about-us"},r.a.createElement("div",{className:"about-us-title"},"O nama"),r.a.createElement("p",null,e.aboutus)),r.a.createElement("div",{className:"about-us"},r.a.createElement("div",{className:"about-us-facebook"},r.a.createElement("a",{href:"https://www.facebook.com/408588132922283/",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("div",{className:"facebook-page-plugin"},r.a.createElement("iframe",{title:"facebook krav maga tuzla",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FSports-Team%2FKRAV-MAGA-IKMI-Tuzla-408588132922283%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=372257280226790",width:"300",height:"500",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))))}),o=function(e){var t=e.instagram.edges.slice(0,6);return r.a.createElement("div",{className:"second-section"},r.a.createElement("div",{className:"about-us"},r.a.createElement("div",{className:"about-us-facebook about-us-krav-maga"},"Krav Maga"),r.a.createElement("p",null,"`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus metus odio, quis tristique odio vehicula vel. Quisque porttitor posuere sapien et pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi congue justo vitae congue luctus. Duis rutrum luctus vulputate. Aliquam nec nulla orci. Sed sit amet molestie ligula. Aliquam erat volutpat. Praesent id lorem sit amet libero ullamcorper mollis. Pellentesque egestas consectetur dolor id porttitor. Morbi commodo venenatis massa, ut finibus urna sollicitudin vel. Proin in tellus semper libero imperdiet egestas sed eget arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel tellus a sem aliquam viverra vel at libero. Suspendisse dapibus ipsum sed rhoncus egestas. Morbi sagittis, elit at eleifend sagittis, eros augue semper mauris, quis eleifend mi massa ut massa. Suspendisse sodales consequat efficitur. In massa felis, vulputate vitae faucibus iaculis, condimentum at leo. Phasellus in enim ac odio finibus vestibulum vitae at enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce suscipit sapien a rutrum dignissim. Pellentesque luctus elit vitae ultricies commodo. Curabitur luctus porttitor pretium. Sed sagittis interdum ipsum id posuere. Sed ex orci, venenatis non tempus id, luctus pellentesque nisi. Proin non.`")),r.a.createElement("div",{className:"about-us"},r.a.createElement("div",{className:"about-us-title about-us-instagram"},r.a.createElement("a",{href:"https://www.instagram.com/krav_maga_tuzla/",target:"_blank",rel:"noopener noreferrer"},"Instagram")),r.a.createElement("div",{className:"instagram-posts"},t.map(function(e,t){var a=e.node.caption,n="https://www.instagram.com/p/"+e.node.id+"/";return e.node.caption||(a=""),r.a.createElement("a",{rel:"noopener noreferrer",href:n,target:"_blank",className:"instagram-post",key:e.node.id},r.a.createElement("img",{title:a,style:{width:"100%",height:"auto"},alt:"",src:e.node.thumbnails[4].src}))}))))},l=function(e){e.data;return r.a.createElement("div",{className:"youtube-video-presentation"},r.a.createElement("iframe",{title:"youtube",allowFullScreen:"allowFullScreen",frameBorder:"0",id:"player",type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/sTzET3xvsZQ?autoplay=0&?enablejsapi=1&origin=http://kravmagatuzla.ba"}))},u=a(143),c=a(149);a.d(t,"query",function(){return d});t.default=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement(u.a,{store:c.a},r.a.createElement(i.a,{title:t.site.siteMetadata.title},r.a.createElement(s,{aboutus:t.site.siteMetadata.aboutus}),r.a.createElement(o,{instagram:t.allInstaNode}),r.a.createElement(l,null))))};var d="3286405775"},140:function(e,t,a){},141:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(139),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(141),c=a.n(u);a.d(t,"PageRenderer",function(){return c.a});var d=a(37);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(56),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,a){"use strict";a(150),a(153),a(76),a(154);var n=a(7),r=a.n(n),i=a(51),s=a.n(i),o=a(0),l=a.n(o),u=(a(140),a(142)),c=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"Made with ",l.a.createElement("a",{target:"__blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby.js")),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,l.a.createElement("a",{target:"__blank",rel:"noopener noreferrer",href:"https://drive.google.com/open?id=17hPzTo3gtvwgsYRuXoLlFF5KCNcIh6gG"},"Privacy Policy")),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,"+387 61 998 742"),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:kravmagatuzla@outlook.com",target:"_top"},"kravmagatuzla@outlook.com")))},d=a(143),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={images:["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],number:!1,yellow:!1,dropdown:!1},a.changePicture=a.changePicture.bind(s()(s()(a))),a.dotContainer=l.a.createRef(),a.startInterval=a.startInterval.bind(s()(s()(a))),a.openMenu=a.openMenu.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.changePicture=function(e){var t=e.target;clearInterval(this.intervalId);var a=this.dotContainer.current.children,n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var i;if(n){if(r>=a.length)break;i=a[r++]}else{if((r=a.next()).done)break;i=r.value}var s=i;Number(s.id)===Number(t.id)?s.className="active-dot":s.className="dot"}this.setState({number:Number(t.id)}),this.startInterval()},a.startInterval=function(){var e=this;this.intervalId=setInterval(function(){var t=e.state.number+1;e.state.number===e.state.images.length-1&&(t=0),e.props.dispatch({type:"UPDATE_SLIDE_NUMBER",number:t});var a=e.dotContainer.current.children,n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var i;if(n){if(r>=a.length)break;i=a[r++]}else{if((r=a.next()).done)break;i=r.value}var s=i,o=t;Number(s.id)===o?s.className="active-dot":s.className="dot"}e.setState({number:t})},5e3)},t.getDerivedStateFromProps=function(e,t){return t.number!==e.number||t.dropdown!==e.dropdown||t.loaded!==e.loaded?{number:e.number,dropdown:e.dropdown,loaded:e.loaded}:null},a.componentDidMount=function(){var e=this;this.startInterval(),this.props.dispatch({type:"UPDATE_DROPDOWN_STATUS",dropdown:!1}),this.props.dispatch({type:"LOADED",loaded:!0});var t=this.dotContainer.current.children,a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var r;if(a){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var i=r,s=this.state.number;Number(i.id)===s?i.className="active-dot":i.className="dot"}window.setTimeout(function(){e.setState({yellow:!0})},1e3)},a.componentWillUnmount=function(){clearInterval(this.intervalId)},a.openMenu=function(){this.state.dropdown?this.props.dispatch({type:"UPDATE_DROPDOWN_STATUS",dropdown:!1}):this.props.dispatch({type:"UPDATE_DROPDOWN_STATUS",dropdown:!0})},a.render=function(){var e,t,a,n;return this.state.yellow&&(e={height:"40%"},t={opacity:1}),this.state.dropdown&&(a={opacity:1,visibility:"visible"},t={opacity:1,transform:"translateY(150px)"},e={height:"0%"},n={color:"white"}),this.state.dropdown||(n={position:"absolute"}),l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"logo-container"},l.a.createElement(u.Link,{to:"/",className:"logo"},"IKMI TUZLA")),l.a.createElement("i",{style:n,onClick:this.openMenu,className:"fas fa-bars menu"}),l.a.createElement("div",{style:a,className:"drop-menu"},l.a.createElement("nav",{className:"links"},l.a.createElement(u.Link,{to:"/termini"},"Termini"))),l.a.createElement("div",{className:"introduction"},l.a.createElement("span",{style:t},this.props.title),l.a.createElement("div",{style:e,className:"visual"}))),l.a.createElement("div",{className:"slideshow"},l.a.createElement("div",{className:"sildeshow-image",style:{backgroundImage:"url(/slideshow/"+this.state.images[this.state.number]}}),l.a.createElement("div",{ref:this.dotContainer,className:"dots"},l.a.createElement("span",{onClick:this.changePicture,id:"0",className:"active-dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"1",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"2",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"3",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"4",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"5",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"6",className:"dot"})))),this.props.children,l.a.createElement(c,null))},t}(o.Component),p=Object(d.b)(function(e){return{number:e.slideshow.number,dropdown:e.slideshow.dropdown,loaded:e.slideshow.loaded}})(m);t.a=p},149:function(e,t,a){"use strict";var n,r=a(147),i=(a(32),{slideshow:{number:0,dropdown:!1},otherState:{state:!1}}),s=function(e,t){switch(void 0===e&&(e=i),t.type){case"UPDATE_SLIDE_NUMBER":return Object.assign({},e,{slideshow:{number:t.number,dropdown:e.slideshow.dropdown}});case"UPDATE_DROPDOWN_STATUS":return Object.assign({},e,{slideshow:{number:e.slideshow.number,dropdown:t.dropdown}});default:return e}},o="undefined"!=typeof window&&window;o&&(n=Object(r.b)(s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),o||(n=Object(r.b)(s));t.a=n}}]);
//# sourceMappingURL=component---src-pages-index-js-f2bc8086682237258f23.js.map