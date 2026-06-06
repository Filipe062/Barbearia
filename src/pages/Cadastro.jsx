import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cargo, setCargo] = useState("CLIENTE");

  async function cadastrar(e) {
    e.preventDefault();

    try {
      if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
      }

      const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          telefone,
          cargo
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      alert("Cadastro realizado com sucesso!");
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar no servidor!");
    }
  }

  return (
    <div className="cadastro-page">
      <div className="cadastro-card">

        <h1>Cadastro</h1>

        <form className="cadastro-form" onSubmit={cadastrar}>
          <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>

        <button className="voltar-login-btn" onClick={() => navigate("/")}>
          Voltar
        </button>

      </div>
    </div>
  );
}