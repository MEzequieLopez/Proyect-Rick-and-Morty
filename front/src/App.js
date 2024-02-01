import "./App.css";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./views/About.jsx";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    try {
      const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const [access, setAccess] = useState(false);
  const EMAIL = " ";
  const PASSWORD = " ";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccees(access);
      access && navigate("/home");
      if (!access) alert("contraseña no es correcta");
    } catch (error) {
      console.log(error.message);
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    // !access && navigate("/home");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      {/* { location.pathname !== "/" ? <Nav onSearch = {onSearch} />} :null */}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
