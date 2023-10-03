import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = ({ userName }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.acertos} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <div>
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <td>Name</td>
              <td>Quantidade de questões</td>
              <td>Acertos</td>
              <td>Pontos</td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-body">
              <td>{userName}</td>
              <td>{quizState.questions.length}</td>
              <td>{quizState.acertos}</td>
              <td>{quizState.score}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
