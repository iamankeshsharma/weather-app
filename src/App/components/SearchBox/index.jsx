import { useEffect, useState } from "react";
import "./index.css";

const SearchBox = ({value, onChange, ...props }) => {
  const [e, setE] = useState(null);
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(value);

  useEffect(()=>{
    onChange(e);
    setActive((e?.target?.value.length > 0));
  },[val]);

  useEffect(()=>{
    setVal(value);
  }, [value])
  
  return (
    <div className={`search-wrapper ${props?.className ?? ``}`}>
      <input
        id="search"
        name="search"
        type="search"
        onChange={(e)=>{
          setE(e);
          setVal(e.target.value);
        }}
        value={val}
        className={`searchbox ${props?.searchClassName ?? ``}`}
        placeholder={props?.placeholder ?? `New Delhi, India`}
        style={{
          height: props?.height,
          width: props?.width,
          backgroundColor: props?.backgroundColor,
          color: props?.color,
        }}
      />
      {active ? <button className="clear" onClick={()=>setVal("")}>+</button>:null}
    </div>
  );
};

export default SearchBox;
