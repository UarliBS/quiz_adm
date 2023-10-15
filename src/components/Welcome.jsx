import React, { useContext} from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/icon.png";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <><div id="welcome">
      <h2>Sejam bem-vindos!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <img src={Quiz} alt="Início do Quiz" />
    </div><div id="button">
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          Iniciar
        </button>
      </div></>
  );
};

export default Welcome;
