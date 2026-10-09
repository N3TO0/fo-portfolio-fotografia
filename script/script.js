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

buttonMenu.addEventListener("click", () => {
  headerMain.classList.toggle("menu-hidden");

  if (menuHiddenActive) {
    iconBtMenu.setAttribute("src", "src/icon/icon-menu-black.png");
    menuHiddenActive = false;
  } else {
    iconBtMenu.setAttribute("src", "src/icon/icon-menu-white.png");
    menuHiddenActive = true;
  }
});

// Funcionalidade de troca de tema do site:

let temaDark = true;
const buttonTema = select(".mode-button");

buttonTema.addEventListener("click", () => {
  if (temaDark) {
    alert("tema branco");
    temaDark = false;
  } else {
    alert("tema escuro");
    temaDark = true;
  }

  alert("teste ok");
});
