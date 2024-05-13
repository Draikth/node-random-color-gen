import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

const hue = argv[3];
const lumos = argv[2];

const color = randomColor({
  luminosity: lumos,
  hue: hue,
});

const longLine = kuler('###############################', color);
const splitLine = kuler('#####                     #####', color);
const codeLine = kuler(`#####       ${color}       #####`, color);

console.log(longLine);
console.log(longLine);
console.log(longLine);
console.log(splitLine);
console.log(codeLine);
console.log(splitLine);
console.log(longLine);
console.log(longLine);
console.log(longLine);
