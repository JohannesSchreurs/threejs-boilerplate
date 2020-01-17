//The most basic setup for a Three scene.
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";
import stats from "../stats/index";
//instanced, or just create a new gui by importing from the node_modules
import gui from "../gui/index";
//Uncomment next line for your own gui
// import dat from "dat.gui"
// const gui = new dat.GUI();

const guiControls = {
  rotationSpeed: 0.01,
  cameraPosition: 5
};

gui.add(guiControls, "rotationSpeed", 0, 0.1, 0.005);
gui.add(guiControls, "cameraPosition", 0, 10, 1);

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer({
  canvas: document.getElementById("threeRenderCanvas"),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const cube = new Mesh(geometry, material);
scene.add(cube);

const animate = () => {
  stats.update();

  camera.position.z = guiControls.cameraPosition;
  cube.rotation.x += guiControls.rotationSpeed;
  cube.rotation.y += guiControls.rotationSpeed;

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
