import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Unidades from "../pages/Unidades";
import Servicos from "../pages/Servicos";
import Profissionais from "../pages/Profissionais";
import Agendamento from "../pages/Agendamento";

// 🔒 Proteção de rotas
function PrivateRoute({ children }) {
  const usuario = localStorage.getItem("usuarioLogado");
  return usuario ? children : <Navigate to="/login" />;
}

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Privadas */}
        <Route
          path="/unidades"
          element={
            <PrivateRoute>
              <Unidades />
            </PrivateRoute>
          }
        />

        <Route
          path="/servicos"
          element={
            <PrivateRoute>
              <Servicos />
            </PrivateRoute>
          }
        />

        <Route
          path="/profissionais"
          element={
            <PrivateRoute>
              <Profissionais />
            </PrivateRoute>
          }
        />

        <Route
          path="/agendamento"
          element={
            <PrivateRoute>
              <Agendamento />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}