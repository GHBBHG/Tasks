import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce";
import { ValuesProduct } from "../../components/valuesProduct";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

export const ECommerceCategory = () => {
  const { categoria } = useParams();
  const { ecommerce } = useEcommerce();
  const { category } = useCategory();
  const arrayProducts: Ecommerce[] = ecommerce.filter(
    (product) => product.category === categoria
  );

  return (
    <div className="block w-full py-12 text-white">
      <div className="px-20 py-12 sm:py-4 text-5xl sm:text-3xl font-medium">
        {category.find((cat) => cat.id === categoria)?.name}
      </div>
      {arrayProducts.map((products) => (
        <div
          className="w-[85%] mx-auto bg-neutral-800 p-2 sm:p-6 my-8 flex sm:block rounded-md"
          key={products.id}
        >
          <div className="w-[15%] sm:w-full flex items-center justify-center bg-white rounded-lg border-2 border-gray-400">
            <img
              src={products.image}
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[60%] sm:w-full text-white p-4">
            <div className="text-xl sm:text-md font-medium">
              {products.title}
            </div>
            <div className="text-base sm:text-xs text-gray-400">
              {products.description}
            </div>
          </div>
          <div className="w-[25%] sm:w-full flex justify-center items-center">
            <ValuesProduct
              price={products.price}
              categoria={products.category}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
