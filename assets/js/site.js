(function(){String.prototype.trunc=function(t,a){var n,i;return i=this.length>t,n=i?this.substr(0,t-1):this,n=a&&i?n.substr(0,n.lastIndexOf(" ")):n,i?n+"&hellip;":n},$(function(){return FastClick.attach(document.body),$('img[src*=".svg"]').each(function(){var t,a,n,i;return t=$(this),n=t.attr("id"),a=t.attr("class"),i=t.attr("src"),$.get(i,function(i){var r;return r=$(i).find("svg"),null!=n&&(r=r.attr("id",n)),null!=a&&(r=r.attr("class",a+" replaced-svg")),r=r.removeAttr("xmlns:a"),t.replaceWith(r)},"xml")}),$.ajax({dataType:"jsonp",url:"https://api.instagram.com/v1/users/470161390/media/recent",data:{client_id:"18cab2f355964a2fa6238096fc94483b",count:6},success:function(t){var a;return a=[],$.each(t.data,function(t,n){var i;return i=$.trim(n.caption.text).replace(/\s+/g," ").match(/THE MUHIBBAIN - Update\.\s+(.*)\s+THE MUHIBBAIN - Update\./)[1],i=$.trim(i).trunc(200,!0),a.push('<figure>\n  <img src="'+n.images.low_resolution.url+'" class="thumb" alt="" data-filter=\''+n.filter+'\'>\n  <figcaption>\n    <div class="caption"><div class="caption-inner">'+i+'</div></div>\n    <div class="likes">'+n.likes.count+' likes</div>\n    <a href="'+n.link+'" target="_blank">View on Instagram</a>\n  </figcaption>\n</figure>')}),$(".instagram").append(a.join(""))}})})}).call(this);