import './index.css';

const WeatherStats = (weather) => {
  return (
    <>
      <div className="temp-stat">
        <p className="property">Humidity</p>
        <p className="value">{weather?.main?.humidity}</p>
      </div>
      <div className="temp-stat">
        <p className="property">Wind Speed</p>
        <p className="value">{weather?.wind?.speed} m/s</p>
      </div>
      <div className="temp-stat">
        <p className="property">Visibility</p>
        <p className="value">{weather?.visibility}</p>
      </div>
      <div className="temp-stat">
        <p className="property">Pressure</p>
        <p className="value">
          {weather?.main?.pressure} N/m <sup>2</sup>
        </p>
      </div>
    </>
  );
};

export default WeatherStats;
