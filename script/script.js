

// Função de selecionar tag html
function select(tag) {
  return document.querySelector(tag);
}

// Função de teste.
function testSelect(element) {
  element.addEventListener("click", () => {
    alert("teste ok");
  });
}

// Funcionalidades de menu "mobile":

const buttonMenu = select(".button-menu");
const headerMain = select(".menu-select");
const iconBtMenu = select(".img-menu");
let menuHiddenActive = true;

// Evento para menu mobile aparecer
buttonMenu.addEventListener("click", () => {
  headerMain.classList.toggle("menu-hidden");
  // consição para verificar se o tema dark
  if (temaPage == "dark") {
    if (menuHiddenActive) {
      iconBtMenu.setAttribute("src", "src/icon/icon-menu-black.png");
      menuHiddenActive = false;
    } else {
      iconBtMenu.setAttribute("src", "src/icon/icon-menu-white.png");
      menuHiddenActive = true;
    }
  // consição para verificar se o tema light
  } else {
    if (menuHiddenActive) {
      iconBtMenu.setAttribute("src", "src/icon/icon-menu-white.png");
      menuHiddenActive = false;

    } else {
      iconBtMenu.setAttribute("src", "src/icon/icon-menu-black.png");
      menuHiddenActive = true;

    }
  }
});
