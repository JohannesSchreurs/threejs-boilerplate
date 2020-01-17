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

camera.position.z = 5;

const animate = () => {
  stats.begin();

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
  stats.end();
  requestAnimationFrame(animate);
};

animate();
