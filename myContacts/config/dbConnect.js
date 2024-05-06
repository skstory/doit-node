// 데이터베이스르 연결하는 모듈

const mongoose = require("mongoose");
// 변수는 필요하지 않기 때문에 할당 안 하고 실행만 시킴
require("dotenv").config();

// 데이터베이스에 접속해서 그 안에 있는 내용을 가지고 무엇을 하기 위해서는 비동기 처리를 해줘야함
// async & await
const dbConnect = async () => {
  try {
    // mongoose 모듈에서 connect 함수를 이용해서 데이터베이스에 접속.
    // 괄호 안에는 데이터베이스 연결하는 주소가 들어감(커넥션 스트링).
    // process.env (env 파일에 있는 내용을 가져오는 객체)
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
