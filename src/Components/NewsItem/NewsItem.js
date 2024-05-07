import React, { useState, useEffect } from 'react';

const NewsItem = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=877963a15492486ca2a85b2c521d2894');
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsData.map((newsItem, index) => (
        <div key={index}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
          <img src={newsItem.urlToImage} alt={newsItem.title} />
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
