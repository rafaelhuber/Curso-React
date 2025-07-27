import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("date", task.date);
    query.set("time", task.time);
    // Navega para a página de detalhes da tarefa com os parâmetros de consulta
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {[...props.tasks] // faz uma cópia rasa para não modificar props
          .sort((a, b) =>
            a.isCompletd === true ? 1 : b.isCompletd === true ? -1 : 0
          ) // move "true" para o final
          .map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => props.onTaskClick(task.id)}
                className={` text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                  task.isCompletd ? "line-through bg-red-500" : "bg-slate-400"
                }`}
              >
                {task.isCompletd ? <CheckIcon /> : ""}
                <div className="flex-col">
                  <p className="text-xl">Titulo: {task.title}</p>
                  <span className="text-xs">Descrição: {task.description}</span>
                </div>
              </button>
              <Button onClick={() => onSeeDetailsClick(task)}>
                <ChevronRightIcon />
              </Button>
              <Button onClick={() => props.onDeleteTaskClick(task.id)}>
                <TrashIcon />
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Tasks;
