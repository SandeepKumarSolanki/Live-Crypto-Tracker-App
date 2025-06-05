import axios from 'axios';
const key = import.meta.env.VITE_CRYPTO_HOST
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_CRYPTO_KEY,
    'x-rapidapi-host':key
};

export const getGlobalStats = async () => {
  const res = await axios.get(`https://${key}/stats`, { headers });
  // console.log("getgloabalstats",res.data.data);
  return res.data.data;
  
};

export const getCryptos = async () => {
  const res = await axios.get(`https://${key}/coins`, { headers });
  // console.log("getCryptos ",res.data.data.coins);
  return res.data.data.coins;
  
};

export const getCryptoDetail = async (id) => {
  const res = await axios.get(`https://${key}coinranking1.p.rapidapi.com/coin/${id}`, { headers });
  // console.log("getCryptoDetail : - ",res.data.data.coin);
  return res.data.data.coin;
  // return res.data.data.coin;
  
};

// export const getCryptoDetail = async (id) => {
//   if (!id) {
//     console.error("Missing crypto ID");
//     return null;
//   }

//   try {
//     const res = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${id}`, {
//       headers,
//       params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl', // USD
//         timePeriod: '24h'
//       }
//     });
//     console.log("getCryptoDetail:", res.data.data.coin);
//     return res.data.data.coin;
//   } catch (error) {
//     console.error("Error in getCryptoDetail:", error.response?.data || error.message);
//     return null;
//   }
// };
// const BASE_URL = 'https://coinranking1.p.rapidapi.com';
