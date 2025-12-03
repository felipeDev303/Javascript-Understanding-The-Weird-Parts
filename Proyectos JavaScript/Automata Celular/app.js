// Variables Generales
var canvas; // Pantalla
var ctx; // Contexto
var fps = 30; // Frames por segundo

var canvasX = 500; // Pixel Ancho
var canvasY = 500; // Pixel Alto

var tileX;
var tileY;

// Variable tablero
var tablero;
var filas = 100;
var columnas = 100;

var blanco = "#ffffff";
var negro = "#000000";

function creaArray2D(f, c) {
  var obj = new Array(f);
  for (y = 0; y < f; y++) {
    obj[y] = new Array(c);
  }
  return obj;
}

// Agente o turminta
var Agente = function (x, y, estado) {
  this.x = x;
  this.y = y;
  this.estado = estado; // vivo=1, muerto=2;
  this.estadoProx = this.estado; // estado que tendrá el siguiente ciclo
  this.vecinos = []; // Guardamos listado de sus vecinos

  // Método que añade los vecinos del objeto actual
  this.addVecinos = function () {
    var xVecino;
    var yVecino;

    for (i = -1; i < 2; i++) {
      for (j = -1; j < 2; j++) {
        xVecino = (this.x + j + columnas) % columnas;
        yVecino = (this.y + i + filas) % filas;

        // Descartar agente actual
        if (i != 0 || j != 0) {
          this.vecinos.push(tablero[yVecino][xVecino]);
        }
      }
    }
  };

  this.dibuja = function () {
    var color;
    if (this.estado == 1) {
      color = blanco;
    } else {
      color = negro;
    }

    ctx.fillStyle = color;
    ctx.fillRect(this.x * tileX, this.y * tileY, tileX, tileY);
  };

  // Programar las leyes de Conway
  this.nuevoCiclo = function () {
    var suma = 0;

    // Calculamos la cantidad de vecinos vivos
    for (i = 0; i < this.vecinos.length; i++) {
      suma += this.vecinos[i].estado;
    }

    // Aplicamos las normas
    this.estadoProx = this.estado; // por defecto lo dejamos igual

    //Muerte: tiene menos de 2 o más de 3
    if (suma < 2 || suma > 3) {
      this.estadoProx = 0;
    }

    // Vida/reproducción: tiene 3 vecinos
    if (suma === 3) {
      this.estadoProx = 1;
    }
  };

  this.mutacion = function () {
    this.estado = this.estadoProx;
  };
};

function iniciaTablero(obj) {
  var estado;

  for (y = 0; y < filas; y++) {
    for (x = 0; x < columnas; x++) {
      estado = Math.floor(Math.random() * 2);
      obj[y][x] = new Agente(x, y, estado);
    }
  }

  for (y = 0; y < filas; y++) {
    for (x = 0; x < columnas; x++) {
      obj[y][x].addVecinos();
    }
  }
}

function inicializa() {
  // Asociamos el canvas
  canvas = document.getElementById("pantalla");
  ctx = canvas.getContext("2d");

  // Ajustamos el tamaño del canvas
  canvas.width = canvasX;
  canvas.height = canvasY;

  // Calculamos el tamaño de los pixels
  tileX = Math.floor(canvasX / filas);
  tileY = Math.floor(canvasY / columnas);

  // Creamos el tablero
  tablero = creaArray2D(filas, columnas);

  // Lo inicializamos
  iniciaTablero(tablero);

  // Ejecutar el bucle principal
  setInterval(function () {
    principal();
  }, 1000 / fps);
}

function dibujaTablero(obj) {
  for (y = 0; y < filas; y++) {
    for (x = 0; x < columnas; x++) {
      obj[y][x].dibuja();
    }
  }

  // Calcula el siguiente ciclo
  for (y = 0; y < filas; y++) {
    for (x = 0; x < columnas; x++) {
      obj[y][x].nuevoCiclo();
    }
  }

  // Aplica la mutación
  for (y = 0; y < filas; y++) {
    for (x = 0; x < columnas; x++) {
      obj[y][x].mutacion();
    }
  }
}

function borraCanvas() {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

function principal() {
  borraCanvas();
  dibujaTablero(tablero);
}
