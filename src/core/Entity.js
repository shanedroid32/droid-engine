import Victor from 'victor';

import Component from './Component';

class Entity {
  constructor(_name) {
    // A unique identifier for this entity
    this.name = _name;
    // this entity's position within the scene
    this.position = new Victor(0, 0);
    // is the entity visible?
    this.isVisible = true;
    // is the entity active?
    this.isActive = true;
    // What scene is this entity in?
    this.scene = null;
    // What component does this entity have?
    this.components = [];
  }
}

export default Entity;
