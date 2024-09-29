function Button({ onClick }) {
  function handleClick() {
    onClick?.();
  }
  return (
    <button
      className=" px-6 py-2.5 rounded-full uppercase text-indigo-100 bg-indigo-600 hover:shadow-lg hover:-translate-y-[2px] transition-all focus:outline-offset-2 focus:outline-indigo-600 active:bg-indigo-500"
      onClick={handleClick}
    >
      Start now
    </button>
  );
}

export default Button;
