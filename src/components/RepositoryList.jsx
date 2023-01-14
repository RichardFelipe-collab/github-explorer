import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";
const repository = {
  name: "unform",
  description: "forms in react",
  link: "https://github.com/unform/unform",
};

//https://api.github.com/users/RichardFelipe-collab

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(()=>{
    fetch('https://api.github.com/users/RichardFelipe-collab/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
    
  },[])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
       {repositories.map(repository=> {
       return <RepositoryItem key={repository.name} repository={repository}/>})}
      </ul>
    </section>
  );
}
