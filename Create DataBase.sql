-- Crear la base de datos
CREATE DATABASE hotel_reservas;

USE hotel_reservas;

CREATE TABLE reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tipo_habitacion VARCHAR(50) NOT NULL
);
