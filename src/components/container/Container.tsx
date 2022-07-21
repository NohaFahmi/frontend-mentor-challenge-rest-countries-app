import "./container.scss";
import Header from "../header/Header";
import FilterSearch from "../filter/Filter";
import {
  Container,
  useColorModeValue,
  Box,
  Flex,
  Switch,
} from "@chakra-ui/react";
import CountryDetails from "../country-details/CountryDetails";
import { BrowserRouter, Route } from "react-router-dom";
import {ReactNode} from "react";
type AppContainerType = {
  children: ReactNode
}
const AppContainer = ({children}: AppContainerType) => {
  return (
    <Box h="100%" w="100%" minH="100vh">
      <Header />
      <Container
        maxW="100%"
        h="100%"
        minH="100vh"
        bg={useColorModeValue("grayLight", "blueDark")}
      >
        {children}
      </Container>
    </Box>
  );
};

export default AppContainer;
