// function for make tv video.

function mkVideo(){

	// create the video element

      var video, videoImage, videoImageContext, videoTexture;
      var onPlay = false;

      video = document.createElement( 'video' );
      
      video.src = "assets/movies/got.mp4";
      video.load(); // must call after setting/changing source
      //video.play();
      
      videoImage = document.createElement( 'canvas' );
      videoImage.width = 640;
      videoImage.height = 380;

      videoImageContext = videoImage.getContext( '2d' );
      // background color if no video present
      videoImageContext.fillStyle = '#000000';
      videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

      videoTexture = new THREE.Texture( videoImage );
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      
      var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, 
                                          side:THREE.DoubleSide } );
      
      var movieGeometry = new THREE.PlaneGeometry( 213, 115, 4, 4 );
      var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
      
      movieScreen.scale.set(0.0075,0.0075,0.0075);
      movieScreen.position.set(6.289,1.54,-3.75);
      movieScreen.rotation.y =  Math.PI/2;
      //movieScreen.position.set(6.4,1.6,-3.7);

      movieScreen.onPlay = onPlay;
      movieScreen.video = video;
      movieScreen.videoImageContext = videoImageContext;
      movieScreen.videoTexture = videoTexture;

      return movieScreen;

}

// function for make monitor video.

function mkVideoMonitor(){

	// create the video element

      var video, videoImage, videoImageContext, videoTexture;
      var onPlay = false;

      video = document.createElement( 'video' );
      
      video.src = "assets/movies/computer.webm";
      video.load(); // must call after setting/changing source
      //video.play();
      
      videoImage = document.createElement( 'canvas' );
      videoImage.width = 1280;
      videoImage.height = 800;

      videoImageContext = videoImage.getContext( '2d' );
      // background color if no video present
      videoImageContext.fillStyle = '#000000';
      videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

      videoTexture = new THREE.Texture( videoImage );
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      
      var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, 
                                          side:THREE.DoubleSide } );
      
      var movieGeometry = new THREE.PlaneGeometry( 130, 97, 4, 4 );
      var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
      
      movieScreen.scale.set(0.004,0.004,0.004);
      movieScreen.position.set(6.24,1.76,3.185);
      movieScreen.rotation.y =  Math.PI/2;
      //movieScreen.position.set(6.4,1.6,-3.7);

      movieScreen.onPlay = onPlay;
      movieScreen.video = video;
      movieScreen.videoImageContext = videoImageContext;
      movieScreen.videoTexture = videoTexture;

      return movieScreen;

}

// ***** Audio *****
soundsToUpdate = []

Sound = function(src) {
      var audio = document.createElement('audio');
      var source = document.createElement('source');
      source.src = src;
      audio.appendChild(source);

      this.play = function() {
            audio.play();
      }
      this.pause = function() {
            audio.pause();
      }
      this.stop = function() {
            audio.pause();
            audio.currentTime = 0;
      }
}