import { line } from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

export function vizData(selection, data) {
  // // this is the more verbose way of explaining what's going on
  // const circles = svg.selectAll('circle').data(data);
  // const circlesEnter = circles.enter().append('circle');
  //
  // circles.merge(circlesEnter)
  // // the enter selection is used on the first iteration, and then the update selection thereafter
  //   .attr('r', 20)
  //   .attr('cx', (d) => d.x)
  //   .attr('cy', (d) => d.y);
  //
  // circles.exit().remove();

  // the join method is the tight syntax for triggering enter, update, and exit methods
  selection
    .selectAll('circle')
    .data(data)
    .join('circle') // this does what's commented above
    .attr('r', (d) => d.r)
    .attr('fill', 'orange')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('stroke', 'black')
    .attr('stroke-width', 5);

  const lineGenerator = line()
    .x((d) => d.x)
    .y((d) => d.y);

  selection
    .selectAll('path')
    .data([null])
    .join('path')
    .attr('d', lineGenerator(data))
    .attr('stroke', 'black')
    .attr('fill', 'none');
    
};