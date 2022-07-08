import './header.scss';
import { BsMoonFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import {Button, Flex, useColorMode, useColorModeValue} from "@chakra-ui/react";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex bg={useColorModeValue('#fff', 'blueLight')}
        w='100%' alignItems='center' justifyContent='space-between'>
            <h1>Where in the world?</h1>
            <Button onClick={toggleColorMode} bg='transparent'>
                    {colorMode === 'light' && <BsMoonFill />}
                    {colorMode === 'dark' && <BsFillBrightnessHighFill />}
                    {colorMode === 'light' ? ' Dark' : ' Light'} Mode
            </Button>
        </Flex>
    );
}

export default Header;
