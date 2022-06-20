import React, { useState, useEffect } from "react";
import api from "./services/api";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  async function handleAddProject() {
    // setProjects([...Projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("projects", {
      name: `Novo projeto ${Date.now()}`,
      apelido: "apelido",
    });
    const project = response.data;

    setProjects([...Projects, project]);
  }
  return (
    <>
      <Header title="Projects" />
      <div>
        <ul>
          {Projects.map((Project, index) => (
            <li key={index}>
              {Project.name},{Project.apelido},{Project.endereco},
              {Project.telefone},{Project.email}
            </li>
          ))}
        </ul>
      </div>
      
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
