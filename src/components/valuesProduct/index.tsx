import { useState } from "react";
import { formatInputCurrency } from "../../utils/validators";
import { Category } from "../../entities/Category";
import { useCategory } from "../../hooks/useCategory";

interface ValuesProductProps {
  price: number;
  categoria: string;
}

export const ValuesProduct = ({ price, categoria }: ValuesProductProps) => {
  const { category } = useCategory();
  const [quantityOfProduct, setQuantityOfProduct] = useState(0);
  const arrayCategory: Category[] = category.filter(
    (category) => category.name === categoria
  );

  const valueDiscountCategory = (value: number) => {
    const valueDiscount = value * (arrayCategory[0].discount / 100);
    return formatInputCurrency(value - valueDiscount);
  };

  return (
    <div className="block text-center">
      {arrayCategory[0].discount > 0 ? (
        <div>
          <div className="text-xs text-green-400 ">
            {arrayCategory[0].discount}% OFF
          </div>
          <div className="text-xl text-gray-400 line-through decoration-gray-200 decoration-2">
            {formatInputCurrency(price)}
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={`text-3xl font-medium ${
          quantityOfProduct > 0 ? "text-white" : "text-gray-300"
        }`}
      >
        {valueDiscountCategory(
          price * (quantityOfProduct > 0 ? quantityOfProduct : 1)
        )}
      </div>
      <div className="flex mt-8 sm:mt-4 justify-center">
        <div
          className="text-4xl font-bold rounded-l-full w-12 h-12 flex items-center justify-center cursor-pointer bg-red-500 select-none"
          onClick={() => {
            if (quantityOfProduct > 0)
              setQuantityOfProduct(
                (quantityOfProduct) => quantityOfProduct - 1
              );
          }}
        >
          -
        </div>
        <div className="text-2xl font-medium flex items-center justify-center w-16 bg-neutral-700 select-none">
          {quantityOfProduct}
        </div>
        <div
          className="text-4xl font-bold rounded-r-full w-12 h-12 flex items-center justify-center cursor-pointer bg-green-500 select-none"
          onClick={() => {
            setQuantityOfProduct((quantityOfProduct) => quantityOfProduct + 1);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};
