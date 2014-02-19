/*
 *
 *
 *
 *
 */

var Tools = Tools || {};

Tools._canvas = $("#InterCanvas");
Tools._canImg = $(".upper-canvas");
Tools._InterCanvasTwo = $("#InterCanvasTwo");
Tools._upperCanvas = $('.upper-canvas');
Tools._input = $("#input");
Tools._people_add = $("#people_add");
Tools._people_right = $("#people_add_right");

Tools._isTouch = ("createTouch" in document);
Tools._isDown = 0;
Tools._StartEvent = Tools._isTouch ? "touchstart" : "mousedown";
Tools._MoveEvent = Tools._isTouch ? "touchmove" : "mousemove";
Tools._EndEvent = Tools._isTouch ? "touchend" : "mouseup";
Tools._cPushArray = new Array();
Tools._cStep = -1;
Tools._canvas_width = Tools._canvas.attr("width");
Tools._canvas_height = Tools._canvas.attr("height");
Tools._transform = "people";
Tools._people = true;
Tools._cube = false;
Tools._cuboid = false;


Tools.whenMouseDown = function(){
	var _isTouch = Tools._isTouch;
	 if(_isTouch){
		
		if(event.touches.length > 1){

            var handleTouchyPinch = function (e, $target, data) {
                var scale = data.scale;
                $target.css({'webkitTransform':'scale(' + scale + ',' + scale + ')'});
            };

            $('#InterCanvas').bind('touchy-pinch', handleTouchyPinch);
		}

	  	var evt = event.touches[0];
	  	var offset = $("#main_div").offset();
        var x=parseInt(evt.clientX - offset.left);
        var y=parseInt(evt.clientY - offset.top);

	}else{
		if(event){
			var x = event.offsetX;
			var y = event.offsetY;
		}
	}
	return [x,y];
};

Tools.mousewhell = function(e){
		var e = e || event;
		direction = event.wheelDelta > 0 ? 1 : -1;//1向上 -1 向下
		var whell = Tools._canvas.css("transform");
		if(direction == 1){
			if(whell == 'none')
				Tools._canvas.css("transform", "scale(1.1)");
			else{
				multiple = whell.substring(whell.indexOf("(")+1,whell.indexOf(","))
				Tools._canvas.css("transform", "scale("+multiple*1.1+")");
			}
		}else if(direction == -1){
			if (whell == 'none')
				Tools._canvas.css("transform", "scale(0.9)");
			else{
				multiple = whell.substring(whell.indexOf("(")+1,whell.indexOf(","))
				Tools._canvas.css("transform", "scale("+multiple*0.9+")");
			}
		}
};
function changeModels(transform){
			Tools.transform  =  transform;
			Tools._canvas.css("background","url(photo/"+transform+".png)");
			Tools._canvas[0].getContext('2d').clearRect(0,0,667,600);
			if(transform == "people"){
					Tools._people = true;
					Tools._cube = false;
					Tools._cuboid = false;
			}else if(transform == "cube"){
					Tools._people = false;
					Tools._cube = true;
					Tools._cuboid = false;
			}else if(transform == "cuboid"){
					Tools._people = false;
					Tools._cube = false;
					Tools._cuboid = true;
			}
}

Tools.publicMmethods = function(){
	
	this.ComeToImage = function(){

		var canImg = $('.upper-canvas');


		//////小正方形//////
		var Width = 33;
		var Height = 39;
		////////2号矩形/////
		var width = 35;
		var height = 75;
		/////////3号矩形////
		var rewidth = 90;
		var reheight = 103;
		///////最大矩形/////
		var lagwidth = 137;
		var lagheight = 158;
		////////正方形//////
		var maxwidth = 138;
		var maxheight = 108;

		////////长方体专用//////
		var cubiodwidth = 133;
		var cubiodheight = 299;
		var cubiodwidthTwo = 133;
		var cubiodheightTwo = 63;
		////////正方体////////
		var cubiodwidthWith = 147;
		var cubiodheightWith = 135;

		//创建图片
		var arr = [];

		function creat(Inter, ctx4, a, b, c, d, e, f) {
			ctx4.drawImage(Tools._canvas[0], a, b, c, d, 0, 0, e, f);
			ctx4.drawImage(canImg[0], a, b, c, d, 0, 0, e, f);
			ctx4.lineWidth = 1;
			ctx4.strokeStyle="#DADADA";
			ctx4.strokeRect(0, 0, e, f);
			ctx4.stroke();
			var data = Inter.toDataURL();
			arr.push(data);

			ctx4.clearRect(0, 0, e, f);
		};

		var InterCanvasTwo = Tools._InterCanvasTwo[0];
		var ctx5 = InterCanvasTwo.getContext('2d');
		if(Tools._people){
					/**
					 * 左臂
					 */
							///////////////////////小正方形//////////////////////////////
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 123, 92, Width, Height, Width, Height);
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 55, 57, width, height, width, height);
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 88, 18, Width, Height, Width, Height);
							////////////////////////长方形//////////////////////////////////
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 55, 130, Width, Height, Width, Height);
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 88, 56, width, height, width, height);
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 20, 57, width, height, width, height);
					/*
					 * 右臂
					 */
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 249, 57, width, height, width, height);
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 180, 60, Width, Height, Width, Height);
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 247, 20, Width, Height, Width, Height);
							InterCanvasTwo.width = Width;
							InterCanvasTwo.height = Height;
							creat(InterCanvasTwo, ctx5, 215, 130, Width, Height, Width, Height);
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 216, 57, width, height, width, height);
							InterCanvasTwo.width = width;
							InterCanvasTwo.height = height;
							creat(InterCanvasTwo, ctx5, 284, 57, width, height, width, height);
					/**
					 * 脚部
					 */
							InterCanvasTwo.width = height;
							InterCanvasTwo.height = width;
							creat(InterCanvasTwo, ctx5, 496, 566, height, width, height, width);
							creat(InterCanvasTwo, ctx5, 344, 566, height, width, height, width);
							creat(InterCanvasTwo, ctx5, 496, 566, height, width, height, width);
							creat(InterCanvasTwo, ctx5, 571, 566, height, width, height, width);	
							creat(InterCanvasTwo, ctx5, 420, 566, height, width, height, width);
							creat(InterCanvasTwo, ctx5, 571, 566, height, width, height, width);
					/**
					 * 身体
					 */
							//////////////////////3号矩形////////////////////////////////
							InterCanvasTwo.width = rewidth;
							InterCanvasTwo.height = reheight;
							creat(InterCanvasTwo, ctx5, 200, 462, rewidth, reheight, rewidth, reheight);	
							creat(InterCanvasTwo, ctx5, 24, 461, rewidth, reheight, rewidth, reheight);
							creat(InterCanvasTwo, ctx5, 113, 361, rewidth, reheight, rewidth, reheight);
							creat(InterCanvasTwo, ctx5, 24, 461, rewidth, reheight, rewidth, reheight);
							creat(InterCanvasTwo, ctx5, 113, 462, rewidth, reheight, rewidth, reheight);
							creat(InterCanvasTwo, ctx5, 288, 462, rewidth, reheight, rewidth, reheight);
					/**
					 * 头部
					 */
							//////////////////////最大矩形///////////////////////////////
							InterCanvasTwo.width = lagwidth;
							InterCanvasTwo.height = lagheight;

							InterCanvasTwo.width = maxwidth;
							InterCanvasTwo.height = maxheight;

							creat(InterCanvasTwo, ctx5, 505, 186, lagwidth, lagheight, lagwidth, lagheight);
							creat(InterCanvasTwo, ctx5, 233, 186, lagwidth, lagheight, lagwidth, lagheight);
							creat(InterCanvasTwo, ctx5, 367, 30, maxwidth, maxheight, maxwidth, maxheight); //头顶
							creat(InterCanvasTwo, ctx5, 367, 295, maxwidth, maxheight, maxwidth, maxheight); //底部
							creat(InterCanvasTwo, ctx5, 368, 185, lagwidth, lagheight, lagwidth, lagheight);
							creat(InterCanvasTwo, ctx5, 95, 185, lagwidth, lagheight, lagwidth, lagheight);
			}else if(Tools._cube){
							InterCanvasTwo.width = cubiodwidthWith;
							InterCanvasTwo.height = cubiodheightWith;
							creat(InterCanvasTwo, ctx5, 495, 233, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
							creat(InterCanvasTwo, ctx5, 200, 233, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
							creat(InterCanvasTwo, ctx5, 345, 100, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
							creat(InterCanvasTwo, ctx5, 345, 365, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
							creat(InterCanvasTwo, ctx5, 346, 232, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
							creat(InterCanvasTwo, ctx5, 50, 233, cubiodwidthWith, cubiodheightWith, cubiodwidthWith, cubiodheightWith);
			}else if(Tools._cuboid){
							InterCanvasTwo.width = cubiodwidth;
							InterCanvasTwo.height = cubiodheight;
							creat(InterCanvasTwo, ctx5, 322, 150, cubiodwidth, cubiodheight, cubiodwidth, cubiodheight);
							creat(InterCanvasTwo, ctx5, 55, 150, cubiodwidth, cubiodheight, cubiodwidth, cubiodheight);
							InterCanvasTwo.width = cubiodwidthTwo;
							InterCanvasTwo.height = cubiodheightTwo;
							creat(InterCanvasTwo, ctx5, 188, 30, cubiodwidthTwo, cubiodheightTwo, cubiodwidthTwo, cubiodheightTwo);
							InterCanvasTwo.width = cubiodwidthTwo;
							InterCanvasTwo.height = cubiodheightTwo;
							creat(InterCanvasTwo, ctx5, 188, 448, cubiodwidthTwo, cubiodheightTwo, cubiodwidthTwo, cubiodheightTwo);
							InterCanvasTwo.width = cubiodwidth;
							InterCanvasTwo.height = cubiodheight;
							creat(InterCanvasTwo, ctx5, 188, 150, cubiodwidth, cubiodheight, cubiodwidth, cubiodheight);
							creat(InterCanvasTwo, ctx5, 455, 150, cubiodwidth, cubiodheight, cubiodwidth, cubiodheight);
			}

		//更新3D
		$("#show", parent.document)[0].contentWindow.updataModel(arr);
	};

	this.postSever = function  () {

		var can2 = Tools._canvas[0];
		var can10 = Tools._InterCanvasTwo[0];

		can10.width = 667;
		can10.height = 600;

		var ctx10 = can10.getContext('2d');
		/*var img = new Image();
		img.src = "photo/white.png";*/

		// ctx10.drawImage(img, 0, 0);
		ctx10.drawImage(can2, 0, 0);

		var canvas =  Tools._InterCanvasTwo[0];
		var data = canvas.toDataURL();
		var url = data.substring(22);

		$.ajax({
			type : 'POST',
			url : "base64.php",
			data : {
				action : url,
				name : "111"
			},
			success : function (data){
				console.log(data);
			},
			dataType : "json"
		});
	};

	this.setConfig = function(speed){

		Tools._canvas.css("z-index","1000");

		$("#people_add").hide(speed);
	 	$("iframe").hide(speed);
	 	if(speed){
	 		$("#input").fadeIn(speed);
	 	}else
	 		$("#input").hide(0);
	 	$('.farbtastic').hide(speed);

		if($("#main_div").hasClass("draggable")){
			$("#main_div").draggable('destroy')
			$("#main_div").removeClass("draggable");
		}
	}
};

Tools.publicMmethods.prototype = {

	pencile : function(){
		
		Tools._canvas.unbind();
		this.setConfig();
		Tools._canvas.css("cursor","url(images/pencil.png),auto");

	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isDown = Tools._isDown;
	 	var  executionEnvironment = this;

	 	Tools._canvas.bind(Tools._StartEvent,function (e){
	 		
			var offset = Tools.whenMouseDown();
			var wid = $(".pain").val();

			_context.beginPath();
			_context.moveTo(offset[0],offset[1]);		
			_context.lineCap = "round";
			_context.lineJoin = "round";
			_context.lineWidth = wid/1.7;//画笔宽度
			_context.strokeStyle = $("#color").css("backgroundColor");//将画笔颜色设置成为选的颜色
			_isDown = true;

	 	});

	 	Tools._canvas.bind(Tools._MoveEvent,function (e){
		 		var offset = Tools.whenMouseDown();
		 		
				if(_isDown){
					_context.lineTo(offset[0],offset[1]);
					_context.stroke();
				}
				event.preventDefault();	
	 	});

	 	Tools._canvas.bind(Tools._EndEvent,function (e){
		 		_isDown = false;
		 		executionEnvironment.cpush();
		 		executionEnvironment.postSever();
				executionEnvironment.ComeToImage();
	 	});
	},

	pen : function(){
		
		Tools._canvas.unbind();
		this.setConfig();

		Tools._canvas.css("cursor","url(images/brush.png),auto");
	 	
	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isDown = Tools._isDown;
	 	var _penWidth = 0;
	 	var _penBg = null;

	 	var  executionEnvironment = this;

	 	var fill = function (x,y){
	 		_context.beginPath();
	        _context.fillStyle = _penBg;
	        _context.fillRect(x,y,_penWidth,_penWidth+4);
	        _context.stroke();
	 	}
	 	Tools._canvas.bind(Tools._StartEvent,function (e){
			offset = Tools.whenMouseDown();
			var wid = $(".pain").val();
			_context.beginPath();
			_context.moveTo(offset[0],offset[1]);		
			_context.lineCap = "round";
			_context.lineJoin = "round";
			_penWidth = wid/2;//画笔宽度
			_penBg = $("#color").css("backgroundColor");//将画笔颜色设置成为选的颜色
			_isDown = true;
	 	});
	 	Tools._canvas.bind(Tools._MoveEvent,function (e){
			offset = Tools.whenMouseDown();
			if(_isDown){
				fill(offset[0],offset[1]);
				_context.stroke();
			}
			event.preventDefault();		
	 	});
	 	Tools._canvas.bind(Tools._EndEvent,function (e){
	 		_isDown = false;
			executionEnvironment.cpush();
	 		executionEnvironment.postSever();
				executionEnvironment.ComeToImage();
	 	});
	},

	brush : function(){
		Tools._canvas.unbind();
		this.setConfig();

		$(".draw").css("cursor","url(images/cursor.gif),auto");
	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isDown = Tools._isDown;
	 	var _penWidth = 0;
	 	var _penBg = null;

	 	var  executionEnvironment = this;

	 	var _brush_fill = function (x,y){
	 		_context.beginPath();
	        _context.fillStyle = _penBg;
	        _context.fillRect(x,y,1,1);
	        _context.stroke();
	 	}
	 	var _brush_fill_crile = function (x,y){
	            le = $(".pain").val();
	            fu = 2*le;
	            var lo = le * 5;
	            for(var i = 0 ; i < lo ; i++){
	                var m = parseInt(Math.random()*(fu) - le);
	                var n = parseInt(Math.random()*(fu) - le);
	                _brush_fill(x-m,y-n);
	            }
	 	}

	 	Tools._canvas.bind(Tools._StartEvent,function (e){
			offset = Tools.whenMouseDown();
			var wid = $(".pain").val();
			_context.beginPath();
			_context.moveTo(offset[0],offset[1]);		
			_context.lineCap = "round";
			_context.lineJoin = "round";
			_penWidth = wid/2;//画笔宽度
			_penBg = $("#color").css("backgroundColor");//将画笔颜色设置成为选的颜色
			_isDown = true;
	 	});
	 	Tools._canvas.bind(Tools._MoveEvent,function (e){
			offset = Tools.whenMouseDown();
			if(_isDown){
				_brush_fill_crile(offset[0],offset[1]);
				_context.stroke();

				
			}
			event.preventDefault();		
	 	});
	 	Tools._canvas.bind(Tools._EndEvent,function (e){
	 		_isDown = false;
	 		executionEnvironment.postSever();
			executionEnvironment.cpush();
				executionEnvironment.ComeToImage();
	 	});
	},

	rubber : function(){
		Tools._canvas.unbind();
		this.setConfig();
 	
	 	Tools._canvas.css("cursor","url(images/color_circle.png),auto");
	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isDown = Tools._isDown;
	 	var  executionEnvironment = this;

	 	Tools._canvas.bind(Tools._StartEvent,function (e){
			_context.beginPath();
			_isDown = true;
	 	});
	 	Tools._canvas.bind(Tools._MoveEvent,function (e){
			var offset = Tools.whenMouseDown();
			if(_isDown){
				var wid = $(".pain").val();
				_context.clearRect(offset[0],offset[1],wid,wid);
				_context.stroke();
				
			}
			event.preventDefault();
	 	});
	 	Tools._canvas.bind(Tools._EndEvent,function (e){
	 		_isDown = false;
	 		executionEnvironment.ComeToImage();
	 		executionEnvironment.postSever();
	 		executionEnvironment.cpush();
	 	});
	},

	word : function(){
		Tools._canvas.unbind();
		this.setConfig(50);
 	
 		var  executionEnvironment = this;

	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isDown = Tools._isDown;
	 	var _penWidth = 0;
	 	var _penBg = null;
	 	var arr = ["0","0"];
	 	var i = 0;
	 	var font = null;
	 	var leng = 0;
	 	Tools._canvas.bind(Tools._StartEvent,function (e){

			offset = Tools.whenMouseDown();
	        font = $("#input").val();
	        leng = font.length;
	        $("#input").fadeOut();
			var wid = $(".pain").val();
			_context.beginPath();
			_context.moveTo(offset[0],offset[1]);		
			_context.lineCap = "round";
			_context.lineJoin = "round";
			_penWidth = wid;
			_isDown = true;
	 	});
	 	Tools._canvas.bind(Tools._MoveEvent,function (e){
			offset = Tools.whenMouseDown();
	        if( (i < leng) && _isDown){
              	if(Math.sqrt((offset[0]-arr[0])*(offset[0]-arr[0])+(offset[1]-arr[1])*(offset[1]-arr[1]))> _penWidth ){
                    _context.font=_penWidth+"px Arial";
                    _context.fillStyle = $("#color").css("backgroundColor");
                    _context.fillText(font[i],offset[0],offset[1]);
                    arr = [offset[0],offset[1]];
                    i++;
                }
                
	        }else{
	                isDown = false;
	                i = 0;
	        }
			event.preventDefault();		
	 	});
	 	Tools._canvas.bind(Tools._EndEvent,function (e){
	 		_isDown = false;
	 		executionEnvironment.postSever();
			executionEnvironment.cpush();
				executionEnvironment.ComeToImage();
	 	});
	},

	pigments : function(){
		Tools._canvas.unbind();
		this.setConfig();

		var  executionEnvironment = this;
 	
	 	Tools._canvas.css("cursor","url(images/flood_cursor.png),auto");
	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isTouch = Tools._isTouch;
	    var widht = window.innerWidth;
	    var heiht = window.innerHeight;
		canvaswidth = Tools._canvas.attr('width');
		canvasheight = Tools._canvas.attr('height');
	 	allData = _context.getImageData(0, 0, canvaswidth, canvasheight);
	 	var left = false;
	 	var right = false;
	 	function compare(pos){
			rr = allData.data[pos];
			gg = allData.data[pos+1];
			bb = allData.data[pos+2];
			if(Number(rr) === Number(r)){
				if(Number(gg) === Number(g)){
					if(Number(bb) === Number(b)){
						return true;
					}
				}
			}
			return false;
	 	}
	 	function comparelocal(pos){
			rr = allData.data[pos];
			gg = allData.data[pos+1];
			bb = allData.data[pos+2];
			if(Number(rr) === Number(localr)){
				if(Number(gg) === Number(localg)){
					if(Number(bb) === Number(localb)){
						return false;
					}
				}
			}
			return true;
	 	}
	 	function fill_flood(pos,r,g,b){
			allData.data[pos] = Number(r);
			allData.data[pos+1] = Number(g);
			allData.data[pos+2] = Number(b);
			allData.data[pos+3] = Number(255);
	 	}
	 	function getlocal(x,y){
	 		data = _context.getImageData(x,y,1,1);
	 		localr = data.data[0];
	 		localg = data.data[1];
	 		localb = data.data[2];
	 	}
		Tools._canvas.bind(Tools._StartEvent,function (e){	

			data_data = new Date().getTime();
			console.log("开始毫秒数为:"+data_data);	
		 	var color = $("#color").css("backgroundColor");
			r = color.substring(color.indexOf('(')+1, color.indexOf(","));
			g = color.substring(color.indexOf(',')+1, color.lastIndexOf(','));
			b = color.substring(color.lastIndexOf(', ')+1, color.lastIndexOf(')'));

			offset = Tools.whenMouseDown();
			getlocal(offset[0], offset[1]);
			pos = (offset[1] * canvaswidth + offset[0]) * 4;
			dataArray = [[offset[0], offset[1]]];
			if(!compare(pos)){
					while(dataArray.length > 0){
						dataArray_Temp = dataArray.pop();
						var x = dataArray_Temp[0];
						var y = dataArray_Temp[1];
						pos =  (y * canvaswidth + x) * 4;
						while((y >=0 )&& !comparelocal(pos)){
							y -= 1;
							pos -= canvaswidth * 4;
						}
						y += 1;
						pos += canvaswidth * 4;
						while((y <= (canvasheight - 1)) && !comparelocal(pos)){
							y += 1;
							fill_flood(pos,r,g,b);
							if(x >0 ){
								if(!comparelocal(pos-4)){
									if(!left){
										dataArray.push([x-1, y]);
										left = true;
									}else if(left){
										left = false;
									}
								}
							}
							if(x < (canvaswidth - 1)){
								if(!comparelocal(pos+4)){
									if(!right){
										dataArray.push([x+1, y]);
										right = true;
									}else if(right){
										right = false;
									}
								}
							}
							pos += canvaswidth * 4;
						}
					}
				_context.putImageData(allData,0,0);
			}
		});
		Tools._canvas.bind(Tools._EndEvent,function (e){
		 		_isDown = false;
		 		executionEnvironment.cpush();
				executionEnvironment.ComeToImage();
				executionEnvironment.postSever();
				var data_data_end = new Date().getTime();
				console.log("结束毫秒数:"+data_data);	
				console.log("执行时长为:"+(data_data_end-data_data)+"ms");
		});
	},

	absorb : function(){
		Tools._canvas.unbind();
		this.setConfig();

		var  executionEnvironment = this;
 	
		Tools._canvas.css("cursor","url(images/cross.gif),auto");
	 	var _context = Tools._canvas[0].getContext("2d");
	 	var _isTouch = Tools._isTouch;
	 	Tools._canvas.bind(Tools._StartEvent,function (e){

			offset = Tools.whenMouseDown();
			var imgData=_context.getImageData(offset[0],offset[1],1,1);
	    	var r = imgData.data[0];
	    	var g = imgData.data[1];
	    	var b = imgData.data[2];
	    	var a = imgData.data[3];
	    	var color = "rgba("+r+","+g+","+b+","+a+")";
	    	$("#color").css("backgroundColor", color);
	 	});	
	 	Tools._canvas.bind(Tools._EndEvent,function (e){
	 		_isDown = false;
	 	});
	},
	photo  : function (){
		Tools._canvas.unbind();
		Tools._input.hide();
		Tools._people_add.show();
		come = this;
		if($("#main_div").hasClass("draggable")){
			$("#main_div").draggable('destroy')
			$("#main_div").removeClass("draggable");
		}
		$("#ifame").remove();
		$('.upper-canvas').bind("touchend mouseup",function (){
				come.ComeToImage();
		});
		var pl = ["take_photo/","add/eye/", "add/glass/", "add/nose/", "add/mouth/", "add/hand/", "add/mustache/", "add/cloth/man/", "add/cloth/woman/", "add/others/"];
		var namelist = ["个人中心","眼睛","眼镜","鼻子","嘴","手臂","胡须","男士衣服","女士衣服","小配件"];
			$.ajax({
				type : 'GET',
				url : "scan.php",
				data : {
					"url" : pl
				},
				success : function(data) {

					for(var i = 0 ; i < data.length ; i++){
						var index = data[i];
						if(index == null)
							continue;
						Tools._people_right.append('<h2>'+namelist[i]+'</h2>');
						for(var j = 0 ; j < index.length ; j++){
							Tools._people_right.append('<div class="drsMoveHandle" style="left: 0px; top: 0px; width: 50px; height: 50px;"><img class="d" id="im" alt="0" src = "' + index[j] + '"></div>');
						}
					}

				},
				error:function(XMLHttpRequest, textStatus, errorThrown) {
				       console.log(XMLHttpRequest.status);
				       console.log(XMLHttpRequest.readyState);
				       console.log(textStatus);
			     },
				dataType : 'json'
			});

	},
	draggable : function (){
		Tools._canvas.unbind();

		Tools._canvas.css("cursor","move");
		$("#main_div").addClass("draggable");
		$(".draggable").draggable({scroll:false});
	},
	undo : function(){
		if (Tools._cStep > -1) {
			Tools._cStep--;
			var img = new Image();
			img.src = Tools._cPushArray[Tools._cStep];
			Tools._canvas[0].getContext('2d').clearRect(0,0,Tools._canvas_width,Tools._canvas_height);
			Tools._canvas[0].getContext('2d').drawImage(img,0,0);
			this.ComeToImage();
			this.postSever();
		}
	},
	
	cpush : function(){
		Tools._cStep++;
		if (Tools._cStep < Tools._cPushArray.length) { Tools._cPushArray.length = Tools._cStep; }
		Tools._cPushArray.push(Tools._canvas[0].toDataURL());
	},

	redo :  function(){
		if (Tools._cStep < Tools._cPushArray.length-1) {
			Tools._cStep++;
			var canvasPic = new Image();
			canvasPic.src = Tools._cPushArray[Tools._cStep];
			Tools._canvas[0].getContext('2d').clearRect(0,0,Tools._canvas_width,Tools._canvas_height);
			Tools._canvas[0].getContext('2d').drawImage(canvasPic, 0, 0); 
			this.ComeToImage();
			this.postSever();
		}		
	},

	deletePhoto : function(){
		var  executionEnvironment = this;

		var sigle = function (){
			canvasfr.getActiveObject().remove();
			executionEnvironment.ComeToImage();
		};
		var group = function (){
			canvasfr.getActiveGroup().forEachObject(function(o){ 
				canvasfr.remove(o) 
			});
			canvasfr.discardActiveGroup().renderAll();
			executionEnvironment.ComeToImage();
		};
		canvasfr.getActiveGroup() == null ? sigle() : group();
		$("#list").css("display","none");

		executionEnvironment.postSever();
	},

	download : function (){
					var can = document.getElementById('InterCanvas');
					function creat(Inter, ctx4, a, b, c, d, e, f) {
						var img = new Image();
						var src = $("#InterCanvas").css("backgroundImage");
						src = src.substring(src.indexOf("(")+1,src.length-1);
						img.src = src;
						img.onload = function (){
								ctx4.drawImage(img, 0, 0);
								ctx4.drawImage(can, a, b, c, d, 0, 0, e, f);
								var canvas = Inter;
								var data = canvas.toDataURL();
								var url = data.substring(22);
								$.ajax({
									type : 'POST',
									url : "base64.php",
									data : {

										action : data.substring(22),
										name : "upload"

									}

								});
								ctx4.clearRect(0, 0, e, f);
						}

					};
					var InterCanvasTwo = document.getElementById('InterCanvasTwo');
					var ctx5 = InterCanvasTwo.getContext('2d');
					wid = 667;
					hei = 600;
					InterCanvasTwo.width = 667;
					InterCanvasTwo.height = 600;
					creat(InterCanvasTwo, ctx5, 0, 0, wid, hei, 667, 600);
					setTimeout(a, 0);
					function a() {
						var img = new Image();
						img.src = "images/upload.jpg";

						img.onload = function() {
							window.open("download.html");
						}
					}

	}
};
document.getElementById('InterCanvas').addEventListener('mousedown touchstart', hide,false);
function hide() {
	$("#picker").hide();
		var lo = $('iframe').length;
	if (lo == 0)
		$("#people_add").hide();
	else {
		$("#picker").hide();
		$("#ifame").remove();
	}
}
(function (e) {
			  var touch = ("createTouch" in document); //判定是否为手持设备 
			  var StartEvent = touch ? "touchstart" : "mousedown"; //支持触摸式使用相应的事件替代 
			  var MoveEvent = touch ? "touchmove" : "mousemove";
			  var EndEvent = touch ? "touchend" : "mouseup";
			  var src;
			  var down = false;

			  var arr = new Array();
			  var iArr = new Array();
			  var shu = new Array();

			  var biaoji = 1;
			  var SIZE = 0;
			  var flag = 1;

			  var begintime, finshtime;

			  var millionstart = new Array();

			  var scale = true;
			  canvasfr = new fabric.Canvas('InterCanvas');

			  $('.drsMoveHandle').live(EndEvent, function(e) {
			    $("#InterCanvas").css("z-index", "90");
			    down = true;
			    var name = $(this).find('img').attr("src");
			    
			    var bia = name.substring(0, name.indexOf("/"));

			    if (bia == "add") {
			      var s = "model/" + name.substring(name.indexOf("/") + 1, name.lastIndexOf("/") + 1);
			      var sss = name.substring((name.lastIndexOf("/") + 1), name.length);
			      var str = sss.split("_");
			      var rel = str[0] + ".png";
			      $.ajax({
			        type: 'POST',
			        url: 'find.php',
			        data: {
			          "func": rel,
			          "palce": s
			        },
			        success: function(data) {
			          if (data != '') {
			            var img = new Image();   
			            img.src = data;
			            img.onload = function() {
			              fabric.Image.fromURL(data, function(img) {
			                img.set({
			                  left: 100,
			                  top: 100,
			                  angle: 0
			                });
			                img.scale(.5).setCoords();
			                canvasfr.add(img);
			              });
			            }
			          }
			        }

			      });
			    } else {
			      fabric.Image.fromURL(name, function(img) {
			        img.set({
			          left: 100,
			          top: 100,
			          angle: 0
			        });
			        img.scale(.5).setCoords();
			        canvasfr.add(img);
			      });

			    }
			    canvasfr.setBackgroundImage('images/111.jpg', canvasfr.renderAll.bind(canvasfr));
			    $("#people_add").hide();
			    $("#ifame").remove()
			  });
			})()

/**
 * a new object 
 */
/*
 *init the document object model
 * Author  © 2013 Super Mary Omnipotent
 */
var index = {
			take 		: function (){
					 $("body").append('<div id="ifame"><iframe src="photo.html" id="bor" x-scrolling="no"></iframe></div>');
					 $("#people_add").css("display","none");
					 $(".drsMoveHandle, h2").remove();
				},
			upload 		: function (){
				 	 $("body").append('<div id="ifame"><iframe src="upload.html" id="bor" x-scrolling="no"></iframe></div>');
					  $("#people_add").css("display","none");
					 $(".drsMoveHandle, h2").remove();
			},
			ccc 		: function (e){
					        this.list=document.getElementById('list');
					        this.list.style.display='block';
					        this.list.style.left=event.clientX+'px';
					        this.list.style.top=event.clientY+'px';
					        return false;
			},
			delete		: function (){
					var deletes = new Tools.publicMmethods();
					deletes.deletePhoto();
					$("#list").fadeOut(10);
			},
			init : function (e){
					 $(".take_photo").click(this.take);
					 $(".upload_photo").click(this.upload);
					 $("#list > li").bind('click',this.delete);
					 $("#list > li").bind('touchstart',this.delete);


					 $("#InterCanvas").bind("contextmenu",function (){
					 	return false;
					 });
					 $(".upper-canvas").bind('click',function (e){
					 		$("#list").css("display","none");
					 });
					 $$(".upper-canvas").hold(function (){
					 	var isTouch = ("createTouch" in document);
					 	if(isTouch)
					 		this.ccc();
					 });
					 $(".upper-canvas").bind("contextmenu",
					 	index.ccc
					 );
			}
}
$(document).ready(function (){
		index.init();
});

/**
 * addEventListener the mouse whell
 * Author  © 2013 Super Mary Omnipotent
 */
var bind = new Tools.publicMmethods();
$(".upper-canvas").bind('mouseup touchend',bind.cpush);

//PC
document.getElementById('InterCanvas').onmousewheel = Tools.mousewhell;
// when the equipment is the moble or pad the execute function is prototype Tools_Function that name is whenMouseDown and judge the finger's num 
// is more than single this function execute 

/**
 * cotrol the iframe's display
 * Author  © 2013 Super Mary Omnipotent
 */
$('#InterCanvas')[0].addEventListener('touchend',function (){
	$("#people_add").fadeOut(50);
	$("#input").fadeOut(50);
	$(".farbtastic").fadeOut(50);
	$("#ifame").remove();
},false);
$('.upper-canvas')[0].addEventListener('touchend',function (){
	$("#people_add").fadeOut(50);
	$("#input").fadeOut(50);
	$(".farbtastic").fadeOut(50);
	$("#ifame").remove();
},false);
$('#InterCanvas')[0].addEventListener('mouseup',function (){
	$("#people_add").fadeOut(50);
	$("#input").fadeOut(50);
	$(".farbtastic").fadeOut(50);
	$("#ifame").remove();
},false);
$('.upper-canvas')[0].addEventListener('mouseup',function (){
	$("#people_add").fadeOut(50);
	$("#input").fadeOut(50);
	$(".farbtastic").fadeOut(50);
	$("#ifame").remove();
},false);
/**
 *	color's action in this function
 * Author  © 2013 Super Mary Omnipotent
 */
$("#color").bind('touchstart mousedown',function (){
	$(".farbtastic").show(10);
});
/**
 * fasttap in the document
 * Author  © 2013 Super Mary Omnipotent
 */

document.addEventListener("touchstart", function(){}, true);
document.addEventListener('mousedown',function (){},true);


