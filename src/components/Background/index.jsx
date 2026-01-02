import "./index.css";

const Background = ({
  img = {
    src: null,
    alt: null,
  },
  width = null,
  height = null,
}) => {
  return (
    <>
      {img?.src ? 
        <div className="bg-container">
          <div className="overlay"></div>
          <img
            src={img?.src}
            alt={img?.alt}
            className="bg-img"
            height={height ?? height}
            width={width ?? width}
          />
        </div>:null
      }
    </>
  );
};

export default Background;
