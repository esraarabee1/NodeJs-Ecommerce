const express = require("express");

const { createSubCategory } = require("../services/subCategoryService");
const {
  createSubCategoryValidator,
} = require("../utils/validator/subCategoryValidator");

// mergeParams: Allow us to access parameters on other routers
// ex: We need to access categoryId from category router
const router = express.Router({ mergeParams: true });

router.route("/").post(createSubCategoryValidator, createSubCategory);

module.exports = router;
