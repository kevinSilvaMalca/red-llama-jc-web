import './App.css';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import DataProvider from './context/Context';
import Spinner from './components/Spinner';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <DataProvider>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </DataProvider>

      <ScrollToTopButton />
    </>
  );
}

export default App;
