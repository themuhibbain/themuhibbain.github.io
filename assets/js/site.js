(function(){String.prototype.trunc=function(t,n){var i,r;return r=this.length>t,i=r?this.substr(0,t-1):this,i=n&&r?i.substr(0,i.lastIndexOf(" ")):i,r?i+"&hellip;":i},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},$.debounce=function(t,n,i){return function(){var r,e,a,s,o;return a=this,r=arguments,s=function(){var n;return n=null,i?void 0:t.apply(a,r)},e=i&&!o,clearTimeout(o),o=setTimeout(s,n),e?t.apply(a,r):void 0}},$.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"",seconds:"1m",minute:"1m",minutes:"%dm",hour:"1h",hours:"%dh",day:"1d",days:"%dd",month:"1mo",months:"%dmo",year:"1yr",years:"%dyr",wordSeparator:" ",numbers:[]},$(function(){return FastClick.attach(document.body),$.ajax({dataType:"jsonp",url:"https://api.instagram.com/v1/users/470161390/media/recent",data:{client_id:"18cab2f355964a2fa6238096fc94483b",count:9},error:function(){},success:function(t){var n;return n=[],$.each(t.data,function(t,i){var r,e;return r=i.caption.text.replace(/\s+/g," ").replace(/THE MUHIBBAIN - Update\./g,"").trim(),r=r.replace(/[#]+[A-Za-z0-9-_]+/g,""),r=r.trim().replace(/via\s*$/,""),r="<div class='caption'><div class='caption-inner'>"+r.trim().trunc(200,!0)+"</div></div>",e=$.timeago(new Date(1e3*parseInt(i.created_time)).toISOString()),n.push('<figure>\n  <img src="'+i.images.standard_resolution.url+'" class="thumb" alt="" data-filter=\''+i.filter+"'>\n  <figcaption>\n    "+r+'\n    <div class="likes"><div class="likes-inner"><b>'+i.likes.count+" likes</b> &middot; "+e+'</div></div>\n    <a href="'+i.link+'" target="_blank">View on Instagram</a>\n  </figcaption>\n</figure>')}),$(".instagram").html(n.join(""))}})})}).call(this);