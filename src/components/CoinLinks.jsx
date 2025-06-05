import React from 'react';
import { ExternalLink } from 'lucide-react';

const getTypeColor = (type) => {
  const map = {
    cmc: 'bg-yellow-400',
    website: 'bg-blue-500',
    explorer: 'bg-green-500',
    github: 'bg-gray-800',
    reddit: 'bg-red-500',
    telegram: 'bg-blue-400',
    whitepaper: 'bg-purple-600',
    bitcointalk: 'bg-orange-600',
  };
  return map[type] || 'bg-gray-400';
};

const CoinLinks = ({ links }) => {
  if (!links?.length) return null;


  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🔗 Official Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full ${getTypeColor(link.type)}`}
              ></span>
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize">{link.type}</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </a>
        ))}
        
      </div>
    </div>
  );
};

export default CoinLinks;
