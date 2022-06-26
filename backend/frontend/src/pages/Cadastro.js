import React from "react";
import "../style/cadastro.css";

function Cadastro() {
  return (
    <div className="container">
      <div className="container-login-form">
        <h1>Cadastro</h1>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Endereço" />
        <button className="login-form-btn">Cadastrar</button>
      </div>

      <div className="container-todolist">
        <h1>Lista</h1>
      </div>
    </div>
  );
}
export default Cadastro;
