const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const productRouter = require("./routes/product");

const server = express();

// db connection
async function main() {
  await mongoose.connect(process.env.MongoDB_URL);
  console.log("connected to database");
}
main().catch((err) => console.log(err));

server.use(express.static(path.resolve(__dirname + "/build")));
server.use(express.json());
server.use(cors());
server.use("/products", productRouter.routes);
server.use(morgan("dev"));

// import for routing
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/build/index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`node server started at http://localhost:${process.env.PORT}`);
});
