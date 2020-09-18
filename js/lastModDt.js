  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  var lastModDate = Date(document.lastModified);
  document.getElementById('LastMod').textContent = lastModDate.toLocalDateString('en-US', options);