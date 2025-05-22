const express = require("express");
const { body } = require("express-validator");
const { addSchool, listSchools } = require("../controllers/schoolController");
const validateSchool = require("../middlewares/validateSchool");

const router = express.Router();

router.post(
  "/addSchool",
  [
    body("name").notEmpty(),
    body("address").notEmpty(),
    body("latitude").isFloat(),
    body("longitude").isFloat(),
  ],
  validateSchool,
  addSchool
);

router.get("/listSchools", listSchools);

module.exports = router;
