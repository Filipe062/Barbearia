import { useNavigate } from "react-router-dom";

export default function Profissionais() {
  const navigate = useNavigate();

  function selecionarProfissional(id) {
    if (!id) return;

    localStorage.setItem("profissional", id);

    navigate("/agendamento");
  }

  const profissionais = [
    { id: "joao", nome: "Thaliton", emoji: "💈" },
    { id: "carlos", nome: "Barbeiro 2", emoji: "✂️" },
  ];

  return (
    <div className="servicos-page">
      <div className="servicos-header">
        <h1>THALITON BARBER</h1>
        <p>Escolha um profissional</p>
      </div>

      <div className="services-grid">
        {profissionais.map((p) => (
          <div key={p.id} className="service-card">
            <div className="service-icon">{p.emoji}</div>
            <h3>{p.nome}</h3>

            <button
              className="service-btn"
              onClick={() => selecionarProfissional(p.id)}
            >
              Selecionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}