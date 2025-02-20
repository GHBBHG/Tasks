import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export function Home() {
  return (
    <div>
      <Header theme="dark" />

      <div className="relative w-full h-[1000px] bg-black">
        <img
          src="/assets/home.jpeg"
          alt="Banner"
          className="w-full object-cover opacity-[0.2] h-[1000px]"
        />
        <div className="absolute top-[10%] left-[10%] text-left text-6xl font-medium text-white">
          <h1>Dê um check na sua produtividade</h1>
        </div>

        <div className="absolute top-[24%] left-[20%] w-[60%] text-2xl text-center text-white ">
          <p>
            Organize suas tarefas, simplifique sua rotina e conquiste seu dia
            com mais leveza.✅🚀 <br /> Afinal, quando tudo está no lugar, sobra
            tempo para o que realmente importa!
          </p>
        </div>

        <div className="absolute top-[34%] left-[46%] w-[8%] text-white mx-auto">
          <Link to="/tasks-by-projects">
            <div className="text-center bg-sky-400 px-6 py-3 font-semibold text-md rounded-full hover:bg-sky-500 cursor-pointer">
              Projetos
            </div>
          </Link>
        </div>

        <div className="absolute top-[40%] left-[45%] w-[10%] text-white mx-auto">
          <Link to="/tasks">
            <div className="text-center bg-sky-400 px-6 py-3 font-semibold text-md rounded-full hover:bg-sky-500 cursor-pointer">
              Tarefas
            </div>
          </Link>
        </div>

        <div className="absolute top-[46%] left-[44%] w-[12%] text-white mx-auto">
          <Link to="/completed-tasks">
            <div className="text-center bg-sky-400 px-6 py-3 font-semibold text-md rounded-full hover:bg-sky-500 cursor-pointer">
              Tarefas Arquivadas
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
