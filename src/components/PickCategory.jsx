import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário

  function chooseCategoryAndReorderQuestions(category) {
    if (userName.trim() === "") {
      alert("Por favor, insira seu nome antes de começar o jogo.");
    } else {
      dispatch({ type: "START_GAME", payload: category });
      dispatch({ type: "REORDER_QUESTIONS" });
    }
  }

  return (
    <div id="category">
      <p>As perguntas serão referentes ao tema: Lançamentos Contábeis</p>
      {/* Campo de input para o nome do usuário */}
      <div className="input_btn">
        <input
          type="text"
          placeholder="Seu Nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
