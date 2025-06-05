import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoDetail } from '../features/crypto/cryptoSlice';
import Loader from '../components/Loader';
import CoinLinks from '../components/CoinLinks';

const CryptoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCrypto, status } = useSelector((state) => state.crypto);

  console.log("CryptoDetails :- ", selectedCrypto)
  console.log("Links :- ", selectedCrypto.links)

  // const coinLinks = selectedCrypto.link;

  useEffect(() => {
    dispatch(fetchCryptoDetail(id));
  }, [dispatch, id]);

  if (status === 'loading') return <Loader />;

  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <div>
          <h1 className="text-2xl font-bold mb-2">{selectedCrypto.name}</h1>
          <img src={selectedCrypto.iconUrl} className='h-30 w-30 mt-5 mb-5 ' />
          <p className="mb-2 text-xl">Price: ${selectedCrypto.price}</p>
          <p className="mb-2 text-xl">Market Cap: ${selectedCrypto.marketCap}</p>
          <p className="mb-2 text-xl">Rank: {selectedCrypto.rank}</p>
          <p className="mb-2 text-xl">24h Volume: ${selectedCrypto['24hVolume']}</p>
        </div>
        <div className='bg-pink-200 p-2 rounded '>
          <p >{selectedCrypto.description}</p>
        </div>
        <div>
          <CoinLinks links={selectedCrypto.links} />
        </div>
      </div>
    </>
  );
};

export default CryptoDetail;