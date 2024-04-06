import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.write("Hello World");

  return response.end();
});

server.listen(3000);

//localhost:3000

//only node
