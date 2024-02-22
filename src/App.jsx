import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
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
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};
export default App;
