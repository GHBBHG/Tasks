import { Menu, Search } from "lucide-react";
import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce";
import { formatInputCurrency } from "../../utils/validators";

export const ECommerce = () => {
  const { ecommerce } = useEcommerce();
  const arrayProducts: Ecommerce[] = ecommerce.filter((product) => product.id);

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <img
          src="/assets/banner-home-e-commerce.png"
          className="w-60% rounded-md p-20 md:p-8"
        />
      </div>

      <div className="flex w-full justify-center items-center">
        <input
          className="w-[34%] h-12 rounded-l-full bg-faint_bg_gray text-white p-4 text-xl placeholder:text-gray-400 outline-none"
          placeholder="Buscar produtos"
        ></input>

        <button className="w-[3%] h-12 rounded-r-full bg-faint_bg_gray text-white text-xl pr-5 flex justify-end items-center">
          <Search color="oklch(0.707 0.022 261.325)" />
        </button>

        <Menu color="white" width={50} height={50} className="cursor-pointer" />
      </div>

      <div className="flex w-[74%] gap-20 mx-auto py-20 text-white overflow-auto">
        {arrayProducts.map((products) => (
          <div
            className="w-[500px] bg-faint_bg_gray block rounded-md relative"
            key={products.id}
          >
            <div className="w-[300px] flex items-center justify-center bg-white rounded-lg border-2 border-gray-400 m-4">
              <img src={products.images[0]} className="rounded-md" />
            </div>

            <div className="text-white pt-1 px-4 mb-8 w-[90%]">
              <div className="text-lg font-medium">{products.title}</div>
            </div>

            <div className="text-white w-full bg-red-50 absolute bottom-0">
              <div className="text-lg font-medium absolute bottom-1 right-3">
                {formatInputCurrency(products.price)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
