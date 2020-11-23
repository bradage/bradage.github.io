const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=a9b6f510fa81d13af4c6e7785e1db32a"

//Fetch for Weather Summary

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById('current-temp').textContent = parseFloat(jsObject.main.temp).toFixed(0);
    document.getElementById('current').textContent =  jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wspeed').textContent = parseFloat(jsObject.wind.speed).toFixed(0);
    document.getElementById('hi-temp').textContent = parseFloat(jsObject.main.temp_max).toFixed(0);
    document.getElementById('low-temp').textContent = parseFloat(jsObject.main.temp_min).toFixed(0);

    //gets input of temperature and wind speed
    //display "N/A" if inputs don't meet requirements
    //formula: f = 35.74 + .06215t - 35.75s^.16 + 0.4275ts^.16  
    //f is wind chill factor in Farenheit, t is temperature in fahrenheit and 2 is wind speed in miles per hour
    //Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."

    let temp = parseFloat(jsObject.main.temp).toFixed(0);
    let wspeed = parseFloat(jsObject.wind.speed).toFixed(0);

    if (temp <= 50 && wspeed > 3.0) {
      var wchill = parseFloat(windChill(temp, wspeed)).toFixed(0);
    } else {
      wchill = "N/A";
    }

    document.getElementById('windchill').textContent =wchill;

    //windhcill function that calulcates winchill from temp and speed.
    function windChill(tempF, speed) {
      let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
      return f
    }
  });


//Weather Forecast URL
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=a9b6f510fa81d13af4c6e7785e1db32a"

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const days = jsObject['list'];
    for (let i = 0; i < days.length; i++) {
      if (days[i].dt_txt.includes("18:00:00")) {
        imagesrc = 'https://api.openweathermap.org/img/w/' + days[i].weather[0].icon + '.png';
        let forecast = document.createElement('section');
        forecast.className = 'forecastCard'
        let dow = document.createElement('div');
        dow.className = 'dayOfWeek';
        let curimg = document.createElement('div');
        curimg.className = 'currentImage';
        let curtemp = document.createElement('div');
        curtemp.className = 'currentTemp';
        let day = document.createElement('p');
        let img = document.createElement('img');
        let temp = document.createElement('p');

        day.textContent = getDayOfWeek(new Date(days[i].dt_txt));
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', days[i].weather.description);
        img.setAttribute('title', days[i].weather.main);
        temp.textContent = parseInt(days[i].main.temp) + ' ℉';

        dow.appendChild(day);
        curimg.appendChild(img);
        curtemp.appendChild(temp);
        forecast.appendChild(dow);
        forecast.appendChild(curimg);
        forecast.appendChild(curtemp);

        document.querySelector('div.forecast').appendChild(forecast);
      }
    }



  });

function getDayOfWeek(d) {
  let dayofweek = [
    "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",
  ]

  return dayofweek[d.getDay()];
}