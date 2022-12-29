const express = require("express");
var bodyParser = require("body-parser");

const connectDB = require("../config/db");
const categoryRoutes = require("../routes/categoryRoutes");
const productRoutes = require("../routes/productRoutes");
const couponRouters = require("../routes/couponRoutes");

connectDB();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("App works properly!");
});

app.use("/api/category/", categoryRoutes);
app.use("/api/product/", productRoutes);
app.use("/api/coupon/", couponRouters);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
