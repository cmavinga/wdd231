const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

const url = "data/members.json";
const cards = document.querySelector("#members");

async function getCompanyData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCompanies(data);
    } catch (error) {
        console.error("Error loading company data:", error);
    }
}

getCompanyData();

function displayCompanies(data) {
    const shuffled = data.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    const members = document.querySelector(".members");
    members.innerHTML = "";

    selected.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("company-card");

        card.innerHTML = `
      <h3>${company.name}</h3>
      <p>${company.description}</p>
      <img src="images/${company.image}" alt="${company.name}" width=150 height=145>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;

        members.appendChild(card);
    });
}

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-4.3270&lon=15.2739&appid=2dab558edf248e7393d3ba97af5d9d2e&units=metric";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-4.3270&lon=15.2739&appid=2dab558edf248e7393d3ba97af5d9d2e&units=metric";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
    try {
        const currentResponse = await fetch(currentUrl);
        const currentData = await currentResponse.json();
        displayResults(currentData);

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);

    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const tomorrow = data.list[8];
    console.log("Tomorrow:", tomorrow.main.temp, tomorrow.weather[0].description);
}

apiFetch();
