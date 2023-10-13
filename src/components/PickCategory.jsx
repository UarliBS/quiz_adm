import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário

  function handleStartGame() {
    if (userName.trim() === "") {
      alert("Por favor, insira seu nome antes de começar o jogo.");
    } else {
      dispatch({ type: "START_GAME", payload: "Continuar" });
      dispatch({ type: "REORDER_QUESTIONS" });
      dispatch({ type: "SET_USER_NAME", payload: userName }); // Atualiza o userName no contexto global
    }
  }

  return (
    <div id="category">
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
          <img src={Category} alt="Categoria do Quiz" />
        </>
      )}
    </div>
  );
};

export default PickCategory;
