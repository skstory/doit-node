const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// // app -> router
// router.get("/", (req, res) => {
//   res.send("hello world");
// });

// /home으로 요청이 들어오면 index.ejs를 보여줘
// { layout: mainLayout } => 레이아웃을 사용함
router.get(
  ["/", "/home"],
  asyncHandler(async (req, res) => {
    // title 이름 바꾸기
    const locals = { title: "Home" };
    const data = await Post.find();
    // res.render : 설정된 템플릿 엔진을 사용해서 views를 렌더링합니다.
    // 'index.ejs'를 render
    res.render("index", { locals: locals, data, layout: mainLayout });
  })
);

router.get("/about", (req, res) => {
  // title 이름 바꾸기
  const locals = { title: "about" };
  res.render("about", { locals, layout: mainLayout });
});

// 게시물 상세 보기
// GET /post/:id
router.get(
  "/post/:id",
  asyncHandler(async (req, res) => {
    // 데이터베이스에서 id 값에 해당하는 자료를 찾아와서 data로 할당해라
    // req.params는 요청할 때 같이 넘겨준 파라미터
    // 아이디 값과 게시물의 아이디가 같은 값을 찾아라!
    const data = await Post.findOne({ _id: req.params.id });
    //post.ejs
    res.render("post", { data, layout: mainLayout });
  })
);

module.exports = router;

// myBlog posts에 임시데이터 저장하기 (한번 저장 후 mongo 확인 후에 잘 저장되어 있으면 주석 처리하기)
// Post.insertMany([
//   { title: "제목 1", body: "내용 1" },
//   { title: "제목 2", body: "내용 2" },
//   { title: "제목 3", body: "내용 3" },
// ]);
