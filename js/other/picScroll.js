/*
 * 
 * 滑动图片
 * author : crow
 * 2014/08/28
 * 
 */

$(document).ready(function(){
		//初始化所有works标签下的li的left属性
		$('[id = works]').each(function(){
			var i=0;
			$(this).children("li").each(function(){
				if($(window).width() < 600){
					$(this).css("left", 160 * i);
				}else{
					$(this).css("left", 202 * i);
				}
				
				i++;
			});
		});
	var touch =("createTouch" in document);//判定是否为手持设备
	var StartEvent = touch ? "touchstart" : "mousedown";//支持触摸式使用相应的事件替代 
	var MoveEvent = touch ? "touchmove" : "mousemove"; 
	var EndEvent = touch ? "touchend" : "mouseup"; 

	$('[id = works]').each(function(){

		//监听鼠标按下事件
		$(this).bind("StartEvent", getPageX = function(event){
			event.preventDefault();
			var mousedownX = event.pageX;	//鼠标按下时，起始X坐标

			//监控鼠标移动事件
			var temp = 0;
			$(this).bind("MoveEvent", movePic = function(event){
				
				var resultX = event.pageX;		//鼠标移动时，最终X坐标
				var differ = mousedownX - resultX;		//使用差值，可以优化代码
				var len = $(this).children("li").length;

					$(this).children("li").each(function(){
						$(this).css("left", $(this).position().left - (differ - temp ) * 1.2 + "px");
					});
	
					temp = differ;
			});
			
			//监听鼠标弹起事件
			$(this).bind("EndEvent", returnPo_01 = function(event){

				var len = $(this).children("li").length;
				//当向右移动到底，限制再次移动
				if(parseInt($(this).children("li")[0].style.left) > 0){
					var temp = parseInt($(this).children("li")[0].style.left);
					$(this).children("li").each(function(){
						$(this).animate({left:$(this).position().left - temp + "px"});
					});
				}
				//当向左移动到底，限制再次移动
				if(parseInt($(this).children("li")[len-1].style.left) < 808){
					var temp = parseInt($(this).children("li")[len-1].style.left);
					$(this).children("li").each(function(){
							$(this).animate({left:$(this).position().left + (800 - temp) + "px"});
						});
				}
				$(this).unbind("MoveEvent", movePic);
				
			});
			
			//监听鼠标移出事件
			$(this).bind("mouseout", returnPo_02 = function(event){
				
				var len = $(this).children("li").length;

				var temp = parseInt($(this).children("li")[0].style.left);
				if(parseInt($(this).children("li")[0].style.left) > 0){
					$(this).children("li").each(function(){
						$(this).animate({left:$(this).position().left - temp + "px"});
					});
				}
				else if(parseInt($(this).children("li")[len-1].style.left) < 808){
					var temp = parseInt($(this).children("li")[len-1].style.left);
					$(this).children("li").each(function(){
							$(this).animate({left:$(this).position().left + (800 - temp) + "px"});			
						});
				}
				
				//删除监听事件
				$(this).unbind("MoveEvent", movePic);
				$(this).unbind("EndEvent",	returnPo_01);
				$(this).unbind("mouseout",	returnPo_02);
				$(this).unbind("StartEvent", getPageX);
			});
		});
	});
	
});
