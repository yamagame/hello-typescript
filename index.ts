import express = require("express");
import message = require("libs/message");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/port", (req, res) => {
  res.send(`PORT: ${port}`);
});

app.get("/hello", (req, res) => {
  res.send(message.HelloMessage("World"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
