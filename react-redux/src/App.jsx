import { decrement, increment, reset, incrementByCount } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0)
  // to fetch state variables from the store
  const count = useSelector(state => state.counter.value)

  // to dispatch actions
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment())

  const handleDecrement = () => dispatch(decrement())

  const handleReset = () => dispatch(reset())

  const incrementByAmount = () => dispatch(incrementByCount(amount))

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement} style={{ margin: "0 10px" }}>-</button>
      <button onClick={handleReset}>Reset</button>

      <input type="Number" value={amount} placeholder="Enter Amount" onChange={
        (e) => setAmount(e.target.value)
      } />

      <br />
      <button onClick={incrementByAmount}>Inc by Amount</button>
    </div>
  );
};

export default App;

// terms - 
// 1. action - [event + additional information(payload)]
// 2. reducer - functions handling actions updating the state
// 3. slice - features in our application, contains initial state and reducer functions
// 4. store - where state is managed (single source of truth, centralised state management)
// 5. state - dynamic data of the application
// reference link - https://react-redux.js.org/tutorials/quick-start