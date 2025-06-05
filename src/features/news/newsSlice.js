import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewsData } from './NewsService';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const data = await fetchNewsData();
  console.log("fetchNewsDataSlice:", data);
  return data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newsList = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
