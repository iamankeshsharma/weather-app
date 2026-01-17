import { weather } from "@/App/constants/svgs";
import { weatherComponentMap } from "@/App/constants/weatherMapping";

const WeatherIcon = ({ name, icon, ...props }) => {
  const Icon = weatherComponentMap[name] || weather.Clear;
  const varient = String(icon).endsWith("n") ? "night" : "day";
  return <Icon varient={varient} {...props} />;
};

export default WeatherIcon;
