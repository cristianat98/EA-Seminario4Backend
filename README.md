# API-REST

Esto es una API-REST creada usando node.js, mongodb y express 

---

### Indice

- [Descripcion](#descripcion)
- [Instalacion](#instalacion)
- [Ejecucion](#ejecucion)
- [Autores](#autores)

---

## Descripcion

Demo de un Backend simple para el seminario 1 de EA en el que se pueden gestionar las siguientes peticiones:

'/user/' : Devuelve todos los usuarios guardados en MongoDB
'/user/:name' : Devuelve el usuario cuyo nombre se le pasa como parametro en la URL
'/user/register' : Añade un usuario (body:JSON) a la colección 

'/course/' : Devuelve todos los cursos guardados en MongoDB
'/course/add/' : Añade un curso (body:JSON) a la colección

#### Tecnologias

- node.js (Entorno de ejecución de JavaScript)
- express (Framework de servidor web para API-REST)
- mongoose (Libreria JS conexión con MongoDB)
- typescript (Superconjunto de JavaScript)
- cors (Comunicación entre servidores)
- morgan (Mostrar peticiones y respuestas en consola)

---

## Instalacion

Librerias:

```
$ npm i -> Instala el gestor de paquetes de node.js
$ npm init -y -> Crea 'package.json' ¡¡CAMBIAR SCRIPTS!!
$ npm i express cors mongoose morgan -> Instala las dependencias de los modulos de node que necesitamos
$ npm i -d typescript tsc-watch @types/cors @types/express @types/mongoose @types/morgan ->
-> Añade las dependencias de desarrollo y los tipos de TypeScript que vamos a utilizar
$ npx tsc --init -> Crea fichero con opciones del compilador (tsconfig.json)

```

## Ejecucion

- Abrir mongo en un terminal y dejarlo corriendo
- En otro terminal, ejecutar node:
    
        $ npm run dev

- Ejecutar peticiones


## Autores

Iván Requena

Carlos Vázquez

## Versión 2.0

En esta versión, Cristian Armesto y Miquel Puspa Torres también componentes del grupo 1 de EA, han incorporado diferentes funcionalidades al backend. Primero han creado un Front-End que consume este backend. 
Las modificaciones hechas en el backend, son básicamente, para introducir el uso de sockets.

Para introducir sockets, hemos instalado las dependencias siguientes:

- npm install socket.io
- npm install @types/socket.io -D (para descargarlos en las depenmdencias Dev)

En esta versión tenemos que iniciar los servidores por separado, puesto que un puerto lo consumirá el backend (3000) y otro el servidor de sockets (3001).

Para iniciar el backend debemos introducir el comando:
- npm run dev

Para iniciar el servidor de sockets debemos movernos a al carpeta donde esta el fichero index.js (en nuestro caso es la carpeta src) y allí ejecutar el siguiente comando:
- node index.js

Hasta aquí la explicacón. 

