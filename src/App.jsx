import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";
import getWeather from "./services/getWeather";

function App() {
  const { data, city, demo, handleSubmit } = getWeather();

  return (
    <>
      <Display def={demo} weather={data} fnSubmit={handleSubmit}></Display>
    </>
  );
}

export default App;
