import { Link } from 'react-router-dom';

const CryptoCard = ({ coin }) => (
  <Link to={`/cryptocurrencies/${coin.uuid}`} className="block p-4 bg-white rounded shadow hover:scale-105 transition">
    <h2 className="text-lg font-semibold">{coin.name}</h2>
    <img src={coin.iconUrl} className='w-10 h-10 md:h-14 md:w-14 mt-4 mb-2' />
    <p>Price: ${coin.price}</p>
    <p>Market Cap: ${coin.marketCap}</p>
    {/* <h1>Hellow World</h1> */}
  </Link>
);

export default CryptoCard;