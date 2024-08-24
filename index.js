import { select, range, symbols, symbol } from 'd3';

const width = window.innerWidth
const height = window.innerHeight

const svg = select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

const n = 100;
svg
    .append('g')
    .selectAll('rect')
    .data(range(n))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', width)
    .attr('height', 10)
    .attr('mask', 'url(#circle-mask)');

svg
    .append('g')
    .selectAll('rect')
    .data(range(n))
    .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#circle-mask-2)')

const mask = svg
    .append('mask')
    .attr('id', 'circle-mask');

mask
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'black');

mask
    .append('g')
    .attr('transform', `translate(${width/2},${height/2})`)
    .append('path')
    // .attr('cx', width / 2)
    // .attr('cy', height / 2)
    // .attr('r', 200)
    .attr('d', symbol(symbols[0], 100000)())
    .attr('fill', 'white');

const mask2 = svg
    .append('mask')
    .attr('id', 'circle-mask-2');

mask2
    .append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
