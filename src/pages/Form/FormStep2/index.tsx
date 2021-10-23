import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../../components/SelectOption';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/step1');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name} {state.sobrenome}, o que você deseja?</h1>
                <p>Escolha a opção que melhor condiz com o que precisa.</p>

                <hr/>

                <SelectOption
                    title="Quero ser um Produtor"
                    description="Quero publicar meus eventos e vender ingressos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Quero Comprar Ingressos"
                    description="Quero poder curti varios eventos diferentes"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}