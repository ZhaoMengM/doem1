$(function(){
	$(".xiala ul").hide();
	$(".menu_li").mouseover(function(){
		$(".xiala ul").eq($(this).index()).stop().slideDown(1500);
	})
	$(".menu_li").mouseout(function(){
		$(".xiala ul").eq($(this).index()).stop().slideUp(1500);
	})
})
