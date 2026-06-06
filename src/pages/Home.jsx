import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");

  function irParaAgendamento() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
      setErro("Faça login para agendar");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      navigate("/unidades");
    }
  }

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <img src={logo} alt="Logo" className="logo" />

          <h1>THALITON BARBER</h1>

          <p className="slogan">
            Corte • Barba • Visagismo
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={irParaAgendamento}
            >
              AGENDAR HORÁRIO
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                window.open(
                  "https://instagram.com/thalitonbarber",
                  "_blank"
                )
              }
            >
              INSTAGRAM
            </button>
          </div>

          {erro && <span className="erro">{erro}</span>}

          <div className="info-box">
            <p>📍 Vila Brasília - Aparecida de Goiânia</p>
            <p>📞 WhatsApp: (64) 98169-6734</p>
            <p>🕒 Atendimento com horário marcado</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section dark">
        <h2>Serviços</h2>

        <div className="grid">

          <div className="card">
            <h3>✂️ Corte Masculino</h3>
          </div>

          <div className="card">
            <h3>🧔 Barba</h3>
          </div>

          <div className="card">
            <h3>🔥 Corte + Barba</h3>
          </div>

          <div className="card">
            <h3>✨ Visagismo</h3>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section className="section">
        <h2>Contato</h2>

        <div className="contact-box">

          <p>📍 Vila Brasília - Aparecida de Goiânia</p>

          <p>
            📞 WhatsApp:
            <a
              href="https://wa.me/5564981696734"
              target="_blank"
              rel="noreferrer"
            >
              {" "}Entrar em contato
            </a>
          </p>

          <p>
            📸 Instagram:
            <a
              href="https://instagram.com/thalitonbarber"
              target="_blank"
              rel="noreferrer"
            >
              {" "}@thalitonbarber
            </a>
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 THALITON BARBER</p>
      </footer>

    </div>
  );
}