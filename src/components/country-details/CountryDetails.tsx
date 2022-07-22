import {
  Box,
  HStack,
  Image,
  Heading,
  Text,
  useColorModeValue,
  Stack,
  VStack,
  Button,
  Tag, Flex,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CountriesService} from "../../services/countries";
import {ICountry} from "../../interfaces/countries.interface";
import CountryBorder from "../countryBorder/CountryBorder";

const CountryDetails = () => {
  const countryCode = useParams()['code'];
  const [country, setCountry] = useState<ICountry>();
  const [borderCountries, setBorderCountries] = useState<{name: string}[]>([]);

  useEffect(() => {
    if(countryCode) {
      CountriesService().getCountryByCode(countryCode).then((country) => {
        if(country.borders) {
          CountriesService().getCountryBorders(country.borders).then((borders) => {
            setCountry(country);
            setBorderCountries(borders);
          })
        } else {
          setCountry(country);
        }

      })
    }
  }, [])
    // @ts-ignore
  return (
        <Box py="20">
          <Link to='/'>
            <Button
                leftIcon={<BsArrowLeft />}
                variant="solid"
                h="40px"
                w="100px"
                mb="10">
              Back
            </Button>
          </Link>
          {
            country &&
              <Flex
                  w="100%"
                  maxH="350px"
                  h="350px"
                  gap="10"
                  direction='row'
                  justifyContent="center"
                  alignItems="center"
                  wrap='wrap'
              >
                <Image
                    src={country?.flags.svg}
                    w="450px"
                    h="100%"
                    objectFit='fill'
                />
                <Box h="100%" w='50%'>
                  <Heading
                      as="h1"
                      size="lg"
                      noOfLines={1}
                      color='blueDarker'
                      _dark={{color: '#fff'}}
                      fontWeight="800"
                      mt="5"
                      mb="5"
                  >
                    {country.name}
                  </Heading>
                  <Stack direction="row" spacing="10" mb="10">
                    <VStack spacing="3" alignItems='flex-start'>
                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Native name
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600"
                        >
                          {country.nativeName}
                        </Text>
                      </HStack>
                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Population:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
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
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Region:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
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
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Sub Region:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600"
                        >
                          {country.subregion}
                        </Text>
                      </HStack>

                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Capital:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600"
                        >
                          {country.capital}
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack spacing="3" alignItems='flex-start'>
                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Top Level Domain:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600"
                        >
                          {country.topLevelDomain}
                        </Text>
                      </HStack>

                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark={{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Currencies:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600">
                          {country.currencies.map((curr, index) => {
                            return index === country.currencies.length-1 ? curr.name : curr.name
                          })}
                        </Text>
                      </HStack>

                      <HStack>
                        <Heading
                            as="h6"
                            size="sm"
                            noOfLines={1}
                            color='bluDark'
                            _dark = {{color: 'grayLight'}}
                            fontWeight="600"
                        >
                          Languages:
                        </Heading>
                        <Text
                            fontSize="sm"
                            color='grayDark'
                            fontWeight="600"
                        >
                          {country.languages.map((lang, index) => {
                            return index === country.languages.length-1 ? lang.name : lang.name
                          })}
                        </Text>
                      </HStack>
                    </VStack>
                  </Stack>
                  <Flex flexWrap='wrap' gap='10px' direction='row'>
                    <Text
                        fontSize="sm"
                        color='bluDark'
                        _dark = {{color: 'grayLight'}}
                        fontWeight="600"
                    >
                      Border Countries:
                    </Text>

                    {country.borders && borderCountries.map((border) =>
                        <CountryBorder border={border} key={border.name} />
                    )}
                  </Flex>
                </Box>
              </Flex>
          }

        </Box>
    );
};
export default CountryDetails;
