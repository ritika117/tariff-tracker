const PORT = process.env.PORT || 5000;
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());


app.use("/api/v1/transactions", require("./routes/transactions"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


// const usersRouter = require("./routes/user");
// app.use("/api/users", usersRouter);
// const friendsRouter = require("./routes/friend");
// app.use("/api/friends", friendsRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
