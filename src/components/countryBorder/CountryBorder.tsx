import {Tag, useColorModeValue} from "@chakra-ui/react";

const CountryBorder = ({border}: {border: {name: string}}) => {
    return (
        <Tag
            size="lg"
            variant="solid"
            bg={useColorModeValue("grayLight", "blueLight")}
            border={`2px solid ${useColorModeValue("grayDark", "blueLight")}`}
            color={useColorModeValue("grayDark", "grayDark")}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            cursor="pointer"
            w="fit-content"
            h="30px"
            justifyContent="center"
            _hover={{
                opacity: 0.8,
            }}
            key={border.name}
        >
            {border.name}
        </Tag>
    )
}
export default CountryBorder;
