import { useQuizzContext } from "../contexts/QuizzContext";

function ButtonFinish() {
  const { userOption, dispatch } = useQuizzContext();
  function handleClick() {
    dispatch({ type: "quizz/end" });
  }
  return (
    <button
      className="uppercase text-indigo-100 bg-indigo-600 px-5 py-2 rounded-full text-lg focus:outline-indigo-600 focus:outline-offset-2 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={!userOption}
    >
      Finish
    </button>
  );
}

export default ButtonFinish;
