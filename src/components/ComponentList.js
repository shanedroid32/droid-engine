class ComponentList {
  constructor(_entity) {
    this.entity = _entity;
    this.components = [];
    this.toAdd = [];
    this.toRemove = [];
    this.current = [];
    this.adding = [];
    this.removing = [];
  }
}

export default ComponentList;
