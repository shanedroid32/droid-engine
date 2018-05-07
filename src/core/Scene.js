import { List } from 'immutable';
import * as THREE from 'three';

class Scene {
  constructor(_camera, _width, _height) {
    // The Camera in the Scene
    this.camera = new THREE.OrthographicCamera(
      _width / 2,
      _width / 2,
      _height / 2,
      _height / 2,
      1,
      1000
    );

    // IS the Scene paused?
    this.isPaused = false;

    // A list of all the Entities within this scene
    this.entityList = new List();

    // A list of all the Renderers in this Scene
    this.renderers = new List();
  }
}

export default Scene;
