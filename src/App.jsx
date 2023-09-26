import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";
import getWeather from "./services/getWeather";

function App() {
  const { userLocation, data, five, demo, handleSubmit } = getWeather();

  return (
    <>
      <Display
        def={demo}
        weather={data}
        fnSubmit={handleSubmit}
        fives={five}
        myLocation={userLocation}
      ></Display>
    </>
  );
}

export default App;
