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