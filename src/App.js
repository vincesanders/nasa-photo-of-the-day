import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Carousel from './components/Caousel';
import Banner from './components/Banner';
import InfoCard from './components/InfoCard';

function App() {
  const [nasaPhotoDataArray, setNasaPhotoDataArray] = useState([]); //default state is an empty object
  let days = ['12', '11', '09', '08', '06', '03']; //array of days we want to access
  let arr = [];

  async function getData() {
    for (let day of days) { //APOD for last 7 days from 9th
      await axios.get(`https://api.nasa.gov/planetary/apod?api_key=8ntYj91MnxSsgErcVhx6DKFpoNzyO5uSDV1ZIRaK&date=2019-12-${day}`).then(res => {
        arr.push(res.data);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  useEffect(() => {
    getData();
    setNasaPhotoDataArray(arr);
  }, []); //always put an empty array by default to avoid an infinite loop.

  return (
    <div >
      {console.log(nasaPhotoDataArray)}
      <Carousel dataArray={nasaPhotoDataArray} />
      {/* <Banner imageURL={nasaPhotoData.url} title={nasaPhotoData.title} /> */}
      {/* <InfoCard title={nasaPhotoData.title} date={nasaPhotoData.date} explanation={nasaPhotoData.explanation} /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket ship'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
