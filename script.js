// JS mínimo: menu mobile, botão voltar ao topo e filtro/pesquisa simples

var botaoMenu = document.getElementById("botaoMenu");
var menu = document.getElementById("menu");
var voltarTopo = document.getElementById("voltarTopo");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("aberto");
  });
}

if (voltarTopo) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      voltarTopo.classList.add("aparecer");
    } else {
      voltarTopo.classList.remove("aparecer");
    }
  });

  voltarTopo.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

// Pesquisa/filtro: filtra os cards já renderizados no HTML
var campoPesquisa = document.getElementById("campoPesquisa");
var campoFiltro = document.getElementById("campoFiltro");
var listaRobos = document.getElementById("listaRobos");

function normalizar(str) {
  return (str || "").toLowerCase();
}

function aplicarFiltro() {
  if (!listaRobos) return;
  if (!campoPesquisa || !campoFiltro) return;

  var textoPesquisado = normalizar(campoPesquisa.value);
  var filtroEscolhido = campoFiltro.value;

  var cards = listaRobos.querySelectorAll(".card-robo");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];

    // textinhos para comparar (sem mudar HTML original)
    var titulo = normalizar(card.querySelector("h3") ? card.querySelector("h3").textContent : "");
    var etiquetas = normalizar(card.innerText);

    var passouNaPesquisa = !textoPesquisado || etiquetas.indexOf(textoPesquisado) >= 0;

    // filtro por aplicação: usa o próprio texto do card (ex: 'paletizacao', 'soldagem' ...)
    var passouNoFiltro = filtroEscolhido === "todos" || etiquetas.indexOf(filtroEscolhido) >= 0;

    card.style.display = (passouNaPesquisa && passouNoFiltro) ? "" : "none";
  }
}

if (campoPesquisa && campoFiltro) {
  campoPesquisa.addEventListener("input", aplicarFiltro);
  campoFiltro.addEventListener("change", aplicarFiltro);
  aplicarFiltro();
}


