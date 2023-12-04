const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb://Bogdan:5BT4i6q594KFGCUr@ac-xiacy5r-shard-00-00.xd8pay8.mongodb.net:27017,ac-xiacy5r-shard-00-01.xd8pay8.mongodb.net:27017,ac-xiacy5r-shard-00-02.xd8pay8.mongodb.net:27017/?ssl=true&replicaSet=atlas-lnmci9-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb://kobakbogdan:SOI9B9Ne8rYyoui5@ac-xzacd0x-shard-00-00.ok1ifvm.mongodb.net:27017,ac-xzacd0x-shard-00-01.ok1ifvm.mongodb.net:27017,ac-xzacd0x-shard-00-02.ok1ifvm.mongodb.net:27017/hwDBtest?ssl=true&replicaSet=atlas-rg0nuj-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb://kobakbogdan:SOI9B9Ne8rYyoui5@ac-xzacd0x-shard-00-00.ok1ifvm.mongodb.net:27017,ac-xzacd0x-shard-00-01.ok1ifvm.mongodb.net:27017,ac-xzacd0x-shard-00-02.ok1ifvm.mongodb.net:27017/homework-1?ssl=true&replicaSet=atlas-rg0nuj-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb+srv://kobakbogdan:SOI9B9Ne8rYyoui5@homework.ok1ifvm.mongodb.net/hw-03?retryWrites=true&w=majority";
// "mongodb+srv://Bogdan:5BT4i6q594KFGCUr@cluster0.xd8pay8.mongodb.net/db-contacts?retryWrites=true&w=majority";

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
