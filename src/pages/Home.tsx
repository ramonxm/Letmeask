import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import "../styles/auth.scss";

const Home = () => {
  const history = useHistory();

  function handleCreateRoom() {
    history.push("/rooms/new");
  }
  return (
    <div id="page-auth">
      <aside>
        <img
          src="../assets/images/illustration.svg"
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src="../assets/images/logo.svg" alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src="../assets/images/google-icon.svg" alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
