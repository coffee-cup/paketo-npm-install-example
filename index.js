const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.type("application/json").code(200);
  return { hello: "world" };
});

fastify.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  console.log('boop');
  if (err) throw err;
});
