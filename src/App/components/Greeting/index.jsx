import { useEffect, useState } from "react";
import "./index.css";
import { Card, Body } from "@/App/components/Card";

const Greeting = (props) => {
  const [wish, setWish] = useState("");

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
        <h2>Good {wish}</h2>
      </Body>
    </Card>
  );
};

export default Greeting;
