const todayDate = new Date();
//get the specific current year from the full date
const fullYear = todayDate.getFullYear();
//get the date, date, month, year 

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("#fullDateUK");

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefieldUK.innerHTML = fulldateUK;

//concatinate the full year with the copyright sign 
document.querySelector('#fullYear').textContent = fullYear;
// get the last modified date and time
const dateTime = document.lastModified;
// create a template literal to combine the text and date and time
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;

//function to create a hamburger menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// create a message pop up 
//get a date 
const today = new Date();
//get the actual day ---number
const dayNumber = today.getDay();
//get the events id
const  element = document.getElementById("event-inv");
//display the event if its either monday or tuesday
if (dayNumber ==  1 || dayNumber == 2) {
    element.classList.add("showme");
  } else {
    element.classList.add("hideme");
  }


// local storage manipulation
//ger the visit id
const totalDays = document.getElementById('visit');
//get the number of visits
let numDays = Number(window.localStorage.getItem("startDays"));
let currDate = new Date();

if (numDays !== 0){

}



