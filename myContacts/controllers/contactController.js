const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// try catch 안 써도 됨
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  const users = [
    { name: "jang", email: "jang@gmail.com", phone: "78945" },
    { name: "jin", email: "jin@gmail.com", phone: "32345" },
  ];

  // 템플릿 파일을 표시할 때는 res.render 함수
  // res.render("getAll.ejs");
  res.render("getAll", { users: users });
});

// create contact
// post /contacts
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  const contact = await Contact.create({ name, email, phone });
  res.send("Create Contacts");
});

// get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
});

// put /contacts/:id
const modifyContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new Error("Contact not found");
  }
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  contact.save();

  res.json(contact);
});

// delete /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new Error("Contact not found");
  }
  await Contact.deleteOne(contact);
  res.send(`Deleted`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  modifyContact,
  deleteContact,
};
