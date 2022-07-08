import './App.scss';
import AppContainer from './components/container/Container';
import ThemeContextProvider from './context/themeContext';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./context/theme";

function App() {
  return (
      <ChakraProvider theme={theme}>
    <div className="app">
      {/*<ThemeContextProvider>*/}
        <div className='app-container'>
          <AppContainer/>
        </div>
      {/*</ThemeContextProvider>*/}
    </div>

      </ChakraProvider>
      
  );
}

export default App;
