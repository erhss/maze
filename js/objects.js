// Wall texture (from pintrest): https://www.bittbox.com/freebies/free-texture-tuesday-metal

let wallLength = 400;       // wall size
let wallHeight = 50;
let wallWidth = 3

let MIN_SIZE = -200         // plane is located at -200 - 200
let MAX_SIZE = 200

var wallText;               // wall texture
    
    // Wall texture
    wallText = new THREE.TextureLoader().load("./raw/wallText2.jpg", function ( texture ){      // gets texture and puts on wall
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 50, 0 );
      });

      _createMainWall()                         // creates the main wall (boundary of plane)

      _createMazeWall()                         // creates the maze walls



function addLamp(x, y, z, type){              // adds lamp in the maze
  let lampx = 0;
  let lampy = 0;
  let lampz = 0;


if (type == 1){                                     // positive x, negative z
  lampx = x+3; 
  lampy = y;
  lampz = (z * 2) + 3;

  let objLoader = new THREE.OBJLoader();                // loads lamps
  objLoader.load("./raw/lamp.obj", (lamp) => {
    lamp.position.set(lampx, lampy, lampz);
    scene.add(lamp);
  });
  let light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( lampx+7, lampy+18, lampz+2 );
  light.power = 30;
  scene.add( light );


}
else if(type == 2){                                 // negative x, negative z
  lampx = x-3; 
  lampy = y;
  lampz = (z * 2) - 3;

  let objLoader = new THREE.OBJLoader();
  objLoader.load("./raw/lamp.obj", (lamp) => {
    lamp.position.set(lampx, lampy, lampz);
    scene.add(lamp);
  });
  let light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( lampx-7, lampy+18, lampz-2 );
  light.power = 30;
  scene.add( light );
}
else if (type == 3){                                    // positive x, positive z
  lampx = x+3; 
  lampy = y;
  lampz = (z * 2) - 3;

  let objLoader = new THREE.OBJLoader();
  objLoader.load("./raw/lamp.obj", (lamp) => {
    lamp.position.set(lampx, lampy, lampz);
    scene.add(lamp);
  });
  let light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( lampx+7, lampy+18, lampz-2 );
  light.power = 30;
  scene.add( light );
}
else{                                                    // negative x, positive z
  lampx = x-3; 
  lampy = y;
  lampz = (z * 2) - 3;

  let objLoader = new THREE.OBJLoader();
  objLoader.load("./raw/lamp.obj", (lamp) => {
    lamp.position.set(lampx, lampy, lampz);
    scene.add(lamp);
  });
  let light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( lampx-7, lampy+18, lampz-2 );
  light.power = 30;
  scene.add( light );
}
}


function _createMazeWall(){                                   // makes wall
    
  addLamp(-150, 0, -100, 1);                                 // adds lamp
  addLamp(100, 0, -50, 1);
  addLamp(150, 0, 20, 1);

  //Left wall middle starting area
  const wallm1l = new THREE.Mesh( 
    new THREE.BoxGeometry(wallWidth, wallHeight,wallLength / 2),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallm1l.position.set(25, wallHeight/2, -100);         
    wallm1l.material.color.setHex(0xff00ff)               
  scene.add(wallm1l);
    addLamp(25, 0, -100, 1);
   
  
  //Right wall middle starting point
  const wallm2r = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,150),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallm2r.position.set(75, wallHeight/2, -75);       
    wallm2r.material.color.setHex(0xff00ff) 
  scene.add(wallm2r);
  addLamp(75, 0, -75, 1);

  //Center middle wall behind character
  const wall3mc = new THREE.Mesh(
    new THREE.BoxGeometry(50, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall3mc.position.set(50, wallHeight/2, 0);      
    wall3mc.material.color.setHex(0xff00ff) 
  scene.add(wall3mc);

  //First path wall
  const wall1p1 = new THREE.Mesh(
    new THREE.BoxGeometry(75, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall1p1.position.set(111, wallHeight/2, -150);       
    wall1p1.material.color.setHex(0xff00ff) 
  scene.add(wall1p1);


  //First path second wall
  const wall2p1 = new THREE.Mesh(
    new THREE.BoxGeometry(75, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall2p1.position.set(111, wallHeight/2, -100);      
    wall2p1.material.color.setHex(0xff00ff) 
  scene.add(wall2p1);
  addLamp(111, 0, -100, 1);
  
  //First path vertical wall 1
  const wall3p1 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,250),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall3p1.position.set(150, wallHeight/2, 25);       
    wall3p1.material.color.setHex(0xff00ff) 
  scene.add(wall3p1);

  //First path vertical wall 2
  const wall4p1 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,250),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall4p1.position.set(115, wallHeight/2, 75);     
    wall4p1.material.color.setHex(0xff00ff) 
  scene.add(wall4p1);
  addLamp(115, 0, 75, 3);

  //First path vertical wall 3
  const wall5p1 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,125),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall5p1.position.set(75, wallHeight/2, 100);   
    wall5p1.material.color.setHex(0xff00ff) 
  scene.add(wall5p1);
  addLamp(75, 0, 100, 3);

  //First path vertical wall long left side
  const wall6p1 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,275),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall6p1.position.set(-65, wallHeight/2, 25);         
    wall6p1.material.color.setHex(0xff00ff) 
  scene.add(wall6p1);
  addLamp(-65, 0, 25, 3);


  //First path end, horizontal large wall
  const wall7p1 = new THREE.Mesh(
    new THREE.BoxGeometry(135, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall7p1.position.set(-132, wallHeight/2, -111);         
    wall7p1.material.color.setHex(0xff00ff) 
  scene.add(wall7p1);


  //Second path horizontal small wall
  const wall1p2 = new THREE.Mesh(
    new THREE.BoxGeometry(100, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall1p2.position.set(25, wallHeight/2, 37); 
    wall1p2.material.color.setHex(0xff00ff) 
  scene.add(wall1p2);
  addLamp(25, 0, 37, 3);

  //Second path vertical large wall
  const wall2p2 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,190),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall2p2.position.set(-25, wallHeight/2, -53);   
    wall2p2.material.color.setHex(0xff00ff) 
  scene.add(wall2p2);
  addLamp(-25, 0, -53, 1);

  //Second path horizontal small wall 2
  const wall3p2 = new THREE.Mesh(
    new THREE.BoxGeometry(75, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall3p2.position.set(-61, wallHeight/2, -150);      
    wall3p2.material.color.setHex(0xff00ff) 
  scene.add(wall3p2);

  //Second path close, vertical small wall
  const wall4p2 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,52),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall4p2.position.set(-100, wallHeight/2, -175);     
    wall4p2.material.color.setHex(0xff00ff) 
  scene.add(wall4p2);


  //Third path vertical wall south 1
  const wall1p3 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,95),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall1p3.position.set(25, wallHeight/2, 115);    
    wall1p3.material.color.setHex(0xff00ff) 
  scene.add(wall1p3);


  //Third path vertical wall south 2
  const wall2p3 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,125),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall2p3.position.set(-25, wallHeight/2, 100);     
    wall2p3.material.color.setHex(0xff00ff) 
  scene.add(wall2p3);
  addLamp(-25, 0, 100, 3);

  //Third path close, small wall
  const wall3p3 = new THREE.Mesh(
    new THREE.BoxGeometry(50, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall3p3.position.set(0, wallHeight/2, 161);    
    wall3p3.material.color.setHex(0xff00ff) 
  scene.add(wall3p3);


  //Fourth path horizontal wall, path start
  const wall1p4 = new THREE.Mesh(
    new THREE.BoxGeometry(100, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall1p4.position.set(-115, wallHeight/2, 161);  
    wall1p4.material.color.setHex(0xff00ff) 
  scene.add(wall1p4);


  //Fourth path vertical wall long left side
  const wall2p4 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,200),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall2p4.position.set(-165, wallHeight/2, 25);  
    wall2p4.material.color.setHex(0xff00ff) 
  scene.add(wall2p4);
  addLamp(-165, 0, 25, 3);

  //Fourth path horizontal wall 2
  const wall3p4 = new THREE.Mesh(
    new THREE.BoxGeometry(100, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall3p4.position.set(-115, wallHeight/2, 124);     
    wall3p4.material.color.setHex(0xff00ff) 
  scene.add(wall3p4);


  //Fourth path vertical wall long left side 2
  const wall4p4 = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,200),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wall4p4.position.set(-115, wallHeight/2, 25);    
    wall4p4.material.color.setHex(0xff00ff) 
  scene.add(wall4p4);
  addLamp(-115, 0, 25, 1);
}


function _createMainWall(){
 // Main wall -->
 const wallf = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,wallLength),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallf.position.set(MIN_SIZE, wallHeight/2, 0);    
    wallf.material.color.setHex(0xff00ff) 
  scene.add(wallf);

  const wallb = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,wallLength),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallb.position.set(MAX_SIZE, wallHeight/2, 0);   
    wallb.material.color.setHex(0xff00ff) 
  scene.add(wallb);

  const walll = new THREE.Mesh(
    new THREE.BoxGeometry(wallLength, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    walll.position.set(0, wallHeight/2, MAX_SIZE);     
    walll.material.color.setHex(0xff00ff) 
  scene.add(walll);

  const wallr = new THREE.Mesh(
    new THREE.BoxGeometry(wallLength, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallr.position.set(0, wallHeight/2, MIN_SIZE);     
    wallr.material.color.setHex(0xff00ff) 
  scene.add(wallr);

  // <-- End Main Wall 
}



