function openmenu() {
  document.getElementById("mobilemenu").style.display = "flex";
}
function closemenu() {
  document.getElementById("mobilemenu").style.display = "none";
}
function togglemenu(){
    document.getElementById("mobilemenu").classList.toggle("animate__slideOutRight");
    document.getElementById("mobilemenu").classList.toggle("animate__slideInRight");
}