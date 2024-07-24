import React, 
{ 
  createContext, 
  useReducer, 
  useContext, 
  useState, 
} from 'react';
import * as I from '../Interfaces/Interface'
import { db, auth } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { 
  getDoc, 
  doc, 
  setDoc, 
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const initialData: I.State = {
  alunosAdvertidos: [],
  ocorrencias: [],
  filtro: '',
  data: '',
  email: '',
  password: '',
  userName: '',
  tempo: null
};

const Context = createContext<I.ContextType | undefined>(undefined);

export const ContextReducer = (state: I.State, action: I.Action) => {
  switch (action.type) {
    case I.ContextActions.setAlunosAdvertidos:
      return { ...state, alunosAdvertidos: action.payload };
    case I.ContextActions.setOcorrencias:
      return { ...state, ocorrencias: action.payload };
    case I.ContextActions.setFiltro:
      return { ...state, filtro: action.payload };
    case I.ContextActions.setData:
      return { ...state, data: action.payload };
    case I.ContextActions.setEmail:
      return { ...state, email: action.payload };
    case I.ContextActions.setPassword:
      return { ...state, password: action.payload };
    case I.ContextActions.setUserName:
      return { ...state, userName: action.payload };
    case I.ContextActions.setTempo: 
      return { ...state, tempo: action.payload };
    default:
      return state;
  }
};

const ContextProvider: React.FC<I.ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialData);
  const [user, setUser] = useState<any>(null);
  // const [users, setUsers] = useState<any[]>([null]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  // useEffect(() => {
  //   fetch('http://localhost:3020/ocorrencia')
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch({ type: I.ContextActions.setOcorrencias, payload: data })
  //   })
  //   .catch(err=>toast.error(err));
    
  //   fetch('http://localhost:3020/alunos_advertidos')
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch({ type: I.ContextActions.setAlunosAdvertidos, payload: data })
  //   })
  //   .catch(err=>toast.error(err));
  //   fetch('http://localhost:3020/tempo')
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch({ type: I.ContextActions.setTempo, payload: data
  //   })
  // })  
  // .catch(err=>toast.error(err))
  // }, [
  //   dispatch,
  //   state.ocorrencias,
  //   state.alunosAdvertidos,
  //   state.tempo
  // ])


  const signIn = async(email:string, password:string) => {
    setLoadingUser(false);
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      const userRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUser(data);
      }
      setLoadingUser(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        toast.error('E-mail inválido');
      } else if (errorCode === 'auth/user-disabled') {
        toast.error('Usuário desabilitado');
      } else if (errorCode === 'auth/user-not-found') {
        toast.error('Usuário não encontrado');
      } else if (errorCode === 'auth/wrong-password') {
        toast.error('Senha incorreta');
      } else {
        toast.error(errorMessage);
      }
      setLoadingUser(true);
    });
    
  };

  const signUp = async(email:string, password:string, name:string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name
      });
      const uid = user.uid;
      let lista = {
        name: name,
        email: email,
        avatarUrl: null
      }
      setUser(lista);
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, {
        email,
        name,
      });
      setLoading(false);
      toast.success('Usuário cadastrado com sucesso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        toast.error('E-mail inválido');
      } else if (errorCode === 'auth/weak-password') {
        toast.error('Senha fraca');
      } else if (errorCode === 'auth/email-already-in-use') {
        toast.error('E-mail já cadastrado');
      } else if (errorCode === 'auth/operation-not-allowed') {
        toast.error('Operação não permitida');
      } else {
        toast.error(errorMessage);
      }
      setLoading(false);
    });

  };

  const signOut = () => {
    setUser(null);
  };

  const textWrapFill = (text: string, width: number): string => {
    let lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(' ');
        let line = '';
        while (words.length > 0) {
            if (line.length + words[0].length <= width) {
                line += words.shift() + ' ';
            } else {
                break;
            }
        }
        lines[i] = line.trim();
    }
    return lines.join('\n');
}


  const value = {
    signed: !!user,
    user,
    state,
    dispatch,
    loading,
    setLoading,
    loadingUser,
    setLoadingUser,
    signIn,
    signUp,
    signOut,
    textWrapFill,
  }


  return <Context.Provider value={value}>{ children }</Context.Provider>;
}

export const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a ContextProvider');
  }
  return context;
}

export default ContextProvider;