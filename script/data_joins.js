import { select } from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { vizData } from "./vizData.js";
import { makeData } from "./makeData.js";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let t = 0;
setInterval(() => {
  const n = 10 + Math.sin(t) * 5;
  const data = makeData(n, t);
  //vizData(svg, data);
  svg.call(vizData, data); // this is a d3 specific method that is
                           // equivalent to the above

  t = t + 0.01;

}, 1000 / 60);
