import classes from "./CartItem.module.css";

const CartItem = (props: {
  price: number;
  listId: string;
  handleCartChange: (idArray: string, amount: number) => void;
  name: string;
  amount: number;
}) => {
  const price = `$${props.price.toFixed(2)}`;
  const onAdd = () => {
    props.handleCartChange(props.listId, 1);
  };
  const onRemove = () => {
    props.handleCartChange(props.listId, -1);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
