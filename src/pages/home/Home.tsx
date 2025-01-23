import { Header } from '../../components/header/Header'
import { NavigationButton } from '../../components/navigationButton/NavigationButton';
import { ProductsList } from '../../components/productsList/ProductsList';

export function Home () {
    return (
        <div>
            <Header header="Loja da esquina do seu zé"/>
            <NavigationButton nameButton="Login" linkButton="/login" />
            <ProductsList/>
        </div>
    );
}