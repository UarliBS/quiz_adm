import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    if (quizState.answerSelected) return;

    const answer = currentQuestion.answer;
    const correctAnswer = answer === option ? 1 : 0;

    // Obtenha os dados existentes do jogador do localStorage
    const userRecord = JSON.parse(localStorage.getItem("userRecord"));

    // Atualize os acertos e a pontuação do jogador
    userRecord.acertos += correctAnswer;
    userRecord.score += correctAnswer * 5;

    // Salve o objeto do jogador atualizado no localStorage
    localStorage.setItem("userRecord", JSON.stringify(userRecord));

    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>

      {quizState.answerSelected && (
        <div>
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>

          {currentQuestion.justification && (
            <button onClick={() => dispatch({ type: "SHOW_JUSTIFICATION" })}>
              Justificativa
            </button>
          )}

          {quizState.answerSelected && quizState.justification === "justification" && (
            <div className="justification">
              <br />
              <p>{currentQuestion.justification}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
