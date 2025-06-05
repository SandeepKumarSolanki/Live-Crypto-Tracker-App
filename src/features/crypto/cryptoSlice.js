import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGlobalStats, getCryptos, getCryptoDetail } from './CryptoService';

export const fetchGlobalStats = createAsyncThunk('crypto/fetchGlobalStats', getGlobalStats);
export const fetchCryptos = createAsyncThunk('crypto/fetchCryptos', getCryptos);
export const fetchCryptoDetail = createAsyncThunk('crypto/fetchCryptoDetail', getCryptoDetail);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    globalStats: {},
    cryptos: [],
    selectedCrypto: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalStats.fulfilled, (state, action) => {
        state.globalStats = action.payload;
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptoDetail.fulfilled, (state, action) => {
        state.selectedCrypto = action.payload;
      });
  }
});

export default cryptoSlice.reducer;