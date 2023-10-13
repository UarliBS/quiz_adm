import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  acertos: 0,
  score: 0,
  justification: false,
  optionToHide: null,
  userName: "",
  userRecords: [],
  players: [], // Array para manter registros de jogadores
};

console.log(initialState);

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };

    case "NEW_GAME": {
      return {
        ...initialState,
        userRecords: state.userRecords, // Mantenha a lista de registros de usuários
      };
    }

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      // Atualize os acertos e a pontuação do jogador
      const correctAnswer = state.answerSelected === state.questions[state.currentQuestion].answer ? 1 : 0;
      const newAcertos = state.acertos + correctAnswer;
      const newScore = state.score + correctAnswer * 5;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
        justification: false,
        acertos: newAcertos,
        score: newScore,
      };
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer * 5, // Atualiza o score
        acertos: state.acertos + correctAnswer, // Atualiza os acertos
        answerSelected: option,
        justification: true,
      };
    }

    case "SHOW_JUSTIFICATION": {
      return {
        ...state,
        justification: "justification",
      };
    }

    case "SET_USER_NAME": {
      const newUserRecord = {
        userName: action.payload,
        acertos: state.acertos, // Mantenha a quantidade de acertos do usuário atual
        score: state.score, // Mantenha a pontuação do usuário atual
      };

      const updatedUserRecords = [...state.userRecords, newUserRecord];
      localStorage.setItem("userRecords", JSON.stringify(updatedUserRecords));

      return {
        ...state,
        userName: action.payload,
        userRecords: [...state.userRecords, newUserRecord],
        players: updatedUserRecords,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
