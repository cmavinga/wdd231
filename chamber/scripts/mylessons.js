//Date & Last Modified

const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

// For webpage footer or wherever I can find those IDs.
new Date().getFullYear() //gets me the current year.
document.lastModified //indicates when my HTML file was last modified.

//Fetching Local JSON Data ==> JSON (JavaScript Object Notation)

const url = "data/members.json"; //This is a link to a local JSON file (`members.json`) that contains info (here: company/members)
const cards = document.querySelector(".members"); //This is how I select the container where you’ll display the company cards.

//Getting & Displaying Companies

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

//Purpose: Loads the JSON file asynchronously.
fetch(url)  // retrieves the file.
response.json() // converts it into usable JavaScript objects.
//Calls 
displayCompanies(data)  // sends the data to your display function.
//Result - Automatically loads and shows companies when the page runs.

// Displaying a Function

function displayCompanies(data) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const members = document.querySelector(".members");
    members.innerHTML = "";

    selected.forEach(company => {
        const card = document.createElement("article");
        card.classList.add("member");

        card.innerHTML = `
        <img src="images/${company.image}" alt="${company.name}" width=150 height=145>
        <h3>${company.name}</h3>
        <p>${company.description}</p>
        <a href="${company.website}" target="_blank">Visit Website</a>
        `;

        members.appendChild(card);
    });
}

//I have to randomly select 3 companies from JSON and display them.
// So the data.sort(() => 0.5 - Math.random())` shuffles the list.
shuffled.slice(0, 3) // It picks the first 3 after shuffling.
 Creates //<article>` cards with image, name, description, and link.
 Shows //3 random companies each time the page loads.

// Weather API URLs

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?...";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?...";

// Purpose:** Two endpoints:
  - `weather` → current conditions.
  - `forecast` → 5-day / 3-hour forecast.

---

### 🌡️ DOM Elements for Weather
```js
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
```
- **Purpose:** Selects elements where weather info will be displayed:
  - Temperature
  - Weather icon
  - Description text

---

### 🌍 Fetching Weather Data
```js
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
apiFetch();
```
- **Purpose:** Calls both APIs.
- Converts responses into JSON.
- Sends data to display functions (`displayResults`, `displayForecast`).
- **Result:** Shows current weather + forecast.

---

### 🌞 Display Current Weather
```js
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);

    captionDesc.textContent = `${desc}`;
}
```
- **Purpose:** Updates the page with:
  - Current temperature (rounded to 1 decimal).
  - Weather icon (from OpenWeatherMap).
  - Description (e.g., “clear sky”).
- **Result:** Visitors see live weather conditions.

---

### 📅 Display Forecast
```js
function displayForecast(data) {
    const tomorrow = data.list[8];
    console.log("Tomorrow:", tomorrow.main.temp, tomorrow.weather[0].description);
}
```
- **Purpose:** Picks the forecast for ~24 hours later (`list[8]` = 8 × 3h = 24h).
- Logs tomorrow’s temperature + description in the console.
- **Result:** Developers see tomorrow’s forecast in the browser console.

---

✅ **Summary:**  
- **Footer:** Shows current year + last modified date.  
- **Companies:** Loads JSON, shuffles, displays 3 random companies.  
- **Weather:** Fetches current + forecast data, updates DOM with temperature, icon, description, and logs tomorrow’s forecast.  

---

Would you like me to **expand the forecast display** so it shows tomorrow’s weather directly on the page (instead of just in the console)? That way, users see it without opening DevTools.