const todayDate = new Date();
//get the specific current year from the full date
const fullYear = todayDate.getFullYear();
//get the date, date, month, year 

// select the elements to manipulate (output to)
const datefield = document.querySelector("#fullDate");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = fulldate;


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