import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");

  function irParaAgendamento() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
      setErro("Você precisa estar logado para agendar");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      navigate("/unidades");
    }
  }

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <img src={logo} alt="logo" className="logo" />

        <h1>Barbearia Thaliton ✂️</h1>
        <p>Estilo, tradição e o melhor atendimento da região</p>

        <button className="button" onClick={irParaAgendamento}>
          Agendar agora
        </button>

        <button
          className="button"
          style={{ marginTop: "10px", background: "#333", color: "#fff" }}
          onClick={() => navigate("/login")}
        >
          Área do Cliente
        </button>

        {/* MENSAGEM DE ERRO */}
        {erro && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {erro}
          </p>
        )}
      </section>

      {/* SOBRE */}
      <section className="section">
        <h2>Sobre nós</h2>
        <p>
          Somos especialistas em cortes modernos, barba e estilo.
          Oferecemos um atendimento premium com profissionais experientes
          para garantir sua melhor aparência.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <h2>Serviços</h2>

        <div className="card">Corte ✂️ - R$ 30</div>
        <div className="card">Barba 🧔 - R$ 25</div>
      </section>

      {/* PROFISSIONAIS */}
      <section className="section">
        <h2>Profissionais</h2>

        <div className="card">João 💈</div>
        <div className="card">Carlos 💈</div>
      </section>

      {/* CONTATO */}
      <section className="section">
        <h2>Contato</h2>
        <p>📍 Goiânia - GO</p>
        <p>📞 (64) 98169-6734</p>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <p>© 2026 Barbearia Thaliton</p>
        <p>Instagram | WhatsApp</p>
      </footer>

    </div>
  );
}