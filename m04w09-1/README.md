# M04W09 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript And XML (AJAJ)
* created by Microsoft
* eXtensible Markup Language
* JS making the HTTP requests for us without refreshing the page
* SPA

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```


```js
$.ajax({
  method: 'GET',
  url: '/urls',
  // data: // this is the body
  success: (response) => {},
  error: (err) => {}
});
```

textArea.change()
textArea.on('change')
textArea.keydown()
textArea.input()



http://localhost:8001/?
name=chocolate+cake
&price=4.99
&calories=1200
&tagline=tasty+tasty

name=chocolate%20cake
&price=12.99
&calories=1000
&tagline=hello%20world



















