import "../style/Login.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    
    <div className="container">

      <div className="container-login">
        <div className="wrap-login"></div>
        <form className="login-form">
          <div className="wrap-input">
            <input className="input" type="text" placeholder="Usuário" />
            <span className="focus-input"></span>
          </div>

          <div className="wrap-input">
            <input className="input" type="password" placeholder="Senha" />
          </div>

          <NavLink to="/Cadastro" end>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>
          </NavLink>

          <NavLink to="/Registros" end>
            <div className="creat-conta">
              <a> Criar conta </a>
            </div>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
