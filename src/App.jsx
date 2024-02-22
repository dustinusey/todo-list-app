import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentValue, setCurrentValue] = useState("");

  function handleDeleteTask(index) {
    setTasks(
      tasks.filter((_, i) => {
        return i !== index;
      })
    );
  }

  return (
    <div className="h-screen grid place-items-center bg-slate-800">
      <div className="bg-gray-200 p-5 rounded-lg w-[85%] max-w-[500px] m-auto">
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            setTasks([...tasks, currentValue]);
            setCurrentValue("");
          }}
        >
          <label
            className="text-center font-bold text-lg  mb-5 block text-slate-500"
            htmlFor="newTask"
          >
            To-Do List
          </label>
          <input
            id="newTask"
            onChange={(e) => {
              setCurrentValue(e.target.value);
            }}
            className="w-full border-2 border-slate-400 rounded-md outline-slate-500 px-5 py-3"
            type="text"
            value={currentValue}
            placeholder="Add a new task"
          />
        </form>
        <ul className="p-2">
          {tasks.map((task, index) => {
            return (
              <li className="flex place-items-center mt-2" key={index}>
                <p className="text-slate-500">{task}</p>
                <button
                  className="ml-auto bg-red-700 text-red-200 border-2 border-red-500 px-3 py-1 rounded-md"
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
