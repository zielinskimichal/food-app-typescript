import Meal from "../../interfaces";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props: {
  name: string;
  price: number;
  listId: string;
  description: string;
  addToCartHandler: (mealToAdd: Meal) => void;
}) => {
  const handleFormSubmit = (amount: number) => {
    const mealToAdd = {
      name: props.name,
      price: props.price,
      amount: amount,
      listId: props.listId,
      description: props.description,
    };

    if (amount > 0) props.addToCartHandler(mealToAdd);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>{props.price}</span>
      </div>
      <MealItemForm handleSubmit={handleFormSubmit} />
    </li>
  );
};
export default MealItem;
