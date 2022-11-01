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

// image couresel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

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
const todayDays = document.querySelector(".today");
//start date for first visit
const startDate = new Date();

let currDate = new Date();
//division to find the number of days
const msInDay = 1000 * 60 * 60 * 24;

if (startDate !== 0){
  let difference = Math.round((currDate - startDate)/msInDay);

  
}
// initialize display elements
const startD = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

