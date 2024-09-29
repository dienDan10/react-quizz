import { useQuizzContext } from "../contexts/QuizzContext";

function TestProgress() {
  const { currentQuestion, scores, totalQuestions } = useQuizzContext();

  return (
    <div className="w-full mb-10">
      <progress
        type="progress"
        min="0"
        max={totalQuestions}
        value={currentQuestion + 1}
        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-indigo-600 [&::-moz-progress-bar]:bg-indigo-600 w-full"
      />
      <div className="flex justify-between items-center">
        <p>
          <span className="text-base tracking-wider">Question:</span>{" "}
          {currentQuestion + 1} <span className="font-bold">/</span>{" "}
          {totalQuestions}
        </p>
        <p>
          <span className="text-base tracking-wider">Correct:</span> {scores}
        </p>
      </div>
    </div>
  );
}

export default TestProgress;
