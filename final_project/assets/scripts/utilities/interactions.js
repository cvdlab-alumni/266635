
// function for video interation:
function interact_movie () {

  if(this.onPlay === false){
    this.video.play();
    this.onPlay = true;
    }
    else {
      this.video.pause();
      this.onPlay = false;
    } 
}

// function for door interation:
function interact_door () {
  
  if(this.opened === false){
    new TWEEN.Tween(this.parent.rotation).to({y: Math.PI/2},1000).start();
    //this.cylinder.rotation.y += -Math.PI/2;
    this.opened = true;
    }
    else {
      new TWEEN.Tween(this.parent.rotation).to({y: 0},1000).start();
      this.opened = false;
    } 
}

// function for door interation:
function interact_light () {
  
  if(this.isOn === false){
    this.light.intensity = 2;
    this.isOn = true;
    }
    else {
      this.light.intensity = 0;
      this.isOn = false;
    } 
}

// function for window interation:
function interact_window () {

  if(this.opened === false){
     new TWEEN.Tween(this.parent.rotation).to({y: -Math.PI/2},1000).start();
     this.opened = true;
    }
    else {
      new TWEEN.Tween(this.parent.rotation).to({y: 0},1000).start();
      this.opened = false;
    } 
}

// function for robot interation:
function interact_robot () {

  if(this.isOn === false){
     this.sound.play();
     new TWEEN.Tween(this.position).to({x: 11.5},1000).start()
            .chain(new TWEEN.Tween(this.rotation).to({y: 1.5*Math.PI},2000));
     this.isOn = true;
    }
    else {
      new TWEEN.Tween(this.position).to({x: 15.5},1000).start();
      this.sound.pause();
      this.isOn = false;
    } 
}

// function for door_bell interation:
function interact_din_don () {

  if(this.onPlay === false){
     this.sound.play();
     this.onPlay = true;
    }
    else {
      this.sound.play();
      this.isOn = false;
    } 
}

// function for pics audio interaction:
function interact_audio_pics () {

  if(this.onPlay === false){
    this.sound.play();
    this.onPlay = true;
    }
    else {
      this.sound.pause();
      this.onPlay = false;
    } 
}

// function for pics interaction:
function interact_pics () {

  if(this.rotated === false){
    new TWEEN.Tween(this.rotation).to({x: 0},1000).start();
     this.rotated = true;
    }
    else {
      new TWEEN.Tween(this.rotation).to({x: Math.PI/12},1000).start();
      this.rotated = false;
    } 
}

// Mouse gesture:
function onDocumentMouseDown (event) {
  
  event.preventDefault();

  if (document.pointerLockElement === element || document.mozPointerLockElement === element 
      || document.webkitPointerLockElement === element) {
          var vector = new THREE.Vector3(0, 0, 0.5);
          projector.unprojectVector(vector, camera);
          var raycaster = new THREE.Raycaster(vector,
                              controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
  } else {
          var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, 
                                        -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
          projector.unprojectVector(vector, camera);
          var raycaster = new THREE.Raycaster(camera.position,vector.sub(camera.position).normalize());

  }

  var intersects = raycaster.intersectObjects(toInteract);

  if (intersects.length > 0) {
    intersects[ 0 ].object.interact();
  }

}