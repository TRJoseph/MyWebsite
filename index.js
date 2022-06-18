// JS controller for the index page of the website

var homeElement = document.getElementById("home");
var aboutMeElement = document.getElementById("about-me");
var projectElement = document.getElementById("projects");
var workElement = document.getElementById("work-experience");

// TODO: maybe change these hoverover commands to be the icon instead of the div for more accurate displaying of the side bar nav
homeElement.onmouseover = function() {
    document.getElementById("homeTab").style.display = "";
    homeElement.style.transform = "scale(1.2)";
}
homeElement.onmouseleave = function() {
    document.getElementById("homeTab").style.display = "none";
    homeElement.style.transform = "scale(1)";
}

aboutMeElement.onmouseover = function() {
    document.getElementById("aboutTab").style.display = "";
    aboutMeElement.style.transform = "scale(1.2)";
}
aboutMeElement.onmouseleave = function() {
    document.getElementById("aboutTab").style.display = "none";
    aboutMeElement.style.transform = "scale(1)";
}

projectElement.onmouseover = function() {
    document.getElementById("projectTab").style.display = "";
    projectElement.style.transform = "scale(1.2)";
}
projectElement.onmouseleave = function() {
    document.getElementById("projectTab").style.display = "none";
    projectElement.style.transform = "scale(1)";
}

workElement.onmouseover = function() {
    document.getElementById("workTab").style.display = "";
    workElement.style.transform = "scale(1.2)";
}
workElement.onmouseleave = function() {
    document.getElementById("workTab").style.display = "none";
    workElement.style.transform = "scale(1)";
}