import React, { useState } from 'react';

const Recherche = () => {
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    alert(`Recherche de voyages vers ${destination}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Rechercher un voyage</h2>
      <input
        type="text"
        placeholder="Destination"
        className="border p-2 rounded mr-2"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Rechercher
      </button>
    </div>
  );
};

export default Recherche;
