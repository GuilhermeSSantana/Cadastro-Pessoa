import React from "react";
import "../style/cadastro.css";

export default function Cadastro() {
  return (
    <div className="container-cadastro">
      <div className="container-cadatro-form">
        <h1>Cadastrar</h1>
        <input type="text" placeholder="Nome" /><br/>
        <input type="text" placeholder="Sobrenome" /><br/>
        <input type="text" placeholder="Telefone" /><br/>
        <input type="text" placeholder="Email" /><br/>
        <input type="text" placeholder="Endereço" /><br/>
        <button className="login-cadatro-btn">Cadastrar</button>
      </div>

      <div className="container-todolist">
        <h1>Lista Pessoas</h1>
        
      </div>
    </div>
  );
}
