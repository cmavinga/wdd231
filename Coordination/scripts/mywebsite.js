const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;


const instituteData = [
  { name: "Bandundu District", enrolled: 182, attending: 142, potential: 820, retention: 100.0 },
  { name: "Kikwit District", enrolled: 519, attending: 377, potential: 992, retention: 100.0 },
  { name: "Mission South Mission", enrolled: 330, attending: 183, potential: 963, retention: 85.3 },
  { name: "Kinshasa Stake", enrolled: 392, attending: 212, potential: 2894, retention: 82.8 },
  { name: "Limete Stake", enrolled: 390, attending: 124, potential: null, retention: 83.6 },
  { name: "Ngaba Stake", enrolled: 403, attending: 222, potential: 963, retention: 63.9 }
];

const seminaryData = [
  { name: "Bandundu District", enrolled: 144, attending: 91, potential: 367, retention: 53.6 },
  { name: "Kikwit District", enrolled: 241, attending: 180, potential: 315, retention: 67.5 },
  { name: "Mission South Mission", enrolled: 219, attending: 126, potential: 409, retention: 30.8 },
  { name: "Kinshasa Stake", enrolled: 145, attending: 70, potential: 478, retention: 58.5 },
  { name: "Limete Stake", enrolled: 68, attending: 38, potential: null, retention: 26.9 },
  { name: "Ngaba Stake", enrolled: 144, attending: 78, potential: 150, retention: 27.1 }
];

let biggestEnrollmentInstitute = instituteData[0];
for (let i = 1; i < instituteData.length; i++) {
  if (instituteData[i].enrolled > biggestEnrollmentInstitute.enrolled) {
    biggestEnrollmentInstitute = instituteData[i];
  }
}
// console.log("Biggest Enrollment:", biggestEnrollmentInstitute);

let lowestEnrollmentInstitute = instituteData[0];
for (let i = 1; i < instituteData.length; i++) {
  if (instituteData[i].enrolled < lowestEnrollmentInstitute.enrolled) {
    lowestEnrollmentInstitute = instituteData[i];
  }
}
// console.log("lowest Enrollment:", lowestEnrollmentInstitute);

let highestRetentionInstitute = instituteData[0];
for (let i = 1; i < instituteData.length; i++) {
  if (instituteData[i].retention > highestRetentionInstitute.retention) {
    highestRetentionInstitute = instituteData[i];
  }
}
// console.log("Highest Retention:", highestRetentionInstitute);

let lowestRetentionInstitute = instituteData[0];
for (let i = 1; i < instituteData.length; i++) {
  if (instituteData[i].retention < lowestRetentionInstitute.retention) {
    lowestRetentionInstitute = instituteData[i];
  }
}
// console.log("Lowest Retention:", lowestRetentionInstitute);

let biggestEnrollmentSeminary = seminaryData[0];
for (let i = 1; i < seminaryData.length; i++) {
  if (seminaryData[i].enrolled > biggestEnrollmentSeminary.enrolled) {
    biggestEnrollmentSeminary = seminaryData[i];
  }
}
// console.log("Biggest Enrollment:", biggestEnrollmentSeminary);

let lowestEnrollmentSeminary = seminaryData[0];
for (let i = 1; i < seminaryData.length; i++) {
  if (seminaryData[i].enrolled < lowestEnrollmentSeminary.enrolled) {
    lowestEnrollmentSeminary = seminaryData[i];
  }
}
// console.log("lowest Enrollment:", lowestEnrollmentSeminary);

let highestRetentionSeminary = seminaryData[0];
for (let i = 1; i < seminaryData.length; i++) {
  if (seminaryData[i].retention > highestRetentionSeminary.retention) {
    highestRetentionSeminary = seminaryData[i];
  }
}
// console.log("Highest Retention:", highestRetentionSeminary);

let lowestRetentionSeminary = seminaryData[0];
for (let i = 1; i < seminaryData.length; i++) {
  if (seminaryData[i].retention < lowestRetentionSeminary.retention) {
    lowestRetentionSeminary = seminaryData[i];
  }
}
// console.log("Lowest Retention:", lowestRetentionSeminary);

function renderTable(dataArray, divId, title) {
  const container = document.getElementById(divId);

    if (!container) {
      return;
    }
        

  let tableHTML = `
    <table>
    <thead>
    <tr>
    <th>${title}</th>
    <th>Enrolled</th>
    <th>Attending</th>
    <th>Potential</th>
    <th>Retention (%)</th>
    </tr>
    </thead>
    <tbody>
    `;

  for (let item of dataArray) {
        tableHTML += `
         <tr>
    <td>${item.name}</td>
    <td>${item.enrolled}</td>
    <td>${item.attending}</td>
    <td>${item.potential}</td>
    <td>${item.retention}</td>
    </tr>
    `;
    }

  tableHTML += `
    </tbody>
    </table>
    `;

  container.innerHTML = tableHTML;
}

renderTable(instituteData, "instituteTable", "Institute");
renderTable(seminaryData, "seminaryTable", "Seminary");

const resultsDiv = document.getElementById("results");
if (resultsDiv) {
  resultsDiv.innerHTML = `
<p><strong>Biggest Enrollment (Institute):</strong> ${biggestEnrollmentInstitute.name} with ${biggestEnrollmentInstitute.enrolled} students</p>
<p><strong>Lowest Enrollment (Institute):</strong> ${lowestEnrollmentInstitute.name} with ${lowestEnrollmentInstitute.enrolled} students</p>
<p><strong>Highest Retention (Institute):</strong> ${highestRetentionInstitute.name} with ${highestRetentionInstitute.retention} %</p>
<p><strong>Lowest Retention (Institute):</strong> ${lowestRetentionInstitute.name} with ${lowestRetentionInstitute.retention} %</p>
<p><strong>Biggest Enrollment (Seminary):</strong> ${biggestEnrollmentSeminary.name} with ${biggestEnrollmentSeminary.enrolled} students</p>
<p><strong>Lowest Enrollment (Seminary):</strong> ${lowestEnrollmentSeminary.name} with ${lowestEnrollmentSeminary.enrolled} students</p>
<p><strong>Highest Retention (Seminary):</strong> ${highestRetentionSeminary.name} with ${highestRetentionSeminary.retention} %</p>
<p><strong>Lowest Retention (Seminary):</strong> ${lowestRetentionSeminary.name} with ${lowestRetentionSeminary.retention} %</p>
`;
}

const saveButton = document.getElementById("saveButton");
const showButton = document.getElementById("showButton");

function saveInstructor() {
  const input = document.getElementById("instructorName");
  const name = input.value.trim();
  if (!name) return;

  let instructors = JSON.parse(localStorage.getItem("instructors")) || [];
  instructors.push(name);
  localStorage.setItem("instructors", JSON.stringify(instructors))
  input.value = "";
}

function showInstructors() {
  let instructors = JSON.parse(localStorage.getItem("instructors")) || [];
  const list = document.getElementById("instructorList");
  list.innerHTML = "";
  instructors.forEach(name => {
    const li = document.createElement("li")
    li.textContent = name;
    list.appendChild(li);
  });
}

if (saveButton && showButton) {
  saveButton.addEventListener("click", saveInstructor);
  showButton.addEventListener("click", showInstructors);
}
