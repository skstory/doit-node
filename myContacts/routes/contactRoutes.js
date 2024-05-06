const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  modifyContact,
  deleteContact,
} = require("../controllers/contactController");

router
  .route("/")
  // => controllers/contactController.js getAllContacts로 옮김
  // .get((req, res) => {
  //   res.send("Contacts Page");
  // })
  .get(getAllContacts)
  // .post((req, res) => {
  //   console.log(req.body);
  //   const { name, email, phone } = req.body;
  //   if (!name || !email || !phone) {
  //     return res.send("필수 값이 입력되지 않았습니다.");
  //   }
  //   res.send("Create Contacts");
  .post(createContact);

// router
//   .route("/:id")
//   .get((req, res) => {
//     res.send(`View contact for ID: ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update contact for ID: ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delte contact for ID: ${req.params.id}`);
//   });
router.route("/:id").get(getContact).put(modifyContact).delete(deleteContact);

module.exports = router;
