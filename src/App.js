import './App.css';
import axios from "axios";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import About from './views/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Nav from "./components/Nav.jsx";
import NotFound from './components/NotFound.jsx';


const URL = "https://rickandmortyapi.com/api/character/"


function App() {
   
   const location = useLocation();
   const navigate = useNavigate();
   
   const [characters,setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`${URL}${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
         );
         navigate("/home")
      }
      
      const onClose = id => { 
         setCharacters(characters.filter(char => char.id !== Number(id)))
      }
      
      const [access, setAccess] = useState(false);
      const EMAIL = 'ejemplo@gmail.com';
      const PASSWORD = '123456';
      
      function login(userData) {
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }else {
            alert("contraseña o email incorrectos")
         }
      }

      function logout(){
         setAccess(false);
      }
      
      useEffect(() => {
         !access && navigate('/');
      }, [access]);
      
      return (
         <div className='App'>
         { location.pathname !== "/" && <Nav onSearch = {onSearch} logout={logout} />}
         {/* { location.pathname !== "/" ? <Nav onSearch = {onSearch} />} :null */}
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/detail/:id" element={<Detail/>}/>

            <Route path='*' element= {<NotFound/>}/>
            
         <Route path='/' element={<Form login={login} />} />
         </Routes>
      </div>
   )
}

export default App;
