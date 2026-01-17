import "./index.css";
import SearchBox from "../SearchBox";
import { useEffect, useState } from "react";
import { fetchCoordinates } from "@/shared/api";

const LocationSearch = ({ favorite, setFavorite, ...props }) => {
  const [value, setValue] = useState(null);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    if (value === null || value?.length === 0) {
      setLocations(null);
    }
    if (value) {
      fetchCoordinates(value).then((res) => {
        if (res.status === 200) {
          setLocations(res?.data);
        }
      });
    }
  }, [value]);

  const onChangeHandler = (e) => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => setValue(e?.target.value), 1000);
  };

  return (
    <div className={`search-container ${props?.className ?? ``}`}>
      <SearchBox
      value={value ?? ''}
        placeholder={favorite?.name}
        width={"100%"}
        searchClassName={locations?.length > 0 ? `active-searchBox` : ``}
        onChange={onChangeHandler}
      />
      {locations?.length > 0 ? (
        <div className={`locationList ${props?.locationListClassName ?? ``}`}>
          {locations?.map((location, index) => (
            <p
              onClick={() => {
                  setValue(location.name);
                setFavorite(location);
              }}
              key={index}
            >
              {location?.name}, {location?.state}, {location?.country}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default LocationSearch;
