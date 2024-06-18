# M03W06 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

### Web Server
* server that serves up HTML, CSS, JS, images, video, audio
* understands HTTP

### HTTP
* Hyper Text Transfer Protocol
* HTTP is built on top of TCP
* request/response protocol

client <====== tcp/http ======> server
response

### Request
* HTTP Method/Verb: GET, POST
  * GET => I want to retrieve a resource (READ in CRUD)
  * POST => I have info for the web server (CREATE, UPDATE, DELETE in CRUD)
* URL/path/endpoint: a string that represents a resource of some kind (or an action)
  * http://localhost:3000
  * /home, /about, /products, /search
* Body => the data you want to send to the server

### Response
* status code
  * 404 page not found
  * 401 not authorized
  * 200 okay
  * 500 server error

  * 1xx routing codes
  * 2xx everything is okay
  * 3xx redirection
  * 4xx client made a mistake
  * 5xx something wrong with the server

* optional body

### Middleware
* code (in the form of a JS function) that runs between the request and the response

                                    web server
client <======== tcp/http =========> middleware <====> middleware <===> route handler
                                                                          request
                                     body-parser      cookie-parser
                                      req.body        req.cookies
                                      next()            next()










