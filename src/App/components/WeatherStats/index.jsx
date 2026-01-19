import "./index.css";

const WeatherStats = ({ weather, ...props }) => {
  return (
    <div className={`stat ${props?.className}`}>
      <div
        className={`temp-stat ${props?.alignItems} ${props?.divider ? "bottom-border-1-white" : null}`}
        style={{
          height: props?.height,
          width: props?.width,
        }}
      >
        <p className="property">Humidity</p>
        <p className="value">{weather?.main?.humidity ?? 0}</p>
      </div>
      <div
        className={`temp-stat ${props?.alignItems} ${props?.divider ? "bottom-border-1-white" : null}`}
        style={{
          height: props?.height,
          width: props?.width,
        }}
      >
        <p className="property">Wind Speed</p>
        <p className="value">{weather?.wind?.speed ?? 0} m/s</p>
      </div>
      <div
        className={`temp-stat ${props?.alignItems} ${props?.divider ? "bottom-border-1-white" : null}`}
        style={{
          height: props?.height,
          width: props?.width,
        }}
      >
        <p className="property">Visibility</p>
        <p className="value">{weather?.visibility ?? 0}</p>
      </div>
      <div
        className={`temp-stat ${props?.alignItems}`}
        style={{
          height: props?.height,
          width: props?.width,
        }}
      >
        <p className="property">Pressure</p>
        <p className="value">
          {weather?.main?.pressure ?? 0} N/m <sup>2</sup>
        </p>
      </div>
    </div>
  );
};

export default WeatherStats;
