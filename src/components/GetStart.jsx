import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import theme from "../img/category.png";
import "./GetStart.css";
import "./Question.css";

const GetStart = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário

  function handleStartGame() {
    if (userName.trim() === "") {
      alert("Por favor, insira seu nome antes de começar o jogo.");
    } else {
      dispatch({ type: "START_GAME", payload: "Continuar" });
      dispatch({ type: "SET_USER_NAME", payload: userName }); // Atualiza o userName no contexto global
    }

  }

  return (
    <div id="theme">
      {quizState.gameOver ? (
        <GameOver userName={userName} /> // Passe o userName como propriedade para o componente GameOver
      ) : (
        <>
          <p>As perguntas serão referentes ao tema:</p>
          <p>Lançamentos Contábeis</p>
          {/* Campo de input para o nome do usuário */}
          <div className="input_btn">
            <input
              type="text"
              placeholder="Seu Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleStartGame}>Continuar</button> {/* Botão para iniciar o jogo */}
          </div>
          <img src={theme} alt="Tema do Quiz" />
        </>
      )}
    </div>
  );
};

export default GetStart;
