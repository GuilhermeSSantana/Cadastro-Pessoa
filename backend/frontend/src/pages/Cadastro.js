import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/cadastro.css";
import { get } from "mongoose";

export default function Cadastro() {
  const [list, setlist] = useState([]);
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
  async function updateData(id, nome, apelido, email, telefone, endereco) {
    await axios.put("http://localhost:5000/api/pessoas.update/" + id, {
      nome, apelido, email, telefone, endereco});
      getData();
  }
  return (
    <div className="container-cadastro">
      <div className="container-cadatro-form">
        <h1>Cadastrar</h1>
        <input type="text" placeholder="Nome" />
        <br />
        <input type="text" placeholder="Sobrenome" />
        <br />
        <input type="text" placeholder="Telefone" />
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <input type="text" placeholder="endereco" />
        <br />
        <button className="login-cadatro-btn">Cadastrar</button>
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
                  Endereço: {item.endereco}<br />
                </li>
                <button className="login-cadatro-btn" onClick={()=> deleteData(item._id)}>🗑️</button>
                <button className="login-cadatro-btn" onClick={()=> updateData(item._id)}>✏️</button>
              </div>
              <br />
            </>
          ))}
      </div>
    </div>
  );
}
