import { useNavigate } from "react-router-dom";

export default function Servicos() {
  const navigate = useNavigate();

  function selecionar(s) {
    localStorage.setItem("servico", s);
    navigate("/profissionais");
  }

  return (
    <div className="container">
      <h1 className="title">Serviços</h1>

      <div className="card" onClick={() => selecionar("Corte")}>
        Corte ✂️
      </div>

      <div className="card" onClick={() => selecionar("Barba")}>
        Barba 🧔
      </div>

      <button className="button" onClick={() => navigate("/unidades")}>
        Voltar
      </button>
    </div>
  );
}