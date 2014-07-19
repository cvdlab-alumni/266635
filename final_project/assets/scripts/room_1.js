function generateRoom1OBJ(){
  
  /* --- Room 1 --- */

  // Bed 1:

  var bed_1 = mkBed1();

  scene.add(bed_1);

  // Wardrobe:

  var wardrobe_1 = mkWardRobe(0xffffff);
  wardrobe_1.position.set(5.5,0.44,-4);

  scene.add(wardrobe_1);

  // Nightstands:

  var nightstand_1 = mkNightStand(0xffffff);
  var nightstand_2 = mkNightStand(0xffffff);

  nightstand_1.position.set(1,0.85,0.35);
  nightstand_2.position.set(1,0.85,-3.7);

  scene.add(nightstand_1);
  scene.add(nightstand_2);

  // Night lamps:

  // lamp 1:

  // Obj:

  var night_lamp_1 = mkNightLamp();

  night_lamp_1.position.set(1.2,1.27,0.5);

  // sphere to intersect:

  lamp_night_shade_1 = mkSphereLight(1,0,1,1.3,0.3);
  

  // lamp light:

  night_lamp_light_1 = new THREE.PointLight(0xffffff);
  night_lamp_light_1.distance = 1.6;
  night_lamp_light_1.intensity = 1.8;
  night_lamp_light_1.castShadows = true;
  
  // add light to lamp:

  lamp_night_shade_1.add(night_lamp_light_1);

  // properties:
  
  lamp_night_shade_1.light = night_lamp_light_1;
  lamp_night_shade_1.light.position.set(-0.8,0,0.8);
  
  // add to scene:

  scene.add(lamp_night_shade_1);
  scene.add(night_lamp_1);

  // lamp 2:

  // Obj:

  var night_lamp_2 = mkNightLamp();

  night_lamp_2.position.set(1.2,1.27,-3.5);

  // sphere to intersect:

  lamp_night_shade_2 = mkSphereLight(1,0,1,1.3,-3.7);
  
  // lamp light:

  night_lamp_light_2 = new THREE.PointLight(0xffffff);
  night_lamp_light_2.distance = 1.6;
  night_lamp_light_2.intensity = 1.8;
  night_lamp_light_2.castShadows = true;
  
  // add light to lamp:

  lamp_night_shade_2.add(night_lamp_light_2);

  // properties:
  
  lamp_night_shade_2.light = night_lamp_light_2;
  lamp_night_shade_2.light.position.set(0.8,0,0.6);
  
  // add to scene:

  scene.add(lamp_night_shade_2);
  scene.add(night_lamp_2);

  // Dresser:

  var dresser_1 = mkDresser();

  dresser_1.position.set(3.5,0.46,1.4);

  scene.add(dresser_1);
}