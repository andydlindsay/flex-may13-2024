import { useContext } from "react";
import countContext from "../contexts/countContext";

const Display = () => {
  const context = useContext(countContext)
  console.log('context', context);

  return (
    <div>
      <h2>Display Component, count: {context.count}</h2>
    </div>
  );
};

export default Display;
