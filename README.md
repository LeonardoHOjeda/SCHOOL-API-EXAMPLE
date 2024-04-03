# SCHOOL API
## Descripcion
Este proyecto es una API que permite realizar operaciones CRUD sobre una base de datos de estudiantes y profesores.

## Pasos para levantar el proyecto
Para levantar el proyecto, se debe de clonar el repositorio usando el siguiente comando:
```bash
git clone git@gitlab.codiceglobal.com:leonardo.hernandez/school_api.git
```
Una vez descargado el repositorio, se deben de instalar las dependencias usando el siguiente comando:
```bash
npm install
```
Como paso final, se debe de crear un archivo `.env` en la raiz del proyecto con las variables de entorno que se encuentran en el archivo `.env.example`.

## Base de datos
La base de datos que se utiliza en el proyecto es MySQL.
Se tiene un archivo `docker-compose.yml` que permite levantar un contenedor de MySQL y PHPMyAdmin con las configuraciones necesarias para el proyecto.
Se sugiere que se utilice este archivo para levantar la base de datos usando el comando `docker compose up -d`, de igual manera se sugiere que la base de datos se llame `school_db`.

## ORM
El proyecto utiliza el ORM Prisma, por lo que se debe de ejecutar el siguiente comando para la creación de la base de datos (no es necesario crear el schema, ya que Prisma lo hace por nosotros):
```bash
npx prisma migrate dev --name init
```
### Seeders
Para llenar la base de datos con datos de prueba, se debe de ejecutar el siguiente comando:
```bash
npx prisma db seed --preview-feature
```

### Creacion de migraciones
Para crear una migración (cuando se modifican los modelos en el archivo `schema.prisma`), se debe de ejecutar el siguiente comando:
```bash
npx prisma migrate dev --name <nombre de la migracion>
```



### Aplicacion de migraciones
Para aplicar una migración, se debe de ejecutar el siguiente comando:
```bash
npx prisma migrate deploy
```
## Ejecucion
Para ejecutar el proyecto, se debe de ejecutar el siguiente comando:
```bash
npm run dev
```
## Pruebas
Para ejecutar las pruebas, se debe de ejecutar el siguiente comando:
```bash
npm run test
```



## Uso
