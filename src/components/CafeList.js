import React, { useState, useEffect } from 'react';
import CoffeeDetail from './CoffeeDetail';
import { FormattedMessage } from 'react-intl';

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
            <div className="coffee-container">
                <div className="coffee-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><FormattedMessage id="Name" /></th>
                                <th><FormattedMessage id="Type" /></th>
                                <th><FormattedMessage id="Region" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cafes.map((cafe) => (
                                <tr key={cafe.id} onClick={() => handleCoffeeSelect(cafe.id)}>
                                    <td><strong>{cafe.id}</strong></td>
                                    <td>{cafe.nombre}</td>
                                    <td>{cafe.tipo}</td>
                                    <td>{cafe.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {selectedCoffee && (
                    <div className="coffee-detail">
                        <CoffeeDetail coffeeId={selectedCoffee} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CafeList;
