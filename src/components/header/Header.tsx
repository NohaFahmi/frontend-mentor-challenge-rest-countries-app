import "./header.scss";
import { BsMoonFill, BsFillBrightnessHighFill } from "react-icons/bs";
import {
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg={useColorModeValue("#fff", "blueLight")}
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Container
        maxW="100%"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          as="h1"
          size="md"
          noOfLines={1}
          color={useColorModeValue("blueDarker", "#fff")}
        >
          Where in the world?
        </Heading>
        <Button onClick={toggleColorMode} bg="transparent" display='flex' justifyContent='center' alignItems='center' gap='10px'>
          {colorMode === "light" && <BsMoonFill />}
          {colorMode === "dark" && <BsFillBrightnessHighFill />}
          {colorMode === "light" ? " Dark" : " Light"} Mode
        </Button>
      </Container>
    </Flex>
  );
};

export default Header;
