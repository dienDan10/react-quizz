import { useQuizzContext } from "../contexts/QuizzContext";
import OptionItem from "./OptionItem";

function Question() {
  const { questions, currentQuestion } = useQuizzContext();
  const question = questions.at(currentQuestion);

  return (
    <div className="mb-10">
      <h3 className="text-xl text-indigo-900 mb-5">{question.question}</h3>
      <ul className="space-y-3">
        <OptionItem type="A" />
        <OptionItem type="B" />
        <OptionItem type="C" />
        <OptionItem type="D" />
      </ul>
    </div>
  );
}

export default Question;
