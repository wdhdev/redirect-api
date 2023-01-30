const express = require("express");
const app = express();

require("dotenv").config();

const router = require("./router");
const port = process.env.port;

app.use("/", router);

app.listen(port, () => {
    console.log(`[API] Listening on Port: ${port}`);
})