const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Contacts Page");
  })
  .post((req, res) => {
    res.send("Create Page");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`View contact for ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delte contact for ID: ${req.params.id}`);
  });

module.exports = router;
