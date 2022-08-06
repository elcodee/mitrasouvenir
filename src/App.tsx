import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import DetailProductPage from './pages/detail_product';
import CatalogPage from './pages/catalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/product" element={<DetailProductPage />} />
    </Routes>
  );
}

export default App;
