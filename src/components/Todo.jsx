import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Tododate } from "./TodoDate";


import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(getLocalStorageTodoData());

  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };


  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  const handleClearTodoButton = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    
      <section className="  flex flex-col items-center">
        <header>
          <h1 className="font-[Poppins] text-white text-center  text-2xl mt-6 md:text-6xl font-bold">Todo List</h1>
          <Tododate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <div className="m-5">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </div>
        <section>
          <button
            onClick={handleClearTodoButton}
            className="w-fit bg-red-500 p-2 text-white text-lg md:text-2xl"
          >
            Clear All
          </button>
        </section>
      </section>

  );
};
