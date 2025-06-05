import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow py-4 px-6 flex justify-between ">
    <h1 className="font-bold text-xl">CryptoVerse</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      <Link to="/cryptocurrencies" className="hover:text-blue-500">Cryptos</Link>
      <Link to="/news" className="hover:text-blue-500">News</Link>
    </div>
  </nav>
);

export default Navbar;