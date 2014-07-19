function generateRoom2OBJ(){
  
  /* --- Room 2 --- */

  // Bed 2:

  var bed_2 = mkBed2();

  scene.add(bed_2);

  // Wardrobe 2:

  var wardrobe_2 = mkWardRobe(0xffffff);
  wardrobe_2.position.set(11.2,0.44,-4);
  wardrobe_2.rotation.y = Math.PI/2;

  scene.add(wardrobe_2);

  // Nightstands:

  var nightstand_3 = mkNightStand(0xffffff);
  var nightstand_4 = mkNightStand(0xffffff);

  nightstand_3.rotation.y = - Math.PI/2;
  nightstand_3.position.set(16,0.85,0.35);
  nightstand_4.rotation.y = - Math.PI/2;
  nightstand_4.position.set(16,0.85,-3.7);

  scene.add(nightstand_3);
  scene.add(nightstand_4);

  // Night lamps:
  
  // lamp 1:

  // Obj:

  var night_lamp_3 = mkNightLamp();

  night_lamp_3.position.set(16.2,1.27,0.5);

  // sphere to intersect:

  lamp_night_shade_3 = mkSphereLight(1,0,16.2,1.27,0.5);
  lamp_night_shade_3.rotation.y = - Math.PI/2;

  // lamp light:

  night_lamp_light_3 = new THREE.PointLight(0xffffff);
  night_lamp_light_3.distance = 1.6;
  night_lamp_light_3.intensity = 1.8;
  night_lamp_light_3.castShadows = true;
  
  // add light to lamp:

  lamp_night_shade_3.add(night_lamp_light_3);

  // properties:
  
  lamp_night_shade_3.light = night_lamp_light_3;
  lamp_night_shade_3.light.position.set(-1,0,1.2);
  
  // add to scene:

  scene.add(lamp_night_shade_3);
  scene.add(night_lamp_3);

  // lamp 2:

  // Obj:

  var night_lamp_4 = mkNightLamp();

  night_lamp_4.position.set(16.2,1.27,-3.5);

  // sphere to intersect:

  lamp_night_shade_4 = mkSphereLight(1,0,16.2,1.27,-3.7);
  lamp_night_shade_4.rotation.y = - Math.PI/2;

  // lamp light:

  night_lamp_light_4 = new THREE.PointLight(0xffffff);
  night_lamp_light_4.distance = 1.6;
  night_lamp_light_4.intensity = 1.8;
  night_lamp_light_4.castShadows = true;
  
  // add light to lamp:

  lamp_night_shade_4.add(night_lamp_light_4);

  // properties:
  
  lamp_night_shade_4.light = night_lamp_light_4;
  lamp_night_shade_4.light.position.set(-0.4,0,0.6);
  
  // add to scene:

  scene.add(lamp_night_shade_4);
  scene.add(night_lamp_4);

  /*
  var nigth_lamp_3 = mkNightLamp();
  var nigth_lamp_4 = mkNightLamp();

  nigth_lamp_3.position.set(16.2,1.27,0.5);
  nigth_lamp_4.position.set(16.2,1.27,-3.5);

  scene.add(nigth_lamp_3);
  scene.add(nigth_lamp_4);

  // Night lamps light:

  var nigth_lamp_3_light = new THREE.PointLight(0xffffff);
  nigth_lamp_3_light.position.set(15.9,1.8,0.5);
  nigth_lamp_3_light.distance = 1.7;
  nigth_lamp_3_light.intensity = 1;
  nigth_lamp_3_light.castShadows = true;
  scene.add(nigth_lamp_3_light);

  var nigth_lamp_4_light = new THREE.PointLight(0xffffff);
  nigth_lamp_4_light.position.set(15.9,1.8,-3.75);
  nigth_lamp_4_light.distance = 1.7;
  nigth_lamp_4_light.intensity = 1;
  nigth_lamp_4_light.castShadows = true;
  scene.add(nigth_lamp_4_light);
  */
  // Dresser:

  var dresser_2 = mkDresser();

  dresser_2.position.set(13,0.46,1.4);

  scene.add(dresser_2);

}