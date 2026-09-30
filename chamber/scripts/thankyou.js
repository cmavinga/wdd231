const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

const params = new URLSearchParams(window.location.search);

const requiredFields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile Number" },
    { key: "organization", label: "Business/Organization" },
    { key: "timestamp", label: "Submitted On" }
];

const container = document.getElementById("confirmation");

requiredFields.forEach(field => {
    const value = params.get(field.key);
    if (value) {
        const p = document.createElement("p");
        p.textContent = `${field.label}: ${value}`;
        container.appendChild(p);
    }
});
