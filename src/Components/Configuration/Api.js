const API_DOMAIN = "https://newsapi.org/v2/everything?q=keyword&apiKey=877963a15492486ca2a85b2c521d2894";
const API_SEARCH_DOMAIN = "https://newsapi.org/v2/everything?q=title,content&apiKey=877963a15492486ca2a85b2c521d2894";
const API_KEY = "877963a15492486ca2a85b2c521d2894";  // Updated API key
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;