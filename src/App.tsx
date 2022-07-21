import './App.scss';
import AppContainer from './components/container/Container';
import ThemeContextProvider from './context/themeContext';
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./context/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilterSearch from "./components/filter/Filter";
import CountryDetails from "./components/country-details/CountryDetails";
import CountriesList from "./components/countries-list/CountriesList";

function App() {
  return (
      <ChakraProvider theme={theme}>
          <BrowserRouter>

          <div className="app">
        <div className='app-container'>
          <AppContainer>
              <Routes>
                  <Route path='/' element={
                      <>
                          <FilterSearch/>
                          <CountriesList/>
                      </>
                  }/>
                  <Route path='/country/:id' element={
                      <CountryDetails/>
                  }/>
              </Routes>
          </AppContainer>
        </div>
    </div>
          </BrowserRouter>

      </ChakraProvider>

  );
}

export default App;
