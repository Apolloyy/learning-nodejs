const fastify = require("fastify");

const server = fastify();
server.listen({
  port: 3000,
});

server.get("/", () => {
  return "Hello World";
});

server.get("/gdf", () => {
  return "Hello GDF97";
});

server.get("/pll", () => {
  return "pll";
});

// using fastify
// localhost:3000
