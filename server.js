require("dotenv").config();

const express = require("express");
require("./config/db");

const { register, login } = require("./controllers/authController");
const auth = require("./middleware/auth");
const checkRole = require("./middleware/role");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/register", register);
app.post("/login", login);

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Welcome",
    user: req.user
  });
});

app.get("/admin", auth, checkRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});