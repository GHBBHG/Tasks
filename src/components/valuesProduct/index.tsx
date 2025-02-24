import { useState } from "react";
import { formatInputCurrency } from "../../utils/validators";

type CountProduct = Record<number, { quantity: number }>;

export const ValuesProduct = (product: any) => {
  const products = product.product;
  const [test, setTest] = useState(0);
  let countProduct: CountProduct = {};
  const categoryDiscount = (product: string) => {
    if (product === "Roupas") return "20% OFF";
    if (product === "Variados") return "15% OFF";
    if (product === "Mobilidade") return "10% OFF";
    if (product === "Moveis") return "2% OFF";
    return "";
  };

  const valueCategoryDiscount = (category: string, value: number) => {
    if (category === "Roupas") return formatInputCurrency(value * 8);
    if (category === "Variados") return formatInputCurrency(value * 8.5);
    if (category === "Mobilidade") return formatInputCurrency(value * 9);
    if (category === "Moveis") return formatInputCurrency(value * 9.8);

    return formatInputCurrency(value);
  };

  const isDiscount = (category: string) => {
    if (
      category === "Roupas" ||
      category === "Variados" ||
      category === "Mobilidade" ||
      category === "Moveis"
    )
      return true;
    return false;
  };

  return (
    <div className="block text-center">
      <div className="text-xs text-green-400 ">
        {categoryDiscount(products.category.name)}
      </div>
      {isDiscount(products.category.name) ? (
        <div className="text-xl text-gray-400 line-through decoration-white decoration-2">
          R${products.price}
        </div>
      ) : (
        ""
      )}
      <div className="text-3xl text-gray-200 font-medium">
        {valueCategoryDiscount(products.category.name, products.price / 10)}
      </div>
      <div className="flex mt-8 justify-center">
        <div
          className="text-4xl font-bold rounded-l-full w-12 h-12 flex items-center justify-center cursor-pointer bg-red-500"
          onClick={() => {
            setTest(test - 1);
          }}
        >
          -
        </div>
        <div className="text-2xl font-medium flex items-center justify-center w-16 bg-neutral-700">
          {test}
        </div>
        <div
          className="text-4xl font-bold rounded-r-full w-12 h-12 flex items-center justify-center cursor-pointer bg-green-500"
          onClick={() => {
            setTest(test + 1);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};
