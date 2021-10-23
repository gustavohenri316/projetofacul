import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }
    const handleNextLogin = () => {
            history.push('/step')
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    const handleSobrenomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSobrenome,
            payload: e.target.value
        });
    }
    const handleNascChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNasc,
            payload: e.target.value
        });
    }
    const handleCpfsChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCpfs,
            payload: e.target.value
        });
    }
    const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEnd,
            payload: e.target.value
        });
    }
    const handleCepsChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCeps,
            payload: e.target.value
        });
    }
    const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCidade,
            payload: e.target.value
        });
    }
    const handleEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEstado,
            payload: e.target.value
        });
    }
    const handlePaisChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPais,
            payload: e.target.value
        });
    }
    const handleCelChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCel,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <h1>Ja tem cadastro?</h1>
                <button onClick={handleNextLogin}>Fazer Login</button>
                <hr/>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seus dados principais</h1>
                <p>Preencha todos os campo abaixo.</p>

                <hr />

                <label>
                    Seu nome
                    <input
                        type="text"
                        placeholder="Ex: Bruno "
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Seu sobre nome
                    <input
                        type="text"
                        placeholder="Ex: Oliveira "
                        value={state.sobrenome}
                        onChange={handleSobrenomeChange}
                    />
                </label>
                <label>
                    Sua idade da nascimento
                    <input
                        type="date"
                        value={state.nasc}
                        onChange={handleNascChange}
                    />
                </label>
                <label>
                    Seu CPF
                    <input
                        type="text"
                        placeholder="000.000.000-00"
                        value={state.cpfs}
                        onChange={handleCpfsChange}
                    />
                </label>

                <label>
                    Seu endereço
                    <input
                        type="text"
                        placeholder="Ex: RUA IGUATEMI, 252 ,ITAIM BIBI "
                        value={state.end}
                        onChange={handleEndChange}
                    />
                </label>
                <label>
                    CEP
                    <input
                        type="text"
                        placeholder="99999-999"
                        value={state.ceps}
                        onChange={handleCepsChange}
                    />
                </label>
                <label>
                    Cidade
                    <input
                        type="text"
                        placeholder="Ex: São Paulo"
                        value={state.cidade}
                        onChange={handleCidadeChange}
                    />
                </label>
                <label>
                    Estado
                    <input
                        type="text"
                        placeholder="Ex: São Paulo"
                        value={state.estado}
                        onChange={handleEstadoChange}
                    />
                </label>
                <label>
                    Pais
                    <input
                        type="text"
                        placeholder="Ex: Estados Unidos"
                        value={state.pais}
                        onChange={handlePaisChange}
                    />
                </label>
                <label>
                    Celular
                    <input
                        type="text"
                        placeholder="(99) 99999-9999"
                        value={state.cel}
                        onChange={handleCelChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}