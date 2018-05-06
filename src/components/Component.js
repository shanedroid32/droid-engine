import math from 'mathjs';
import Victor from 'victor';

// A component can be added to an entity to provided additional functionality.
class Component {
  constructor(_isActive, _isVisible, _entity, _scene) {
    this.entity = _entity;
    this.scene = _scene;
    this.isActive = _isActive;
    this.isVisible = _isVisible;
    this.position = new Victor(0, 0);
  }

  getScenePosition() {
    const scene = this.scene;
    return scene.position;
  }

  // Called when this component is added to an entity
  addToEntity() {}

  // Called when this component is added to a scene
  addedToScene() {
    console.log('Added to the scene.');
  }

  // Called whenever this component is removed from it's parent entity.
  removedFromEntity() {}

  // Called whenever this component is removed from it's parent scene.
  removedFromScene() {}

  // Called whenever this component's aprent entity updates it.
  updateComponent() {}

  // Called whenever this component's parent entity renders it.
  renderComponent() {}
}

export default Component;
