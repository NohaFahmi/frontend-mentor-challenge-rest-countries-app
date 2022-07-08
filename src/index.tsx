import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./context/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </>
);
