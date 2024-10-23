---
title: "Cómo comenzar a aportar a proyectos open-source"
description: "Aprende a como aportar a proyctos de código abierto para ganar experiencia, mejorar habilidades, conectarte a la comunidad y más"
layout: "../../../layouts/ArticlesLayout.astro"
---

**Subido:** _09 Octubre 2024_  

<a href="/posts" class="return-page">Regresar a posts</a>

# Cómo Comenzar a Aportar al Open Source en el Desarrollo Web a través de Repositorios en GitHub

El open source (código abierto) es uno de los pilares más importantes en el desarrollo de software. Aportar a proyectos de código abierto no solo te ayuda a mejorar tus habilidades técnicas, sino que también es una excelente manera de conectarte con la comunidad, ganar experiencia en proyectos reales y contribuir a herramientas que benefician a miles de personas.
<br>

## 1. ¿Qué es el Open Source y por qué deberías participar?

El software de código abierto es aquel cuyo código fuente está disponible públicamente para que cualquiera lo vea, use, modifique y distribuya. Las comunidades de código abierto son inclusivas y permiten a los desarrolladores de todos los niveles participar. Los beneficios de involucrarse en proyectos open source incluyen:

- **Aprender de los expertos**: Puedes ver cómo los desarrolladores experimentados estructuran y gestionan proyectos grandes.  

- **Experiencia real**: Trabajar en proyectos utilizados por personas en todo el mundo.

- **Crear tu portafolio**: Las contribuciones a proyectos populares son una excelente adición a tu currículum o perfil de GitHub.

- **Conectar con la comunidad**: Estableces relaciones con otros desarrolladores y equipos de trabajo.
<br>

## 2. Preparando tu Entorno de Desarrollo

Antes de comenzar a contribuir a proyectos de código abierto, debes configurar tu entorno de desarrollo y familiarizarte con GitHub.
<br>

### a. Instalar Git y Crear una Cuenta en GitHub

Lo primero que necesitas es **Git**, una herramienta que te permite gestionar versiones de tu código. Sigue estos pasos:

- **Instalar Git**: Puedes descargar Git desde [git-scm.com](https://git-scm.com/). Sigue las instrucciones para tu sistema operativo.

- **Crear una cuenta en GitHub**: Ve a [GitHub](https://github.com/) y crea una cuenta. Este será tu perfil público donde la gente podrá ver tus contribuciones.

### b. Configurar Git

Después de instalar Git, abre la terminal y configura tu nombre de usuario y correo electrónico para que Git sepa quién eres:
<br>

```bash
 git config --global user.name "Tu Nombre"
 git config --global user.email "tuemail@example.com"
```
<br>

### c. Conocer los Comandos Básicos de Git

Git es una herramienta poderosa, pero al principio solo necesitas conocer algunos comandos básicos:

- **git clone**: Clonar un repositorio a tu máquina local.

- **git status**: Ver los cambios en tu repositorio.

- **git add**: Añadir archivos modificados para que estén listos para ser confirmados.

- **git commit**: Guardar un conjunto de cambios con un mensaje descriptivo.

- **git push**: Enviar tus cambios al repositorio en GitHub.
<br>

## 3. Cómo Elegir el Proyecto Adecuado

Uno de los primeros desafíos es elegir el proyecto correcto para comenzar. Algunos consejos para ayudarte a elegir:

### a. Interés Personal

Busca proyectos relacionados con temas o tecnologías que ya te interesen. Por ejemplo, si te gusta el desarrollo web, busca proyectos que usen JavaScript, TypeScript, React o frameworks como Next.js.

### b. Proyectos con Buena Documentación

Un buen proyecto para principiantes generalmente tiene una buena documentación. Busca proyectos que tengan un **README** claro, una guía de contribución (**CONTRIBUTING.md**) y una **política de código de conducta**. Estos documentos te guiarán sobre cómo configurar el proyecto y contribuir correctamente.

### c. Issues Marcados como "Good First Issue" o "Help Wanted"

En GitHub, los mantenedores de proyectos a menudo etiquetan problemas con "good first issue" o "help wanted" para indicar que esos problemas son ideales para nuevos contribuyentes. Estos son los más recomendados para comenzar, ya que suelen ser problemas pequeños o bien definidos.

Puedes buscar estos issues utilizando la siguiente URL:
<br>

```
https://github.com/issues?q=is:open+is:issue+label:%22good%20first%20issue%22
```
<br>

## 4. Cómo Contribuir

Una vez que hayas encontrado un proyecto que te interese, estos son los pasos para contribuir:
<br>

### a. Clonar el Proyecto

Cuando hayas encontrado un issue en el que quieras trabajar, el primer paso es **clonar** el repositorio del proyecto en tu máquina local.

```bash
git clone https://github.com/nombre-del-proyecto/nombre-del-repositorio.git
```
<br>

### b. Crear una Rama

Es importante no trabajar directamente en la rama principal del proyecto. En su lugar, crea una nueva rama para hacer tus cambios.

```bash
git checkout -b nombre-de-la-rama
```
<br>

### c. Hacer Cambios Localmente

Haz los cambios necesarios en tu rama local, asegurándote de seguir las guías de estilo del proyecto. Si es necesario, actualiza o crea nuevos tests y asegúrate de que pasen correctamente antes de subir tu código.
<br>

### d. Confirmar tus Cambios

Cuando hayas terminado de hacer tus cambios, usa los comandos de Git para **agregar** y **confirmar** los cambios.
<br>

```bash
git add .
git commit -m "Descripción breve de los cambios"
```
<br>

### e. Enviar tus Cambios a GitHub

Después de confirmar tus cambios, envíalos al repositorio en GitHub.
<br>

```bash
git push origin nombre-de-la-rama
```
<br>

### f. Crear un Pull Request

Una vez que tus cambios están en tu repositorio en GitHub, debes **crear un pull request (PR)**. Esto permite que los mantenedores del proyecto revisen tu código antes de fusionarlo en la rama principal.

Ve al repositorio en GitHub.
Haz clic en **New Pull Request**.
Completa el formulario proporcionando detalles claros sobre qué has cambiado y por qué.
<br>

## 5. Responder a la Retroalimentación

Es probable que los mantenedores del proyecto te pidan cambios o mejoras en tu código. Esto es normal, ya que quieren asegurarse de que el código que se fusiona mantenga la calidad del proyecto.

Responde a los comentarios, realiza los cambios solicitados y actualiza tu pull request. Mantén una actitud positiva y abierta a aprender de la retroalimentación.
<br>

## 6. Construir tu Trayectoria en Open Source

Después de tu primera contribución, sigue buscando nuevos issues y desafíos dentro del proyecto. Puedes continuar contribuyendo al mismo proyecto o explorar otros. Con el tiempo, ganarás más confianza y comenzarás a trabajar en problemas más complejos.

Algunas formas de seguir mejorando tu participación incluyen:

- **Refactorizar código**: Busca oportunidades para mejorar la estructura del código existente.

- **Mejorar la documentación**: A veces, los proyectos necesitan más ayuda en la documentación que en el código.

- **Crear tus propios proyectos open source**: Si tienes una idea única, puedes crear tu propio proyecto y abrirlo a la comunidad.
<br>

## 7. Recursos Adicionales

- [Guía oficial de GitHub para Contribuir a Proyectos Open Source](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

- [Awesome for Beginners](https://github.com/MunGell/awesome-for-beginners): Lista de proyectos open source con issues para principiantes.

- [First Contributions](https://github.com/firstcontributions/first-contributions): Un tutorial práctico para hacer tu primera contribución a GitHub.


