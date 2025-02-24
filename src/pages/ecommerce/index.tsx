import { useEffect, useState } from "react";
import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce";

export const ECommerce = () => {
  const { ecommerce } = useEcommerce();
  const [showModal, setShowModal] = useState("hidden");
  const [urlImage, setUrlImage] = useState("");
  const arrayProducts: Ecommerce[] = ecommerce.filter((product) => product.id);

  useEffect(() => {
    if (urlImage) setShowModal("");
  }, [urlImage]);

  return (
    <div className="block w-full pb-20 text-white">
      {arrayProducts.map((products) => (
        <div
          className="w-[90%] mx-auto bg-neutral-800 p-10 my-8 flex rounded-md gap-2"
          key={products.id}
        >
          <div className="w-[10%] flex items-center justify-center bg-white rounded-lg border-2 border-gray-400 p-1 cursor-pointer">
            <img
              src={products.image}
              className="w-28"
              onClick={() => setUrlImage(products.image)}
            />
          </div>
          <div className="w-[60%] text-white">
            <div className="text-gray-400 text-xs">{products.category}</div>
            <div className="text-lg font-medium">{products.title}</div>
            <div className="text-sm">Avaliação: {products.rating.rate}/5</div>
            <div className="text-sm">{products.description}</div>
          </div>
          <div className="">R${products.price}</div>
          <div className="">Estoque: {products.rating.count}</div>
          <hr />
        </div>
      ))}
      <div
        className={`${showModal} w-full h-full p-4 bg-black opacity-[0.8] z-[10000] top-0 left-0 fixed`}
        onClick={() => setShowModal("hidden")}
      ></div>
      <div
        className={`${showModal} bg-neutral-800 rounded-xl mx-auto w-[50%] h-[70%] z-[10001] fixed top-[15%] left-[25%] opacity-[1] overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full text-right p-2 px-4 text-2xl text-white">
          <span
            onClick={() => setShowModal("hidden")}
            className="cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="flex justify-center items-center p-10">
          <img src={urlImage} className="w-80" />
        </div>
      </div>
    </div>
  );
};
