import React from "react";
import { useEffect, useState } from "react";
import Clear from "../img/Clear.png";
import HeavyCloud from "../img/HeavyCloud.png";
import HeavyRain from "../img/HeavyRain.png";
import ThunderStorm from "../img/Thunderstorm.png";
import Hail from "../img/Hail.png";
import LightCloud from "../img/LightCloud.png";
import LightRain from "../img/LightRain.png";
import Shower from "../img/Shower.png";
import Sleet from "../img/Sleet.png";
import Snow from "../img/Snow.png";

function Images({ condition }) {
  let iconUrl = "";

  switch (condition) {
    case "clear sky":
      iconUrl = Clear; // Replace with your sun icon URL
      break;

    case "few clouds":
      iconUrl = LightCloud; // Replace with your cloud icon URL
      break;
    case "scattered clouds":
      iconUrl = HeavyCloud; // Replace with your cloud icon URL
      break;
    case "overcast clouds":
      iconUrl = HeavyCloud; // Replace with your cloud icon URL
      break;

    case "broken clouds":
      iconUrl = HeavyCloud; // Replace with your rain icon URL
      break;
    case "shower rain":
      iconUrl = Shower; // Replace with your rain icon URL
      break;

    case "light rain":
      iconUrl = LightRain; // Replace with your rain icon URL
      break;
    case "thunderstorm":
      iconUrl = ThunderStorm; // Replace with your rain icon URL
      break;
    case "snow":
      iconUrl = Snow; // Replace with your rain icon URL
      break;
    case "mist":
      iconUrl = HeavyCloud; // Replace with your rain icon URL
      break;
    case "hail":
      iconUrl = Hail; // Replace with your rain icon URL
      break;
    case "sleet":
      iconUrl = Sleet; // Replace with your cloud icon URL
      break;
    default:
      iconUrl = Clear; // Replace with a default icon URL
      break;
  }
  return <img className="icon-img" src={iconUrl} alt={condition} />;
}

export default Images;
