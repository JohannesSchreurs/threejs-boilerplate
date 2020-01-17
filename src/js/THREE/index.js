import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";
// Or use an unnamed import:
// import * as THREE from "three";
import TrackballControls from "three-trackballcontrols";
import stats from "../stats/index";
import { settings } from "../gui/index";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 300;

const renderer = new WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);

const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const cube = new Mesh(geometry, material);
scene.add(cube);

document.getElementById("threeRenderCanvas").appendChild(renderer.domElement);

const trackballControls = new TrackballControls(camera, renderer.domElement);

const animate = () => {
  stats.update();

  trackballControls.update();

  cube.rotation.x += settings.rotationSpeed;
  cube.rotation.y += settings.rotationSpeed;

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  false
);

animate();
