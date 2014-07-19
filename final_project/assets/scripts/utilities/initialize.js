function init(){
	
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  scene = new THREE.Scene();
  
  // create a camera, which defines where we're looking at.
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // for animation:
  projector = new THREE.Projector();
  
  // create trackball controls
  trackballControls = new THREE.TrackballControls(camera);

  // create a render and set the size
  webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);

  // first person controls
  FPenabled = false;
  controls = new THREE.Object3D();
  objects = [];
  rayMove = new THREE.Raycaster();
  rayMove.ray.direction.set(0, 1, 0);
  rayPointer = new THREE.Raycaster();

  // position and point the camera to the center of the scene
  camera.position.set(40,30,40);
  //camera.rotation.x = Math.PI/2;
  camera.lookAt(new THREE.Vector3(0, 1, 0));
  
  // add spotlights
  spotLight1 = new THREE.SpotLight(0xffffff);
  spotLight1.position.set(-30, 40, 50);
  spotLight1.intensity = 1;
  scene.add(spotLight1);

  spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.position.set(30, -40, -50);
  spotLight2.intensity = 1;
  scene.add(spotLight2);
  
  // SoundTrack:
  soundtrack = new Sound('assets/sounds/soundtrack.mp3', 0, 0.05, false);
  scene.add(soundtrack);
  soundtrack.play();

  //SkyBox
  var urls = [
              'assets/textures/box/pos-x.png',
              'assets/textures/box/neg-x.png',
              'assets/textures/box/pos-y.png',
              'assets/textures/box/neg-y.png',
              'assets/textures/box/pos-z.png',
              'assets/textures/box/neg-z.png'
            ];

  // wrap it up into the object:
  cubemap = THREE.ImageUtils.loadTextureCube(urls);

  // set the format, likely RGB:
  cubemap.format = THREE.RGBFormat;
  var materialArray = [];
    for (var i = 0; i < 6; i++)
      materialArray.push( new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( urls[i]), side: THREE.BackSide }));
  var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
  var wallpaperGeometry = new THREE.BoxGeometry(300,300,300);
  var wallpaper= new THREE.Mesh(wallpaperGeometry, skyMaterial);
  scene.add(wallpaper);

}