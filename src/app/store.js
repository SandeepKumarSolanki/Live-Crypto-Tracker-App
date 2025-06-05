import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../features/crypto/cryptoSlice';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
  reducer: {
    crypto: cryptoReducer,
    news: newsReducer
  }
});