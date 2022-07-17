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
  Tag,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = () => {
  return (
    <Box py="20">
      <Button
        leftIcon={<BsArrowLeft />}
        variant="solid"
        h="40px"
        w="100px"
        mb="10"
      >
        Back
      </Button>
      <HStack
        w="100%"
        maxH="350px"
        h="350px"
        spacing="20"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png"
          w="450px"
          h="100%"
        />
        <Box h="100%" w="100%">
          <Heading
            as="h1"
            size="lg"
            noOfLines={1}
            color={useColorModeValue("blueDarker", "#fff")}
            fontWeight="800"
            mt="5"
            mb="5"
          >
            Germany
          </Heading>
          <Stack direction="row" spacing="10" mb="10">
            <VStack spacing="3">
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

            <VStack spacing="3">
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
          </Stack>
          <HStack>
            <Text
              fontSize="sm"
              color={useColorModeValue("bluDark", "grayLight")}
              fontWeight="600"
              mr="5"
            >
              Border Countries:
            </Text>
            <Tag
              size="lg"
              variant="solid"
              bg={useColorModeValue("grayLight", "blueLight")}
              border={`2px solid ${useColorModeValue("grayDark", "blueLight")}`}
              color={useColorModeValue("grayDark", "grayDark")}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              w="100px"
              h="30px"
              justifyContent="center"
              _hover={{
                opacity: 0.8,
              }}
            >
              France
            </Tag>
            <Tag
              size="lg"
              variant="solid"
              bg={useColorModeValue("grayLight", "blueLight")}
              border={`2px solid ${useColorModeValue("grayDark", "blueLight")}`}
              color={useColorModeValue("grayDark", "grayDark")}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              w="100px"
              h="30px"
              justifyContent="center"
              _hover={{
                opacity: 0.8,
              }}
            >
              France
            </Tag>
            <Tag
              size="lg"
              variant="solid"
              bg={useColorModeValue("grayLight", "blueLight")}
              border={`2px solid ${useColorModeValue("grayDark", "blueLight")}`}
              color={useColorModeValue("grayDark", "grayDark")}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              cursor="pointer"
              w="100px"
              h="30px"
              justifyContent="center"
              _hover={{
                opacity: 0.8,
              }}
            >
              France
            </Tag>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
export default CountryDetails;
