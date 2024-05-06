const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

// 내가 사용할 템플릿이 무엇이고, 템플릿 파일이 어디에 저장되는지 알려줌
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적파일 위치 지정
app.use(express.static("./public"));

// 데이터베이스에 접속
dbConnect();

// 바디파서 : 요청할 때 전송한 자료를 프로그램에서 사용할 수 있는 형식으로 변환하는 것
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(4000, () => {
  console.log("서버 실행중");
});
