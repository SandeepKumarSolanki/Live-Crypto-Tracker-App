import React from 'react';
import { bestCoins, newestCoins } from '../data/highlightedCoins';

const CoinCard = ({ coin }) => (
  <a
    href={coin.coinrankingUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition duration-200 text-center"
  >
    <img
      src={coin.iconUrl}
      alt={coin.name}
      className="w-16 h-16 mx-auto mb-3 rounded-full object-contain"
    />
    <h3 className="text-lg font-bold">{coin.name}</h3>
    <p className="text-gray-600">{coin.symbol}</p>
  </a>
);

const CoinsHighlights = () => {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🔥 Best Coins</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {bestCoins.map((coin) => (
          <CoinCard key={coin.uuid} coin={coin} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">🆕 Newest Coins</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newestCoins.map((coin) => (
          <CoinCard key={coin.uuid} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CoinsHighlights;
