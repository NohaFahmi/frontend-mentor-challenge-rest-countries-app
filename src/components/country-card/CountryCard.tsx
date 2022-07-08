import { useColorModeValue } from "@chakra-ui/react";
import {
  Box,
  Image,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
const CountryCard = () => {
  return (
    <VStack border="1px solid green" h="fit-content" w="300px" spacing="30px">
      <Image
        src="https://via.placeholder.com/150"
        fallbackSrc="https://via.placeholder.com/120"
        htmlWidth="100%"
        h="180px"
      />
      <VStack align="start" w="100%" px="20px" pb="40px">
        <Heading
          as="h1"
          size="md"
          noOfLines={1}
          color={useColorModeValue("blueDarker", "#fff")}
          fontWeight="800"
        >
          Country Name
        </Heading>
        <VStack border="1px solid red" align="start" w="100%">
          <HStack>
            <Heading
              as="h6"
              size="sm"
              noOfLines={1}
              color={useColorModeValue("bluDark", "grayLight")}
              fontWeight="600"
            >
              Population:
            </Heading>
            <Text
              fontSize="sm"
              color={useColorModeValue("grayDark", "grayDark")}
              fontWeight="600"
            >
              (6xl) In love with React & Next
            </Text>
          </HStack>
          <HStack>
            <Heading
              as="h6"
              size="sm"
              noOfLines={1}
              color={useColorModeValue("bluDark", "grayLight")}
              fontWeight="600"
            >
              Population:
            </Heading>
            <Text
              fontSize="sm"
              color={useColorModeValue("grayDark", "grayDark")}
              fontWeight="600"
            >
              (6xl) In love with React & Next
            </Text>
          </HStack>
          <HStack>
            <Heading
              as="h6"
              size="sm"
              noOfLines={1}
              color={useColorModeValue("bluDark", "grayLight")}
              fontWeight="600"
            >
              Population:
            </Heading>
            <Text
              fontSize="sm"
              color={useColorModeValue("grayDark", "grayDark")}
              fontWeight="600"
            >
              (6xl) In love with React & Next
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default CountryCard;
