import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../features/crypto/cryptoSlice';
import CryptoCard from '../components/CryptoCard';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';

const Cryptocurrencies = () => {
  const dispatch = useDispatch();
  const { cryptos, status } = useSelector((state) => state.crypto);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const filteredCryptos = cryptos.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === 'loading') return <Loader />;

  return (
    <div>
      <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredCryptos.map((coin) => (
          <CryptoCard key={coin.uuid} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;