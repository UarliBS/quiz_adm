import React, { useContext, useState, useEffect} from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
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
              Justificativa:
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
