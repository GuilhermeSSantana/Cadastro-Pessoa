import "../style/Login.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">
        <h1>Login</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <NavLink to="/Cadastro" end>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Entrar</button>
        </div>
      </NavLink>
      <NavLink to="/Registros" end>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Registrar</button>
        </div>
      </NavLink>
    </div>
  );
}

export default Login;