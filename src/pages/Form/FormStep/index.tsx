import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { ThemeLogin } from '../../../components/ThemeLogin';
import { ChangeEvent,  } from 'react';

export const FormStep = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

   

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSenha,
            payload: e.target.value
        });
    }
    const handleSenha2Change = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSenha2,
            payload: e.target.value
        });
    }


    return (
        <ThemeLogin>
            <C.Container>
                
                <h1>Digite seus dados de Login</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Digite sua senha
                    <input
                        type="password"
                        value={state.senha}
                        onChange={handleSenhaChange}
                    />
                </label>
               
                <Link to="/" className="backButton">Sair</Link>
                <button onClick={handleNextStep}>Fazer Login</button>
            </C.Container>
        </ThemeLogin>
    );
}