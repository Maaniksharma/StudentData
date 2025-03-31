//useReducer hook

import { useReducer } from "react";

const Counter = () => {
  const initialState = {
    count: 0,
  };
  interface State {
    count: number;
  }
  interface Action {
    type: string;
  }
  function countReducer(state: State, action: Action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className="">
      <div className="">{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
