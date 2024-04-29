// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

console.log("Je t'aime mon amour !");
// 서버 만들기
const server = http.createServer((req, res) => {
  // req.url: 요청 경로
  // req.method : 요청 방식
  res.setHeader("Content-type", "text/plain");
  const { url, method } = req;
  // const url = req.url;
  // const method = req.method;

  if (method === "GET" && url === "/home") {
    res.write("Home");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.write("About");
    res.end();
  } else {
    res.end("Not Found");
  }
});

// 서버를 만들고 라우더를 처리하는 과정을 쉽게 도와주는 것이 express

// 실행
server.listen(3000, () => {
  console.log("서버 실행 중");
});
