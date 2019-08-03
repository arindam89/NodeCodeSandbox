var http = require("http");
const faker = require("faker");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

[...Array(100).keys()].forEach(number => {
  console.log(`Number ${number}: ${faker.name.findName()}`);
});
