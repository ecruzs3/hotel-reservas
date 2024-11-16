import React, { useState } from 'react';

const ReservaForm = ({ onSubmit }) => {
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [tipoHabitacion, setTipoHabitacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombreCliente, fechaInicio, fechaFin, tipoHabitacion });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre del cliente"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                required
            />
            <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                required
            />
            <input
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
                required
            />
            <select
                value={tipoHabitacion}
                onChange={(e) => setTipoHabitacion(e.target.value)}
                required
            >
                <option value="Sencilla">Sencilla</option>
                <option value="Doble">Doble</option>
                <option value="Suite">Suite</option>
            </select>
            <button type="submit">Registrar Reserva</button>
        </form>
    );
};

export default ReservaForm;
