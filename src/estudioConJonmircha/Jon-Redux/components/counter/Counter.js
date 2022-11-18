import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../features/counter/counterSlice.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <form action="#">
        <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
      </form>
      <nav>
        <button onClick={() => dispatch(increment())}>Mas 1</button>
        <button onClick={() => dispatch(decrement())}>Menos 1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Mas count
        </button>
        <button onClick={() => dispatch(decrementByAmount(amount))}>
          Menos count
        </button>
      </nav>
      <h2>{counterState}</h2>
    </div>
  );
};

export default Counter;
