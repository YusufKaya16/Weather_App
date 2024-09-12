export const getDatas = async (lat, lon, API_KEY) => {
  try {
    const { main, weather, wind } = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        return { main: res.main, weather: res.weather, wind: res.wind };
      });

    return { main: main, weather: weather, wind: wind };
  } catch (err) {
    return err;
  }
};
