import { get } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Registros.css";
const axios = require("axios");

export default function Registros() {
 const [nome, setnome] = useState();
 const [email, setemail] = useState();
 const [senha, setsenha] = useState();
const navigate = useNavigate();

  async function getData() {
    const data = await axios.post("http://localhost:5000/api/usuarios.create", { nome, email, senha });
    
    return navigate(-1);
  }


  return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login"></div>
      <form className="login-form">
      <h1> <center>Registre-se</center></h1><br/>
        <div className="wrap-input">
          <input className="input" type="text" placeholder="Nome" onChange={(e) => setnome(e.target.value)} value={nome} />
          <span className="focus-input"></span>
        </div>

        <div className="wrap-input">
          <input className="input" type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email}/>
        </div>
        <div className="wrap-input">
          <input className="input" type="password" placeholder="Senha" onChange={(e) => setsenha(e.target.value)} value={senha}/>
        </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn" onClick={() => getData()}>Cadastrar</button>
          </div>
      </form>
    </div>
  </div>
  );
}
