window.addEventListener("load", function () {
  document.getElementById("currentDate").textContent +=
    new Date().getFullYear();
  // Initiate the wowjs
  new WOW().init();
});
