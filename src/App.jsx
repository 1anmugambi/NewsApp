import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mock from "./Components/Mock/Mock";
import News from "./Components/News/Index";

function App() {


  return (
    <>
      <p>News App</p>
      <Mock />
      <News />
      
    </>
  );
}

export default App;
