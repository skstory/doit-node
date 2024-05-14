const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// .env 파일에 있던 JWT_SECRET이라는 환경 변수 값을 가져와서 jwtSecret 변수에 할당
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// Get login page
// GET /
const getLogin = (req, res) => {
  // home 으로 이동
  res.render("home");
};

// Login User
// Post /
// 서버에서 사용자 정보를 가지고 와서 체크를 해야하기 때문에 비동기처리
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //   if (username === "admin" && password === "1234") {
  //     res.send("Login success");
  //   } else {
  //     res.send("Loin faild");
  //   }
  // 데이터베이스에서 사용자 이름을 이용해서 찾아옴
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ message: "일치하는 사용자가 없습니다." });
  }
  // 비밀번호 비교
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: "비밀번호가 맞지 않습니다." });
  }
  const token = jwt.sign({ id: user._id }, jwtSecret);
  // "token" 토큰 이름
  // httpOnly : true : http 프로토콜을 통해서만 접속할 수 있도록 하는 방법
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/contacts");
});

// Register page
// GET /register
const getRegister = (req, res) => {
  res.render("register");
};

// Register User
// Post /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (password === password2) {
    // 사용자가 정의한 암호를 hash로 저장
    const hashedPassword = await bcrypt.hash(password, 10);
    // create 함수 : 데이터베이스에 새로운 자료를 추가할 때 사용
    const user = await User.create({ username, password: hashedPassword });
    res.json({ message: "Register successful", user });
  } else {
    res.send("Register Failed");
  }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
