const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log("Temperature Converter");
console.log("1. Convert Celsius to Fahrenheit");
console.log("2. Convert Fahrenheit to Celsius");

rl.question("Enter your choice (1 or 2): ", (choice) => {
  switch (choice) {
    case '1':
      rl.question("Enter temperature in Celsius (0°C to 100°C): ", (input) => {
        const celsius = parseFloat(input);
        if (isNaN(celsius) || celsius < 0 || celsius > 100) {
          console.log("Please enter a valid temperature within 0°C to 100°C.");
        } else {
          const fahrenheit = celsiusToFahrenheit(celsius);
          console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
        }
        rl.close();
      });
      break;

    case '2':
      rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (input) => {
        const fahrenheit = parseFloat(input);
        if (isNaN(fahrenheit) || fahrenheit < 32 || fahrenheit > 212) {
          console.log("Please enter a valid temperature within 32°F to 212°F.");
        } else {
          const celsius = fahrenheitToCelsius(fahrenheit);
          console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`);
        }
        rl.close();
      });
      break;

    default:
      console.log("Invalid choice. Please enter 1 or 2.");
      rl.close();
  }
});
