import Stats from "stats.js";
const stats = new Stats();
stats.showPanel(1);
document.body.appendChild(stats.dom);

export default stats;
