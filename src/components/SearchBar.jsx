import { useState } from "react";


export default function SearchBar(props) {
   const [id, setID] = useState([])
   const handleChange = (event) => {
      setID(event.target.value)
   }
   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setID("");
   }
   return (
      <div>
          <input type='text' onChange ={handleChange} 
          value ={id}/>
         <button onClick= {handleClick}>Agregar</button> 
      </div>
   );
}
