import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export function Home() {
  return (
    <div>
      <Header theme="light" />
      <div className="w-[50%] mx-auto mt-20 text-left text-5xl font-medium text-gray-700">
        <h1>Dê um check na sua produtividade</h1>
      </div>
      <div className="w-[50%] mx-auto pb-8 text-2xl text-left text-gray-600 ">
        <p>
          Organize suas tarefas, simplifique sua rotina e conquiste seu dia com
          mais leveza. ✅🚀 <br />
          Afinal, quando tudo está no lugar, sobra tempo para o que realmente
          importa!
        </p>
      </div>
      <div className="w-[10%] mx-auto">
        <Link to="/tasks">
          <div className="text-center bg-sky-400 px-6 py-3 font-semibold text-md rounded-full hover:bg-sky-500 cursor-pointer">
            Ir para Tarefas
          </div>
        </Link>
      </div>
    </div>
  );
}
