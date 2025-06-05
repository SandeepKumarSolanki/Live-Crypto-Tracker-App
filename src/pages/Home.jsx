import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGlobalStats, fetchCryptos } from '../features/crypto/cryptoSlice';
import { useNavigate } from 'react-router-dom';
import CryptoCard from '../components/CryptoCard';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { globalStats, cryptos, status } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchGlobalStats());
    dispatch(fetchCryptos());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* 🌍 Global Stats Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
          🌍 Global Crypto Stats
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { label: 'Reference Currency Rate', value: globalStats.referenceCurrencyRate },
            { label: 'Total Coins', value: globalStats.totalCoins },
            { label: 'Total Markets', value: globalStats.totalMarkets },
            { label: 'Total Exchanges', value: globalStats.totalExchanges },
            { label: 'Total Market Cap', value: globalStats.totalMarketCap },
            { label: 'Total 24h Volume', value: globalStats.total24hVolume },
            { label: 'BTC Dominance', value: globalStats.btcDominance?.toFixed(6) },
            { label: 'BTC Market Cap', value: globalStats.btcMarketCap },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-indigo-600 break-words">{stat.value ?? 'N/A'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔗 Navigate to Highlights */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          ✨ Dive Deeper into Best & Newest Coins
        </h2>
        <button
          className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          onClick={() => navigate('/highlights')}
        >
          Explore Highlights 🚀
        </button>
      </section>

      {/* 🚀 Top Cryptos */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          🚀 Top Cryptocurrencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {cryptos.slice(0, 10).map((coin) => (
            <CryptoCard key={coin.uuid} coin={coin} />
          ))}
        </div>
      </section>

       {/* 🔗 Navigate to Highlights */}
       <section className="text-center mt-16 mb-16 ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          ✨ For More Coins Details
        </h2>
        <button
          className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          onClick={() => navigate('/cryptocurrencies')}
        >
          Explore Coins 🚀
        </button>
      </section>
    </div>
  );
};

export default Home;



// {Object.entries(globalStats).map(([key, value]) => (
//   <div key={key} className="bg-white rounded-2xl shadow p-5">
//     <h3 className="text-lg font-semibold text-gray-700 mb-1">{formatKey(key)}</h3>
//     <div className="text-gray-900 font-medium">
//       {typeof value === 'object' ? (
//         Array.isArray(value) ? (
//           <ul className="list-disc pl-4 text-sm">
//             {value.map((item, index) => (
//               <li key={index}>{JSON.stringify(item)}</li>
//             ))}
//           </ul>
//         ) : (
//           <ul className="text-sm text-gray-600">
//             {Object.entries(value).map(([k, v]) => (
//               <li key={k}>
//                 <span className="font-medium">{formatKey(k)}:</span> {v?.toString()}
//               </li>
//             ))}
//           </ul>
//         )
//       ) : (
//         value?.toLocaleString?.() || value
//       )}
//     </div>
//   </div>
// ))}