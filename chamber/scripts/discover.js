import { items } from "../data/discover.mjs";

const container = document.querySelector(".cards");

items.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.id = `card${index+1}`;
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
  container.appendChild(card);
});