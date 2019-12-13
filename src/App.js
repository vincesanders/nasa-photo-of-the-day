import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Carousel from './components/Caousel';

function App() {
  // const [nasaPhotoDataArray, setNasaPhotoDataArray] = useState([]); //default state is an empty object
  const [photo1Data, setPhoto1Data] = useState({});
  const [photo2Data, setPhoto2Data] = useState({});
  const [photo3Data, setPhoto3Data] = useState({});
  const [photo4Data, setPhoto4Data] = useState({});
  const [photo5Data, setPhoto5Data] = useState({});
  const [photo6Data, setPhoto6Data] = useState({});
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
    setPhoto1Data(arr[0]);
    setPhoto2Data(arr[1]);
    setPhoto3Data(arr[2]);
    setPhoto4Data(arr[3]);
    setPhoto5Data(arr[4]);
    setPhoto6Data(arr[5]);
  }

  useEffect(() => {
    getData();
  }, []); //always put an empty array by default to avoid an infinite loop.

  return (
    <div >
      <Carousel photo1={photo1Data} photo2={photo2Data} photo3={photo3Data} photo4={photo4Data} photo5={photo5Data} photo6={photo6Data} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket ship'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
