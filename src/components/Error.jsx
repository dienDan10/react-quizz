import { useQuizzContext } from "../contexts/QuizzContext";

function Error() {
  const { error } = useQuizzContext();
  return <h2 className="text-center">{error}</h2>;
}

export default Error;
