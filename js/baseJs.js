// https://www.pinterest.com/pin/336081190933901701/ Ground texture and wall texture reference (future)


var scene, camera, renderer; // local variables scene, camera, renderer

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );            // sets camera variables
  
  camera.position.set(20, 20, 0);  // sets camera position inside the cube (x (distance), y(height))


  renderer = new THREE.WebGLRenderer({ antialias: true });  // antiailas
  renderer.setSize(window.innerWidth, window.innerHeight);  // render size
  document.body.appendChild(renderer.domElement);           // dom

  window.addEventListener('resize', () => {
    resizeWindowChanges();
    });


  const texture = new THREE.CubeTextureLoader().load([    // skybox loader. Generates skybox for maze
      './raw/posx.jpg',
      './raw/negx.jpg',
      './raw/posy.jpg',
      './raw/negy.jpg',
      './raw/posz.jpg',
      './raw/negz.jpg',
  ]);
  scene.background = texture;                           // sets the background for the scene as cubebox

  amLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(amLight);

  let texture1 = new THREE.TextureLoader().load("./raw/ground2.jpg", function ( texture ){
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 100, 100 );
  });

  const plane = new THREE.Mesh(             // creates a plane and mesh
  new THREE.BoxGeometry(400, 400,1),
  new THREE.MeshPhongMaterial({
    map:texture1
  }))        // creates a square cube plane for terrain
  plane.material.color.setHex( 0x0ffff0 );
  plane.rotation.x = -Math.PI/2;          // Make the plane horizontal instead of vertical
  
  scene.add(plane);


  animate();
}

// When widow size is changed, fixes the scene
function resizeWindowChanges(){
    camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		render();
}

function animate() {                                     // renders (on a different function for future controls)
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

}

init();                                                  // initialize the display (runs at start)
