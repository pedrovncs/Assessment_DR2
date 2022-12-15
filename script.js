let turno = 0;
let jogador1 = 0;
let jogador2 = 0;
let tempoRecorde = 999;
var inicio, fim;

const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const tile6 = document.getElementById("tile6");
const tile7 = document.getElementById("tile7");
const tile8 = document.getElementById("tile8");
const tile9 = document.getElementById("tile9");

function marcaCasa(event, numCasa) {
  if (turno === 0) inicioTempo();
  const casa = event.target;
  mostraCasaEscolhida(numCasa);
  marcaJogador(casa);
  let situacao = verificaVitoria();
  turno++;
  verificaEmpate(situacao);
  alteraJogador();
}

function bloqueiaCasa(casa) {
  casa.setAttribute('onclick', 'null');
  casa.style = "background-Color: gray; cursor: not-allowed;";
}

function mostraCasaEscolhida(numCasa) {
  if (numCasa == 9) alert(`Você clicou na casa número 9`);
}

function marcaJogador(casa) {
  if (turno % 2 === 0) marcaX(casa);
  else marcaO(casa);
}

function marcaX(casa) {
  bloqueiaCasa(casa);
  casa.innerText = "X";
  casa.className = "jogadorX";
}

function marcaO(casa) {
  bloqueiaCasa(casa)
  casa.innerText = "O"
  casa.className = "jogadorO";
}

function alteraJogador() {
  const player = document.getElementById("jogadorDaVez");
  if (turno % 2 === 0) {
    player.style.color = "red";
    player.innerText = "X";
  }
  else {
    player.style.color = "blue"
    player.innerText = "O";
  }
}

function verificaVitoria() {
  if (verificaLinha()) {
    return true;
  }
  else if (verificaColuna()) {
    return true;
  }
  else if (verificaDiagonal()) {
    return true;
  }
  else return false;
}

function verificaEmpate(situacao) {
  if (situacao === false && turno === 9) {
    const nomeVencedor = document.getElementById("vencedor")
    const texto = document.getElementById("textoVencedor");
    texto.hidden = false;
    nomeVencedor.innerText = "# Deu velha #";
    nomeVencedor.style = "color: orangered";
  }
}

function verificaLinha() {
  if (tile1.className != "tile" && tile1.className === tile2.className && tile2.className === tile3.className) {
    verificaVencedor(tile1.className);
    return true;
  }
  else if (tile4.className != "tile" && tile4.className === tile5.className && tile5.className === tile6.className) {
    verificaVencedor(tile4.className);
    return true;
  }
  else if (tile7.className != "tile" && tile7.className === tile8.className && tile8.className === tile9.className) {
    verificaVencedor(tile7.className);
    return true;
  }
  else return false;
}

function verificaColuna() {
  if (tile1.className != "tile" && tile1.className === tile4.className && tile4.className === tile7.className) {
    verificaVencedor(tile1.className);
    return true;
  }
  else if (tile2.className != "tile" && tile2.className === tile5.className && tile5.className === tile8.className) {
    verificaVencedor(tile2.className);
    return true;
  }
  else if (tile3.className != "tile" && tile3.className === tile6.className && tile6.className === tile9.className) {
    verificaVencedor(tile6.className);
    return true;
  }
  else return false;
}

function verificaDiagonal() {
  if (tile1.className != "tile" && tile1.className === tile5.className && tile5.className === tile9.className) {
    verificaVencedor(tile1.className);
    return true;
  }
  else if (tile3.className != "tile" && tile3.className === tile5.className && tile5.className === tile7.className) {
    verificaVencedor(tile3.className);
    return true;
  }
  else return false;
}

function verificaVencedor(vencedor) {
  if (vencedor == "jogadorX") {
    vencedorX();
    travaTabuleiro()
    if (comparaTempo(fimTempo()));
    document.getElementById("tempoPartida").innerText = `${tempoRecorde} SEGUNDOS. Jogador X`;
  }
  else {
    vencedorO();
    travaTabuleiro()
    if (comparaTempo(fimTempo()));
    document.getElementById("tempoPartida").innerText = `${tempoRecorde} SEGUNDOS - Jogador O`;
  }
}

function vencedorX() {
  const nomeVencedor = document.getElementById("vencedor")
  const texto = document.getElementById("textoVencedor");
  if (turno <= 7) jogador1 += 2;
  else jogador1++;
  texto.hidden = false;
  nomeVencedor.innerText = "X";
  nomeVencedor.style = "color: red";
  document.getElementById("pontosX").innerText = `${jogador1}`;
}

function vencedorO() {
  const nomeVencedor = document.getElementById("vencedor")
  const texto = document.getElementById("textoVencedor");
  if (turno <= 7) jogador2 += 2;
  else jogador2++;
  texto.hidden = false;
  nomeVencedor.innerText = "O";
  nomeVencedor.style = "color: blue";
  document.getElementById("pontosO").innerText = `${jogador2}`;
}

function refresh() {
  turno = 0;
  limpaMarca();
  resetaCor();
  habilitaCasa();
  resetaClasse();
  alteraJogador();
  document.getElementById("textoVencedor").hidden = true;
}

function limpaMarca() {
  tile1.innerText = "";
  tile2.innerText = "";
  tile3.innerText = "";
  tile4.innerText = "";
  tile5.innerText = "";
  tile6.innerText = "";
  tile7.innerText = "";
  tile8.innerText = "";
  tile9.innerText = "";
}

function resetaCor() {
  tile1.style = "";
  tile2.style = "";
  tile3.style = "";
  tile4.style = "";
  tile5.style = "";
  tile6.style = "";
  tile7.style = "";
  tile8.style = "";
  tile9.style = "";
}

function habilitaCasa() {
  tile1.setAttribute('onclick', 'marcaCasa(event,1)');
  tile2.setAttribute('onclick', 'marcaCasa(event,2)');
  tile3.setAttribute('onclick', 'marcaCasa(event,3)');
  tile4.setAttribute('onclick', 'marcaCasa(event,4)');
  tile5.setAttribute('onclick', 'marcaCasa(event,5)');
  tile6.setAttribute('onclick', 'marcaCasa(event,6)');
  tile7.setAttribute('onclick', 'marcaCasa(event,7)');
  tile8.setAttribute('onclick', 'marcaCasa(event,8)');
  tile9.setAttribute('onclick', 'marcaCasa(event,9)');
}

function resetaClasse() {
  tile1.className = "tile";
  tile2.className = "tile";
  tile3.className = "tile";
  tile4.className = "tile";
  tile5.className = "tile";
  tile6.className = "tile";
  tile7.className = "tile";
  tile8.className = "tile";
  tile9.className = "tile";
}

function travaTabuleiro() {
  tile1.setAttribute('onclick', 'null');
  tile2.setAttribute('onclick', 'null');
  tile3.setAttribute('onclick', 'null');
  tile4.setAttribute('onclick', 'null');
  tile5.setAttribute('onclick', 'null');
  tile6.setAttribute('onclick', 'null');
  tile7.setAttribute('onclick', 'null');
  tile8.setAttribute('onclick', 'null');
  tile9.setAttribute('onclick', 'null');
}

function inicioTempo() {
  inicio = performance.now();
  return inicio;
}

function fimTempo() {
  fim = performance.now()
  var tempoPartida = fim - inicio;
  tempoPartida /= 1000;
  return tempoPartida.toFixed(2);
}

function comparaTempo(tempoNovo) {
  if (tempoNovo < tempoRecorde) {
    tempoRecorde = tempoNovo;
    return true;
  }
  else return false;
}

