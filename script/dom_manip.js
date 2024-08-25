import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let t = 0;
setInterval(() => {
  const n = 10 + Math.sin(t)*5;
  const data = d3.range(n).map((d) => ({
    x: d * 60 + 50,
    y: 250 + Math.sin(d * 0.5 + t) * 220,
  }));

  // // this is the more verbose way of explaining what's going on
  // const circles = svg.selectAll("circle").data(data);
  // const circlesEnter = circles.enter().append("circle");
  //
  // circles.merge(circlesEnter)
  // // the enter selection is used on the first iteration, and then the update selection thereafter
  //   .attr("r", 20)
  //   .attr("cx", (d) => d.x)
  //   .attr("cy", (d) => d.y);
  //
  // circles.exit().remove();

  // the join method is the tight syntax for triggering enter, update, and exit methods
  const circles = svg
    .selectAll('circle')
    .data(data)
    .join('circle') // this does what's commented above
    .attr('r', 20)
    .attr('fill', 'orange')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y);

  t = t + 0.01;

}, 1000 / 60);
