let days = [
    "Sunday"
  , "Monday"
  , "Tuesday"
  , "Wednesday"
  , "Thursday"
  , "Friday"
  , "Saturday"
  , "Sunday"
]

let months = [
    "January"
  , "February"
  , "March"
  , "April"
  , "May"
  , "June"
  , "July"
  , "August"
  , "September"
  , "October"
  , "November"
  , "December"
]

let lastMod = new Date(document.lastModified);
let day = lastMod.getDay();
let dayOfWeek = days[lastMod.getDay()];
let month = months[lastMod.getMonth()];
let year = lastMod.getFullYear();

let formattedDate = dayOfWeek + ", " + day + " " + month + " " + year;

document.getElementById('lastMod').textContent = formattedDate;