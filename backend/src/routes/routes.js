const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/home/index.html"))
})

router.get("/signup-ie", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/login/signupie.html"));
})

router.get("/signup-res", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/login/signupres.html"));
})

module.exports = router;