import axios from 'axios';
const key = import.meta.env.VITE_CRYPTO_HOST
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_CRYPTO_KEY,
    'x-rapidapi-host':key
};

export const getGlobalStats = async () => {
  const res = await axios.get(`https://${key}/stats`, { headers });
 
  return res.data.data;
  
};

export const getCryptos = async () => {
  const res = await axios.get(`https://${key}/coins`, { headers });
  return res.data.data.coins;
  
};

export const getCryptoDetail = async (id) => {
  const res = await axios.get(`https://${key}/coin/${id}`, { headers });
  return res.data.data.coin;
  
};


