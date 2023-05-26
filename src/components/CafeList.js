import React, { useState, useEffect } from 'react';

const CafeList = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCafes(data))
            .catch(error => console.error(error));
    }, []);

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
                        <tr key={cafe.id}>
                            <td style={{ fontWeight: "bold" }}>{cafe.id}</td>
                            <td>{cafe.nombre}</td>
                            <td>{cafe.tipo}</td>
                            <td>{cafe.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CafeList;
