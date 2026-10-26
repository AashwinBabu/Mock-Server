
const jsonserver = require("json-server");
const path = require("path");

const server = jsonserver.create();
const router = jsonserver.router(path.join(__dirname, "db.json"));
const middleware = jsonserver.defaults();

server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Resume builder is running on port ${PORT}`);
});
