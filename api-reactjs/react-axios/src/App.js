import {useEffect, useState} from "react";
import api from "./services/api";
import './App.css';

export default function App() {
    const [username, setUse
      rname] = useState('ricardoslima18');
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
    }
    loadData();
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
      <header className="profile-header">
        <img src={user.avatar_url} alt={user.name} className="avatar"></img>
        <div className="user-info">
          <h1>{user.name || user.login}</h1>
          <p>{user.bio} "Sem bio disponível"</p>
          <div className="stats">
            <span><strong>{user.followers}</strong>Seguidores</span>
            <span><strong>{user.following}</strong>Seguindo</span>
          </div>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="github-link">
            Ver perfil completo.
          </a>
        </div>
      </header>
      <main className="repos-section">
        <h2>Repositórios recentes
          <div className="repos-grid">
            {repos.map(repo => (
              <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
                <p>{repo.description || "Sem descrição."}</p>
                <div className="repo-footer">
                  <span> {repo.stargazers_count}</span>
                  <span> {repo.forks_count}</span>
                  <a  href="{repo.html_url}" target="_blank" rel="noreferrer">
                     Acessar
                  </a>
                </div>
               </div>
              
            ))}
          </div>
        </h2>

      </main>
    </div>
      )}

