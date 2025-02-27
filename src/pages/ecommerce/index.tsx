import { Menu, Search } from "lucide-react";
import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce";
import { formatInputCurrency } from "../../utils/validators";
import { useCategory } from "../../hooks/useCategory";
import { Category } from "../../entities/Category";
import { Link } from "react-router-dom";

type ArrayProductsCategory = Record<
  number,
  { id: number; title: string; image: string; price: number; category: string }
>;

export const ECommerce = () => {
  let arrayProductsCategory: ArrayProductsCategory = {};
  const { ecommerce } = useEcommerce();
  const { category } = useCategory();
  let indexTest = 0;

  const arrayCategorys: Category[] = category.filter((category) => category.id);
  const arrayProducts: Ecommerce[] = ecommerce.filter((product) => product.id);

  arrayCategorys.map((category) => {
    const arrayProduct: Ecommerce[] = ecommerce.filter(
      (product) => product.category.name === category.name
    );
    arrayProduct.map((product) => {
      if (indexTest < 4) {
        arrayProductsCategory = {
          ...arrayProductsCategory,
          [product.id]: {
            id: product.id,
            title: product.title,
            image: product.images[0],
            price: product.price,
            category: product.category.name,
          },
        };
      }
      indexTest++;
    });
    indexTest = 0;
  });

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <img
          src="/assets/banner-home-e-commerce.png"
          className="w-55% rounded-md p-20 md:p-8"
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
      <div className="w-[88%] mx-auto mb-32">
        {arrayCategorys.map((category) => (
          <div key={category.id}>
            <div className="flex text-4xl font-medium text-white py-12">
              {category.name}
            </div>
            <div className="flex w-[86%] mx-auto text-white gap-20">
              {arrayProducts.map((products) =>
                products.category.name === category.name &&
                arrayProductsCategory[products.id] ? (
                  <div
                    className="w-[300px] bg-faint_bg_gray block rounded-md relative"
                    key={arrayProductsCategory[products.id].id}
                  >
                    <div className="w-[270px] flex items-center justify-center bg-white rounded-lg border-2 border-gray-400 m-4">
                      <img
                        src={arrayProductsCategory[products.id].image}
                        className="rounded-md"
                      />
                    </div>

                    <div className="text-white pt-1 px-4 mb-8 w-[90%]">
                      <div className="text-md font-medium">
                        {arrayProductsCategory[products.id].title}
                      </div>
                    </div>

                    <div className="text-white w-full bg-red-50 absolute bottom-0">
                      <div className="text-lg font-medium absolute bottom-1 right-3">
                        {formatInputCurrency(
                          arrayProductsCategory[products.id].price
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div className="w-full flex justify-center text-white pt-16 font-medium text-md">
              {" "}
              <Link to={`/e-commerce/categoria/${category.name}`}>
                <div className="hover:underline cursor-pointer">
                  Ver categoria
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
