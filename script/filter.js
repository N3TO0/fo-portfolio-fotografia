function select(tag) {
  return document.querySelector(tag);
}

const buttonFilterPersonal = select(".bt-personal");
const buttonFilterGastronomy = select(".bt-gastronomy");
const buttonFilterEvent = select(".bt-event");
const buttonFilterAll = document.querySelectorAll(".button-filter-child");
const dataFilter = "";

const sectionPortifolioAll = document.querySelectorAll(".portfolio-page");

// Função para alterar estilo do botão selecionado
function selectButtonFilter(btFilter) {
  buttonFilterAll.forEach((btChild) => {
    btChild.classList.remove("bt-select");
  });
  btFilter.classList.add("bt-select");
}

// Função para filtrar seção de portfolio
function filterPortfolio(btFilter) {
  let DataFilter = btFilter.getAttribute("data-filter");

  sectionPortifolioAll.forEach((section) => {
    section.classList.add("hidden");
    if (DataFilter == section.getAttribute("data-filter")) {
      section.classList.remove("hidden");
    }
  });
}
// Botão de filtrar portfolio "Pessoal"
buttonFilterPersonal.addEventListener("click", () => {
  selectButtonFilter(buttonFilterPersonal);
  filterPortfolio(buttonFilterPersonal);
});

// Botão de filtrar portfolio "Gastronômico"
buttonFilterGastronomy.addEventListener("click", () => {
  selectButtonFilter(buttonFilterGastronomy);
  filterPortfolio(buttonFilterGastronomy);
});

// Botão de filtrar portfolio "Eventos"
buttonFilterEvent.addEventListener("click", () => {
  selectButtonFilter(buttonFilterEvent);
  filterPortfolio(buttonFilterEvent);
});
