import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function logar(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/clientes/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
      });

      const usuario = await response.json();

      if (!usuario || !usuario.id) {
        alert("Email ou senha inválidos!");
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      navigate("/unidades");

    } catch (error) {
      alert("Erro ao conectar com servidor");
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <img src={logo} alt="logo" className="login-logo" />

        <h1>THALITON BARBER</h1>
        <p>Faça login para continuar</p>

        <form className="login-form" onSubmit={logar}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>

        </form>

        <button
          className="cadastro-btn"
          onClick={() => navigate("/cadastro")}
        >
          Criar Conta
        </button>

      </div>
    </div>
  );
}