"use client";
// Because we're inside a server component
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./state/counter";
import { useAppSelector } from "../hooks";
function CounterComponent() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Counter: {counter}</p>
      <button className={"mx-2"} onClick={() => dispatch(increment())}>Increment</button>
      <button className={"mx-2"} onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterComponent;
