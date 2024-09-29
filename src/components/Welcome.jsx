import { useQuizzContext } from "../contexts/QuizzContext";
import { getQuestions } from "../services/apiGetQuestions";
import ButtonStart from "./ButtonStart";
import InputQuestions from "./InputQuestions";

function Welcome() {
  const { dispatch, totalQuestions } = useQuizzContext();

  function handleInput(num) {
    dispatch({ type: "change-total-questions", payload: num });
  }

  const start = Math.ceil(Math.random() * 400);

  async function handleStartTest() {
    dispatch({ type: "quizz/loading" });
    const data = await getQuestions({
      limit: totalQuestions ?? 10,
      start: start,
    });

    if (data.error) {
      dispatch({ type: "error", payload: data.error });
      return;
    }

    dispatch({ type: "quizz/start", payload: data.questions });
  }

  return (
    <div>
      <h1 className="text-[70px] font-light text-my-blue text-center py-5 tracking-[4px]">
        Quizz Time
      </h1>
      <p className="text-lg text-my-blue text-center">
        Test your knowledge with our set of questions
      </p>
      <div className="flex justify-center mt-8">
        <InputQuestions onChange={handleInput} />
      </div>
      <div className="text-center my-12">
        <ButtonStart onClick={handleStartTest} />
      </div>
    </div>
  );
}

export default Welcome;
