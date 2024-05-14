const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";

// // app -> router
// router.get("/", (req, res) => {
//   res.send("hello world");
// });

// /home으로 요청이 들어오면 index.ejs를 보여줘
// { layout: mainLayout } => 레이아웃을 사용함
router.get(["/", "/home"], (req, res) => {
  // title 이름 바꾸기
  const locals = { title: "Home" };
  res.render("index", { locals: locals, layout: mainLayout });
});

router.get("/about", (req, res) => {
  // title 이름 바꾸기
  const locals = { title: "about" };
  res.render("about", { locals, layout: mainLayout });
});

module.exports = router;
