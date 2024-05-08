import React from "react";
import axios from "axios"

function News() {
    const getNews = () => {
        axios.get("https://newsapi.org/v2/everything?q=keyword&apiKey=877963a15492486ca2a85b2c521d2894")
        .then(response => response.json())
    }
}