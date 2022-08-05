import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
