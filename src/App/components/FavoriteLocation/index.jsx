import { useEffect, useState } from "react";
import { Card, Title, Body, Footer } from "@/App/components/Card";
import WeatherStats from "../WeatherStats";
import WeatherIcon from "../WeatherIcon";
import { fetchWeather } from "@/shared/api";
import { useTitleCase } from "@/App/hooks/utility";
import "./index.css";
import useStorage from "../../hooks/storage";

const FavoriteLocation = (props) => {
  const [favorite, _] = useStorage("favoriteLocation");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather(favorite?.lat, favorite?.lon).then((res) => {
      if (res?.status === 200) {
        setWeather(res?.data);
      }
    });
  }, [favorite]);

  return (
    <Card className={`favorite ${props?.className}`}>
      <Title className="head">
        <p>
          {favorite?.name}, {favorite?.state} ({favorite?.country})
        </p>
        <p>Today</p>
      </Title>
      <Body className="temprature">
        <div className="measures">
          <p className="value">{Math.floor(weather?.main?.temp)}&deg; C</p>
          <p className="description">
            {useTitleCase(weather?.weather[0]?.description)}
          </p>
        </div>
        <WeatherIcon
          name={weather?.weather[0]?.main}
          icon={weather?.weather[0]?.icon}
          width={200}
          height={200}
        />
      </Body>

      <Footer className="stats">
        <WeatherStats {...weather} />
      </Footer>
    </Card>
  );
};

export default FavoriteLocation;
