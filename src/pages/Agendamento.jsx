
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Agendamento() {
  const unidade = localStorage.getItem("unidade") || "";
  const servico = localStorage.getItem("servico") || "";
  const profissional = localStorage.getItem("profissional") || "";

  const hoje = new Date().toISOString().split("T")[0];

  const [data, setData] = useState(hoje);
  const [ocupados, setOcupados] = useState([]);

  const API_URL = "https://banco-de-dados-thaliton-3.onrender.com";

  const horariosPadrao = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  async function carregarHorarios() {
    try {
      const response = await fetch(
        `${API_URL}/agendamentos/ocupados?data=${data}&profissional=${encodeURIComponent(profissional)}`
      );

      if (!response.ok) {
        throw new Error(`Erro ao carregar horários: ${response.status}`);
      }

      const lista = await response.json();

      const horarios = lista.map((item) => item.horario);

      setOcupados(horarios);
    } catch (error) {
      console.error("Erro ao carregar horários:", error);
      toast.error("Erro ao carregar horários");
    }
  }

  useEffect(() => {
    carregarHorarios();
  }, [data, profissional]);

  async function agendar(hora) {
    try {
      const dados = {
        data,
        horario: hora,
        profissional,
        servico,
      };

      const response = await fetch(`${API_URL}/agendamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const mensagem = await response.text();

      if (!response.ok) {
        toast.error(mensagem || "Erro ao realizar agendamento");
        return;
      }

      toast.success(`Agendamento confirmado às ${hora}`);

      await carregarHorarios();
    } catch (error) {
      console.error("Erro ao agendar:", error);
      toast.error("Erro ao conectar ao servidor");
    }
  }

  const horariosDisponiveis = horariosPadrao.filter(
    (hora) => !ocupados.includes(hora)
  );

  return (
    <div className="servicos-page">
      <div className="servicos-header">
        <h1>THALITON BARBER</h1>
        <p>Confirme seu horário</p>
      </div>

      <div className="agendamento-card">
        <p>📍 {unidade}</p>
        <p>✂️ {servico}</p>
        <p>💈 {profissional}</p>

        <input
          type="date"
          value={data}
          min={hoje}
          onChange={(e) => setData(e.target.value)}
          className="data-input"
        />

        <h3>Horários Disponíveis</h3>

        <div className="horarios-grid">
          {horariosDisponiveis.length > 0 ? (
            horariosDisponiveis.map((hora) => (
              <button
                key={hora}
                className="horario-btn"
                onClick={() => agendar(hora)}
              >
                {hora}
              </button>
            ))
          ) : (
            <p>Nenhum horário disponível</p>
          )}
        </div>
      </div>
    </div>
  );
}

