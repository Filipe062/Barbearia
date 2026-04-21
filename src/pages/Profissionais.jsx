import { useNavigate } from "react-router-dom";

export default function Profissionais() {
  const navigate = useNavigate();

  function selecionar(p) {
    localStorage.setItem("profissional", p);
    navigate("/agendamento");
  }

  return (
    <div className="container">
      <h1 className="title">Profissionais</h1>

      <div className="card" onClick={() => selecionar("João")}>
        João 💈
      </div>

      <div className="card" onClick={() => selecionar("Carlos")}>
        Carlos 💈
      </div>

      <button className="button" onClick={() => navigate("/servicos")}>
        Voltar
      </button>
    </div>
  );
}