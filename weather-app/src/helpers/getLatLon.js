export const getLatLon = async (city, API_KEY) => {
  try {
    const { lat, lon } = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},TR&limit=${1}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        return { lat: res[0].lat, lon: res[0].lon };
      });

    return { lat: lat, lon: lon };
  } catch (err) {
    return err;
  }
};
