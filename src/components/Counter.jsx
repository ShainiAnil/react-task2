export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter flex">
      <h1>Count : <span className="count-value">{count}</span>  </h1>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
};
