import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleCheckedTodo,
  onHandleDeleteTodo,
}) => {
  const todoDecoration = { textDecoration: checked ? "line-through" : "none" };

  return (
    <li className="border-gray-300 border-4 p-2 m-4 flex justify-between bg-white w-80 md:w-[40rem]  rounded-full items-center">
      <span
        className="p-2 ml-2 w-full rounded-l-full overflow-x-auto"
        style={todoDecoration}
      >
        {data}{" "}
      </span>
      <button
        onClick={() => onHandleCheckedTodo(data)}
        className="bg-green-500 rounded-full w-fit p-1 m-2"
      >
        <FaCheck />
      </button>
      <button
        onClick={() => onHandleDeleteTodo(data)}
        className="bg-red-500 rounded-full w-fit p-1 m-2"
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
