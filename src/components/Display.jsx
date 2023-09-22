import React from "react";
import LightCloud from "../img/LightCloud.png";
import "./display.css";

function Display({ weather, fnSubmit, def }) {
  if (!weather) {
    // Render a loading state or error message
    return (
      <div>
        <p>Loading weather data...</p>
      </div>
    );
  }
  const currentDate = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  const day = dayNames[currentDate.getDay()];
  const dayNumber = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];

  return (
    <div>
      <form onSubmit={fnSubmit}>
        {/* <label htmlFor="name">
          Escribe el nombre específico de un pokemon:
        </label> */}
        <input type="text" name="cityName" />
        <button type="submit">Buscar</button>
      </form>
      <main className="main-container">
        <div className="info">
          <h1>
            {weather && weather.main && weather.main.temp
              ? (weather.main.temp - 273.15).toFixed(2) + "°C"
              : "No info"}
          </h1>
          <p>
            {weather && weather.weather && weather.weather[0]
              ? weather.weather[0].description
              : "No info"}
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
                <img className="small-icon" src={LightCloud} alt="icon" />
                <div className="cesius">
                  <span>16°C</span>
                  <span>11°C</span>
                </div>
              </div>
              <div className="small-card">
                <p>Tomorrow</p>
                <img className="small-icon" src={LightCloud} alt="icon" />
                <div className="cesius">
                  <span>16°C</span>
                  <span>11°C</span>
                </div>
              </div>
              <div className="small-card">
                <p>Tomorrow</p>
                <img className="small-icon" src={LightCloud} alt="icon" />
                <div className="cesius">
                  <span>16°C</span>
                  <span>11°C</span>
                </div>
              </div>
              <div className="small-card">
                <p>Tomorrow</p>
                <img className="small-icon" src={LightCloud} alt="icon" />
                <div className="cesius">
                  <span>16°C</span>
                  <span>11°C</span>
                </div>
              </div>
              <div className="small-card">
                <p>Tomorrow</p>
                <img className="small-icon" src={LightCloud} alt="icon" />
                <div className="cesius">
                  <span>16°C</span>
                  <span>11°C</span>
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
                        : "No info"}
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
                  <p>WSW</p>
                </div>
                <div className="big-card">
                  <p>Visibility</p>
                  <p>
                    <span className="number">
                      {!weather ? def.visibility : weather.visibility}
                    </span>
                    miles
                  </p>
                  <p>WSW</p>
                </div>
                <div className="big-card">
                  <p>Air Pressure</p>
                  <p>
                    <span className="number">
                      {!weather ? def.main?.pressure : weather.main?.pressure}
                    </span>
                    mb
                  </p>
                  <p>WSW</p>
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
