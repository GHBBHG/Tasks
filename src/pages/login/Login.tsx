import { Header } from '../../components/header/Header'
import { NavigationButton } from '../../components/navigationButton/NavigationButton';

export function Login () {
    return (
        <div>
            <Header header="Login"/>
            <NavigationButton nameButton="Voltar" linkButton="/" />           
            <div className='text-center m-5 p-4'>
                <label>Email</label><br></br>
                <textarea className="border-2 p-1 text-center" rows="1" placeholder="xxxxxxxxx@xxxx.xxx" name="codEmail" id="codEmail"></textarea>
                <br></br>
                <label>Senha</label><br></br>
                <textarea className="border-2 p-1 text-center" rows="1" placeholder="***********" name="codSenha" id="codSenha"></textarea>
                <br></br>
                <button className='border-2 p-2'>Entrar</button>
                <br></br>
                <p>Não tem uma conta? <a href="/registrar" className='text-blue-700'>Registre-se</a></p>
            </div>
        </div>
    );
}