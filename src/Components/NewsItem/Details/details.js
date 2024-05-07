import React, { useState, useEffect } from 'react';

const Details = () => {
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=877963a15492486ca2a85b2c521d2894');
        const data = await response.json();
        // Assuming detailData is a single object representing the details of a news item
        setDetailData(data.articles[0]); // Assuming you want to display details of the first news item
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {detailData && (
        <div>
          <h2>{detailData.title}</h2>
          <p>{detailData.description}</p>
          <img src={detailData.urlToImage} alt={detailData.title} />
          {/* Add other details as needed */}
        </div>
      )}
    </div>
  );
};

export default Details;
