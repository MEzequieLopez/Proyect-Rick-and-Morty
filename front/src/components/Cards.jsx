import Card from './Card';

export default function Cards({characters, onClose}) {
   return (<div>
      { characters.map(caracteres => (
       <Card 
       key ={caracteres.id} 
       id = {caracteres.id}
       name = {caracteres.name} 
       status = {caracteres.status}
       species={caracteres.species} 
       gender = {caracteres.gender} 
       origin={caracteres.origin.name}
       image={caracteres.image}
       onClose={onClose} 
         />
      ))}
   
 </div>
 )};

