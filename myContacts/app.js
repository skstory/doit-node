const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

// 데이터베이스에 접속
dbConnect();

// 바디파서 : 요청할 때 전송한 자료를 프로그램에서 사용할 수 있는 형식으로 변환하는 것
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(4000, () => {
  console.log("서버 실행중");
});
