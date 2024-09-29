//import Welcome from "./components/Welcome";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import { useQuizzContext } from "./contexts/QuizzContext";
import QuestionTest from "./components/QuestionTest";
import DisplayResult from "./components/DisplayResult";
//import Pagination from "./components/Pagination";

function App() {
  const { status } = useQuizzContext();

  // if (status === "ready")
  //   return (
  //     <>
  //       <Welcome />
  //       <Pagination totalCount={155} pageSize={10} siblingCount={2} />
  //     </>
  //   );
  if (status === "loading") return <Spinner />;
  if (status === "start") return <QuestionTest />;
  if (status === "error") return <Error />;
  if (status === "end") return <DisplayResult />;

  return null;
}

export default App;
