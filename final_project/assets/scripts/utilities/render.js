// Render function:
function render() {
  
  TWEEN.update(); // update tween.
  stats.update(); // update stats.
  trackballControls.update(); // update trackball controls.

  // first person controls
  
  if (FPenabled === true) {
      computeFPControls();
  }

  if ( movie.video.readyState === movie.video.HAVE_ENOUGH_DATA ) {
        movie.videoImageContext.drawImage( movie.video, 0, 0 );
  if ( movie.videoTexture ) 
        movie.videoTexture.needsUpdate = true;
  }

  if ( movie_monitor.video.readyState === movie_monitor.video.HAVE_ENOUGH_DATA ) {
        movie_monitor.videoImageContext.drawImage( movie_monitor.video, 0, 0 );
  if ( movie_monitor.videoTexture ) 
        movie_monitor.videoTexture.needsUpdate = true;
  }
  
  if((mirror_mesh.visible === true) && (mirror.visible === true)){
      mirror_mesh.groundMirror1.renderWithMirror( mirror.verticalMirror1 );
      mirror.verticalMirror1.renderWithMirror( mirror_mesh.groundMirror1 );
  }
  // render using requestAnimationFrame
  requestAnimationFrame(render);
  webGLRenderer.render(scene, camera);

}