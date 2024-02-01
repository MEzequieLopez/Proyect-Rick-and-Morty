let favorite = [];
//FRONT => body { id: , name: , ... }
const postFav = (req, res) => {
  favorite.push(req.body);
  return res.json(favorite);
};

const deleteFav = (req, res) => {
  // host/rick&morty/fav/:id
  const { id } = req.params;
  favorite = favorite.filter((fav) => fav.id !== Number(id));
  return res.json(favorite);
};

module.exports = { postFav, deleteFav };
