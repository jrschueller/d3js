import { range } from 'https://cdn.jsdelivr.net/npm/d3@6.7.0/dist/d3.min.js';

export function makeData(n, t){
    const data = range(n).map((d) => ({
      x: d * 60 + 50,
      y: 250 + Math.sin(d * 0.5 + t) * 220,
      r: 20 + Math.sin(d * 0.5 * t * 2) * 10
    }));
    return data;
  };