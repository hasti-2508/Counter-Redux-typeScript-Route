import { RootState } from "../store";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
