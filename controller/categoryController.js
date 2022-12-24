const Category = require("../models/Category");

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).send({ message: "Category added successfully!" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = { addCategory };
