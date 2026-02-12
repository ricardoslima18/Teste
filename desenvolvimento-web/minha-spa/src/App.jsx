import {BrowsterRouter, Routes, Route, Link } from 'react-router-dom' ;
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import {Sobre} from './pages/Sobre';



function App(){
  return(
    <BrowsterRouter>
    <Navbar/>
    </BrowsterRouter>
  );
}

export default App
