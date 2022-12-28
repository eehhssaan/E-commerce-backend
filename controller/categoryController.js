const Category = require("../models/Category");

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const resp = await newCategory.save();
    res.status(200).send({ message: "Category added successfully!" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllCategory = async (req, res) => {
  try {
    await Category.insertMany(req.body);
    res.status(200).send({
      message: "Category Added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingCategory = async (req, res) => {
  try {
    const categories = await Category.find({ status: "Show" }).sort({
      _id: -1,
    });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.send(categories);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.parent = req.body.parent;
      category.type = req.body.type;
      category.icon = req.body.icon;
      category.children = req.body.children;
      await category.save();
      res.send({ message: "Category Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Category not found" });
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Category.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: `Category ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteCategory = async (req, res) => {
  try {
    const result = await Category.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.status(200).send({ message: "Successfully deleted one category." });
    } else {
      res
        .status(500)
        .send({ message: "No category matched the query. Deleted 0!" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addCategory,
  addAllCategory,
  getShowingCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
};
