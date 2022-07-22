import {Container, useColorModeValue, Box, Flex, HStack} from "@chakra-ui/react";
import CountryCard from "../country-card/CountryCard";
import {Link} from "react-router-dom";
import {ICountry} from "../../interfaces/countries.interface";

const CountriesList = ({countriesList}: {countriesList: ICountry[]}) => {
  return (
    <Flex wrap='wrap' gap='10' dir='row' justifyContent='space-evenly'>
        {countriesList.map((country) => {
           return(
               <Link to={`/country/${country.alpha2Code}`} key={country.nativeName}>
                   <CountryCard country={country}/>
               </Link>
           )
        })}
    </Flex>
  );
};

export default CountriesList;
