import React from "react";
import { useEffect, useState } from "react";

function getWeather() {
  const [data, setData] = useState(null);
  const [demo, setDemo] = useState(null);
  const [five, setFive] = useState(null);
  const [city, setCity] = useState(null);

  const getData = async (url, setDato) => {
    const res = await fetch(url);
    const datos = await res.json();

    console.log(datos);
    setDato(datos);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Recibe el nombre de ciudad ingresado por el usuario en la variable city

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29ccc5e04463e920ab568d1c65d2d52c`
        );
        const data = await response.json();
        setData(data);

        // Esta parte se activa cuando se reciben los datos de la ciudad
        // Que ingresa el usuario y usan lat y lon para obtener en la url
        // Para obtener el pronostico de 5 dias

        if (data.coord) {
          const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=29ccc5e04463e920ab568d1c65d2d52c`
          );
          const forecastData = await forecastResponse.json();
          console.log(forecastData);
          setFive(forecastData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

  return { demo, data, five, handleSubmit };
}

export default getWeather;
