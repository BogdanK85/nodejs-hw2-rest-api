const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(4000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    console.log(error);
    process.exit(1);
  });
