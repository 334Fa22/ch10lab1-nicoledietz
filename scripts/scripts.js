/*
Student Name: Nicole Dietzenbach
Date: Sep. 19th 2022
File Name: scripts.js
*/

// Hamburger menu function //
function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}
