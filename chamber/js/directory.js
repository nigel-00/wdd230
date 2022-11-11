
import myCompanies from './data.json' assert {type: 'json'};

console.log(myCompanies);

const cards = document.querySelector('.cards');

function display(comp) {
    console.table(comp);  
    const prophets = comp['companies'];
    prophets.forEach(displayCompanies);
  }

  display(myCompanies);

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1   = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = ` ${company.name }`;
    p1.textContent = `${company.address} `;
    p2.textContent = `${company.website}`;
    p3.textContent = `${company.phonenumber}`;
   
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill ble).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('class', 'comp_img');
    portrait.setAttribute('alt', `Portait of  ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }