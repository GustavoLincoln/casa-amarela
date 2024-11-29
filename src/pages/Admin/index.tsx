import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const logado = localStorage.getItem("logado");
    if (logado !== "sim") {
      navigate("/");
    }
  });

  const logout = () => {
    localStorage.removeItem("logado");
    navigate("/");
  };

  return (
    <div>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
