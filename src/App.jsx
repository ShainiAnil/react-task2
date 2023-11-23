import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    (count < 10)?
      setCount((prev) => prev + 1):
      alert("Sorry! Can't increment further!")
  };
  const onDecrement = () => {
   (count > 0)?
      setCount((prev) => prev - 1):
      alert("Sorry! can't decrement further!")
    
  };
  return (
    <div>
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

export default App;
