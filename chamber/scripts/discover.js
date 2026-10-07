import { items } from "../data/discover.mjs";

const cardsContainer = document.querySelector(".cards");

items.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.id = `card${index + 1}`;
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}">
      <figcaption>${item.name}</figcaption>
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;
  cardsContainer.appendChild(card);
})

const visitMessage = document.createElement("p");
visitMessage.classList.add("visit-message");
cardsContainer.before(visitMessage);

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (lastVisit) {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "Welcome back! You visited today.";
  } else if (days < 7) {
    visitMessage.textContent = `Welcome back! Your last visit was ${days} days ago.`;
  } else {
    visitMessage.textContent = "Welcome back! It has been more than a week.";
  }
} else {
  visitMessage.textContent = "Welcome! This is your first visit.";
}

localStorage.setItem("lastVisit", now);