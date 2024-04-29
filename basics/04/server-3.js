// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");

// 서버 만들기
const server = http.createServer((req, res) => {
  //사용할 콘텐츠 타입이 텍스트라는 것을 지정
  res.setHeader("Content-type", "text/plain");
  res.write("Hello Node");
  res.end();
});

// 실행
server.listen(3000, () => {
  console.log("서버 실행 중");
});
