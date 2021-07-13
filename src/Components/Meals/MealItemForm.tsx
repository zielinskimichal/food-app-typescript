import Input from "./Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = (props: { handleSubmit: (amount: number) => void }) => {
  const [amount, setAmount] = useState(0);
  const validateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(() => parseInt(event.target.value));
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleSubmit(amount);
    setAmount(0);
  };
  return (
    <form
      className={classes.form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        submitHandler(e);
        return false;
      }}
    >
      <Input validateAmount={validateAmount} amount={amount} />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default MealItemForm;
