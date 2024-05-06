const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// try catch 안 써도 됨
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  // 템플릿 파일을 표시할 때는 res.render 함수
  // res.render("getAll.ejs");
  res.render("index", { contacts: contacts });
});

// View add Contact form
// Get /contacts/add
const addContactForm = (req, res) => {
  res.render("add");
};

// create contact
// post /contacts/add
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  const contact = await Contact.create({ name, email, phone });
  //   res.send("Create Contacts");
  res.render("add", { contact: contact });
});

// get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update", { contact: contact });
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

  //페이지 경로를 contacts로 변경
  res.redirect("/contacts");
});

// delete /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await Contact.findByIdAndDelete(id);

  res.redirect("/contacts");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  modifyContact,
  deleteContact,
  addContactForm,
};
