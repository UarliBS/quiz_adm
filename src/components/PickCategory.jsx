import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário
  const [showCategoryButton, setShowCategoryButton] = useState(false); // Estado para controlar a visibilidade do botão

  function chooseCategoryAndReorderQuestions(category) {
    if (userName.trim() === "") {
      alert("Por favor, insira seu nome antes de começar o jogo.");
    } else {
      dispatch({ type: "START_GAME", payload: category });
      dispatch({ type: "REORDER_QUESTIONS" });
    }
  }

  // Função para armazenar o nome do usuário e mostrar o botão
  function storeUserName() {
    if (userName.trim() === "") {
      alert("Por favor, insira seu nome antes de começar o jogo.");
    } else {
      console.log("Nome do usuário:", userName);
      setShowCategoryButton(true);
    }
  }

  return (
    <div id="category">
      {quizState.gameOver ? (
        <GameOver userName={userName} /> // Passe o userName como propriedade para o componente GameOver
      ) : (
        <>
          <p>As perguntas serão referentes ao tema: Lançamentos Contábeis</p>
          {/* Campo de input para o nome do usuário */}
          <div className="input_btn">
            <input
              type="text"
              placeholder="Seu Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={storeUserName}>Armazenar Nome</button> {/* Botão para armazenar o nome do usuário */}
            {showCategoryButton ? (
              quizState.questions.map((question) => (
                <button
                  onClick={() => chooseCategoryAndReorderQuestions(question.category)}
                  key={question.category}
                >
                  {question.category}
                </button>
              ))
            ) : (
              <p>Favor inserir seu nome para continuar.</p>
            )}
          </div>

          <img src={Category} alt="Categoria do Quiz" />
        </>
      )}
    </div>
  );
};

export default PickCategory;
