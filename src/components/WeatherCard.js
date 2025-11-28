export default function WeatherCard({ data }) {

    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const date = new Date()
    const day = date.toLocaleDateString('en-US', {weekday: 'long'})
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className='weather-card'>
            <h2>{day}</h2>
            <p><strong>{data.name}, {data.sys.country}</strong></p>
            <p>{formattedDate}</p>
            <img className='icon' src={iconUrl} alt={data.weather[0].description} />

            <h2>
                Feels Like: {(data.main.feels_like - 273.15).toFixed(1)}°C
            </h2>

            <p>
                <strong>
                    {data.weather[0].description.charAt(0).toUpperCase() 
                    + data.weather[0].description.slice(1)}
                </strong>
            </p>
        </div>
    )

}