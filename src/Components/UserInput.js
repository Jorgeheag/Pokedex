import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux'; 
import askandpika from "../images/askandpika.webp"


const UserInput = () => {

    const [userName,  setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = (e)=>{
      
        dispatch(changeUser(userName));
        navigate("/pokedesck")

    }

    return (
        <div className='conten-into'>
         <form className='Into' onSubmit={getName}> 
           <h1>Entrenador Pokemon</h1>
           <img src={askandpika} alt="" />
           <input placeholder='Nombre' id='into-imput' type="text" value={userName} onChange ={e=> setUserName(e.target.value)} />
           <button >Atraparlos Ya!</button>
         </form>
        </div>
        
    );
};

export default UserInput;