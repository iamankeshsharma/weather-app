import WeatherStats from "../WeatherStats";
import WeatherIcon from "../WeatherIcon";
import "./index.css";
import { useEffect, useState } from "react";

const HistoryChip = (props) => {
  const [date, setDate] = useState(null);
  const day = ["Sun", "Mon", "Tue", "Thr", "Fri", "Sat"];

  useEffect(()=>{
    setDate((new Date(props?.dt_txt)));
  },[props]);

  return (
    <div className="history-chip">
      <div className="head">
        <div className="dayTime">
          <div className="time">
            <span>{date?.getHours()} Hr</span>
          </div>
          <div className="day">
            <span>{date?.getDate()}</span>
            <span>{day[date?.getDay()]}</span>
          </div>
        </div>
        <div className="icon-temp">
          <WeatherIcon 
          name={props?.weather?.length? props?.weather[0]?.main:"Clear"}
          icon={props?.weather?.length? props?.weather[0]?.icon:"01n"}
          width={70} height={70} />
          <div className="temp">
            <span className="max-temp">{props?.main?.temp_max} &deg;c</span>
            <span className="min-temp">{props?.main?.temp_min}&deg;c</span>
          </div>
        </div>
      </div>
      <WeatherStats
        height="30%"
        className="stat-col"
        divider={true}
        alignItems="align-items-start"
        weather={props}
      />
    </div>
  );
};

export default HistoryChip;
