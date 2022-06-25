// JS controller for the index page of the website

var homeElement = document.getElementById("home");
var aboutMeElement = document.getElementById("about-me");
var projectElement = document.getElementById("projects");
var workElement = document.getElementById("work-experience");

// TODO: maybe change these hoverover commands to be the icon instead of the div for more accurate displaying of the side bar nav
homeElement.onmouseover = function() {
    document.getElementById("homeTab").style.opacity = "1";
    homeElement.style.transform = "scale(1.2)";
}
homeElement.onmouseleave = function() {
    document.getElementById("homeTab").style.opacity = "0";
    homeElement.style.transform = "scale(1)";
}

aboutMeElement.onmouseover = function() {
    document.getElementById("aboutTab").style.opacity = "1";
    aboutMeElement.style.transform = "scale(1.2)";
}
aboutMeElement.onmouseleave = function() {
    document.getElementById("aboutTab").style.opacity = "0";
    aboutMeElement.style.transform = "scale(1)";
}

projectElement.onmouseover = function() {
    document.getElementById("projectTab").style.opacity = "1";
    projectElement.style.transform = "scale(1.2)";
}
projectElement.onmouseleave = function() {
    document.getElementById("projectTab").style.opacity = "0";
    projectElement.style.transform = "scale(1)";
}

workElement.onmouseover = function() {
    document.getElementById("workTab").style.opacity = "1";
    workElement.style.transform = "scale(1.2)";
}
workElement.onmouseleave = function() {
    document.getElementById("workTab").style.opacity = "0";
    workElement.style.transform = "scale(1)";
}