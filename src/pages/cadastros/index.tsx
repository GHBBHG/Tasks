import { CadastroCategoria } from "../../components/cadastros/CadastroCategoria";
import { CadastroProduto } from "../../components/cadastros/CadastroProduto";

export const Cadastros = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full min-h-60 mx-auto items-center justify-center p-20 sm:p-8">
      <CadastroProduto />
      <CadastroCategoria />
    </div>
  );
};
