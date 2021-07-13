import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Meal from "../../interfaces";

const Cart = (props: {
  cartMeals: Meal[];
  handleCartChange: (mealId: string, amount: number) => void;
  paymentAmount: number;
  onCloseButton: VoidFunction;
}) => {
  return (
    <>
      <div className={classes["cart-items"]}>
        {props.cartMeals.map(
          (meal: Meal) =>
            meal.amount > 0 && (
              <CartItem
                name={meal.name}
                price={meal.price}
                amount={meal.amount}
                key={meal.listId}
                handleCartChange={props.handleCartChange}
                listId={meal.listId}
              />
            )
        )}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${props.paymentAmount.toFixed(2)}`} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCloseButton}>
          Close
        </button>
        <button>Order</button>
      </div>
    </>
  );
};
export default Cart;
