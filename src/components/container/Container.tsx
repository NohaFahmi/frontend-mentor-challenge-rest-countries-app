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

const AppContainer = ({children}: {children: ReactNode}) => {
  return (
    <Box w='100%' h='100%' bg={useColorModeValue("grayLight", "blueDark")}>
      <Header />
      <Container
        maxW="100%"
        bg={useColorModeValue("grayLight", "blueDark")}
      >
        {children}
      </Container>
    </Box>
  );
};

export default AppContainer;
