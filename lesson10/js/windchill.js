// //gets input of temperature and wind speed
// //display "N/A" if inputs don't meet requirements
// //formula: f = 35.74 + .06215t - 35.75s^.16 + 0.4275ts^.16  
// //f is wind chill factor in Farenheit, t is temperature in fahrenheit and 2 is wind speed in miles per hour
// //Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."

// let temp = parseFloat(document.getElementById('temp').innerHTML);
// let wspeed = parseFloat(document.getElementById('wspeed').innerHTML);

// if (temp >= 50 && wspeed > 3.0) {
//   var wchill = windChill(temp, wspeed);
// } else {
//   wchill = "N/A";
// }

// document.getElementById('windchill').innerHTML = parseFloat(wchill).toFixed(1);

// //windhcill function that calulcates winchill from temp and speed.
// function windChill(tempF, speed) {
//   let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
//   return f
// }