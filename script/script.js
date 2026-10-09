// Função de selecionar tag html
function select(tag) {
  return document.querySelector(tag);
}

// Funcionalidades de menu "mobile":

const buttonMenu = select(".button-menu");
const headerMain = select(".menu-select");
const btMenu = select(".img-menu");
let menuHiddenActive = true;

buttonMenu.addEventListener("click", () => {
  headerMain.classList.toggle("menu-hidden");

  if (menuHiddenActive) {
    btMenu.setAttribute("src", "src/icon/icon-menu-black.png");
    menuHiddenActive = false;
  } else {
    btMenu.setAttribute("src", "src/icon/icon-menu-white.png");
    menuHiddenActive = true;
  }
});
