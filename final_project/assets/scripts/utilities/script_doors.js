// function for generate Entry Door:

function mkEntryDoor(){

	/* --- Make entry door --- */

      // Generate door:
      var entry_door = mkDoor(0.9,2.1,0.15);
      
      // Apply texture and bumpmap:
      var texture_1 = THREE.ImageUtils.loadTexture("assets/textures/general/entry_door_1.jpg");
      var bump_1 = THREE.ImageUtils.loadTexture
                    ("assets/textures/general/bump_entry_door_1.jpg");
      var texture_1_rev = THREE.ImageUtils.loadTexture("assets/textures/general/entry_door_1_rev.jpg");
      var bump_1_rev = THREE.ImageUtils.loadTexture
                    ("assets/textures/general/bump_entry_door_1_rev.jpg");      
      
      applyTexture(entry_door.door,texture_1,bump_1,texture_1_rev,
        bump_1_rev,0.1,0x362012);

      // Door Settings:
      entry_door.position.set(7.87,2.02,11.15);
      entry_door.scale.set(1.5,1.5,1.5);

      return entry_door;

}

// function for generate Room 1 Door:

function mkRoom1Door(){

  var room_1_door = mkDoor(0.8,2.1,0.1);

  // Apply texture and bumpmap:
  var texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_2.jpg");
  var bump = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2.jpg");      
  var texture_rev = THREE.ImageUtils.loadTexture("assets/textures/general/door_2_rev.jpg");
  var bump_rev = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2_rev.jpg");

  applyTexture(room_1_door.door,texture,bump,texture_rev,bump_rev,0.1,0x362012);

  // Door settings:
  room_1_door.position.set(5.77,2.022,-1.2);
  room_1_door.rotation.y = Math.PI/2;
  room_1_door.scale.set(1.5,1.5,1.5);

  return room_1_door;

}

// function for generate Room 2 Door:

function mkRoom2Door(){

	var room_2_door = mkDoor(0.8,2.1,0.1);

	// Apply texture and bumpmap:
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_2.jpg");
  	var bump = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2.jpg");      
  	var texture_rev = THREE.ImageUtils.loadTexture("assets/textures/general/door_2_rev.jpg");
  	var bump_rev = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2_rev.jpg");
  	
  	applyTexture(room_2_door.door,texture,bump,texture_rev,bump_rev,0.1,0x362012);

  	// Door settings:
  	room_2_door.position.set(10.9,2.022,-2.1);
  	room_2_door.rotation.y = - Math.PI/2;
  	room_2_door.scale.set(1.5,1.5,1.5);

  	return room_2_door;

}

// function for generate Closet Door:

function mkClosetDoor(){

	var closet_door = mkDoor(0.9,2.1,0.1);

	// Apply texture and bumpmap:
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_2.jpg");
  	var bump = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2.jpg");      
  	var texture_rev = THREE.ImageUtils.loadTexture("assets/textures/general/door_2_rev.jpg");
  	var bump_rev = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2_rev.jpg");

    applyTexture(closet_door.door,texture,bump,texture_rev,bump_rev,0.1,0x362012);

    // Door settings:
    closet_door.position.set(14.45,2.022,2.2);
    closet_door.rotation.x = Math.PI;
    closet_door.rotation.y = Math.PI/2;
    closet_door.scale.set(1.5,1.5,1.5);


    return closet_door;
}

// function for generate Bath Door:

function mkBatheDoor(){

	var bathe_door = mkDoor(0.8,2.1,0.1);
      
    // Apply texture and bumpmap:
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_2.jpg");
  	var bump = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2.jpg");      
  	var texture_rev = THREE.ImageUtils.loadTexture("assets/textures/general/door_2_rev.jpg");
  	var bump_rev = THREE.ImageUtils.loadTexture
                ("assets/textures/general/bump_door_2_rev.jpg");

    applyTexture(bathe_door.door,texture,bump,texture_rev,bump_rev,0.1,0x362012);

    // Door settings:
    bathe_door.position.set(14.45,2.022,3.89);
    bathe_door.rotation.x = Math.PI;
    bathe_door.rotation.y = Math.PI/2;
    bathe_door.scale.set(1.5,1.5,1.5);

    return bathe_door;

}

// function for generate Shower Door:

function mkShowerDoor(){

	var shower_door_geo = new THREE.BoxGeometry(1.2,2.8,0.05,40,40);
	var shower_door_mat = new THREE.MeshPhongMaterial();

	var shower_door = new THREE.Mesh(shower_door_geo,shower_door_mat);

	var shower_door_textr = THREE.ImageUtils.loadTexture("assets/textures/general/shower_door.jpg");
	var shower_door_bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_shower_door.jpg");

	applyTexture(shower_door,shower_door_textr,shower_door_bump,shower_door_textr,shower_door_bump,0.2,0xffffff);

	//shower_door.rotation.x = - Math.PI/2;
	shower_door.position.set(18.35,2.5,3.65);
	shower_door.scale.set(1.5,1.5,1.5);

	var sh_door_open = false;

	shower_door.interact = function(){ if( sh_door_open === false){
										sh_door_open = true;
                    new TWEEN.Tween(this.position).to({x: 16.6},1000).start();
										}
										else { 
												sh_door_open = false;
												new TWEEN.Tween(this.position).to({x: 18.35},1000).start();
										}
									};

	return shower_door;

}

// function for generate kitchen Door:

function mkKitchenDoor(){

	var kitchen_door = mkDoor(0.8,2.1,0.1);

	// Apply texture and bumpmap:
	var texture = THREE.ImageUtils.loadTexture("assets/textures/general/door_2.jpg");
	var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bump_door_2.jpg");      
	var texture_rev = THREE.ImageUtils.loadTexture("assets/textures/general/door_2_rev.jpg");
	var bump_rev = THREE.ImageUtils.loadTexture("assets/textures/general/bump_door_2_rev.jpg");

	applyTexture(kitchen_door.door,texture,bump,texture_rev,bump_rev,0.1,0x362012);

	// Door settings:
	kitchen_door.position.set(10.9,2.022,6.23);
	kitchen_door.rotation.y = - Math.PI/2;
	kitchen_door.scale.set(1.5,1.5,1.5);

	return kitchen_door;

}