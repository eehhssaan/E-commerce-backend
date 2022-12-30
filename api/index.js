require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");

const connectDB = require("../config/db");

const categoryRoutes = require("../routes/categoryRoutes");
const productRoutes = require("../routes/productRoutes");
const couponRouters = require("../routes/couponRoutes");
const userRoutes = require("../routes/userRoutes");
const orderRoutes = require("../routes/orderRoutes");
const userOrderRoutes = require("../routes/userOrderRoutes");
const adminRoutes = require("../routes/adminRoutes");

const { isAuth } = require("../config/auth");

connectDB();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("App works properly!");
});

//this for route will need for store front, also for admin dashboard
app.use("/api/category/", categoryRoutes);
app.use("/api/product/", productRoutes);
app.use("/api/coupon/", couponRouters);
app.use("/api/user/", userRoutes);
app.use("/api/order/", isAuth, userOrderRoutes);

//if you not use admin dashboard then these two route will not needed.
app.use("/api/admin/", adminRoutes);
app.use("/api/orders/", isAuth, orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
