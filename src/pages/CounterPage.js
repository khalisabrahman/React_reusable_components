import Button from "../components/Button";
// import useCounter from "../hooks/use-counter";
import { useState, useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);
  // const [count, setCount] = useState(initialCount);
  // const [ valueToAdd, setValueToAdd ] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  // useState way of doing things
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);

  // useReducer way of updating state
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    // setValueToAdd(value)
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0)
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <Panel className="m-3">
      {/* <h1 class="text-lg">Count is {count}</h1> */}
      <h1 class="text-lg">Count is {state.count}</h1>
      <div class="flex flex-row">
        <Button onClick={increment} secondary>
          Increment
        </Button>

        <Button onClick={decrement} secondary>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        {/* <input
        value={valueToAdd || ''}
        onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300"
        ></input> */}
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300"
        ></input>
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
