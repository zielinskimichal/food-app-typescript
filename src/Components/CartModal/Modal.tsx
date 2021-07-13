import classes from "./Modal.module.css";
import Cart from "./Cart";
import Meal from "../../interfaces";
const Modal = (props: {
  onCloseButton: VoidFunction;
  cartMeals: Meal[];
  handleCartChange: (mealId: string, amount: number) => void;
  totalAmount: number;
}) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <Cart
          onCloseButton={props.onCloseButton}
          cartMeals={props.cartMeals}
          handleCartChange={props.handleCartChange}
          paymentAmount={props.totalAmount}
        />
      </div>
    </div>
  );
};

export default Modal;
