import MealItem from "./MealItem";
import Card from "./Card";
import classes from "./AvailableMeals.module.css";
import Meal from "../../interfaces";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props: {
  addToCartHandler: (mealToAdd: Meal) => void;
}) => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            addToCartHandler={props.addToCartHandler}
            key={meal.id}
            description={meal.description}
            name={meal.name}
            price={meal.price}
            listId={meal.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
