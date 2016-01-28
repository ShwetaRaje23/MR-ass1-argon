var options = THREE.Bootstrap.createArgonOptions( Argon.immersiveContext );
options.renderer = { klass: THREE.WebGLRenderer };
var three = THREE.Bootstrap( options );
var eyeOrigin = three.argon.objectFromEntity(Argon.immersiveContext.eyeOrigin);

var panoramaReality = new Argon.Reality.Panorama;
Argon.immersiveContext.setRequiredReality(panoramaReality);

var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();

var pano = {
    type: 'equirectangular',
    source: "upload/"+imageFile,
    headingOffset:0,
    cartographicDegrees: [33.7758,84.3947]
}

//var buzz = new THREE.Object3D;
// var loader = new THREE.TextureLoader();
// loader.load( 'buzz.png', function ( texture ) {
//   var geometry = new THREE.BoxGeometry(10, 10, 10)
//   var material = new THREE.MeshBasicMaterial( { map: texture })
//   var mesh = new THREE.Mesh( geometry, material );
//   mesh.scale.set(10,10,10);
//   buzz.add( mesh );
// })

//
//eyeOrigin.add(buzz);
//
//// set the position to be near the camera
//var cameraPosition = three.camera.getWorldPosition();
//cameraPosition.x += 5;
//buzz.position.copy(cameraPosition)
//three.argon.updateEntityFromObject(buzz)
//
//panoramaReality.setPanorama(pano);

// The code to switch between the showing and non showing of the cube

//var button = document.getElementById( 'toggle' );
//button.addEventListener( 'click', function ( event ) {
//  transform( , 2000 );
//}, false );



var buzz = new THREE.Object3D;
var loader = new THREE.TextureLoader();
loader.load( 'buzz.png', function ( texture ) {
    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({map: texture});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(10, 10, 10);
    buzz.add(mesh);
});




buzz.position.x = 0;
buzz.position.y = 0;
buzz.position.z = -50;
//buzz.updateMatrix();
//eyeOrigin.add(buzz);

function addCube(){
    eyeOrigin.add(this.buzz)
    //cube.updateMatrix();
}
function removeCube(){
    eyeOrigin.remove(this.buzz)
    //cube.updateMatrix();
}

//cube.position.x = 0;
//cube.position.y = 0;
//cube.position.z = -50;
//cube.updateMatrix();
//eyeOrigin.add(cube);


var add = document.getElementById('toggle_on');
add.addEventListener('click', addCube);

var remove = document.getElementById('toggle_off')
remove.addEventListener('click', removeCube);


panoramaReality.setPanorama(pano);
