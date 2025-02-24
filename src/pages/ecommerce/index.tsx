import { useEffect, useState } from "react";
import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce";

export const ECommerce = () => {
  const { ecommerce } = useEcommerce();
  const [showModal, setShowModal] = useState("hidden");
  const [urlImage, setUrlImage] = useState("");
  const arrayProducts: Ecommerce[] = ecommerce.filter((product) => product.id);

  console.log(arrayProducts);

  useEffect(() => {
    if (urlImage) setShowModal("");
  }, [urlImage]);

  return (
    <div className="block w-full pb-20 text-white">
      {arrayProducts.map((products) => (
        <div
          className="w-[85%] mx-auto bg-neutral-800 p-10 my-8 flex rounded-md"
          key={products.id}
        >
          <div className="w-[15%] flex items-center justify-center bg-white rounded-lg border-2 border-gray-400 cursor-pointer">
            <img
              src={products.images[0]}
              className="w-full object-cover rounded-md"
              onClick={() => setUrlImage(products.images[0])}
            />
          </div>
          <div className="w-[60%] text-white p-4">
            <div className="text-gray-400 text-sm">
              {products.category.name}
            </div>
            <div className="text-xl font-medium">{products.title}</div>
            <div className="text-base">{products.description}</div>
          </div>
          <div className="w-[25%] flex justify-center items-center">
            <div className="block text-center">
              <div className="text-xs text-green-400 ">
                {products.category.name === "Aram"
                  ? "20% OFF"
                  : products.category.name === "Change title"
                  ? "10% OFF"
                  : products.category.name === "Miscellaneous"
                  ? "50% OFF"
                  : ""}
              </div>
              {products.category.name === "Aram" ||
              products.category.name === "Change title" ||
              products.category.name === "Miscellaneous" ? (
                <div className="text-xl text-gray-400 line-through decoration-white decoration-2">
                  R${products.price}
                </div>
              ) : (
                ""
              )}
              <div className="text-3xl text-gray-200 font-medium">
                {products.category.name === "Aram"
                  ? "R$" + (products.price / 10) * 8
                  : products.category.name === "Change title"
                  ? "R$" + (products.price / 10) * 9
                  : products.category.name === "Miscellaneous"
                  ? "R$" + (products.price / 10) * 5
                  : "R$" + products.price}
              </div>
              <div className="flex mt-8 justify-center">
                <div className="text-4xl font-bold rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-red-500">
                  -
                </div>
                <div className="text-2xl font-medium flex items-center justify-center w-16">
                  0
                </div>
                <div className="text-4xl font-bold rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-green-500">
                  +
                </div>
              </div>
            </div>
          </div>
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
