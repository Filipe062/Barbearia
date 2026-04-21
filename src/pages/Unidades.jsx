import { useNavigate } from "react-router-dom";

export default function Unidades() {
  const navigate = useNavigate();

  function selecionar(u) {
    localStorage.setItem("unidade", u);
    navigate("/servicos");
  }

  return (
    <div className="container">
      <h1 className="title">Escolha a Unidade</h1>

      <div className="card" onClick={() => selecionar("Centro")}>
        Unidade Centro
      </div>

      <div className="card" onClick={() => selecionar("Shopping")}>
        Unidade Shopping
      </div>
    </div>
  );
}