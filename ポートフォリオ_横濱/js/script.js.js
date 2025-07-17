// JavaScript Document
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open");
});
