require("dotenv").config();
const express = require("express");

const app = express();
// env파일에 port가 있으면 그것을 쓰고 아니면 3000으로 사용
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App listeing on port ${port}`);
});
