import { useEffect, useState } from "react";
import "./index.css";
import { Card, Body } from "@/App/components/Card";
import WeatherIcon from "../WeatherIcon";
import { useWeather } from "@/App/Context";

const Greeting = (props) => {
  const weatherData = useWeather();
  const [wish, setWish] = useState("");

  useEffect(()=>{
    console.log()
  },[weatherData]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
      setWish("Morning");
    } else if (hour >= 12 && hour < 16) {
      setWish("Afternoon");
    } else if (hour >= 16 && hour < 21) {
      setWish("Evening");
    } else {
      setWish("Night");
    }
  }, []);

  return (
    <Card className="greeting">
      <Body className="wishing">
        <WeatherIcon
          name={weatherData?.weather?.length? weatherData?.weather[0]?.main:"Clear"}
          icon={weatherData?.weather?.length? weatherData?.weather[0]?.icon: "1dn"}
          width={180}
          height={180}
        />
        <p>Good {wish}</p>
      </Body>
    </Card>
  );
};

export default Greeting;
