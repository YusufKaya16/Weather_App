export default function WeatherCard({
  city,
  temperature,
  fahrenheit,
  weather,
  humidity,
  precipitation,
  windSpeed,
}) {
  return (
    <section className="weather-show">
      <div className="weather-icon">
        <h1 className="city">{city}</h1>
        <div className="icon-box">
          <img src={`/partly-cloudy.png`} alt="weather-icon" />
        </div>
      </div>
      <hr className="line" />
      <div className="weather-info">
        <h2 className="degree">{`${temperature}° C | ${fahrenheit}° F`}</h2>
        <p className="weather-text">
          <h3 className="weather-name">{weather}</h3>
          <ul className="weather-detail-list">
            <li className="weather-list">
              Humidity:{" "}
              <span
                style={{ color: "#122d47", fontWeight: "bold" }}
              >{`${humidity}%`}</span>
            </li>
            <li className="weather-list">
              Precipitation:{" "}
              <span
                style={{ color: "#122d47", fontWeight: "bold" }}
              >{`${precipitation}%`}</span>
            </li>
            <li className="weather-list">
              Wind Speed:{" "}
              <span style={{ color: "#122d47", fontWeight: "bold" }}>
                {`${windSpeed}km/h`}
              </span>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}
