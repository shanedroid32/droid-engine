import * as THREE from 'three';
import anime from 'animejs';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.root').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const animate = () => {
  requestAnimationFrame(animate);

  const percent = { value: 0 };
  anime({
    targets: percent,
    value: 100,
    easing: 'linear',
    round: 1,
    update: function() {
      cube.position.x = percent.value / 100;
    },
  });

  // cube.position.setX(2);

  renderer.render(scene, camera);
};

animate();
