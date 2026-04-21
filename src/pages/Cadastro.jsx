import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.email === email);

    if (existe) {
      alert("Usuário já existe!");
      return;
    }

    usuarios.push({ nome, email, senha });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  }

  return (
    <div className="container">
      <h1 className="title">Cadastro 📝</h1>

      <form onSubmit={cadastrar}>
        <input
          className="input"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="button">Cadastrar</button>
      </form>

      <button className="button" onClick={() => navigate("/")}>
        Voltar para Login
      </button>
    </div>
  );
}