# M07W18 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] _useEffect_ Flow
- [x] Dependencies
- [x] Data Fetching

### Pure Function
* no side effects
* when called with the same arguments, always returns the same response

```js
let additive = 10;
let username = null;

const addTwo = (num) => {
  username = 'alice';

  const result = num + additive;

  return result;
};
```

### Commmon React Side Effects

* console.log
* establishing a web socket connection (TCP)
* data fetching
* setting timers and intervals (window)
* updating the DOM directly


* useEffect(() => {}) // run on initial render and then again on every render
* useEffect(() => {}, [count]) // run on initial render and again only if the value of count changes
* useEffect(() => {}, []) // runs on initial render only


useCallback()


browser <==http/tcp==> web server (Node) <=====> rdbms







