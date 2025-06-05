const NewsCard = ({ news }) => {
  const { summary, timestamp_utc } = news;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <p className="text-sm text-gray-700 mb-4">
        {summary || 'No summary available'}
      </p>

      <p className="text-xs text-gray-500">
        {timestamp_utc
          ? new Date(timestamp_utc).toLocaleString()
          : 'No timestamp provided'}
      </p>
    </div>
  );
};

export default NewsCard;