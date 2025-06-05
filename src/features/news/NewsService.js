// src/features/news/NewsService.js

import axios from 'axios';

const options = {
  method: 'GET',
  url: import.meta.env.VITE_NEWS_API,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_NEWS_KEY, // Replace with your actual API key
    'x-rapidapi-host': import.meta.env.VITE_NEWS_HOST,
  },
};

export const fetchNewsData = async () => {
  try {
    const response = await axios.request(options);

    // Optional: log for debugging
    // console.log("News API Response:", response.data);

    // Safely return the correct structure
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    return []; // Return empty array on error to avoid breaking UI
  }
};
