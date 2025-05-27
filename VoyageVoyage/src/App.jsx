import React, { useState } from 'react';
import Accueil from './pages/Accueil';
import Liste from './pages/Liste';
import Recherche from './pages/Recherche';
import Reservation from './pages/Reservation';

const App = () => {
  const [page, setPage] = useState('accueil');

  const renderPage = () => {
    switch (page) {
      case 'accueil':
        return <Accueil />;
      case 'liste':
        return <Liste />;
      case 'recherche':
        return <Recherche />;
      case 'reservation':
        return <Reservation />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <a href="#" onClick={() => setPage('accueil')}>Accueil</a>
        <a href="#" onClick={() => setPage('liste')}>Liste</a>
        <a href="#" onClick={() => setPage('recherche')}>Recherche</a>
        <a href="#" onClick={() => setPage('reservation')}>Réservation</a>
      </nav>
      <main className="p-6">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
