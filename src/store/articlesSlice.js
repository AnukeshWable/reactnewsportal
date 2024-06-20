import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '9dae0c054b38028d57e2c8797995b46e';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category = 'general') => {
    const response = await axios.get(`https://gnews.io/api/v4/search?q=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`);
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
