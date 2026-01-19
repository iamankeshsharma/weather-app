import { useEffect, useRef, useState } from "react";
import HistoryChip from "../HistoryChip";
import { forecast } from "@/shared/api";
import "./index.css";
import { ChevronLeft } from "../../constants/svgs";

const History = ({ favorite, ...props }) => {
  const [forecastData, setForecastData] = useState(null);
  const ref = useRef();

  const navBtnHandler = (direction) => {
    switch (direction) {
      case "left":
        ref.current.scrollBy(128, 0);
        break;
      default:
        ref.current.scrollBy(-128, 0);
        break;
    }
  };

  useEffect(() => {
    forecast(favorite?.lat, favorite?.lon)
      .then((result) => {
        if (result?.status === 200) {
          setForecastData(result?.data?.list);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [favorite]);

  return (
    <div className="history">
      <div className="btnWrapper">
        <span
          className="navBtn prev"
          onClick={() => navBtnHandler("left")}
          style={{
            transform: "rotate(-180deg)",
          }}
        >
          <ChevronLeft height={30}/>
        </span>
      </div>
      <div className="records" ref={ref}>
        {forecastData?.map((point, i) => (
          <HistoryChip key={i} {...point} />
        ))}
      </div>
      <div className="btnWrapper">
        <span className="navBtn next" onClick={navBtnHandler}>
          <ChevronLeft height={30}/>
        </span>
      </div>
    </div>
  );
};

export default History;
