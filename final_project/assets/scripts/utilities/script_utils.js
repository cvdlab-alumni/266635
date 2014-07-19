// Function for appling texture:
function applyTexture (obj,imgFile,bumpFile,imgFileRev,bumpFileRev,bumpScale,faceColor){

  var material1 = new THREE.MeshPhongMaterial({map: imgFileRev, bumpmap: bumpFileRev,
                                                bumpScale: bumpScale});
  var material2 = new THREE.MeshPhongMaterial({color: faceColor});
  var material3 = new THREE.MeshPhongMaterial({color: faceColor});
  var material4 = new THREE.MeshPhongMaterial({color: faceColor});
  var material5 = new THREE.MeshPhongMaterial({color: faceColor});
  var material6 = new THREE.MeshPhongMaterial({map: imgFile, bumpmap: bumpFile,
                                                bumpScale: bumpScale});

  var materials = [material2,material5,material3,material4,material1,material6];

  var meshFaceMaterial = new THREE.MeshFaceMaterial(materials);

  obj.material = meshFaceMaterial;

}

// Function for appling texture:
function applyTextureWindow (obj,imgFile,bumpFile,imgFileRev,bumpFileRev,bumpScale,faceColor){

  var material1 = new THREE.MeshPhongMaterial({transparent:true,map: imgFileRev, bumpmap: bumpFileRev,
                                                bumpScale: bumpScale});
  var material2 = new THREE.MeshPhongMaterial({color: faceColor});
  var material3 = new THREE.MeshPhongMaterial({color: faceColor});
  var material4 = new THREE.MeshPhongMaterial({color: faceColor});
  var material5 = new THREE.MeshPhongMaterial({color: faceColor});
  var material6 = new THREE.MeshPhongMaterial({transparent:true,map: imgFile, bumpmap: bumpFile,
                                                bumpScale: bumpScale});

  var materials = [material2,material5,material3,material4,material1,material6];

  var meshFaceMaterial = new THREE.MeshFaceMaterial(materials);

  obj.material = meshFaceMaterial;

}

// Function for apply texture to plane:
function mkFloorWithTexture(base,height,imgFile,bumpFile,bumpScale){

  var plane_geometry = new THREE.PlaneGeometry(base,height);

  imgFile.wrapS = imgFile.wrapT = THREE.RepeatWrapping;
  bumpFile.wrapS = bumpFile.wrapT = THREE.RepeatWrapping;

  var plane_material = new THREE.MeshPhongMaterial({map: imgFile, bumpmap: bumpFile, 
                          bumpScale: bumpScale});

  var plane = new THREE.Mesh(plane_geometry,plane_material);

  return plane;

}

// Function for generate Mesh:
function createMesh(geom, imageFile) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
  // var mat = new THREE.MeshBasicMaterial();
  // var mat = new THREE.MeshLambertMaterial();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;

  var mesh = new THREE.Mesh(geom, mat);
      
  return mesh;
}

// Function for create a picture:
function createPicture(geom, imageFile, bump) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        geom.computeVertexNormals();
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        if (bump) {
          var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
          mat.bumpMap = bump;
          mat.bumpScale = 0.2;
        }

        var mesh = new THREE.Mesh(geom, mat);

        return mesh;
}

// Funcion for make  block:
function mkBlock(){

  var s_block_textr = THREE.ImageUtils.loadTexture("assets/textures/general/block_1.jpg");
  var s_block_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_block_1.jpg");
  
  var s_block_geo = new THREE.BoxGeometry(1.5,0.1,1.2,40,40);
  var s_block_mat = new THREE.MeshPhongMaterial({map: s_block_textr,
    bumpmap: s_block_bump, bumpScale:0.2});

  var s_block = new THREE.Mesh(s_block_geo,s_block_mat);

  // Block position settings:

  s_block.position.set(4.65,6.3,0.9);

  // Super block:

  var super_textr = THREE.ImageUtils.loadTexture("assets/textures/general/granit.jpg");
  var super_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_granit.jpg");

  var super_block_geo = new THREE.BoxGeometry(1.5,0.15,0.05,40,40);
  var super_block_mat = new THREE.MeshPhongMaterial({map: super_textr,
    bumpmap: super_bump, bumpScale:0.2});

  var super_block_1 = new THREE.Mesh(super_block_geo,super_block_mat);

  super_block_1.position.set(4.65,6.3,1.5);

  var super_block_geo_1 = new THREE.BoxGeometry(0.05,0.15,1.21,40,40);

  var super_block_2 = new THREE.Mesh(super_block_geo_1,super_block_mat);

  super_block_2.position.set(5.425,6.3,0.92);

  block = new THREE.Object3D();

  block.add(s_block);
  block.add(super_block_1);
  block.add(super_block_2);

  return block;

}

// Function for balcony:
function mkBalcony(){

  // Make Balcony as a group of boxes:

  // balcony bottom:
  var balcony_bottom_Geometry = new THREE.BoxGeometry(1.2,0.3,2.5,40,40); // geometry.
  var balcony_bottom_Material = new THREE.MeshPhongMaterial({color: 0xFFE4B5,side: THREE.DoubleSide, shading: THREE.FlatShading}); // material.
  var balcony_bottom = new THREE.Mesh(balcony_bottom_Geometry,balcony_bottom_Material); // mesh 1.


  // balcony l1:
  var balcony_l1_Geometry = new THREE.BoxGeometry(1.2,1,0.1,40,40); // geometry.
  var balcony_l1_Material = new THREE.MeshPhongMaterial({color: 0xFFE4B5,side: THREE.DoubleSide, shading: THREE.FlatShading}); // material.
  var balcony_l1 = new THREE.Mesh(balcony_l1_Geometry,balcony_l1_Material); // mesh 2.

  balcony_l1.position.set(0,0.65,1.2); // change position for second mesh.

  // balcony l2:
  var balcony_l2_Geometry = new THREE.BoxGeometry(1.2,1,0.1,40,40); // geometry.
  var balcony_l2_Material = new THREE.MeshPhongMaterial({color: 0xFFE4B5,side: THREE.DoubleSide, shading: THREE.FlatShading}); // material.
  var balcony_l2 = new THREE.Mesh(balcony_l2_Geometry,balcony_l2_Material); // mesh 3.

  balcony_l2.position.set(0,0.65,-1.2); // change position for third mesh.

  var balcony_l3 = mkBalconyRailing();
  balcony_l3.rotation.y = Math.PI/2;
  balcony_l3.position.set(0.55,-0.05,1.13);
  balcony_l3.scale.set(0.5,1,1);

  // Assembly all boxes defined:

  balcony = new THREE.Object3D(); // balcony object3D.
  balcony.add(balcony_bottom); // add mesh 1.
  balcony.add(balcony_l1); // add mesh 2.
  balcony.add(balcony_l2); // add mesh 3.
  balcony.add(balcony_l3); // add mesh 4.

  return balcony;

}

// Function for make box to put before the entry door.
function mkEntrance(){

  var entrance_geo = new THREE.BoxGeometry(5,3,0.2,40,40);
  var entrance_mat = new THREE.MeshPhongMaterial();
  var entrance = new THREE.Mesh(entrance_geo,entrance_mat);

  var entrance_texture = THREE.ImageUtils.loadTexture("assets/textures/general/entrance_texture.jpg");
  var entrance_bump = THREE.ImageUtils.loadTexture("assets/textures/general/entrance_bump.jpg");
  entrance.material.map = entrance_texture;
  entrance.material.bumpmap = entrance_bump;
  entrance.material.bumpScale = 0.2;

  return entrance;

}

// Function for make entrance carpet:
function mkDoorMat(){

  // Defining texture:

  // texture:
  var mat_texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_mat.jpg");
  // bump:
  var mat_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_door_mat.jpg");

  // Geometry:
  var mat_geometry = new THREE.BoxGeometry(0.4,1,0.05,40,40); // geometry.
  // Material:
  var mat_material = new THREE.MeshPhongMaterial({map: mat_texture, bumpmap: mat_bump,
                                                    bumpScale: 0.1}); // material.

  var doorMat = new THREE.Mesh(mat_geometry,mat_material); // door mat mesh.

  return doorMat;

}

// Function for generate object door:
function mkDoor(w,h,d){

  var joint = new THREE.Object3D();
  // cylinder geometry.
  var cylinderGeometry = new THREE.CylinderGeometry(0.005, 0.05,h, 64, 64, false);
  // cylinder material.
  var cylinderMaterial = new THREE.MeshPhongMaterial({transparent:true,opacity:0});
  var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial); // cylinder mesh.

  joint.add(cylinder); // add cylinder to joint.
  // door geometry.
  var doorGeometry = new THREE.BoxGeometry(w,h,d,40,40);
  // door material.
  var doorMaterial = new THREE.MeshPhongMaterial();
  var door = new THREE.Mesh(doorGeometry,doorMaterial); // door mesh.

  // Door settings: position, rotation and properties.

  door.position.set(0.3,0,0);

  cylinder.add(door); // add door to cylinder

  door.cylinder = cylinder; // property for make rotation on cylinder.

  // CHECK:

  door.opened = false; // property for check if door is open.

  // object 3D for hook:
  var hook = new THREE.Object3D();

  hook.position.set(0.3,0,0); // set position.

  door.add(hook); // add hook to door.

  joint.position.set(0,h/2,0); // set position for joint.
  
  // Extra properties:
  joint.door = door;
  joint.cylinder = cylinder;
  joint.hook = hook;
  joint.material = doorMaterial;

  // return object that represent door:
  return joint;

}

// Function for generate object window:
function mkWindow(w,h,d){

  var joint = new THREE.Object3D();
  // cylinder geometry.
  var cylinderGeometry = new THREE.CylinderGeometry(0,0,h, 64, 64, false);
  // cylinder material.
  var cylinderMaterial = new THREE.MeshBasicMaterial({transparent:true});
  var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial); // cylinder mesh.

  joint.add(cylinder);
  // wndw geometry.
  var wndwGeometry = new THREE.BoxGeometry(w,h,d,40,40);
  // wndw material.
  var wndwMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
  var wndw = new THREE.Mesh(wndwGeometry,wndwMaterial); // wndw mesh.

  // wndw settings: position, rotation and properties.

  wndw.position.set(0.2,0,0);

  cylinder.add(wndw);

  wndw.cylinder = cylinder; // for make rotation on cylinder.

  // CHECK:

  wndw.opened = false;

  var hook = new THREE.Object3D();

  hook.position.set(0.3,0,0);

  wndw.add(hook);

  joint.position.set(0,h/2,0);
  
  // Extra properties:
  joint.wndw = wndw;
  joint.cylinder = cylinder;
  joint.hook = hook;
  joint.material = wndwMaterial;

    
  return joint;

}