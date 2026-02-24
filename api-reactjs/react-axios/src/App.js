import {useEffect, useState} from "react";
import api from "./services/api";
import './App.css';

export default function App() {
    const [username, setUsername] = useState('ricardoslima18');
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  // Carrega dados do api
    useEffect (() =>{
    async function loadData( userToSearch = username){
      try {
        setLoading(true);
        setError(null);

          //Carrega Usuario
        const userResponse = await api.get(`/users/${userToSearch}`)
        setUser(userResponse.data);

          const reposResponse = await api.get(`/users/${userToSearch}/repos?per_page=6&sort=updated`)
        setRepos(reposResponse.data);

      } catch(error){
        console.error('Erro', error);
        setError(`Usuário ${userToSearch} não encontrado`);
      } finally {
        setLoading(false);
      }
      loadData();
    };
    },[]);

    if(loading) {
    return (
  <div className="loading-container">
  <div className="spinner"></div>
  <p>Carregando perfil...</p>
  </div>

    );
  }
   if (error || !user) {
    return(
      <div className="error-container">
        <h2>❌ {error}</h2>
        <button onClick={() => window.location.reload()}>Try again</button>    
      </div>
    )}
    
    return(
   <div className="app-container">
    <div className="profile-card"></div>

    </div>
      )}

