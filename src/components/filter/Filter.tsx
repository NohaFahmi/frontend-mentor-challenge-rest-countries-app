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
    Box, Flex, useColorModeValue
} from "@chakra-ui/react";
import {FiChevronDown} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
import './filter.scss';
const FilterSearch = () => {
    const menuIcon = <Icon as={FiChevronDown} />;
    return (
        <Flex alignItems='center' gap='4' justifyContent='space-between' flexWrap='wrap' mb='40px' pt='40px' border='1px solid red'>
            <Box w='40%' minW='350px'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<AiOutlineSearch />}
                    />
                    <Input placeholder='Search for a country...'
                           bg={useColorModeValue('#fff', 'blueLight')}
                    border='none' _placeholder={{ color: 'white' }}/>
                </InputGroup>
            </Box>
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={menuIcon} 
                    bg={useColorModeValue('#fff', 'blueLight')}
                    _hover={{backgroundColor: `${useColorModeValue('hsl(0, 0%, 98%, 0.8)', 'hsl(209, 23%, 22%, 0.8)')}`}}
                    _active={{backgroundColor: `${useColorModeValue('hsl(0, 0%, 98%, 0.8)', 'hsl(209, 23%, 22%, 0.8)')}`}}>
                        Filter by Region
                    </MenuButton>
                    <MenuList border='none'  bg={useColorModeValue('#fff', 'blueLight')}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

        </Flex>
    )
}
export default FilterSearch;
