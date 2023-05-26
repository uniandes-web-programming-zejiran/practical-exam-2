import React from 'react';

const CoffeeDetail = ({ coffee }) => {
    return (
        <div className="container">
            <h2 className="mt-4">Detalle del café</h2>
            <div className="card">
                <img src={coffee.imagen} className="card-img-top" alt={coffee.nombre} />
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
