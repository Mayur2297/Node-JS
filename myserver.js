
const fs = require('fs').writeFileSync;
const http = require('http');

// http.createServer(function (req,res) {
//   res.writeHead(200, {
//     'Content-Type':'text/html'
//   });
//   res.end('Hello Worldsssdsdsdsasdadsdd');

// }).listen(8081);


http.createServer((req,resp) => {

  resp.write("<h1>Hiiiiiiiiiiiiiiissiiiiiiiiiiii</h1>");
  resp.end();
}).listen(8091);

fs('abc.txt','hdjhdjhdj')

console.log(__dirname);