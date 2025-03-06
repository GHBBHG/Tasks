import { FormEventHandler, useState } from "react";
import { z } from "zod";
import { Modal } from "../Modal";
import { Eye, Trash2 } from "lucide-react";
import { useEcommerce } from "../../hooks/useEcommerce";
import { formatInputCurrency } from "../../utils/validators";
import { confirmarExcluir } from "../sweetAlert/confirmarExcluir";
import { useCategory } from "../../hooks/useCategory";
import { sucess } from "../sweetAlert/sucess";

export const CadastroProduto = () => {
  const { category } = useCategory();
  const { ecommerce, deleteEcommerce, createEcommerce } = useEcommerce();
  const [showModalProdutos, setShowModalProdutos] = useState(false);
  const [showModalListProdutos, setShowModalListProdutos] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const CreateProductSchema = z.object({
    title: z.string(),
    price: z.coerce.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
  });

  const reloadPage = () => location.reload();

  const handleChangeInput = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const produtoDados = CreateProductSchema.parse(formData);
    const response = await createEcommerce(produtoDados);

    if (response != null) {
      setShowModalProdutos(false);
      setTimeout(reloadPage, 1500);
      sucess.fire({
        title: "Seu produto foi criado",
        icon: "success",
      });
      return;
    }
  };

  const handleDelete = (id: number, name: string) => {
    setShowModalProdutos(false);
    confirmarExcluir
      .fire({
        title: `Excluir o produto "${name}" ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteEcommerce(id);
          confirmarExcluir.fire({
            title: "Seu produto foi excluído",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <div className="bg-zinc-800 text-white text-4xl font-medium w-[400px] rounded-lg p-4 mb-8">
        Produtos
        <div className="w-full flex justify-end">
          <div className="mr-2 mt-3">
            <button
              onClick={() => {
                console.log("a");
                setShowModalListProdutos(true);
                setShowModalProdutos(true);
              }}
              title="Ver produtos"
              className="bg-orange-600 p-2 px-3 rounded-lg hover:bg-orange-700"
            >
              <Eye size={20} />
            </button>
          </div>

          <div
            className="p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer mt-4"
            onClick={() => {
              setShowModalListProdutos(false);
              setShowModalProdutos(true);
            }}
          >
            Novo produto
          </div>
        </div>
      </div>
      {showModalProdutos && (
        <Modal closeModal={() => setShowModalProdutos(false)}>
          {!showModalListProdutos ? (
            <>
              <div className="text-4xl sm:text-2xl font-medium text-white w-full text-left mt-2 mb-8 ml-12 sm:ml-0 sm:text-center">
                Adicionar produto
              </div>
              <div className="w-[90%] mx-auto">
                <form onSubmit={handleSubmit}>
                  <label className="text-white font-medium">Nome: </label>
                  <br />
                  <textarea
                    className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
                    name="title"
                    onChange={handleChangeInput}
                    required
                  ></textarea>
                  <label className="text-white font-medium">Descrição: </label>
                  <br />
                  <textarea
                    className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
                    name="description"
                    onChange={handleChangeInput}
                    required
                  ></textarea>
                  <label className="text-white font-medium">
                    Url da imagem:{" "}
                  </label>
                  <br />
                  <textarea
                    className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
                    name="image"
                    onChange={handleChangeInput}
                    required
                  ></textarea>
                  <label className="text-white font-medium">Preço: </label>
                  <br />
                  <input
                    className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
                    name="price"
                    type="number"
                    onChange={handleChangeInput}
                    required
                  ></input>
                  <label className="text-white font-medium">Categoria:</label>
                  <br></br>
                  <select
                    name="category"
                    onChange={handleChangeInput}
                    className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
                    required
                  >
                    <option label=""></option>
                    {category.map((categoria) => (
                      <option key={categoria.id} label={categoria.name}>
                        {categoria.id}
                      </option>
                    ))}
                  </select>
                  <div className="text-right">
                    <button
                      className="border-2 rounded-md px-4 py-1 mt-4 text-white mb-8"
                      type="submit"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="m-10 bg-neutral-700 rounded-md p-4 max-h-[400px] h-[500px] overflow-y-auto text-white">
              <div className="flex border-b-2 font-medium">
                <div className="w-[55%] flex justify-center">
                  Nome do Produto
                </div>
                <div className="w-[25%] flex justify-center">Categoria</div>
                <div className="w-[10%] flex justify-center">Preço</div>
              </div>
              {ecommerce.map((produto) => (
                <div key={produto.id} className="font-light">
                  <div className="flex py-1.5">
                    <div className="w-[55%]">{produto.title}</div>
                    <div className="w-[25%]">
                      {
                        category.find(
                          (categoria) => categoria.id === produto.category
                        )?.name
                      }
                    </div>
                    <div className="w-[10%] flex justify-center">
                      {formatInputCurrency(produto.price)}
                    </div>
                    <div className="w-[10%] flex text-center justify-center items-center">
                      <Trash2
                        size={20}
                        color="red"
                        className="cursor-pointer"
                        onClick={() => handleDelete(produto.id, produto.title)}
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
