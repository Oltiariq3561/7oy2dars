import React, { useState, useEffect } from "react";

function Vazifa1() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks"));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    if (name.length >= 5) {
      const newTask = {
        name,
        completed: false,
      };
      setData([...data, newTask]);
      setName("");
    } else {
      alert("5 ta dan ko‘proq belgi yozing");
    }
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    setData([]);
    localStorage.removeItem("tasks");
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const toggleCompleted = (index) => {
    const updatedData = data.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setData(updatedData);
  };

  const completedTasks = data.filter((task) => task.completed).length;
  const progress = data.length ? (completedTasks / data.length) * 100 : 0;

  return (
    <div>
      <div className="container m-auto text-center border min-h-[600px] rounded-md w-[700px]">
        <h1 className="text-[25px] mb-8 font-semibold mt-5">TO DO List</h1>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-[300px] h-[50px] rounded-md"
            placeholder="Enter a task"
            type="text"
          />
          <button
            onClick={handleClick}
            className="border text-white text-[17px] bg-lime-700 w-[100px] h-[50px] rounded-md"
          >
            Add Task
          </button>
          <button
            onClick={handleDeleteAll}
            className="border text-[16px] mt-1 text-white bg-red-500 w-[100px] h-[50px] rounded-md"
          >
            Delete All 🗑
          </button>
        </form>

        <div className="progress-bar bg-gray-300 rounded-md h-[20px] w-[400px] m-auto mt-5">
          <div
            className="bg-lime-700 h-[20px] rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2">{`Progress: ${completedTasks} of ${data.length} (${progress.toFixed(
          1
        )}%)`}</p>

        {data.length > 0 &&
          data.map((task, i) => (
            <div
              key={i}
              className={`bg-gray-50 ml-36 w-[400px] h-[60px] text-left rounded-md flex mt-2 justify-between items-center ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(i)}
                  className="mr-3"
                />
                <div>{task.name}</div>
              </div>
              <button
                onClick={() => handleDelete(i)}
                className="border text-[18px] text-white bg-red-500 w-[100px] h-[50px] rounded-md"
              >
                Delete 🗑
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vazifa1;