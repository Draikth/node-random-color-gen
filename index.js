import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

const hue = argv[3];
const lumos = argv[2];

const color = randomColor({
  luminosity: lumos,
  hue: hue,
});

console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('#####                     #####', color));
console.log(kuler(`#####       ${color}       #####`, color));
console.log(kuler('#####                     #####', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
