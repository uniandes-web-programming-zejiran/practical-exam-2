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
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{coffee.nombre}</h5>
                    <p id="crop-date">{coffee.fecha_cultivo}</p>
                    <img src={coffee.imagen} className="card-img-top" alt={coffee.nombre} style={{ width: '200px' }} /><br /><br />
                    <p className="card-text">
                        <FormattedMessage id="Notes" /><br />{coffee.notas}<br /><br />
                        <strong><FormattedMessage id="CropHeight" /><br /> {coffee.altura} <FormattedMessage id="Meters" /></strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;
