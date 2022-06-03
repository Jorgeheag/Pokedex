import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInput from './Components/UserInput';
import PokeDesk from './Components/PokeDesk';
import PokemonId from './Components/PokemonId';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  return(
       <HashRouter>
           <div>
            <Routes>
              <Route path='/' element= {<UserInput />}/>
              <Route element={<ProtectedRoutes/>}>
               <Route path='/pokedesck'element= {<PokeDesk />}/>
               <Route path='/pokedesck/:id'element= {<PokemonId />}/>
              </Route>
              
       </Routes>
          </div>
    
 </HashRouter>
  );
}

export default App;
