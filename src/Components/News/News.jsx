import React, {useState, useEffect} from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=619410a8f5144d09a3fc9c96b6f911a2")
        .then(res => {
            setNews(res.data.articles);
        });
    },[]);

    return (
      <div>
        <div className="card" style="width: 18rem;">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
}

export default News;