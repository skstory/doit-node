require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");

const app = express();
// env파일에 port가 있으면 그것을 쓰고 아니면 3000으로 사용
const port = process.env.PORT || 3000;

// mongoDb 연결
connectDb();

// ejs 사용하기 위해
// expresslayout 사용
app.use(expressLayouts);
// view engine은 ejs를 사용
app.set("view engine", "ejs");
// 템플릿 파일은 views 폴더 안에 저장해 놓았다
app.set("views", "./views");

app.use(express.static("public"));

app.use("/", require("./routes/main"));

app.listen(port, () => {
  console.log(`App listeing on port ${port}`);
});
