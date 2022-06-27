import '../style/login.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">
        <h1>Login</h1>
    <div className="container-login-form">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <NavLink to="/Cadastro" end>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Entrar</button>
       
        </div>
      </NavLink>
      </div> 
    </div>
  );
}

export default Login;
