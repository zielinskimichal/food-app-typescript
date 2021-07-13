import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsPhoto from "./meals.jpg";
import MealsSummary from "./MealsSummary";

const Header = (props: {
  cartButtonClickHandler: VoidFunction;
  totalAmount: number;
}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton
          cartButtonHandler={props.cartButtonClickHandler}
          totalAmount={props.totalAmount}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsPhoto} alt="meals" />
      </div>
      <MealsSummary />
    </>
  );
};
export default Header;
