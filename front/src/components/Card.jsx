import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div>
          <button onClick={() =>props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`} >
      <h2>{props.name}</h2>
      </Link>
         <h2>{props.name}</h2>
         <h4>{props.id}</h4>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt={props.name} /> 
      </div>
   );
}
