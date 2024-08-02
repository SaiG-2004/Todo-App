import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();


    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: "" });
  };

  return (
    <>
      <section>
        <form
          onSubmit={handleFormSubmit}
          className="flex justify-between
           border-4 w-fit rounded-full md:rounded-md mt-4 md:w-[40rem]  "
        >
          <div>
            <input
              type="text"
              autoComplete="off"
              value={inputValue.content}
              onChange={(event) => handleInputChange(event.target.value)}
              className="rounded-l-full md:rounded-l-md p-3 text-lg w-full md:w-[33rem] "
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-400 text-white text-xl p-3 rounded-r-full md:rounded-r-md"
            >
              Add Task{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
