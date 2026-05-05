const express = require("express");
require("./config/db");

const { register, login } = require("./controllers/authController");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/register", register);
app.post("/login", login); 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});