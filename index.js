// Import required libraries
import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

// set argument index values (e.g. blue light, red dark)
const hue = argv[2];
const lumos = argv[3];

// return hex code for color defined by arguments
const color = randomColor({
  luminosity: lumos,
  hue: hue,
});

// Use kuler librabry/module to create the different lines of the block.
const longLine = kuler('###############################', color);
const splitLine = kuler('#####                     #####', color);
const codeLine = kuler(`#####       ${color}       #####`, color);

// Console log to create the full block.
console.log(longLine);
console.log(longLine);
console.log(longLine);
console.log(splitLine);
console.log(codeLine);
console.log(splitLine);
console.log(longLine);
console.log(longLine);
console.log(longLine);
