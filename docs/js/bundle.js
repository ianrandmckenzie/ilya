"use strict";function getCheffy(o,e){$(".cls-1").css("fill","#c1272d"),$(this).css("fill","#e7e7e7"),$(".info-panel").hide(),$(o).width("0px"),$(o).animate({width:"100%"},1500,"linear"),$(e).show()}$("#logo_1").click(function(){getCheffy(".shape_1","#ilya"),$("#profile_photo").hide(),$("#profile_photo").fadeIn(2e3)}),$("#logo_2").click(function(){getCheffy(".shape_1","#social")}),$("#logo_3").click(function(){getCheffy(".shape_1","#bio")}),$("#logo_4").click(function(){getCheffy(".shape_1","#extra")}),$("#logo_5").click(function(){getCheffy(".shape_2","#portfolio"),$("#portfolio").show()});