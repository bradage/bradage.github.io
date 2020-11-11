const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let founded = document.createElement('p');
      let pop = document.createElement('p');
      let avgRain = document.createElement('p');
      let img = document.createElement('img');

      h2.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      pop.textContent = 'Population: ' + towns[i].currentPopulation;
      avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
      img.setAttribute('src', towns[i].photo);
      img.setAttribute('alt', towns[i].name);

      town.appendChild(h2);
      town.appendChild(motto);
      town.appendChild(founded);
      town.appendChild(pop);
      town.appendChild(avgRain);
      town.appendChild(img);

      document.querySelector('div.towns').appendChild(town);
    }
  });