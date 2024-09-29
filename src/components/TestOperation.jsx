import { useQuizzContext } from "../contexts/QuizzContext";
import ButtonFinish from "./ButtonFinish";
import ButtonNext from "./ButtonNext";
import Timer from "./Timer";

function TestOperation() {
  const { currentQuestion, totalQuestions } = useQuizzContext();
  return (
    <div className="flex items-center justify-between w-full">
      <Timer />
      {currentQuestion < totalQuestions - 1 ? <ButtonNext /> : <ButtonFinish />}
    </div>
  );
}

export default TestOperation;
