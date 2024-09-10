import useArray from "../hooks/useArray";
import useInput from '../hooks/useInput';

const ArrayComp = () => {
  const {
    array,
    addItem,
  } = useArray();

  const newItemInput = useInput('');

  const mappedArray = array.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  return (
    <div>
      <h2>Array Component</h2>
      <div>
        <label>New Item</label>
        <input 
          value={newItemInput.value}
          onChange={newItemInput.onChange}
        />
        <button onClick={() => addItem(newItemInput.value)}>Add!</button>
      </div>
      { mappedArray }
    </div>
  );
};

export default ArrayComp;
