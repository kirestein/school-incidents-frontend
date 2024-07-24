import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './st3/styles/Globals';
import main from './st3/styles/themes/index';
import Routes from './Routes';
import ContextProvider from './context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryDB';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ThemeProvider theme={ main }>
          <GlobalStyle />
          <ToastContainer autoClose={ 3000 } />
          <Routes/>
        </ThemeProvider>
      </ContextProvider>
    </QueryClientProvider>
    
  );
}

export default App;
