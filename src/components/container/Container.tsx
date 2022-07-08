import './container.scss';
import Header from "../header/Header";
import FilterSearch from "../filter/Filter";
import { Container, useColorModeValue, Box } from '@chakra-ui/react';

const AppContainer = () => {
  return (
    <Box h='100%' w='100%' minH='100vh'>
      <Header/>
 
      <Container maxW='100%' h='100%' minH='100vh' bg={useColorModeValue('grayLight', 'blueDark')}>
      <FilterSearch/>
      </Container>
    </Box>
    
  );
};

export default AppContainer;
