var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("my_content").style.display = "block";
}