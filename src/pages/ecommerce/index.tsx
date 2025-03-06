import { Menu, Search } from "lucide-react";
import { useEcommerce } from "../../hooks/useEcommerce";
import { formatInputCurrency } from "../../utils/validators";
import { useCategory } from "../../hooks/useCategory";
import { Link } from "react-router-dom";

type ArrayProductsCategory = Record<
  number,
  {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
  }
>;

export const ECommerce = () => {
  let arrayProductsCategory: ArrayProductsCategory = {};
  const { ecommerce } = useEcommerce();
  const { category } = useCategory();
  let i = 0;

  category.map((category) => {
    ecommerce
      .filter((product) => product.category === category.id)
      .map((product) => {
        if (i < 4) {
          arrayProductsCategory = {
            ...arrayProductsCategory,
            [product.id]: {
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              category: product.category,
            },
          };
        } else return;
        i++;
      });
    i = 0;
  });

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <img
          src="/assets/banner-home-e-commerce.png"
          className="rounded-md p-20 md:p-8"
        />
      </div>

      <div className="flex w-full justify-center items-center">
        <input
          className="w-[34%] sm:w-[70%] h-12 rounded-l-full bg-faint_bg_gray text-white p-4 text-xl placeholder:text-gray-400 outline-none"
          placeholder="Buscar produtos"
        ></input>

        <button className="w-[50px] h-12 rounded-r-full bg-faint_bg_gray text-white text-xl pr-5 flex justify-end items-center">
          <Search color="oklch(0.707 0.022 261.325)" />
        </button>

        <Menu color="white" width={40} height={40} className="cursor-pointer" />
      </div>
      <div className="w-[88%] mx-auto mb-32">
        {category.map((category) => (
          <div key={category.id}>
            <div className="flex text-4xl sm:text-2xl font-medium text-white py-12 sm:py-8">
              {category.name}{" "}
              {category.discount > 0 ? (
                <div className="flex text-live_green text-sm items-end pl-2">
                  {category.discount + "% OFF"}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex w-[86%] sm:w-full mx-auto text-white justify-center sm:justify-start gap-20 sm:gap-4 overflow-auto">
              {ecommerce.map((products) =>
                category.id === products.category &&
                arrayProductsCategory[products.id] ? (
                  <div
                    className="w-[300px] sm:w-[138px] bg-faint_bg_gray block rounded-md relative sm:my-3"
                    key={arrayProductsCategory[products.id].id}
                  >
                    <div className="w-[270px] sm:w-[130px] flex items-center justify-center bg-white rounded-lg border-2 border-gray-400 m-4 sm:m-1">
                      <img
                        src={arrayProductsCategory[products.id].image}
                        className="rounded-md"
                      />
                    </div>

                    <div className="text-white pt-1 px-4 mb-12 w-[90%]">
                      <div className="text-md sm:text-sm font-medium">
                        {arrayProductsCategory[products.id].title}
                      </div>
                    </div>

                    <div className="text-white w-full bg-red-50 absolute bottom-0">
                      {category.discount > 0 ? (
                        <div className="text-md absolute bottom-6 right-3 text-gray-400 line-through decoration-gray-200 decoration-1">
                          {formatInputCurrency(
                            arrayProductsCategory[products.id].price
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="text-lg font-medium absolute bottom-1 right-3">
                        {formatInputCurrency(
                          arrayProductsCategory[products.id].price -
                            arrayProductsCategory[products.id].price *
                              (category.discount / 100)
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div className="w-full flex justify-center text-white pt-16 sm:pt-6 font-medium text-md">
              {" "}
              <Link to={`/e-commerce/categoria/${category.id}`}>
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
