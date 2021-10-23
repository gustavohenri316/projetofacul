import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

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
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Escolha sua senha
                    <input
                        type="password"
                        value={state.senha}
                        onChange={handleSenhaChange}
                    />
                </label>
                <label>
                    Repita sua senha
                    <input
                        type="password"
                        value={state.senha2}
                        onChange={handleSenha2Change}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}