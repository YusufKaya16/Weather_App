import { createRef, useEffect, useState } from "react";
import InputBox from "./InputBox";
import WeatherCard from "./WeatherCard";
import { toCapitalize } from "../helpers/toCapitalize";

const API_KEY = "7808b10251073a19372d4621a25f3841";

export default function Weather() {
  
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [city, setCity] = useState("Bursa");
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState("Clear");
  const [fahrenheit, setFahrenheit] = useState(0);

  const inputRef = createRef();

  const handleSubmit = (e) => {
    // let city = toCapitalize(inputRef.current.value.trim());
    let city = inputRef.current.value.trim();
    setCity(city);
    inputRef.current.value = "";
    e.preventDefault();
  };

  // api -> http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  // api -> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const fetchData = async () => {
    try {
      const { lat, lon } = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},TR&limit=${1}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          return { lat: res[0].lat, lon: res[0].lon };
        });

      const { main, weather, wind } = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          return { main: res.main, weather: res.weather, wind: res.wind };
        });

      const { speed } = wind;
      const { humidity } = main;
      const tempCelcius = (main.temp - 273.15).toPrecision(2);
      const tempFahrenheit = (1.8 * (main.temp - 273.15) + 32).toPrecision(2);

      setSpeed(speed);
      setTemp(tempCelcius);
      setHumidity(humidity);
      setWeather(weather[0].main);
      setFahrenheit(tempFahrenheit);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
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
      />
    </section>
  );
}
