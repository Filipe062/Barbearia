import { useNavigate } from "react-router-dom";

export default function Unidades() {
  const navigate = useNavigate();

  function selecionarUnidade(nome) {
    localStorage.setItem("unidade", nome);
    navigate("/servicos");
  }

  return (
    <div className="servicos-page">
      <div className="servicos-header">
        <h1>THALITON BARBER</h1>
        <p>Escolha uma unidade</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📍</div>

          <h3>Vila Brasília</h3>

          <div className="service-details">
            <span>Aparecida de Goiânia - GO</span>
            <span>Atendimento com horário marcado</span>
          </div>

          <button
            className="service-btn"
            onClick={() => selecionarUnidade("Vila Brasília")}
          >
            Selecionar
          </button>
        </div>
      </div>

      <div className="voltar-container">
        <button
          className="voltar-btn"
          onClick={() => navigate("/")}
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}