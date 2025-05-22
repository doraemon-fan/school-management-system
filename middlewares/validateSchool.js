const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => `${err.path}: ${err.msg}`);

    return res.status(400).json({
      message: "Validation failed. Please check the following fields:",
      errors: errorMessages
    });
  }
  next();
};
