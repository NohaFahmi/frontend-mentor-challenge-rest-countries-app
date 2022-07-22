import './App.scss';
import AppContainer from './components/container/Container';
import {ChakraProvider, Heading, HStack, Spinner, VStack, Icon} from '@chakra-ui/react'
import theme from "./context/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilterSearch from "./components/filter/Filter";
import CountryDetails from "./components/country-details/CountryDetails";
import CountriesList from "./components/countries-list/CountriesList";
import {useEffect, useState} from "react";
import {CountriesService} from "./services/countries";
import {ICountry} from "./interfaces/countries.interface";
import {FaSearch} from "react-icons/fa";

function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showEmpty, setShowEmpty] = useState<boolean>(false);
    useEffect(() => {
        CountriesService().getAllCountries().then((countries) => {
            setCountries(countries);
        });
    }, [])
    const searchCountries = (countryName: string) => {
        if(countryName) {
            setIsLoading(true);
            CountriesService().filterCountriesByName(countryName).then((countries) => {
               if(!countries[0]) {
                   setShowEmpty(true );
               } else {
                   setShowEmpty(false);
               }
                setFilteredCountries(countries);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
            });
        } else {
            setIsLoading(true);
            setFilteredCountries([]);
            setIsLoading(false);
            setShowEmpty(false);
        }
    }
    const filterByRegion = (region: string) => {
        if(region === 'all') {
            setIsLoading(true);
            setFilteredCountries([]);
            setIsLoading(false);
        } else {
            setIsLoading(true);
            CountriesService().getCountriesInRegion(region).then((countries)=> {
                setFilteredCountries(countries);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
            });
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
                          {filteredCountries.length === 0 && countries.length > 0 && !showEmpty &&
                              <CountriesList countriesList={countries}/>
                          }
                          {showEmpty &&
                              <VStack justifyContent='center' alignItems='center' p='20'>
                                  <Icon as={FaSearch} fontSize='32px'/>
                                  <Heading>No Countries Found!!</Heading>
                              </VStack>}
                          {countries.length > 0 && filteredCountries.length > 0 && !showEmpty && !isLoading &&
                              <CountriesList countriesList={filteredCountries}/>
                          }
                          {isLoading && !showEmpty && <HStack justifyContent='center' mt='20'>
                              <Spinner
                                  thickness='4px'
                                  speed='0.65s'
                                  emptyColor='red.200'
                                  color='red.500'
                                  size='xl'/>
                          </HStack>}
                          {countries.length === 0 && !showEmpty && <HStack justifyContent='center' mt='20'>
                              <Spinner
                                  thickness='4px'
                                  speed='0.65s'
                                  emptyColor='red.200'
                                  color='red.500'
                                  size='xl'/>
                          </HStack>}


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
