import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = (props: {
  cartButtonHandler: VoidFunction;
  totalAmount: number;
}) => {
  return (
    <button className={classes.button} onClick={props.cartButtonHandler}>
      <CartIcon className={classes.icon} />
      <span>Your Cart</span>
      <div className={classes.badge}>{props.totalAmount}</div>
    </button>
  );
};

export default HeaderCartButton;
