// 연락처 스키마
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: [true, "전화번호를 꼭 기입해 주세요."] },
  },
  {
    // 자료가 작성되거나 수정될 때 시간을 기록해주는 속성
    timestamps: true,
  }
);

// 스키마 -> 모델로 바꿔줘야 함
// mongoose.model('모델명', 스키마명)
const Contacts = mongoose.model("Contact", contactSchema);
module.exports = Contacts;
