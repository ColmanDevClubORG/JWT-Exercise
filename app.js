import express from "express";
import * as cyber from "./src/utils/cyber.js";

const app = express();
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists - optional

  // Create a new user that has id, email and password

  // Generate a JWT that includes the user's info

  res.status(201).json({
    message: "User registered successfully",
    token,
  });
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user in our in-memory array
  
  // Generate a JWT for the user
  
  res.json({
    message: "Logged in successfully",
    token,
  });
});


app.get("/protected", (req, res) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  //Extract the actual token

  try {
    // Verify and decode the token
    
    res.json({
      message: "Protected route accessed",
      decoded,
    });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
});
  
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
