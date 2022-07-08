import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const colors = {
    transparent: 'transparent',
    blueLight: 'hsl(209, 23%, 22%)',
    blueDark: 'hsl(207, 26%, 17%)',
    blueDarker: 'hsl(200, 15%, 8%)',
    grayDark: 'hsl(0, 0%, 52%)',
    grayLight: 'hsl(0, 0%, 98%)'
};
const fonts = {
    heading: `Nunito Sans','sans-serif'`,
    body: `Nunito Sans','sans-serif'`
};
const theme = extendTheme({
    colors,
    config,
    fonts})

export default theme
