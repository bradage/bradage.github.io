//WebFont
WebFont.load({
  google: {
    families: [
      'Hind Guntur', 'Tillana', 'Galindo'
    ]
  }
});

//toggleMenu function
function toggleMenu() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

//Dropdown selection
function selection() {
  const s = document.querySelector('#selected');
  const sel = document.querySelector('#rentalType');
  s.style.diplay = "block";
  s, textContent = sel.value;
}