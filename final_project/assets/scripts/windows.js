function mkWindows(){

  // --- Windows: 
  
  // Window Room 1:

  // left side window:

  lsw_room_1 = mkRoom1WindowLeft();

  lsw_room_1.wndw.interact = interact_window;

  scene.add(lsw_room_1);
  // right side window:

  rsw_room_1 = mkRoom1WindowRight();

  // interation:
  rsw_room_1.wndw.interact = interact_window;
  
  scene.add(rsw_room_1);

  // Window Room 2:

  // left side window:

  lsw_room_2 = mkRoom2WindowLeft();

  lsw_room_2.wndw.interact = interact_window;

  scene.add(lsw_room_2);
  
  // right side window:

  rsw_room_2 = mkRoom2WindowRight();
  
  // interation:
  rsw_room_2.wndw.interact = interact_window;
  
  scene.add(rsw_room_2);

  // Window Lounge Room:

  // left side window:

  lsw_lounge_room = mkLoungeWindowLeft();

  lsw_lounge_room.wndw.interact = interact_window;

  scene.add(lsw_lounge_room);
  
  // right side window:

  rsw_lounge_room = mkLoungeWindowRight();

  // interation:
  rsw_lounge_room.wndw.interact = interact_window;
  
  scene.add(rsw_lounge_room);

  // Window Batheroom:

  bathe_window = mkBatheWindow();

  bathe_window.wndw.interact = interact_window;

  scene.add(bathe_window);

  // Window Kitchen:

  // left side window:

  lsw_kitchen = mkKitchenWindowLeft();

  lsw_kitchen.wndw.interact = interact_window;
  
  // right side window:

  rsw_kitchen = mkKitchenWindowRight();

  // interation:
  rsw_kitchen.wndw.interact = interact_window;
  
  kitchen_window = new THREE.Object3D();
  kitchen_window.add(lsw_kitchen);
  kitchen_window.add(rsw_kitchen);

  kitchen_window.rotation.x = - Math.PI/2;
  kitchen_window.rotation.z = - Math.PI/2;
  kitchen_window.position.set(11.85,-0.05,6.7);
  kitchen_window.scale.set(1.5,1.5,1.5);

  scene.add(kitchen_window);

}