import React from "react";
import { useEffect, useState } from "react";
import "./display.css";
import fourDays from "../services/fourDays";
import Images from "../services/Images";


function Display({ weather, fnSubmit, def, fives }) {
  const currentDate = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [next4Days, setNext4Days] = useState([]);

  const day = daysOfWeek[currentDate.getDay()];
  const dayNumber = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];

  const condition0 = fives?.list[2]?.weather[0]?.description;

  const condition1 = fives?.list[4]?.weather[0]?.description;
  const condition2 = fives?.list[12]?.weather[0]?.description;
  const condition3 = fives?.list[20]?.weather[0]?.description;
  const condition4 = fives?.list[28]?.weather[0]?.description;
  const condition5 = fives?.list[36]?.weather[0]?.description;

  useEffect(() => {
    const dates = fourDays;
    setNext4Days(dates);
  }, []);

  if (!weather) {
    // Render a loading state or error message
    return (
      <div>
        <p>Loading weather data...</p>
      </div>
    );
  }

  console.log(def);
  return (
    <div>
      <form onSubmit={fnSubmit}>
        <input type="text" name="cityName" />
        <button type="submit">Buscar</button>
      </form>
      <main className="main-container">
        <div className="info">
          {condition0 ? (
            <Images condition={condition0} />
          ) : (
            <Images condition={condition0} />
          )}

          <h1>
            {weather && weather.main && weather.main.temp
              ? (weather.main.temp - 273.15).toFixed(2) + "°C"
              : "London"}
          </h1>
          <p>
            {weather && weather.weather && weather.weather[0]
              ? weather.weather[0].description
              : "Clear Sky"}
          </p>

          <span>
            Today . {day}, {dayNumber} {month}{" "}
          </span>
          <p>{!weather ? def.base : weather.name}</p>
        </div>
        <div className="main-card-container">
          <div className="cards">
            <div className="small-card-container">
              <div className="small-card">
                <p>Tomorrow</p>
                {/* {This dinamicaly adds an image based on the status of 
                the condition variable} */}

                {condition1 ? (
                  <Images condition={condition1} />
                ) : (
                  <Images condition={condition0} />
                )}

                <div className="cesius">
                  <span>
                    {fives
                      ? (fives?.list[4]?.main?.temp_max - 273.15).toFixed(2) +
                        "°C"
                      : "21°C"}
                  </span>

                  <span>
                    {fives
                      ? (fives?.list[4]?.main?.temp_min - 273.15).toFixed(2) +
                        "°C"
                      : "15°C"}
                  </span>
                </div>
              </div>
              <div className="small-card">
                <p>{next4Days[0]}</p>
                {condition2 ? (
                  <Images condition={condition2} />
                ) : (
                  <Images condition={condition0} />
                )}

                <div className="cesius">
                  <span>
                    {fives
                      ? (fives?.list[12]?.main?.temp_max - 273.15).toFixed(2) +
                        "°C"
                      : "27°C"}
                  </span>
                  <span>
                    {fives
                      ? (fives?.list[12]?.main?.temp_min - 273.15).toFixed(2) +
                        "°C"
                      : "22°C"}
                  </span>
                </div>
              </div>

              <div className="small-card">
                <p>{next4Days[1]}</p>
                {condition3 ? (
                  <Images condition={condition3} />
                ) : (
                  <Images condition={condition0} />
                )}

                <div className="cesius">
                  <span>
                    {fives
                      ? (fives?.list[20]?.main?.temp_max - 273.15).toFixed(2) +
                        "°C"
                      : "18°C"}
                  </span>
                  <span>
                    {fives
                      ? (fives?.list[20]?.main?.temp_min - 273.15).toFixed(2) +
                        "°C"
                      : "15°C"}
                  </span>
                </div>
              </div>
              <div className="small-card">
                <p>{next4Days[2]}</p>
                {condition4 ? (
                  <Images condition={condition4} />
                ) : (
                  <Images condition={condition0} />
                )}

                <div className="cesius">
                  <span>
                    {fives
                      ? (fives?.list[28]?.main?.temp_max - 273.15).toFixed(2) +
                        "°C"
                      : "27°C"}
                  </span>
                  <span>
                    {fives
                      ? (fives?.list[28]?.main?.temp_min - 273.15).toFixed(2) +
                        "°C"
                      : "25°C"}
                  </span>
                </div>
              </div>
              <div className="small-card">
                <p>{next4Days[3]}</p>
                {condition5 ? (
                  <Images condition={condition5} />
                ) : (
                  <Images condition={condition0} />
                )}

                <div className="cesius">
                  <span>
                    {fives
                      ? (fives?.list[36]?.main?.temp_max - 273.15).toFixed(2) +
                        "°C"
                      : "35°C"}
                  </span>

                  <span>
                    {fives
                      ? (fives?.list[36]?.main?.temp_min - 273.15).toFixed(2) +
                        "°C"
                      : "32°C"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lower-card">
              <div className="content">
                <h4>Today's Highlights</h4>
              </div>
              <div className="big-card-container">
                <div className="big-card">
                  <p>Wind Status</p>
                  <p>
                    <span className="number">
                      {weather && weather.wind && weather.wind.speed
                        ? weather.wind.speed
                        : "56"}
                    </span>
                    mph
                  </p>
                  <p>WSW</p>
                </div>
                <div className="big-card">
                  <p>Humidity</p>
                  <p>
                    <span className="number">
                      {!weather ? def.main?.humidity : weather.main?.humidity}
                    </span>
                    %
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar newcol"
                      role="progressbar"
                      style={{ width: `${weather.main?.humidity}` + "%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="big-card">
                  <p>Visibility</p>
                  <p>
                    <span className="number">
                      {!weather ? def.visibility : weather.visibility}
                    </span>
                    miles
                  </p>
                </div>
                <div className="big-card">
                  <p>Air Pressure</p>
                  <p>
                    <span className="number">
                      {!weather ? def.main?.pressure : weather.main?.pressure}
                    </span>
                    mb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Display;
