import {Container, useColorModeValue, Box, Flex, HStack} from "@chakra-ui/react";
import CountryCard from "../country-card/CountryCard";
import {Link} from "react-router-dom";


const CountriesList = () => {
  return (
    <HStack wrap='wrap' spacing='0'>
      <Link to='/country/1'>
          <CountryCard/>
      </Link>
        <Link to='/country/1'>
            <CountryCard/>
        </Link>
        <Link to='/country/1'>
            <CountryCard/>
        </Link>
        <Link to='/country/1'>
            <CountryCard/>
        </Link>
    </HStack>
  );
};

export default CountriesList;
