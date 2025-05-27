import React from 'react';

const Liste = () => {
  // Simule des données de voyages
  const voyages = [
    { id: 1, destination: 'Bali', prix: '999€' },
    { id: 2, destination: 'Tokyo', prix: '1299€' },
    { id: 3, destination: 'Reykjavik', prix: '1199€' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Nos offres</h2>
      <ul className="space-y-4">
        {voyages.map((voyage) => (
          <li key={voyage.id} className="border p-4 rounded shadow">
            <h3 className="text-xl">{voyage.destination}</h3>
            <p className="text-gray-600">{voyage.prix}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Liste;
