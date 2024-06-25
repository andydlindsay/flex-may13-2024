# M03W07 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Login user with username and password
- [x] Protect endpoints against non-logged in users
- [x] Clearing a cookie (aka user logout)
- [x] Register user with username and password

### Issue with HTTP
* is a stateless protocol
* neither party has to remember any previous interactions
* cookies
* key/value pairs stored in the browser at the request of the server
* every HTTP request to the server will contain the cookies (AJAX)
* cookies are domain-specific localhost:5000 localhost:5001

code folding

GET /login
POST /login


POST => Redirect => GET 

```js
// set a cookie
res.cookie('cookieName', 'cookie-value');

// read a cookie
req.cookies.cookieName;

// clear a cookie
res.clearCookie('cookieName');
```



















