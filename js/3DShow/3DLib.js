/*
 *
 *By team CCC_crow
 *
 *The latest 2014.11.15
 *
 */



//分别代表js环境中的相机、场景、渲染器、模型
var D_camera, D_scene, D_renderer ,D_mesh;

var targetRotation = 0;

var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var _people = true;
var _cube = false;
var _cuboid = false;
//获取模型
function changeArgument(argument){
			if(argument == "people"){
					_people = true;
					_cube = false;
					_cuboid = false;
			}else if(argument == "cube"){
					_people = false;
					_cube = true;
					_cuboid = false;
			}else if(argument == "cuboid"){
					_people = false;
					_cube = false;
					_cuboid = true;
			}
}
//构建3D环境
(function build() {

		var environment = new TD.Environment();

		D_mesh =new TD.Model().cubeEve('people');

		D_scene = environment.getScene();
		D_camera = environment.getCamera();
		D_renderer = environment.getRenderer();

		D_scene.add(D_mesh);

		document.body.appendChild(D_renderer.domElement);

		listenerEvent();
})();

//实现3D延Y轴旋转
(function animate() {
	requestAnimationFrame(animate);
	render();
})();

function render() {

	D_mesh.rotation.y += (targetRotation - D_mesh.rotation.y ) * 0.05;
	D_renderer.render(D_scene, D_camera);
}

//绘画更新
function updataModel(imgBase64Array){
	if(_people){
			//头
			for(var i = 0; i<6; i++){
				D_mesh.children[0].material.materials[i].map.image.src = imgBase64Array[i+24];
			}
			//身
			for(var i = 5; i>-1; i--){
				D_mesh.children[1].material.materials[i].map.image.src = imgBase64Array[i+18];
			}
			//D_mesh.children[2]为脚
			for(var i = 0; i<6; i++){
				D_mesh.children[2].material.materials[i].map.image.src = imgBase64Array[i+12];		
			}
			//左臂
			for(var i = 0; i<6; i++){
				D_mesh.children[3].material.materials[i].map.image.src = imgBase64Array[i];
			}
			//右臂
			for(var i = 0; i<6; i++){
				D_mesh.children[4].material.materials[i].map.image.src = imgBase64Array[i+6];
			}
		}else{
			for(var i = 0; i<6; i++){
				D_mesh.children[0].material.materials[i].map.image.src = imgBase64Array[i];
			}
		}
}

function changeModel(model) {
	D_scene.remove(D_mesh);
	D_mesh = new TD.Model().cubeEve(model);
	D_scene.add(D_mesh);
}


function listenerEvent(){

	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('touchstart', onDocumentTouchStart, false);
	document.addEventListener('touchmove', onDocumentTouchMove, false);
	
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

	D_camera.aspect = window.innerWidth / window.innerHeight;
	D_camera.updateProjectionMatrix();

	D_renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseDown(event) {

	event.preventDefault();

	document.addEventListener('mousemove', onDocumentMouseMove, false);
	document.addEventListener('mouseup', onDocumentMouseUp, false);
	document.addEventListener('mouseout', onDocumentMouseOut, false);

	mouseXOnMouseDown = event.clientX - window.innerWidth / 2;
	targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove(event) {

	mouseX = event.clientX - window.innerWidth / 2;

	targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp(event) {

	document.removeEventListener('mousemove', onDocumentMouseMove, false);
	document.removeEventListener('mouseup', onDocumentMouseUp, false);
	document.removeEventListener('mouseout', onDocumentMouseOut, false);

}

function onDocumentMouseOut(event) {

	document.removeEventListener('mousemove', onDocumentMouseMove, false);
	document.removeEventListener('mouseup', onDocumentMouseUp, false);
	document.removeEventListener('mouseout', onDocumentMouseOut, false);

}

function onDocumentTouchStart(event) {

	if (event.touches.length === 1) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[0].pageX - window.innerWidth / 2;
		targetRotationOnMouseDown = targetRotation;

	}
}

function onDocumentTouchMove(event) {

	if (event.touches.length === 1) {

		event.preventDefault();

		mouseX = event.touches[0].pageX - window.innerWidth / 2;
		targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown ) * 0.05;

	}

}