const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  modifyContact,
  deleteContact,
  addContactForm,
} = require("../controllers/contactController");

router.route("/").get(getAllContacts);
// add경로로 post 요청
router.route("/add").get(addContactForm).post(createContact);
router.route("/:id").get(getContact).put(modifyContact).delete(deleteContact);

module.exports = router;
