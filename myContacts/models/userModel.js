const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", UserSchema);
// 모델명은 단수 + 대문자로 시작
// "User"라고 쓰면 Mongo DB에는 MyContacts 밑에 users 라고 소문자 + 복수 형태로 컬렉션이 만들어짐
