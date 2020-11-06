//Format Date
//create array to match 0-6 to day of week spelled out
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

//create array to match 0-11 to month of year spelled out
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

//toggleMenu function
function toggleMenu() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

//WebFont
WebFont.load({
  google: {
    families: [
       'Roboto', 'Hind', 'Sawarabi'
    ]
  }
});

//Sliding Scale
function adjustScale(rating){
  document.getElementById("scaleValue").innerHTML = rating;
}

//Dropdown selection
function selection() {
  const s = document.querySelector('#selected');
  const sel = document.querySelector('#stormRegion');
  s.style.diplay = "block";
  s,textContent = sel.value;
}