const express = require("express");
const router = express.Router();
const WilderController = require("../../controller/WilderController.js");

router
  .get("/", WilderController.read)
  .post("/", WilderController.create)
  .put("/:id", WilderController.update)
  .delete("/:id", WilderController.delete)
  .post("/:wilderId/skill/:skillId", WilderController.addSkill);

module.exports = router;
