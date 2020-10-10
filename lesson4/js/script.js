const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  document.getElementById('lastMod').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options);