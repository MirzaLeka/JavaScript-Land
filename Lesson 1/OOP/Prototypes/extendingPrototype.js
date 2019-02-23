
Number.prototype.toKelvin = function() {
   return (this + 273.15); 
}

const tempCelsius = 25;

console.log(tempCelsius.toKelvin()); // output: 298.15
