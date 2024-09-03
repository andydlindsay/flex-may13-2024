import {useState} from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(`you are trying to login in as ${username} with password ${password}`);

    // $.post('/login', { username, password })
    //   .then((user) => {
    //     setUser(user);
    //   });
  };

  return (
    <div>
      <h2>Login Below!!</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        {/* controlled inputs */}
        <input 
          value={username}
          onChange={(event) => { setUsername(event.target.value) }}
        />
        <br/>
        <label>Password</label>
        <input 
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
