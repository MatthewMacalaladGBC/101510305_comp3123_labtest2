import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { buildWeatherUrl } from './api';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [city, setCity] = useState('Toronto');
  const [weather, setWeather] = useState(null);

  const cities = [
    'Toronto',
    'Vancouver',
    'Montreal',
    'New York',
    'Los Angeles',
    'London',
    'Tokyo',
    'Manila'
  ];


  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(buildWeatherUrl(city));

        console.log(res.data)
        setWeather(res.data)
      } catch (err) {
        console.error('Error fetching data!', err)
      }
    }

    fetchWeather()
  }, [city]);

  return (
    <div className='background'>
      <div className='app-container'>
        <h1 className="app-title">Weather App</h1>

        <div className='main-card-layout'>
          {weather && <WeatherCard data={weather} />} 

          <WeatherDetails
            cities={cities}
            onSelectCity={setCity}
            data={weather}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
