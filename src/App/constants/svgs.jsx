const Clouds = (props) => {
  switch (props.varient) {
    case "night":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={props?.height ?? "24"}
          width={props?.width ?? "24"}
          viewBox={`0 0 24 24`}
          fill={props?.fill ?? "none"}
          stroke={props?.stroke ?? "currentColor"}
          strokeWidth={props?.strokeWidth ?? "2"}
          strokeLinecap={props?.strokeLinecap ?? "round"}
          strokeLinejoin={props?.strokeLinejoin ?? "round"}
        >
          <path
            d="M15 19a4 4 0 0 0 0-8
           6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 6 19"
          />
          <path d="M18 7a3 3 0 0 0-3 3" />
        </svg>
      );

    default:
      return (
        <svg
          width={props?.width ?? `24`}
          height={props?.height ?? "24"}
          fill={props?.fill ?? "none"}
          viewBox={`0 0 147 105`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110.25 40.1686H102.532C100.241 31.2934 95.5059 23.239 88.8654 16.9205C82.2249 10.602 73.9453 6.27278 64.9673 4.42477C55.9893 2.57677 46.673 3.28408 38.0769 6.46633C29.4809 9.64858 21.9497 15.1782 16.3393 22.4268C10.7289 29.6754 7.26413 38.3524 6.33875 47.4717C5.41337 56.5911 7.06446 65.7872 11.1044 74.0151C15.1444 82.243 21.4112 89.1727 29.1928 94.0169C36.9744 98.8611 45.9587 101.425 55.1249 101.419H110.25C118.372 101.419 126.162 98.192 131.905 92.4487C137.648 86.7054 140.875 78.9158 140.875 70.7936C140.875 62.6713 137.648 54.8817 131.905 49.1384C126.162 43.3951 118.372 40.1686 110.25 40.1686Z"
            stroke={props?.stroke ?? "#DEEBFF"}
            strokeWidth={props?.strokeWidth ?? "9"}
            strokeLinecap={props?.strokeLinecap ?? "round"}
            strokeLinejoin={props?.strokeLinejoin ?? "round"}
          />
        </svg>
      );
  }
};

const Clear = (props) => {
  switch (props.varient) {
    case "night":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={props?.height ?? "24"}
          width={props?.width ?? "24"}
          viewBox={`0 0 24 24`}
          fill={props?.fill ?? "none"}
          stroke={props?.stroke ?? "currentColor"}
          strokeWidth={props?.strokeWidth ?? "2"}
          strokeLinecap={props?.strokeLinecap ?? "round"}
          strokeLinejoin={props?.strokeLinejoin ?? "round"}
        >
          <path
            d="M21 12.8A9 9 0 1 1 11.2 3
           a7 7 0 0 0 9.8 9.8z"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={props?.height ?? "24"}
          width={props?.width ?? "24"}
          viewBox={`0 0 24 24`}
          fill={props?.fill ?? "none"}
          stroke={props?.stroke ?? "currentColor"}
          strokeWidth={props?.strokeWidth ?? "2"}
          strokeLinecap={props?.strokeLinecap ?? "round"}
          strokeLinejoin={props?.strokeLinejoin ?? "round"}
        >
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      );
  }
};

const Rain = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props?.height ?? "24"}
      width={props?.width ?? "24"}
      viewBox={`0 0 24 24`}
      fill={props?.fill ?? "none"}
      stroke={props?.stroke ?? "currentColor"}
      strokeWidth={props?.strokeWidth ?? "2"}
      strokeLinecap={props?.strokeLinecap ?? "round"}
      strokeLinejoin={props?.strokeLinejoin ?? "round"}
    >
      <path d="M16 16a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1A3.5 3.5 0 0 0 7 16" />
      <line x1="8" y1="19" x2="8" y2="22" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="16" y1="19" x2="16" y2="22" />
    </svg>
  );
};

const ThunderStorm = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props?.height ?? "24"}
      width={props?.width ?? "24"}
      viewBox={`0 0 24 24`}
      fill={props?.fill ?? "none"}
      stroke={props?.stroke ?? "currentColor"}
      strokeWidth={props?.strokeWidth ?? "2"}
      strokeLinecap={props?.strokeLinecap ?? "round"}
      strokeLinejoin={props?.strokeLinejoin ?? "round"}
    >
      <path d="M17 15a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1A3.5 3.5 0 0 0 7 15" />
      <polyline points="13 11 11 15 14 15 12 19" />
    </svg>
  );
};

const Snow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props?.height ?? "24"}
      width={props?.width ?? "24"}
      viewBox={`0 0 24 24`}
      fill={props?.fill ?? "none"}
      stroke={props?.stroke ?? "currentColor"}
      strokeWidth={props?.strokeWidth ?? "2"}
      strokeLinecap={props?.strokeLinecap ?? "round"}
      strokeLinejoin={props?.strokeLinejoin ?? "round"}
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2.2" y1="12" x2="22" y2="12" />
      <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" />
      <line x1="19.5" y1="4.5" x2="4.5" y2="19.5" />
    </svg>
  );
};

const Atmosphere = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props?.height ?? "24"}
      width={props?.width ?? "24"}
      viewBox={`0 0 24 24`}
      fill={props?.fill ?? "none"}
      stroke={props?.stroke ?? "currentColor"}
      strokeWidth={props?.strokeWidth ?? "2"}
      strokeLinecap={props?.strokeLinecap ?? "round"}
      strokeLinejoin={props?.strokeLinejoin ?? "round"}
    >
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="7" y1="16" x2="17" y2="16" />
    </svg>
  );
};

const weather = {Clouds, Clear, Rain, ThunderStorm, Snow, Atmosphere};

const Search = (props) => {
  return (
    <svg
      width={props?.width ?? `24`}
      height={props?.height ?? "24"}
      fill={props?.fill ?? "none"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={props?.stroke ?? "#DEEBFF"}
        strokeWidth={props?.strokeWidth ?? "9"}
        strokeLinecap={props?.strokeLinecap ?? "round"}
        strokeLinejoin={props?.strokeLinejoin ?? "round"}
      />
    </svg>
  );
};


export { weather, Search };
