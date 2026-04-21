import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "..//assets/logo.jpeg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar(e) {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      alert("Email ou senha inválidos!");
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    navigate("/unidades");
  }

  return (
    <div className="container">
      {/* LOGO */}
      <img src={logo} alt="Logo" className="logo" />

      {/* NOME */}
      <h1 className="title">Barbearia Thaliton ✂️</h1>

      {/* FORM */}
      <form onSubmit={logar}>
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="button">Entrar</button>
      </form>

      <button className="button" onClick={() => navigate("/cadastro")}>
        Criar conta
      </button>

      {/* RODAPÉ */}
      <div className="footer">
        <p>© 2026 Barbearia Thaliton</p>
        <p>
          <a href="#">Instagram</a> | <a href="#">WhatsApp</a>
        </p>
      </div>
    </div>
  );
}