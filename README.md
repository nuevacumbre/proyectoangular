# proyectoangular
Curso Angular de Escalab

Profesor: Jaime De la Fuente

Para realizar la instalación del sistema, se debe ejecutar MySql Cli con motivo de crear la base de datos cuyo archivo SQL se encuentra en la carpeta database, 
luego el primer paso es ejecutar la siguiente consulta en MySql: CREATE DATABASE ng_games_db; 

El siguiente paso es ejecutar un terminal con el comando NPM i; en la carpeta server, para luego ejecutar npm run build

En otro terminal ejecutaremos en servidor con node build/index.js

En nuestro tercer terminal correremos el comando ng s -o para ejecutar nuestro sistema en el http://localhost:4200

/****/
Se evaluará:
1.- Arquitectura             			OK
2.- Uso de módulos           			OK
3.- Manejo de rutas				OK	
4.- Lazy load					OK
5.- Uso de servicios y consumo de apis     	OK
6.- Metodo de Autenticación			OK
7.- Uso de pipes y directivas      	 	OK PIPE FECHA y MAYUSCULA
8.- Comunicación entre componentes		OK
9.- Uso de formularios reactivos		OK  RxJS
10.- Uso de guards en al menos 2 rutas		OK  ADD GAME & PROFILE
BONUS: Interceptors
