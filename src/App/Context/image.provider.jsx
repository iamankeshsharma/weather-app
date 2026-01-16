import { createContext, useContext, useEffect, useState } from "react";
import { useWeather } from "@/App/context/weather.provider";
import { fetchImage } from "@/shared/api";

const ImageContext = createContext(null);

export const ImageProvider = (props) => {
  const weather = useWeather();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (weather) {
      fetchImage(weather.weather[0].description).then((res) => {
        if (res.status == 200) {
          if (res.data.results[0]) setData(res.data.results[0]);
        }
      });
    }
  }, [weather]);

  return (
    <ImageContext.Provider value={data ?? ""}>
      {props.children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const image = useContext(ImageContext);

  if (image === null) {
    throw new Error("useImage must be used within ImageProvider");
  }

  return image;
};
