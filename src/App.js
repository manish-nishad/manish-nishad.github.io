import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import MainPage from './Pages/MainPage';
// import { Provider } from '@/components/ui/provider';

function App({ Components, pageProps }) { 
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
    
  )
}

export default App;
