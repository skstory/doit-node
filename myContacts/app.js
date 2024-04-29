// app.js는 애플리케이션 전체를 시작시키는 파일

const express = require("express");
const app = express();

// // 라우트 경로 추가
// // http 모듈에서는 if, else if 이런걸 이용해서 경로와 요청방식을 일일이 체크해줘야 함
// // express에서는 서버 이름 뒤에 요청 방식(get)을 함수 이름으로 사용한 후 요청 경로를 지정하고 어떤걸 실행할지 콜백함수 형태로 제공하면 됨
// app.get("/", (req, res) => {
//   res.send("Hello Node");
// });

// // 연락처 가져오기
// app.get("/contacts", (req, res) => {
//   res.send("Contacts Page");
// });

// // 새 연락처 추가하기
// app.post("/contacts", (req, res) => {
//   res.send("Create Page");
// });

// // 특정 연락처만 가져오고 싶을 때 route parameter (/:id)
// // 연락처 1개 가져오기
// app.get("/contacts/:id", (req, res) => {
//   res.send(`View contact for ID: ${req.params.id}`);
// });

// // 연락처 수정하기
// app.put("/contacts/:id", (req, res) => {
//   res.send(`Update contact for ID: ${req.params.id}`);
// });

// // 연락처 삭제하기
// app.delete("/contacts/:id", (req, res) => {
//   res.send(`Delte contact for ID: ${req.params.id}`);
// });

// >>>>
// 지금까지 작성한 것을 라우터 객체를 이용해서 수정
// 라우터 객체 만들기 ( router는 객체를 사용하기 위해서 틀로 찍어낸 인스턴스)
// const router = express.Router();

// router
//   .route("/contacts")
//   .get((req, res) => {
//     res.send("Contacts Page");
//   })
//   .post((req, res) => {
//     res.send("Create Page");
//   });

// router
//   .route("/contacts/:id")
//   .get((req, res) => {
//     res.send(`View contact for ID: ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update contact for ID: ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delte contact for ID: ${req.params.id}`);
//   });

// 라우터 미들웨어를 사용했다는 것을 어플리케이션에 알려줘야함
// app.use(router);
// >>>>
app.use("/contacts", require("./routes/contactRoutes"));
// => >>> router 잘라내서 routes/contactRoutes.js에 붙여넣어서 router만 따로 관리

// http 모듈로 서버를 만들 때는 createServer함수를 이용해서 만들어준 후 실행해야하지만
// express는 실행해주면 서버가 만들어짐
app.listen(4000, () => {
  console.log("서버 실행중");
});
