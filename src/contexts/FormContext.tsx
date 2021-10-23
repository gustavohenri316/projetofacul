// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
    sobrenome: string;
    nasc: string;
    cpfs: string;
    end: string;
    ceps: string;
    cidade: string;
    estado: string;
    pais: string;
    cel: string;
    senha: string,
    senha2: string;
}
type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
    sobrenome: '',
    nasc: '',
    cpfs: '',
    end: '',
    ceps: '',
    cidade: '',
    estado: '',
    pais: '',
    cel: '',
    senha: '',
    senha2: '',
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub,
    setPais,
    setCeps,
    setEstado,
    setCel,
    setCidade,
    setCpfs,
    setNasc,
    setSobrenome,
    setEnd,
    setSenha2,
    setSenha
}
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setNasc:
            return { ...state, nasc: action.payload };
        case FormActions.setCpfs:
            return { ...state, ceps: action.payload };
        case FormActions.setEnd:
            return { ...state, end: action.payload };
        case FormActions.setSobrenome:
            return { ...state, sobrenome: action.payload };
        case FormActions.setNasc:
            return { ...state, nasc: action.payload };
        case FormActions.setCpfs:
            return { ...state, cpfs: action.payload };
        case FormActions.setCidade:
            return { ...state, cidade: action.payload };
        case FormActions.setEstado:
            return { ...state, estado: action.payload };
        case FormActions.setCel:
            return { ...state, cel: action.payload };
        case FormActions.setCeps:
            return { ...state, ceps: action.payload };
        case FormActions.setPais:
            return { ...state, pais: action.payload };
        case FormActions.setSenha:
            return { ...state, senha: action.payload };
        case FormActions.setSenha2:
            return { ...state, senha2: action.payload };


        default:
            return state;
    }
}

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}