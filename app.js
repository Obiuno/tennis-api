const express = require("express");
const cors = require("cors");

// get routeres
const tennisRouter = require("./server/routes/tennis");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tennis", tennisRouter);

module.exports = app;
