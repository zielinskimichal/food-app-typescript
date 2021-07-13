import classes from "./Input.module.css";

const Input = (props: {
  validateAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  amount: number;
}) => {
  return (
    <div className={classes.input}>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        min={0}
        onChange={props.validateAmount}
        value={props.amount}
      ></input>
    </div>
  );
};

export default Input;
