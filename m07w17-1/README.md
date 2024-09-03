# M07W17 - What is React State?

### To Do
- [x] Review of components and props
- [x] What is state?
- [x] Closure review
- [x] Reading and setting state

* props => data from outside the function
* state => data that belongs to a function (created inside that function)

* re-render => when React calls your component function again
* old data and new data are not equal

prevData !== currentData
10              11

### Hook
* hooks were added to React in February 2019
* allows us to tap into the React lifecycle
* `useState`, `useEffect`, `useReducer`, `useContext`
* starts with `use`
* all hooks are functions
* `useState` => allows us to give React a value to hang onto; if the value ever changes our component gets re-rendered

```js
const arr = useState('hello');
const value = arr[0];
const setter = arr[1];

// array destructuring
const [value, setValue] = useState('hello');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
```


we are recreating the input field in the virtual DOM

actual DOM
virtual DOM
















