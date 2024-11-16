import React from 'react';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';

const App = () => {
    const handleReservaSubmit = (reserva) => {
        fetch('http://localhost:8080/api/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reserva),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Reserva registrada', data);
        });
    };

    return (
        <div>
            <h1>Sistema de Gestión de Reservas de Hotel</h1>
            <ReservaForm onSubmit={handleReservaSubmit} />
            <ReservaList />
        </div>
    );
};

export default App;
