const express = require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// Check Login
// 로그인을 체크하는 미들웨어
// 관리자인지 아닌지 체크
// 관리자 토큰이 있는지 없는지 체크
// 토큰이 없으면 로그인 창으로 리다이렉트
// 토큰이 있으면 내가 발행한 것인지 체크
const checkLogin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.redirect("/admin");
  } else {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.redirect("/admin");
    }
  }
};

// Admin Page
// GET /admin
router.get("/admin", (req, res) => {
  const locals = {
    title: "관리자 페이지",
  };
  // adminlayout을 이용해서 admin 폴더에 있는 index.ejs를 표시
  res.render("admin/index", { locals, layout: adminLayout2 });
});

// Check Login
// POST /admin
router.post(
  "/admin",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "일치하는 사용자가 없습니다." });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다" });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/allPosts");
  })
);

// View Register Form
// GET /register
router.get(
  "/register",
  asyncHandler(async (req, res) => {
    res.send("admin/index", { layout: adminLayout2 });
  })
);

// Register Administrator
// POST / register
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    // 요청 본문에 담긴 암호를 해시화 시켜서 변수에 저장
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

// Get all posts
// GET /allPosts
router.get(
  "/allPosts",
  checkLogin,
  asyncHandler(async (req, res) => {
    const locals = {
      title: "Posts",
    };
    const data = await Post.find();
    res.render("admin/allPosts", { locals, data, layout: adminLayout });
  })
);

// Admin logout
// GET /logout
router.get("/logout", (req, res) => {
  // 'token' 쿠키 정보 삭제
  res.clearCookie("token");
  res.redirect("/");
});

// Admin - Add Post
// GET /add
router.get(
  "/add",
  checkLogin,
  asyncHandler(async (req, res) => {
    const locals = {
      title: "게시물 작성",
    };
    res.render("admin/add", { locals, layout: adminLayout });
  })
);

// Admin - Add post
// POST /add
router.post(
  "/add",
  checkLogin,
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const newPost = new Post({ title: title, body: body });

    await Post.create(newPost);
    res.redirect("/allPosts");
  })
);

// Admin - Edit Post
// GET /edit/:id
router.get(
  "/edit/:id",
  checkLogin,
  asyncHandler(async (req, res) => {
    const locals = { title: "게시물 편집" };
    const data = await Post.findOne({ _id: req.params.id });
    res.render("admin/edit", { locals, data, layout: adminLayout });
  })
);

// Admin - Edit Post
// PUT /edit/:id
router.put(
  "/edit/:id",
  checkLogin,
  asyncHandler(async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      body: req.body.body,
      createdAt: Date.now(),
    });
    res.redirect("/allPosts");
  })
);
module.exports = router;
