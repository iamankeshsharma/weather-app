import WeatherStats from "../WeatherStats";
import WeatherIcon from "../WeatherIcon";
import "./index.css";

const HistoryChip = (props) => {
  return (
    <div className="history-chip">
      <div className="head">
        <div className="dayTime">
          <div className="time">
            <span>21:00</span>
          </div>
          <div className="day">
            <span>28</span>
            <span>Mon</span>
          </div>
        </div>
        <div className="icon-temp">
          <WeatherIcon width={70} height={70} />
          <div className="temp">
            <span className="max-temp">28&deg;c</span>
            <span className="min-temp">27&deg;c</span>
          </div>
        </div>
      </div>
      <WeatherStats
        height="30%"
        className="stat-col"
        divider={true}
        alignItems="align-items-start"
      />
    </div>
  );
};

export default HistoryChip;
