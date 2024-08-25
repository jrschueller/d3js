import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = window.innerWidth;
const height = window.innerHeight;

d3.select("body")
  .append("p")
  .text("Here is some new text.")
  .style("color", "red");

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const n = 100;

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask-1)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-2)");

const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "white" : "black");

  // const g = mask
  //   .append('g')
  //   .attr(
  //     'transform',
  //     `translate(${width / 2}, ${height / 2})`,
  //   );

  mask
    .selectAll("g")
    .data(d3.range(d3.symbols.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 130 + 90}, ${height / 2})`)
        .append("path")
        .attr("d", (d) => d3.symbol(d3.symbols[d], 10000)())
        .attr("fill", inverted ? "black" : "white")
    );

  //     .append('path')
  //     .attr('d', symbol(symbols[1], 100000))
  //     .attr('fill', inverted ? 'black' : 'white');
};

// const mask2 = svg
//     .append('mask')
//     .attr('id', 'mask-2');

// mask2
//     .append('rect')
//     .attr('width', width)
//     .attr('height', height)
//     .attr('fill', 'white');

// mask2
//     .append('g')
//     .attr('transform', `translate(${width/2},${height/2})`)
//     .append('path')
//     // .attr('cx', width / 2)
//     // .attr('cy', height / 2)
//     // .attr('r', 200)
//     .attr('d', symbol(symbols[0], 100000)())
//     .attr('fill', 'black');

svg.call(renderMask, "mask-1", false).call(renderMask, "mask-2", true);

console.log('hello world');