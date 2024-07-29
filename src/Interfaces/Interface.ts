interface State {
  alunosAdvertidos: {
    [key: string]: {
      columns: object[];
      rows: object[];
    };
  };
  ocorrencias: {
    [key: string]: {
      columns: object[];
      rows: object[];
    };
  };
  filtro: string;
  data: string;
  email: string;
  password: string;
  userName: string;
  tempo: any;
  open: boolean;
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
  setOpen,
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
  getTempo: () => void;
  getAlunosAdvertidos: () => void;
  getOcorrencias: () => void;
  data: any;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

interface IChildrenProps {
  children: React.ReactNode;
}

interface IContentHeaderProps {
  title: string;
  linecolor: string;
  children?: React.ReactNode;
  children2?: React.ReactNode;
}

interface IInputProps {
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  accept?: string;
}

interface Ocorrencia {
  id: number;
  data: string;
  email: string;
  aluno: string;
  turma: string;
  motivo: string;
  advertido: string;
  professor: string;
}

interface OcorrenciasData {
  columns: Array<{ field: string; headerName: string; type: string; width: number }>;
  rows: Ocorrencia[];
}

export type {
  Action,
  ContextType,
  ContextProviderProps,
  State,
  IChildrenProps,
  IContentHeaderProps,
  IInputProps,
  OcorrenciasData,
  Ocorrencia,
};
