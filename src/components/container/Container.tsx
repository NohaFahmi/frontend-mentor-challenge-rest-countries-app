import "./container.scss";
import Header from "../header/Header";
import FilterSearch from "../filter/Filter";
import { Container, useColorModeValue, Box, Flex } from "@chakra-ui/react";
import CountryCard from "../country-card/CountryCard";
import CountryDetails from "../country-details/CountryDetails";

const AppContainer = () => {
  return (
    <Box h="100%" w="100%" minH="100vh">
      <Header />
      <Container
        maxW="100%"
        h="100%"
        minH="100vh"
        bg={useColorModeValue("grayLight", "blueDark")}
      >
        {/* <FilterSearch /> */}
        <CountryDetails />
      </Container>
    </Box>
  );
};

export default AppContainer;
