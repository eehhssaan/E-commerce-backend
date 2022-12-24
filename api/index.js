const express = require("express");

const connectDB = require("../config/db");
const categoryRoutes = require("../routes/categoryRoutes");

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("App works properly!");
});

//this for route will need for store front, also for admin dashboard
app.use("/api/category/", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
