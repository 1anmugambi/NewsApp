import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mock from './Components/Mock/Mock'
import NewsItem from './Components/NewsItem/NewsItem'
import Details from './Components/NewsItem/Details/Details'

function App() {
  

  return (
    <>
      <p>News App</p>
    <Mock/>
    <NewsItem/>
    <Details/>
    </>
  )
}

export default App
