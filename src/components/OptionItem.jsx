import { useQuizzContext } from "../contexts/QuizzContext";

function OptionItem({ type }) {
  const { questions, currentQuestion, dispatch, userOption } =
    useQuizzContext();
  const question = questions.at(currentQuestion);

  function handleClick() {
    if (userOption === null) dispatch({ type: "user-choose", payload: type });
  }

  let classes =
    "text-lg px-6 py-2 bg-indigo-50 rounded-full cursor-pointer hover:translate-x-2 transition-all";

  if (userOption !== null) {
    if (userOption === type && userOption !== question.answer) {
      classes = classes + " bg-red-100";
    } else if (
      (userOption === type && userOption === question.answer) ||
      question.answer === type
    ) {
      classes = classes + " bg-green-100";
    }
  }

  return (
    <li className={classes} onClick={handleClick}>
      <span className="font-semibold text-indigo-900 mr-4">{type} :</span>
      {question[type]}
    </li>
  );
}

export default OptionItem;
