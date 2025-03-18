let inches = 42;
let feet = inches / 12;
console.log(`42 inches is equal to ${feet} feet`);

let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; 

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log(`Rectangular plot of ${lengthFeet}ft x ${widthFeet}ft is ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

let singlePlotAreaFeet = lengthFeet * widthFeet;
let totalAreaFeet = singlePlotAreaFeet * 25; 
let squareFeetToAcre = 43560;

let totalAreaAcres = totalAreaFeet / squareFeetToAcre;
console.log(`Total area of 25 such plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
