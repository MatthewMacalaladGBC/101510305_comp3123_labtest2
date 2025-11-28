export default function WeatherDetails({cities, onSelectCity, data}) {

    return (
        <div className=''>
            <div className='detail-item'>
                <h3>Select a City</h3>
                <select
                    className=''
                    onChange={(val) => onSelectCity(val.target.value)}
                >
                    {cities.map((cityName) => (
                    <option key={cityName} value={cityName}>
                        {cityName}
                    </option>
                    ))}
                </select>
            </div>


            {data && (
                <div className='details-container'>

                    <div className='detail-item'>
                        <span>Temperature</span>
                        <strong>{(data.main.temp - 273.15).toFixed(1)}°C</strong>
                    </div>

                    <div className='detail-item'>
                        <span>Min Temp</span>
                        <strong>{(data.main.temp_min - 273.15).toFixed(1)}°C</strong>
                    </div>

                    <div className='detail-item'>
                        <span>Max Temp</span>
                        <strong>{(data.main.temp_max - 273.15).toFixed(1)}°C</strong>
                    </div>

                    <div className='detail-item'>
                        <span>Humidity</span>
                        <strong>{data.main.humidity}%</strong>
                    </div>

                    <div className='detail-item'>
                        <span>Pressure</span>
                        <strong>{data.main.pressure} hPa</strong>
                    </div>

                    <div className='detail-item'>
                        <span>Wind</span>
                        <strong>{data.wind.speed} m/s</strong>
                    </div>

                </div>
            )}


        </div>
    )

}