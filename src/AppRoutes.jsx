import { Routes, Route } from 'react-router-dom';

import UnderConstruction from './pages/UnderConstruction';
import CardMenu from './pages/CardMenu';

const SITE_UNDER_CONSTRUCTION = true;

const AppRoutes = () => {
  if (SITE_UNDER_CONSTRUCTION) {
    return (
      <Routes>
        {/* HOME EN CONSTRUCCIÓN */}
        <Route path="/" element={<UnderConstruction />} />

        {/* MENU PÚBLICO SIN LAYOUT */}
        <Route path="/menu" element={<CardMenu />} />

        {/* BLOQUEO TOTAL */}
        <Route path="/*" element={<UnderConstruction />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* AQUÍ LUEGO VUELVES A PONER Layout, Home, etc */}
    </Routes>
  );
};

export default AppRoutes;
