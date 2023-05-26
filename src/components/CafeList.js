import React, { useState, useEffect } from 'react';
import CoffeeDetail from './CoffeeDetail';

const CafeList = () => {
    const [cafes, setCafes] = useState([]);
    const [selectedCoffee, setSelectedCoffee] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCafes(data))
            .catch(error => console.error(error));
    }, []);

    const handleCoffeeSelect = (coffeeId) => {
        setSelectedCoffee(coffeeId);
    };

    return (
        <div className="container">
            <h2 className="mt-4">Listado de cafés</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Región</th>
                    </tr>
                </thead>
                <tbody>
                    {cafes.map((cafe) => (
                        <tr key={cafe.id} onClick={() => handleCoffeeSelect(cafe.id)}>
                            <td>{cafe.id}</td>
                            <td>{cafe.nombre}</td>
                            <td>{cafe.tipo}</td>
                            <td>{cafe.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedCoffee && <CoffeeDetail coffeeId={selectedCoffee} />}
        </div>
    );
};

export default CafeList;
