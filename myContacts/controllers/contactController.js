// get all contacts
// get /contacts
// const getAllContacts = async (req, res) => {
//   try {
//     res.send("contacts page");
//   } catch (error) {
//     res.send(error);
//   }
// };

// asyncHandler로 재작성
const asyncHandler = require("express-async-handler");

// try catch 안 써도 됨
const getAllContacts = asyncHandler(async (req, res) => {
  res.send("contacts page");
});

// create contact
// post /contacts
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  res.send("Create Contacts");
});

// get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  res.send(`View contact for ID: ${req.params.id}`);
});

// put /contacts/:id
const modifyContact = asyncHandler(async (req, res) => {
  res.send(`Update contact for ID: ${req.params.id}`);
});

// delete /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.send(`Delte contact for ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  modifyContact,
  deleteContact,
};
