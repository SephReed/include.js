/* include.js 2.0 | github.com/CapMousse/include.js */
(function(i){function f(a,b){var c;for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c++);}function j(){f(d,function(a,b){var c=a[0],k=a[1],l=a[2],m=[];f(k,function(a){void 0!==e[a]&&m.push(e[a])});if(k.length===m.length||0===k.length)l=l.apply(this,m),a.push(!0),null!==c&&(e[c]=l),null===c&&b+1===d.length&&(d=[],g=1)})}function h(a){var b=a.currentTarget||a.srcElement,c;"load"!==a.type&&"complete"!=b.readyState||(a=b.getAttribute("data-module"),c=b.getAttribute("data-count"),b.setAttribute("data-loaded",
!0),b.attachEvent?b.detachEvent("onreadystatechange",h):b.removeEventListener("load",h),c>d.length?e[a]=g--:null===d[0][0]&&(d[0][0]=a),j())}function p(a){var b=a;if(e[b])j();else{/\.js/.test(a)||(a=a.replace(".","/"),a+=".js");var c=a;setTimeout(function(){var a,d=!1;f(document.getElementsByTagName("script"),function(a){if(a.getAttribute("data-module")&&a.getAttribute("data-module")===b)return d=a,!1});d||(g++,a=document.createElement("script"),a.async=!0,a.type="text/javascript",a.src=c,a.setAttribute("data-module",
b),a.setAttribute("data-count",g),a.setAttribute("data-loaded",!1),n?n.parentNode.insertBefore(a,n):q.appendChild(a),a.attachEvent?a.attachEvent("onreadystatechange",h):a.addEventListener("load",h,!1))},0)}}var e={},d=[],g=1,n=document.getElementsByTagName("base")[0],q=document.getElementsByTagName("head")[0];i.include=i.require=i.define=function(a,b,c){"string"!==typeof a&&(c=b,b=a,a=null);"object"!==typeof b&&(c=b,b=[]);d.unshift([a,b,c]);j();b.length&&f(b,p)}})(this);