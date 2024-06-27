import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  // console.log(count)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    dispatch(reset());//1 make state =0
    setIncrementAmount(0);//2 make incrementAmount =0
  };

  return (
    <section>
      <p>Counter: {count}</p>
      <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
             <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                {/* <button onClick={()=>dispatch(reset())}>Reset</button> */}
                <button onClick={resetAll}>Reset</button>
            </div>

    </section>
  )
}

export default Counter;