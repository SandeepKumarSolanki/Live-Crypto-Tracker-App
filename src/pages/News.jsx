import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';
import NewsCard from '../components/NewsCard';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';

const News = () => {
  const dispatch = useDispatch();
  const { newsList, status } = useSelector((state) => state.news);
  const [searchTerm, setSearchTerm] = useState('');
  console.log("NewsList :- ", newsList)
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Apply filtering only when searchTerm has content
  const displayedNews =
    searchTerm.trim() === ''
      ? newsList
      : newsList.filter((news) =>
          news.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

  if (status === 'loading') return <Loader />;
  if (status === 'failed')
    return <div className="text-red-500 text-center">Failed to load news.</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search input */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
          ✨ Current News
        </h2>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* NewsList */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {newsList.length > 0 ? (
        newsList.map((news, index) => (
          console.log("NewsCard :- ", news),
          <NewsCard key={index} news={news} />
        ))
      ) : (
        <p className="text-center w-full col-span-full">
          No news articles found.
        </p>
      )}
    </div>

      {/* News grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {displayedNews.length > 0 ? (
          displayedNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))
        ) : (
          <p className="text-center w-full col-span-full">
            No news articles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
