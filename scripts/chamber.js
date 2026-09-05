const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navLinks.classList.toggle('show');
});

const courses = [
  {
    courseName: "wdd 130",
    type: "wdd"
  },

  {
    courseName: "wdd 131",
    type: "wdd"
  },

  {
    courseName: "wdd 231",
    type: "wdd"
  },

  {
    courseName: "cse 110",
    type: "cse"
  },

  {
    courseName: "cse 111",
    type: "cse"
  },

  {
    courseName: "cse 210",
    type: "cse"
  },
];

function createCourseCard(filteredCourses) {
  document.querySelector(".course-list").innerHTML = "";
  filteredCourses.forEach(course => {
    let card = document.createElement("section");
    card.classList.add(course.type);

    let name = document.createElement("div");
    name.textContent = course.courseName;
    card.appendChild(name);

    document.querySelector(".course-list").appendChild(card);
  });
}

createCourseCard(courses);

const cseLink = document.querySelector("#cse")
cseLink.addEventListener("click", () => {
  let cse = courses.filter(course => {
    return course.type === "cse";
  });

  document.querySelector(".course-list").innerHTML = "";
  createCourseCard(cse);
});

const wddLink = document.querySelector("#wdd")
wddLink.addEventListener("click", () => {
  let wdd = courses.filter(course => {
    return course.type === "wdd";
  });

  document.querySelector(".course-list").innerHTML = "";
  createCourseCard(wdd);
});

const allLink = document.querySelector("#all");

allLink.addEventListener("click", () => {

  createCourseCard(courses);
});