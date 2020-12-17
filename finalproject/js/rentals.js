const requestURL = 'data/rentaldata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++){
      let tr = document.createElement('tr');
      let tddesc = document.createElement('td');
      tddesc.className = 'desc';
      let maxpers = document.createElement('td');
      let reshalf = document.createElement('td');
      let resfull = document.createElement('td');
      let wlkhalf = document.createElement('td');
      let wlkfull = document.createElement('td');

            
      tddesc.textContent = rentals[i].description;
      maxpers.textContent = rentals[i].maxPersons;
      reshalf.textContent = '$' + rentals[i].reservation.halfDay.toString();
      resfull.textContent = '$' + rentals[i].reservation.fullDay.toString();
      wlkhalf.textContent = '$' + rentals[i].walkin.halfDay.toString();
      wlkfull.textContent = '$' + rentals[i].walkin.fullDay.toString();


      tr.appendChild(tddesc);
      tr.appendChild(maxpers);
      tr.appendChild(reshalf);
      tr.appendChild(resfull);
      tr.appendChild(wlkhalf);
      tr.appendChild(wlkfull);

      document.querySelector('table.rentalSummary').appendChild(tr);
    }
  });