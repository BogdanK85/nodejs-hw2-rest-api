const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST } = process.env;
const DB_HOST =
  "mongodb://Bogdan:5BT4i6q594KFGCUr@ac-xiacy5r-shard-00-00.xd8pay8.mongodb.net:27017,ac-xiacy5r-shard-00-01.xd8pay8.mongodb.net:27017,ac-xiacy5r-shard-00-02.xd8pay8.mongodb.net:27017/db-contacts?ssl=true&replicaSet=atlas-lnmci9-shard-0&authSource=admin&retryWrites=true&w=majority";

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
