import Victor from 'victor';
import { Set } from 'immutable';

import Entity from './core/Entity';
import Scene from './core/Scene';
import Component from './core/Component';

const testScene = new Scene();

const testEntity = new Entity('Test Entity');

testScene.entityList = Set([testEntity]);

const testComponent = new Component(
  'Test Component',
  testEntity,
  new Victor(10, 10),
  testScene,
  true,
  true
);
const anotherComponent = new Component(
  'Another Component',
  testEntity,
  new Victor(250, 250),
  testScene,
  true,
  true
);

testEntity.components = Set([testComponent, anotherComponent]);

console.log(testScene);
console.log(testScene.entityList.first());
