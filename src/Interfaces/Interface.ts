interface State {
  alunosAdvertidos: string[];
  ocorrencias: string[];
  filtro: string;
  data: string;
  email: string;
  password: string;
  userName: string;
  tempo: any;
}

interface Action {
  type: ContextActions;
  payload: any;
}

export enum ContextActions {
  setAlunosAdvertidos,
  setOcorrencias,
  setFiltro,
  setData,
  setEmail,
  setPassword,
  setUserName,
  setTempo,
}

interface ContextType {
  state: State;
  dispatch: (action: Action) => void;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string, name: string) => void;
  signed: boolean;
  user: any;
  loading: boolean;
  loadingUser: boolean;
  setLoading: (loading: boolean) => void;
  setLoadingUser: (loadingUser: boolean) => void;
  signOut: () => void;
  textWrapFill: (text: string, width: number) => string;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

interface IChildrenProps {
  children: React.ReactNode;
}

interface IOcorrenciasComponentProps {
  message: string;
  name: string;
  data: string;
}

interface IAdvertenciasComponentProps {
  message: string;
  name: string;
}

interface IContentHeaderProps {
    title: string;
    linecolor: string;
    children: React.ReactNode;
    children2?: React.ReactNode;
}

interface IInputProps {
    name: string;
    setName: (name: string) => void;
    type?: string
}

export type {
  Action,
  ContextType,
  ContextProviderProps,
  State,
  IChildrenProps,
  IOcorrenciasComponentProps,
  IAdvertenciasComponentProps,
  IContentHeaderProps,
  IInputProps,
};
