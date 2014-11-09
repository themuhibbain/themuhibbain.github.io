/*
 * jQuery WidowFix Plugin
 * http://matthewlein.com/widowfix/
 * Copyright (c) 2010 Matthew Lein
 * Version: 1.3.2 (7/23/2011)
 * Dual licensed under the MIT and GPL licenses
 * Requires: jQuery v1.4 or later
 */
!function(t){jQuery.fn.widowFix=function(i){var n={letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},e=t.extend(n,i);return this.length?this.each(function(){function i(){""===s&&(s=h.pop(),i())}var n,r=t(this);if(e.linkFix){var l=r.find("a:last");l.wrap("<var>");var a=t("var").html();n=l.contents()[0],l.contents().unwrap()}var h=t(this).html().split(" "),s=h.pop();if(!(h.length<=1)){if(i(),e.dashes){var u=["-","\u2013","\u2014"];t.each(u,function(t,i){return s.indexOf(i)>0?(s='<span style="white-space:nowrap;">'+s+"</span>",!1):void 0})}var c=h[h.length-1];if(e.linkFix){if(null!==e.letterLimit&&n.length>=e.letterLimit)return void r.find("var").each(function(){t(this).contents().replaceWith(a),t(this).contents().unwrap()});if(null!==e.prevLimit&&c.length>=e.prevLimit)return void r.find("var").each(function(){t(this).contents().replaceWith(a),t(this).contents().unwrap()})}else{if(null!==e.letterLimit&&s.length>=e.letterLimit)return;if(null!==e.prevLimit&&c.length>=e.prevLimit)return}var o=h.join(" ")+"&nbsp;"+s;r.html(o),e.linkFix&&r.find("var").each(function(){t(this).contents().replaceWith(a),t(this).contents().unwrap()})}}):void 0}}(jQuery);