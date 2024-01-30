window.addEventListener("load", function () {
  // remove display none
  document.body.style = "";

  document.getElementById("currentDate").textContent +=
    new Date().getFullYear();
  // Initiate the wowjs
  new WOW().init();
});
