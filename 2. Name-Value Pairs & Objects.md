## Name -Value Pairs

### ✔ **Definición Formal**

Un **Name-Value Pair** es una combinación de:

- **Name (clave):** una cadena o símbolo que identifica algo.
- **Value (valor):** cualquier dato: números, strings, funciones, arrays, [[Objetos JS]], etc.

En JavaScript, esta estructura aparece en:

- Objetos `{ clave: valor }`
- Entradas de un Map
- Parámetros con valor
- Propiedades de funciones y objetos nativos

```js
const persona = {
  nombre: "Felipe",
  edad: 28,
};
```

### ✔ **Name-Value Pair ≠ Variable**

Aunque parecen similares, no son lo mismo.

| Variable                                 | Name-Value Pair                           |
| ---------------------------------------- | ----------------------------------------- |
| Tiene un nombre y un valor               | Tiene un nombre (clave) y un valor        |
| Se almacena en un **environment record** | Forma parte de un **objeto**              |
| Está ligada al **scope**                 | Está ligada a una **instancia de objeto** |

### 🧠 **¿Por qué es importante este concepto?**

Porque JavaScript:

- Representa los objetos como **colecciones de name-value pairs**.
- Implementa el modelo de datos mediante estos pares.
- Los usa para _bindings_ internos (especialmente en Execution Contexts).
- Constituyen la base del prototype chain.

Incluso el **lexical environment** internamente está compuesto por name-value pairs:

`Environment Record:   x → 10   y → "hola"`

---

### 🧠 Analogía estilo neurociencia

Un **name-value pair** es como un “microconcepto” en el cerebro:

- **Nombre** → etiqueta lingüística (“perro”, “velocidad”).
- **Valor** → la información asociada a esa etiqueta.

El cerebro asocia nombres a significados; JS asocia claves a valores.

---

## Objetos en JavaScript

Colección de name-value pairs.

```js
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
};
```

### ✔ **Creación de Objetos**

1. **Notación Literal:**

```js
const persona = {
  nombre: "Ana",
  edad: 25,
};
```

2. **Constructor de Objetos:**

```js
const persona = new Object();
persona.nombre = "Ana";
persona.edad = 25;
```

3. **Object.create():**

```js
const proto = {
  saludar() {
    console.log("Hola");
  },
};
const persona = Object.create(proto);
persona.nombre = "Ana";
persona.edad = 25;
```

### ✔ **Acceso a Propiedades**

- Notación de punto: `obj.propiedad`
- Notación de corchetes: `obj["propiedad"]`

```js
console.log(persona.nombre); // Ana
console.log(persona["edad"]); // 25
```
