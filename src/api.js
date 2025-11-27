const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export function buildWeatherUrl(city) {
  return `${API_BASE}?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
}