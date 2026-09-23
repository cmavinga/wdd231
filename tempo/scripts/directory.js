const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

const url = "data/members.json";
const cards = document.querySelector("#members");

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayCompanies(data);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('figure');
        card.classList.add('card');

        let header = document.createElement('header');
        let name = document.createElement('h2');
        name.textContent = company.name;

        let industry = document.createElement('p');
        industry.textContent = company.industry;
        industry.classList.add('industry');

        header.appendChild(name);
        header.appendChild(industry);

        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        let portrait = document.createElement('img');
        portrait.src = `images/${company.image}`;
        portrait.alt = `Logo of ${company.name}`;
        portrait.loading = 'lazy';

        let caption = document.createElement('figcaption');
        caption.innerHTML = `
      <p>Email: ${company.address}</p>
      <p>Phone: ${company.phone}</p>
      <p><a href="${company.website}" target="_blank">${company.website}</a></p>
    `;

        cardInfo.appendChild(portrait);
        cardInfo.appendChild(caption);

        card.appendChild(header);
        card.appendChild(cardInfo);

        cards.appendChild(card);
    });
};
