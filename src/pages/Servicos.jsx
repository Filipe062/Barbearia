import { useNavigate } from "react-router-dom";

export default function Servicos() {
  const navigate = useNavigate();

  function selecionar(servico) {
    localStorage.setItem("servico", servico);
    navigate("/profissionais");
  }

  const servicos = [
    {
      nome: "Corte Masculino + Visagismo",
      preco: "R$ 50,00",
      tempo: "30 min",
      emoji: "✂️",
    },
    {
      nome: "Corte e Visagismo + Lavada",
      preco: "R$ 55,00",
      tempo: "30 min",
      emoji: "💇",
    },
    {
      nome: "Corte + Barba Tradicional",
      preco: "R$ 80,00",
      tempo: "1h",
      emoji: "💈",
    },
    {
      nome: "Corte + Alinhamento",
      preco: "R$ 100,00",
      tempo: "1h",
      emoji: "🔥",
    },
    {
      nome: "Barba Tradicional",
      preco: "R$ 35,00",
      tempo: "30 min",
      emoji: "🧔",
    },
    {
      nome: "Designer de Sobrancelhas",
      preco: "R$ 25,00",
      tempo: "30 min",
      emoji: "👀",
    },
    {
      nome: "Sobrancelha na Navalha",
      preco: "R$ 10,00",
      tempo: "Rápido",
      emoji: "✏️",
    },
    {
      nome: "Pezinho na Navalha",
      preco: "R$ 10,00",
      tempo: "Rápido",
      emoji: "📏",
    },
    {
      nome: "Lavada",
      preco: "R$ 5,00",
      tempo: "5 min",
      emoji: "🧴",
    },
    {
      nome: "Lavagem + Penteado",
      preco: "R$ 20,00",
      tempo: "20 min",
      emoji: "✨",
    },
    {
      nome: "Hidratação ou Reconstrução",
      preco: "A partir de R$ 15,00",
      tempo: "Consultar",
      emoji: "💧",
    },
    {
      nome: "Selagem Capilar",
      preco: "A partir de R$ 100,00",
      tempo: "30 min",
      emoji: "🌟",
    },
    {
      nome: "Luzes ou Iluminado",
      preco: "A partir de R$ 120,00",
      tempo: "1h",
      emoji: "🎨",
    },
    {
      nome: "Platinado Masculino",
      preco: "A partir de R$ 240,00",
      tempo: "1h",
      emoji: "⚡",
    },
  ];

  return (
    <div className="servicos-page">
      <div className="servicos-header">
        <h1>THALITON BARBER</h1>
        <p>Escolha o serviço desejado</p>
      </div>

      <div className="services-grid">
        {servicos.map((servico) => (
          <div
            key={servico.nome}
            className="service-card"
          >
            <div className="service-icon">
              {servico.emoji}
            </div>

            <h3>{servico.nome}</h3>

            <div className="service-details">
              <span>⏱️ {servico.tempo}</span>
              <span>💰 {servico.preco}</span>
            </div>

            <button
              className="service-btn"
              onClick={() => selecionar(servico.nome)}
            >
              Selecionar
            </button>
          </div>
        ))}
      </div>

      <div className="voltar-container">
        <button
          className="voltar-btn"
          onClick={() => navigate("/unidades")}
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}