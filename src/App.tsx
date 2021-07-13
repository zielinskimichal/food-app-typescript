import Header from "./Components/Header/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import { useState } from "react";
import Modal from "./Components/CartModal/Modal";
import Meal from "./interfaces";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartMeals, setCartMeals] = useState<Meal[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const onCartButtonClick = () => {
    setShowModal(true);
  };
  const onModalCloseButton = () => {
    setShowModal(false);
  };
  const addToCartHandler = (mealToAdd: Meal) => {
    setCartMeals(handleSameMeals(mealToAdd));
    setTotalAmount(() => totalAmount + mealToAdd.amount);
    setPaymentAmount(() => totalAmount + mealToAdd.price * mealToAdd.amount);
  };

  const handleSameMeals = (mealToAdd: Meal) => {
    let helper = [...cartMeals];
    let ifContains = false;
    helper.forEach((e) => {
      if (e.listId === mealToAdd.listId) {
        e.amount = e.amount + mealToAdd.amount;
        ifContains = true;
      }
    });
    if (ifContains) {
      return helper;
    } else return [...cartMeals, mealToAdd];
  };

  const handleCartChange = (mealId: string, amount: number) => {
    setCartMeals(deleOrAddMeal(mealId, amount));
    setTotalAmount(() => totalAmount + amount);
    setPaymentAmount(countPaymentAmount);
  };
  const countPaymentAmount = () => {
    let total = 0;
    cartMeals.forEach((meal) => {
      total += meal.amount * meal.price;
    });
    return total;
  };
  const deleOrAddMeal = (mealId: string, amount: number) => {
    const changedMealIndex = cartMeals.findIndex(
      (meal) => meal.listId === mealId
    );
    let helper = [...cartMeals];

    helper[changedMealIndex].amount = helper[changedMealIndex].amount + amount;
    if (helper[changedMealIndex].amount < 0) {
      helper[changedMealIndex].amount = 0;
    }
    return helper;
  };

  return (
    <div>
      {showModal && (
        <Modal
          onCloseButton={onModalCloseButton}
          cartMeals={cartMeals}
          handleCartChange={handleCartChange}
          totalAmount={paymentAmount}
        />
      )}
      <Header
        cartButtonClickHandler={onCartButtonClick}
        totalAmount={totalAmount}
      />
      <AvailableMeals addToCartHandler={addToCartHandler} />
    </div>
  );
}

export default App;
