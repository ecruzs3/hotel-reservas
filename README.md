# hotel-reservas

Este proyecto es una aplicación de reservas para un hotel, donde se pueden gestionar las reservas de los clientes. Está dividido en dos partes: el backend (con Spring Boot) y el frontend (con React).

Requisitos Previos
Para poder ejecutar este proyecto, se necesita tener instalados los siguientes programas:

Java 17 o superior para el backend (Spring Boot)
Node.js y npm o yarn para el frontend (React)
MySQL (ajustar la configuración en el archivo application.properties).

Backend - Spring Boot
1. Configuración de la Base de Datos
Clonar el repositorio:

git clone https://github.com/ecruzs3/hotel-reservas
cd hotel-reservas-backend
Configura la base de datos en el archivo src/main/resources/application.properties. Basicamente el usuario y contraseña.

2. Ejecutar el Backend
Una vez configurado todo, ve al directorio del backend y ejecuta el siguiente comando para iniciar el servidor:

mvn spring-boot:run
Esto levantará el backend en http://localhost:8080.

Frontend - React
1. Instalación de Dependencias
npm install

2. Ejecutar el Frontend
Para iniciar la aplicación de React, usa el siguiente comando:

npm start
Esto debería abrir la aplicación en http://localhost:3000 en tu navegador.

Conexión entre el Backend y el Frontend
El backend está corriendo en http://localhost:8080 y expone las rutas de la API para gestionar las reservas.
El frontend está en http://localhost:3000 y se comunica con el backend mediante peticiones HTTP (como GET, POST, DELETE).

Estructura del Proyecto

hotel-reservas/
│
├── hotel-reservas-backend/                        # Backend - Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── com/
│   │   │   │   │   ├── hotelreservas/
│   │   │   │   │   │   ├── controller/          # Controladores de la API
│   │   │   │   │   │   ├── model/               # Entidades (Modelo de datos)
│   │   │   │   │   │   ├── repository/          # Repositorios JPA
│   │   │   │   │   │   └── service/             # Servicios de la lógica de negocio
│   │   │   │   │   ├── config/                  # Configuración (CORS)
│   │   │   │   │   │   └── WebConfig.java       # Configuración CORS
│   │   │   │   │   └── HotelReservasApplication.java  # Clase principal del Backend
│   │   ├── resources/
│   │   │   └── application.properties            # Configuración de la base de datos y demás
│   └── pom.xml                                   # Archivo Maven para gestionar dependencias
│
├── hotel-reservas-frontend/                       # Frontend - React
│   ├── public/
│   │   └── index.html                            # HTML base de la aplicación
│   ├── src/
│   │   ├── components/
│   │   │   ├── ReservaList.js                    # Componente que lista las reservas
│   │   │   ├── ReservaForm.js                    # Componente para el formulario de reserva
│   │   ├── App.js                                # Componente principal
│   │   ├── index.js                              # Archivo de entrada de React
│   └── package.json                              # Dependencias de React
│
└── README.md                                     # Documentación del proyecto


Autor
Este proyecto fue desarrollado por Erick Cruz de la UMG como examen final de curso.







