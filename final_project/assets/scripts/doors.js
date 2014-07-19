function mkDoors(){
	  
  /* --- Make entry door --- */
  
  entry_door = mkEntryDoor();

  entry_door.door.interact = interact_door;

  din_don = mkDoorBell(9.25,2.02,11.5);

  scene.add(din_don);

  scene.add(entry_door);

  /* --- Make room_1 door --- */

  // Generate door:

  room_1_door = mkRoom1Door();

  // interation:
  room_1_door.door.interact = interact_door;

  scene.add(room_1_door);
  /* --- Make room_2 door --- */

  room_2_door = mkRoom2Door();

  // interation:
  room_2_door.door.interact = interact_door;

  scene.add(room_2_door);
  // --- Make closet door --- 

  closet_door = mkClosetDoor();

  // interation:
  closet_door.door.interact = interact_door;

  scene.add(closet_door);
  /* --- Make bathe door --- */

  bathe_door = mkBatheDoor();

  // interation:
  bathe_door.door.interact = interact_door;

  scene.add(bathe_door);
  // Bathe Shower Door:

  shower_door = mkShowerDoor();

  scene.add(shower_door);
  /* --- Make kitchen door --- */

  kitchen_door = mkKitchenDoor();

  // interation:
  kitchen_door.door.interact = interact_door;

  scene.add(kitchen_door);

}