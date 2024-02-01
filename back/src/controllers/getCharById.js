const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const charid = req.params.id;
    const { data } = await axios.get(`${URL}/${charid}?key=${API_KEY}`);
    const { id, status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };
    return character.name
      ? res.json(character)
      : res.status(404).send("Not found.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;


