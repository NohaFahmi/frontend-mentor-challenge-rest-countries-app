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
import {ICountry} from "../../interfaces/countries.interface";
const CountryCard = ({country}: {country: ICountry}) => {
  return (
      <VStack h="fit-content" w="290px" spacing="30px" bg={useColorModeValue('#fff', 'blueLight')} borderRadius='10px' boxShadow={`2px 2px 2px ${useColorModeValue('lightGrey', '#2b3945')}`}>
        <Image
            src={country.flags.svg}
            fallbackSrc="https://via.placeholder.com/120"
            w='100%'
            h="180px"
            objectFit='cover'
            borderRadius='10px 10px 0 0'
        />
        <VStack align="start" w="100%" px="20px" pb="40px" bg={useColorModeValue('#fff', 'blueLight')} borderRadius='0 0 10px 10px '>
          <Heading
              as="h1"
              size="md"
              noOfLines={1}
              color={useColorModeValue("blueDarker", "#fff")}
              fontWeight="800"
          >
            {country.name}
          </Heading>
          <VStack align="start" w="100%">
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
                {country.population}
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
                Region:
              </Heading>
              <Text
                  fontSize="sm"
                  color={useColorModeValue("grayDark", "grayDark")}
                  fontWeight="600"
              >
                {country.region}
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
                Capital:
              </Heading>
              <Text
                  fontSize="sm"
                  color={useColorModeValue("grayDark", "grayDark")}
                  fontWeight="600"
              >
                {country.capital}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
  );
};

export default CountryCard;
