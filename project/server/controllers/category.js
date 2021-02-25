//schema import
const Category = require("../models/category");
const Product = require("../models/category");

//create new category
exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json({ data });
  });
};

//show category
exports.showCategory = (req, res) => {
  return res.json(req.category);
};

//update category
exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json(data);
  });
};

//delete category
exports.deleteCategory = (req, res) => {
  const category = req.category;
  category.remove((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json({
      message: "Category was removed",
    });
  });
};

//show the list of categories
exports.listCategories = (req, res) => {
  Category.find().exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json(data);
  });
};
