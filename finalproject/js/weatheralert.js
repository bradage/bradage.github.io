//Weather Alert
document.getElementById('bannerPancakes').style.display = "block";  

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=metric&appid=a9b6f510fa81d13af4c6e7785e1db32a"

//Fetch for Weather Summary

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById('current-temp').textContent = parseFloat(jsObject.main.temp).toFixed(0);
    document.getElementById('current').textContent =  jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
  });


//Weather Forecast URL
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=metric&appid=a9b6f510fa81d13af4c6e7785e1db32a"

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