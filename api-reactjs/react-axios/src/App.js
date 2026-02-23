import React, {useEffect, useState} from "react";
import api from "./services/api";

export default function App() {
    const [user, setUser] = useState(null);
    
    useEffect (() =>{
      async function loadUser() {
        try{
          const response = await api.get('/users/ricardoslima18');
          setUser(response.data);
      } catch(error){
        console.error('Deu erro babaca', error)
      }
    }
    loadUser();
    },[]);

    if(!user) return <div>Carregando...</div>;
    return(
      <div className={App}>
        <p>Usuário: {user.login}</p>
        <p>Biografia: {user.bio || 'Sem biografia'}</p>
      </div>
    );

}
