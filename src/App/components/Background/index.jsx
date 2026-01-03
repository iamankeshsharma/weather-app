import "./index.css";
import {useState, useContext } from "react";
import { ImageContext } from "../../Context/imageDictonary.provider";

const Background = (props) => {
  const [imgData, setImgData] = useState(props);

  if(imgData.src === null || imgData.src === undefined){
    const image = useContext(ImageContext);
    setImgData(
      {
        src:image.src,
        alt:image.alt
      }
    );
  }

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
