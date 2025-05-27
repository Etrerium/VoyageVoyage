import React, { useState } from 'react';

const Reservation = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleReservation = () => {
    alert(`Réservation confirmée pour ${nom} (${email})`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Réserver un voyage</h2>
      <input
        type="text"
        placeholder="Nom"
        className="border p-2 rounded mb-2 block w-full"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded mb-2 block w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleReservation}
      >
        Réserver
      </button>
    </div>
  );
};

export default Reservation;
