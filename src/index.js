import Component from './components/Component';
import Victor from 'victor';

let comp = new Component(true, true, 1, 1);
comp.addedToScene();
comp.position = new Victor(150, 234);
console.log(comp.position.rotateDeg(45));
