const express = require("express");
const app = express();

app.get("/async-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async error occurred!"));
  } catch (err) {
    next(err);
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});