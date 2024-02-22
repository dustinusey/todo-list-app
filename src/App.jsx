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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks([...tasks, currentValue]);
          setCurrentValue("");
        }}
      >
        <input
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
          type="text"
          value={currentValue}
        />
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <p>{task}</p>
              <button
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
  );
};
export default App;
