import { useState } from "react";
import validation from "./validation";


export default function Form (props) {
    const [userData, setData] = useState({
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({
        email:"Ingrese su mail",
        password:"Ingrese su password",});

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setData({...userData, [property]:value})

        setErrors(validation({...userData, [property]:value}))
    }

    const handlerSubmit = event => {
        event.preventDefault();
        props.login(userData)
    }


    return(
        <form onSubmit={handlerSubmit} >
            <div> 
                <label htmlFor="email">email</label>
                <input type="text" name= "email" value={userData.email} onChange={handleChange}   />
                <p>{errors.email ? errors.email : null}</p>
            </div>

            <div><label htmlFor="password">password</label>
                <input type="text" name= "password" value={userData.password} onChange={handleChange} />
            <p>{errors.password ? errors.password : null}</p>
            </div>
            <button type="submit" disabled={errors.email || errors.password}>Login</button>
        </form>
    )
}