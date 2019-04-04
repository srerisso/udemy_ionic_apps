# Udemy Ionic course

## 1 - Introducción al curso de Ionic 2.

## 2 - Introducción a Ionic.

- Qué es Ionic 2?. Refrescar Angular.
- Ionic 2 y Ionic 3.
- La documentación de Ionic.
- Registrarse en ionicframework.com
- Apps viejas en el dashboard.
- Creando 1a app en Ionic.

```
> ionic start myApp tabs
> cd myApp
> ionic serve
```

Comandos del CLI

```
> sudo npm install -g ionic@latest
```

```
> ionic start myNewProject
```

```
> sudo npm install -g cordova
> ionic cordova --help
> ionic cordova run ios

```

Comandos del CLI de ionic :

```
build
docs
generate
ionicframeworklink
login
...
```

Generar una página del proyecto, y un provider.

```
> ionic generate page login
> ionic g provider usuario
```

Comando para crear la plataforma (Android o IOS)

```
> ionic cordova platform add android

```

Comandos que arreglan problemas

```
> ionic cordova platform remove android
> ionic cordova platform add android@6.4.0
> ionic cordova build android
```

Probar Ionic DevApp. Creo una nueva app Ionic, 'misTabs'. En el directorio test.


```
> ionic start misTabs tabs
```

Servimos la app con -c y comprobamos en el móvil, en la app Ionic DevApp.

```
> ionic serve -c
```


## 3 - Sonidos App

- 1- Creación de proyectos en blanco.
- 2- Reproducir sonidos
- 3- Uso de componentes como el ion-list y ion-items
- 4- Usar directivas de Angular
- 5- Evento click/tap
- 6- Hacer 'pull' para refrescar nuestra app
- 7- Deslizar para eliminar
- 8- Cambiar el orden de los elementos de una lista
- 9- Uso de elementos estáticos para nuestra app

Diagrama de la app. En Sketch, o Pencil, o aunque sea en papel.

Iniciando la app de sonidos.

Tengo que utilizar Ioinic 4. En el curso, utiliza versión 2de Ionic, pero ya está deshabilitada.

```
> ionic start sonidos4

> ionic serve

```

Creando listas de Ionic con ion-list, ion-item.

A partir de Ionic 4, podemos elegir entre Angular, Javascript, React o VueJS para el código javascript.

Elegimos una Avatar List, de [Ionic components](https://ionicframework.com/docs/api/list)

Evento click dentro de un ion-item.

Afinando los controles de la app de audio.

Deslizar para borrar ion-item-sliding.

Refrescar la página cuando hacemos un pull hacia abajo.



## 10 - App Tracker Taxis.


## 16 - Reforzamiento angular
