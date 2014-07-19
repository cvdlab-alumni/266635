function generateLivingOBJ(){
	
  /* --- Living --- */

  // desk:

  // Desk Table:
  
  var desk = mkDesk();

  scene.add(desk);

  // Internal flowers:

  var plant = mkInternalFlowers(6.3,0.23,1.2);

  scene.add(plant);

  // Books:

  var books = mkBook();
  books.position.set(6,2,7.5);

  scene.add(books);

  var books_1 = mkBook1();
  books_1.position.set(6.2,1.6,5.6);

  scene.add(books_1);

  // Rug:

  var rug = mkRug(8.3,0.45,7.8);

  scene.add(rug);

  // Desk Chair:

  var desk_chair = mkDeskChair();

  scene.add(desk_chair);

  // Monitor:

  var monitor = mkMonitor();

  scene.add(monitor);

  // Pc Tower:

  var pc_tower = mkPc();

  scene.add(pc_tower);

  // Keyboard:

  var keys = mkKeys(0x000000);

  keys.position.set(7.05,1.41,3.35);

  scene.add(keys);

  // Mouse:

  var mouse = mkMouse(0x000000);

  mouse.position.set(7.05,1.46,2.9);

  scene.add(mouse);

  // Desk Light:
  
  // Obj:

  var desk_lamp = mkDeskLamp();

  desk_lamp.rotation.y = - Math.PI/4;
  desk_lamp.position.set(6.35,1.716,2.35);

  // sphere to intersect:

  lamp_desk_shade = mkSphereLight(0.5,0,6.3,1.716,2.8);

  // lamp light:

  desk_lamp_light = new THREE.PointLight(0xffffff);
  desk_lamp_light.distance = 1.5;
  desk_lamp_light.intensity = 1.8;
  desk_lamp_light.castShadows = true;
  
  // add light to lamp:

  lamp_desk_shade.add(desk_lamp_light);

  // properties:
  
  lamp_desk_shade.light = desk_lamp_light;
  lamp_desk_shade.light.position.set(-1,-0.1,1.5);
  
  // add to scene:

  scene.add(lamp_desk_shade);
  scene.add(desk_lamp);

  // Trash:

  var trash = mkTrash();

  scene.add(trash);
  // Book case:

  var book_case = mkBookCase();

  scene.add(book_case);

  // Tv Case:

  var tv_case = mkTvCase();

  scene.add(tv_case);

  // Tv:

  var tv = mkTv();

  tv.position.set(6.2,1.465,-3.75);

  scene.add(tv);

  // Floor Lamp:

  // Obj:

  var floor_lamp = mkFloorLamp();

  floor_lamp.position.set(10.7,0.45,-4.5);

  // sphere to intersect:

  lamp_floor_shade = mkSphereLight(1,0,10.6,2.3,-4.9);
  lamp_floor_shade.rotation.y = - Math.PI/4;

  // lamp light:

  floor_lamp_light = new THREE.PointLight(0xffffff);
  floor_lamp_light.distance = 1;
  floor_lamp_light.intensity = 1.8;
  floor_lamp_light.castShadows = true;
  
  // add light to lamp:

  lamp_floor_shade.add(floor_lamp_light);

  // properties:
  
  lamp_floor_shade.light = floor_lamp_light;
  lamp_floor_shade.light.position.set(-0.8,0,0.8);
  
  // lamp switch:

  lamp_floor_switch = mkSwitch(10.78,2,1);
  
  
  //lamp_floor_switch.add(floor_lamp_light);

  lamp_floor_switch.light = floor_lamp_light;
  
  // add to scene:

  scene.add(lamp_floor_shade);
  scene.add(lamp_floor_switch);
  scene.add(floor_lamp);

  // Picture 1:

  picture_1 = createPicture(new THREE.BoxGeometry(15, 15, 0.2), "star_wars.jpg", "big_picture_frame_bump.jpg");
  picture_1.scale.set(0.1,0.1,0.1);
  picture_1.position.set(12.5,3.5,1.95);

  pic_1_sound = new Sound(['assets/sounds/star_wars.mp3'], 15, 0.5, true);

  onPlay = false;

  picture_1.onPlay = onPlay;
  picture_1.sound = pic_1_sound;
  picture_1.interact = interact_audio_pics;

  scene.add(picture_1);

  // Picture 2:

  picture_2 = createPicture(new THREE.BoxGeometry(15, 15, 0.2), "pink_floyd_1.jpg", "med_picture_frame_bump.jpg");
  picture_2.scale.set(0.1,0.1,0.1);
  picture_2.position.set(10.78,1.95,-3.6);
  picture_2.rotation.y = - Math.PI/2;

  pic_2_sound = new Sound(['assets/sounds/pink_floyd.mp3'], 15, 0.5, true);

  onPlay = false;

  picture_2.onPlay = onPlay;
  picture_2.sound = pic_2_sound;
  picture_2.interact = interact_audio_pics;

  scene.add(picture_2);

  // Picture 3:

  picture_3 = createPicture(new THREE.BoxGeometry(15, 15, 0.2), "project.jpg", "big_picture_frame_bump.jpg");
  picture_3.scale.set(0.1,0.1,0.1);
  picture_3.position.set(10.78,2.6,9);
  picture_3.rotation.y = - Math.PI/2;
  picture_3.rotation.x = Math.PI/12;

  rotated = false;

  picture_3.rotated = rotated;
  picture_3.interact = interact_pics;

  scene.add(picture_3);


  // Sofas:

  var sofa = mkSofa();

  sofa.position.set(10,0.45,-3.6);

  scene.add(sofa);

  // Lounge Table:

  var lounge_table = mkLoungeTable();

  scene.add(lounge_table);

  // R2D2:

  r2d2 = mkRobot();

  r2d2_sound = new Sound(['assets/sounds/audio_1.mp3'], 15, 0.5, true);
  
  robot = mkRobotCover(1,0,15.5,1.45,2.7);
  
  robot.add(r2d2);
  
  robot.r2d2 = r2d2;
  robot.r2d2.position.set(0,-1,0);
  
  robot.add(r2d2_sound);
  robot.sound = r2d2_sound;
  
  scene.add(robot);

}