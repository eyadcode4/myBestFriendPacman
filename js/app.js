let fantasmito = document.getElementById("fantasmito");
let cherry = document.getElementById("cherry");
let divcontador = document.getElementById("contador");
let logoPacman = document.getElementById("logoPacman");
let gameover = document.getElementById("gameover");
gameover.style.display = "none";
cherry.style.display = "none";
let comer = 1;
let contador = 0;

fantasmito.addEventListener("click", () => {
  comerPacman();
  contador = contador + 100;
  divcontador.innerHTML = contador + " PTS";
  gameOver();
});

cherry.addEventListener("click", () => {
  comerCherry();
  contador = contador + 500;
  divcontador.innerHTML = contador + " PTS";
  gameOver();
});

function gameOver() {
  if (contador >= 5000) {
    gameover.style.display = "block";
    fantasmito.style.display = "none";
    cherry.style.display = "none";
    logoPacman.style.display = "none";
  }
}

function comerPacman() {
  fantasmito.style.display = "none";
  comer++;
  if (comer % 4 !== 0) {
    setTimeout(showFantasmito, 2000);
  } else {
    toggleItems();
  }
}

function comerCherry() {
  cherry.style.display = "none";
  comer++;

  toggleItems();
}

function showFantasmito() {
  fantasmito.style.display = "block";
  if (contador >= 5000) {
    fantasmito.style.display = "none";
  }
}

function showCherry() {
  cherry.style.display = "block";
  if (contador >= 5000) {
    cherry.style.display = "none";
  }
}

function toggleItems() {
  if (comer % 4 === 0) {
    setTimeout(showCherry, 2000);

    fantasmito.style.display = "none";
  } else {
    setTimeout(showFantasmito, 2000);
    cherry.style.display = "none";
  }
}

showFantasmito();