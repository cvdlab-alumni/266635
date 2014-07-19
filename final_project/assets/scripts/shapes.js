/* --- External Walls --- */
function mkExternalShape(){
      
      external_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(11.27, 0);
      shape.lineTo(11.27, 4.95);
      shape.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 1.95;
      hz = 0.44;
      offX = 1.35;
      offZ = 3.15;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape.holes.push(hole);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/stone_wall.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/stone_wall_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(5.69,0,11.41);
      
      external_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(9.5, 0);
      shape_1.lineTo(9.5, 4.95);
      shape_1.lineTo(0, 4.95);

      shape_1_geo = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});
      shape_1_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_1 = new THREE.Mesh(shape_1_geo, shape_1_mat);
      wallpaper_1.position.set(5.69,0,1.95);
      wallpaper_1.rotation.y = - Math.PI/2;

      external_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(5.7, 0);
      shape_2.lineTo(5.7, 4.95);
      shape_2.lineTo(0, 4.95);

      shape_2_geo = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_2_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_2 = new THREE.Mesh(shape_2_geo, shape_2_mat);
      wallpaper_2.position.set(-0.01,0,1.952);

      external_shape.add(wallpaper_2);

      shape_3 = new THREE.Shape();
      shape_3.moveTo(0, 0);
      shape_3.lineTo(7.65, 0);
      shape_3.lineTo(7.65, 4.95);
      shape_3.lineTo(0, 4.95);

      shape_3_geo = new THREE.ExtrudeGeometry(shape_3, {amount: 0, bevelEnabled: false});
      shape_3_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_3 = new THREE.Mesh(shape_3_geo, shape_3_mat);
      wallpaper_3.position.set(-0.01,0,-5.7);
      wallpaper_3.rotation.y = - Math.PI/2;

      external_shape.add(wallpaper_3);

      shape_4 = new THREE.Shape();
      shape_4.moveTo(0, 0);
      shape_4.lineTo(16.98, 0);
      shape_4.lineTo(16.98, 4.95);
      shape_4.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 3.4;
      hz_1 = 1.6;
      offX_1 = 1.75;
      offZ_1 = 2;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_4.holes.push(hole_1);

      hole_2 = new THREE.Path();
      hx_2 = 7.75;
      hz_2 = 0.44;
      offX_2 = 1.73;
      offZ_2 = 3.2;
      hole_2.moveTo(hx_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2 + offZ_2);
      hole_2.lineTo(hx_2, hz_2 + offZ_2);
      shape_4.holes.push(hole_2);

      hole_3 = new THREE.Path();
      hx_3 = 13;
      hz_3 = 1.6;
      offX_3 = 1.75;
      offZ_3 = 2;
      hole_3.moveTo(hx_3, hz_3);
      hole_3.lineTo(hx_3 + offX_3, hz_3);
      hole_3.lineTo(hx_3 + offX_3, hz_3 + offZ_3);
      hole_3.lineTo(hx_3, hz_3 + offZ_3);
      shape_4.holes.push(hole_3);

      shape_4_geo = new THREE.ExtrudeGeometry(shape_4, {amount: 0, bevelEnabled: false});
      shape_4_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_4 = new THREE.Mesh(shape_4_geo, shape_4_mat);
      wallpaper_4.position.set(16.96,0,-5.71);
      wallpaper_4.rotation.y = - Math.PI;

      external_shape.add(wallpaper_4);

      shape_5 = new THREE.Shape();
      shape_5.moveTo(0, 0);
      shape_5.lineTo(7.65, 0);
      shape_5.lineTo(7.65, 4.95);
      shape_5.lineTo(0, 4.95);

      shape_5_geo = new THREE.ExtrudeGeometry(shape_5, {amount: 0, bevelEnabled: false});
      shape_5_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_5 = new THREE.Mesh(shape_5_geo, shape_5_mat);
      wallpaper_5.position.set(16.97,0,-5.7);
      wallpaper_5.rotation.y = - Math.PI/2;

      external_shape.add(wallpaper_5);

      shape_6 = new THREE.Shape();
      shape_6.moveTo(0, 0);
      shape_6.lineTo(3.17, 0);
      shape_6.lineTo(3.17, 4.95);
      shape_6.lineTo(0, 4.95);

      shape_6_geo = new THREE.ExtrudeGeometry(shape_6, {amount: 0, bevelEnabled: false});
      shape_6_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_6 = new THREE.Mesh(shape_6_geo, shape_6_mat);
      wallpaper_6.position.set(16.95,0,1.795);

      external_shape.add(wallpaper_6);

      shape_7 = new THREE.Shape();
      shape_7.moveTo(0, 0);
      shape_7.lineTo(6.75, 0);
      shape_7.lineTo(6.75, 4.95);
      shape_7.lineTo(0, 4.95);

      shape_7_geo = new THREE.ExtrudeGeometry(shape_7, {amount: 0, bevelEnabled: false});
      shape_7_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_7 = new THREE.Mesh(shape_7_geo, shape_7_mat);
      wallpaper_7.position.set(20.11,0,1.795);
      wallpaper_7.rotation.y = - Math.PI/2;

      external_shape.add(wallpaper_7);
      
      shape_8 = new THREE.Shape();
      shape_8.moveTo(0, 0);
      shape_8.lineTo(3.21, 0);
      shape_8.lineTo(3.21, 4.95);
      shape_8.lineTo(0, 4.95);

      hole_4 = new THREE.Path();
      hx_4 = 0.95;
      hz_4 = 1.57;
      offX_4 = 0.9;
      offZ_4 = 2.11;
      hole_4.moveTo(hx_4, hz_4);
      hole_4.lineTo(hx_4 + offX_4, hz_4);
      hole_4.lineTo(hx_4 + offX_4, hz_4 + offZ_4);
      hole_4.lineTo(hx_4, hz_4 + offZ_4);
      shape_8.holes.push(hole_4);

      shape_8_geo = new THREE.ExtrudeGeometry(shape_8, {amount: 0, bevelEnabled: false});
      shape_8_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_8 = new THREE.Mesh(shape_8_geo, shape_8_mat);
      wallpaper_8.position.set(16.9,0,8.553);

      external_shape.add(wallpaper_8);
      
      shape_9 = new THREE.Shape();
      shape_9.moveTo(0, 0);
      shape_9.lineTo(2.88, 0);
      shape_9.lineTo(2.88, 4.95);
      shape_9.lineTo(0, 4.95);

      hole_5 = new THREE.Path();
      hx_5 = 0.2;
      hz_5 = 1.57;
      offX_5 = 2.05;
      offZ_5 = 2.05;
      hole_5.moveTo(hx_5, hz_5);
      hole_5.lineTo(hx_5 + offX_5, hz_5);
      hole_5.lineTo(hx_5 + offX_5, hz_5 + offZ_5);
      hole_5.lineTo(hx_5, hz_5 + offZ_5);
      shape_9.holes.push(hole_5);

      shape_9_geo = new THREE.ExtrudeGeometry(shape_9, {amount: 0, bevelEnabled: false});
      shape_9_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_9 = new THREE.Mesh(shape_9_geo, shape_9_mat);
      wallpaper_9.position.set(16.97,0,8.54);
      wallpaper_9.rotation.y = - Math.PI/2;

      external_shape.add(wallpaper_9);

      shape_10 = new THREE.Shape();
      shape_10.moveTo(0, 0);
      shape_10.lineTo(3.7, 0);
      shape_10.lineTo(3.7, 1.95);
      shape_10.lineTo(0, 1.95);

      texture_1 = THREE.ImageUtils.loadTexture("assets/textures/general/balcony_floor.jpg");
      bump_1 = THREE.ImageUtils.loadTexture("assets/textures/general/balcony_floor_bump.jpg");
      texture_1.wrapS = texture_1.wrapT = THREE.RepeatWrapping;
      bump_1.wrapS = bump_1.wrapT = THREE.RepeatWrapping;
      shape_10_geo = new THREE.ExtrudeGeometry(shape_10, {amount: 0, bevelEnabled: false});
      shape_10_mat = new THREE.MeshPhongMaterial({map: texture_1,bumpmap:bump_1,bumpScale:0.3});

      wallpaper_10 = new THREE.Mesh(shape_10_geo, shape_10_mat);
      wallpaper_10.position.set(6.5,0.453,-5.5);
      wallpaper_10.rotation.x = - Math.PI/2;

      external_shape.add(wallpaper_10);

      scene.add(external_shape);

}

function mkLivingShape(){

      living_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(16.3, 0);
      shape.lineTo(16.3, 4.95);
      shape.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 3.15;
      hz = 0.44;
      offX = 1.2;
      offZ = 3.16;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape.holes.push(hole);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/living_3.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/living_3_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(5.851,0,-5.4);
      wallpaper.rotation.y = - Math.PI/2;

      living_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(5, 0);
      shape_1.lineTo(5, 4.95);
      shape_1.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 1.56;
      hz_1 = 0.44;
      offX_1 = 1.8;
      offZ_1 = 3.24;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_1.holes.push(hole_1);

      shape_geo_1 = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});
      shape_mat_1 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_1 = new THREE.Mesh(shape_geo_1, shape_mat_1);
      wallpaper_1.position.set(5.851,0,-5.248);

      living_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(7.2, 0);
      shape_2.lineTo(7.2, 4.95);
      shape_2.lineTo(0, 4.95);

      hole_2 = new THREE.Path();
      hx_2 = 3;
      hz_2 = 0.44;
      offX_2 = 1.2;
      offZ_2 = 3.16;
      hole_2.moveTo(hx_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2 + offZ_2);
      hole_2.lineTo(hx_2, hz_2 + offZ_2);
      shape_2.holes.push(hole_2);

      shape_geo_2 = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_mat_2 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_2 = new THREE.Mesh(shape_geo_2, shape_mat_2);
      wallpaper_2.position.set(10.79,0,-5.248);
      wallpaper_2.rotation.y = - Math.PI/2;

      living_shape.add(wallpaper_2);

      shape_3 = new THREE.Shape();
      shape_3.moveTo(0, 0);
      shape_3.lineTo(3.7, 0);
      shape_3.lineTo(3.7, 4.95);
      shape_3.lineTo(0, 4.95);

      shape_geo_3 = new THREE.ExtrudeGeometry(shape_3, {amount: 0, bevelEnabled: false});
      shape_mat_3 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_3 = new THREE.Mesh(shape_geo_3, shape_mat_3);
      wallpaper_3.position.set(10.79,0,1.952);

      living_shape.add(wallpaper_3);

      shape_4 = new THREE.Shape();
      shape_4.moveTo(0, 0);
      shape_4.lineTo(3.1, 0);
      shape_4.lineTo(3.1, 4.95);
      shape_4.lineTo(0, 4.95);
      
      hole_3 = new THREE.Path();
      hx_3 = 0.1;
      hz_3 = 0.44;
      offX_3 = 1.2;
      offZ_3 = 3.16;
      hole_3.moveTo(hx_3, hz_3);
      hole_3.lineTo(hx_3 + offX_3, hz_3);
      hole_3.lineTo(hx_3 + offX_3, hz_3 + offZ_3);
      hole_3.lineTo(hx_3, hz_3 + offZ_3);
      shape_4.holes.push(hole_3);
      
      hole_4 = new THREE.Path();
      hx_4 = 1.75;
      hz_4 = 0.44;
      offX_4 = 1.2;
      offZ_4 = 3.16;
      hole_4.moveTo(hx_4, hz_4);
      hole_4.lineTo(hx_4 + offX_4, hz_4);
      hole_4.lineTo(hx_4 + offX_4, hz_4 + offZ_4);
      hole_4.lineTo(hx_4, hz_4 + offZ_4);
      shape_4.holes.push(hole_4);

      shape_geo_4 = new THREE.ExtrudeGeometry(shape_4, {amount: 0, bevelEnabled: false});
      shape_mat_4 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_4 = new THREE.Mesh(shape_geo_4, shape_mat_4);
      wallpaper_4.position.set(14.39,0,1.99);
      wallpaper_4.rotation.y = - Math.PI/2;

      living_shape.add(wallpaper_4);

      shape_5 = new THREE.Shape();
      shape_5.moveTo(0, 0);
      shape_5.lineTo(3.7, 0);
      shape_5.lineTo(3.7, 4.95);
      shape_5.lineTo(0, 4.95);

      shape_geo_5 = new THREE.ExtrudeGeometry(shape_5, {amount: 0, bevelEnabled: false});
      shape_mat_5 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_5 = new THREE.Mesh(shape_geo_5, shape_mat_5);
      wallpaper_5.position.set(10.79,0,5.09);

      living_shape.add(wallpaper_5);

      shape_6 = new THREE.Shape();
      shape_6.moveTo(0, 0);
      shape_6.lineTo(6, 0);
      shape_6.lineTo(6, 4.95);
      shape_6.lineTo(0, 4.95);

      hole_5 = new THREE.Path();
      hx_5 = 0.99;
      hz_5 = 0.44;
      offX_5 = 1.2;
      offZ_5 = 3.16;
      hole_5.moveTo(hx_5, hz_5);
      hole_5.lineTo(hx_5 + offX_5, hz_5);
      hole_5.lineTo(hx_5 + offX_5, hz_5 + offZ_5);
      hole_5.lineTo(hx_5, hz_5 + offZ_5);
      shape_6.holes.push(hole_5);

      shape_geo_6 = new THREE.ExtrudeGeometry(shape_6, {amount: 0, bevelEnabled: false});
      shape_mat_6 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_6 = new THREE.Mesh(shape_geo_6, shape_mat_6);
      wallpaper_6.position.set(10.79,0,5.1);
      wallpaper_6.rotation.y = - Math.PI/2;

      living_shape.add(wallpaper_6);

      shape_7 = new THREE.Shape();
      shape_7.moveTo(0, 0);
      shape_7.lineTo(5.1, 0);
      shape_7.lineTo(5.1, 4.95);
      shape_7.lineTo(0, 4.95);

      hole_6 = new THREE.Path();
      hx_6 = 1.95;
      hz_6 = 0.44;
      offX_6 = 1.35;
      offZ_6 = 3.15;
      hole_6.moveTo(hx_6, hz_6);
      hole_6.lineTo(hx_6 + offX_6, hz_6);
      hole_6.lineTo(hx_6 + offX_6, hz_6 + offZ_6);
      hole_6.lineTo(hx_6, hz_5 + offZ_5);
      shape_7.holes.push(hole_6);

      shape_geo_7 = new THREE.ExtrudeGeometry(shape_7, {amount: 0, bevelEnabled: false});
      shape_mat_7 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_7 = new THREE.Mesh(shape_geo_7, shape_mat_7);
      wallpaper_7.position.set(5.69,0,10.94);

      living_shape.add(wallpaper_7);

      scene.add(living_shape);

}

function mkRoom1Shape(){

      room_1_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(5.7, 0);
      shape.lineTo(5.7, 4.95);
      shape.lineTo(0, 4.95);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/room_1.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/room_1_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(-0.01,0,1.79);

      room_1_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(7.1, 0);
      shape_1.lineTo(7.1, 4.95);
      shape_1.lineTo(0, 4.95);

      shape_geo_1 = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});

      shape_mat_1 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_1 = new THREE.Mesh(shape_geo_1, shape_mat_1);
      wallpaper_1.position.set(0.452,0,-5.3);
      wallpaper_1.rotation.y = - Math.PI/2;

      room_1_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(5.3, 0);
      shape_2.lineTo(5.3, 4.95);
      shape_2.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 1.75;
      hz = 1.6;
      offX = 1.75;
      offZ = 2.05;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape_2.holes.push(hole);

      shape_geo_2 = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_mat_2 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_2 = new THREE.Mesh(shape_geo_2, shape_mat_2);
      wallpaper_2.position.set(0.45,0,-5.248);

      room_1_shape.add(wallpaper_2);

      shape_3 = new THREE.Shape();
      shape_3.moveTo(0, 0);
      shape_3.lineTo(7.2, 0);
      shape_3.lineTo(7.2, 4.95);
      shape_3.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 3;
      hz_1 = 0.44;
      offX_1 = 1.2;
      offZ_1 = 3.16;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_3.holes.push(hole_1);

      shape_geo_3 = new THREE.ExtrudeGeometry(shape_3, {amount: 0, bevelEnabled: false});
      shape_mat_3 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_3 = new THREE.Mesh(shape_geo_3, shape_mat_3);
      wallpaper_3.position.set(5.69,0,-5.248);
      wallpaper_3.rotation.y = - Math.PI/2;

      room_1_shape.add(wallpaper_3);

      scene.add(room_1_shape);

}

function mkRoom2Shape(){

      room_2_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(5.7, 0);
      shape.lineTo(5.7, 4.95);
      shape.lineTo(0, 4.95);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/room_1.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/room_1_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(10.8,0,1.79);

      room_2_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(7.2, 0);
      shape_1.lineTo(7.2, 4.95);
      shape_1.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 3;
      hz = 0.44;
      offX = 1.2;
      offZ = 3.16;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape_1.holes.push(hole);

      shape_geo_1 = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});
      shape_mat_1 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_1 = new THREE.Mesh(shape_geo_1, shape_mat_1);
      wallpaper_1.position.set(10.953,0,-5.248);
      wallpaper_1.rotation.y = - Math.PI/2;

      room_2_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(5.6, 0);
      shape_2.lineTo(5.6, 4.95);
      shape_2.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 0.9;
      hz_1 = 1.6;
      offX_1 = 1.75;
      offZ_1 = 2.05;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_2.holes.push(hole_1);

      shape_geo_2 = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_mat_2 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_2 = new THREE.Mesh(shape_geo_2, shape_mat_2);
      wallpaper_2.position.set(10.9,0,-5.248);

      room_2_shape.add(wallpaper_2);

      shape_3 = new THREE.Shape();
      shape_3.moveTo(0, 0);
      shape_3.lineTo(7.1, 0);
      shape_3.lineTo(7.1, 4.95);
      shape_3.lineTo(0, 4.95);

      shape_geo_3 = new THREE.ExtrudeGeometry(shape_3, {amount: 0, bevelEnabled: false});

      shape_mat_3 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_3 = new THREE.Mesh(shape_geo_3, shape_mat_3);
      wallpaper_3.position.set(16.49,0,-5.3);
      wallpaper_3.rotation.y = - Math.PI/2;

      room_2_shape.add(wallpaper_3);

      scene.add(room_2_shape);

}

function mkKitchenShape(){

      kitchen_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(5.9, 0);
      shape.lineTo(5.9, 4.95);
      shape.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 0.99;
      hz = 0.44;
      offX = 1.2;
      offZ = 3.16;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape.holes.push(hole);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(10.952,0,5.1);
      wallpaper.rotation.y = - Math.PI/2;

      kitchen_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(5.7, 0);
      shape_1.lineTo(5.7, 4.95);
      shape_1.lineTo(0, 4.95);

      shape_geo_1 = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});
      shape_mat_1 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_1 = new THREE.Mesh(shape_geo_1, shape_mat_1);
      wallpaper_1.position.set(10.8,0,10.948);

      kitchen_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(5.7, 0);
      shape_2.lineTo(5.7, 4.95);
      shape_2.lineTo(0, 4.95);

      shape_geo_2 = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_mat_2 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_2 = new THREE.Mesh(shape_geo_2, shape_mat_2);
      wallpaper_2.position.set(10.8,0,5.252);

      kitchen_shape.add(wallpaper_2);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(5.7, 0);
      shape_2.lineTo(5.7, 4.95);
      shape_2.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 3.5;
      hz_1 = 1.6;
      offX_1 = 2;
      offZ_1 =2;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_2.holes.push(hole_1);

      shape_geo_2 = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_mat_2 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      
      wallpaper_2 = new THREE.Mesh(shape_geo_2, shape_mat_2);
      wallpaper_2.position.set(16.49,0,5.25);
      wallpaper_2.rotation.y = - Math.PI/2;

      kitchen_shape.add(wallpaper_2);

      scene.add(kitchen_shape);

}

function mkBathShape(){

      bath_shape = new THREE.Object3D();

      shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(2.45, 0);
      shape.lineTo(2.45, 4.95);
      shape.lineTo(0, 4.95);

      shape_geo = new THREE.ExtrudeGeometry(shape, {amount: 0, bevelEnabled: false});

      texture = THREE.ImageUtils.loadTexture("assets/textures/general/bath_room.jpg");
      bump = THREE.ImageUtils.loadTexture("assets/textures/general/bath_room_bump.jpg");
      shape_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
      wallpaper = new THREE.Mesh(shape_geo, shape_mat);
      wallpaper.position.set(14.5,0,5.098);
     
      bath_shape.add(wallpaper);

      shape_1 = new THREE.Shape();
      shape_1.moveTo(0, 0);
      shape_1.lineTo(3, 0);
      shape_1.lineTo(3, 4.95);
      shape_1.lineTo(0, 4.95);

      shape_geo_1 = new THREE.ExtrudeGeometry(shape_1, {amount: 0, bevelEnabled: false});
      shape_mat_1 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_1 = new THREE.Mesh(shape_geo_1, shape_mat_1);
      wallpaper_1.position.set(16.97,0,5.1);
      wallpaper_1.rotation.y = - Math.PI/2;
     
      bath_shape.add(wallpaper_1);

      shape_2 = new THREE.Shape();
      shape_2.moveTo(0, 0);
      shape_2.lineTo(3.21, 0);
      shape_2.lineTo(3.21, 4.95);
      shape_2.lineTo(0, 4.95);

      hole = new THREE.Path();
      hx = 0.95;
      hz = 1.57;
      offX = 0.9;
      offZ = 2.11;
      hole.moveTo(hx, hz);
      hole.lineTo(hx + offX, hz);
      hole.lineTo(hx + offX, hz + offZ);
      hole.lineTo(hx, hz + offZ);
      shape_2.holes.push(hole);

      shape_2_geo = new THREE.ExtrudeGeometry(shape_2, {amount: 0, bevelEnabled: false});
      shape_2_mat = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});

      wallpaper_2 = new THREE.Mesh(shape_2_geo, shape_2_mat);
      wallpaper_2.position.set(16.9,0,8.09);

      bath_shape.add(wallpaper_2);

      shape_3 = new THREE.Shape();
      shape_3.moveTo(0, 0);
      shape_3.lineTo(5, 0);
      shape_3.lineTo(5, 4.95);
      shape_3.lineTo(0, 4.95);

      shape_geo_3 = new THREE.ExtrudeGeometry(shape_3, {amount: 0, bevelEnabled: false});
      shape_mat_3 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_3 = new THREE.Mesh(shape_geo_3, shape_mat_3);
      wallpaper_3.position.set(19.64,0,3.5);
      wallpaper_3.rotation.y = - Math.PI/2;
     
      bath_shape.add(wallpaper_3);

      shape_4 = new THREE.Shape();
      shape_4.moveTo(0, 0);
      shape_4.lineTo(5.1, 0);
      shape_4.lineTo(5.1, 4.95);
      shape_4.lineTo(0, 4.95);

      hole_1 = new THREE.Path();
      hx_1 = 3;
      hz_1 = 0.44;
      offX_1 = 1.5;
      offZ_1 = 4.509;
      hole_1.moveTo(hx_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1);
      hole_1.lineTo(hx_1 + offX_1, hz_1 + offZ_1);
      hole_1.lineTo(hx_1, hz_1 + offZ_1);
      shape_4.holes.push(hole_1);

      shape_geo_4 = new THREE.ExtrudeGeometry(shape_4, {amount: 0, bevelEnabled: false});
      shape_mat_4 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_4 = new THREE.Mesh(shape_geo_4, shape_mat_4);
      wallpaper_4.position.set(14.55,0,3.61);
     
      bath_shape.add(wallpaper_4);

      shape_5 = new THREE.Shape();
      shape_5.moveTo(0, 0);
      shape_5.lineTo(1.6, 0);
      shape_5.lineTo(1.6, 4.95);
      shape_5.lineTo(0, 4.95);

      hole_2 = new THREE.Path();
      hx_2 = 0.2;
      hz_2 = 0.44;
      offX_2 = 1.2;
      offZ_2 = 3.16;
      hole_2.moveTo(hx_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2);
      hole_2.lineTo(hx_2 + offX_2, hz_2 + offZ_2);
      hole_2.lineTo(hx_2, hz_2 + offZ_2);
      shape_5.holes.push(hole_2);

      shape_geo_5 = new THREE.ExtrudeGeometry(shape_5, {amount: 0, bevelEnabled: false});
      shape_mat_5 = new THREE.MeshPhongMaterial({map: texture,bumpmap:bump,bumpScale:0.3});
      wallpaper_5 = new THREE.Mesh(shape_geo_5, shape_mat_5);
      wallpaper_5.position.set(14.56,0,3.55);
      wallpaper_5.rotation.y = - Math.PI/2;

      bath_shape.add(wallpaper_5);

      scene.add(bath_shape);

}
