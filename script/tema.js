// Funcionalidade de troca de tema do site:

let temaPage = "dark";
const buttonTema = select(".mode-button");
const htmlTema = select("html");

// Evento de click para troca de tema
buttonTema.addEventListener("click", () => {
  if (temaPage === "dark") {
    temaPage = "light";
  } else {
    temaPage = "dark";
  }
  changeTema();
});

// Função de troca de tema
function changeTema() {
  if (temaPage == "light") {
    htmlTema.classList.add("tema-light");
  }
  if (temaPage == "dark") {
    htmlTema.classList.remove("tema-light");
  }
}

// Carregar preferencia de tema salvo
changeTema();
