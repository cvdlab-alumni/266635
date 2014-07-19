// function for ganerate Room 1 Window Left Side:

function mkRoom1WindowLeft(){

	// Window Room 1:

      // left side window:

      var lsw_room_1 = mkWindow(0.6,1.35,0.1);

      // Apply texture & bump:

      var wndw_l_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
      var wndw_l_bump = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_trasp.png");      
      var wndw_l_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_rev_trasp.png");
      var wndw_l_bump_rev = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_rev_trasp.png");

      applyTextureWindow(lsw_room_1.wndw,wndw_l_txr,wndw_l_bump,wndw_l_txr_rev,
      	wndw_l_bump_rev,0.1,0xd1cbcb);

      lsw_room_1.position.set(2.3,2.6,-5.5);
      //lsw_room_1.rotation.x = Math.PI/2;
      lsw_room_1.scale.set(1.5,1.5,1.5);
      
      return lsw_room_1;

}

// function for generate Room 1 Window Right Side:

function mkRoom1WindowRight(){

	// right side window:

	var rsw_room_1 = mkWindow(0.6,1.35,0.1);

	var wndw_r_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
	var wndw_r_bump = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_sx_trasp.png");      
	var wndw_r_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_dx_trasp.png");
	var wndw_r_bump_rev = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_dx_trasp.png");

	applyTextureWindow(rsw_room_1.wndw,wndw_r_txr,wndw_r_bump,wndw_r_txr_rev,
		wndw_r_bump_rev,0.1,0xd1cbcb);

	rsw_room_1.position.set(3.8,2.6,-5.5);
	rsw_room_1.rotation.y = -Math.PI;
	rsw_room_1.rotation.x = Math.PI;
	rsw_room_1.scale.set(1.5,1.5,1.5);

	return rsw_room_1;

}

// function for generate Room 2 Window Left:

function mkRoom2WindowLeft(){

	var lsw_room_2 = mkWindow(0.6,1.35,0.1);

    // Apply texture & bump:

    var wndw_l_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
    var wndw_l_bump = THREE.ImageUtils.loadTexture
    ("assets/textures/general/bump_anta_sx_trasp.png");      
    var wndw_l_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_rev_trasp.png");
    var wndw_l_bump_rev = THREE.ImageUtils.loadTexture
    ("assets/textures/general/bump_anta_sx_rev_trasp.png");

    applyTextureWindow(lsw_room_2.wndw,wndw_l_txr,wndw_l_bump,wndw_l_txr_rev,wndw_l_bump_rev,0.1,0xd1cbcb);

    lsw_room_2.position.set(11.9,2.6,-5.5);
    lsw_room_2.scale.set(1.5,1.5,1.5);

    return lsw_room_2;

}

// function for generate Room 1 Window Right Side:

function mkRoom2WindowRight(){

	// right side window:

	var rsw_room_2 = mkWindow(0.6,1.35,0.1);

	var wndw_r_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
	var wndw_r_bump = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_sx_trasp.png");      
	var wndw_r_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_dx_trasp.png");
	var wndw_r_bump_rev = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_dx_trasp.png");

	// Apply texture & bump:

	applyTextureWindow(rsw_room_2.wndw,wndw_r_txr,wndw_r_bump,wndw_r_txr_rev,
		wndw_r_bump_rev,0.1,0xd1cbcb);

	rsw_room_2.position.set(13.41,2.6,-5.5);
	rsw_room_2.rotation.y = Math.PI;
	rsw_room_2.rotation.x = Math.PI;
	rsw_room_2.scale.set(1.5,1.5,1.5);

	return rsw_room_2;

}

// function for generate Lounge Window Left:

function mkLoungeWindowLeft(){

	var lsw_lounge_room = mkWindow(0.6,2.13,0.1);

      // Apply texture & bump:

      var wndw_l_txr_l = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
      var wndw_l_bump_l = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_trasp.png");      
      var wndw_l_txr_l_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_rev_trasp.png");
      var wndw_l_bump_l_rev = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_rev_trasp.png");

      applyTextureWindow(lsw_lounge_room.wndw,wndw_l_txr_l,wndw_l_bump_l,wndw_l_txr_l_rev,
      	wndw_l_bump_l_rev,0.1,0xd1cbcb);

      lsw_lounge_room.position.set(7.56,2.07,-5.4);
      lsw_lounge_room.scale.set(1.5,1.5,1.5);

      return lsw_lounge_room;

}

// function for generate Room 1 Window Right Side:

function mkLoungeWindowRight(){

	var rsw_lounge_room = mkWindow(0.6,2.13,0.1);

	var wndw_r_txr_l = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
	var wndw_r_bump_l = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_sx_trasp.png");      
	var wndw_r_txr_l_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_dx_trasp.png");
	var wndw_r_bump_l_rev = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_dx_trasp.png");

	applyTextureWindow(rsw_lounge_room.wndw,wndw_r_txr_l,wndw_r_bump_l,wndw_r_txr_l_rev,
		wndw_r_bump_l_rev,0.1,0xd1cbcb);

	rsw_lounge_room.position.set(9.065,2.07,-5.4);
	rsw_lounge_room.rotation.z = Math.PI;
	rsw_lounge_room.scale.set(1.5,1.5,1.5);

	return rsw_lounge_room;

}

// function for generate Bathe Window:

function mkBatheWindow(){

	// Window Batheroom:

	var bathe_window = mkWindow(0.6,1.38,0.1);

      // Apply texture & bump:
      
      var wndw_txr_bathe = THREE.ImageUtils.loadTexture("assets/textures/general/anta_bathe.jpg");
      var wndw_bump_bathe = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_bathe.jpg");      
      var wndw_txr_bathe_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_bathe_rev.jpg");
      var wndw_bump_bathe_rev = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_bathe_rev.jpg");

      applyTexture(bathe_window.wndw,wndw_txr_bathe,wndw_bump_bathe,wndw_txr_bathe_rev,
      	wndw_bump_bathe_rev,0.1,0xd1cbcb);

      bathe_window.position.set(18.6,2.625,8.35);
      //bathe_window.rotation.x = Math.PI/2;
      bathe_window.rotation.y = -Math.PI;
      bathe_window.scale.set(1.5,1.5,1.5);

      return bathe_window;

}

// function for generate Kitchen Window Left:

function mkKitchenWindowLeft(){

	var lsw_kitchen = mkWindow(0.7,1.36,0.1);

      // Apply texture & bump:

      var wndw_l_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
      var wndw_l_bump = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_trasp.png");      
      var wndw_l_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_rev_trasp.png");
      var wndw_l_bump_rev = THREE.ImageUtils.loadTexture
      ("assets/textures/general/bump_anta_sx_rev_trasp.png");

      applyTextureWindow(lsw_kitchen.wndw,wndw_l_txr,wndw_l_bump,wndw_l_txr_rev,
      	wndw_l_bump_rev,0.1,0xd1cbcb);

      lsw_kitchen.position.set(1.50,3.25,1.75);
      lsw_kitchen.rotation.x = Math.PI/2;

      return lsw_kitchen;

}

// function for generate Kitchen Window Right Side:

function mkKitchenWindowRight(){

	var rsw_kitchen = mkWindow(0.7,1.36,0.1);

	var wndw_r_txr = THREE.ImageUtils.loadTexture("assets/textures/general/anta_sx_trasp.png");
	var wndw_r_bump = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_sx_trasp.png");      
	var wndw_r_txr_rev = THREE.ImageUtils.loadTexture("assets/textures/general/anta_dx_trasp.png");
	var wndw_r_bump_rev = THREE.ImageUtils.loadTexture
	("assets/textures/general/bump_anta_dx_trasp.png");

	applyTextureWindow(rsw_kitchen.wndw,wndw_r_txr,wndw_r_bump,wndw_r_txr_rev,
		wndw_r_bump_rev,0.1,0xd1cbcb);

	rsw_kitchen.position.set(2.6,3.25,1.75);
	rsw_kitchen.rotation.y = -Math.PI;
	rsw_kitchen.rotation.x = -Math.PI/2;

	return rsw_kitchen;

}