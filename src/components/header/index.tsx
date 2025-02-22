import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toogleMenu, setToogleMenu] = useState("hidden");

  const isOpenMenu = () => {
    if (toogleMenu === "hidden") {
      setToogleMenu("block");
      return;
    }
    setToogleMenu("hidden");
  };

  return (
    <>
      <div className="w-full flex bg-neutral-950 text-white h-24 items-center">
        <div className="w-1/2 p-8 text-4xl font-medium">GHB</div>

        <div className="flex text-left justify-end w-1/2 p-8 text-base gap-8 pr-12 sm:hidden">
          <Link
            className="border-b-[1px] px-1 hover:border-sky-300 hover:text-sky-300 duration-100 ease-in"
            to="/"
          >
            Início
          </Link>

          <Link 
            className="border-b-[1px] px-1 hover:border-sky-300 hover:text-sky-300 duration-100 ease-in"
            to="/e-commerce"
          >
            Loja
          </Link>

          <Link
            className="border-b-[1px] px-1 hover:border-sky-300 hover:text-sky-300 duration-100 ease-in"
            to="/tasks-by-projects"
          >
            Projetos
          </Link>

          <Link
            className="border-b-[1px] px-1 hover:border-sky-300 hover:text-sky-300 duration-100 ease-in"
            to="/tasks"
          >
            Tarefas
          </Link>

          <Link
            className="border-b-[1px] px-1 hover:border-sky-300 hover:text-sky-300 duration-100 ease-in"
            to="/completed-tasks"
          >
            Arquivadas
          </Link>
        </div>

        <div className="hidden sm:flex text-left justify-end text-5xl w-1/2 p-8">
          <div onClick={isOpenMenu} className="cursor-pointer">
            {toogleMenu === "hidden" ? "≡" : "x"}
          </div>
        </div>
      </div>

      <div
        className={`${toogleMenu} relative w-full z-10 h-auto px-12 pb-3 font-medium bg-neutral-950 text-white`}
      >
        <Link to="/">
          <div className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3">
            Início
          </div>
        </Link>

        <Link to="/tasks-by-projects">
          <div className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3">
            Projetos
          </div>
        </Link>

        <Link to="/tasks">
          <div className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3">
            Tarefas
          </div>
        </Link>

        <Link to="/completed-tasks">
          <div className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3">
            Arquivadas
          </div>
        </Link>
      </div>
    </>
  );
};
