const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { ArgonauteModel } = require("../models/ArgonauteModel");

router.get("/", (req, res) => {
  ArgonauteModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data" + err);
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) res.status(400).send("ID unknow: " + req.params.id);

  ArgonauteModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Get error: " + err);
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

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) res.status(400).send("ID unknow: " + req.params.id);

  const argonauteUpdate = {
    name: req.body.name,
    age: req.body.age,
  };
  ArgonauteModel.findByIdAndUpdate(req.params.id, { $set: argonauteUpdate }, { new: true }, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Update error: " + err);
  });
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) res.status(400).send("ID unknow: " + req.params.id);
  ArgonauteModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error: " + err);
  });
});

module.exports = router;
