const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a9b6f510fa81d13af4c6e7785e1db32a"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    //document.getElementById('current-temp').textContent = parseFloat(jsObject.main.temp).toFixed(1);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    //document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    document.getElementById('humidity').textContent = jsObject.main.humidity;    
    document.getElementById('wspeed').textContent = parseFloat(jsObject.wind.speed).toFixed(1);   
    document.getElementById('hi-temp').textContent = parseFloat(jsObject.main.temp_max).toFixed(1);

    //gets input of temperature and wind speed
    //display "N/A" if inputs don't meet requirements
    //formula: f = 35.74 + .06215t - 35.75s^.16 + 0.4275ts^.16  
    //f is wind chill factor in Farenheit, t is temperature in fahrenheit and 2 is wind speed in miles per hour
    //Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."

    let temp = jsObject.main.temp;
    let wspeed = jsObject.wind.speed;

    if (temp >= 50 && wspeed > 3.0) {
      var wchill = windChill(temp, wspeed);
    } else {
      wchill = "N/A";
    }

    document.getElementById('windchill').innerHTML = parseFloat(wchill).toFixed(1);

    //windhcill function that calulcates winchill from temp and speed.
    function windChill(tempF, speed) {
      let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
      return f
    }
  });