// ONLOAD
const $btnTheme = document.getElementById("id_btnTheme");
$btnTheme.addEventListener("click", changeTheme);
$btnTheme.textContent = "Theme";

const $btnReturn = document.getElementById("id_btnReturn");
$btnReturn.addEventListener("click", toReturn);
$btnReturn.textContent = "<";

if (localStorage.db_theme != null) {
  document.body.dataset.theme = localStorage.getItem('db_theme')
}


// CHANGE THEME
function changeTheme() {
  let elem = document.body.dataset;
  
  (elem.theme === "normal")
  ? elem.theme = "dark"
  : elem.theme = "normal";
  
  localStorage.db_theme = elem.theme;
}


// TO RETURN
function toReturn() {
  location.pathname = '/index.html';
}
