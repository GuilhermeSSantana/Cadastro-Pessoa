import "../style/Login.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import {login, setIdUsuario, setNomeUsuario} from "../componentes/auth";

function Login() {
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  async function handleSubimit() { 
    await axios.post("http://localhost:5000/api/usuarios/login", { email, senha })
    .then(res => {
      if(res === 200) {
        if(res.data.status === 1) {
          login(res.data.token);
          setIdUsuario(res.data.id_client);
          setNomeUsuario(res.data.user_nome);

          window.location.href = "/Cadastro";
        }else if(res.data.status === 2) {
            alert('Atenção:'+res.data.error);
        }
      }else{
        console.log("Erro ao realizar login");
      }
    })  
  }

  return (
    
    <div className="container">

      <div className="container-login">
    
        <form className="login-form">
          <h1> <center>Login</center></h1><br/>

          <div className="wrap-input">
            <input className="input" type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email}/>
            <span className="focus-input"></span>
          </div>

          <div className="wrap-input">
            <input className="input" type="password" placeholder="Senha" onChange={(e) => setsenha(e.target.value)} value={senha}/>
          </div>

          <NavLink to="/Cadastro" end>
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={handleSubimit} >Entrar</button>
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
