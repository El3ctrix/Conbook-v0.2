# Conbook-v0.2
Conbook (Proyecto para la materia optativa: Ingeniería de Software 2)

_Herramienta para gestion de Publicaciones en la Facultad de Ciencias_

## Comenzando 🚀

_Antes que nada, se necesita cumplir con algunos pre-requisitos para poder correr el programa_

### Pre-requisitos 📋

_Tener instaladas las siguientes herramientas_
* [Maven](https://maven.apache.org/) - Manejador de dependencias en su version 3.6.0
* [PostgreSQL](https://www.postgresql.org/) - Base en su version 11
* [Intellij IDEA](https://www.jetbrains.com/idea/) - IDE 

### Instalacion y como Ejecutar 🔧

_Una vez que se cumplan los requisitos que anteriormente se mencionan, se debe proceder como sigue:_

_1. Crear la base de datos conforme al esquema que se encuntra en este repositorio:_
* Creamos la base de datos, creamos el esquema y accedemos a la base:
```
$ sudo -u postgres psql
# CREATE DATABASE Conbook WITH OWNER postgres;
# CREATE SCHEMA "BaseLib" AUTHORIZATION postgres;
# \c conbook
```
* Creamos las tablas que se especifican en el query "Libros.sql":
```
# CREATE TABLE "BaseLib".Libros(Id_Libro serial,
	                              Nombre_Libro varchar(200) . . .);
```


## Herramientas de Desarrollo 🛠️

_A continuacion se muestran las herramientas que se utilizaron para llevar a cabo el desarrollo del proyecto:_

* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [VisualParadigm](https://www.visual-paradigm.com/) - Diagramador UML
* [PostgreSQL](https://www.postgresql.org/) - Manejador de Bases de Datos
* [Intellij IDEA](https://www.jetbrains.com/idea/) - IDE 
* [GitHub](https://github.com/) - Controlador de Versiones

## Equipo de Desarollo ✒️

_Todos los implicados en la realizacion del proyecto se muestran a continuacion:_
* **Arguello Carrillo Lizbeth** - [Lizbethac16](https://github.com/Lizbethac16)
* **González Durán Erick** - [El3ctrix](https://github.com/El3ctrix)
* **Salcedo Ramos Carlos Uriel** - [CarlosSRamos](https://github.com/CarlosSRamos)




