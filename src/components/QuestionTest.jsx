import Question from "./Question";
import TestOperation from "./TestOperation";
import TestProgress from "./TestProgress";

function QuestionTest() {
  return (
    <div className="max-w-xl  h-screen mx-auto flex items-center flex-col justify-center px-8 py-8">
      <h3 className="text-4xl text-indigo-800 mb-14 tracking-wider">
        Try your best! 💪
      </h3>
      <TestProgress />
      <Question />
      <TestOperation />
    </div>
  );
}

export default QuestionTest;
