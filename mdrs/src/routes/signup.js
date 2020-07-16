require("dotenv").config();

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const User = require("../model/GestotIE/user");
const Registro = require("../model/GestorRegistro/registro");
const Restaurante = require("../model/GestorRestaurante/restaurante");
//const authenticateToken = require("../lib/middlewares/authToken");

router
  .route("/signup-ie")
  .get((req, res) => {
    res.render("viewSignupIE/signupie");
  })
  .post(async (req, res) => {
    try {
      const newUser = await Registro.registrarUsuario(req.fields);
      /*  const accessToken = jwt.sign(
        ({ userName, email } = req.fields),
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ token: accessToken }); */
      res.json({ message: "Usuario registrado" });
    } catch (error) {
      res.status(500).json({ err: error });
      console.log(error);
    }
  });

router
  .route("/signup-res")
  .get((req, res) => {
    res.render("viewSignupRes/signupres");
  })
  .post(async (req, res) => {
    try {
      const restaurante = new Restaurante(req.fields);
      const newRest = await restaurante.save();
      //res.setHeader("Content-Type", "application/json");
      res.json({ message: "Restaurante registrado" });
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  });

module.exports = router;
