const mongoose = require("mongoose");

// 스키마 생성
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

// 모델링
module.exports = mongoose.model("Post", PostSchema);
