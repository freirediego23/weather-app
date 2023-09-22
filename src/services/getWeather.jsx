import React from "react";
import { useEffect, useState } from "react";

function getWeather() {
  const [data, setData] = useState(null);
  const [demo, setDemo] = useState(null);
  const [city, setCity] = useState(null);

  const getData = async (url, setDato) => {
    const res = await fetch(url);
    const datos = await res.json();

    console.log(datos);
    setDato(datos);
  };

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29ccc5e04463e920ab568d1c65d2d52c`,
      setData
    );
  }, [city]);

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=london&appid=29ccc5e04463e920ab568d1c65d2d52c`,
      setDemo
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cityName = formData.get("cityName");
    console.log(cityName);
    setCity(cityName);
  };

  return { demo, data, handleSubmit };
}

export default getWeather;
