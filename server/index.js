const http = require("http");
const express = require("express");
const cors = require("cors");
const socketID = require("socket.io");
const app = express();
const port = 4500 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello its working");
});

const server = http.createServer(app);
const io = socketID(server);
server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
