import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  return (
    <div className="h-screen w-screen bg-slate-500 p6 ">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative md-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1 bottom-0 bg-slate-400 text-white border rounded-md"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl font-bold text-slate-600">{title}</h1>
          <p className="text-slate-600">{description}</p>
          <p className="text-slate-500 text-xs">
            {date} - {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
