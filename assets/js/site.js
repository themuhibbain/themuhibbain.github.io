(function(){String.prototype.trunc=function(t,n){var i,a;return a=this.length>t,i=a?this.substr(0,t-1):this,i=n&&a?i.substr(0,i.lastIndexOf(" ")):i,a?i+"&hellip;":i},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},$.debounce=function(t,n,i){return function(){var a,r,e,s,c;return e=this,a=arguments,s=function(){var n;return n=null,i?void 0:t.apply(e,a)},r=i&&!c,clearTimeout(c),c=setTimeout(s,n),r?t.apply(e,a):void 0}},$(function(){return FastClick.attach(document.body),$.ajax({dataType:"jsonp",url:"https://api.instagram.com/v1/users/470161390/media/recent",data:{client_id:"18cab2f355964a2fa6238096fc94483b",count:9},error:function(){},success:function(t){var n;return n=[],$.each(t.data,function(t,i){var a;return a=i.caption.text.replace(/\s+/g," ").replace(/THE MUHIBBAIN - Update\./g,"").trim(),a=a.replace(/[#]+[A-Za-z0-9-_]+/g,""),a=a.trim().replace(/via\s*$/,""),a="<div class='caption'><div class='caption-inner'>"+a.trim().trunc(200,!0)+"</div></div>",n.push('<figure>\n  <img src="'+i.images.standard_resolution.url+'" class="thumb" alt="" data-filter=\''+i.filter+"'>\n  <figcaption>\n    "+a+'\n    <div class="likes"><div class="likes-inner">'+i.likes.count+' likes</div></div>\n    <a href="'+i.link+'" target="_blank">View on Instagram</a>\n  </figcaption>\n</figure>')}),$(".instagram").html(n.join(""))}})})}).call(this);