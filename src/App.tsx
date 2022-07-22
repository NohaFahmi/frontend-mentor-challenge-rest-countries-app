import './App.scss';
import AppContainer from './components/container/Container';
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
    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
    useEffect(() => {
        CountriesService().getAllCountries().then((countries) => {
            setCountries(countries);
        });
    }, [])
    const searchCountries = (countryName: string) => {
        if(countryName) {
            CountriesService().filterCountriesByName(countryName).then((countries) => {
                setFilteredCountries(countries)
            });
        } else {
            setFilteredCountries([]);
        }
    }
    const filterByRegion = (region: string) => {
        if(region === 'all') {
            setFilteredCountries([]);
        } else {
            CountriesService().getCountriesInRegion(region).then((countries)=> {
                setFilteredCountries(countries);
            })
        }
    }
  return (
      <ChakraProvider theme={theme}>
          <BrowserRouter>
          <div className="app">
        <div className='app-container'>
          <AppContainer>
              <Routes>
                  <Route path='/' element={
                      <>
                          <FilterSearch onSearch={(keyword) => {
                              searchCountries(keyword)
                          }} onFilter={(region) => {
                              filterByRegion(region)
                          }}/>
                          {countries.length > 0 &&  <CountriesList countriesList={filteredCountries.length > 0 ? filteredCountries : countries}/>}
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
