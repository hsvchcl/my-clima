# MyClima

![Development server](https://firebasestorage.googleapis.com/v0/b/hsvchcl-my-clima.appspot.com/o/my-clima.gif?alt=media&token=afec8d2f-b7d2-40c7-880a-725656c1c40b)

Consulta informacion del clima en tiempo real.

## Demo
Si eres ansioso como yo, puedes ir a ver la demo directamente [Ver Demo ](https://hsvchcl-my-clima.web.app/)

## Entorno local
1. Clonar repositorio
2. ejecutar `npm install`
3. levantar app con `ng serve`

## Entorno local Docker
1. Build del proyecto:

    `npm run build`
2. Creacion de la imagen

    `docker build -t nginx:myclima .`
3. Ejecucion del contenedor:

    `docker run --name my-clima-app -d -p 8080:80 nginx:myclima`





