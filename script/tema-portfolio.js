// Funcionalidade de troca de tema do site:

// testSelect() "para testes"

let temaPage = localStorage.getItem("tema") || "dark";

const buttonTema = select(".mode-button");
const htmlTema = select("html");

// Icones e logos
const logoHeader = select(".logo-header");
const iconMode = select(".icon-mode");

// Evento de click para troca de tema
buttonTema.addEventListener("click", () => {
  temaPage = temaPage === "dark" ? "light" : "dark";
  localStorage.setItem("tema", temaPage);
  changeTema();
});

// Função para altera imagens e icones ao trocar de tema:
function alterSrc(tag, folder, name) {
  tag.setAttribute("src", `src/${folder}/${name}`);
}

// Função de trocar cores de tema pelo css:
function changeTemaColor() {
  if (temaPage == "light") {
    htmlTema.classList.add("tema-light");
  }
  if (temaPage == "dark") {
    htmlTema.classList.remove("tema-light");
  }
}

// Função para chamar as alterações de troca de tema:
function alterFileTema() {
  // troca de arquivos para tema dark
  if (temaPage == "dark") {
    // alterações do header
    alterSrc(iconMode, "icon", "icon-dark-mode.png");
    alterSrc(logoHeader, "img", "logo-white.png");
    alterSrc(iconBtMenu, "icon", "icon-menu-white.png");
  }
  // troca de arquivos para tema light
  else {
    // alterações do header
    alterSrc(iconMode, "icon", "icon-light-mode.png");
    alterSrc(logoHeader, "img", "logo-black.png");
    alterSrc(iconBtMenu, "icon", "icon-menu-black.png");
  }
}

function changeTema() {
  alterFileTema();
  changeTemaColor();
}

// Carregar preferencia de tema salvo
changeTema();
