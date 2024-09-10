import useToggle from '../hooks/useToggle';

const OnOff = () => {
  const [isOn, toggleState] = useToggle();

  return (
    <div>
      <h2>OnOff Component</h2>
      <button onClick={toggleState}>Toggle</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default OnOff;
