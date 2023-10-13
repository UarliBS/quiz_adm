import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userRecords, setUserRecords] = useState([]);

  useEffect(() => {
    const storedUserRecords = localStorage.getItem("userRecords");
    if (storedUserRecords) {
      setUserRecords(JSON.parse(storedUserRecords));
    }
  }, []);

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
              <td>Nome</td>
              <td>Qtd de Perguntas</td>
              <td>Acertos</td>
              <td>Pontos</td>
            </tr>
          </thead>
          <tbody>
            {userRecords.map((player, index) => (
              <tr className="table-body" key={index}>
                <td>{player.userName}</td>
                <td>{quizState.questions.length}</td>
                <td>{player.acertos}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
