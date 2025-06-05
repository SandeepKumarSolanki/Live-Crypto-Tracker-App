import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cryptocurrencies from './pages/Cryptocurrencies';
import CryptoDetail from './pages/CryptoDetail';
import News from './pages/News';
import CoinsHighlights from './pages/CoinsHighlights';

function App() {
  return (
 
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highlights" element={<CoinsHighlights />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/cryptocurrencies/:id" element={<CryptoDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<div className='text-center'>404 Not Found</div>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;