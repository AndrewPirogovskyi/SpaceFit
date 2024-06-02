var myVar;
  
function myFunction() {
  myVar = setTimeout(showPage, 2100);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("my_content").style.display = "block";
}
function chargebattery() {
  var a;
  a = document.getElementById("loader");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
    a.innerHTML = "&#xf243;";
  }, 500);
  setTimeout(function () {
    a.innerHTML = "&#xf242;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf241;";
  }, 1500);
  setTimeout(function () {
    a.innerHTML = "&#xf240;";
  }, 2000);
}
chargebattery();
setInterval(chargebattery, 2000);