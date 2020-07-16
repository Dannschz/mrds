const express = require("express");
const router = express.Router();
const path = require("path");
//const authenticateToken = require("../lib/middlewares/authToken");
const User = require("../model/GestotIE/user");
const Restaurante = require("../model/GestorRestaurante/restaurante");
//const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.render("viewHome/home");
});

router
  .route("/login")
  .get((req, res) => {
    res.render("viewLogin/login");
  })
  .post(async (req, res) => {
    const user =
      req.fields.user == "ie"
        ? await User.findOne({
            email: req.fields.email,
            password: req.fields.password,
          })
        : await Restaurante.findOne({
            email: req.fields.email,
            password: req.fields.password,
          });
    try {
      console.log(user);
      // const accessToken = jwt.sign(
      //   { userName: user.userName, email: user.email },
      //   process.env.ACCESS_TOKEN_SECRET
      // );
      // req.headers.authorization = accessToken;
      if (user.owner) {
        res.json({
          message: "loged restaurant",
          userName: user.name,
          email: user.email,
        });
      } else {
        res.json({
          message: "loged ie",
          userName: user.userName,
          email: user.email,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ err: error });
    }
  });

router.get("/restaurantes", (req, res) => {
  res.render("viewRestaurantesPG/restaurantes");
});

router.get("/ie", (req, res) => {
  res.render("viewIE/inicioIE", { layout: "ie" });
});

router.get("/ie/perfil", (req, res) => {
  res.render("viewPerfilIE/perfilIE", { layout: "ie" });
});

router.get("/ie/reservaciones", (req, res) => {
  res.render("viewReservacionesIE/reservacionesIE", { layout: "ie" });
});

router.get("/ie/ordenes", (req, res) => {
  res.render("viewOrdenesIE*/ordenesIE", { layout: "ie" });
});

router.get("/ie/carrito", (req, res) => {
  res.render("viewCarrito/carritoIE", { layout: "ie" });
});

router.get("/rest", (req, res) => {
  res.render("viewHomeRes/inicioR", { layout: "rest" });
});

router.get("/rest/menu", (req, res) => {
  res.render("viewMenuRes/menurest", { layout: "rest" });
});

router.put("/api/products", async (req, res) => {
  console.log(req.fields);
  try {
    const products = await Restaurante.findOne({ "email": req.fields.email });
    console.log(products.menus[0].products);
    res.json({
      products: products.menus[0].products,
      nameMenu: products.menus[0].name,
    });
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});

router.post("/api/products", async (req, res) => {
  console.log(req.fields);
  const { email, name, desc, price } = req.fields;
  try {
    const rest = await Restaurante.findOne({ "email": email });
    //console.log(rest.menus[0]);
    rest.menus[0].products.push({
      "name": name,
      "desc": desc,
      "price": price,
    });
    const updated = await rest.save();
    console.log(updated.menus[0].products);
    res.json({ products: updated.menus[0].products });
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/restaurantes", async (req, res) => {
  try {
    const rests = await Restaurante.find({});
    const restaurantes = rests.map((rest) => {
      return { id: rest._id, name: rest.name, menus: rest.menus };
    });
    //console.log(restaurantes);
    res.json({ restaurantes: restaurantes });
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});

router.get("/logout", (req, res) => {
  res.render("viewLogout/logout", { layout: "rest" });
});

router.get("/ie/rest/:id", async (req, res) => {
  console.log(req.params);
  try {
    const rest = await Restaurante.findById(req.params.id);
    const products = rest.menus[0].products;
    res.render("viewResPropietario/restowner", {
      layout: "rest",
      products: products.toObject(),
    });
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});

module.exports = router;
