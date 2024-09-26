---
title: "Prueba técnica de javascript"
description: "Prueba técnica: mira como diseñar y crear una aplicación de acortador de urls con todos sus pasos"
layout: "../../../layouts/ArticlesLayout.astro"
---

**Subido:** _26 Septiembre 2024_  


<a href="/posts" class="return-page">Regresar a posts</a>

# Cómo Diseñar y Crear un Acortador de URL con JavaScript

Un acortador de URL es una herramienta que toma una URL larga y la convierte en una versión más corta y fácil de compartir. Esta funcionalidad es común en plataformas como Twitter o Bit.ly. En este artículo, aprenderás cómo diseñar y crear un acortador de URL usando JavaScript y un simple backend. Vamos a cubrir los siguientes pasos:  

1- **Diseño básico del acortador de URL**  
2- **Generación de identificadores únicos**  
3- **Almacenamiento de URLs**  
4- **Redirección a la URL original**  
5- **Interfaz de usuario simple**  
<br />

## 1. Diseño básico del acortador de URL

El acortador de URL tiene un flujo sencillo:

- El usuario introduce una URL larga.
- Se genera un identificador corto y único.
- Se almacena la URL larga junto con el identificador.
- Cuando alguien accede a la URL corta, se redirige a la URL original.

### Herramientas necesarias

- **Frontend**: Usaremos HTML, CSS y JavaScript para la interfaz.
- **Backend**: Para manejar la generación de URLs cortas y su almacenamiento, usaremos Node.js con Express.
- **Base de datos**: Usaremos un almacenamiento simple en memoria o una base de datos como MongoDB.  

<br />  

## 2. Generación de identificadores únicos  

El punto clave es generar un identificador único para cada URL que se acorte. Esto se puede hacer de diferentes maneras, pero una forma simple es generar cadenas aleatorias de caracteres.

### Ejemplo en JavaScript

Puedes usar la función 'Math.random()' para generar una cadena aleatoria:

```javascript
function generarIdentificador() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let identificador = '';
    for (let i = 0; i < 6; i++) {
        identificador += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return identificador;
}
```

Esta función genera un identificador de 6 caracteres, que será único para cada URL acortada.  

<br />

## 3. Almacenamiento de URLs  

Para almacenar la URL larga y su identificador, necesitamos un objeto o base de datos. Aquí tienes un ejemplo de cómo hacerlo usando un simple almacenamiento en memoria (para propósitos de demostración):  

```javascript
const urlDatabase = {};

function acortarURL(urlLarga) {
    const identificador = generarIdentificador();
    urlDatabase[identificador] = urlLarga;
    return `https://tudominio.com/${identificador}`;
}
```

Cada vez que el usuario acorte una URL, el identificador se almacenará como clave en el objeto 'urlDatabase', y la URL larga será el valor correspondiente.  

<br />

## 4. Redirección a la URL original  

Para redirigir a la URL original cuando alguien acceda a la URL corta, podemos usar Express para manejar las rutas.

### Backend en Node.js

Instala Express si no lo tienes:

```bash
npm install express
```

Crea un archivo 'index.js':  

```javascript
const express = require('express');
const app = express();
const port = 3000;

const urlDatabase = {};  // Almacenamiento en memoria para las URLs

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const urlLarga = urlDatabase[id];
    
    if (urlLarga) {
        res.redirect(urlLarga);
    } else {
        res.status(404).send('URL no encontrada');
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});
```

Este servidor escucha peticiones con un identificador (por ejemplo, '/abc123') y busca la URL larga correspondiente en la base de datos en memoria. Si la encuentra, redirige al usuario a la URL original.  

<br />

## 5. Interfaz de usuario simple

Ahora crearemos una interfaz sencilla para que el usuario introduzca la URL larga y reciba una URL acortada.

### HTML y CSS  

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acortador de URL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        input {
            padding: 10px;
            margin-bottom: 20px;
            width: 80%;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        button {
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Acorta tu URL</h1>
        <input type="text" id="urlLarga" placeholder="Pega la URL larga aquí">
        <br>
        <button onclick="acortarURL()">Acortar URL</button>
        <p id="urlAcortada"></p>
    </div>

    <script>
        function acortarURL() {
            const urlLarga = document.getElementById('urlLarga').value;
            fetch('/acortar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: urlLarga })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('urlAcortada').innerText = `Tu URL corta es: ${data.urlCorta}`;
            });
        }
    </script>
</body>
</html>
```
<br />

### Backend para manejar la solicitud de acortado  

Actualiza el backend para manejar la solicitud de acortar la URL.

```javascript
app.use(express.json());

app.post('/acortar', (req, res) => {
    const { url } = req.body;
    const id = generarIdentificador();
    urlDatabase[id] = url;
    res.json({ urlCorta: `http://localhost:3000/${id}` });
});
```
<br />

Con esto, tu aplicación está lista para acortar URLs y redirigir a los usuarios a las URLs originales.


