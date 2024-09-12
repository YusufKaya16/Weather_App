import { createRef, useEffect, useState } from "react";
import InputBox from "./InputBox";
import WeatherCard from "./WeatherCard";
import { toCapitalize } from "../helpers/toCapitalize";
// import { fetchError } from "../helpers/fetchError";
import { getLatLon } from "../helpers/getLatLon";
import { getDatas } from "../helpers/getDatas";
import { setWeatherIcon } from "../helpers/setWeatherIcon";

const API_KEY = "7808b10251073a19372d4621a25f3841";

export default function Weather() {
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [city, setCity] = useState("Bursa");
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState("Clear");
  const [fahrenheit, setFahrenheit] = useState(0);
  const [icon, setIcon] = useState("");

  // ref for input value
  const inputRef = createRef();

  // form submit event
  const handleSubmit = (e) => {
    let city = inputRef.current.value.trim();
    if (city !== "") {
      setCity(city);
      inputRef.current.value = "";
    }
    e.preventDefault();
  };

  // api -> http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  // api -> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { lat, lon } = await getLatLon(city, API_KEY);
        const { main, weather, wind } = await getDatas(lat, lon, API_KEY);

        const { speed } = wind;
        const { humidity } = main;
        const tempCelcius = (main.temp - 273.15).toPrecision(2);
        const tempFahrenheit = (1.8 * (main.temp - 273.15) + 32).toPrecision(2);

        setIcon(setWeatherIcon(weather[0].main));
        setSpeed(speed);
        setTemp(tempCelcius);
        setHumidity(humidity);
        setWeather(weather[0].main);
        setFahrenheit(tempFahrenheit);
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, [city]);
  // the [city] is dependence for useEffect as second parameters. First parameters is a callback function.

  return (
    <section className="weather">
      <InputBox
        handleSubmit={handleSubmit}
        // handleChange={handleChange}
        ref={inputRef}
      />
      <WeatherCard
        city={toCapitalize(city)}
        temperature={temp}
        fahrenheit={fahrenheit}
        weather={weather}
        humidity={humidity}
        precipitation={4}
        windSpeed={speed}
        icon={icon}
      />
    </section>
  );
}
