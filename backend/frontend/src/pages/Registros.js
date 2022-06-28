import "../style/Registros.css";

export default function Registros() {
  return (
    <div className="container-cadastro">
      <h1>Registre-se</h1>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirmar Senha" />
    </div>
  );
}
