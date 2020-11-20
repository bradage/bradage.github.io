//pancake banner
let today = new Date();  

if(today.getDay() == 5)
{
  document.getElementById('bannerPancakes').style.display = "block";  
} else{
  document.getElementById('bannerPancakes').style.display = "none";  
}