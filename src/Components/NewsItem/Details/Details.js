import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchArticle } from '../Redux/Actions/SearchActions';
import './Details.css'; // Import custom CSS file for component styling

const Details = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.articles);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(searchArticle('details'));
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
    <div className="details-container"> {/* Apply custom container class */}
      {searchResults.map((result, index) => (
        <div className="details-item" key={index}> {/* Apply custom item class */}
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          <img src={result.urlToImage} alt={result.title} />
          {/* Add other details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Details;
