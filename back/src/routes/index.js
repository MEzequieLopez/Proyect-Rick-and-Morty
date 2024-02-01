const getCharById = require("../controllers/getCharById");
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const router = require("express").Router();

// Todas las rutas host/rickandmorty
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;