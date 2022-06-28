import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Cadastro.css";
import { get } from "mongoose";

export default function Cadastro() {
  const [list, setlist] = useState([]);
  const [nome, setnome] = useState();
  const [apelido, setapelido] = useState();
  const [email, setemail] = useState();
  const [telefone, settelefone] = useState(); 
  const [endereco, setendereco] = useState();
  const [_id, set_id] = useState();


  async function getData() {
    const result = await axios.get("http://localhost:5000/api/pessoas");
    setlist(result.data);
    console.log(result.data);
  }
  useEffect(() => {
    getData();
  }, []);
  async function deleteData(id) {
    await axios.delete("http://localhost:5000/api/pessoas.delete/" + id);
    getData();
  }
  async function updateData(data){
    setnome(data.nome);
    setapelido(data.apelido)
    setemail(data.email)
    settelefone(data.telefone)
    setendereco(data.endereco)
    set_id(data._id)
  }
  async function update() {
    const data = { _id, nome, apelido, email, telefone, endereco}
    if(_id) {
      await axios.put("http://localhost:5000/api/pessoas.update/", data)
    }else{
      await axios.post("http://localhost:5000/api/pessoas.create", data)
    }
    setnome("");
    setapelido("")
    setemail("")
    settelefone("")
    setendereco("")
    set_id("")
    getData();
  }

  return (
    <div className="container-cadastro">
      <div className="container-cadatro-form">
        <h1>Cadastrar</h1>
        <input type="text" placeholder="Nome" onChange={(e) => setnome(e.target.value)} value={nome} />
        <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => setapelido(e.target.value)} value={apelido}/>
        <br />
        <input type="text" placeholder="Telefone" onChange={(e) => settelefone(e.target.value)} value={telefone}/>
        <br />
        <input type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email} />
        <br />
        <input type="text" placeholder="endereco" onChange={(e) => setendereco(e.target.value)} value={endereco}/>
        <br />
        <button className="login-cadatro-btn" onClick={() => update()} >Cadastrar</button>
      </div>

      <div className="container-todolist">
        <br />
        {list.length > 0 &&
          list.map((item) => (
            <>
              <div>
                <li>
                  name: {item.nome}
                  <br />
                  Apelido: {item.apelido}
                  <br />
                  Telefone: {item.telefone}
                  <br />
                  Email: {item.email} <br />
                  Endereço: {item.endereco}
                  <br />
                </li>
                <button
                  className="login-cadatro-btn"
                  onClick={() => deleteData(item._id)}
                >
                  🗑️
                </button>
                <button
                  className="login-cadatro-btn"
                  onClick={() => updateData(item)}
                >
                  ✏️
                </button>
              </div>
              <br />
            </>
          ))}
      </div>
    </div>
  );
}
