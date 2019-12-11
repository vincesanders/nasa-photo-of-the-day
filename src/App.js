import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Banner from './components/Banner';
import InfoCard from './components/InfoCard';

function App() {
  const [nasaPhotoData, setNasaPhotoData] = useState({}); //default state is an empty object

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(res => {
      console.log(res);
      setNasaPhotoData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []); //always put an empty array by default to avoid an infinite loop.

  return (
    <div className="App">
      <Banner imageURL={nasaPhotoData.url} title={nasaPhotoData.title} />
      <InfoCard title={nasaPhotoData.title} date={nasaPhotoData.date} explanation={nasaPhotoData.explanation} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket ship'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
