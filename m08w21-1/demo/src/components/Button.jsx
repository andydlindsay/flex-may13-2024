import { useContext } from "react";
import countContext from "../contexts/countContext";

const Button = () => {
  const context = useContext(countContext)
  console.log('context', context);

  return (
    <div>
      <button onClick={() => context.setCount(context.count + 1)}>Increment</button>
    </div>
  );
};

export default Button;