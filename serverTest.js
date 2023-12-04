// // const mongoose = require("mongoose");

// const app = require("./app");

// // const DB_HOST =
// // "mongodb+srv://kobakbogdan:SOI9B9Ne8rYyoui5@homework.ok1ifvm.mongodb.net/?retryWrites=true&w=majority";
// // "mongodb+srv://Bogdan:5BT4i6q594KFGCUr@cluster0.xd8pay8.mongodb.net/db-contacts?retryWrites=true&w=majority";

// // mongoose.set("strictQuery", true);
// // mongoose
// //   .connect(DB_HOST)
// //   .then(() => {
// //     app.listen(4040);
// //     console.log("Database connection successful");
// //   })
// //   .catch((error) => {
// //     console.log(error.message);
// //     console.log("qwe");
// //     process.exit(1);
// //   });

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://kobakbogdan:SOI9B9Ne8rYyoui5@homework.ok1ifvm.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     app.listen(4040);
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
