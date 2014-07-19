function generateKitchenOBJ(){

	// --- Kitchen:

      // Table:

      // Make table:
      
      var kitchen_table = mkTable();

      // Table position settings:
      kitchen_table.rotation.x = - Math.PI/2;
      kitchen_table.position.set(12,0.9,9);

      scene.add(kitchen_table);

      // Chairs:

      // Make Chairs:

      var kitchen_chair_1 = mkChair();
      var kitchen_chair_2 = mkChair();

      // Chairs position settings:

      kitchen_chair_1.rotation.x = - Math.PI/2;
      kitchen_chair_1.scale.set(1.6,1.6,1.6);
      kitchen_chair_1.position.set(12,0.7,10);

      kitchen_chair_2.rotation.x = - Math.PI/2;
      kitchen_chair_2.rotation.z = Math.PI/2;
      kitchen_chair_2.scale.set(1.6,1.6,1.6);
      kitchen_chair_2.position.set(12.5,0.7,9);

      // add to scene:

      scene.add(kitchen_chair_1);
      scene.add(kitchen_chair_2);

      // Fridge:

      var fridge = mkFridge();

      //fridge.rotation.y = Math.PI/2;
      fridge.position.set(5.4,0.5,4.1);

      scene.add(fridge);
     
      // Dashwasher:

      var dashWasher = mkDashWasher();

      dashWasher.position.set(15,0.81,10.35);

      scene.add(dashWasher);

      // Stove:

      var kitchen_stove = mkStove();

      kitchen_stove.position.set(15.6,0.45,6.5);
      
      scene.add(kitchen_stove);

      // Drawers:

      var kitchen_drawers = mkKDrawer();

      kitchen_drawers.position.set(18.45,0.45,6.8);
      
      scene.add(kitchen_drawers);

      // Sink:

      var kitchen_sink = mkKSink();

      kitchen_sink.position.set(13.5,0.45,7.05);
      
      scene.add(kitchen_sink);

      // Capa:
      
      var capa = mkKCappa();

      capa.position.set(16.2,2.5,5.9);

      scene.add(capa);
      
      // Light:
      
      // Obj:

      kitchen_light = mkKLight();
      kitchen_light.position.set(11,3.3,8.8);
      
      // sphere to intersect:

      lamp_kitchen_shade = mkSphereLight(0.5,0.5,10.8,3.3,8.8);

      // lamp light:

      kitchen_lamp_light = new THREE.PointLight(0xffffff);
      kitchen_lamp_light.distance = 1.8;
      kitchen_lamp_light.intensity = 2;
      kitchen_lamp_light.castShadows = true;
      
      // add light to lamp:

      lamp_kitchen_shade.add(kitchen_lamp_light);

      // properties:
      
      lamp_kitchen_shade.light = kitchen_lamp_light;
      lamp_kitchen_shade.light.position.set(0,-0.1,2.5);
      
      // lamp switch:

      lamp_kitchen_switch = mkSwitch(11,2,7.7);
  
      lamp_kitchen_switch.light = kitchen_lamp_light;

      // add to scene:

      scene.add(lamp_kitchen_switch);
      scene.add(lamp_kitchen_shade);
      scene.add(kitchen_light);

      // Cabinets:

      var kitchen_cabinet_1 = mkKCabinet();

      kitchen_cabinet_1.position.set(15.6,0.32,5.7);
      
      scene.add(kitchen_cabinet_1);

      var kitchen_cabinet_2 = mkKCabinet();

      kitchen_cabinet_2.position.set(15.6,0.32,6);
      
      scene.add(kitchen_cabinet_2);

      var kitchen_cabinet_3 = mkKCabinet();

      kitchen_cabinet_3.position.set(15.6,0.32,6.3);
      
      scene.add(kitchen_cabinet_3);
	
}