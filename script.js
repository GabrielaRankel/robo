// Lista com os dados dos robos do catalogo.
// Cada item da lista representa um tipo de robo industrial.
var robos = [
  {
    nome: "Robo Cartesiano",
    imagem: "assets/img/cartesiano.svg",
    etiquetas: ["3 eixos", "precisao", "paletizacao"],
    conceito: "Manipulador que se movimenta em eixos lineares X, Y e Z, formando uma area de trabalho retangular.",
    funcionamento: "Motores eletricos movimentam guias lineares, fusos ou correias para deslocar a ferramenta em linhas retas.",
    caracteristicas: ["Movimento linear", "Alta repetibilidade", "Estrutura simples", "Boa capacidade de carga"],
    aplicacoes: "paletizacao, alimentacao de maquinas, corte, dosagem, inspecao",
    iot: "Pode enviar dados de posicao, ciclo, falhas e produtividade para CLPs, supervisores e plataformas IoT.",
    modelos: ["Festo EXCM", "Yamaha XY-X", "IAI IK Series"],
    fabricantes: ["Festo", "Yamaha", "IAI"],
    movimento: "Linear X, Y e Z",
    pontoForte: "Precisao e simplicidade",
    usoComum: "Paletizacao"
  },
  {
    nome: "Robo SCARA",
    imagem: "assets/img/scara.svg",
    etiquetas: ["4 eixos", "rapido", "montagem"],
    conceito: "Robo com bracos paralelos, muito usado para movimentos rapidos no plano horizontal.",
    funcionamento: "Dois bracos giram no plano horizontal e um eixo vertical faz a subida, descida e rotacao da ferramenta.",
    caracteristicas: ["Alta velocidade", "Boa precisao", "Formato compacto", "Ideal para cargas leves"],
    aplicacoes: "montagem, parafusamento, embalagem, selecao de pecas, inspecao",
    iot: "Pode monitorar tempo de ciclo, paradas, alarmes e rastreabilidade da producao.",
    modelos: ["Epson LS10-B", "Yamaha YK-XE", "Omron i4H"],
    fabricantes: ["Epson", "Yamaha", "Omron"],
    movimento: "Rotacao horizontal + eixo Z",
    pontoForte: "Velocidade",
    usoComum: "Montagem"
  },
  {
    nome: "Robo Articulado",
    imagem: "assets/img/articulado.svg",
    etiquetas: ["6 eixos", "flexivel", "soldagem"],
    conceito: "Robo com juntas rotativas parecidas com ombro, cotovelo e punho humano.",
    funcionamento: "Servomotores movimentam as juntas para posicionar a ferramenta em diferentes angulos e direcoes.",
    caracteristicas: ["Grande flexibilidade", "Amplo alcance", "Varios graus de liberdade", "Aceita diferentes ferramentas"],
    aplicacoes: "soldagem, pintura, montagem, usinagem, paletizacao, manuseio de materiais",
    iot: "Pode registrar trajetoria, torque, energia, alarmes e desgaste para manutencao preditiva.",
    modelos: ["ABB IRB 6700", "FANUC M-20iD", "KUKA KR QUANTEC"],
    fabricantes: ["ABB", "FANUC", "KUKA"],
    movimento: "Juntas rotativas",
    pontoForte: "Flexibilidade",
    usoComum: "Soldagem"
  },
  {
    nome: "Robo Cilindrico",
    imagem: "assets/img/cilindrico.svg",
    etiquetas: ["base giratoria", "vertical", "maquinas"],
    conceito: "Robo que trabalha em um volume com formato cilindrico.",
    funcionamento: "A base gira, o braco avanca ou recua e um eixo vertical ajusta a altura da ferramenta.",
    caracteristicas: ["Boa area ao redor da base", "Controle simples", "Estrutura compacta", "Util em carga e descarga"],
    aplicacoes: "alimentacao de tornos, transferencia de pecas, fundicao, soldagem por ponto",
    iot: "Sensores e encoders podem enviar dados de ciclo, fim de curso, alarmes e disponibilidade.",
    modelos: ["Seiko RT3300", "Toshiba TH Series", "Kawasaki Transfer Robot"],
    fabricantes: ["Seiko", "Toshiba", "Kawasaki"],
    movimento: "Rotacao + movimento radial e vertical",
    pontoForte: "Acesso ao redor da base",
    usoComum: "Carga e descarga"
  },
  {
    nome: "Robo Delta",
    imagem: "assets/img/delta.svg",
    etiquetas: ["paralelo", "muito rapido", "embalagem"],
    conceito: "Robo paralelo com bracos leves, usado em linhas de alta velocidade.",
    funcionamento: "Varios bracos trabalham juntos para mover a ferramenta abaixo da estrutura principal.",
    caracteristicas: ["Altissima velocidade", "Boa precisao", "Baixa massa em movimento", "Geralmente usa visao artificial"],
    aplicacoes: "embalagem, separacao de alimentos, classificacao, pick and place, farmacia",
    iot: "Pode integrar cameras, esteiras e dashboards para contar produtos, medir rejeitos e ajustar velocidade.",
    modelos: ["ABB IRB 360", "FANUC M-3iA", "Omron Quattro"],
    fabricantes: ["ABB", "FANUC", "Omron Adept"],
    movimento: "Cinematica paralela",
    pontoForte: "Velocidade extrema",
    usoComum: "Embalagem"
  },
  {
    nome: "Robo Polar",
    imagem: "assets/img/polar.svg",
    etiquetas: ["esferico", "alcance", "fundicao"],
    conceito: "Robo que usa coordenadas polares ou esfericas para formar sua area de trabalho.",
    funcionamento: "A base gira, o braco inclina e um eixo telescopico aumenta ou reduz o alcance.",
    caracteristicas: ["Bom alcance", "Acesso a areas profundas", "Usado em tarefas pesadas", "Importante na historia da robotica"],
    aplicacoes: "fundicao, soldagem, pintura, manuseio pesado, transferencia de pecas",
    iot: "Pode ser atualizado com sensores e gateways para monitoramento remoto e coleta de dados.",
    modelos: ["Unimation Unimate", "Kawasaki Unimate 2000", "Cincinnati Milacron T3"],
    fabricantes: ["Unimation", "Kawasaki", "Cincinnati Milacron"],
    movimento: "Rotacao + inclinacao + extensao",
    pontoForte: "Alcance esferico",
    usoComum: "Fundicao"
  },
  {
    nome: "Robo Colaborativo",
    imagem: "assets/img/cobot.svg",
    etiquetas: ["seguro", "flexivel", "inspecao"],
    conceito: "Robo feito para trabalhar perto de pessoas, com recursos de seguranca e programacao simples.",
    funcionamento: "Sensores de forca, torque e colisao ajudam o robo a operar de forma mais segura.",
    caracteristicas: ["Facil instalacao", "Programacao intuitiva", "Sensores de seguranca", "Bom para pequenas series"],
    aplicacoes: "montagem, inspecao, parafusamento, alimentacao de maquinas, embalagem",
    iot: "Pode enviar dados de seguranca, ciclo, manutencao e qualidade para sistemas de gestao.",
    modelos: ["Universal Robots UR10e", "FANUC CRX-10iA", "Doosan M1013"],
    fabricantes: ["Universal Robots", "FANUC", "Doosan Robotics"],
    movimento: "Juntas sensorizadas",
    pontoForte: "Trabalho perto de pessoas",
    usoComum: "Montagem e inspecao"
  }
];

var listaRobos = document.getElementById("listaRobos");
var tabelaComparativo = document.getElementById("tabelaComparativo");
var campoPesquisa = document.getElementById("campoPesquisa");
var campoFiltro = document.getElementById("campoFiltro");
var botaoMenu = document.getElementById("botaoMenu");
var menu = document.getElementById("menu");
var voltarTopo = document.getElementById("voltarTopo");

// Esta funcao monta a lista de caracteristicas em HTML.
function montarListaCaracteristicas(caracteristicas) {
  var html = "";

  for (var i = 0; i < caracteristicas.length; i++) {
    html = html + "<li>" + caracteristicas[i] + "</li>";
  }

  return html;
}

// Esta funcao monta os modelos comerciais e seus fabricantes.
function montarModelos(robo) {
  var html = "";

  for (var i = 0; i < robo.modelos.length; i++) {
    html = html + "<div class='modelo'>";
    html = html + "<strong>" + robo.modelos[i] + "</strong>";
    html = html + "<span>" + robo.fabricantes[i] + "</span>";
    html = html + "</div>";
  }

  return html;
}

// Esta funcao monta as etiquetas que aparecem no topo do card.
function montarEtiquetas(etiquetas) {
  var html = "";

  for (var i = 0; i < etiquetas.length; i++) {
    html = html + "<span class='etiqueta'>" + etiquetas[i] + "</span>";
  }

  return html;
}

// Esta funcao cria o card completo de um robo.
function criarCard(robo) {
  var card = "";

  card = card + "<article class='card-robo'>";
  card = card + "<div class='topo-card'>";
  card = card + "<img src='" + robo.imagem + "' alt='Imagem do " + robo.nome + "'>";
  card = card + "<div><h3>" + robo.nome + "</h3>";
  card = card + "<div class='etiquetas'>" + montarEtiquetas(robo.etiquetas) + "</div></div>";
  card = card + "</div>";

  card = card + "<div class='bloco'><h4>Conceito</h4><p>" + robo.conceito + "</p></div>";
  card = card + "<div class='bloco'><h4>Principio de funcionamento</h4><p>" + robo.funcionamento + "</p></div>";
  card = card + "<div class='bloco'><h4>Principais caracteristicas tecnicas</h4><ul>" + montarListaCaracteristicas(robo.caracteristicas) + "</ul></div>";
  card = card + "<div class='bloco'><h4>Aplicacoes industriais</h4><p>" + robo.aplicacoes + ".</p></div>";
  card = card + "<div class='bloco'><h4>Integracao com automacao e IoT</h4><p>" + robo.iot + "</p></div>";
  card = card + "<div class='bloco'><h4>Modelos comerciais e fabricantes</h4><div class='modelos'>" + montarModelos(robo) + "</div></div>";

  card = card + "</article>";

  return card;
}

// Esta funcao mostra os robos na tela, considerando pesquisa e filtro.
function mostrarRobos() {
  var textoPesquisado = campoPesquisa.value.toLowerCase();
  var filtroEscolhido = campoFiltro.value;
  var html = "";
  var quantidadeEncontrada = 0;

  for (var i = 0; i < robos.length; i++) {
    var robo = robos[i];

    var textoDoRobo = robo.nome + " " + robo.aplicacoes + " " + robo.fabricantes.join(" ");
    textoDoRobo = textoDoRobo.toLowerCase();

    var passouNaPesquisa = textoDoRobo.indexOf(textoPesquisado) >= 0;
    var passouNoFiltro = filtroEscolhido === "todos" || robo.aplicacoes.indexOf(filtroEscolhido) >= 0;

    if (passouNaPesquisa && passouNoFiltro) {
      html = html + criarCard(robo);
      quantidadeEncontrada++;
    }
  }

  if (quantidadeEncontrada === 0) {
    html = "<div class='mensagem'>Nenhum robo encontrado.</div>";
  }

  listaRobos.innerHTML = html;
}

// Esta funcao monta a tabela comparativa.
function montarTabela() {
  var html = "";

  for (var i = 0; i < robos.length; i++) {
    html = html + "<tr>";
    html = html + "<td>" + robos[i].nome + "</td>";
    html = html + "<td>" + robos[i].movimento + "</td>";
    html = html + "<td>" + robos[i].pontoForte + "</td>";
    html = html + "<td>" + robos[i].usoComum + "</td>";
    html = html + "</tr>";
  }

  tabelaComparativo.innerHTML = html;
}

// Eventos: aqui o site responde aos cliques e digitacoes do usuario.
campoPesquisa.addEventListener("input", mostrarRobos);
campoFiltro.addEventListener("change", mostrarRobos);

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

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

// Chamadas iniciais para preencher o site quando a pagina abrir.
mostrarRobos();
montarTabela();
