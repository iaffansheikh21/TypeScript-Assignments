
function fahrenheitToCelcius(fahrenheit: number) {
    return (fahrenheit - 32) * 5/9 ;
}

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
var fahrenheitTemp:number = 96;
var celsiusTemp:number = 32;

var celsiusTemp2:number = 40;
var fahrenheitTemp2:number = 101;



console.log(`${celsiusTemp}°C is ${celsiusToFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F is ${fahrenheitToCelcius(fahrenheitTemp)}°C`);
console.log(`${celsiusTemp2}°C is ${celsiusToFahrenheit(celsiusTemp2)}°F`)
console.log(`${fahrenheitTemp2}°F is ${fahrenheitToCelcius(fahrenheitTemp2)}°C`);

