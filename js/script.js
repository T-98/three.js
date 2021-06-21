//setting up the scene with camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//adding renderer to work with all DOM elements
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

//adding controls to pan and zoom
const controls = new THREE.OrbitControls( camera, renderer.domElement );

//adding object 
var mtloader = new THREE.MTLLoader();
mtloader.setPath("./assets/");
mtloader.load("r2-d2.mtl", function(material){
    material.preload();
    var objloader = new THREE.OBJLoader();
    objloader.setMaterials(material);
    objloader.setPath("./assets/");
    objloader.load("r2-d2.obj", function(object){
        scene.add(object);
        object.position.y-= 60;
    });

});
/* SECTION REMOVED TO DEMO 3D OBJECTS LOADING
//setting up geometry to include shapes
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
