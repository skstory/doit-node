const express = require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Admin Page
// GET /admin
router.get("/admin", (req, res) => {
  const locals = {
    title: "관리자 페이지",
  };
  // adminlayout을 이용해서 admin 폴더에 있는 index.ejs를 표시
  res.render("admin/index", { locals, layout: adminLayout2 });
});

// View Register Form
// GET /register
router.get(
  "register",
  asyncHandler(async (req, res) => {
    res.send("admin/index", { layout: adminLayout2 });
  })
);

// Register Administrator
// POST / register
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    // 요청 본문에 암호를 해시화 시켜서 변수에 저장
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // 브라우저 창을 통해서 사용자 이름이나 비밀번호는 요청 본문(req.body)에 담기게 됨.
    // req.body에 담긴 값을 프로그램에 사용할 수 있도록 파싱해주는 미들웨어를 추가해 줘야 함
    // app.js에 아래 내용 추가
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));
    // create 함수를 이용해 새로운 사용자 추가
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    // res.json(`user created : ${user}`);
  })
);

module.exports = router;
