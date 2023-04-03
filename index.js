var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function showSkills() {
  console.warn("skills");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showProjects() {
  console.warn("skills");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("languages").style.display = "none";
}

function showLanguages() {
  console.warn("skills");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}

function showHome() {
  console.warn("skills");
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
