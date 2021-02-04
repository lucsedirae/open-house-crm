//* Dependencies
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const app = express();

//* Connect to database
connectDB();

//* Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//*Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/inventory", require("./routes/inventory"));
app.use("/api/forum", require("./routes/forum"));

//* Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //* Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 8080;

//*Initialize server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
