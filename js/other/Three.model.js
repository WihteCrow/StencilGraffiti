/*
 *
 *By Crow
 *
 *The latest 2014.11.15
 *
 */
var TD = TD ||{};
TD.varietyArray = {
	"cuboid" : 		[140,	200,	140, 	0,		0,		0,		0,		0,	0],
	"cube" : 		[160,	160,	160,	0,		0,		0,		0,		0,	0],
	"people" : [
					[160,	110,	160,	0,		110,	0,		0,		0,	0],
					[110,	110,	110,	0,		0,		0,		0,		0,	0],
					[80,	50,		80,		0,		-70,	0, 		0,    	0,	0],
					[40,	80,		40,		-75,	0,		0,		-0.6,	0,	0],
					[40,	80,		40,		75,		0,		0,		-0.6,	0,	0]
		],
	"car" : [
					[240,	80,		100,	0,		0,		0,		0,		0,	0],
					[100,	60,		100,	0,		70,		0,		0,		0,	0]
	]
};


TD.Model = function(){

	this.loadTexture = function(path){
		var __D_texture = new THREE.Texture();
		var __D_material = new THREE.MeshBasicMaterial({
			morphTarget: true,
			map : __D_texture,
			overdraw : true
		});
		var image = new Image();
		image.onload = function() {
			__D_material.map.image = this;
			__D_texture.needsUpdate = true;
		};
		image.src = path;
		return __D_material;
	};

	this.eachRectangle = function(__D_mesh, arr){
		var __D_cube = null;
		var materials = [];
		//var imgBase64 ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2NkYGA4AMVACiewZwRKNUAxPoX1owoJBs9+IgLcAQC0+g+BdaZVWgAAAABJRU5ErkJggg==";
		var imgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABHUlEQVR4Xu3SsRGDQBAEQT4awhShkQafzEuEQI08+vw5o2vHnPNca52beywwxviM67qOfd+Px7Vg+41vAQxDABjw7hQgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3wH8A3orxz6vzL8RMWH/JOz5MAAAAAElFTkSuQmCC";
		for(var n = 0; n<6; n++)
			materials.push(this.loadTexture(imgBase64));
		
		__D_cube = new THREE.Mesh(new THREE.CubeGeometry(arr[0],arr[1],arr[2]), new THREE.MeshFaceMaterial(materials));
		__D_cube.position.set(arr[3], arr[4], arr[5]);
		__D_cube.rotation.set(arr[6], arr[7], arr[8]);
		__D_mesh.add(__D_cube);
		return __D_mesh;
	};
};


TD.Model.prototype = {

	cubeEve : function(variety){

		var __D_mesh = new THREE.Object3D();
		
		var arr = TD.varietyArray[variety];
		// __D_mesh.rotation.x = 0.5;

		if(arr[0][0]){
			for(i in arr){
				var tempArray = arr[i];
				__D_mesh = this.eachRectangle(__D_mesh, tempArray);
			};
		}else{
			__D_mesh = this.eachRectangle(__D_mesh, arr);
		}
		return __D_mesh;
	}
};


TD.Environment = function(){

	this.getScene = function(){
		return new THREE.Scene();
	};

	this.getCamera = function(){
		var __D_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		__D_camera.position.z = 360;
		__D_camera.position.y = 50;
		return __D_camera;
	};

	this.getMesh = function(){
		return new THREE.Object3D();
	};

	this.getRenderer = function(){
		var __D_renderer = new THREE.WebGLRenderer({
			antialias:true,//antialias:true/false是否开启反锯齿
			precision:"highp",//precision:highp/mediump/lowp着色精度选择
			alpha:true,//alpha:true/false是否可以设置背景色透明
			premultipliedAlpha:false,
			stencil:false,
			preserveDrawingBuffer:false,//preserveDrawingBuffer:true/false是否保存绘图缓冲
			maxLights:1//maxLights:最大灯光数
		});	//

		__D_renderer.setSize(window.innerWidth, window.innerHeight);
		return __D_renderer;
	};
};



