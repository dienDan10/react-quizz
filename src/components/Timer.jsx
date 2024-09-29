import { useEffect } from "react";
import { useQuizzContext } from "../contexts/QuizzContext";

function Timer() {
  const { secondRemainning, dispatch } = useQuizzContext();

  useEffect(() => {
    const countDown = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(countDown);
  }, [dispatch]);

  const minus = Math.floor(secondRemainning / 60);
  const second = secondRemainning % 60;

  return (
    <p className="px-5 py-2 bg-indigo-100 rounded-full text-lg text-indigo-800">
      {minus.toString().padStart(2, "0")} : {second.toString().padStart(2, "0")}
    </p>
  );
}

export default Timer;
