const icons = {
  Clear: "01d.png",
  Clouds: "02d.png",
  Mist: "50d.png",
  Snow: "30d.png",
  Rain: "10d.png",
  Drizzle: "09d.png",
  Thunderstorm: "11d.png",
};

export function setWeatherIcon(main) {
  switch (main) {
    case "Clear":
      return icons.Clear;
    case "Clouds":
      return icons.Clouds;
    case "Mist":
      return icons.Mist;
    case "Snow":
      return icons.Snow;
    case "Rain":
      return icons.Rain;
    case "Drizzle":
      return icons.Drizzle;
    case "Thunderstorm":
      return icons.Thunderstorm;
  }
}
