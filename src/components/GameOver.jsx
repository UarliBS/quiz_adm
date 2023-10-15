import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userRecords, setUserRecords] = useState([]);

  useEffect(() => {
    if (quizState.gameStage === "End" && quizState.acertos !== null) {
      const newUserRecord = {
        userName: quizState.userName,
        acertos: quizState.acertos,
        score: quizState.score,
      };

      const existingRecords = JSON.parse(localStorage.getItem("userRecords")) || [];
      const updatedUserRecords = [...existingRecords, newUserRecord];
      const userExists = existingRecords.some(record => record.userName === newUserRecord.userName);

      if (!userExists) {
        localStorage.setItem("userRecords", JSON.stringify(updatedUserRecords));
        setUserRecords(updatedUserRecords);
      }
    }
  }, [quizState]);

  const clearUserRecords = () => {
    localStorage.removeItem("userRecords");
    setUserRecords([]);
  };

  return (
    <div id="gameover">
      <h2>Fim de jogo!!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.acertos} de {quizState.questions.length} perguntas.
      </p>
      <div>
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <td>Nome</td>
              <td>Acertos</td>
              <td>Pontos</td>
            </tr>
          </thead>
          <tbody>
            {userRecords.map((player, index) => (
              <tr className="table-body" key={index}>
                <td>{player.userName}</td>
                <td>{player.acertos}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      <br></br>
      {/*<button onClick={clearUserRecords}>Limpar Pontuações</button>*/}
    </div>
  );
};

export default GameOver;
