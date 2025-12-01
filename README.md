# Javascript: Understanding the Weird Parts

## Descripción

No imites, entiende. Este repositorio contiene recursos y notas para el curso "Javascript: Understanding the Weird Parts". El objetivo es profundizar en los conceptos fundamentales de JavaScript y comprender su funcionamiento interno.

## Índice Temático

1. [Syntax Parsers, Lexical Environments y Execution Contexts](./1.%20Syntax%20Parsers%2C%20Lexical%20Environments%20y%20Execution%20Contexts.md)
2. [Name-Value Pairs & Objects](./2.%20Name-Value%20Pairs%20%26%20Objects.md)
3. [Global Environment & The Global Object](./3.%20Global%20Environment%20%26%20The%20Global%20Object.md)
4. [Hoisting](./4.%20Hoisting.md)
5. [Code Execution](./5.%20Code%20Execution.md)
6. [Function Invocation & The Execution Stack](./6.%20Function%20Invocation%20%26%20The%20Execution%20Stack.md)
7. [Function, Context & Variable Environments](./7.%20Function%2C%20Context%20%26%20Variable%20Environments.md)
8. [The Scope Chain](./8.%20The%20Scope%20Chain.md)
9. [Scope, ES6 & let](./9.%20Scope%2C%20ES6%20%26%20let.md)
10. [Asynchronous Callbacks](./10.%20Asynchronous%20Callbacks.md)
11. [Dynamic Typing](./11.%20Dynamic%20Typing.md)
12. [Primitive Types](./12.%20Primitive%20Types.md)
13. [Operators](./13.%20Operators.md)
14. [Associativity](./15.%20Asociativity.md)
15. [Coercion](./16.%20Coercion.md)
16. [Comparison Operators](./17.%20Comparison%20Operators.md)
17. [Existence and Booleans](./18.%20Existence%20and%20Booleans.md)
18. [Default Values](./19.%20Default%20Values.md)
19. [Object Literals](./20.%20Object%20Literals.md)
20. [Objects & The Dot](./21.%20Objects%20%26%20The%20Dot.md)

---

## Resumen de Conceptos Clave

### 1. Syntax Parser

Herramienta del motor JS que lee tu código y verifica si cumple las reglas gramaticales del lenguaje. Construye el AST (Abstract Syntax Tree) antes de ejecutar.

### 2. Lexical Environment

Estructura interna que contiene las variables declaradas en un bloque/función y un enlace al entorno padre. Define dónde buscar variables según dónde fue escrito el código.

### 3. Execution Context

Entorno donde se ejecuta el código. Tiene dos fases: creación (se reserva memoria para variables y funciones) y ejecución (se ejecuta línea por línea). Incluye Variable Environment, Lexical Environment y `this`.

### 4. Name-Value Pairs

Estructura básica: una clave (nombre) asociada a un valor. Los objetos en JS son colecciones de name-value pairs.

### 5. Global Object

Objeto creado automáticamente por JS (`window` en navegador, `global` en Node). Contiene funciones globales, objetos nativos y APIs del host.

### 6. Hoisting

Las declaraciones se procesan antes de ejecutar el código. `var` se inicializa con `undefined`, las funciones se elevan completamente, `let`/`const` entran en TDZ (Temporal Dead Zone).

### 7. Single-Threaded

JavaScript tiene un solo hilo de ejecución. Solo puede hacer una cosa a la vez.

### 8. Synchronous Execution

El código se ejecuta línea por línea, bloqueante: cada instrucción debe terminar antes de ejecutar la siguiente.

### 9. Function Invocation

Ejecutar una función crea un nuevo Execution Context que se apila en el Call Stack.

### 10. Execution Stack (Call Stack)

Pila LIFO donde se organizan los contextos de ejecución. Cuando una función termina, su contexto se elimina.

### 11. Variable Environment

Parte del Execution Context donde se almacenan variables `var`, parámetros y `arguments`.

### 12. Scope Chain

Cadena de Lexical Environments conectados. JS busca variables desde el scope actual hacia el global siguiendo esta cadena.

### 13. Block Scope (ES6)

`let` y `const` solo son accesibles dentro del bloque `{}` donde fueron declaradas.

### 14. Temporal Dead Zone (TDZ)

Periodo entre el inicio del scope y la declaración de `let`/`const` donde la variable existe pero no puede ser accedida.

### 15. Asynchronous Callbacks

Funciones que se ejecutan después, enviadas a Web APIs (navegador) o libuv (Node), y procesadas por el Event Loop cuando el Call Stack está vacío.

### 16. Dynamic Typing

Las variables no tienen tipo fijo, pueden contener cualquier tipo de valor. El tipo se determina en tiempo de ejecución.

### 17. Primitive Types

Valores inmutables de tamaño fijo: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.

### 18. Operators

Símbolos que realizan operaciones sobre valores y devuelven un resultado. Incluyen aritméticos, comparación, lógicos, asignación, etc.

### 19. Operator Precedence

Reglas que determinan qué operador se evalúa primero en una expresión. Ejemplo: `*` antes que `+`.

### 20. Associativity

Dirección en que se evalúan operadores con la misma precedencia. Puede ser left-to-right (como `+`, `-`) o right-to-left (como `=`, `**`).

### 21. Type Coercion

Conversión automática (implícita) o manual (explícita) de valores de un tipo a otro. JavaScript realiza coerción automáticamente en operaciones mixtas.

### 22. Comparison Operators

Operadores que comparan valores: `==` (igualdad con coerción), `===` (igualdad estricta sin coerción), `<`, `>`, `<=`, `>=`, `!=`, `!==`.

### 23. Truthy y Falsy

Valores que se convierten a `true` o `false` en contextos booleanos. Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`, `-0`. Todo lo demás es truthy.

### 24. Default Values

Valores por defecto para variables o parámetros usando `||`, `??` (nullish coalescing), o sintaxis ES6 de parámetros por defecto.

### 25. Object Literals

Notación `{}` para crear objetos directamente. ES6 añade shorthand properties, computed properties, métodos shorthand, y spread operator.

### 26. Objects & Property Access

Objetos son colecciones de pares nombre-valor. Acceso con dot notation (`obj.prop`) o bracket notation (`obj["prop"]`). Dot es más rápido y legible, bracket permite acceso dinámico.
