import classes from "./Card.module.css";

const Card = (props: {
  className: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
