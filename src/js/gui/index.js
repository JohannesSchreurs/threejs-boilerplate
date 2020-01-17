import * as dat from "dat.gui";

const gui = new dat.GUI();

export const settings = {
  rotationSpeed: 0.01,
  cameraPosition: 5
};

gui.add(settings, "rotationSpeed", 0, 0.1, 0.005);
gui.add(settings, "cameraPosition", 0, 10, 1);
