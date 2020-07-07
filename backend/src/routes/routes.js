const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/home/index.html"))
})

router.get("/signup-ie", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/signup/signupie.html"));
})

router.get("/signup-res", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/signup/signupres.html"));
})

router.get("/login-ie", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/login/login.html"))
})

router.get("/restaurantes", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/restaurante/restaurantes.html"))
})

module.exports = router;