import { useState, useEffect } from "react";

export default function Agendamento() {
  const unidade = localStorage.getItem("unidade");
  const servico = localStorage.getItem("servico");
  const profissional = localStorage.getItem("profissional");

  const hoje = new Date().toISOString().split("T")[0];

  const [data, setData] = useState(hoje);
  const [agenda, setAgenda] = useState({});

  useEffect(() => {
    try {
      const agendaSalva = JSON.parse(localStorage.getItem("agenda"));

      if (agendaSalva) {
        setAgenda(agendaSalva);
      } else {
        const agendaInicial = {
          João: {
            [hoje]: ["09:00", "10:00", "14:00"]
          },
          Carlos: {
            [hoje]: ["11:00", "15:00"]
          }
        };

        setAgenda(agendaInicial);
        localStorage.setItem("agenda", JSON.stringify(agendaInicial));
      }
    } catch (error) {
      console.error("Erro ao carregar agenda", error);
    }
  }, []);

  const horarios = agenda?.[profissional]?.[data] || [];

  function agendar(hora) {
    try {
      const novaAgenda = { ...agenda };

      if (!novaAgenda[profissional]) {
        novaAgenda[profissional] = {};
      }

      if (!novaAgenda[profissional][data]) {
        novaAgenda[profissional][data] = [];
      }

      novaAgenda[profissional][data] =
        novaAgenda[profissional][data].filter(h => h !== hora);

      setAgenda(novaAgenda);
      localStorage.setItem("agenda", JSON.stringify(novaAgenda));

      alert(`Agendado para ${data} às ${hora} ✅`);
    } catch (error) {
      console.error("Erro ao agendar", error);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Agendamento 📅</h1>

      <div className="resumo">
        <p><strong>Unidade:</strong> {unidade || "Não selecionado"}</p>
        <p><strong>Serviço:</strong> {servico || "Não selecionado"}</p>
        <p><strong>Profissional:</strong> {profissional || "Não selecionado"}</p>
      </div>

      <h3>Escolha a data</h3>

      <input
        type="date"
        className="input"
        value={data}
        min={hoje}
        onChange={(e) => setData(e.target.value)}
      />

      <h3>Horários disponíveis</h3>

      {horarios.length > 0 ? (
        horarios.map((hora, i) => (
          <button
            key={i}
            className="button"
            onClick={() => agendar(hora)}
          >
            {hora}
          </button>
        ))
      ) : (
        <p>Sem horários disponíveis 😢</p>
      )}
    </div>
  );
}