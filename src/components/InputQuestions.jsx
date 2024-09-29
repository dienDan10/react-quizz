import { useState } from "react";

function InputQuestions({ onChange }) {
  const [input, setInput] = useState("");

  function handleInput(e) {
    const num = Number(e.target.value);
    setInput(num);
    onChange?.(num);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-semibold tracking-wide text-gray-600 mb-2">
        Enter number of questions:
      </p>
      <input
        type="number"
        value={input}
        placeholder="Number of questions..."
        onChange={handleInput}
        className=" px-3 py-1.5 rounded-md placeholder:text-gray-300 border-2 focus:outline-1 focus:outline-offset-1 focus:outline-blue-700"
      />
    </div>
  );
}

export default InputQuestions;
