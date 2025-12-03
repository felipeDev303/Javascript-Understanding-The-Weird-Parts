# Autómata Celular - Juego de la Vida de Conway

Implementación del clásico **Game of Life** (Juego de la Vida) de John Conway usando JavaScript vanilla y Canvas.

---

## 📋 Descripción

Este proyecto simula un autómata celular basado en las reglas del Juego de la Vida de Conway. Cada célula del tablero puede estar viva (blanca) o muerta (negra), y evoluciona según reglas simples que generan patrones complejos emergentes.

### Reglas del Juego de la Vida

Cada célula interactúa con sus **8 vecinos** (horizontal, vertical y diagonal):

1. **Muerte por soledad**: Una célula viva con **menos de 2 vecinos vivos** muere
2. **Supervivencia**: Una célula viva con **2 o 3 vecinos vivos** sobrevive
3. **Muerte por sobrepoblación**: Una célula viva con **más de 3 vecinos vivos** muere
4. **Reproducción**: Una célula muerta con **exactamente 3 vecinos vivos** nace

---

## 🚀 Características

- **Grid de 100x100 células** renderizado en canvas de 500x500px
- **Estado inicial aleatorio** generado automáticamente
- **30 FPS** de simulación
- **Tablero toroidal** (los bordes se conectan, creando un espacio infinito)
- **Cálculo eficiente** de vecinos con módulo para wrapping
- **Sistema de doble buffer** (estado actual y siguiente estado)

---

## 🛠️ Tecnologías

- HTML5 Canvas
- JavaScript (ES5)
- CSS3

---

## 📁 Estructura del Proyecto

```
Automata Celular/
├── index.html      # Estructura HTML y canvas
├── app.js          # Lógica del autómata
├── styles.css      # Estilos
└── README.md       # Este archivo
```

---

## 🎮 Cómo Usar

1. Abrir `index.html` en un navegador web
2. La simulación inicia automáticamente con un estado aleatorio
3. Observar la evolución de los patrones

---

## 🔧 Configuración

Puedes modificar estos parámetros en `app.js`:

```javascript
var fps = 30; // Velocidad de simulación
var canvasX = 500; // Ancho del canvas
var canvasY = 500; // Alto del canvas
var filas = 100; // Número de filas
var columnas = 100; // Número de columnas
var blanco = "#ffffff"; // Color célula viva
var negro = "#000000"; // Color célula muerta
```

---

## 📊 Arquitectura del Código

### Función Constructora: `Agente`

Representa cada célula del tablero:

```javascript
var Agente = function (x, y, estado) {
  this.x = x;
  this.y = y;
  this.estado = estado; // 0=muerta, 1=viva
  this.estadoProx = estado; // Estado siguiente
  this.vecinos = []; // Array de vecinos
};
```

**Métodos:**

- `addVecinos()`: Calcula y almacena referencias a los 8 vecinos
- `dibuja()`: Renderiza la célula en el canvas
- `nuevoCiclo()`: Aplica las reglas de Conway y calcula el siguiente estado
- `mutacion()`: Actualiza el estado actual al siguiente estado

### Flujo del Programa

1. **Inicialización** (`inicializa()`)

   - Configura el canvas
   - Crea el tablero 2D
   - Genera estado inicial aleatorio
   - Calcula vecinos de cada célula
   - Inicia el bucle principal

2. **Bucle Principal** (`principal()`)

   - Limpia el canvas
   - Dibuja todas las células
   - Calcula siguiente generación
   - Aplica mutaciones
   - Se ejecuta a 30 FPS

3. **Cálculo de Vecinos** (tablero toroidal)
   ```javascript
   xVecino = (this.x + j + columnas) % columnas;
   yVecino = (this.y + i + filas) % filas;
   ```
   Usa operador módulo para crear efecto wrap-around.

---

## 🎨 Patrones Clásicos del Game of Life

Algunos patrones emergen naturalmente:

- **Still lifes** (estáticos): Block, Beehive, Loaf
- **Oscillators** (osciladores): Blinker, Toad, Beacon
- **Spaceships** (naves espaciales): Glider, LWSS
- **Methuselahs**: Patrones pequeños que tardan mucho en estabilizarse

---

## 🧠 Conceptos de JavaScript Utilizados

### 1. Constructor Functions

```javascript
var Agente = function (x, y, estado) {
  this.x = x;
  // ...
};
```

### 2. Métodos en Prototipos (inline)

```javascript
this.addVecinos = function () {
  // lógica de vecinos
};
```

### 3. Arrays 2D

```javascript
function creaArray2D(f, c) {
  var obj = new Array(f);
  for (y = 0; y < f; y++) {
    obj[y] = new Array(c);
  }
  return obj;
}
```

### 4. Canvas API

```javascript
ctx.fillStyle = color;
ctx.fillRect(x, y, width, height);
```

### 5. Closures y SetInterval

```javascript
setInterval(function () {
  principal();
}, 1000 / fps);
```

### 6. Operador Módulo para Wrapping

```javascript
(this.x + j + columnas) % columnas;
```

---

## 🔍 Detalles de Implementación

### Sistema de Doble Buffer

Para evitar condiciones de carrera, el algoritmo usa dos estados:

1. **`this.estado`**: Estado actual de la célula
2. **`this.estadoProx`**: Estado calculado para el siguiente frame

**Proceso:**

1. Leer `estado` de todos los vecinos
2. Calcular `estadoProx` según reglas
3. Aplicar `mutacion()` para actualizar `estado = estadoProx`

Esto garantiza que todas las células se evalúen simultáneamente.

### Búsqueda de Vecinos

Itera en un grid 3x3 centrado en la célula:

```javascript
for (i = -1; i < 2; i++) {
  for (j = -1; j < 2; j++) {
    // Calcular posición del vecino
    // Excluir la célula central (i=0, j=0)
  }
}
```

---

## 📚 Recursos Adicionales

- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [LifeWiki - Patrones y Reglas](https://conwaylife.com/wiki/Main_Page)
- [Canvas API - MDN](https://developer.mozilla.org/es/docs/Web/API/Canvas_API)

---

## 🎯 Posibles Mejoras

- [ ] Controles para pausar/reanudar
- [ ] Botón para reiniciar con nueva semilla aleatoria
- [ ] Click para activar/desactivar células manualmente
- [ ] Selector de velocidad (FPS)
- [ ] Contador de generaciones
- [ ] Guardar/cargar patrones predefinidos
- [ ] Modo de dibujo libre para crear patrones
- [ ] Cambiar tamaño del grid dinámicamente
- [ ] Zoom y pan sobre el tablero
- [ ] Estadísticas (células vivas, población histórica)

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

## 👨‍💻 Autor

Proyecto de ejemplo para aprender JavaScript - Conceptos fundamentales de programación orientada a objetos, canvas y algoritmos celulares.
