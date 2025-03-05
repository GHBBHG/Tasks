import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <div className="w-full flex bg-neutral-950 text-white h-24 items-center">
        <div className="w-1/2 p-8 text-4xl font-medium">GHB</div>

        <div className="flex text-left justify-end w-1/2 p-8 text-base gap-8 pr-12 sm:hidden">
          <Link className="hover:text-sky-300 duration-100 ease-in" to="/">
            Início
          </Link>

          <Link
            className="hover:text-sky-300 duration-100 ease-in"
            to="/e-commerce"
          >
            Loja
          </Link>

          <Link
            className="hover:text-sky-300 duration-100 ease-in"
            to="/tarefas/projetos"
          >
            Projetos
          </Link>

          <Link
            className="hover:text-sky-300 duration-100 ease-in"
            to="/tarefas"
          >
            Tarefas
          </Link>

          <Link
            className="hover:text-sky-300 duration-100 ease-in"
            to="/cadastros"
          >
            Cadastros
          </Link>

          <a
            className="hover:text-sky-300 duration-100 ease-in"
            href="https://ghb-api.glitch.me"
            target="_blank"
          >
            Api
          </a>
        </div>

        <div className="hidden sm:flex text-left justify-end text-5xl w-1/2 p-8">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="cursor-pointer"
          >
            {isOpenMenu ? <X size={40} /> : <MenuIcon size={40} />}
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpenMenu ? "block" : "hidden"
        } relative w-full z-10 h-auto px-12 pb-3 font-medium bg-neutral-950 text-white`}
      >
        <Link to="/">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3"
          >
            Início
          </div>
        </Link>

        <Link to="/e-commerce">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3"
          >
            Loja
          </div>
        </Link>

        <Link to="/tarefas/projetos">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3"
          >
            Projetos
          </div>
        </Link>

        <Link to="/tarefas">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3"
          >
            Tarefas
          </div>
        </Link>

        <Link to="/cadastros">
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="border-gray-400 border-b hover:border-sky-300 hover:text-sky-300 duration-100 ease-in p-3"
          >
            Cadastros
          </div>
        </Link>
      </div>
      <div className="flex realtive">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5554992299323&text=%F0%9F%98%80%20Ol%C3%A1%2C%20tenho%20interesse%20em%20seus%20produtos!"
        >
          <div
            title="Suporte"
            className="bg-blue-700 text-white flex fixed z-[100] w-18 p-4 rounded-full bottom-[3%] right-[2%] cursor-pointer hover:bg-blue-600"
          >
            <div className="w-3 h-3 absolute inline-flex rounded-full bg-green-400 top-0.5 right-0.5 animate-ping"></div>
            <div className="w-3 h-3 absolute inline-flex rounded-full bg-green-400 top-0.5 right-0.5"></div>
            <img src="/assets/suporte-icon.png" className="w-5 min-w-5" />
          </div>
        </a>
      </div>
    </>
  );
};
