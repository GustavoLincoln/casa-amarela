import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(usuario, senha);

    if (usuario === "admin" && senha === "admin1234") {
      navigate("/admin");
    }

    localStorage.setItem("logado", "sim");
  };

  return (
    <div>
      <form>
        <h3>Login</h3>
        <label htmlFor="usuario">Usuário:</label>
        <input name="usuario" onChange={(e) => setUsuario(e.target.value)} />
        <label htmlFor="senha">Senha:</label>
        <input
          name="senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
        <div>
          <button onClick={() => navigate("/")}>Voltar</button>
          <button onClick={(e) => handleSubmit(e)}>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
