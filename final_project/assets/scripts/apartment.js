function mkApartment(){

  // Make Object for apartment:
      
  apartment = new THREE.Object3D(); // object3D.
  scene.add(apartment); // add it to scene.
  // Load .obj of lar model:

  var loader = new THREE.OBJLoader(); // make loader.
  // load model:
  loader.load('assets/models/apartment.obj', function (obj) {

    global_o = obj; // set obj as global object.

    // make material:
    var multiMaterial = [
      new THREE.MeshPhongMaterial({side: THREE.DoubleSide, shading: THREE.FlatShading}),
      new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
      ]; // was 0xd2b48c.

    // make mesh:
    mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
    
    // add mesh to object3D apartment:
    apartment.add(mesh);

  });

  // Apartment position settings:
  apartment.rotation.x = - Math.PI/2; // apartment rotation.
  apartment.position.set(0,0,11.4); // apartment position.
  apartment.scale.set(1.5,1.5,1.5); // apartment scale.
  
  /* --- Addding Balcony --- */
      
  var balcony = mkBalcony();

  // Balcony position settings:

  balcony.position.set(5.57,12,0.15); // position.
  balcony.rotation.x = Math.PI/2; // rotation x.
  balcony.rotation.y = Math.PI/2; // rotation y.

  // add balcony to apartment:
  apartment.add(balcony);
  
  // Flowers:
  flowers_1 = mkBalconyFlowers(7.1,0.42,-7.3);
  flowers_2 = mkBalconyFlowers(9.6,0.42,-7.3);

  scene.add(flowers_1);
  scene.add(flowers_2);  

  /* --- End Add Balcony --- */

  /* --- Make Separation block --- */
  
  //var s_block = mkBlock();

  //apartment.add(s_block);

  /* --- End Separation Block --- */

  /* --- Make Entrance --- */
  
  var entrance = mkEntrance();

  // Entrance position settings:

  entrance.position.set(6.3,-1.5,0.1);
  
  // add entrance to apartment:
  apartment.add(entrance);

  /* --- Make foor texture --- */
      
  // Kitchen floor:

  mkKitchenFloor();

  // Room 1 floor:

  mkRoom1Floor();

  // Room 2 floor:

  mkRoom2Floor();

  // Lounge floor:
  
  mkLoungeFloor();

  // Closet floor:

  mkClosetFloor();

  // Bathe Floor:

  mkBatheFloor();

  mkBatheShowerFloor();

  /* --- End Floor Texture --- */
  
  /* --- Make Internal Wall Texture: --- */
  
  mkInternalWallKitchen();

  /* --- End Internal Wall Texture. --- */

  // Make door mat:

  door_mat = mkDoorMat();
  
  // Door Mat position settings:
  door_mat.rotation.z = - Math.PI/2;
  door_mat.rotation.x = - Math.PI/2;
  door_mat.scale.set(1.5,1.5,1.5);
  door_mat.position.set(8.35,0.35,11.75);

  // add door mat to apartment:
  scene.add(door_mat);

}