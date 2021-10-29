import { Link } from 'react-router-dom';
import * as C from './styles';

export const Header = () => {
    return (
        <C.Container>
            <h1>Login</h1>
            <p>Não tem uma conta? <Link to={'/step1'}>Registre</Link></p>
        </C.Container>
    );
}