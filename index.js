// first step install node package 
// npm i color
// npm i color-convert

const Color = require('color');
var convert = require('color-convert');

let c=convert.keyword.rgb('blue');
const color = Color.rgb(c)
console.log("RGB" ,color.rgb().string());
console.log("HSL", color.hsl().string());
console.log("HEX", color.hex());
console.log("cymk", color.cmyk().string());
console.log("HSV", color.hsv().string());
