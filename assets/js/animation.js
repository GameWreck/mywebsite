(function(){var t,i=function(t,i){return function(){return t.apply(i,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,i){var e,n;for(e in t)null!=(n=t[e])&&(i[e]=n);return i},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function e(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},e.prototype.init=function(){var t;return(this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t)?this.start():document.addEventListener("DOMContentLoaded",this.start)},e.prototype.start=function(){var t,i,e,n;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(i=0,e=(n=this.boxes).length;i<e;i++)t=n[i],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},e.prototype.stop=function(){if(window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval)return clearInterval(this.interval)},e.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},e.prototype.applyStyle=function(t,i){var e,n,o;return n=t.getAttribute("data-wow-duration"),e=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),t.setAttribute("style",this.customStyle(i,n,e,o))},e.prototype.resetStyle=function(){var t,i,e,n,o;for(i=0,n=this.boxes,o=[],e=n.length;i<e;i++)t=n[i],o.push(t.setAttribute("style","visibility: visible;"));return o},e.prototype.customStyle=function(t,i,e,n){var o;return o=t?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",i&&(o+="-webkit-animation-duration: "+i+"; -moz-animation-duration: "+i+"; animation-duration: "+i+";"),e&&(o+="-webkit-animation-delay: "+e+"; -moz-animation-delay: "+e+"; animation-delay: "+e+";"),n&&(o+="-webkit-animation-iteration-count: "+n+"; -moz-animation-iteration-count: "+n+"; animation-iteration-count: "+n+";"),o},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var i,e,n,o;for(i=0,n=this.boxes,o=[],e=n.length;i<e;i++)if(t=n[i]){if(this.isVisible(t)){this.show(t);continue}o.push(t)}return o}).call(this),!this.boxes.length))return this.stop()},e.prototype.offsetTop=function(t){var i;for(i=t.offsetTop;t=t.offsetParent;)i+=t.offsetTop;return i},e.prototype.isVisible=function(t){var i,e,n,o,s;return e=t.getAttribute("data-wow-offset")||this.config.offset,o=(s=window.pageYOffset)+this.element.clientHeight-e,i=(n=this.offsetTop(t))+t.clientHeight,n<=o&&i>=s},e.prototype.util=function(){return this._util||(this._util=new t)},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this),(wow=new WOW({animateClass:"animated",offset:50})).init();