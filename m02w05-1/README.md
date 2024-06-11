# M02W05 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### What is networking?
* two or more machines talking to one another
* LAN parties? Local Area Network

### Internet Protocol (IP)
* provides an unique address on the internet that other computers can use (street address)
* IPv4 192.168.8.8 0-255
* IPv6 2001:db8:3333:4444:5555:6666:7777:8888

123 Main Street
340 Main Street

* Port => uniquely identifies one application on the computer (apt number)
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 3000 - 8000 dev ports
  * <1000 are reserved

192.168.8.8:5000

### Transport Layer Protocol
* information is broken down into packets (1/500, 50/500)
* header => ip address of the recipient; the ip of the sender

### Transmission Control Protocol (TCP)
* requires a connection (three-way handshake)
* missing packets are re-sent
* packets are re-ordered on arrival
* HTTP is built on top of TCP

I want to talk to you
I confirm, I want to talk to you too
I confirm

### User Datagram Protocol (UDP)
* connectionless
* no error correction
* order is first-come first-serve


client => wants information
server => have information

### Event-driven Programming
* the code doesn't run when the app starts
* only going to run when a particular event happens
* callbacks

object.on('event', () => {});
button.on('click', () => {});
form.on('submit', () => {});


fs.readFile('file-name', (err, data) => {});


connection.write('Move: up');
connection.write('Move: down');
connection.write('Move: left');
connection.write('Move: right');







