// function for generate lounge floor:

function mkLoungeFloor(){

      lounge_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(3.36, 0);
      shape.lineTo(3.36, 4.2);
      shape.lineTo(5.7,4.2);
      shape.lineTo(5.7,6.3);
      shape.lineTo(3.36,6.3);
      shape.lineTo(3.36,11.1);
      shape.lineTo(0,11.1);
      shape.lineTo(0, 0);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/lounge_floor.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/lounge_floor_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      
      wallpaper.position.set(3.9,0,0.31);
      
      lounge_shape.add(wallpaper);

      apartment.add(lounge_shape);

}

// function for generate kitchen floor:

function mkKitchenFloor(){

	// Kitchen floor:

	var kitchen_texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_floor.jpg");
	var kitchen_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_kitchen_floor.jpg");;

	var kitchen_floor = mkFloorWithTexture(3.7,3.77,kitchen_texture,kitchen_bump,0.2);

      // Repeate wrapping on texture:
      var repeat_x = 3;
      var repeat_y = 3;
      kitchen_texture.wrapS = THREE.RepeatWrapping;
      kitchen_texture.wrapT = THREE.RepeatWrapping;
      kitchen_texture.repeat.set(repeat_x,repeat_y);

      // Floor position settings:
      kitchen_floor.position.set(9.15,2.2,0.31);

      apartment.add(kitchen_floor);

}

// function for generate Room 1 floor:

function mkRoom1Floor(){

	// Room 1 floor:

	var room_1_texture = THREE.ImageUtils.loadTexture("assets/textures/general/room_1_floor.jpg");
	var room_1_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_room_1_floor.jpg");;

	var room_1_floor = mkFloorWithTexture(3.7,4.7,room_1_texture,room_1_bump,0.2);

      // Floor position settings:
      room_1_floor.position.set(2.05,8.75,0.31);

      apartment.add(room_1_floor);

}

// function for generate Room 2 floor:

function mkRoom2Floor(){

	// Room 2 floor:

	var room_2_texture = THREE.ImageUtils.loadTexture("assets/textures/general/room_1_floor.jpg");
	var room_2_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_room_1_floor.jpg");;

	var room_2_floor = mkFloorWithTexture(3.7,4.7,room_2_texture,room_2_bump,0.2);

      // Floor position settings:
      room_2_floor.position.set(9.15,8.75,0.31);

      apartment.add(room_2_floor);

}

// function for generate Closet floor:

function mkClosetFloor(){

	// Closet floor:

	var closet_texture = THREE.ImageUtils.loadTexture("assets/textures/general/lounge_floor.jpg");
	var closet_bump = THREE.ImageUtils.loadTexture("assets/textures/general/lounge_floor_bump.jpg");;

	var closet_floor = mkFloorWithTexture(1.3,1,closet_texture,closet_bump,0.2);

      // Floor position settings:
      closet_floor.position.set(10.3,5.8,0.31);

      // Add floor to apartment: 
      apartment.add(closet_floor);

}

// function for generate Bathe Shower floor:

function mkBatheShowerFloor(){

      // Bathe Shower floor:

      var shower_texture = THREE.ImageUtils.loadTexture("assets/textures/general/shower.jpg");
      var shower_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_shower.jpg");

      var shower_floor_1 = mkFloorWithTexture(2,3,shower_texture,shower_bump,0.2);

      shower_floor_1.position.set(12.3,6.29,1.8);
      shower_floor_1.rotation.x = Math.PI/2;

      var shower_floor_2 = mkFloorWithTexture(1.1,3,shower_texture,shower_bump,0.2);

      shower_floor_2.position.set(13.09,5.8,1.8);
      shower_floor_2.rotation.x = Math.PI/2;
      shower_floor_2.rotation.y = - Math.PI/2;

      var shower_floor_3 = mkFloorWithTexture(1.1,3,shower_texture,shower_bump,0.2);

      shower_floor_3.position.set(11.31,5.8,1.8);
      shower_floor_3.rotation.x = Math.PI/2;
      shower_floor_3.rotation.y = Math.PI/2;

      var shower_floor = new THREE.Object3D();

      shower_floor.add(shower_floor_1);
      shower_floor.add(shower_floor_2);
      shower_floor.add(shower_floor_3);

      apartment.add(shower_floor);

}


// function for generate Bathe floor:

function mkBatheFloor(){

      bath_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(1.9, 0);
      shape.lineTo(1.9, 4.3);
      shape.lineTo(0,4.3);
      shape.lineTo(0,3.2);
      shape.lineTo(-1.55,3.2);
      shape.lineTo(-1.55,2.2);
      shape.lineTo(0,2.2);
      shape.lineTo(0, 0);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/bath_floor.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/bath_floor_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      
      wallpaper.position.set(11.2,2,0.31);
      
      bath_shape.add(wallpaper);

      apartment.add(bath_shape);

}

// function for generate Internal Wall Kitchen:

function mkInternalWallKitchen(){

	var kitchen_wall = THREE.ImageUtils.loadTexture("assets/textures/general/vertical_kitchen.jpg");
	var kitchen_wall_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_vertical_kitchen.jpg");

      // Repeate wrapping on texture:
      var repeat_x = 2;
      var repeat_y = 1;
      kitchen_wall.wrapS = THREE.RepeatWrapping;
      kitchen_wall.wrapT = THREE.RepeatWrapping;
      kitchen_wall.repeat.set(repeat_x,repeat_y);

      var kitchen_wall_floor_1 = mkFloorWithTexture(3.68,1.5,kitchen_wall,kitchen_wall_bump,0.2);

      kitchen_wall_floor_1.position.set(9.15,4.09,1.05);
      kitchen_wall_floor_1.rotation.x = Math.PI/2;

      var kitchen_wall_floor_2 = mkFloorWithTexture(2.3,1.5,kitchen_wall,kitchen_wall_bump,0.2);

      kitchen_wall_floor_2.position.set(10.99,2.95,1.05);//(9.15,4.09,1);
      kitchen_wall_floor_2.rotation.x = Math.PI/2;
      kitchen_wall_floor_2.rotation.y = - Math.PI/2;

      apartment.add(kitchen_wall_floor_1);
      apartment.add(kitchen_wall_floor_2);

}