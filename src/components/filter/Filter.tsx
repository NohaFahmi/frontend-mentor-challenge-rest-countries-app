import {
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import "./filter.scss";
import {useEffect, useState} from "react";
const FilterSearch = ({onSearch, onFilter}: {onSearch: (searchKeyword: string) => void, onFilter: (region: string) => void}) => {
  const menuIcon = <Icon as={FiChevronDown} />;
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  useEffect(() => {
    onSearch(searchKeyword)
  }, [searchKeyword])
  return (
    <Flex
      alignItems="center"
      gap="4"
      justifyContent="space-between"
      flexWrap="wrap"
      mb="40px"
      pt="40px"
    >
      <Box w="40%" minW="350px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input
            placeholder="Search for a country..."
            bg={useColorModeValue("#fff", "blueLight")}
            border="none"
            _placeholder={{ color: "white" }}
            value={searchKeyword}
            onChange={ (e) => {
              setSearchKeyword(e.target.value)
            }}
          />
        </InputGroup>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={menuIcon}
            bg={useColorModeValue("#fff", "blueLight")}
            _hover={{
              backgroundColor: `${useColorModeValue(
                "hsl(0, 0%, 98%, 0.8)",
                "hsl(209, 23%, 22%, 0.8)"
              )}`,
            }}
            _active={{
              backgroundColor: `${useColorModeValue(
                "hsl(0, 0%, 98%, 0.8)",
                "hsl(209, 23%, 22%, 0.8)"
              )}`,
            }}
          >
            {selectedRegion ? selectedRegion : 'Filter by Region'}
          </MenuButton>
          <MenuList border="none" bg={useColorModeValue("#fff", "blueLight")}>
            <MenuItem onClick={() => {
              onFilter('all');
              setSelectedRegion('')
            }}>All</MenuItem>
            <MenuItem onClick={() => {
              onFilter('africa');
              setSelectedRegion('Africa');
            }}>Africa</MenuItem>
            <MenuItem onClick={() => {
                onFilter('americas')
              setSelectedRegion('Americas');
            }}>Americas</MenuItem>
            <MenuItem onClick={() => {
              onFilter('asia');
              setSelectedRegion('Asia');
            }}>Asia</MenuItem>
            <MenuItem onClick={() => {
              onFilter('europe');
              setSelectedRegion('Europe')
            }}>Europe</MenuItem>
            <MenuItem onClick={() => {
              onFilter('oceania');
              setSelectedRegion('Oceania')
            }}>Oceania</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default FilterSearch;
