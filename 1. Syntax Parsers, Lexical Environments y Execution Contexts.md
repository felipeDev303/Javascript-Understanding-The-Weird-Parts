# 🧠💻 Syntax Parsers, Lexical Environments y Execution Contexts

### _Big Words Alert_

---

## 📘 **1. Syntax Parser (Analizador Sintáctico)**

### ✅ **Definición (JavaScript / Compiladores)**

Un **syntax parser** es la herramienta que analiza el código fuente y verifica si su **estructura** cumple con las reglas de la gramática del lenguaje.

- Construye un **Árbol de Sintaxis Abstracta (AST)**.
- Detecta **errores de sintaxis** antes de ejecutar el programa.
- No evalúa el significado, solo la **forma**.

### 🧠 **Analogía neurocientífica**

El equivalente funcional más cercano es el **Área de Broca**, ubicada en el lóbulo frontal.

- Procesa la **estructura gramatical** de las oraciones.
- Evalúa el orden correcto de palabras y la construcción sintáctica.
- Puede aceptar una frase sin sentido siempre que sea gramatical.

### 🧠💬 **Ejemplo clásico: Chomsky**

> “Verdes ideas incoloras duermen furiosamente.”

- **Broca (parser)**: ✔ _La sintaxis es correcta_.
- **Wernicke (semántica)**: ✖ _La frase carece de sentido._

---

## 📘 **2. Lexical Environment (Entorno Léxico)**

### ✅ **Definición (JavaScript)**

Un **lexical environment** es una estructura interna generada cada vez que se crea:

- Un bloque `{}`,
- Una función,
- O un programa completo.

Incluye:

- Las variables declaradas en ese entorno.
- Un enlace al **entorno padre** (scope chain).
- Las reglas que determinan **cómo se resuelven nombres**.

El significado de un identificador en JS depende del entorno donde **fue definido**, no donde se ejecuta.

### 🧠 **Analogía neurocientífica**

Corresponde a la función del **lóbulo temporal** (áreas semánticas), que gestiona:

- El **significado** de palabras y conceptos.
- El acceso a significados según el **contexto donde fueron aprendidos**.
- La integración de palabras dentro de redes semánticas.

En el cerebro, el “entorno léxico” sería el conjunto de asociaciones activadas mientras procesamos lenguaje.

### 🧠🧩 **Scope chain cerebral**

Funciona igual que en JS:

1. **Contexto inmediato**
2. **Contexto de la conversación**
3. **Memoria semántica general**

Si un significado no está en el nivel actual, se busca “hacia arriba”.

---

## 📘 **3. Execution Context (Contexto de Ejecución)**

### ✅ **Definición (JavaScript)**

Un **execution context** es el entorno en el que se **ejecuta** un fragmento de código.
Cada vez que JS evalúa algo, crea un nuevo contexto con:

1. **Variable Environment** (variables `var`)
2. **Lexical Environment** (variables `let`/`const`)
3. **This Binding**
4. **Outer Environment Reference**

Los execution contexts se apilan en el **Call Stack**.

### 🧠 **Analogía neurocientífica**

La analogía más precisa es la **Corteza Prefrontal**, responsable de:

- **Memoria de trabajo verbal**
- Mantener el “estado actual” del pensamiento
- Control ejecutivo (qué información activar o inhibir)
- Seguimiento del contexto durante una conversación

Así como un execution context mantiene el estado mientras corre código, la corteza prefrontal mantiene el estado mientras interpretas una oración o participas en una conversación.

---

# 🧠🆚💻 **Resumen Comparativo**

| Concepto (JavaScript)   | Función                             | Analógico en el cerebro | Rol neurocognitivo                       |
| ----------------------- | ----------------------------------- | ----------------------- | ---------------------------------------- |
| **Syntax Parser**       | Verifica la gramática, forma el AST | **Área de Broca**       | Procesamiento sintáctico                 |
| **Lexical Environment** | Mantiene variables y referencias    | **Lóbulo temporal**     | Significados, semántica, asociaciones    |
| **Execution Context**   | Estado activo durante ejecución     | **Corteza prefrontal**  | Control del contexto, memoria de trabajo |
