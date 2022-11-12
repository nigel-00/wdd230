
import myCompanies from './data.json' assert {type: 'json'};

console.log(myCompanies);

const cards = document.querySelector('#gridbtn');
const list = document.querySelector('#listbtn');
const show = document.querySelector('article');


function display(comp) {  
    const companies = comp['companies'];
    companies.forEach(displayCompanies);
  }

  display(myCompanies);

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1   = document.createElement('p');
    let anchor = document.createElement('a');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

          
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = ` ${company.name }`;
    p1.textContent = `${company.address} `;
    p2.textContent = `${company.phonenumber}`;


    let textNode = document.createTextNode(company.name);
    anchor.appendChild(textNode);
    anchor.href = company.website;
    anchor.classList = 'comp_link';

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill ble).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('class', 'comp_img');
    portrait.setAttribute('alt', `Portait of  ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(anchor);
    card.appendChild(p2);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    show.appendChild(card);
  }

  function showcards(){
    show.classList.add("cards");
    show.classList.remove("list");
  };
  
  cards.addEventListener("click", showcards);
  
  function showList() {
    show.classList.add("list");
    show.classList.remove("cards");
  }
  
  list.addEventListener("click", showList); 
  //add an event listener with a button for list 