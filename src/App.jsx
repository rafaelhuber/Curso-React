import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*  useEffect(() => {
    async function fetchTasks() {
      //chama a api
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      // pegar os dados que ela retorna
      const data = await response.json();
      //Armazenar/persistir esses dados no state
      setTasks(data);
    }
    // Chama a função para buscar as tarefas
    // fetchTasks();
  }, []);
 */
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar o estado da tarefa
      if (task.id === taskId) {
        return {
          ...task,
          isCompletd: !task.isCompletd,
        };
      }
      // Não preciso atualizar o estado da tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      isCompletd: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex  justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
