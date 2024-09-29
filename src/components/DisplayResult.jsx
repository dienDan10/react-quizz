import { useQuizzContext } from "../contexts/QuizzContext";

function DisplayResult() {
  const { totalQuestions, scores, dispatch } = useQuizzContext();
  function handleClick() {
    dispatch({ type: "quizz/ready" });
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-10">
      <p className="text-4xl tracking-wider text-indigo-900">
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        You've answered correct {scores} / {totalQuestions} questions
      </p>
      <button
        className="px-6 py-2.5 rounded-full uppercase text-indigo-100 bg-indigo-600 hover:shadow-lg hover:-translate-y-[2px] transition-all focus:outline-offset-2 focus:outline-indigo-600 active:bg-indigo-500"
        onClick={handleClick}
      >
        Try again
      </button>
    </div>
  );
}

export default DisplayResult;
