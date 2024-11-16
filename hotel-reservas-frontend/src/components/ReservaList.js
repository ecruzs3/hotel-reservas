import React, { useState, useEffect } from 'react';

const ReservaList = () => {
    const [reservas, setReservas] = useState([]);

    // Función para obtener las reservas
    const fetchReservas = () => {
        fetch(`http://localhost:8080/api/reservas`)
            .then((response) => response.json())
            .then((data) => setReservas(data));
    };

    // UseEffect para cargar las reservas al inicio
    useEffect(() => {
        fetchReservas();
    }, []);

    // Función para eliminar una reserva
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/reservas/${id}`, {
            method: 'DELETE',
        }).then(() => fetchReservas());  // Refrescar las reservas después de eliminar
    };

    // Función para refrescar las reservas al hacer click en el botón
    const handleRefresh = () => {
        fetchReservas();
    };

    return (
        <div>
            <h2>Lista de Reservas</h2>
            <button onClick={handleRefresh}>Refrescar Lista</button> {/* Botón para refrescar */}
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Fin</th>
                        <th>Tipo de Habitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.nombreCliente}</td>
                            <td>{reserva.fechaInicio}</td>
                            <td>{reserva.fechaFin}</td>
                            <td>{reserva.tipoHabitacion}</td>
                            <td>
                                <button onClick={() => handleDelete(reserva.id)}>Cancelar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservaList;