import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

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
        return <p><FormattedMessage id="LoadingCoffeeDetails" /></p>;
    }

    return (
        <div className="container">
            <h2 className="mt-4"><FormattedMessage id="CafeDetail" /></h2>
            <div className="card">
                <img src={coffee.imagen} className="card-img-top" alt={coffee.nombre} style={{ width: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{coffee.nombre}</h5>
                    <p className="card-text">
                        <strong><FormattedMessage id="CropDate" />:</strong> {coffee.fecha_cultivo}<br />
                        <strong><FormattedMessage id="Notes" />:</strong> {coffee.notas}<br />
                        <strong><FormattedMessage id="CropHeight" />:</strong> {coffee.altura} <FormattedMessage id="Meters" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;
