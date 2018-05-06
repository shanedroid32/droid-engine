import Victor from 'victor';

/*
A Component adds functionality to an Entity that it is attached to.
*/
class Component {
  constructor(_name, _entity, _position, _scene, _isVisible = true, _isActive = true) {
    // Unique identifier for this component
    this.name = _name;
    // this entity that this component is a child of
    this.entity = _entity;
    // The scene containing this component
    this.scene = _scene;
    // is this component visible? Defaults to true
    this.isVisible = _isVisible;
    // IS this component active? Defaults to true
    this.isActive = _isActive;
    // the position of this component, relative to it's parent entity
    this.position = _position;
    // the position of this component within the scene
    this.scenePosition = this.getScenePosition();
  }

  // Attach this component to an entity unless it is already attached to another entity.
  setEntity(_entity) {
    if (this.entity !== null && _entity !== null) {
      throw new Error('This component is already attached to an entity!');
    }
    this.entity = _entity;
  }

  // Get the position of this component within the scene (position + entity.position)
  getScenePosition() {
    return new Victor(this.entity.position.x, this.entity.position.y).add(this.position);
  }

  // This is called when the component is added to an entity.
  addedToEntity() {}

  // This is called wehen the component is added to a scene
  addedToScene() {}

  // This is called when the component is removed from the entity
  removedFromEntity() {}

  // This is called when the component is removed from the scene
  removedFromScene() {}

  // This is called when the component is updated from its entity
  updateComponent() {}

  // This is called when the component is rendered from its entity
  renderComponent() {}
}

export default Component;
