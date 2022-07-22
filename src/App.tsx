import './App.scss';
import AppContainer from './components/container/Container';
import ThemeContextProvider from './context/themeContext';
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./context/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilterSearch from "./components/filter/Filter";
import CountryDetails from "./components/country-details/CountryDetails";
import CountriesList from "./components/countries-list/CountriesList";
import {useEffect, useState} from "react";
import {CountriesService} from "./services/countries";
import {ICountry} from "./interfaces/countries.interface";

function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    useEffect(() => {
        CountriesService().getAllCountries().then((countries) => {
            setCountries(countries);
        });
    }, [])
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
                          {countries.length > 0 &&  <CountriesList countriesList={countries}/>}
                      </>
                  }/>
                  <Route path='/country/:code' element={
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
