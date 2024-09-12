import { useEffect, useState } from "react";

const MakingAMess = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log('hello world');
    }, 2000);

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(intervalRef);
    };

    return cleanup;
  });

  return (
    <div>
      <h2>Making A Mess!!!</h2>
      <label>isOn</label>
      <input 
        type="checkbox"
        value={isOn}
        onChange={(e) => setIsOn(!isOn)}  
      />
    </div>
  );
};

export default MakingAMess;
