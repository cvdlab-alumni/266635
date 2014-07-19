function generateBathOBJ(){
	
	// Toilet & Bidet:

      var toilet = mkToilet();

      toilet.position.set(17.4,0.45,7.5);

      scene.add(toilet);
      
      var bidet = mkBidet();

      bidet.position.set(17.4,0.45,5.5);

      scene.add(bidet);

      // Sink:
      
      var sink = mkSink();

      sink.position.set(19.65,0.45,4.8);

      scene.add(sink);
      
      // Mirror:

      mirror_mesh = mkMirrorMesh();
      mirror = mkMirror();

      scene.add(mirror_mesh);
      scene.add(mirror);

      // Light:
      
      // Obj:

      var bath_light = mkBathLight();

      bath_light.position.set(17,3.3,6.5);

      // sphere to intersect:

      lamp_bath_shade = mkSphereLight(0.5,0.5,17,3.3,6.5);

      // lamp light:

      bath_lamp_light = new THREE.PointLight(0xffffff);
      bath_lamp_light.distance = 1.7;
      bath_lamp_light.intensity = 1.8;
      bath_lamp_light.castShadows = true;
      
      // add light to lamp:

      lamp_bath_shade.add(bath_lamp_light);

      // properties:
      
      lamp_bath_shade.light = bath_lamp_light;
      lamp_bath_shade.light.position.set(0,-0.1,1.5);
      
      // lamp switch:

      lamp_bath_switch = mkSwitch(15,2,3.62);
      lamp_bath_switch.rotation.y = - Math.PI/2;

      lamp_bath_switch.light = bath_lamp_light;

      // add to scene:

      scene.add(lamp_bath_switch);
      scene.add(lamp_bath_shade);
      scene.add(bath_light);

      // Shower:

      // Try:

      var shower_try = mkShowerTry();

      shower_try.position.set(18.35,0.46,2.7);

      scene.add(shower_try);

      // Head:

      var shower_head = mkShowerHead();

      shower_head.position.set(18.35,0.5,1.97);

      scene.add(shower_head);
      
}