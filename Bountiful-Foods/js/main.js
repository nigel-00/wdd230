const todayDate = new Date();
//get the specific current year from the full date
const fullYear = todayDate.getFullYear();

//concatinate the full year with the copyright sign 
document.querySelector('#fullYear').textContent = fullYear;
// get the last modified date and time
const dateTime = document.lastModified;
// create a template literal to combine the text and date and time
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;


// local storage manipulation
const visit =  document.getElementById('visit');
let lastVisit = window.localStorage.getItem("lastVisitTime");

if (lastVisit == null) {
  visit.textContent  = "This is your first visit";
} else {
  visit.textContent = `${Math.round((Date.now() - lastVisit)/ 86400000)} days since last visit`;
}

let visitTime = Date.now();

localStorage.setItem("lastVisitTime", visitTime);


