// --- Functions for generate kitchen objects:

// Function for generate box fornitures:

function mkForniture(w,h,d,color){

  var forniture = new THREE.Object3D();

  var box_mat = new THREE.MeshPhongMaterial({color: color, 
    side: THREE.DoubleSide,
    shading: THREE.FlatShading});

  var box_base_geo = new THREE.BoxGeometry(w,h,d,40,40);

  var box_base = new THREE.Mesh(box_base_geo,box_mat);

  var box_left_geo = new THREE.BoxGeometry(d,h,w,40,40);

  var box_left = new THREE.Mesh(box_left_geo,box_mat);

  var box_right = new THREE.Mesh(box_left_geo,box_mat);

  var box_down_geo = new THREE.BoxGeometry(w + d,d,w,40,40);

  var box_down = new THREE.Mesh(box_down_geo,box_mat);

  var box_top_geo = new THREE.BoxGeometry(w + d,h+d,d,40,40);

  var box_top = new THREE.Mesh(box_top_geo,box_mat);

  box_left.position.set(-w/2,0,(w/2 - d/2));
  box_right.position.set(w/2,0,(w/2 - d/2));
  box_down.position.set(0,h/2,(w/2 - d/2));
  box_top.position.set(0,0,w);

  forniture.add(box_base);
  forniture.add(box_left);
  forniture.add(box_right);
  forniture.add(box_down);
  forniture.add(box_top);

  return forniture;

}

function mkFornitureBiColor(w,h,d,color1,color2){

  var forniture = new THREE.Object3D();

  var box_mat = new THREE.MeshPhongMaterial({color: color1, 
    side: THREE.DoubleSide,
    shading: THREE.FlatShading});

  var box_mat_1 = new THREE.MeshPhongMaterial({color: color2, 
    side: THREE.DoubleSide,
    shading: THREE.FlatShading});

  var box_base_geo = new THREE.BoxGeometry(w,h,d,40,40);

  var box_base = new THREE.Mesh(box_base_geo,box_mat);

  var box_left_geo = new THREE.BoxGeometry(d,h,w,40,40);

  var box_left = new THREE.Mesh(box_left_geo,box_mat);

  var box_right = new THREE.Mesh(box_left_geo,box_mat);

  var box_down_geo = new THREE.BoxGeometry(w + d,d,w,40,40);

  var box_down = new THREE.Mesh(box_down_geo,box_mat);

  var box_top_geo = new THREE.BoxGeometry(w + d,h+d,d,40,40);

  var box_top = new THREE.Mesh(box_top_geo,box_mat_1);

  box_left.position.set(-w/2,0,(w/2 - d/2));
  box_right.position.set(w/2,0,(w/2 - d/2));
  box_down.position.set(0,h/2,(w/2 - d/2));
  box_top.position.set(0,0,w);

  forniture.add(box_base);
  forniture.add(box_left);
  forniture.add(box_right);
  forniture.add(box_down);
  forniture.add(box_top);

  return forniture;

}

// Function for generate box fornitures with a texture:

function mkFornitureWithTexture(w,h,d,color,imgFile,bumpFile,bumpScale,face_color){

  var forniture = new THREE.Object3D();

  var box_mat = new THREE.MeshPhongMaterial({color: color, 
    side: THREE.DoubleSide,
    shading: THREE.FlatShading});

  var box_base_geo = new THREE.BoxGeometry(w,h,d,40,40);

  var box_base = new THREE.Mesh(box_base_geo,box_mat);

  var box_left_geo = new THREE.BoxGeometry(d,h,w,40,40);

  var box_left = new THREE.Mesh(box_left_geo,box_mat);

  var box_right = new THREE.Mesh(box_left_geo,box_mat);

  var box_down_geo = new THREE.BoxGeometry(w + d,d,w,40,40);

  var box_down = new THREE.Mesh(box_down_geo,box_mat);

  var box_top_geo = new THREE.BoxGeometry(w + d,h+d,d,40,40);

  var box_top = new THREE.Mesh(box_top_geo,box_mat);

  applyTexture(box_top,imgFile,bumpFile,imgFile,bumpFile,bumpScale,face_color);

  box_left.position.set(-w/2,0,(w/2 - d/2));
  box_right.position.set(w/2,0,(w/2 - d/2));
  box_down.position.set(0,h/2,(w/2 - d/2));
  box_top.position.set(0,0,w);

  forniture.add(box_base);
  forniture.add(box_left);
  forniture.add(box_right);
  forniture.add(box_down);
  forniture.add(box_top);

  return forniture;

}

// Function for make stove:

function mkStove(){

  var stove_geo = new THREE.BoxGeometry(0.3,0.2,0.02,40,40);
  var stove_mat = new THREE.MeshPhongMaterial();

  var stove = new THREE.Mesh(stove_geo,stove_mat);

  return stove;

}

// Function for make a table:
function mkTable(){

  var table = new THREE.Object3D();

  // base table:
  var base_table_geo = new THREE.BoxGeometry(1,1.5,0.1,40,40);
  var base_table_mat = new THREE.MeshPhongMaterial();
  var base_table = new THREE.Mesh(base_table_geo,base_table_mat);

  base_table.position.set(0,0,0.45);

  // table legs:
  var leg_geo = new THREE.BoxGeometry(0.1,0.1,0.9,40,40);
  var leg_mat = new THREE.MeshPhongMaterial();
  
  var leg_1 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_2 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_3 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_4 = new THREE.Mesh(leg_geo,leg_mat);

  leg_1.position.set(-0.45,-0.7,0);
  leg_2.position.set(0.45,-0.7,0);
  leg_3.position.set(-0.45,0.7,0);
  leg_4.position.set(0.45,0.7,0);

  // add all in table:

  table.add(base_table);
  table.add(leg_1);
  table.add(leg_2);
  table.add(leg_3);
  table.add(leg_4);

  // Texture:

  var kt_texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitch_table.jpg");
  var kt_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_kitch_table.jpg");

  // Apply texture:
  applyTexture(base_table,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);

  applyTexture(leg_1,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_2,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_3,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_4,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);

  return table;
  
}

// Function for make chair:

function mkChair(){

  var chair = new THREE.Object3D();

  var base_chair_geo = new THREE.BoxGeometry(0.4,0.4,0.05,40,40);
  var base_chair_mat = new THREE.MeshPhongMaterial();

  var base_chair = new THREE.Mesh(base_chair_geo,base_chair_mat);

  base_chair.position.set(0,0,0.13);

  // chair legs:
  var leg_geo = new THREE.BoxGeometry(0.05,0.05,0.3,40,40);
  var leg_mat = new THREE.MeshPhongMaterial();
  
  var leg_1 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_2 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_3 = new THREE.Mesh(leg_geo,leg_mat);
  var leg_4 = new THREE.Mesh(leg_geo,leg_mat);

  leg_1.position.set(-0.175,-0.175,0);
  leg_2.position.set(-0.175,0.175,0);
  leg_3.position.set(0.175,-0.175,0);
  leg_4.position.set(0.175,0.175,0);

  var top_chair_geo = new THREE.BoxGeometry(0.4,0.05,0.4,40,40);
  var top_chair_mat = new THREE.MeshPhongMaterial();

  var top_chair = new THREE.Mesh(top_chair_geo,top_chair_mat);

  top_chair.position.set(0,-0.175,0.3);

  // all in chair:

  chair.add(base_chair);
  chair.add(leg_1);
  chair.add(leg_2);
  chair.add(leg_3);
  chair.add(leg_4);
  chair.add(top_chair);
  
  // Texture:

  var kt_texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitch_table.jpg");
  var kt_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_kitch_table.jpg");

  // Apply texture:
  applyTexture(base_chair,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(top_chair,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_1,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_2,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_3,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);
  applyTexture(leg_4,kt_texture,kt_bump,kt_texture,
    kt_bump,0.2,0x281312);

  return chair;

}

// make kitchen forniture with texture:

function mkKFornitureWTxtr(w,h,d){


  var forniture_color = 0xdeb887;
  var face_forniture_color = 0xded7bb;

  var forniture = mkFornitureBiColor(w,h,d,forniture_color,face_forniture_color);

  forniture.scale.set(1.7,1.7,1.7);
  forniture.rotation.z = - Math.PI/2;
  forniture.rotation.x = - Math.PI/2;

  return forniture;

}

function mkKForniture(w,h,d){

  var forniture_color = 0xdeb887;

  var forniture = mkForniture(w,h,d,forniture_color); // 0.4 0.3 0.05

  forniture.scale.set(1.7,1.7,1.7);
  forniture.rotation.z = - Math.PI/2;
  forniture.rotation.x = - Math.PI/2;

  return forniture;

}

// function for generate bed 1:

function mkBed1(){

  // bed_1:
  bed_1 = new THREE.Object3D();

  var color_bed = THREE.ImageUtils.loadTexture("assets/textures/general/cells_05.jpg");

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/bed.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
  new THREE.MeshPhongMaterial({map: color_bed, side: THREE.DoubleSide, shading: THREE.FlatShading}),
  new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        
  // add mesh to object3D bed_1:
        bed_1.add(mesh);

  });

  bed_1.rotation.y = Math.PI/2;
  bed_1.scale.set(0.0015,0.0015,0.0015);
  bed_1.position.set(2.05,0.35,-1.7);

  return bed_1;

}

function mkBed2(){

  // bed_2:
  bed_2 = new THREE.Object3D();

  var color_bed_2 = THREE.ImageUtils.loadTexture("assets/textures/general/cells_03.jpg");

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/bed.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
  new THREE.MeshPhongMaterial({map: color_bed_2, side: THREE.DoubleSide, shading: THREE.FlatShading}),
  new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D bed_2:
  bed_2.add(mesh);

  });

  bed_2.rotation.y =  - Math.PI/2;
  bed_2.scale.set(0.0015,0.0015,0.0015);
  bed_2.position.set(14.9,0.35,-1.7);

  return bed_2;

}

function mkSofa(){

  var sofa = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.35, 0.35, 0.35);
    
    //scene.add(mesh);

    object.rotation.y = - Math.PI/2;
    sofa.add(object);
  });


  loader.load(
    'assets/models/clear_sofa.obj', 
    'assets/models/clear_sofa.mtl', 
    {side: THREE.DoubleSide}
  );

  return sofa;

}

function mkDesk(){

  var desk = new THREE.Object3D();

  var color_desk = THREE.ImageUtils.loadTexture("assets/textures/general/table.jpg");

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/table.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
      new THREE.MeshPhongMaterial({map: color_desk,side: THREE.DoubleSide, shading: THREE.FlatShading}),
      new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];
  
  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
    
  // add mesh to object3D desk:
  desk.add(mesh);

  });

  desk.position.set(6.5,0.45,3.15);
  desk.rotation.z = - Math.PI/2;
  desk.rotation.x = - Math.PI/2;
  desk.scale.set(0.0014,0.0014,0.0014);

  return desk;

}

function mkDeskChair(){

  var desk_chair = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   
    //object.scale.set(0.01, 0.01, 0.01);
    object.rotation.y = - Math.PI/2;
    object.position.set(6.9,0.46,3.65);
    desk_chair.add(object);
  });


  loader.load(
    'assets/models/desk_chair.obj', 
    'assets/models/desk_chair.mtl', 
    {side: THREE.DoubleSide}
  );

  return desk_chair;

}

function mkMonitor(){

  // Monitor
  var monitor = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/monitor.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0x000000,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
    ]; // was 0xd2b48c.

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D monitor:
  monitor.add(mesh);

  });

  monitor.position.set(6.05,1.713,2.5);
  monitor.rotation.y = Math.PI/2;
  monitor.scale.set(0.004,0.004,0.004);

  return monitor;

}

function mkPc(){

  // Pc Tower:

  var pc_tower = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/tourPC.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0xD3D3D3,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D pc_tower:
  pc_tower.add(mesh);

  });

  pc_tower.position.set(6.5,0.73,2.25);
  pc_tower.rotation.y = Math.PI/2;
  pc_tower.scale.set(0.2,0.2,0.2);

  return pc_tower;

}

function mkTrash(){

  // Trash:

  var trash = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make loader.  

  // load model:
  loader.load('assets/models/trash.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0xC0C0C0,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
    ]; // was 0xd2b48c.

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D trash:
  trash.add(mesh);

  });

  trash.position.set(6.5,0.47,4);
  trash.scale.set(0.022,0.022,0.022);

  return trash;

}

function mkTvCase(){

  var tv_case = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make loader.

  // load model:
  loader.load('assets/models/tv_case.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0x593a1b,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D tv_case:
  tv_case.add(mesh);

  });

  tv_case.position.set(6.2,0.451,-3.72);
  tv_case.rotation.y =  Math.PI/2;
  tv_case.scale.set(0.025,0.025,0.025);

  return tv_case;

}

function mkBookCase(){

  // Book Case 1:

  var book_case = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/book_case.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0x593a1b,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D book_case:
  book_case.add(mesh);

  });

  book_case.position.set(6.1,0.47,7);
  book_case.rotation.y = Math.PI/2;
  book_case.scale.set(0.03,0.03,0.03);

  return book_case;

}

function mkLoungeTable(){

  // Lounge Table:

  var lounge_table = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/lounge_table.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: 0x593a1b,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D lounge_table:
  lounge_table.add(mesh);

  });

  lounge_table.position.set(8.5,0.46,-3.7);
  lounge_table.rotation.y = - Math.PI/2;
  lounge_table.scale.set(0.015,0.015,0.015);

  return lounge_table;

}

function mkWardRobe(color){



  var wardrobe = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/wardrobe.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: color,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D wardrobe:
  wardrobe.add(mesh);

  });

  wardrobe.rotation.y = - Math.PI/2;
  wardrobe.scale.set(0.001,0.001,0.001);

  return wardrobe;

}

function mkNightStand(color){



  var nightstand = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/nightstand.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: color,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D nightstand:
  nightstand.add(mesh);

  });

  nightstand.rotation.y = Math.PI/2;
  nightstand.scale.set(2,2,2);

  return nightstand;

}

function mkDresser(){

  var dresser = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.0015, 0.0015, 0.0015);
    
    //scene.add(mesh);

    object.rotation.y = Math.PI;
    dresser.add(object);
  });


  loader.load(
    'assets/models/locker.obj', 
    'assets/models/locker.mtl', 
    {side: THREE.DoubleSide}
  );

  return dresser;

}

function mkTv(){

  var tv = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(1, 1, 1);
    
    //scene.add(mesh);

    object.rotation.y = Math.PI/2;
    tv.add(object);
  });


  loader.load(
    'assets/models/lcd_tv.obj', 
    'assets/models/lcd_tv.mtl', 
    {side: THREE.DoubleSide}
  );

  return tv;

}

function mkBook(){

  var book = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.003, 0.003, 0.003);
    
    //scene.add(mesh);

    object.rotation.y = - Math.PI/2;
    book.add(object);
  });


  loader.load(
    'assets/models/books1.obj', 
    'assets/models/books1.mtl', 
    {side: THREE.DoubleSide}
  );

  return book;

}

function mkBook1(){

  var book = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.01, 0.01, 0.01);
    
    //scene.add(mesh);

    object.rotation.y = Math.PI/2;
    book.add(object);
  });


  loader.load(
    'assets/models/livres.obj', 
    'assets/models/livres.mtl', 
    {side: THREE.DoubleSide}
  );

  return book;

}

function mkToilet(){

  var toilet = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.014, 0.014, 0.014);
    
    //scene.add(mesh);

    object.rotation.y = Math.PI/2;
    toilet.add(object);
  });


  loader.load(
    'assets/models/water.obj', 
    'assets/models/water.mtl', 
    {side: THREE.DoubleSide}
  );

  return toilet;

}

function mkBidet(){

  var bidet = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.014, 0.014, 0.014);
    
    //scene.add(mesh);

    object.rotation.y = Math.PI/2;
    bidet.add(object);
  });


  loader.load(
    'assets/models/bidet.obj', 
    'assets/models/bidet.mtl', 
    {side: THREE.DoubleSide}
  );

  return bidet;

}

function mkSink(){

  var sink = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
   

    object.scale.set(0.02, 0.02, 0.02);
    
    //scene.add(mesh);

    object.rotation.y = - Math.PI/2;
    sink.add(object);
  });


  loader.load(
    'assets/models/bathroomFurniture.obj', 
    'assets/models/bathroomFurniture.mtl', 
    {side: THREE.DoubleSide}
  );

  return sink;

}

function mkBathLight(){

  var bath_light = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.003, 0.003, 0.003);
    object.rotation.z = Math.PI/2;
    bath_light.add(object);
  
  });

  loader.load(
    'assets/models/ceiling_light.obj', 
    'assets/models/ceiling_light.mtl', 
    {side: THREE.DoubleSide}
  );

  return bath_light;

}

function mkShowerTry(){

  var shower_try = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/shower_try.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D shower try:
  shower_try.add(mesh);

  });

  shower_try.scale.set(0.025,0.01,0.015);

  return shower_try;

}

function mkShowerHead(){

  var shower_head = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.02, 0.02, 0.02);
    shower_head.add(object);
  
  });

  loader.load(
    'assets/models/shower.obj', 
    'assets/models/shower.mtl', 
    {side: THREE.DoubleSide}
  );

  return shower_head;

}

function mkKeys(color){

  var keyboard = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/keyboard.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: color,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D wardrobe:
  keyboard.add(mesh);

  });

  keyboard.rotation.y = Math.PI/2;
  keyboard.scale.set(0.1,0.1,0.1);

  return keyboard;

}

function mkMouse(color){

  var mouse = new THREE.Object3D();

  var loader = new THREE.OBJLoader(); // make a loader.

  // load model:
  loader.load('assets/models/mouse.obj', function (obj) {

  global_o = obj; // set obj as global object.

  // make material:
  var multiMaterial = [
    new THREE.MeshPhongMaterial({color: color,side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})];

  // make mesh:
  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  
  // add mesh to object3D wardrobe:
  mouse.add(mesh);

  });

  //mouse.rotation.y = Math.PI/2;
  mouse.scale.set(0.05,0.05,0.05);

  return mouse;

}

function mkStove(){

  var stove = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.015, 0.015, 0.015);
    object.rotation.y = - Math.PI/2;
    stove.add(object);
  
  });

  loader.load(
    'assets/models/cucina.obj', 
    'assets/models/cucina.mtl', 
    {side: THREE.DoubleSide}
  );

  return stove;

}

function mkKDrawer(){

  var drawer = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.015, 0.015, 0.015);
    object.rotation.y = - Math.PI/2;
    drawer.add(object);
  
  });

  loader.load(
    'assets/models/cassettiera.obj', 
    'assets/models/cassettiera.mtl', 
    {side: THREE.DoubleSide}
  );

  return drawer;

}

function mkKSink(){

  var sink = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.015, 0.015, 0.015);
    object.rotation.y = - Math.PI/2;
    sink.add(object);
  
  });

  loader.load(
    'assets/models/lavello.obj', 
    'assets/models/lavello.mtl', 
    {side: THREE.DoubleSide}
  );

  return sink;

}

function mkKCabinet(){

  var cabinet = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.015, 0.015, 0.015);
    object.rotation.y = - Math.PI/2;
    cabinet.add(object);
  
  });

  loader.load(
    'assets/models/pensileDoppio.obj', 
    'assets/models/pensileDoppio.mtl', 
    {side: THREE.DoubleSide}
  );

  return cabinet;

}

function mkKCappa(){

  var cappa = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.4, 0.4, 0.4);
    object.rotation.y = - Math.PI/2;
    cappa.add(object);
  
  });

  loader.load(
    'assets/models/capa.obj', 
    'assets/models/capa.mtl', 
    {side: THREE.DoubleSide}
  );

  return cappa;

}

function mkKLight(){

  var kitchen_light = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.003, 0.003, 0.003);
    object.rotation.z = Math.PI/2;
    kitchen_light.add(object);
  
  });

  loader.load(
    'assets/models/ceiling_light.obj', 
    'assets/models/ceiling_light.mtl', 
    {side: THREE.DoubleSide}
  );

  return kitchen_light;

}

function mkFridge(){

  var fridge = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.015, 0.015, 0.015);
    //object.rotation.y = - Math.PI/2;
    fridge.add(object);
  
  });

  loader.load(
    'assets/models/frigo.obj', 
    'assets/models/frigo.mtl', 
    {side: THREE.DoubleSide}
  );

  return fridge;

}

function mkDashWasher(){

  var dashWasher = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.2, 0.2, 0.2);
    object.rotation.y = - Math.PI;
    dashWasher.add(object);
  
  });

  loader.load(
    'assets/models/dishwasher.obj', 
    'assets/models/dishwasher.mtl', 
    {side: THREE.DoubleSide}
  );

  return dashWasher;

}

function mkNightLamp(){

  var night_lamp = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.01, 0.01, 0.01);
    object.rotation.y = - Math.PI;
    night_lamp.add(object);
  
  });

  loader.load(
    'assets/models/nightLamp.obj', 
    'assets/models/nightLamp.mtl', 
    {side: THREE.DoubleSide}
  );

  return night_lamp;

}

function mkDeskLamp(){

  var desk_lamp = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.008, 0.008, 0.008);
    object.rotation.y = - Math.PI;
    desk_lamp.add(object);
  
  });

  loader.load(
    'assets/models/deskLight.obj', 
    'assets/models/deskLight.mtl', 
    {side: THREE.DoubleSide}
  );

  return desk_lamp;

}

function mkFloorLamp(){

  var floor_lamp = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.001, 0.001, 0.001);
    object.rotation.y = - Math.PI;
    floor_lamp.add(object);
  
  });

  loader.load(
    'assets/models/floorLamp.obj', 
    'assets/models/floorLamp.mtl', 
    {side: THREE.DoubleSide}
  );

  return floor_lamp;

}

function mkBalconyRailing(){

  var balcony_railing = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.001, 0.001, 0.001);
    object.rotation.y = - Math.PI;
    balcony_railing.add(object);
  
  });

  loader.load(
    'assets/models/balcony.obj', 
    'assets/models/balcony.mtl', 
    {side: THREE.DoubleSide}
  );

  return balcony_railing;

}

function mkBalconyFlowers(pos_x,pos_y,pos_z){

  var flowers = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    
    object.position.set(pos_x,pos_y,pos_z);
    flowers.add(object);
  
  });

  loader.load(
    'assets/models/maceta.obj', 
    'assets/models/maceta.mtl', 
    {side: THREE.DoubleSide}
  );

  return flowers;

}

function mkInternalFlowers(pos_x,pos_y,pos_z){

  var flowers = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.01,0.01,0.01);
    object.position.set(pos_x,pos_y,pos_z);
    flowers.add(object);
  
  });

  loader.load(
    'assets/models/yuccaPlant.obj', 
    'assets/models/yuccaPlant.mtl', 
    {side: THREE.DoubleSide}
  );

  return flowers;

}

function mkRug(pos_x,pos_y,pos_z){

  var rug = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.01,0.01,0.01);
    object.position.set(pos_x,pos_y,pos_z);
    rug.add(object);
  
  });

  loader.load(
    'assets/models/oriental-rug.obj', 
    'assets/models/oriental-rug.mtl', 
    {side: THREE.DoubleSide}
  );

  return rug;

}

function mkRobot(){

  var robot = new THREE.Object3D();

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.025, 0.025, 0.025);
    //object.rotation.y = - Math.PI/2;
    robot.add(object);
  
  });

  loader.load(
    'assets/models/r2d2_2.obj', 
    'assets/models/r2d2_2.mtl', 
    {side: THREE.DoubleSide}
  );

  return robot;

}

function mkSphereLight(radius,visibility,pos_x,pos_y,pos_z){

  lampShadeGeometry = new THREE.SphereGeometry(radius, 8, 8, 0, Math.PI, 0, Math.PI);
  lampShadeMaterial = new THREE.MeshPhongMaterial({transparent:true,opacity:visibility});
  lampShade = new THREE.Mesh(lampShadeGeometry,lampShadeMaterial);
  lampShade.position.set(pos_x,pos_y,pos_z);
  lampShade.rotation.y = Math.PI/2;
  lampShade.scale.set(0.5,0.5,0.5);

  // boolean to check if light is on:
  
  isOn = true;

  // properties:

  lampShade.isOn = isOn;
  lampShade.interact = interact_light;

  return lampShade;

}

function mkRobotCover(radius,visibility,pos_x,pos_y,pos_z){

  robotCoverGeometry = new THREE.SphereGeometry(radius, 8, 8, 0, 2*Math.PI, 0, 2*Math.PI);
  robotCoverMaterial = new THREE.MeshPhongMaterial({transparent:true,opacity:visibility});
  robotCover = new THREE.Mesh(robotCoverGeometry,robotCoverMaterial);
  robotCover.position.set(pos_x,pos_y,pos_z);
  robotCover.rotation.y = - Math.PI/2;
  lampShade.scale.set(0.5,0.5,0.5);

  // boolean to check if light is on:
  
  isOn = false;

  // properties:

  robotCover.isOn = isOn;
  robotCover.interact = interact_robot;

  return robotCover;

}

function mkSwitch(pos_x,pos_y,pos_z){
  
  var light_switch_geo = new THREE.BoxGeometry(0.01,0.1,0.1,40,40);
  var light_switch_mat = new THREE.MeshPhongMaterial({color:0xDEB887});

  var light_switch = new THREE.Mesh(light_switch_geo,light_switch_mat);

  light_switch.position.set(pos_x,pos_y,pos_z);

  // boolean to check if light is on:
  
  isOn = true;

  // properties:

  light_switch.isOn = isOn;
  light_switch.interact = interact_light;

  return light_switch;

}

function mkDoorBell(pos_x,pos_y,pos_z){
  
  var door_bell_geo = new THREE.BoxGeometry(0.01,0.1,0.1,40,40);
  var door_bell_mat = new THREE.MeshPhongMaterial({color:0xDEB887});

  var door_bell = new THREE.Mesh(door_bell_geo,door_bell_mat);

  door_bell.position.set(pos_x,pos_y,pos_z);
  door_bell.rotation.y = Math.PI/2;

  var bell_sound = new Sound(['assets/sounds/don.mp3'], 15, 0.5, true); 

  door_bell.add(bell_sound);

  // boolean to check if light is on:
  
  onPlay = false;

  // properties:

  door_bell.onPlay = onPlay;
  door_bell.sound = bell_sound;
  door_bell.interact = interact_din_don;

  return door_bell;

}

function mkMirrorMesh(){

  var planeGeo1 = new THREE.PlaneGeometry( 1.2,0.8 );
  groundMirror1 = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: window.innerWidth, textureHeight: window.innerHeight, color: 0x777777 } );
  var mirrorMesh1 = new THREE.Mesh( planeGeo1, groundMirror1.material );
  mirrorMesh1.add( groundMirror1 );
  mirrorMesh1.rotation.y = -Math.PI/2;
  mirrorMesh1.position.set(19.6,2.5,6.35);
  
  mirrorMesh1.groundMirror1 = groundMirror1;
  mirrorMesh1.visible = false;

  return mirrorMesh1;

}
 
function mkMirror(){

  verticalMirror1 = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: window.innerWidth, textureHeight: window.innerHeight, color:0x889999 } );
  var verticalMirrorMesh1 = new THREE.Mesh( new THREE.PlaneGeometry( 5, 5 ), verticalMirror1.material );
  verticalMirrorMesh1.add( verticalMirror1 );
  verticalMirrorMesh1.position.y = 35;
  verticalMirrorMesh1.position.z = -45;
  
  verticalMirrorMesh1.verticalMirror1 = verticalMirror1;
  verticalMirrorMesh1.visible = false;


  return verticalMirrorMesh1;

}
