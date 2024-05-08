import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchArticle } from '../Redux/Actions/SearchActions';
import './NewsItem.css'; // Import custom CSS file for component styling

const NewsItem = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.articles);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(searchArticle('news'));
        console.log(response); // Debugging: Check response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [dispatch]);

  return (
    <div className="news-container"> {/* Apply custom container class */}
      {searchResults.map((result, index) => (
        <div className="news-item" key={index}> {/* Apply custom item class */}
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          <img src={result.urlToImage} alt={result.title} />
          {/* Add other news item details as needed */}
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
