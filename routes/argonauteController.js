const express = require("express");
const router = express.Router();

const { ArgonauteModel } = require("../models/ArgonauteModel");

router.get("/", (req, res) => {
  ArgonauteModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data" + err);
  });
});

router.post("/", async (req, res) => {
  const argonaute = ArgonauteModel({
    name: req.body.name,
    age: req.body.age,
  });

  await argonaute.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new Argonaute: " + err);
  });
});

module.exports = router;
