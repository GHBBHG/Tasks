import { Ecommerce } from "../../entities/Ecommerce";
import { useEcommerce } from "../../hooks/useEcommerce"

export const ECommerce = () => {
    const { ecommerce } = useEcommerce();
    const arrayProducts: Ecommerce[] =
        ecommerce.filter((product) => product.id);
    
    console.log("teste:", arrayProducts);
    
    return (
        <div className="flex w-full h-40 text-white">
            teste
            {/* 
            {arrayProducts.map((products) => {
                {products.title}       
            })} 
            */}
        </div>
    )
}