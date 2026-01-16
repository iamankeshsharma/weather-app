import "./index.css";
import { useEffect, useState } from "react";
import { useImage } from "@/App/context";

const Background = (props) => {
  const [imgData, setImgData] = useState(props);
  const image = useImage();

  useEffect(() => {
    if (imgData.alt === null || imgData.src === undefined) {
      setImgData({
        src: image?.urls?.full,
        alt: image?.alt_description,
      });
    }
  }, [image]);

  return (
    <>
      <div className="bg-container">
        <div className="overlay"></div>
        <img
          src={imgData?.src}
          alt={imgData?.alt}
          className="bg-img"
          height={imgData?.height ?? imgData?.height}
          width={imgData?.width ?? imgData?.width}
        />
      </div>
    </>
  );
};

export default Background;
