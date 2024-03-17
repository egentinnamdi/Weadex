const API_KEY = "a5d7cc04c49f4d44b42133928240603";

async function getData(city, days) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?days=${days}&q=${city}&key=${API_KEY}`
  );
  const data = await res.json();

  return data;
}

export { getData };
