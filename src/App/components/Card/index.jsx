import "./index.css";

const Card = (props) => (
  <div className={"card " + props?.className}>{props?.children}</div>
);

const Title = (props) => (
  <div className={"title " + (props?.className || "")}>{props?.children}</div>
);

const Body = (props) => (
  <div className={"body " + props?.className}>{props?.children}</div>
);

const Footer = (props) => (
  <div className={"footer " + props?.className}>{props?.children}</div>
);

export { Card, Title, Body, Footer };
