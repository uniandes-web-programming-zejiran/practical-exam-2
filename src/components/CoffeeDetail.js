import React, { useState, useEffect } from 'react';

const CoffeeDetail = ({ coffeeId }) => {
    const [coffee, setCoffee] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/cafes/${coffeeId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Coffee not found');
                }
            })
            .then(data => setCoffee(data))
            .catch(error => console.error(error));
    }, [coffeeId]);

    if (!coffee) {
        return <p>Loading coffee details...</p>;
    }

    return (
        <div className="container">
            <h2 className="mt-4">Detalle del café</h2>
            <div className="card">
                <img src={coffee.imagen} className="card-img-top" alt={coffee.nombre} style={{ width: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{coffee.nombre}</h5>
                    <p className="card-text">
                        <strong>Fecha de cultivo:</strong> {coffee.fecha_cultivo}<br />
                        <strong>Notas:</strong> {coffee.notas}<br />
                        <strong>Altura del cultivo:</strong> {coffee.altura} metros
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;
