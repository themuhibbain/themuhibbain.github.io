(function(){$(function(){var e;return $(".lang .lg").click(function(){var e;return e=$(this).parents("article").hasClass("profile-en")?"profile-ms":"profile-en",$(".profile-wrapper").removeClass("profile-en profile-ms").addClass(e)}),e=function(){var e;return e=$(".footer").outerHeight(!0)-2,$(".profile-outer").css({"margin-bottom":""+e+"px"})},$(window).resize($.debounce(e,250)),e()})}).call(this);