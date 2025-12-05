# Crear proyecto en typescript

1. inicializar proyecto

```bash
   npm init -y
```

2. instalar typescript

```bash
    npm install --save-dev ts-node typescript @types/node
```

- **ts-node** = ejecutar archivos .ts directamente (compila + ejecuta)
- **typescript** = compila
- **@types/node** = autocompletado del api de node

3. Crear archivo tsconfig.json

```bash
    npx tsc --init
```

4. Ejecutar archivos manualmente

```bash
    npx ts-node <carpeta>/<nombre del archivo>.ts
```

5. en package.json en "scripts" agregar el siguiente para que se autocompile y ejecute

```bash
    "dev": "ts-node <carpeta>/<nombre del archivo>.ts"
```

6.  ejecutar

```bash
    npm run dev
```

# Instalación de nodemon con ts

1. instalar nodemon

```bash
    npm install --save-dev nodemon
```

2. crear el archivo de nodemon.json

```bash
    {
        "watch": ["src"],
        "ext": "ts",
        "exec": "ts-node ./src/<nombre de tu archivo>.ts"
    }
```

- **watch**: qué carpetas o archivos debe vigilar
- **ext**: Extensiones de archivos que harán que nodemon reinicie.
- **exec**: Comando que nodemon ejecutará cuando detecte cambios.

3. después en el package.json en "scripts" agregar lo siguiente

```bash
    "dev": "nodemon"
```

4. ejecutar:

```bash
    npm run dev
```

# backend

jerarquía de prioridades:

1. Síncrono (Console.log, variables, loops) -> GANA SIEMPRE.
2. Microtareas (Promesas, async/await) -> SEGUNDO LUGAR.
3. Macrotareas (setTimeout, setInterval) -> ÚLTIMO LUGAR.

## zod:

Lo que me hace falta por aprender de zod

1.  z.preprocess(), para limpiar datos antes de validarlos
2.  Validar query params y params de rutas (req.query y req.params)
3.  Reutilizar schemas con extend() y .merge() (estructuras grandes y reutilizables)
4.  Validación con discriminated unions (ideal para APIs con múltiples tipos)
5.  Inferir tipos avanzados y combinarlos (usarlos en servicios, controladores, etc.)
6.  Middlewares de validación reutilizables (un validate(schema) universal)

## jest

1. instalar:

```bash
    npm install -D jest ts-jest @types/jest
```

2. inicializar:

```bash
    npx ts-jest config:init
```

3. después creara el archivo:

```bash
    jest.config.js
```
