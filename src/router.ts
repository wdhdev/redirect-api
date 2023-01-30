const { Router } = require("express");
const controller = Router();

require("dotenv").config();

controller.get("*", async (req: any, res: any) => {
    res.redirect(process.env.url);
})

module.exports = controller;