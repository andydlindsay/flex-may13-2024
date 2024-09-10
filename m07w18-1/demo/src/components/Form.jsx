// import {useState} from 'react';
import useInput from "../hooks/useInput";

const Form = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const emailInput = useInput('a@a.com');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`you are signing in with ${emailInput.value} and password of ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login Below!</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Form;
