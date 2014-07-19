<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">**COMPUTATIONAL GRAPHICS - FINAL PROJECT**
=======================================
Andrea D'Angelo - 266635
-----------------------


Code organization
================
* [index] (index.html): html page for start project.
* [shapes.js] (assets/scripts/shapes.js): contains functions for internal and external walls shapes.
* [living.js] (assets/scripts/living.js): contains functions for generate internal object for living room.
* [bath_room.js] (assets/scripts/bath_room.js): contains functions for generate internal object for bathroom.
* [apartment.js] (assets/scripts/apartment.js): import model .obj for apartment and set up all base components, like floors, entrnce, balcony, door mat etc. .
* [kitchen.js] (assets/scripts/kitchen.js): contains functions to create kitchen's internal objects.
* [room_1.js] (assets/scripts/room_1.js): contains functions for generate room_1 objects.
* [room_2.js] (assets/scripts/room_2.js): see room_1 XD.
* [doors.js] (assets/scripts/doors.js): function for generate all doors.
* [windows.js] (assets/scripts/windows.js): function for generate all windows.

Utilities:

* [initialize.js] (assets/scripts/utilities/initialize.js): function for initialize project, with camera,render skybox etc. .
* [render.js] (assets/scripts/utilities/render.js): function render for update tween, trackballs, pointlocker, video etc.
* [person_control.js] (assets/scripts/utilities/person_control.js): functions for manage the PointerLockControls.
* [interactions.js] (assets/scripts/utilities/interactions.js): functions for manage interactions with objects by clicking (see function: onDocumentMouseDown).
* [script_video.js] (assets/scripts/utilities/script_video.js): functions for generate video texture and sounds effect.
* [script_objects.js] (assets/scripts/utilities/script_objects.js): functions for generate objects loading .obj files and .obj /.mtl files (avaibles in models directory).
* [script_utils.js] (assets/scripts/utilities/script_utils.js): some functions for utilities like make plane with texture, applying textures etc. .
* [script_floors.js] (assets/scripts/utilities/script_floors.js): functions for generate floors shapes.
* [script_doors.js] (assets/scripts/utilities/script_doors.js): functions for generate doors.
* [script_windows.js] (assets/scripts/utilities/script_windows.js): function for generate windows.

Features and Graphic Techniques:
==================
* Textures
* Bump map and normal map
* .obj and .obj/.mtl model files import
* Tween animations
* TrackBallControl
* PointerLockControl
* Object-Picking
* Skybox
* Video texture
* Sound effects

Animations:
==================
* Doors: open/close
* Door bell: switch with sound effect (on/off)
* Windows: open/close
* Picture frame: sound effects / rotations
* Television: play video
* Monitor: play video
* Closet: surprise (there's something inside! XD)
* Mirror: show/hide mirror by Controls GUI
* Soundtrack: on/off by Controls GUI
* Lights: on/off by clicking (also by swithes)
* General lights: on/off by Controls GUI
* Home tour: by clicking on take_a_tour control in Controls GUI.