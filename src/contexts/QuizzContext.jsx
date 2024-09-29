import { createContext, useContext, useReducer } from "react";

// status: ready, start, end, loading
const initialState = {
  questions: [],
  status: "ready",
  currentQuestion: 0,
  totalQuestions: null,
  userOption: null,
  scores: 0,
  secondRemainning: null,
  error: "",
};

const SEC_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "quizz/loading":
      return {
        ...state,
        status: "loading",
        totalQuestions: state.totalQuestions ?? 10,
      };
    case "quizz/ready":
      return initialState;
    case "quizz/start":
      return {
        ...state,
        status: "start",
        questions: action.payload,
        error: "",
        secondRemainning: state.totalQuestions * SEC_PER_QUESTION,
      };
    case "quizz/end":
      return {
        ...state,
        status: "end",
      };
    case "user-choose":
      return {
        ...state,
        userOption: action.payload,
        scores:
          action.payload === state.questions.at(state.currentQuestion).answer
            ? state.scores++
            : state.scores,
      };
    case "next-question":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        userOption: null,
      };
    case "change-total-questions":
      return {
        ...state,
        totalQuestions: action.payload,
      };
    case "tick":
      return {
        ...state,
        secondRemainning: state.secondRemainning - 1,
        status: state.secondRemainning === 0 ? "end" : state.status,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error("Action unknown");
  }
}

const QuizzContext = createContext();

function QuizzProvider({ children }) {
  const [
    {
      questions,
      status,
      currentQuestion,
      totalQuestions,
      error,
      scores,
      userOption,
      secondRemainning,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QuizzContext.Provider
      value={{
        questions,
        status,
        currentQuestion,
        totalQuestions,
        scores,
        error,
        userOption,
        secondRemainning,
        dispatch,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}

// eslint-disable-next-line
export function useQuizzContext() {
  const context = useContext(QuizzContext);
  if (!context) {
    console.log("Using quizz context outside of quizz provider");
    return;
  }
  return context;
}

export default QuizzProvider;
